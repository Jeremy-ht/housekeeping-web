<template>
  <div class="container">
    <div id="main" style="width:800px;height: 540px;">

    </div>
  </div>
</template>

<script>
  import * as echart from 'echarts'
  import {getEchartsYY} from '../../api/common'

  export default {
    name: 'chart',
    data() {
      return {
        charts: '',
        opinion: ['男', '女'],
        opinionData: []
      }
    },
    mounted() {
      this.initEcharts()
    },

    methods: {
      async initEcharts() {
        await getEchartsYY().then(res => {
          if (res.success) {
            this.opinionData = []
            this.opinionData = res.data.data
          }
        })

        let myChart = echart.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '家政预约增长条形图'
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
              '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 1]
          },
          series: [{
            data: this.opinionData,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
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
