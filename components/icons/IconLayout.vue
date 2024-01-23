<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5.344h-4a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 2.5 2.5h4a2.5 2.5 0 0 0 2.5-2.5v-4a2.5 2.5 0 0 0-2.5-2.5ZM2 2.844a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Zm4.5 8.5h-4a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 2.5 2.5h4a2.5 2.5 0 0 0 2.5-2.5v-4a2.5 2.5 0 0 0-2.5-2.5Zm-4.5 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Zm11.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-4a2.5 2.5 0 0 1-2.5-2.5v-4a2.5 2.5 0 0 1 2.5-2.5Zm0 2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4Zm4-13h-4a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 2.5 2.5h4a2.5 2.5 0 0 0 2.5-2.5v-4a2.5 2.5 0 0 0-2.5-2.5Zm-4.5 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4Z"
			:fill="fillColor"
			:stroke="strokeColor"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: "89CEFF",
		},
		strokeColor: {
			type: String,
			default: "transparent",
		},
	},
};
</script>
