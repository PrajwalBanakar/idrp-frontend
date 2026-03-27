<template>
  <div class="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-8 text-white shadow-xl">
    <h3 class="text-2xl font-bold">Interested in similar events?</h3>

    <p class="mt-3 text-sm leading-7 text-teal-100">
      Explore more ecosystem events, startup workshops, investor connects, and founder
      engagement opportunities at IDRP.
    </p>

    <RouterLink
      to="/events"
      class="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 transition-colors hover:bg-teal-50"
    >
      Explore All Events
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>