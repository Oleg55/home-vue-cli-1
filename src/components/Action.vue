<template>
	<div class="form-group" >
			<label>{{ name }}</label>
			  <transition
					mode="out-in"
					v-if="activated"
					appear
					appear-active-class="animate__animated animate__fadeIn animate__slow"
					name="icon"
					enter-active-class="animate__animated animate__flipInY animate__fast"
					leave-active-class="animate__animated animate__flipOutY"
				>
				<fa-icon 
								v-bind:icon="icon" 
								v-bind:class="iconClasses"
								v-bind:key="icon"
								/>
			</transition>	
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
				activated: false,
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
