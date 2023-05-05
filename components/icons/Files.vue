<template>
	<svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M14.324 2.916a3.06 3.06 0 0 0-4.36 0l-6.56 6.586c-1.936 1.943-1.936 5.14 0 7.082a4.735 4.735 0 0 0 6.744 0l6.194-6.217a.958.958 0 0 1 1.38.016c.377.396.37 1.03-.016 1.417l-6.193 6.217a6.65 6.65 0 0 1-9.474 0c-2.719-2.728-2.719-7.219 0-9.948l6.56-6.586a4.976 4.976 0 0 1 7.09 0c2.034 2.042 2.034 5.402 0 7.444l-6.312 6.335a2.967 2.967 0 0 1-4.227 0 3.162 3.162 0 0 1 0-4.438l5.336-5.355a.958.958 0 0 1 1.38.015c.377.396.37 1.03-.016 1.417l-5.335 5.356a1.12 1.12 0 0 0 0 1.573 1.051 1.051 0 0 0 1.498 0l6.31-6.336a3.261 3.261 0 0 0 0-4.578Z"
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
