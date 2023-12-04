<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" fill="none">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.657 8.116a9 9 0 0 1 17.109-.597m-.165 6.577a9 9 0 0 1-16.45.304m1.983-.868-2.567.38-1.235 2.283m16.222-7.868 2.567-.38 1.235-2.283"
		:stroke="strokeColor"/>
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
