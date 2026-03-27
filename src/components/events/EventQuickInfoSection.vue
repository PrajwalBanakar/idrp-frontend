<template>
  <section class="bg-white px-6 py-10 md:px-16">
    <div class="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
      <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Date</p>
        <p class="mt-2 text-base font-bold text-gray-900">{{ event.date }}</p>
      </div>

      <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Time</p>
        <p class="mt-2 text-base font-bold text-gray-900">{{ event.time || '-' }}</p>
      </div>

      <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Location</p>
        <p class="mt-2 text-base font-bold text-gray-900">{{ event.location || '-' }}</p>
      </div>

      <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Mode</p>
        <p class="mt-2 text-base font-bold text-gray-900">{{ event.mode || '-' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { EventItem } from '@/types/events'

defineProps<{
  event: EventItem
}>()
</script>