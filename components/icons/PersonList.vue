<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" :fill="fillColor">
		<path d="M1 3.417h6.428M1 11.257h4.256M1 7.338h6.428m10.304 3.293a8.446 8.446 0 0 0-8.513 0 2.09 2.09 0 0 0-1.066 1.672l-.177 1.488H19l-.19-1.488a2.118 2.118 0 0 0-1.078-1.672Zm-4.256-3.908a2.756 2.756 0 1 0 0-5.512 2.756 2.756 0 0 0 0 5.512Z" :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: 'transparent'
		},
		strokeColor: {
			type: String,
			default: '#101820'
		},
	}
}
</script>
