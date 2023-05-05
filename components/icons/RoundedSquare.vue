<template>
	<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="18" height="18" rx="4" :fill="fillColor" :stroke="strokeColor" stroke-width="2"/></svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#101820'
		},
		strokeColor: {
			type: String,
			default: '#101820'
		},
	}
}
</script>
