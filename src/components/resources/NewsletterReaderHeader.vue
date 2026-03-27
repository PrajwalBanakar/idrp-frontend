<template>
  <div class="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <RouterLink
        to="/resources"
        class="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
      >
        ← Back to Resources
      </RouterLink>

      <h1 class="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
        {{ title }}
      </h1>

      <p class="mt-1 text-sm text-slate-600">
        {{ issue }} · {{ date }}
      </p>
    </div>

    <div class="text-sm font-semibold text-slate-600">
      {{ spreadLabel }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  issue: string
  date: string
  spreadLabel: string
}>()
</script>