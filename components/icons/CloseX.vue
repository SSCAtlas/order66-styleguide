<template>
	<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 2.463 22 22M2 21.537 22 2" stroke-width="3" stroke-linecap="round"
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
			default: 'transparent'
		},
		strokeColor: {
			type: String,
			default: '#fff'
		},
	}
}
</script>
