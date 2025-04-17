<template>
  <div id="clock">
    <span class="time">{{ time }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const time = ref('');
const date = ref('');

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function zeroPadding(num, digit) {
  var zero = '';
  for(var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

function updateTime() {
  const cd = new Date();
  time.value = zeroPadding(cd.getHours(), 2) + ':' +
      zeroPadding(cd.getMinutes(), 2) + ':' +
      zeroPadding(cd.getSeconds(), 2);
  date.value = zeroPadding(cd.getFullYear(), 4) + '-' +
      zeroPadding(cd.getMonth()+1, 2) + '-' +
      zeroPadding(cd.getDate(), 2) + ' ' +
      week[cd.getDay()];
};

let timerID;

onMounted(() => {
  updateTime();
  timerID = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timerID);
});
</script>

<style scoped>
#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-shadow: 0 0 25px rgb(15, 106, 136), 0 0 20px rgba(10, 175, 230, 0);
  position: static;
  left: auto;

}
.time {
  letter-spacing: 0.05em;
  font-size: 2rem;
}

</style>