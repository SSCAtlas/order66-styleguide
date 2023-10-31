<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" fill="none">
		<path :stroke="strokeColor" stroke-width="2" d="M6.428 23.793v-13m8.134-2.675.37-3.16a2.835 2.835 0 0 0-2.816-3.165c-.568 0-1.082.34-1.304.863l-3.366 7.92a2 2 0 0 1-1.84 1.217H4.427a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.738a3 3 0 0 0 2.884-2.176l2.286-8a3 3 0 0 0-2.885-3.824h-4.399a1.5 1.5 0 0 1-1.49-1.675Z"/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#00263A'
		},
		strokeColor: {
			type: String,
			default: 'transparent'
		},
	}
}
</script>
