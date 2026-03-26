<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  eyebrow?: string
  title: string
  image?: string
  imageAlt?: string
  minHeightClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Our Team',
  image: '/team-hero.jfif',
  imageAlt: 'Our Team',
  minHeightClass: 'min-h-[340px]',
})

const showHeroImage = ref(true)
</script>

<template>
  <section
    class="relative h-[50vh] overflow-hidden"
    :class="props.minHeightClass"
  >
    <img
      v-if="showHeroImage && props.image"
      :src="props.image"
      :alt="props.imageAlt"
      class="absolute inset-0 h-full w-full object-cover object-center"
      @error="showHeroImage = false"
    />

    <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

    <div class="relative z-10 flex h-full items-end px-6 py-16 md:px-16">
      <div class="max-w-3xl">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            {{ props.eyebrow }}
          </span>
        </div>

        <h1 class="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
          {{ props.title }}
        </h1>
      </div>
    </div>
  </section>
</template>