import UserApi from '../api/UserApi.js';

const userApiPlugin = {
	install(app, userConfigs) {
		const userApis = {};

		userConfigs.forEach((config) => {
		const { envVariable, key} = config;
		const userApi = new UserApi(envVariable);
		userApis[key] = userApi;
		});

		app.config.globalProperties.$userApis = userApis;
	}
};

export default userApiPlugin;
