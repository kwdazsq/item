<template>
  <div>
	<!--为echarts准备一个具备大小的容器dom-->
	<div id="main" style="width: 1200px;height: 400px;" class="geshi"></div>
  </div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		name: 'year',
		data () {
			return {
				data:[],
			}
		},
		created:function () {
			this.$axios.post('http://47.75.66.0:80/interview_api/price_time_series', {
				type:'one_year',
			})
			.then(res => {
				this.data = res.data;
				this.nian();
				this.charts.setOption({
					series: [{
						data: this.data
					}]
				});
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		methods:{
			drawPie(id){
			 	this.charts = echarts.init(document.getElementById(id))
				this.charts.setOption({
				tooltip: {
					trigger: 'axis',
					formatter: function (params) {
						params = params[0];
						var date = new Date(params.value[0]);
						return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
					},
					axisPointer: {
						animation: false
					}
				},
				xAxis: {
					type: 'time',
					splitLine: {
						show: false
					},
					maxInterval: 3600 * 24 * 1000,
					axisLabel: {
	        	 		formatter: function (value, index) {
							var date = new Date(value);
							if(date.getDate() === 1){
								return date.getFullYear() + '年' + (date.getMonth()+1) + '月';
							}
						},
					},
				},
				yAxis: {
					type: 'value',
					boundaryGap: [0, '100%'],
					position:'right'
				},
				series: [{
					name: '模拟数据',
					type: 'line',
					showSymbol: false,
					hoverAnimation: false,
					data: this.data
				}]
			   })
			},
			nian(){
				var $data = [];
				var $len = this.data.market_line.length;
				for(var $i=0; $i<$len; $i++){
					var $value = {
						value: [
							this.data.market_line[$i].timestamp,
							this.data.market_line[$i].price*1000
						]
					};
					$data.push($value);
				}
				this.data = $data;
			},
			getDatas(){
				let that = this;
				setInterval(function () {
					that.$axios.post('http://47.75.66.0:80/interview_api/price_time_series', {
						type:'one_year',
					 })
					 .then(res => {
						that.data = res.data;
						that.nian();
					 })
					 .catch(function (error) {
						console.log(error);
					 });
					that.charts.setOption({
						series: [{
							data: that.data
						}]
					});
				}, 1000*3600);
			},
		},
		//调用
		mounted(){
			this.$nextTick(function() {
				this.drawPie('main')
			})
			this.getDatas()
		}
	}
</script>
<style scoped>
</style>
