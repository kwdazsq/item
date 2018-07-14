<template>
	<div >
		<h1 class="head">A:基于时间的数据曲线</h1>
		<div class="select">
			<div class="click">
				<ul>
					<router-link active-class="active" :to="{path:'/graph/'+nav.tag}" :key="index" tag="li" v-for="(nav,index) in detailsNav">{{ nav.title }}</router-link>
				</ul>
			</div>
				<div class="case">从
				 	<el-date-picker v-model="value" type="date" placeholder="选择日期" class="case-el">
				 	</el-date-picker>到
				 	<el-date-picker v-model="value1"  type="date"  placeholder="选择日期" class="case-el">
				 	</el-date-picker>
				 </div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'drawing',
	data () {
		return {
			detailsNav:[
				{
				    title:"天",
				    tag:"day",
				},
				{
				    title:"周",
				    tag:"week",
				},
				{
				    title:"月",
				    tag:"month",
				},
				{
				    title:"三月",
				    tag:"threemonths",
				},
				{
				    title:"一年",
				    tag:"year",
				},
				{
				    title:"今年",
				    tag:"thisyear",
				},
				{
				    title:"所有",
				    tag:"all",
				},
			],
                                        	pickerOptions: {
			        	disabledDate(time) {
			           		return time.getTime() > Date.now();
			      	}
			},
			 value: '',
			 value1: '',
		}
	},
}
</script>
<style scoped>
*{
	text-decoration: none;
}
.head{
	text-align:center;
}
.select{;
	text-align:center;
	top: 0;
	left: 0;
	right: 0;
	 height: 50px;
	 width: 100%;
	}
.click{
	margin-left: 100px;
	float: left;
}
.click ul {
	list-style: none;
	margin: 1pc;
	border: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
}
.click li {
	text-align:center;
	display: inline-block;
	padding: 0 12px;
	flex-grow: 0;
	text-decoration: none;
	cursor: pointer;
}
.click li.active{
	background: #DCDCDC;
	padding: 2px 10px;
	color:#000;
}
.case{
	display: inline-block;
	float: right;
	margin-right: 150px;
}
.case-el{
	height: 8px;
	width: 160px;
}
</style>
