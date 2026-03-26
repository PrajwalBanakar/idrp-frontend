<template>
  <section class="bg-white px-6 pb-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-12 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ title }}
        </span>
        <h3 class="mt-3 text-3xl font-bold text-gray-900">
          Meet our {{ title.toLowerCase() }}
        </h3>
      </div>

      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
        <MentorCard
          v-for="mentor in mentors"
          :key="mentor.name"
          :mentor="mentor"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MentorCard from '@/components/mentors/MentorCard.vue'
import type { Mentor } from '@/types/mentors'

defineProps<{
  title: string
  mentors: Mentor[]
}>()
</script>