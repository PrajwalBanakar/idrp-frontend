<template>
  <div
    v-if="speakers?.length"
    class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
  >
    <div class="mb-4 flex items-center gap-3">
      <div class="h-8 w-1 rounded-full bg-teal-500" />
      <h2 class="text-2xl font-bold text-gray-900">Speakers</h2>
    </div>

    <div class="space-y-4">
      <div
        v-for="(speaker, index) in speakers"
        :key="`${speaker.name}-${index}`"
        class="rounded-2xl border border-gray-100 p-4"
      >
        <p class="text-sm font-bold text-gray-900">{{ speaker.name }}</p>
        <p class="mt-1 text-sm text-teal-700">{{ speaker.role }}</p>
        <p v-if="speaker.bio" class="mt-2 text-sm leading-6 text-gray-600">
          {{ speaker.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Speaker = {
  name: string
  role: string
  bio?: string
}

defineProps<{
  speakers?: Speaker[]
}>()
</script>