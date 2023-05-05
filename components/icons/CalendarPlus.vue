<template>
	<svg width="24" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6.667.67c-.737 0-1.334.596-1.334 1.332v1.334H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-16a4 4 0 0 0-4-4h-1.333V2.003a1.333 1.333 0 0 0-2.667 0v1.333H8V2.003C8 1.265 7.403.668 6.667.668Zm10.666 5.333H4c-.736 0-1.333.596-1.333 1.333v1.333h18.666V7.336c0-.737-.597-1.333-1.333-1.333h-2.667ZM2.667 23.335v-12h18.666v12c0 .736-.597 1.333-1.333 1.333H4a1.333 1.333 0 0 1-1.333-1.333Zm8-9.105a1.333 1.333 0 1 1 2.666 0v2.438h2.438a1.333 1.333 0 1 1 0 2.667h-2.438v2.438a1.333 1.333 0 1 1-2.667 0v-2.438H8.23a1.333 1.333 0 1 1 0-2.667h2.437v-2.438Z"
			stroke-width="0"
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
		},
	}
}
</script>
