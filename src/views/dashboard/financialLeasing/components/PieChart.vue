<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

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
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '5',
          data: [
            'Approved',
            'Activated',
            'Declined',
            'Submitted',
            'Failed to Submit'
          ]
        },
        calculable: true,
        series: [
          {
            name: 'Today\'s Proposals',
            type: 'pie',
            center: ['50%', '38%'],
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 32, name: 'Approved' },
              { value: 24, name: 'Activated' },
              { value: 14, name: 'Declined' },
              { value: 10, name: 'Submitted' },
              { value: 5, name: 'Failed to Submit' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 1000
          }
        ]
      })
    }
  }
}
</script>
