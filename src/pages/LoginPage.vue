<template>
  <div class="modal-dialog modal-dialog-centered row bg-light border-radius"
       style="max-width: 400px; width: 90%">
    <div class="modal-content mt-2">
      <div class="modal-body p-5">
        <div class="tab-content">
          <div class=" ">
            <form class="text-center" action="">
              <p class="fs-4">Вход в систему</p>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="username"
                    placeholder="Email">
              </div>
              <div class="form-outline mb-4">
                <input
                    type="text"
                    class="form-control sans-serif"
                    v-model="password"
                    placeholder="Пароль">
              </div>
              <button @click="authStore.login(username,password)"
                      type="submit"
                      class="btn btn-custom btn-block mb-1 w-100 sans-serif fw-bold"
              >
                Продолжить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>