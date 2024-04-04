<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'title',
})
</script>

<template>
  <div class="px-20 absolute z-1 bg-zinc-900 h-[600px] w-[1200px] flex items-start justify-between">
    <div class="pt-20 flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-left text-[70px] font-black font-stretch-extra-condensed">
          CARRERA
          ATLÉTICA
          <br>
          <span class="text-[140px]">
            ATENEA
            <span class=" text-transparent bg-clip-text bg-gradient-to-b from-lime via-lime to-transparent">5K</span>
          </span>
        </h1>

        <div>
          <div class="flex gap-4">
            <UnoIcon class="i-sponsors:natura h-10 w-10" />
            <UnoIcon class="i-sponsors:envidia-store h-10 w-10" />
            <img
              src="/sponsors/totopos-chilaquil-tostadas-de-la-cruz.webp"
              alt="TOTOPOS CHILAQUIL Y TOSTADAS DE LA CRUZ"
              class="w-10"
            >
          </div>
          <p class="text-2xl pb-10 font-bold mb-0">
            5k.ateneanutricion.com
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center h-full">
      <div class="relative h-80 w-80">
        <Logo class="blur-xl md:blur-md text-lime" />
        <Logo class="absolute inset-0" />
      </div>
    </div>
  </div>
</template>
