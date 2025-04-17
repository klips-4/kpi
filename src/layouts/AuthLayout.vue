<template>
  <div class="d-flex flex-column h-100">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>

import Header from "../components/Header.vue";
</script>

<style scoped>

</style>