<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" :fill="fillColor">
		<rect x="1" y="1" width="16" height="16" rx="1" :stroke="strokeColor" stroke-width="2" />
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: 'none'
		},
		strokeColor: {
			type: String,
			default: '#454B4F'
		}
	}
}
</script>