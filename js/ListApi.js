// Api calls for lists in sharepoint

/*
	constructs a system to call the database and returns functions to make calls with the option of queries

	parameters:
	siteUrl - [String] = site url of the list
	listname - [String] = name of the list including whitespace
*/

export default function (siteUrl, listname) {
	// headers for all requests
	const spHeaders = new Headers({
		Accept: 'application/json;odata=verbose',
		'Content-Type': 'application/json;odata=verbose',
	})

	const trackers = {
		token: '',
		formDigestValue: '',
		formDigestTimeStamp: '',
	}
	// retrieves the token for development sharepoint server
	const retrieveToken = async () => {
		if (!trackers.token) {
			const response = await fetch(
				`${import.meta.env.VITE_APP_TOKEN_URL}`,
				{
					method: 'GET',
					headers: spHeaders,
				}
			)
			const data = await response.json()
			trackers.token = data.access_token

			// set the token
			spHeaders.set('Authorization', 'Bearer ' + trackers.token)

			return trackers.token
		} else {
			return trackers.token
		}
	}

	// constructs the url for the list api endpoint
	const listUrl = siteUrl + "_api/web/lists/GetByTitle('" + listname + "')/"
	// default query to return more than a 100 entries
	const defaultQuery = { $top: 5000 }

	// retrieves form digest values and resets if past time interval (because it changes)
	const TIME_RESET = 1000 * 60 * 60 * 10
	const getFormDigestValue = async () => {
		if (
			import.meta.env.VITE_APP_ENV === 'development' &&
			!spHeaders.has('Authorization')
		) {
			await retrieveToken()
		}

		// check if exists and within time
		const currentTime = new Date()
		if (
			trackers.formDigestValue &&
			currentTime.getTime() - trackers.formDigestTimeStamp.getTime() <=
				TIME_RESET
		) {
			return trackers.formDigestValue
		} else {
			const url = siteUrl + '_api/contextinfo'

			const response = await fetch(url, {
				method: 'POST',
				headers: spHeaders,
			})
			const data = await response.json()

			trackers.formDigestTimeStamp = new Date()
			trackers.formDigestValue =
				data.d.GetContextWebInformation.FormDigestValue
			return data.d.GetContextWebInformation.FormDigestValue
		}
	}

	// retrieves the item entity type for the list
	const getItemEntityType = async () => {
		if (
			import.meta.env.VITE_APP_ENV === 'development' &&
			!spHeaders.has('Authorization')
		) {
			await retrieveToken()
		}

		if (trackers.itemEntityType) {
			return trackers.itemEntityType
		} else {
			const url =
				siteUrl +
				"_api/web/lists/GetByTitle('" +
				listname +
				"')?$select=ListItemEntityTypeFullName"

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders,
			})
			const data = await response.json()

			trackers.itemEntityType = data.d.ListItemEntityTypeFullName
			return data.d.ListItemEntityTypeFullName
		}
	}

	// filereader function async wrapper
	const readFileAsync = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()

			reader.onload = () => {
				resolve(reader.result)
			}

			reader.onerror = reject

			reader.readAsArrayBuffer(file)
		})
	}

	return {
		async getChoices (query) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			const params = Object.assign({}, query, defaultQuery)
			const url = new URL('fields', listUrl)
			url.search = new URLSearchParams(params).toString()

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders
			})
			const data = await response.json()

			return data
		},
		/*
			returns the field types
		*/
		async getFieldTypes() {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			const url = new URL('fields', listUrl)
			url.search = new URLSearchParams({
				$select: 'TypeAsString,TypeDisplayName,Title,InternalName',
			}).toString()

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders,
			})
			const data = await response.json()

			return data
		},

		/*
			returns all the rows dictated by the query

			parameters:
			query - [Object] = filters, select, etc
		*/
		async getAll(query) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			// add queries to url
			const params = Object.assign({}, defaultQuery, query)
			const url = new URL('items', listUrl)
			url.search = new URLSearchParams(params).toString()

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders,
			})

			const data = await response.json()

			// wants all data and needs another query
			if ((!query || !query.$top) && data.d.__next) {
				let temp = data
				let result = data.d.results
				while (temp.d.__next) {
					const addlResponse = await fetch(temp.d.__next, {
						method: 'GET',
						headers: spHeaders,
					})
					temp = await addlResponse.json()
					result = result.concat(temp.d.results)
				}
				data.d.results = result
			}

			return data
		},

		/*
			returns single row dictated by the query and id

			parameters:
			query - [Object] = filters, select, etc
			id - [Number] = id value that sharepoint keeps
		*/
		async getItem(query, id) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			// add queries to url
			const url = new URL('items(' + id + ')', listUrl)
			url.search = new URLSearchParams(query).toString()

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders,
			})

			const data = await response.json()

			return data
		},

		/*
			updates a row

			parameters:
			payload - [Object] = the data
			id - [Number] = id value that sharepoint keeps
		*/
		async updateListItem(payload, id) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}
			const listFormDigestValue = await getFormDigestValue()
			const listEntityType = await getItemEntityType()

			const headers = new Headers({
				'If-Match': '*',
				'X-HTTP-Method': 'MERGE',
				'X-RequestDigest': listFormDigestValue,
			})
			// add the base headers
			for (const h of spHeaders.entries()) {
				headers.append(h[0], h[1])
			}

			payload.__metadata = { type: listEntityType }

			const url = new URL('items' + '(' + id + ')', listUrl)
			const response = await fetch(url, {
				method: 'POST',
				headers,
				body: JSON.stringify(payload),
			})

			// errors that need to be caught but don't
			if (response.status === 400) {
				const error = {
					message: 'Bad request, check console for more information',
					response,
				}
				throw error
			}

			if (response.status === 409) {
				const error = {
					message: 'Conflict error, retry attempt',
					response,
				}
				throw error
			}

			return response
		},

		/*
			creates a row

			parameters:
			payload - [Object] = the data

			- response has data of newly created item
		*/
		async createListItem(payload) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}
			const listFormDigestValue = await getFormDigestValue()
			const listEntityType = await getItemEntityType()

			const headers = new Headers({
				'X-RequestDigest': listFormDigestValue,
			})
			// add the base headers
			for (const h of spHeaders.entries()) {
				headers.append(h[0], h[1])
			}

			payload.__metadata = { type: listEntityType }

			const url = new URL('items', listUrl)
			const response = await fetch(url, {
				method: 'POST',
				headers,
				body: JSON.stringify(payload),
			})

			// errors that need to be caught but don't
			if (response.status === 400) {
				const error = {
					message: 'Bad request, check console for more information',
					response,
				}
				throw error
			}

			const data = await response.json()

			return data
		},

		/*
			deletes a row

			parameters:
			id - [Number] = sharepoint id to be deleted
		*/
		async deleteListItem(id) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}
			const listFormDigestValue = await getFormDigestValue()

			const headers = new Headers({
				'If-Match': '*',
				'X-HTTP-Method': 'DELETE',
				'X-RequestDigest': listFormDigestValue,
			})
			// add the base headers
			for (const h of spHeaders.entries()) {
				headers.append(h[0], h[1])
			}

			const url = new URL('items' + '(' + id + ')', listUrl)
			const response = await fetch(url, {
				method: 'POST',
				headers,
			})

			// errors that need to be caught but don't
			if (response.status === 400) {
				const error = {
					message: 'Bad request, check console for more information',
					response,
				}
				throw error
			}

			return response
		},

		/*
			creates a file for list attachment

			parameters:
			file - [File] - a file object to be uploaded
			id - [Number] = sharepoint id to be attached to (must have existing entry)
		*/
		async createListAttachment(file, id) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}
			const listFormDigestValue = await getFormDigestValue()

			const buffer = await readFileAsync(file)

			const headers = new Headers({
				'X-RequestDigest': listFormDigestValue,
				'Content-Length': buffer.byteLength,
			})
			// add the base headers
			for (const h of spHeaders.entries()) {
				headers.append(h[0], h[1])
			}

			const url = new URL(
				`items(${id})/AttachmentFiles/add(FileName='${file.name}')`,
				listUrl
			)
			const response = await fetch(url, {
				method: 'POST',
				body: buffer,
				headers,
			})

			// errors that need to be caught but don't
			if (response.status === 400) {
				const error = {
					message: 'Bad request, check console for more information',
					response,
				}
				throw error
			}

			return response
		},

		/*
			delete a file attachment

			parameters:
			filename - [String] - name of the a file object to be deleted
			id - [Number] = sharepoint id to be attached to (must have existing entry)
		*/
		async deleteListAttachment(filename, id) {
			if (
				import.meta.env.VITE_APP_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}
			const listFormDigestValue = await getFormDigestValue()

			const headers = new Headers({
				'X-RequestDigest': listFormDigestValue,
				'X-HTTP-Method': 'DELETE',
			})
			// add the base headers
			for (const h of spHeaders.entries()) {
				headers.append(h[0], h[1])
			}

			const url = new URL(
				`items(${id})/AttachmentFiles/getByFileName('${filename}')`,
				listUrl
			)
			const response = await fetch(url, {
				method: 'POST',
				headers,
			})

			return response
		},
	}
}
