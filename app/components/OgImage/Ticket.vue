<script lang="ts" setup>
defineProps<{
  name: string
  number: string
  distance: string
}>()
</script>

<template>
  <div class="flex flex-col bg-zinc-900 h-full w-full overflow-hidden uppercase text-white">
    <div class="relative h-70 w-full">
      <img
        class="w-full h-70 object-cover"
        src="/og-assets/header_card.jpg"
      >
      <div class="absolute inset-0 size-full bg-black/40" />
      <div class="absolute size-full flex items-center justify-center">
        <img
          class="w-10/12 h-15"
          src="/og-assets/header_title.png"
        >
      </div>
    </div>

    <div class="flex gap-1 p-10 relative border-white border-b border-dashed">
      <div>
        <span class="text-base text-zinc-500">
          corredor
        </span>
        <h4 class="text-3xl font-light">
          {{ name }}
        </h4>
      </div>

      <div class="flex flex-row gap-20">
        <div>
          <span class="text-base text-zinc-500">
            numero
          </span>

          <h4 class="text-3xl font-light">
            #{{ number }}
          </h4>
        </div>

        <div>
          <span class="text-base text-zinc-500">
            categoria
          </span>

          <h4 class="text-3xl font-light">
            {{ distance }}k
          </h4>
        </div>
      </div>

      <p class="text-base text-zinc-500">
        28 jun 2024 18:30
      </p>

      <img
        src="/og-assets/qr.jpg"
        class="size-56 mx-auto"
      >
    </div>

    <div class="flex h-20 px-10 justify-center">
      <div class="normal-case text-zinc-300 font-light text-xl">
        Sueña sin miedo, entrena sin limites
      </div>
    </div>
  </div>
</template>
