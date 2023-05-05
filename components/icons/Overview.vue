<template>
	<svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3 20h12a3 3 0 0 0 3-3V6.38a3 3 0 0 0-.755-1.99l-1.648-1.86-1.283-1.488A3 3 0 0 0 12.042 0H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3Zm9.8-17.653 1.29 1.5 1.658 1.87a1 1 0 0 1 .252.662V17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9.042a1 1 0 0 1 .757.347ZM6 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H6Z"
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
