<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl"
  >
    <div class="h-1.5 bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400" />

    <div class="flex flex-1 flex-col p-8">
      <div class="mb-5 flex flex-wrap items-center gap-3">
        <span
          class="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700"
        >
          {{ course.duration }}
        </span>

        <span
          class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600"
        >
          {{ course.type }}
        </span>
      </div>

      <div class="flex-1">
        <h3 class="text-2xl font-bold tracking-tight text-slate-900">
          {{ course.title }}
        </h3>

        <p class="mt-4 text-sm leading-7 text-slate-600">
          {{ course.description }}
        </p>

        <ul class="mt-6 space-y-3">
          <li
            v-for="feature in course.features"
            :key="feature"
            class="flex items-start gap-3"
          >
            <span
              class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700"
            >
              ✓
            </span>
            <span class="text-sm leading-6 text-slate-700">
              {{ feature }}
            </span>
          </li>
        </ul>
      </div>

      <RouterLink
        :to="course.route"
        class="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700"
      >
        Explore Course
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