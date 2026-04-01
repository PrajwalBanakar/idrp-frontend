<template>
  <section class="bg-white px-6 pb-16 md:px-12 lg:px-16 lg:pb-20">
    <div class="mx-auto max-w-7xl">
      <div
        v-if="mentors.length === 0"
        class="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center"
      >
        <p class="text-base font-medium text-slate-600">
          No mentors found.
        </p>
      </div>

      <div
        v-else
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
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
  mentors: Mentor[]
}>()
</script>