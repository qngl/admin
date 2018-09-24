<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 1000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 5,
          left: '2%',
          right: '2%',
          bottom: 30,
          containLabel: true
        },
        legend: {
          data: ['Approved', 'Activated', 'Declined', 'Submitted', 'Failed to Submit'],
          left: 'center',
          bottom: '5'
        },
        xAxis: [{
          type: 'category',
          data: ['2018-09-22', '2018-09-23', '2018-09-24', '2018-09-25', '2018-09-26', '2018-09-27', '2018-09-28'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'Approved',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [12, 23, 23, 33, 43, 53, 63],
          animationDuration
        }, {
          name: 'Activated',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [13, 22, 23, 33, 35, 33, 44],
          animationDuration
        }, {
          name: 'Declined',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [3, 5, 3, 13, 2, 3, 4],
          animationDuration
        }, {
          name: 'Submitted',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [5, 5, 12, 13, 23, 45, 12],
          animationDuration
        }, {
          name: 'Failed to Submit',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [3, 4, 3, 2, 1, 1, 2],
          animationDuration
        }]
      })
    }
  }
}
</script>
