<template>
  <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
    <img
      v-if="showHeroImage"
      src="/technical-education-academy-hero.jfif"
      alt="Technical Education Academy"
      class="absolute inset-0 h-full w-full object-cover object-center"
      @error="showHeroImage = false"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-cyan-800/45" />

    <div class="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 py-16 md:px-16">
      <div class="max-w-3xl">
        <span
          class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm"
        >
          Services
        </span>

        <h1 class="mb-4 mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Technical Education Academy
        </h1>

        <p class="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          Structured technical learning, postgraduate programs, faculty development, and
          short-format workshops designed to build deep-tech capability and innovation readiness.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showHeroImage = ref(true)
</script>