<template>
  <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
    <div class="mb-4 flex items-center gap-3">
      <div class="h-8 w-1 rounded-full bg-teal-500" />
      <h2 class="text-2xl font-bold text-gray-900">About This Event</h2>
    </div>

    <p class="text-base leading-8 text-gray-600">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>