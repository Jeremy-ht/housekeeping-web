<template>
  <div class="home-container">

    <div class="home-container-item">

      <div class="item-one">
        <div id="main1" style="width: 480px;height: 480px;">

        </div>
      </div>


      <div class="item-two">
        <div id="main2" style="width: 400px;height: 400px;">

        </div>
      </div>

    </div>

  </div>
</template>


<script>
  import * as echart from 'echarts'
  import {getEchartsSex, getEchartsUser} from '../../api/common'

  export default {
    name: 'Dashboard',
    data() {
      return {
        opinionData: []
      }
    },
    mounted() {
      this.initEcharts()
    },

    methods: {
      async initEcharts() {
        await getEchartsSex().then(res => {
          if (res.success) {
            console.log(res.data.data)
            this.opinionData = []
            this.opinionData = res.data.data
          }
        })

        let myChart = echart.init(document.getElementById('main1'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '用户性别统计',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '性别',
              type: 'pie',
              radius: '50%',
              data:this.opinionData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]

        })

        await getEchartsUser().then(res => {
          if (res.success) {
            console.log(res.data.data)
            this.opinionData = []
            this.opinionData = res.data.data
          }
        })

        let myChart1 = echart.init(document.getElementById('main2'))
        // 绘制图表
        myChart1.setOption({
          title: {
            text: '用户增长图',
            left: 'center'
          },
          legend: {
            data: ['2021年'],
            left: 'left',
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
              '8月']
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, 1]
          },
          series: [{
            name: '2021年',
            data: this.opinionData,
            type: 'line'
          }]
        })

      }
    }
  }
</script>

<style scoped>
  .home-container {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .home-container-item{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item-one{
    width: 500px;
    height: 500px;
    margin-top: 30px;
  }
  .item-two{
    margin-top: 30px;
    width: 500px;
    height: 500px;
  }

</style>
