import UserApi from '../api/LegacyUserApi.js';

const legacyUserApiPlugin = {
	install(app, userConfigs) {
		const userApis = {};

		userConfigs.forEach((config) => {
		const { envVariable, key} = config;
		const userApi = new UserApi(envVariable);
		userApis[key] = userApi;
		});

		app.config.globalProperties.$legacyUserApis = userApis;
	}
};

export default legacyUserApiPlugin;
