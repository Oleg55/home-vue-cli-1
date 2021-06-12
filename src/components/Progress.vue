<template>
	<div class="progress">
		<div class="progress-bar" v-bind:style="progressStyles"></div>
	</div>
</template>

<script>
export default {
				props: ['fieldsDone','info'],
				computed:{
				progressStyles() {
					return {
						'width': this.fieldsDone * (100 / this.info.length) + '%'
 					};
				}
				}
}
</script>