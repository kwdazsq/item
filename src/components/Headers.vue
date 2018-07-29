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
	line-height : 90PX;
	width : 100%;
}
.head-inner {
	/*width : 1200px;*/
	width : 100%;
	/*margin : 0 auto;*/
}
.head-inner img {
	width :50px;
	margin-top : 20px;
	margin-left: 5%;
}
.head-inner span{
	position : relative;
	top : -15px;
}
.head-nav {
	float : right;
	width : 20%;
	margin-right: 3%;
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
@media only screen and (max-width: 1024px) {
	.head {
	background : #FFFF00;
	color : #b2b2b2;
	height : 90px;
	line-height : 90PX;
	width : 100%;
	}
	.head-nav {
	width : 25%;
	}
}
@media only screen and (min-width: 426px) and (max-width: 768px) {
	.head {
	background : #EE82EE;
	color : #b2b2b2;
	height : 90px;
	line-height : 90PX;
	width : 100%;
	}
	.head-inner span{
		font-size: 0px;
	}
	.head-nav {
	width : 35%;
	}
}
@media only screen and (max-width: 425px) {
	.head {
	background : #00FFFF;
	color : #b2b2b2;
	height : 90px;
	line-height : 90PX;
	width : 100%;
	}
	.head-inner span{
		font-size: 0px;
	}
	.head-nav {
	width : 50%;
	}
}
</style>
