<template>
  <section class="relative overflow-hidden">
    <div class="relative h-[52vh] min-h-[360px]">
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-teal-950/80 to-cyan-900/35"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.16),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_24%)]"
      />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-16">
        <div class="max-w-3xl">
          <div class="mb-5 flex items-center gap-3">
            <div class="h-8 w-1 rounded-full bg-teal-400" />
            <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
              {{ eyebrow }}
            </span>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {{ title }}
          </h1>

          <p class="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base md:text-lg">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    imageSrc?: string
    imageAlt?: string
    eyebrow?: string
    title?: string
    description?: string
  }>(),
  {
    imageSrc: '/vision-community.jfif',
    imageAlt: 'Startups',
    eyebrow: 'Portfolio',
    title: 'Startups',
    description:
      'Explore startups from the IDRP ecosystem with their profiles, founders, and investor-facing information.',
  },
)

const showHeroImage = ref(true)

function handleImageError() {
  showHeroImage.value = false
}
</script>