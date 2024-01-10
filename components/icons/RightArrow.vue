<template>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 11">
		<path d="M9.063.246A.75.75 0 1 0 7.98 1.285L9.063.246ZM13 5.432l.541.52a.75.75 0 0 0 0-1.039l-.541.52ZM7.98 9.58a.75.75 0 1 0 1.083 1.038L7.98 9.58Zm4.175-3.377a.75.75 0 0 0 0-1.5v1.5Zm-10.489-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6.315-3.418 4.478 4.667 1.082-1.039L9.063.246 7.98 1.285Zm4.478 3.628L7.98 9.58l1.082 1.038 4.478-4.666-1.082-1.039Zm-.304-.21H1.666v1.5h10.49v-1.5Z"
			:fill="fillColor"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: '#F1F2F2'
		},
		strokeColor: {
			type: String,
			default: '#F1F2F2'
		},
	}
}
</script>
