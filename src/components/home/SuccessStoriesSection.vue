<template>
  <section class="overflow-hidden bg-gray-50 py-24">
    <div class="mx-auto max-w-6xl px-6 md:px-16">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Founder Voices
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Success Stories</h2>
        <p class="mx-auto mt-3 max-w-xl text-gray-500">
          Real founders, real impact — the stories behind some of India's most exciting deep-tech
          ventures.
        </p>
      </div>
    </div>

    <div class="relative">
      <div
        class="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-gray-50 to-transparent"
      />
      <div
        class="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-gray-50 to-transparent"
      />

      <div class="stories-track-left mb-6 flex gap-6">
        <div
          v-for="(story, index) in duplicatedStories"
          :key="`left-${index}`"
          class="w-80 shrink-0 cursor-default rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-lg"
        >
          <svg class="mb-4 h-8 w-8 text-teal-100" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            />
          </svg>

          <p class="mb-6 text-sm leading-relaxed text-gray-700 italic">"{{ story.quote }}"</p>

          <div class="mt-auto flex items-center gap-3">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              :style="{ background: story.color }"
            >
              {{ story.initials }}
            </div>
            <div>
              <p class="text-sm font-bold text-gray-900">{{ story.name }}</p>
              <p class="text-xs text-gray-500">{{ story.role }} · {{ story.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="stories-track-right flex gap-6">
        <div
          v-for="(story, index) in reversedDuplicatedStories"
          :key="`right-${index}`"
          class="w-80 shrink-0 cursor-default rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-lg"
        >
          <svg class="mb-4 h-8 w-8 text-teal-100" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            />
          </svg>

          <p class="mb-6 text-sm leading-relaxed text-gray-700 italic">"{{ story.quote }}"</p>

          <div class="mt-auto flex items-center gap-3">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              :style="{ background: story.color }"
            >
              {{ story.initials }}
            </div>
            <div>
              <p class="text-sm font-bold text-gray-900">{{ story.name }}</p>
              <p class="text-xs text-gray-500">{{ story.role }} · {{ story.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Story } from '@/data/home'

const props = defineProps<{
  successStories: Story[]
}>()

const duplicatedStories = computed(() => [...props.successStories, ...props.successStories])
const reversedDuplicatedStories = computed(() => [...duplicatedStories.value].reverse())
</script>

<style scoped>
.stories-track-left {
  width: max-content;
  animation: scroll-left 40s linear infinite;
}

.stories-track-left:hover {
  animation-play-state: paused;
}

.stories-track-right {
  width: max-content;
  animation: scroll-right 40s linear infinite;
}

.stories-track-right:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>