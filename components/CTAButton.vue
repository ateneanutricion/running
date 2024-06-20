<script setup lang="ts">
withDefaults(defineProps<{
  to: string
  external?: boolean
  target?: string
  toSection?: boolean
}>(), {
  toSection: false,
})
</script>

<template>
  <NuxtLink
    group
    :external="external"
    :target="target"
    :to="to"
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
