<template>
	<svg width="14" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm2.1.643a3 3 0 1 0-4.2 0A3.746 3.746 0 0 0 .25 8.25v3a.75.75 0 0 0 1.5 0v-3a2.25 2.25 0 0 1 4.5 0v3a.75.75 0 0 0 1.5 0v-3A3.746 3.746 0 0 0 6.1 5.143Zm2.4-2.518a.75.75 0 0 1 .75-.75h1.94l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1-.53 1.28H9.25a.75.75 0 0 1-.75-.75ZM13 4.5A.75.75 0 0 1 13 6h-1.94l.22.22a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 .53-1.28H13Z"
			:fill="fillColor"
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
		},
	}
}
</script>
