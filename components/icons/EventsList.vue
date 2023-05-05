<template>
	<svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.003a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm6 1a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9Zm-1 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-5-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm5 8a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-5-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Z" 
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
