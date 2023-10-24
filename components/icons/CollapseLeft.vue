<template>
	<svg width="16" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6 1a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM3.65 8.847a1 1 0 0 0 1.064-1.694L4.47 7H15a1 1 0 1 0 0-2H4.47l.244-.153A1 1 0 1 0 3.65 3.153l-3.182 2a1 1 0 0 0 0 1.694l3.182 2Z" :fill="fillColor"/>
	</svg>
</template>
<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#454B4F'
		},
		strokeColor: {
			type: String,
			default: '#fff'
		},
	}
}
</script>
