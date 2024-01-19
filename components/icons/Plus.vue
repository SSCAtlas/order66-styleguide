<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M18.093 5.729a1.487 1.487 0 0 0-2.974 0v8.92H5.987a1.487 1.487 0 0 0 0 2.974h9.132v9.132a1.487 1.487 0 1 0 2.974 0v-9.132h8.92a1.487 1.487 0 1 0 0-2.973h-8.92V5.729Z"
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
			default: "transparent",
		},
		strokeColor: {
			type: String,
			default: "#F1F2F2",
		},
	},
};
</script>
