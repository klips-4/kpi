<template>
  <div v-if="mainStore.employeeLabors"
       class="row g-1 flex-grow-1">
    <div v-for="empLabor in mainStore.employeeLabors" class="row g-1 flex-grow-1">
      <div class="col-md-6">
        <div class="d-flex align-items-center px-4">
          <div class="col-6">
            <span class="fs-4">Дата приема на работу</span>
          </div>
          <div class="col-6">
            <input
                v-model="empLabor.dateHiring"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Дата увольнения</span>
          </div>
          <div class="col-6">
            <input
                v-model="empLabor.desiredDismissal"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Организация</span>
          </div>
          <div class="col-6">
            <input
                v-model="empLabor.agency"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Структурное подразделение</span>
          </div>
          <div class="col-6">
            <input v-model="empLabor.structuralDivision"
                   class="form-control"
                   id="disabledInput"
                   type="text"
                   disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Должность</span>
          </div>
          <div class="col-6">
            <input
                v-model="empLabor.position"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center align-items-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Загрузка...</span>
    </div>
  </div>
</template>

<script setup>
import {onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/mainStore.js";

const route = useRoute();
const mainStore = useMainStore();

onMounted(() => {
  if (route.params.employeeId) {
    mainStore.fetchEmployeeLaborActivity(route.params.employeeId);
  }
});

watch(() => route.params.employeeId, (newId) => {
  if (newId) {
    mainStore.fetchEmployeeLaborActivity(newId);
  }
});
</script>
