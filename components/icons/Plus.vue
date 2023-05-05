<template>
	<svg
		width="18"
		height="18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9 2.25v13.5M2.25 9h13.5"
			:stroke="strokeColor"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: "#F1F2F2",
		},
		strokeColor: {
			type: String,
			default: "#F1F2F2",
		},
	},
};
</script>