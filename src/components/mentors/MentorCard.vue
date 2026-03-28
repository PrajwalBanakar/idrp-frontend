<template>
  <article
    class="group flex h-full flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div
      class="mb-5 h-60 w-60 overflow-hidden rounded-full shadow-lg ring-4 ring-gray-100 transition-all duration-300 group-hover:ring-teal-300"
    >
      <img
        v-if="showImage"
        :src="mentor.image"
        :alt="mentor.imageAlt ?? mentor.name"
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

    <p
      v-if="mentor.organization"
      class="mt-2 text-sm text-gray-600"
    >
      {{ mentor.organization }}
    </p>

    <p
      v-if="mentor.bio"
      class="mt-4 line-clamp-4 text-sm leading-6 text-gray-600"
    >
      {{ mentor.bio }}
    </p>

    <a
      v-if="mentor.linkedin"
      :href="mentor.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-5 inline-flex items-center gap-2 rounded-full border border-teal-200 px-4 py-2 text-sm font-medium text-teal-700 transition hover:border-teal-300 hover:bg-teal-50"
    >
      View LinkedIn
    </a>
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