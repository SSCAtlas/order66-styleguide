<template>
	<svg width="18" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12.75 15.005v-1.5m0 1.5h-7.5m7.5 0h4.5V13.88a2.625 2.625 0 0 0-4.705-1.601c.133.384.205.797.205 1.226m-7.5 1.5v-1.5m0 1.5H.75V13.88a2.625 2.625 0 0 1 4.705-1.601 3.745 3.745 0 0 0-.205 1.226m7.5 0a3.75 3.75 0 1 0-7.5 0m6-8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 7.505a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
			:stroke="strokeColor"
			stroke-width="1.5"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#101820',
		},
		strokeColor: {
			type: String,
			default: '#101820',
		},
	},
};
</script>
