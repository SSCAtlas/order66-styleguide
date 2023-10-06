<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M12.07 22c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-2c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Zm3.71-7.29-3 3a.996.996 0 1 1-1.41-1.41l1.29-1.29H9.07c-.55 0-1-.45-1-1s.45-1 1-1h3.59l-1.29-1.29a.996.996 0 1 1 1.41-1.41l3 3c.19.19.29.44.29.71 0 .27-.11.52-.29.71v-.02Z"
			:fill="fillColor"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: "#454B4F",
		},
		strokeColor: {
			type: String,
			default: "transparent",
		},
	}
}
</script>
