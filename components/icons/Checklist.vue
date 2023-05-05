<template>
	<svg width="20" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M5.737 1.676A1 1 0 0 0 4.263.324L2.286 2.481l-.518-.621A1 1 0 0 0 .232 3.14l1.25 1.5a1 1 0 0 0 1.505.036l2.75-3ZM9 2a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H9ZM5.676 9.263a1 1 0 0 1 .061 1.413l-2.75 3a1 1 0 0 1-1.505-.036l-1.25-1.5a1 1 0 0 1 1.536-1.28l.518.621 1.977-2.157a1 1 0 0 1 1.413-.061ZM9 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H9Z" 
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
