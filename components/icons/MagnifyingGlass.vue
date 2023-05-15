<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:fill="fillColor"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0 7.5a7.5 7.5 0 0 0 12.096 5.928.998.998 0 0 0 .197.28l6 6a1 1 0 0 0 1.414-1.415l-6-6a.998.998 0 0 0-.28-.197A7.5 7.5 0 1 0 0 7.5Zm2 0a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
			:fill="fillColor"
		/>
	</svg>
</template>

<script>
export default {
	name: 'magglass',
	props: {
		fillColor: {
			type: String,
			default: "#454B4F",
		},
		width: {
			type: Number,
		},
		height: {
			type: Number,
		},
	},
};
</script>
