<template>
  <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
    <div class="mb-4 flex items-center gap-3">
      <div class="h-8 w-1 rounded-full bg-[var(--color-primary-soft)]0" />
      <h2 class="text-2xl font-bold text-gray-900">Event Snapshot</h2>
    </div>

    <div class="space-y-5">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Category</p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.category }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Audience</p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.audience }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Venue</p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.location }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Organised By</p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.organiser }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Mode</p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.mode }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Date</p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.date }}</p>
      </div>
    </div>

    <div class="mt-8 space-y-3">
      <RouterLink
        v-if="event.isUpcoming"
        :to="`/events/${event.slug}/register`"
        class="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
      >
        Register for Event
      </RouterLink>

      <a
        v-else-if="hasGallery"
        href="#event-gallery"
        class="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
      >
        View Event Gallery
      </a>

      <RouterLink
        to="/contact"
        class="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-teal-300 hover:text-[var(--color-primary)]"
      >
        Contact Organizer
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { EventItem } from '@/types/events'

const props = defineProps<{
  event: EventItem
}>()

const hasGallery = computed(
  () => Array.isArray(props.event.gallery) && props.event.gallery.length > 0,
)
</script>
