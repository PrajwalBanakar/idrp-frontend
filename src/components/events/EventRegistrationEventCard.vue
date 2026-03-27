<template>
  <div class="mb-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
    <h2 class="text-xl font-bold text-gray-900">
      {{ event.title }}
    </h2>

    <p class="mt-2 text-sm text-gray-500">
      {{ event.date }} • {{ event.time || '—' }}
    </p>

    <p class="text-sm text-gray-500">
      {{ event.location }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { EventItem } from '@/types/events'

defineProps<{
  event: EventItem
}>()
</script>