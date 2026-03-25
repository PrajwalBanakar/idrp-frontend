<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          How We Work
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Our Approach</h2>
        <p class="mx-auto mt-3 max-w-xl text-gray-500">
          A community-first model that puts founders at the center of everything we do.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="approach in approaches"
          :key="approach.title"
          class="group relative cursor-default overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-teal-700 hover:bg-teal-700 hover:shadow-2xl"
        >
          <div
            class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-600/20 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div class="relative z-10">
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
            >
              <span v-html="approach.icon" />
            </div>

            <h3
              class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white"
            >
              {{ approach.title }}
            </h3>

            <p
              class="text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-teal-100"
            >
              {{ approach.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IconCard } from '@/data/home'

defineProps<{
  approaches: IconCard[]
}>()
</script>