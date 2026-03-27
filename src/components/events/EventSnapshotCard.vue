<template>
  <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
    <div class="mb-4 flex items-center gap-3">
      <div class="h-8 w-1 rounded-full bg-teal-500" />
      <h2 class="text-2xl font-bold text-gray-900">Event Snapshot</h2>
    </div>

    <div class="space-y-5">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Category
        </p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.category }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Audience
        </p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.audience }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Venue
        </p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.location }}</p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Organised By
        </p>
        <p class="mt-1 text-sm font-bold text-gray-800">{{ event.organiser }}</p>
      </div>
    </div>

    <div class="mt-8 space-y-3">
      <RouterLink
        v-if="event.isUpcoming"
        :to="`/events/${event.id}/register`"
        class="inline-flex w-full items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
      >
        Register for Event
      </RouterLink>

      <RouterLink
        to="/contact"
        class="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-teal-300 hover:text-teal-700"
      >
        Contact Organizer
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { EventItem } from '@/types/events'

defineProps<{
  event: EventItem
}>()
</script>