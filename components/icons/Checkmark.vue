<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M11.774.713a.75.75 0 0 1 .013 1.061l-7.325 7.5a.75.75 0 0 1-1.109-.04L.178 5.485a.75.75 0 0 1 1.144-.969l2.643 3.121 6.748-6.91a.75.75 0 0 1 1.061-.013Z"
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
		},
	}
}
</script>
