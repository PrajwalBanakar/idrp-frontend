<template>
  <section
    v-if="cta"
    class="bg-gradient-to-br from-teal-900 to-cyan-700 px-6 py-24 md:px-16"
  >
    <div class="mx-auto max-w-4xl text-center">
      <!-- Eyebrow -->
      <span
        v-if="cta.eyebrow"
        class="text-sm font-semibold uppercase tracking-widest text-teal-200"
      >
        {{ cta.eyebrow }}
      </span>

      <!-- Title -->
      <h2 class="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
        {{ cta.title }}
      </h2>

      <!-- Description -->
      <p
        v-if="cta.description"
        class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg"
      >
        {{ cta.description }}
      </p>

      <!-- Actions -->
      <div
        v-if="cta.primaryLabel || cta.secondaryLabel"
        class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <!-- Primary -->
        <RouterLink
          v-if="cta.primaryLabel && cta.primaryTo"
          :to="cta.primaryTo"
          class="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-teal-800 transition-colors duration-200 hover:bg-teal-50"
        >
          {{ cta.primaryLabel }}
        </RouterLink>

        <!-- Secondary -->
        <RouterLink
          v-if="cta.secondaryLabel && cta.secondaryTo"
          :to="cta.secondaryTo"
          class="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
        >
          {{ cta.secondaryLabel }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceCTA } from '@/types/service'

defineProps<{
  cta?: ServiceCTA
}>()
</script>