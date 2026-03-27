<template>
  <section class="relative min-h-[55vh] overflow-hidden">
    <img
      v-if="showHeroImage"
      :src="event.image"
      :alt="event.title"
      class="absolute inset-0 h-full w-full object-cover object-center"
      @error="$emit('imageError')"
    />
    <div v-else class="absolute inset-0 bg-gradient-to-br" :class="event.fallbackBg" />

    <div class="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-slate-900/40" />
    <div class="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

    <div
      class="relative z-10 mx-auto flex min-h-[55vh] max-w-6xl items-end px-6 py-12 md:px-16 md:py-16"
    >
      <div class="max-w-3xl">
        <div class="mb-4 flex flex-wrap items-center gap-3">
          <span
            class="rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-100 backdrop-blur-sm"
          >
            {{ event.category }}
          </span>

          <span
            class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm"
          >
            {{ event.isUpcoming ? 'Upcoming Event' : 'Past Event' }}
          </span>
        </div>

        <h1 class="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {{ event.title }}
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-7 text-teal-50 md:text-lg">
          {{ event.description }}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <RouterLink
            to="/events"
            class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            ← Back to Events
          </RouterLink>

          <RouterLink
            v-if="event.isUpcoming"
            :to="`/events/${event.id}/register`"
            class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
          >
            Register Now
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