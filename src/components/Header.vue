<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="row w-100 align-items-center">
        <div class="col-md-4 text-center text-white">
          <span @click="router.push({name: 'main'})" class="fw-bold fs-3 align-middle cursor-pointer">Оценка эффективности (KPI)</span>
        </div>
        <div class="col-md-4 text-center text-white">
          <watch/>
        </div>
        <div class="col-md-4 text-white">
          <div class="d-flex justify-content-end gap-3 align-items-center">
            <span
                class="fs-5 fw-bold"
            >
              {{ authStore.currentUser.Position + ":"}}
            </span>
            <span
                class="fs-5 fw-bold"
            >
              {{ authStore.currentUser.LastName }}
              {{ (authStore.currentUser.FirstName) }}
            </span>
            <span class="fs-4">
              <i @click=authStore.logout() class="bi bi-box-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

import Watch from "./Watch.vue";
import {useAuthStore} from "@/stores/authStore.js";
import {onMounted} from "vue";

import router from "@/router/router.js";

onMounted(() => {
  if (!authStore.decodedUser) {
    authStore.decodeJwtToken();
  }
});

const authStore = useAuthStore()

</script>

<style scoped>

</style>