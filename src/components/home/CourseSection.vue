<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Learning & Capacity Building
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Courses & Workshops</h2>
        <p class="mx-auto mt-3 max-w-xl text-gray-500">
          Industry-aligned programs designed to build deep-tech skills, research capabilities, and
          entrepreneurial mindset.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <RouterLink
          v-for="course in courses"
          :key="course.title"
          :to="course.route"
          class="group block rounded-2xl border bg-white p-8 transition hover:shadow-lg"
        >
          <span class="rounded-full bg-teal-50 px-3 py-1 text-xs text-teal-700">
            {{ course.duration }}
          </span>

          <h3 class="mt-4 text-xl font-bold transition group-hover:text-teal-700">
            {{ course.title }}
          </h3>

          <p class="mt-3 text-sm text-gray-500">
            {{ course.description }}
          </p>

          <div class="mt-6">
            <span class="text-sm font-semibold text-teal-700 group-hover:underline">
              Explore →
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { CourseOffering } from '@/data/home'

defineProps<{
  courses: CourseOffering[]
}>()
</script>