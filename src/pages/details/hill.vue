<template>
	<div>
		勇攀高峰:{{ getTotalprice }}
	</div>
</template>
<script>
export default{
	name:"hill",
	data(){
		return{
		}
	},
	computed:{
		getTotalprice(){
			return this.$store.getters.getTotalprice
		}
	}
}
</script>
<style>
</style>
