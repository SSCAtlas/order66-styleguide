<template>
	<svg width="108" height="31" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M57.713 7.343v22.65h-4.921V.001h4.92L78.49 22.446V0h4.921v30h-4.92L57.712 7.351v-.008Z"
			:fill="fillColor"
			:stroke="strokeColor"
		/>
		<path d="M91.62 30.001V5.241h-5.217l-3-5.24H108v5.24H96.783v24.76H91.62ZM43.38 12.131v10.323L33.827 12.13H27l16.38 17.862h4.913V12.131H43.38Z"
			:fill="fillColor"
			:stroke="strokeColor"
		/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M26.25.001H0v5.237h26.25V0Zm0 12.136H0v5.237h26.25v-5.236ZM0 24.765h26.25V30H0v-5.236Z"
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
			default: '#00263A'
		},
		strokeColor: {
			type: String,
			default: 'transparent'
		}
	}
}
</script>
