<template>
  <div
    class="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl"
  >
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900" />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_28%)]"
      />
    </div>

    <!-- Glow -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
      <div class="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
    </div>

    <!-- Content -->
    <div class="relative z-10 flex h-full flex-col">
      <h3 class="text-xl font-bold tracking-tight md:text-2xl">
        Interested in similar events?
      </h3>

      <p class="mt-3 text-sm leading-7 text-slate-200">
        Explore more ecosystem events, startup workshops, investor connects, and founder
        engagement opportunities at IDRP.
      </p>

      <!-- Push button to bottom -->
      <div class="mt-6">
        <RouterLink
          to="/events"
          class="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700"
        >
          Explore All Events
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>