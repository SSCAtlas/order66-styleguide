<template>
	<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M14.22.585c.78-.78 2.044-.78 2.823 0l2.372 2.374c.78.78.78 2.045 0 2.825l-9.837 9.843c-.277.278-.63.468-1.015.546l-2.975.603a1.996 1.996 0 0 1-2.353-2.355l.603-2.976c.078-.385.267-.739.545-1.016L14.22.585ZM5.622 12.692l.107-.529 2.116 2.117-.529.107-2.124.43.43-2.125Zm3.763.304-2.372-2.374L14.22 3.41l1.412-1.412.96.96.451.452.96.961-1.411 1.413-7.207 7.212ZM.998 18.002a.999.999 0 0 0 0 1.998h17.967a.999.999 0 0 0 0-1.998H.998Z"
			:fill="fillColor"
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
