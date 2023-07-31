<template>
	<div class="dropdown labeled-dropdown">
		<button
			@click="toggleDropdown"
			class="labeled-btn dropdown-caret text-start mb-1"
		>
			<label class="within-title px-2">
				{{ label }}
			</label>
			<div class="d-flex justify-content-between">
				<div class="col-11">
					{{ selected }}
				</div>
				<div class="col-1 text-center align-self-center">
					<dropdown-caret :pointDown="pointDown" />
				</div>
			</div>
		</button>
		<div v-if="subtext">
			<p class="mb-0 ms-3 subtext">{{ subtext }}</p>
		</div>
		<div
			v-if="showDropdown"
			class="options-container bg-white d-flex flex-column py-2 shadow"
		>
			<ul
				@click="selectOption(option)"
				v-for="(option, idx) in options"
				:value="option"
				:key="idx"
				class="dropdown-options p-3 mb-0"
			>
				{{ option }}
			</ul>
		</div>
	</div>
</template>

<script>
import DropdownCaret from "./icons/DropdownCaret.vue";
export default {
	components: {
		DropdownCaret,
	},
	emits: ["changeOption"],
	props: {
		label: {
			type: String,
			default: "Label",
		},
		options: {
			type: Array,
			default: () => ["option1"],
		},
		initialOption: {
			type: String,
			default: "Initial Option",
		},
		subtext: String
	},
	data() {
		return {
			selected: this.initialOption,
			showDropdown: false,
			pointDown: true,
		};
	},
	methods: {
		toggleDropdown() {
			this.showDropdown = !this.showDropdown;
			this.pointDown = !this.pointDown;
		},
		closeDropdown() {
			this.showDropdown = false;
			this.pointDown = true;
		},
		selectOption(selectedOption) {
			this.selected = selectedOption;
			this.$emit("changeOption", selectedOption);
			this.closeDropdown();
		},
	},
};
</script>

<style scoped>
.labeled-dropdown {
	position: relative;
	margin-top: 10px;
	width: 100%;
	height: 100%;
}
.within-title {
	position: absolute;
	top: -7px;
	left: 10px;
	font-size: 12px;
	background-color: white;
}
.labeled-btn {
	background-color: white;
	width: 100%;
	height: 100%;
	padding: 16px;
	border: 1px solid var(--bs-grayvar-500);
	border-radius: 4px;
	font-size: 16px;
}
.options-container {
	position: absolute;
	border-radius: 5px;
	width: 100%;
	max-height: 300px;
	overflow: auto;
	font-size: 16px;
	z-index: 100;
}
.dropdown-options {
	display: flex;
	background-color: var(--bs-gray-99);
	height: 46px;
	flex-direction: row;
	align-items: center;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0.5px;
}
.dropdown-options:hover {
	background-color: var(--bs-secondary95);
	cursor: pointer;
}
.subtext {
	font-size: 12px;
	letter-spacing: 0.4px;
	color: var(--bs-gray10);
}
</style>
