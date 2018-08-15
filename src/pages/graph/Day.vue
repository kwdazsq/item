<template>
  <div>
	<!--为echarts准备一个具备大小的容器dom-->
	<div id="main" style="width: 1200px;height: 400px;" class="geshi"></div>
  </div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		name: 'day',
		data () {
			return {
				data:[],
			}
		},
		methods:{
			drawPie(id){
				var data = [];
				var now = +new Date(1997, 9, 3);
				var oneDay = 24 * 3600 * 1000;
				var value = Math.random() * 1000;
				for (var i = 0; i < 1000; i++) {
				    data.push(randomData());
				}
				function randomData() {
				    now = new Date(+now + oneDay);
				    value = value + Math.random() * 21 - 10;
				    return {
				        name: now.toString(),
				        value: [
				            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				            Math.round(value)
				        ]
				    }
				}
			 	this.charts = echarts.init(document.getElementById(id))
				this.charts.setOption({
				    tooltip: {
				        trigger: 'axis',
				        formatter: function(params) {
				            params = params[0];
				            var date = new Date(params.name);
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
				        }
				    },
				    yAxis: {
				        type: 'value',
				        boundaryGap: [0, '100%'],
				        position:'right',
				        splitLine: {
				            show: false
				        }
				    },
				    series: [{
				        name: '模拟数据',
				        type: 'line',
				        showSymbol: false,
				        hoverAnimation: false,
				        data: data
				    }]
			   })
			},
		},
		//调用
		mounted(){
			this.$nextTick(function() {
				this.drawPie('main')
			})
		}
	}
</script>
<style scoped>
</style>
