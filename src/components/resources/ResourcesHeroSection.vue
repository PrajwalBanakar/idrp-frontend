<template>
  <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"
    />
    <div
      class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
    />

    <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-8 w-1 rounded-full bg-teal-400" />
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
          Knowledge Hub
        </span>
      </div>

      <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
        Resources
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showHeroImage = ref(true)
</script>