<template>
  <div class="container-fluid px-3 py-1 h-100 d-flex flex-column">
    <div class="row g-1 h-auto">
      <div class="col-md-6">
        <div class="h-100 d-flex justify-content-center justify-content-md-start align-items-center px-4">
            <span class="fw-bold fs-2">Сотрудники отдела ОСА</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 d-flex  justify-content-md-end justify-content-center align-items-center px-3">
          <button class="btn btn-outline-dark fs-5 mx-1 mb-2 mb-md-0">Рассчитать</button>
          <button class="btn btn-outline-dark fs-5 dropdown-toggle mb-2 mb-md-0" data-bs-toggle="dropdown">2025</button>
          <button class="btn btn-outline-dark fs-5 dropdown-toggle mx-1 mb-2 mb-md-0" data-bs-toggle="dropdown">Май</button>
        </div>
      </div>

    </div>
    <div class="row g-1 flex-grow-1">
      <div class="col-md-12">
        <div class="h-100 d-flex align-items-center flex-column">
          <div class="table-responsive w-100">
            <table class="table table-borderless">
              <thead>
              <tr class="text-center align-middle border-bottom border-black">
                <th scope="col" colspan="1" class="border-end border-black"></th>
                <th scope="col" colspan="1" class="border-end border-black">Выполнение плана мероприятий</th>
                <th scope="col" colspan="1" class="border-end border-black">Полученных/выполненных заявок</th>
                <th scope="col" colspan="1" class="border-end border-black">Уровень исполнения заявок</th>
                <th scope="col" colspan="1" class="border-black">Исполнение поручений</th>
                <th scope="col" colspan="1" class="border-black">Рационализат. предложения</th>
                <th scope="col" colspan="1" class="border-black">KPI Май</th>
              </tr>
              </thead>
              <tbody class="table border-black border-bottom text-center fs-5">
              <tr>
                <td class="border-end border-bottom border-black align-middle text-center">Надолько Д.Н.</td>
                <td class="border-end border-bottom border-black">100/100</td>
                <td class="border-end border-bottom border-black">140/140</td>
                <td class="border-end border-bottom border-black">100 %</td>
                <td class="border-end border-bottom border-black">75 %</td>
                <td class="border-end border-bottom border-black">92 %</td>
                <td class="border-bottom border-black">90 %</td>
              </tr>
              <tr>
                <td class="border-end border-bottom border-black align-middle text-center">Мустафина М.Р.</td>
                <td class="border-end border-bottom border-black">20/20</td>
                <td class="border-end border-bottom border-black">30/35</td>
                <td class="border-end border-bottom border-black">86 %</td>
                <td class="border-end border-bottom border-black">75 %</td>
                <td class="border-end border-bottom border-black">100 %</td>
                <td class="border-bottom border-black">90 %</td>
              </tr>
              <tr>
                <td class="border-end border-bottom border-black align-middle text-center">Абдуллин К.П.</td>
                <td class="border-end border-bottom border-black">20/20</td>
                <td class="border-end border-bottom border-black">30/35</td>
                <td class="border-end border-bottom border-black">86 %</td>
                <td class="border-end border-bottom border-black">75 %</td>
                <td class="border-end border-bottom border-black">100 %</td>
                <td class="border-bottom border-black">90 %</td>
              </tr>
              <tr>
                <td class="border-end border-bottom border-black align-middle text-center">Шарипов Г.Ф.</td>
                <td class="border-end border-bottom border-black">20/20</td>
                <td class="border-end border-bottom border-black">30/35</td>
                <td class="border-end border-bottom border-black">86 %</td>
                <td class="border-end border-bottom border-black">75 %</td>
                <td class="border-end border-bottom border-black">100 %</td>
                <td class="border-bottom border-black">90 %</td>
              </tr>
              </tbody>
            </table>

          </div>

        </div>
      </div>

    </div>
    <div class="row g-1 flex-grow-1">
      <div class="col-md-6">
        <div class="h-100 housing-borders d-flex align-items-center justify-content-center">
          <div class="row w-100 h-100">
            <h4 class="text-center h4">KPI</h4>
            <div class="w-100" style="height: 35vh">
              <BarChart :options="{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    devicePixelRatio: 1,
                                    layout: {
                                        padding: {
                                            top: 13,
                                        }
                                    },
                                    plugins: {
                                        datalabels: {
                                            color: 'red',
                                            font: {
                                                size: 10,
                                                weight: 'bold',
                                            },
                                        },
                                                                       tooltip: {
                                           enabled: true,
                                              backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                              titleColor: 'white',
                                              bodyColor: 'white',
                                              callbacks: {
                                                  label: function(tooltipItem) {
                                                    if(tooltipItem.dataIndex===3) {
                                                      return 'Рост на 72,1 млрд рублей по сравнению с январем-сентябрем 2023 года'
                                                    }
                                                  }
                                              }
                                          },
                                        title: {
                                            display: false,
                                            text: '',
                                            color: 'white',
                                            font: {
                                                size: 15,

                                            }
                                        },
                                        legend: {
                                            display: false,
                                            position: 'top',
                                            align: 'end',
                                            reverse: false,
                                            labels: {
                                                color: 'white',
                                                font: {
                                                    size: 16,
                                                }
                                            },
                                        }
                                    },

                                    scales: {
                                        x: {
                                            display: true,
                                            stacked: false,
                                            ticks: {
                                                display: true,
                                                color: 'black',
                                                autoSkip: false,
                                                maxRotation: 0,
                                                minRotation: 0,
                                                padding: 0,
                                                font: {
                                                    size: 11,
                                                    weight: 300,
                                                },
                                            },


                                        },
                                        y: {
                                            display: true,
                                            stacked: false,
                                            grid: {
                                                display: true,
                                                drawBorder: false,
                                                color: (context) => {
                                                    if (context.index === 0) {
                                                        return 'white'
                                                    }
                                                }
                                            },
                                            ticks: {
                                                display: false,
                                                color: 'white',
                                                autoSkip: false,
                                                maxRotation: 0,
                                                minRotation: 0,
                                                padding: 0,
                                                font: {
                                                    size: 14,
                                                    weight: 300
                                                }
                                            },

                                        }
                                    }
                                }"

                        :data="{
    labels: ['Надолько Д.М', 'Мустафина М.Р.', 'Абдуллин К.П.', 'Шарипова Г.Ф.'],
    datasets: [{
        data:  [95, 85, 75, 90],
        backgroundColor: [
            '#4472C4',
        ],
        barThickness: 40,
        datalabels: {
            display: true,
            color: 'black',
            font: {
                size: 14,
            },
            align: 'end',
            anchor: 'end',
            padding: {
              top:-15
            }
        }
    }]
}" :plugins="[ChartDataLabels]">
              </BarChart>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">

      </div>

      <div class="col-md-4">

      </div>
    </div>
  </div>
</template>

<script setup>
import BarChart from "../components/Charts/BarChart.vue";
import ChartDataLabels from "chartjs-plugin-datalabels";
</script>

<style scoped>

</style>