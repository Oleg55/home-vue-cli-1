<template>
	<div class="form-group" >
			<label>{{ name }}</label>
			<i v-if="activated"
			class=""
			v-bind:class = "alertClass">
			</i>
			<input 	type="text" class="form-control" 
							v-on:input="onPress($event.target.value, i)"
							v-bind:value="value"
							>
									
	</div>
</template>

<script>
export default {
			props: ['name','value','valid'],
			data: () => ({
				activated: false
			}),
			methods: {
							onPress(value) {
								this.activated = true;
							  this.$emit('step', value);
						}
					},
			computed: {
				alertClass() {
					return {
						'fas fa-circle text-danger': this.valid == false,
						'fas fa-circle text-success': this.valid == true
					}
				},

			}
}
</script>
