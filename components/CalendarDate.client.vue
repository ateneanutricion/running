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
  <div class="flex flex-col gap-2 items-center justify-center text-center">
    <div class="flex flex-col items-center font-stretch-semi-expanded">
      <span class="tabular-nums text-5xl font-bold">{{ days }}</span>
      <span class="text-xs font-extralight">DÍAS</span>
    </div>

    <div class="flex w-full px-2">
      <div class="w-full flex flex-col items-center font-stretch-semi-expanded">
        <span class="tabular-nums text-2xl font-bold">{{ hours }}</span>
        <span class="text-xs font-extralight">HORAS</span>
      </div>

      <div class="w-full flex flex-col items-center font-stretch-semi-expanded">
        <span class="tabular-nums text-2xl font-bold">{{ minutes }}</span>
        <span class="text-xs font-extralight">MINUTOS</span>
      </div>

      <div class="w-full flex flex-col items-center font-stretch-semi-expanded">
        <span class="tabular-nums text-2xl font-bold">{{ seconds }}</span>
        <span class="text-xs font-extralight">SEGUNDOS</span>
      </div>
    </div>
  </div>
</template>
