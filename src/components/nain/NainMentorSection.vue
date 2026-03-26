<script setup lang="ts">
import { ref } from 'vue'
import type { NAINFacultyMentor } from '@/types/nain'

type Props = {
  eyebrow?: string
  title?: string
  mentor: NAINFacultyMentor
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Faculty Mentor',
  title: 'IIIT Dharwad Faculty Mentor',
})

const showMentorImage = ref(true)
</script>

<template>
  <section class="bg-slate-50">
    <div class="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div class="mb-8">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold text-slate-900">
          {{ props.title }}
        </h2>
      </div>

      <div
        class="grid gap-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8"
      >
        <div class="overflow-hidden rounded-3xl bg-slate-100">
          <img
            v-if="props.mentor.image && showMentorImage"
            :src="props.mentor.image"
            :alt="props.mentor.name"
            class="h-full w-full object-cover"
            @error="showMentorImage = false"
          />

          <div
            v-else
            class="flex h-64 items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 text-lg font-bold text-slate-400"
          >
            {{ props.mentor.name.charAt(0) }}
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Mentor Profile
          </p>

          <h3 class="mt-2 text-2xl font-bold text-slate-900">
            {{ props.mentor.name }}
          </h3>

          <p class="mt-1 text-sm font-medium text-slate-500">
            {{ props.mentor.designation }}
          </p>

          <p class="mt-5 max-w-3xl text-[15px] leading-7 text-slate-600">
            {{ props.mentor.bio }}
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              v-if="props.mentor.linkedin"
              :href="props.mentor.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
            >
              LinkedIn Profile
            </a>

            <a
              v-if="props.mentor.profileLink"
              :href="props.mentor.profileLink"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>