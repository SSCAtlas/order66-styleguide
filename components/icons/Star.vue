<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none">
		<path :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="3.329" stroke-width="2" d="M11.736 3.451a.75.75 0 0 1 1.385 0l2.201 5.274a.75.75 0 0 0 .592.454l5.802.785a.75.75 0 0 1 .374 1.325l-4.48 3.656a.75.75 0 0 0-.257.75l1.432 6.19c.155.67-.598 1.178-1.161.783l-4.765-3.344a.75.75 0 0 0-.861 0l-4.765 3.344c-.563.395-1.316-.113-1.161-.783l1.432-6.19a.75.75 0 0 0-.257-.75l-4.48-3.656a.75.75 0 0 1 .374-1.325l5.802-.785a.75.75 0 0 0 .592-.454l2.201-5.274Z"/>
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
