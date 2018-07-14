<template>
	<div >
		品牌营销:{{ getOrder }}
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
</style>
