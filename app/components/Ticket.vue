<script lang="ts" setup>
withDefaults(defineProps<{
  name: string
  number: string
  distance: string
}>(), {
  name: '',
  number: '',
  distance: '',
})
</script>

<template>
  <div class="bg-zinc-900 w-80 rounded-lg overflow-clip uppercase bg-zinc-900 text-white">
    <div
      class="relative bg-center bg-cover h-35"
      style="background-image: url(/header_card.webp)"
    >
      <div class="layer" />
      <div class="absolute size-full px-4 grid place-items-center z-1">
        <AteneaTitle class="w-full h-full !flex-row" />
      </div>
    </div>

    <div class="ticket-body px-8 py-4 relative border-b border-dashed [&_p]:text-xs [&_p]:text-zinc-500">
      <div class="runner">
        <p>corredor</p>
        <h4>{{ name }}</h4>
      </div>

      <div class="mt-4 flex gap-10">
        <div>
          <p>numero</p>
          <h4>#{{ number }}</h4>
        </div>
        <div>
          <p>categoria</p>
          <h4>{{ distance }}k</h4>
        </div>
      </div>

      <div class="mt-4">
        <p>28 jun 2024 18:30</p>
      </div>

      <img
        src="/qr.webp"
        alt=""
        class="h-30 mt-4 mx-auto"
      >
    </div>

    <div class="footer">
      <div class="disclaimer">
        Sueña sin miedo, entrena sin limites
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticket-body {}
.ticket-body:before,
.ticket-body:after {
  background-color: rgb(161 161 170);
  border-radius: 100%;
  content: "";
  height: 15px;
  position: absolute;
  top: 100%;
  width: 20px;
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
  color: #A2A2A2;
  font-family: "IM Fell French Canon";
  font-size: 14px;
  font-style: italic;
  line-height: 1.25;
  padding: 15px 25px;
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
