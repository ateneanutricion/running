<template>
  <NuxtLink
    external
    group
    target="_blank"
    to="https://wa.me/524881128398?text=Hola,%20quiero%20quiero%20inscribirme%20a%20la%20carrera.%20Gracias!"
    class="
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
  >
    <slot />
  </NuxtLink>
</template>
