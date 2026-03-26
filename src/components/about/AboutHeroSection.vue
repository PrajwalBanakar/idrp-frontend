<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  eyebrow?: string
  title: string
  subtitle: string
  image?: string
  imageAlt?: string
  minHeightClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Who We Are',
  image: '/about-hero.jfif',
  imageAlt: 'About IDRP',
  minHeightClass: 'min-h-[380px]',
})

const showHeroImage = ref(true)
</script>

<template>
  <section
    class="relative h-[55vh] overflow-hidden"
    :class="minHeightClass"
  >
    <img
      v-if="showHeroImage && props.image"
      :src="props.image"
      :alt="props.imageAlt"
      class="absolute inset-0 h-full w-full object-cover object-center"
      @error="showHeroImage = false"
    />

    <div
      class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/75 to-teal-700/20"
    />
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

    <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-8 w-1 rounded-full bg-teal-400" />
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
          {{ props.eyebrow }}
        </span>
      </div>

      <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
        {{ props.title }}
      </h1>

      <p class="max-w-lg text-lg leading-relaxed text-teal-100">
        {{ props.subtitle }}
      </p>
    </div>
  </section>
</template>