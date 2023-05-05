<template>
	<svg width="14" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM7 3c0 .84-.345 1.598-.9 2.143A3.746 3.746 0 0 1 7.75 8.25v3a.75.75 0 0 1-1.5 0v-3a2.25 2.25 0 0 0-4.5 0v3a.75.75 0 0 1-1.5 0v-3c0-1.293.654-2.433 1.65-3.107A3 3 0 1 1 7 3Zm2.25-1.125a.75.75 0 0 0 0 1.5h1.94l-.22.22a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l.22.22H9.25Z"
			:fill="fillColor"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#1b1e1f',
		},
		strokeColor: {
			type: String,
			default: 'transparent',
		},
	},
};
</script>
