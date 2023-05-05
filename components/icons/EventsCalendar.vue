<template>
	<svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.002a1 1 0 0 0-1 1v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3h-1v-1a1 1 0 1 0-2 0v1H9v-1a1 1 0 0 0-1-1Zm8 4H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1h-2Zm-11 13v-9h14v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm2-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2Z" 
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
			default: '#C9E6FF'
		},
		strokeColor: {
			type: String,
			default: 'transparent'
		},
	}
}
</script>
