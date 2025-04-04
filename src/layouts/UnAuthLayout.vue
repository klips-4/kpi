<template>
  <div class="vh-100 d-flex justify-content-center align-items-center display">
    <div class="background"></div>
<!--    <div class="position-absolute top-0 start-0 mt-4 ms-4 d-flex flex-row align-items-center">-->
<!--      <img src="../assets/logo.png" alt="Logo" class="img-fluid mx-3 w-100" style="max-width: 70px;">-->
<!--      <img src="../assets/logo_type-1.png" alt="Logo" class="img-fluid" style="max-width: 75px; max-height: 70px">-->
<!--      <span-->
<!--          class="mx-3 w-100 text-wrap fs-5 fw-bold"-->
<!--          style="color: rgba(25,117,233)"-->
<!--      >-->
<!--        ЦЕНТР ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ-->
<!--      </span>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "UnAuthLayout.vue"
}
</script>

<style scoped>
.background {
  background-image: url('../../public/screen.png');
  //background-color: rgb(214, 212, 254);
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //filter: blur(2px);

}
</style>