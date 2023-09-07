# styleguide
```sh
npm install ava-styleguide
```
bootstrap will be added along with override file

### (New Project Only) Create a new scss file named "styleguide.scss" in the root directory
Add an import to styleguide.scss
```sh
@import './node_modules/ava-styleguide/styleguide.scss';
```

### (New Project Only) Add the scss script to package.json file in main project
```sh
"scss": "sass override.scss compiled-bootstrap/override-bootstrap.css"
```
```sh
npm run scss
```
a new folder named compiled-bootstrap with a file named override-bootstrap.css will populate at root of project
# (New Project Only) add imports to main.js order is important
```sh
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../compiled-bootstrap/override-bootstrap.css'
```

# any updates to package
```sh
npm update --save ava-styleguide
npm run scss
```
# API Usage
## ListApiPlugin 
#### in main.js file:
```sh
import listApiPlugin from 'ava-styleguide/js/plugin/ListApiPlugin.js'
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
#### Use in Pinia store
in your main.js file after app.use(listApiPlugin, listConfigs)
```sh
export const listApi = app.config.globalProperties.$listApis['<listName from listConfigs>']
```
in your pinia store
```sh
import { listApi } from '../main.js'
```
call it in a function/actions
```sh
const response = await listApi.getAll()
```
## UserApiPlugin 
#### in main.js file:
```sh
import userApiPlugin from 'ava-styleguide/js/plugin/UserApiPlugin.js'
```
```sh
const userConfigs = [
	{ envVariable: import.meta.env.VITE_APP_USER_BASE_URL, key: '<unique key name here>'}
]
```
```sh
app.use(userApiPlugin, userConfigs)
```
#### In your component
```sh
methods: {
	async getUserData() {
		const userApi = this.$userApis['<above key in userConfigs here>']
		const response = await userApi.getCurrentUser()
		console.log(response.d)
	}
}
```
#### Use in Pinia store
in your main.js file after app.use(listApiPlugin, listConfigs)
```sh
export const userApi = app.config.globalProperties.$userApis['<key from userConfigs>']
```
in your pinia store
```sh
import { userApi } from '../main.js'
```
call it in a function/actions
```sh
const response = await userApi.getCurrentUser()
```
## LegacyUserApiPlugin 
#### in main.js file:
```sh
import legacyUserApiPlugin from 'ava-styleguide/js/plugin/LegacyUserApiPlugin.js'
```
```sh
const legacyUserConfigs = [
	{ envVariable: process.env.VUE_APP_USER_BASE_URL, key: '<unique key name here>'}
]
```
```sh
app.use(legacyUserApiPlugin, legacyUserConfigs)
```
#### In your component
```sh
methods: {
	async getUserData() {
		const userApi = this.$legacyUserApis['<above key in userConfigs here>']
		const response = await userApi.getCurrentUser()
		console.log(response.d)
	}
}
```
#### Use in Pinia store
in your main.js file after app.use(listApiPlugin, listConfigs)
```sh
export const legacyUserApi = app.config.globalProperties.$legacyUserApis['<key from legacyUserConfigs>']
```
in your pinia store
```sh
import { legacyUserApi } from '../main.js'
```
call it in a function/actions
```sh
const response = await legacyUserApi.getCurrentUser()
```

### Update styleguide.scss
after adding the classes you want to populate in the styleguide 
-push changes to github
```sh
npm version <major, minor, patch>
```
you need a contributor npm account to run these, verify on https://www.npmjs.com/package/ava-styleguide/access
``sh
npm publish
```
