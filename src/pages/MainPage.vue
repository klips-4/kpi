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
          <span class="fs-1 mx-2">
                  <i class="bi bi-file-earmark-word cursor-pointer"></i>
          </span>
          <button
              @click="mainStore.fetchEmployeeData()"
              class="btn btn-outline-dark fs-5 mx-1 mb-2 mb-md-0">Рассчитать
          </button>

          <div class="dropdown">
            <a class="btn btn-outline-dark fs-5 dropdown-toggle mx-1 mb-2 mb-md-0" href="#" role="button"
               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {{ selectedYear }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li class="cursor-pointer" v-for="year in years" :key="year"
                  @click="selectedYear = year">
                {{ year }}
              </li>
            </ul>
          </div>

          <div class="dropdown">
            <a class="btn btn-outline-dark fs-5 dropdown-toggle mx-1 mb-2 mb-md-0" href="#" role="button"
               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {{ months[selectedMonth - 1] || months[new Date().getMonth()] }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li v-for="(month, index) in months" :key="index"
                  @click="selectedMonth = index + 1">
                {{ month }}
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
    <div class="row g-1 flex-grow-1">
      <div class="col-md-10">
        <div class="h-100 d-flex align-items-center flex-column">
          <div class="table-responsive w-100">
            <table class="table table-borderless">
              <thead>
              <tr class="text-center align-middle border-bottom border-black fs-4">
                <th scope="col" colspan="1" class="border-end border-black"></th>

                <th scope="col" colspan="1" class="border-end border-black">Полученных/выполненных заявок</th>
                <th scope="col" colspan="1" class="border-end border-black">Уровень исполнения заявок</th>
                <th scope="col" colspan="1" class="border-end border-black">Рационализат. предложения</th>
                <th scope="col" colspan="1" class="border-end border-black">Уровень полученных заявок</th>
                <th scope="col" colspan="1" class="border-black">KPI сотрудника</th>
              </tr>
              </thead>
              <tbody class="table border-black border-bottom text-center fs-4">
              <tr v-for="(employee, index) in mainStore.employees.employeeStatistics" :key="index">
                <td @click="getEmployeeDetails(employee.employeeId)"
                    class="border-end border-bottom border-black align-middle text-center cursor-pointer">
                  {{ employee.lastName }} {{ employee.firstName }} {{ employee.middleName }}
                </td>
                <td class="border-end border-bottom border-black">{{ employee.receivedAppeals }} /
                  {{ employee.completedAppeals }}
                </td>
                <td class="border-end border-bottom border-black">
                  {{ getLevelApplicationExecution(employee.completedAppeals, employee.receivedAppeals) + ' ' + '%' }}
                </td>


                <td class="border-end border-bottom border-black text-danger cursor-pointer"
                    @dblclick="authStore.decodedUser?.Position === 'Начальник отдела' ? editRationalization(employee.employeeId) : null">
                  <span v-if="isEdit !== employee.employeeId"
                        class="text-danger">{{ getRationalizationValue(employee.employeeId) + ' ' + '%' }}</span>
                  <input
                      v-else
                      v-model="newRationalizationValue"
                      class="form-control text-center m-0 p-0 border-0 fs-4"
                      id="inputGroup-sizing-sm"
                      @keydown.esc.prevent="isEdit=false"
                      @keydown.enter.prevent="saveRationalization(employee.employeeId)"
                      @click.stop="editRationalization(employee.employeeId)"
                      type="text">
                </td>
                <td class="border-end border-bottom border-black">
                  {{ (((employee.receivedAppeals * 3) / mainStore.employees.receivedApplications) * 100).toFixed(0) }}
                </td>

                <td class="border-bottom border-black fw-bolder">
                  {{
                    employee.employeeKpi
                  }}
                </td>
              </tr>
              </tbody>
            </table>

          </div>

        </div>
      </div>
      <div class="col-md-2 pt-5 d-flex flex-column">
        <div class="row g-1 flex-grow-1">
          <div class="col-md-12 h-75">
            <div class="h-100 housing-borders d-flex align-items-center justify-content-center">
              <div class="row w-100 h-100">
                <h4 class="text-center h4">Лучший сотрудник месяца</h4>
                <div class="text-center fs-4">
                  <span class="mx-2">{{ (bestEmployeeMonth?.firstName)?.slice(0, 1) + '.' }}</span>
                  <span class="mx-2">{{ bestEmployeeMonth?.lastName }}</span>
                  <span class="fw-bold text-danger">{{ 'KPI=' + bestEmployeeMonth?.employeeKpi }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-1 flex-grow-1">
          <div class="col-md-12 h-75">
            <div class="h-100 housing-borders d-flex align-items-center justify-content-center">
              <div class="row w-100 h-100">
                <h4 class="text-center h4">Лучший сотрудник года</h4>
                <div class="text-center fs-4">
                  <span class="mx-2">{{ (bestEmployeeYear?.firstName)?.slice(0, 1) + '.' }}</span>
                  <span class="mx-2">{{ bestEmployeeYear?.lastName }}</span>
                  <span class="fw-bold text-danger">{{ 'KPI=' + bestEmployeeYear?.totalKPI }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="row g-1 flex-grow-1">
      <div class="col-md-12">
        <div class="h-100 housing-borders d-flex align-items-center justify-content-center">
          <div class="row w-100 h-100">
            <h4 class="text-center h4">KPI сотрудников по месяцам</h4>
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
                                                      return ''
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
                                            display: true,
                                            position: 'left',
                                            align: 'end',
                                            reverse: false,
                                            labels: {
                                                color: 'black',
                                                font: {
                                                    size: 14,
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
                                                    size: 14,
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
    labels: mainStore.periodKPI?.map(i => i.month) || [],
    datasets: (mainStore.periodKPI?.[0]?.employeeStatistics || []).map((employee, index) => ({
      label: `${employee.firstName} ${employee.lastName}`,
      data: mainStore.periodKPI.map(month => month.employeeStatistics[index].employeeKPI),
      backgroundColor: [
        '#A5A5A5',
        '#FFC000',
        '#5B9BD5'
      ][index % 3],
      barThickness: 45,
      datalabels: {
        display: true,
        color: 'black',
        font: {
          size: 14,
        },
        align: 'top',
        anchor: 'center',
        formatter: (value) => `${value}%`
      }
    }))
  }" :plugins="[ChartDataLabels]">
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-1 pt-2 pb-2 flex-grow-1">
      <div class="col-md-12">
        <div class="h-100 housing-borders d-flex align-items-center justify-content-center">
          <div class="row w-100 h-100">
            <h4 class="text-center h4">Стабильность в работе каждого сотрудника
            </h4>
            <div class="w-100" style="height: 35vh">
              <LineChart :options="{
                                maintainAspectRatio: false,
                                responsive: true,
                                plugins: {

                                    title: {
                                        display: true,
                                        text: 'ВЫХОД ТЕХНИКИ',
                                        color: 'white',
                                        font: {
                                            size: 18,
                                        }
                                    },
                                    datalabels: {
                                      display: false,
                                      color: 'white',
                                           align: 'middle',
                                           anchor: 'middle'
                                    },
                                    legend: {
                                        display: true,
                                        position: 'top',
                                        align: 'start',
                                        labels: {
                                            color: 'black',
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        grid: {
                                            display: false,
                                            color: '#FFFFFF'
                                        },
                                        ticks: {
                                            color: 'black',
                                            autoSkip: false,
                                            maxRotation: 0,
                                            minRotation: 0,
                                            padding: 0,
                                            font: {
                                                size: 14,
                                                weight: 'bold'
                                            }
                                        },

                                    },
                                    y: {
                                        grid: {
                                            display: true,
                                            color: '#FFFFFF'
                                        },
                                        ticks: {
                                            display: true,
                                            color: 'white',
                                        }
                                    }
                                }
                            }" :data="{
    labels: mainStore.periodKPI.map(i => i.month),
      datasets: (mainStore.periodKPI?.[0]?.employeeStatistics || []).map((employee, index) => ({
      label: `${employee.firstName} ${employee.lastName}`,
      data: mainStore.periodKPI.map(month => month.employeeStatistics[index].employeeKPI),
      backgroundColor: [
        '#A5A5A5',
        '#FFC000',
        '#5B9BD5'
      ][index % 3],
        borderColor: [
        '#A5A5A5',
        '#FFC000',
        '#5B9BD5'
      ][index % 3],
      barThickness: 45,
      datalabels: {
        display: true,
        color: 'black',
        font: {
          size: 14,
        },
        align: 'top',
        anchor: 'center',
        formatter: (value) => `${value}%`
      }
    }))

}"></LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>

import BarChart from "../components/Charts/BarChart.vue";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {ref, onMounted, computed, watch} from "vue";
import {useMainStore} from "@/stores/mainStore.js";
import router from "@/router/router.js";
import {nextTick} from 'vue';
import LineChart from "@/components/Charts/LineChart.vue";
import {useAuthStore} from "@/stores/authStore.js";


const mainStore = useMainStore()
const authStore = useAuthStore()

const newRationalizationValue = ref('')

onMounted(() => {
  mainStore.fetchEmployeeData()
  mainStore.fetchEmployeePeriodKPI()
})

const isEdit = ref(false)
const getEmployeeDetails = (employeeId) => {
  router.push({name: 'details', params: {employeeId}});
}

const getLevelApplicationExecution = (completed, received) => {
  if (received === 0) return 0;
  return ((completed / received) * 100).toFixed(0);
}

const getRationalizationValue = (employeeId) => {
  const razionalizationValue = mainStore.employees.employeeStatistics.find(r => r.employeeId === employeeId)?.razionalizationScore || 75;
  return razionalizationValue
};

const editRationalization = (employeeId) => {
  isEdit.value = employeeId
  newRationalizationValue.value = getRationalizationValue(employeeId);
  nextTick(() => {
    document.getElementById('inputGroup-sizing-sm')?.focus();
  });
}

const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref(new Date().getMonth() + 1);

watch([selectedMonth, selectedYear], ([newMonth, newYear]) => {
  selectedMonth.value = newMonth
  selectedYear.value = newYear
});

const saveRationalization = async (employeeId) => {
  isEdit.value = false
  try {
    await mainStore.updateRationalization({
      id: employeeId,
      value: newRationalizationValue.value,
      month: selectedMonth.value,
      year: selectedYear.value
    });

  } catch (error) {
    console.error('Ошибка сохранения:', error);
  }
}


const months = ref([
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
]);

const years = ref([
  2024, 2025
]);

const bestEmployeeMonth = computed(() => {

  const statistics = mainStore.employees.employeeStatistics.map(e => ({
    ...e,
  }));
  if (statistics.length === 0) return null;

  return statistics.reduce((prev, current) =>
      (prev.employeeKpi > current.employeeKpi ? prev : current)
  );
});

const bestEmployeeYear = computed(() => {
  const statistics = mainStore.periodKPI.map(e => ({
    ...e
  }))
  const employeesTotalKPIPeriod = {}
  statistics.map(i => i.employeeStatistics.forEach(emp => {
    if (!employeesTotalKPIPeriod[emp.employeeId]) {
      employeesTotalKPIPeriod[emp.employeeId] = {
        firstName: emp.firstName,
        lastName: emp.lastName,
        totalKPI: 0
      }
    }
    employeesTotalKPIPeriod[emp.employeeId].totalKPI += Math.round(emp.employeeKPI / statistics.length)
  }))


  const employeesTotalKPIArr = Object.entries(employeesTotalKPIPeriod).map(([id, data]) => ({
    employeeId: id,
    ...data
  }))

  let bestEmployee = employeesTotalKPIArr?.reduce((max, emp) => (emp.totalKPI > max.totalKPI ? emp : max), {totalKPI: -Infinity});

  return bestEmployee

})


</script>

<style scoped>

</style>