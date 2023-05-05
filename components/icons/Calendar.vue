<template>
	<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25.75v1.5m7.5-1.5v1.5M1.5 6h15M5.625 9.75h1.5m3.75 0h1.5m-6.75 3h1.5m3.75 0h1.5M3.75 16.5h10.5a2.25 2.25 0 0 0 2.25-2.25V4.5a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v9.75a2.25 2.25 0 0 0 2.25 2.25Z" :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>
<script>
export default {
	props: {
		strokeColor: {
			type: String,
			default: '#D1D3D4'
		},
	}
}
</script>