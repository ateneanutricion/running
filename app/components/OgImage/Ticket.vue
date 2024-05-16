<script lang="ts" setup>
defineProps<{
  name: string
  number: string
  distance: string
}>()
</script>

<template>
  <div class="bg-zinc-900 h-full w-full overflow-hidden uppercase text-white">
    <div
      class="relative bg-center bg-cover h-80"
      style="background-image: url(/header_card.webp)"
    >
      <div class="layer" />
      <div class="absolute size-full px-14 grid place-items-center z-1">
        <AteneaTitle class="w-full h-full !flex-row" />
      </div>
    </div>

    <div class="ticket-body space-y-10 p-14 relative border-b border-b-dashed">
      <div class="runner">
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
        src="/qr.webp"
        class="h-56 mx-auto"
      >
    </div>

    <div class="px-14 pt-4">
      <div class="disclaimer text-zinc-500 font-italic text-xl">
        Sueña sin miedo, entrena sin limites
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticket-body {}
.ticket-body:before,
.ticket-body:after {
  background-color: white;
  border-radius: 100%;
  content: "";
  height: 30px;
  position: absolute;
  top: 100%;
  width: 40px;
}
.ticket-body:before {
  left: 0;
  transform: translate(-70%, -45%);
}
.ticket-body:after {
  right: 0;
  transform: translate(70%, -45%);
}

.disclaimer {
  font-family: "IM Fell French Canon";
  text-transform: none;
}
.layer {
  transition: all 0.2s ease;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px 4px 0 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
