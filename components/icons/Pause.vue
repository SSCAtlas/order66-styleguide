<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none">
		<path :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.038 7.138c0-.72.585-1.305 1.305-1.305h2.61c.721 0 1.305.584 1.305 1.305v11.31c0 .72-.584 1.305-1.305 1.305h-2.61c-.72 0-1.305-.584-1.305-1.305V7.138ZM4.598 7.138c0-.72.585-1.305 1.305-1.305h2.61c.721 0 1.305.584 1.305 1.305v11.31c0 .72-.584 1.305-1.305 1.305h-2.61c-.72 0-1.305-.584-1.305-1.305V7.138Z"/>
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
