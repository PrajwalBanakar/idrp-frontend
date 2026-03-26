<template>
  <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
    <div class="mx-auto max-w-4xl text-center">
      <h3 class="text-3xl font-bold text-white">
        Looking for the right learning pathway?
      </h3>

      <p class="mt-3 text-teal-100">
        Whether you are a learner, faculty member, institution, or industry professional, IDRP
        can help identify the most suitable course, workshop, or training format.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/courses/online-mtech"
          class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
        >
          Explore Online M.Tech
        </RouterLink>

        <RouterLink
          to="/contact"
          class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
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