<template>
  <section class="relative overflow-hidden bg-slate-950 text-white">
    <div class="absolute inset-0">
      <img
        v-if="showHeroImage"
        :src="event.image"
        :alt="event.title"
        class="h-full w-full object-cover object-center"
        @error="$emit('imageError')"
      />

      <div
        v-else
        class="absolute inset-0 bg-gradient-to-br"
        :class="event.fallbackBg"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-teal-950/88 to-cyan-900/70" />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.16),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.10),_transparent_24%)]"
    />
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-12 lg:px-16 lg:py-24">
      <div class="max-w-4xl">
        <RouterLink
          to="/events"
          class="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:text-xs"
        >
          <span class="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Back to Events
        </RouterLink>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <span
            class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-100 backdrop-blur-sm sm:text-xs"
          >
            {{ event.category }}
          </span>

          <span
            class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:text-xs"
          >
            {{ event.isUpcoming ? 'Upcoming Event' : 'Past Event' }}
          </span>
        </div>

        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {{ event.title }}
        </h1>

        <p class="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
          {{ event.description }}
        </p>

        <div class="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <RouterLink
            v-if="event.isUpcoming"
            :to="`/events/${event.id}/register`"
            class="inline-flex min-w-[220px] items-center justify-center rounded-full bg-teal-600 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 sm:text-base"
          >
            Register Now
          </RouterLink>

          <RouterLink
            to="/events"
            class="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:text-slate-950 sm:text-base"
          >
            Explore All Events
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { EventItem } from '@/types/events'

defineProps<{
  event: EventItem
  showHeroImage: boolean
}>()

defineEmits<{
  (e: 'imageError'): void
}>()
</script>