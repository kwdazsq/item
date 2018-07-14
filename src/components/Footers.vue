<template>
	<div class="foot">
		<div class="foot-nav">
				<ul class="foot-list">
					<li>关于我们</li>
					<li class="list-pile">|</li>
					<li> 经典案例</li>
					<li class="list-pile">|</li>
					<li>新闻动态</li>
					<li class="list-pile">|</li>
					<li>关于我们</li>
				</ul><br/>
			</div>
		<span>底部底部底部底部底部底部底部底部底部底部底部底部底部底部</span>
	</div>
</template>
<script>
	export default {
		name : 'footers',
		data () {
			return {
			}
		}
	}
</script>
<style scoped>
.foot{
	background : #e3e4e8;
	height : 100px;
	width : 100%;
	text-align : center;
	line-height : 50px;
	margin-top : 20px;
}
.foot-nav {
	float : center;
}
.foot-nav ul {
	margin-left: 37.8%;
}
.foot-nav li {
	cursor : pointer;
	float: left;
}
.foot-list {
	list-style: none;
}
.list-pile {
	padding : 0 3px;
}
.foot span{
}
</style>
