<template>
	<div class="head">
		<div class="head-inner">
			<router-link to="/">
				<img src="../assets/logo.png" >
			</router-link>
			<span>文字文字文字文字文字文字文字文字文字文字文字文字</span>
			<div class="head-nav">
				<ul class="head-list">
					<li>登陆</li>
					<li class="list-pile">|</li>
					<li>注册</li>
					<li class="list-pile">|</li>
					<li>关于</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name : 'headers',
		data () {
			return {
			}
		}
	}
</script>
<style scoped>
.head {
	background : #363636;
	color : #b2b2b2;
	height : 90px;
	line-height : 60px;
	width : 100%;
}
.head-inner {
	width : 1200px;
	margin : 0 auto;
}
.head-inner img {
	width : 50px;
	margin-top : 20px;
}
.head-inner span{
	position : relative;
	top : -15px;
}
.head-nav {
	float : right;
}
.head-list {
	    list-style: none;
}
.head-nav li {
	cursor : pointer;
	float: left;
}
.list-pile {
	padding : 0 10px;
	}
</style>
