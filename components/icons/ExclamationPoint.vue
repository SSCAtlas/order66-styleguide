<template>
  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5.25V9m0 3v.375M17.25 9A8.25 8.25 0 1 1 .75 9a8.25 8.25 0 0 1 16.5 0Z" :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
	props: {
		strokeColor: {
			type: String,
			default: '#F1F2F2'
		},
	}
}
</script>