<template>
  <div class="container">
    <div id="main" style="width: 1000px;height: 500px;">

    </div>
  </div>
</template>

<script>
  import * as echart from 'echarts'
  import { getEchartsInfo } from '../../api/common'

  export default {
    name: 'info',
    data() {
      return {
        opinionData:  []
      }
    },
    mounted() {
      this.initEcharts()
    },

    methods: {
      async initEcharts() {
        await getEchartsInfo().then(res => {
          if (res.success) {
            console.log(res.data.data)
            this.opinionData = []
            this.opinionData = res.data.data
          }
        })

        let myChart = echart.init(document.getElementById('main'))

        // 绘制图表
        myChart.setOption({
          title: {
            text: '家政人员条形图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2021年']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 1]
          },
          yAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
              '8月', '9月','10月', '11月', '12月']
          },
          series: [{
            name: '2021年',
            data: this.opinionData,
            type: 'bar'
          }]
        })

      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  #main {
    margin: 20px auto;
  }
</style>
