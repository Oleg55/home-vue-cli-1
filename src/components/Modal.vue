<template>
 <div class="">
	 <!-- Button trigger modal -->
		<button type="button" 
		class="btn btn-primary" 
		data-bs-toggle="modal" 
		data-bs-target="#exampleModal"
		v-bind:disabled="!formReady">
			Send Data
		</button>

		<!-- Modal -->
		<div class="modal fade" 
		id="exampleModal" 
		tabindex="-1" 
		aria-labelledby="exampleModalLabel" 
		aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
					<table class="table table-bordered ">
						<tbody>
							<tr v-for="(field, i) in info" :key="i">
								<td>{{ field.name }}</td>
								<td>{{ field.value }}</td>
							</tr>
						</tbody>
					</table>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" value="true" v-on:click="formDone(true)" data-bs-dismiss="modal">Ok</button>
					</div>
				</div>
			</div>
		</div>
</div>
</template>



<script>
	export default {
		props: ['info','fieldsDone'],
		computed:{
				formReady() {
					return this.fieldsDone === this.info.length;
				},				
		},
		methods: {
				formDone(yes) {
					this.$emit('stepsec', yes);
			}
		}
	}
</script>