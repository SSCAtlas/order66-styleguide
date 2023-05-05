<template>
  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10.912 10.84 5.776.04m0 0V5.25m0 5.63-2.597-2.737c-3.594-3.787-9.906-2.547-11.8 2.318" :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
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