<script lang="ts" setup>
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const countDownDate = ref(1719622800000 /* 28 JUN 2024 19:00:00 */)
const now = useNow()
const timeleft = computed(() => countDownDate.value - now.value.getTime())
const days = computed(() => Math.floor(timeleft.value / DAY).toString().padStart(2, '0'))
const hours = computed(() => Math.floor((timeleft.value % DAY) / HOUR).toString().padStart(2, '0'))
const minutes = computed(() => Math.floor((timeleft.value % HOUR) / MINUTE).toString().padStart(2, '0'))
const seconds = computed(() => Math.floor((timeleft.value % MINUTE) / SECOND).toString().padStart(2, '0'))
</script>

<template>
  <div class="grid cols-3 rows-2 gap-2 items-center justify-center text-center">
    <div class="col-span-3 flex flex-col items-center">
      <span class="tabular-nums text-8xl md:text-[12rem] font-black font-mono text-lime">{{ days }}</span>
      <span class="text-xs md:text-lg font-extralight">DÍAS</span>
    </div>

    <div class="w-full flex flex-col items-center">
      <span class="tabular-nums text-5xl md:text-6xl font-black font-mono">{{ hours }}</span>
      <span class="text-xs md:text-base font-extralight">HORAS</span>
    </div>

    <div class="w-full flex flex-col items-center">
      <span class="tabular-nums text-5xl md:text-6xl font-black font-mono">{{ minutes }}</span>
      <span class="text-xs md:text-base font-extralight">MINUTOS</span>
    </div>

    <div class="w-full flex flex-col items-center">
      <span class="tabular-nums text-5xl md:text-6xl font-black font-mono">{{ seconds }}</span>
      <span class="text-xs md:text-base font-extralight">SEGUNDOS</span>
    </div>
  </div>
</template>
