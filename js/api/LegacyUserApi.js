/*
	rest points for getting user and group details

	1. copy the file to your project
	2. import the file `import UserApi from 'UserApi.js'`
	3. initialize the functions `const myApi = new UserApi(LISTS_BASE_URL)`
		- for development mode, `VUE_APP_TOKEN_URL` must be present in .env file if you want to use the inclusive server (url and id key)

*/

export default function (siteUrl) {
	// headers for all requests
	const spHeaders = new Headers({
		Accept: 'application/json;odata=verbose',
		'Content-Type': 'application/json;odata=verbose'
	})

	const trackers = {
		token: ''
	}

	const defaultQuery = {
		$top: 5000
	}

	// retrieves the token for development sharepoint server
	const retrieveToken = async () => {
		if (!trackers.token) {
			const response = await fetch(`${process.env.VUE_APP_TOKEN_URL}`, {
				method: 'GET',
				headers: spHeaders
			})
			const data = await response.json()
			trackers.token = data.access_token

			// set the token
			spHeaders.set('Authorization', 'Bearer ' + trackers.token)

			return trackers.token
		} else {
			return trackers.token
		}
	}

	const TIME_RESET = 1000 * 60 * 60 * 10
	const getFormDigestValue = async () => {
		if (
			process.env.NODE_ENV === 'development' &&
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
				headers: spHeaders
			})
			const data = await response.json()

			trackers.formDigestTimeStamp = new Date()
			trackers.formDigestValue =
				data.d.GetContextWebInformation.FormDigestValue
			return data.d.GetContextWebInformation.FormDigestValue
		}
	}

	// constructs the url
	const userUrl = siteUrl + '_api/web/'
	const peopleUrl = siteUrl + '_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser'

	return {
		async peoplePicker (params) {
			if (
				process.env.NODE_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}
			const listFormDigestValue = await getFormDigestValue()

			const headers = new Headers({
				'X-RequestDigest': listFormDigestValue
			})
			// add the base headers
			for (const h of spHeaders.entries()) {
				headers.append(h[0], h[1])
			}
			// const params = Object.assign({})
			// const url = new URL(",userInfoUrl)
			// url.search = new URLSearchParams(params).toString()
			// console.log(url)
			let data
			try {
				const response = await fetch(peopleUrl, {
					method: 'POST',
					headers,
					body: JSON.stringify(params)
				})

				data = await response.json()
				// if not the success response
				if (!response.ok) {
					throw new Error(`Problem with retrieving list items! Status: ${response.status} Msg: ${data?.error?.message?.value || 'None'}`)
				}
			} catch (e) {
				console.error(e)
				return e
			}
			return data
		},
		async getAllUsers (query) {
			if (
				process.env.NODE_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			const params = Object.assign({}, query, defaultQuery)
			const url = new URL('siteusers?', userUrl)
			url.search = new URLSearchParams(params).toString()
			let data
			try {
				const response = await fetch(url, {
					method: 'GET',
					headers: spHeaders
				})

				data = await response.json()
				// if not the success response
				if (!response.ok) {
					throw new Error(`Problem with retrieving list items! Status: ${response.status} Msg: ${data?.error?.message?.value || 'None'}`)
				}
			} catch (e) {
				console.error(e)
				return e
			}

			return data
		},

		// user information
		async getCurrentUser () {
			console.log('run 2')
			if (
				process.env.NODE_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			const url = new URL('currentuser', userUrl)

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders
			})

			const data = await response.json()

			return data
		},
		// get all permission groups on a site -- untested
		async getSiteGroups () {
			if (
				process.env.NODE_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			const url = new URL('sitegroups', userUrl)

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders
			})

			const data = await response.json()

			return data
		},
		// get all users in a group -- untested
		async getGroupUsers (groupName) {
			if (
				process.env.NODE_ENV === 'development' &&
				!spHeaders.has('Authorization')
			) {
				await retrieveToken()
			}

			const url = new URL(
				"sitegroups/getByName('" + groupName + "')/Users?",
				userUrl
			)

			const response = await fetch(url, {
				method: 'GET',
				headers: spHeaders
			})

			const data = await response.json()

			return data
		}
	}
}
