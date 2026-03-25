<template>
  <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
    <div
      class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
    >
      <div>
        <h3 class="text-2xl font-bold text-white">
          {{ title }}
        </h3>
        <p class="mt-2 text-teal-100">
          {{ description }}
        </p>
      </div>

      <div class="flex shrink-0 gap-4">
        <RouterLink
          :to="primaryTo"
          class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
        >
          {{ primaryLabel }}
        </RouterLink>

        <RouterLink
          :to="secondaryTo"
          class="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
        >
          {{ secondaryLabel }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
  defineProps<{
    title?: string
    description?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }>(),
  {
    title: 'Ready to join this community?',
    description: 'Apply to one of our programs and become part of the IDRP story.',
    primaryLabel: 'Apply Now',
    primaryTo: '/apply/resident-incubation',
    secondaryLabel: 'Contact Us',
    secondaryTo: '/contact',
  },
)
</script>