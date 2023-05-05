<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M0 36.5 14 0l14 36.5L14 40 0 36.5Z" :fill="fillColor"/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#0E4C87'
		}
	}
}
</script>