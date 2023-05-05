<template>
	<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm0 2h5v16H2V2Zm11-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-5Zm0 2h5v5h-5V2Z"
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
			default: '#1B1E1F'
		},
		strokeColor: {
			type: String,
			default: 'transparent'
		}
	}
}
</script>
