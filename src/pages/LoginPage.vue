<template>
  <section class="position-absolute">
    <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: rgba(208,208,208,0.3)">
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <p class="fs-4" style="color: hsl(0,0%,100%);  text-align: justify;">
              Автоматизированная система KPI сотрудников — это мощный инструмент для оценки и повышения эффективности
              команды. Начните трансформацию уже сегодня!
            </p>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="modal-dialog row bg-light border-radius"
                 style="max-width: 450px; width: 90%">
              <div class="modal-content mt-2">
                <div class="modal-body p-5">
                  <div class="tab-content">
                    <div class=" ">
                      <form class="text-center" >
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
                              type="password"
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
                        <span class="mt-2 text-danger">{{ authStore.errorMessage }}</span>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import {ref} from "vue";
import {useAuthStore} from "@/stores/authStore.js";

const authStore = useAuthStore();

const username = ref('');
const password = ref('');


</script>

<style scoped>

</style>