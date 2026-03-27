<template>
  <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

    <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-8 w-1 rounded-full bg-teal-400" />
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
          {{ eyebrow }}
        </span>
      </div>

      <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
        {{ title }}
      </h1>

      <p class="mt-5 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
        {{ description }}
      </p>

      <div class="mt-8 flex flex-wrap gap-4">
        <RouterLink
          :to="applyRoute"
          class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
        >
          Apply Now
        </RouterLink>

        <RouterLink
          :to="enquireRoute"
          class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Enquire Now
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  eyebrow: string
  title: string
  description: string
  applyRoute: string
  enquireRoute: string
}>()
</script>