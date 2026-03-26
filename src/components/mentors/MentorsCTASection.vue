<template>
  <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
    <div
      class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
    >
      <div>
        <h3 class="text-2xl font-bold text-white">
          Looking to connect with the IDRP ecosystem?
        </h3>
        <p class="mt-2 text-teal-100">
          Explore our programs, boards, and mentoring support.
        </p>
      </div>

      <div class="flex shrink-0 gap-4">
        <RouterLink
          to="/about-idrp"
          class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
        >
          About IDRP
        </RouterLink>

        <RouterLink
          to="/contact"
          class="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
        >
          Contact Us
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>