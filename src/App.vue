<template>
<div class="container mt-3">
				<form v-if="formDoneN" @submit.prevent="sendForm">
				<div>
					<app-progress 
						v-bind:info="info"
						v-bind:fieldsDone="fieldsDone">
					</app-progress>
				
					<app-action 
						v-for="(field, i) in info"
						v-bind:name="field.name"
						v-bind:value="field.value"
						v-bind:valid="field.valid"
						v-bind:key="i" 
						v-on:step="	onInput($event,i)">
					</app-action>

				</div>
				<!-- <button class="btn btn-primary" 
						v-bind:disabled="!formReady">
					Send Data
				</button> -->
			<div>
				<app-modal 
					v-bind:info="info"
					v-bind:fieldsDone="fieldsDone"
					v-bind:formReady="formReady"
					v-on:stepsec="formDone">

				</app-modal>
			</div>
			</form>
			<div v-else>
				<h2>All Done</h2>
			</div>
			<pre>{{ info }}</pre>

	  <div class="container-fluid" id="app">
    <h1 class="animate__animated animate__bounce" 
		style="color:#000">An animated element</h1>
  	</div>


</div>
</template>



<script>

	import AppProgress from '@/components/Progress.vue'

	import AppAction from '@/components/Action.vue'

	
	import AppModal from '@/components/Modal.vue'


	export default {

			components: {
				AppAction,
				AppProgress,
				AppModal,
				// 'app-action': Action // или вот так
			},
			data: () => ({
				info: [
					{
						name: 'Name',
						value: '',
						pattern: /^[a-zA-Z ]{2,30}$/
					},
					{
						name: 'Phone',
						value: '',
						pattern: /^[0-9]{7,14}$/
					},
					{
						name: 'Email',
						value: '',
						pattern: /.+/
					},
					{
						name: 'Some Field 1',
						value: '',
						pattern: /.+/
					},
					{
						name: 'Some Field 2',
						value: '',
						pattern: /.+/
					}
				],
				formDoneN: true,
				showConfirm: false
			}),
			computed:{
				fieldsDone() {
				//	return //[0, info.length] this.info.reduce(element)
				let sum = this.info.reduce(function(total, item){
					return total + item.valid;
				},0);
				return sum;
				},
				formReady() {
					return this.fieldsDone === this.info.length;
				},

			},
			methods: {
				onInput(value, i) {
					let field = this.info[i];
					field.value = value.trim();
					field.valid = 	field.pattern.test(field.value);
				},
				sendForm() {
					if(this.formReady){
						this.formDone = true;
					}
				},
				formDone(yes){
					if(yes === true){
						console.log(yes);
						this.formDoneN = false;
					}else{
						console.log('no');
					}
					
				},
			},
			created() {
				return this.info.forEach(element => {
					element.valid = element.pattern.test(element.value); // hw element.pattern.test(element.value)
				});
			}
		}
</script>