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

      <RouterLink
        :to="buttonTo"
        class="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
      >
        {{ buttonLabel }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  description: string
  buttonLabel: string
  buttonTo: string
}>()
</script>