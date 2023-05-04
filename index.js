import LabeledDropdown from './components/LabeledDropdown.vue'
export default {
	install: (app, options) => {
		app.component("LabeledDropdown", LabeledDropdown)
	}
}
