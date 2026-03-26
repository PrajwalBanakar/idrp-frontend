<!-- components/academy/CourseCard.vue -->
<template>
  <article
    class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400" />

    <div class="p-8">
      <div class="mb-4 flex flex-wrap items-center gap-3">
        <span class="badge-primary">{{ course.duration }}</span>
        <span class="badge-secondary">{{ course.type }}</span>
      </div>

      <h3 class="text-2xl font-bold text-gray-900">
        {{ course.title }}
      </h3>

      <p class="mt-3 text-sm text-gray-600">
        {{ course.description }}
      </p>

      <ul class="mt-6 space-y-2">
        <li v-for="feature in course.features" :key="feature" class="feature-item">
          ✓ {{ feature }}
        </li>
      </ul>

      <RouterLink
        :to="course.route"
        class="btn-primary mt-8 inline-flex"
      >
        Explore
      </RouterLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Course } from '@/types/courses'

defineProps<{
  course: Course
}>()
</script>