<template>
	<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.65723 8.11625C3.18111 6.28926 4.26993 4.67502 5.76763 3.50489C7.26533 2.33476 9.09503 1.6688 10.9945 1.60247C12.8939 1.53614 14.7656 2.07284 16.3413 3.13565C17.917 4.19846 19.1158 5.73282 19.7658 7.51881M19.6007 14.0957C18.9236 15.7003 17.7956 17.074 16.3534 18.0502C14.9111 19.0264 13.2166 19.5632 11.4753 19.5954C9.73407 19.6277 8.02084 19.1541 6.54341 18.232C5.06599 17.3099 3.88783 15.9789 3.15181 14.4005M5.13438 13.5319L2.56743 13.9125L1.33179 16.1945M17.5538 8.32687L20.1208 7.94621L21.3564 5.66426" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
		:stroke="strokeColor"
		:fill="fillColor"
		/>
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
			default: '#00263A'
		},
	}
}
</script>
