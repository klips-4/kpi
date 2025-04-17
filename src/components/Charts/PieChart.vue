<template><Pie :options="chartOptions" :data="chartData" :plugins="chartPlugins"></Pie></template>
<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
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