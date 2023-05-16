# styleguide

# npm install ava-styleguide
bootstrap will be added along with override file

# create a new scss file named "override.scss"

# add an import to styleguide 
```sh
@import './node_modules/ava-styleguide/styleguide.scss';
```

# add the scss script to package.json file in main project
```sh
"scss": "sass override.scss compiled-bootstrap/override-bootstrap.css"
```

# npm run scss
a new folder named compiled-bootstrap with a file named override-bootstrap.css will populate at root of project
# add imports to main.js order is important
```sh
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../compiled-bootstrap/override-bootstrap.css'
```

# any updates to package
```sh
npm update ava-styleguide
npm run scss
```

# ListApiPlugin 
#### in main.js file:
```sh
import listPiPlugin from 'ava-styleguide'
```
```sh
const listConfigs = [
	{ envVariable: import.meta.env.VITE_APP_LISTS_BASE_URL, listName: '<list name here>'}
]
```
```sh
app.use(listApiPlugin, listConfigs)
```
#### In your component
```sh
methods: {
	async getData() {
		const listApi = this.$listApis['<above listname in listConfigs here>']
		const response = await listApi.getAll()
		console.log(response.d.results)
	}
}
```
# UserApiPlugin 
#### in main.js file:
```sh
import userApiPlugin from 'ava-styleguide'
```
```sh
const userConfigs = [
	{ envVariable: import.meta.env.VITE_APP_USER_BASE_URL, key: '<unique key identifier>'}
]
```
```sh
app.use(userApiPlugin, userConfigs)
```
#### In your component
```sh
methods: {
	async getData() {
		const userApi = this.$listApis['<above key in userConfigs here>']
		const response = await userApi.getGetCurrentUser()
		console.log(response.d)
	}
}
```
# LegacyUserApiPlugin 
#### in main.js file:
```sh
import legacyUserApiPlugin from 'ava-styleguide'
```
```sh
const legacyUserConfigs = [
	{ envVariable: process.env.VUE_APP_USER_BASE_URL, key: '<unique key identifier>'}
]
```
```sh
app.use(legacyUserApiPlugin, legacyUserConfigs)
```
#### In your component
```sh
methods: {
	async getData() {
		const userApi = this.$legacyUserApis['<above key in legacyUserConfigs here>']
		const response = await userApi.getGetCurrentUser()
		console.log(response.d)
	}
}
```

