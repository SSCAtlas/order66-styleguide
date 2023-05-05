<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
		<path d="M7.98098 2.97197L11.0418 6.03278M9.53303 1.41999C9.53303 1.41999 10.9382 0.780007 12.1625 2.00433C13.3869 3.22866 12.7469 4.63385 12.7469 4.63385L4.56617 12.8146L0.914062 13.2528L1.35232 9.6007L9.53303 1.41999Z" :stroke="strokeColor" stroke-width="1.5"/>
	</svg>
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