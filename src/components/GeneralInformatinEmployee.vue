<template>
  <div v-if="mainStore.employeeDetails" class="row g-1 flex-grow-1">
    <div class="row g-1 flex-grow-1">
      <div class="col-md-6">
        <div class="d-flex align-items-center px-4">
          <div class="col-6">
            <span class="fs-4">Фамилия</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.lastName"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Имя</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.firstName"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Отчество</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.middleName"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Дата рождения</span>
          </div>
          <div class="col-6">
            <input v-model="mainStore.employeeDetails.birthDate"
                   class="form-control"
                   id="disabledInput"
                   type="text"
                   disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Полных лет</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.age"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex align-items-center px-4">
          <div class="col-6">
            <span class="fs-4">Рабочий телефон</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.workPhone"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Мобильный телефон</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.mobilePhone"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">E-mail</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.email"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-1 flex-grow-1">
      <div class="col-md-6">
        <div class="d-flex align-items-center px-4">
          <div class="col-6">
            <span class="fs-4">Дата приема на работу</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.hireDate"
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
            <input
                v-model="mainStore.employeeDetails.structuralDivision"
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
                v-model="mainStore.employeeDetails.position"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Кабинет</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.office"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex align-items-center px-4">
          <div class="col-6">
            <span class="fs-4">Пол</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.gender"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-1 flex-grow-1">
      <div class="col-md-6">
        <div class="d-flex align-items-center px-4">
          <div class="col-6">
            <span class="fs-4">Место рождения</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.birthPlace"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Гражданство</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.citizenship"
                class="form-control"
                id="disabledInput"
                type="text"
                disabled>
          </div>
        </div>
        <div class="d-flex align-items-center px-4 mt-2">
          <div class="col-6">
            <span class="fs-4">Семейное положение</span>
          </div>
          <div class="col-6">
            <input
                v-model="mainStore.employeeDetails.maritalStatus"
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
    mainStore.fetchEmployeeGeneralData(route.params.employeeId);
  }
});

watch(() => route.params.employeeId, (newId) => {
  if (newId) {
    mainStore.fetchEmployeeGeneralData(newId);
  }
});
</script>
