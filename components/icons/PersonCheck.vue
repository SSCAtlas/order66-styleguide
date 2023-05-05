<template>
	<svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M16.606 7.064a1 1 0 1 0-1.212 1.591l1.5 1.143a1 1 0 0 0 1.454-.265l2.5-4a1 1 0 0 0-1.696-1.06l-1.919 3.07-.627-.479ZM6 8.002a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm6 0c0 1.12-.46 2.131-1.2 2.857a4.995 4.995 0 0 1 2.2 4.143v4a1 1 0 1 1-2 0v-4a3 3 0 1 0-6 0v4a1 1 0 1 1-2 0v-4c0-1.724.873-3.244 2.2-4.143A4 4 0 1 1 12 8.002Z" 
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
			default: '#C9E6FF'
		},
		strokeColor: {
			type: String,
			default: 'transparent'
		},
	}
}
</script>
