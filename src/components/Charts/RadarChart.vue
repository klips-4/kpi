<template><Radar :options="chartOptions" :data="chartData" :plugins="chartPlugins"></Radar></template>
<script>
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

export default {
  name: 'RadarChart',
  components: { Radar },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => { }
    },
    chartPlugins: {
      type: Array,
      default: () => [ ]
    }
  },
}
</script>