<template>
	<svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 9.68H6.46c-.55 0-1-.45-1-1s.45-1 1-1H19c.55 0 1 .45 1 1s-.45 1-1 1ZM14.99 2H1c-.55 0-1-.45-1-1s.45-1 1-1h13.99c.55 0 1 .45 1 1s-.45 1-1 1ZM14.17 17.37h-11c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1Z"
			:fill="fillColor"
			:stroke="strokeColor"
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
