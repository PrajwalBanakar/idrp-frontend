<template>
  <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-cyan-800/45"
    />

    <!-- Content -->
    <div class="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 py-16 md:px-16">
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <span
          v-if="hero.eyebrow"
          class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm"
        >
          {{ hero.eyebrow }}
        </span>

        <!-- Title -->
        <h1 class="mt-5 mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          {{ hero.title }}
        </h1>

        <!-- Description -->
        <p
          v-if="hero.description"
          class="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          {{ hero.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ServiceHero } from '@/types/service'

defineProps<{
  hero: ServiceHero
}>()

const showImage = ref(true)
</script>