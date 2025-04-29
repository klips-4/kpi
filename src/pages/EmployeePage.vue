<template>
  <div class="container-fluid px-3 py-1 h-100 d-flex flex-column">
    <div class="d-flex flex-row w-100 mb-3">
      <router-link
          :to="`/details/${employeeId}/general`"
          class="btn btn-outline-dark flex-fill fs-5"
          :class="{active: $route.name === 'general'}"
      >
        Общие сведения о сотруднике
      </router-link>
      <router-link
          :to="`/details/${employeeId}/activity`"
          class="btn btn-outline-dark flex-fill fs-5"
          :class="{active: $route.name === 'activity'}"
      >
        Трудовая деятельность
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/mainStore.js";
const route = useRoute();
const employeeId = computed(() => route.params.employeeId)
</script>

<style scoped>
.active {
  background: #212529;
}
</style>