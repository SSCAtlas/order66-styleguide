<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
<path d="M11.5 2.5L6.5 7.5L1.5 2.5" :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</template>

<script>
export default {
	props: {
		strokeColor: {
			type: String,
			default: '#F1F2F2'
		},
	}
}
</script>