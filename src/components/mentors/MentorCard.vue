<template>
  <article class="group flex flex-col items-center text-center">
    <div
      class="mb-5 h-60 w-60 overflow-hidden rounded-full shadow-lg ring-4 ring-gray-100 transition-all duration-300 group-hover:ring-teal-300"
    >
      <img
        v-if="showImage"
        :src="mentor.image"
        :alt="mentor.name"
        class="h-full w-full object-cover object-top"
        @error="showImage = false"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 text-5xl"
      >
        👤
      </div>
    </div>

    <h3 class="text-lg font-bold text-gray-900">
      {{ mentor.name }}
    </h3>

    <p class="mt-1 text-sm font-semibold text-teal-600">
      {{ mentor.role }}
    </p>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Mentor } from '@/types/mentors'

defineProps<{
  mentor: Mentor
}>()

const showImage = ref(true)
</script>