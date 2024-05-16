<script lang="ts" setup>
import { joinURL } from 'ufo'

const route = useRoute()
defineOgImageComponent(
  'Ticket',
  {
    name: route.params.name,
    number: route.params.number,
    distance: route.params.distance,
  },
  {
    // renderer: 'chromium',
    width: 600,
    height: 1000,
    extension: 'png',
  },
)

const targetElement = shallowRef<HTMLDivElement>()
const { roll, tilt } = useParallax(targetElement)
const imageFile = shallowRef<File>()

tryOnMounted(async () => {
  const imageURL = joinURL(location.origin, '__og-image__', 'image', location.pathname, 'og.png')
  const data = await fetch(imageURL).then(res => res.arrayBuffer())
  imageFile.value = new File([data], `${route.params.name}_${route.params.number}.png`, { type: 'image/png' })
})

const { share, isSupported } = useShare()
function shareTicket() {
  if (!imageFile.value)
    return

  share({
    title: `${route.params.name}_${route.params.number}.png`,
    text: '',
    files: [imageFile.value],
  })
}
</script>

<template>
  <div
    ref="targetElement"
    class="h-[100dvh] grid place-content-center"
  >
    <Ticket
      class="transition-transform-300 ease-out"
      :style="{
        transform: `rotateX(${roll * 30}deg) rotateY(${tilt * 30}deg)`,
      }"
      :name="$route.params.name.toString()"
      :number="$route.params.number.toString()"
      :distance="$route.params.distance.toString()"
    />
    <button
      v-if="isSupported && imageFile"
      class="
      mt-4 flex items-center justify-center gap-2
      relative
      z-1
      py-2 px-4
      rounded-lg
      border-2
      font-bold
      transition-color ease-in duration-80
      hover:text-zinc-900

      before:content-['']
      before:absolute
      before:-z-1
      before:inset-0
      before:right-full
      before:bg-white
      before:transition-right
      before:duration-90
      before:ease-in
      before:hover:right-0
      "
      @click="shareTicket"
    >
      Compartir
      <UnoIcon class="inline i-heroicons:share-16-solid" />
    </button>
  </div>
</template>
