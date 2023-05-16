import ListApi from '../api/ListApi.js';

const listApiPlugin = {
	install(app, listConfigs) {
		const listApis = {};

		listConfigs.forEach((config) => {
		const { envVariable, listName } = config;
		const listApi = new ListApi(envVariable, listName);
		listApis[listName] = listApi;
		});

		app.config.globalProperties.$listApis = listApis;
	}
};

export default listApiPlugin;
