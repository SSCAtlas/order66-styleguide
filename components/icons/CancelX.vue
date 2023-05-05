<template>
	<svg
		width="25"
		height="24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="m6.5 6 12.774 12.774m-12.774 0L19.274 6"
			:stroke="strokeColor"
			stroke-width="2"
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
			default: "transparent",
		},
		strokeColor: {
			type: String,
			default: "#101820",
		},
	},
};
</script>

