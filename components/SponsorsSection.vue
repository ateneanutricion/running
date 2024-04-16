<template>
  <section class="space-y-4">
    <div class="text-center font-stretch-semi-expanded ">
      <h3 class="text-2xl font-bold">
        PATROCINADORES
      </h3>
      <p class="font-extralight">
        <span class="font-bold">ATENEA 5K</span> puede llevarse a cabo gracias a la colaboración de...
      </p>
    </div>

    <div class="grid cols-3 gap-4">
      <NuxtLink
        external
        target="_blank"
        to="https://wa.me/524881463761?text=Hola,%20me%20interesa%20comprar%20productos%20Natura.%20Gracias!"
        title="Natura Altiplano"
        class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
      >
        <UnoIcon class="i-sponsors:natura h-20 w-20 md:h-22 md:w-22 lg:h-30 lg:w-30" />
      </NuxtLink>

      <NuxtLink
        external
        target="_blank"
        to="https://www.facebook.com/LaEnvidiaSTORE/"
        title="La Envidia Store"
        class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
      >
        <UnoIcon class="i-sponsors:envidia-store h-20 w-20 md:h-22 md:w-22 lg:h-30 lg:w-30" />
      </NuxtLink>

      <NuxtLink
        external
        to="tel:+524888822068"
        title="Totopos Chilaquil y tostadas de la cruz"
        class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
      >
        <img
          src="/sponsors/totopos-chilaquil-tostadas-de-la-cruz.webp"
          alt="TOTOPOS CHILAQUIL Y TOSTADAS DE LA CRUZ"
          class="h-20 md:h-22 lg:h-30 w-auto object-contain"
        >
      </NuxtLink>

      <NuxtLink
        external
        target="_blank"
        to="https://www.youtube.com/channel/UCRJlIgDC2TV9IfncsFh8u2w"
        title="Nación Fútbol"
        class="bg-zinc-800 rounded-lg flex items-center justify-center py-4 md:py-8"
      >
        <img
          src="/sponsors/NFC.webp"
          alt="Nación Fútbol"
          class="h-20 md:h-22 lg:h-30 w-auto object-contain"
        >
      </NuxtLink>

      <NuxtLink
        external
        target="_blank"
        to="https://www.instagram.com/bunker_fitness_gym"
        title="Bunker Gym"
        class="bg-zinc-800 rounded-lg flex items-center justify-center p-4 md:py-8"
      >
        <img
          src="/sponsors/bunker-gym.webp"
          alt="Bunker Gym"
          class="h-20 md:h-22 lg:h-30 w-auto object-contain"
        >
      </NuxtLink>
    </div>

    <div class="flex items-center justify-center gap-2">
      <span class="text-xs text-neutral-500">Web patrocinada por</span>
      <NuxtLink
        external
        target="_blank"
        to="https://wa.me/524881128398?text=Hola,%20me%20interesa%20desarrollar%20un%20sitio%20web.%20Gracias!"
        title="attq developing solutions"
      >
        <UnoIcon class="i-sponsors:attq h-8 w-18 text-white" />
      </NuxtLink>
    </div>
  </section>
</template>
