<template>
  <section class="bg-gradient-to-br from-teal-800 to-cyan-600 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-5xl">
      <div class="mb-14 text-center">
        <h2 class="text-3xl font-bold text-white">
          Building Skills for the Next Generation of Innovators
        </h2>
        <p class="mt-3 text-teal-100">
          Structured learning support across technical, academic, and professional contexts.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-4xl font-extrabold text-white md:text-5xl">
            {{ stat.value }}
          </p>
          <p class="mt-2 text-sm leading-snug text-teal-100">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Stat = {
  value: string
  label: string
}

defineProps<{
  stats: Stat[]
}>()
</script>