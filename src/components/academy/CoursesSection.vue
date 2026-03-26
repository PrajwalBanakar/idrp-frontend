<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Programs Offered
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">
          Courses & Workshops
        </h2>
        <p class="mx-auto mt-3 max-w-3xl text-gray-500">
          Explore structured learning pathways, postgraduate programs, faculty development
          initiatives, and short-duration workshops offered through the Technical Education
          Academy.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CourseCard
          v-for="course in courses"
          :key="course.title"
          :course="course"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CourseCard from '@/components/academy/CourseCard.vue'
import type { Course } from '@/types/courses'

defineProps<{
  courses: Course[]
}>()
</script>