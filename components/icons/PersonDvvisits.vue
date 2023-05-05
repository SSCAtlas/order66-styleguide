<template>
	<svg width="14" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M4.003 4.5c-.83 0-1.501-.67-1.501-1.5s.67-1.5 1.5-1.5c.831 0 1.502.67 1.502 1.5s-.67 1.5-1.501 1.5Zm2.101.64c.56-.54.901-1.3.901-2.14 0-1.66-1.341-3-3.002-3A2.997 2.997 0 0 0 1 3c0 .84.34 1.6.9 2.14C.901 5.81.25 6.95.25 8.25v3c0 .41.34.75.75.75s.751-.34.751-.75v-3C1.751 7.01 2.761 6 4.003 6c1.24 0 2.251 1.01 2.251 2.25v3c0 .41.34.75.751.75.41 0 .75-.34.75-.75v-3c0-1.29-.65-2.43-1.65-3.11ZM11.138 0l-.62 1.9H8.516l1.621 1.18-.62 1.9 1.621-1.18 1.621 1.18-.62-1.9L13.76 1.9h-2.002l-.62-1.9Z"
			:fill="fillColor"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#1B1E1F',
		},
		strokeColor: {
			type: String,
			default: 'transparent',
		},
	},
};
</script>
