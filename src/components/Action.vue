<template>
	<div class="form-group" >
			<label>{{ name }}</label>
			<fa-icon	v-if="activated" 
								v-bind:icon="icon" 
								v-bind:class="iconClasses" />
			<input 	type="text" 
							class="form-control" 
							v-on:input="onPress($event.target.value, i)"
							v-bind:value="value">							
	</div>
</template>

<script>
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'


export default {
			components: {
				FaIcon
			},
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
				icon() {
					return this.valid ? 'check-circle' : 'exclamation-circle';
				},
				iconClasses(){
					return this.valid ? 'text-success' : 'text-danger';
				},

			}
}
</script>
