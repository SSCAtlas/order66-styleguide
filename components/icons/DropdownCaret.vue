<template>
	<svg v-if="pointDown" xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none">
	  <path fill-rule="evenodd" clip-rule="evenodd" d="M.969.293a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0l6-6A1 1 0 0 0 12.969.293L7.676 5.586 2.383.293a1 1 0 0 0-1.414 0Z" fill="#454B4F"/>
	</svg>
	<svg v-else xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none">
	  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.743 7.707a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414l5.293-5.293 5.293 5.293a1 1 0 0 0 1.414 0Z" fill="#454B4F"/>
	</svg>
  
  </template>
  
  <script>
  export default {
	  props: {
		  pointDown: {
			  type: Boolean,
			  default: true
		  }
	  }
  }
  </script>
