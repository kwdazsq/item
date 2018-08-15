<template>
  <div>
	<!--为echarts准备一个具备大小的容器dom-->
	<div id="main" style="width: 1200px;height: 400px;" class="geshi"></div>
  </div>
</template>
<script>
	import echarts from 'echarts'
	export default {
		name: 'week',
		data () {
			return {
            }
        },
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
               })
            }
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
