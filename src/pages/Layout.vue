<template>
	<div class="layout">
		<div class="layout-left">
			<div class="left-block">
				<h2>产品</h2>
				<div v-for="(product,index) in productlist">
					<h3>{{product.category}}</h3>
					<ul>
						<li v-for="(item,index) in product.list">
							<!-- <router-link active-class="active" :to="{path: item.url}" :key="index" >{{item.name}}</router-link> -->
							<router-link active-class="active" :to="{path:'/graph/'+item.tag}" :key="index" >{{item.name}}</router-link>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="index%2 == 0" class="hr"></div>
				</div>
			</div>
			<div class="left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in news">
						<a href="_blank":href="item.url">{{ item.author_name }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="layout-right">
			<div class="size">
				<swiper :options="swiperOption">
					<swiper-slide>
						<a href="http://www.baidu.com">
							<img class="swiperimg"  src="../assets/images/j1.jpg" alt="">
						</a>
			                    	</swiper-slide>
			                    	<swiper-slide>
				                       	<a href="http://www.baidu.com">
				                        		<img class="swiperimg"  src="../assets/images/j2.jpg" alt="">
				                        	</a>
			                    	</swiper-slide>
			                    	<swiper-slide>
				                        	<a href="http://www.baidu.com">
				                        		<img class="swiperimg"  src="../assets/images/j3.jpg" alt="">
				                        	</a>
			                    	</swiper-slide>
		                    		<swiper-slide>
				                        	<a href="http://www.baidu.com">
				                        		<img class="swiperimg"  src="../assets/images/j4.jpg" alt="">
			                        		</a>
			                    	</swiper-slide>
			                    	<div class="swiper-pagination"  slot="pagination"></div>
			                    	<div class="swiper-button-prev" slot="button-prev"></div>
		                    		<div class="swiper-button-next" slot="button-next"></div>
		                    	</swiper>
	       		</div>
	       		<div class="index-board-list">
	       			<div class="index-board-item" v-for="(borad,index) in boradlist"  :class="['index-board-' + borad.tag , {'line-last' : index%2 !==0}]">
	       				<div class="index-board-item-inner">
	       					<h2>{{borad.title}}</h2>
	       					<p>{{borad.desc}}</p>
	       					<div class="index-board-button ">
	       						<router-link  target="_blank"  :to="{path:'/details/'+borad.tag}"  class="button">立即购买</router-link>
	       					</div>
				                </div>
			            	</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name : 'layout',
		data () {
			return {
				swiperData : [],
				swiperOption: {
			                	pagination: {
				                    	el: '.swiper-pagination',
				                },
				                autoplay: {
				                delay: 1000,//1秒切换一次
				                },
				                loop:true,
				                navigation: {
				                    	nextEl: '.swiper-button-next',
				                    	prevEl: '.swiper-button-prev',
				                },
			            	},
			            	boradlist : [
			            	{
			            		title:"开放产品",
		                                        	desc:"立即购买可以点击",
		                                	tag:"earth",
		                                },
			 	{
	                                        		title:"开放产品",
	                                        		desc:"立即购买可以点击",
		                                        	tag:"car",
	                                     	},
	                                        	{
		                                        	title:"开放产品",
		                                        	desc:"立即购买可以点击",
		                                        	tag:"loud",
	                                     	},
	                                    	{
		                                        	title:"开放产品",
		                                        	desc:"立即购买可以点击",
		                                        	tag:"hill",
	                                     	},
	                                     	] ,
	                                     	news:[],
	                                     	productlist:[
	                                     	{
	                                     		category:"手机",
	                                     		list:[
	                                     		{
	                                     			name:"文字",
			                                            	tag:"Day",
			                                            	hot:true,
		                                        	},
		                                        	{
			                                            	name:"文字",
		                                       	     	url:"http://www.baidu.com",
			                                            	hot:false,
		                                        	},
		                                        	{
			                                            	name:"文字",
			                                            	url:"http://www.baidu.com",
			                                            	hot:false,
		                                        	},
		                                        	{
			                                            	name:"文字",
			                                            	url:"http://www.baidu.com",
			                                            	hot:false,
		                                        	}
		                                        	]
	                                    	},
	                                    	{
	                                    		category:"手机",
		                                        	list:[
		                                        	{
		                                        		name:"文字",
		                                            		url:"http://www.baidu.com",
		                                            		hot:false,
		                                           	},
		                                        	{
		                                            		name:"文字",
		                                            		url:"http://www.baidu.com",
		                                            		hot:true,
		                                        	},
		                                        	{
		                                           		name:"文字",
		                                            		url:"http://www.baidu.com",
		                                            		hot:false,
		                                        	},
		                                       	]
	                                    	}
                                    		]
			}
		},
		created(){
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
				params:{
					count:10,
					type:"top"
				}
			})
			.then(res => {
				console.log(res.data.result.data);
				var $s=[];
				var $i;
				for($i=0;$i<10;$i++){
					$s[$i] = res.data.result.data[$i];
				}
				this.news=$s;
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
</script>
<style scoped>
.layout {
	width: 1200px;
    	margin: 0 auto;
    	overflow: hidden;
}
.layout-left {
	float: left;
    	width: 300px;
    	text-align: left;
}
.left-block {
	margin: 15px;
    	background: #fff;
    	box-shadow: 0 0 1px #ddd;
    	height: 372px;
}
.left-block h2 {
	background: #4fc08d;
   	color: #fff;
  	padding: 10px 15px;
   	margin-bottom: 20px;
}
.left-block h3 {
	padding: 0 15px 5px 15px;
    	font-weight: bold;
    	color: #222;
}
.left-block ul {
    	padding: 10px 15px;
    	list-style: none;
}
.left-block li {
	padding: 5px;
}
.active {}
.hot-tag {
	background: red;
    	color: #fff;
}
.lastest-news {
    	min-height: 350px;
}
.hr {
	margin-bottom: 20px;
    	height: 1px;
    	width: 100%;
    	background: #ddd;
}
.layout-right {
	float: left;
    	width: 900px;
}
.size {
	margin-top: 15px;
}
.swiperimg {
	width: 100%;
}
.swiper-pagination {}
.index-board-list {
	margin-top: 20px;
    	overflow: hidden;
}
.index-board-item {
	float: left;
    	width: 400px;
    	background: #fff;
    	box-shadow: 0 0 1px #ddd;
    	padding: 20px;
    	margin-right: 20px;
    	margin-bottom: 20px;
}
.index-board-item h2 {
    	font-size: 18px;
    	font-weight: bold;
    	color: #000;
    	margin-bottom: 15px;
}
.index-board-item-inner {
	min-height: 125px;
    	padding-left: 120px;
}
.index-board-car .index-board-item-inner {
    	background: url(../assets/images/2.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
    	background: url(../assets/images/3.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
    	background: url(../assets/images/1.png) no-repeat;
}
.index-board-hill .index-board-item-inner {
    	background: url(../assets/images/4.png) no-repeat;
}
.index-board-button {
	margin-top: 20px;
}
.button {
	background: #4fc08d;
    	color: #fff;
        	display: inline-block;
        	padding: 10px 20px;
        	cursor: pointer;
}
.line-last {
    margin-right: 0;
}
</style>
