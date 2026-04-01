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
  minHeightClass: 'min-h-[300px]',
})

const showHeroImage = ref(true)
</script>

<template>
  <section
    class="relative h-[42vh] overflow-hidden bg-slate-950"
    :class="props.minHeightClass"
  >

    <div
      class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-teal-950/80 to-teal-700/30"
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.18),_transparent_30%)]"
    />
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

    <div
      class="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 md:px-12 lg:px-16"
    >
      <div class="max-w-3xl">
        <div class="mb-5 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
            {{ props.eyebrow }}
          </span>
        </div>

        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {{ props.title }}
        </h1>

        <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          {{ props.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>