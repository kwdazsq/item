<template>
	<div  class="car">
		<p>品牌营销:{{ getOrder }}</p>
	</div>
</template>
<script>
export default{
	name:"car",
	data(){
		return{
		}
	},
	computed:{
		getOrder(){
			return this.$store.getters.getOrder
		}
	}
}
</script>
<style >
@media only screen and (max-width: 700px) {
	/*.car{
		width: 100%;
	}*/
	/*.car p {
		width: 325px;
		word-break: break-all;
	}*/
}
</style>
