<template>
  <Line :data="chartData" :options="options"/>
</template>
<script>
import {Line} from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale, ScatterController} from 'chart.js'

import 'chartjs-plugin-datalabels';

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale, ScatterController)

import {Chart, LineController} from 'chart.js';

Chart.register(LineController);

export default {
  name: 'line-chart',
  components: {Line},
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => {
      }
    }
  }
};
</script>