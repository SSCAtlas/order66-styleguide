import LabeledDropdown from './components/LabeledDropdown.vue'
import Pagination from './components/Pagination.vue'
export default {
	install: (app, options) => {
		app.component("LabeledDropdown", LabeledDropdown)
		app.component("Pagination", Pagination)
	}
}
