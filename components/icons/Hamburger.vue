<template>
	<div class="hamburger mx-auto">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.03 40.9">
			<g id="Layer_1-2" data-name="Layer 1">
				<line x1="3.42" y1="3.42" x2="37.61" y2="3.42" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"
					:fill="fillColor"
					:stroke="strokeColor"
				/>
				<line x1="3.42" y1="20.38" x2="37.61" y2="20.38" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"
					:fill="fillColor"
					:stroke="strokeColor"
				/>
				<line x1="3.42" y1="37.48" x2="37.61" y2="37.48" stroke-linecap="round" stroke-miterlimit="10"
					:fill="fillColor"
					:stroke="strokeColor"
		stroke-width="5"
				/>
			</g>
		</svg>
		<!--
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 2h20M2 12h20M2 22h20" stroke-width="3" stroke-linecap="round"
				:fill="fillColor"
				:stroke="strokeColor"
			/>
		</svg>
		 -->
	</div>
</template>

<script>
export default {
	props: {
		fillColor: {
			type: String,
			default: 'transparent'
		},
		strokeColor: {
			type: String,
			default: '#fff'
		},
	}
}
</script>

<style scoped>
	.hamburger {
		width: 1.5rem;
	}
	.hamburger line {
		transition: all 0.75s ease;
	}
	.hamburger line:nth-child(1) {
		transform-origin: left center;
	}
	.hamburger line:nth-child(3) {
		transform-origin: left center;
	}
	.show .hamburger line:nth-child(1),
	.hamburger.open line:nth-child(1) {
		transform: rotate(45deg) translate(-7px, 2px);
	}
	.show .hamburger,
	.hamburger.open {
		margin-right: 0.5rem !important;
	}
	.show .hamburger line:nth-child(2),
	.hamburger.open line:nth-child(2) {
		opacity: 0;
	}
	.show .hamburger line:nth-child(3),
	.hamburger.open line:nth-child(3) {
		transform: rotate(-45deg) translate(-5px, -3px);
	}

</style>
