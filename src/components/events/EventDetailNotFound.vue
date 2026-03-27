<template>
  <section class="flex min-h-[70vh] items-center justify-center px-6 py-20 md:px-16">
    <div class="max-w-xl text-center">
      <div
        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-3xl"
      >
        📅
      </div>

      <h1 class="text-3xl font-extrabold text-gray-900 md:text-4xl">
        Event not found
      </h1>

      <p class="mt-4 text-base leading-7 text-gray-600">
        The event you are looking for does not exist or may have been removed.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/events"
          class="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-teal-800"
        >
          Back to Events
        </RouterLink>

        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-teal-300 hover:text-teal-700"
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