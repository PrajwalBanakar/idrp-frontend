<template>
  <div
    v-if="highlights?.length"
    class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
  >
    <div class="mb-4 flex items-center gap-3">
      <div class="h-8 w-1 rounded-full bg-teal-500" />
      <h2 class="text-2xl font-bold text-gray-900">What You Can Expect</h2>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <div
        v-for="(item, index) in highlights"
        :key="`${item}-${index}`"
        class="rounded-2xl border border-gray-100 bg-gray-50 p-5"
      >
        <div class="mb-2 text-xl">✨</div>
        <p class="text-sm font-semibold leading-6 text-gray-700">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  highlights?: string[]
}>()
</script>