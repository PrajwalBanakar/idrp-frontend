<template>
  <div class="mb-10 text-center">
    <h1 class="text-3xl font-bold text-gray-900">
      {{ title }}
    </h1>
    <p class="mt-2 text-gray-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>