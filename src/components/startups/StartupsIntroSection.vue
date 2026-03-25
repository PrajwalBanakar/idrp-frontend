<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
      <div class="lg:w-1/2">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ eyebrow }}
        </span>

        <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
          {{ title }}
        </h2>

        <div class="space-y-4 text-sm leading-relaxed text-gray-600">
          <p v-for="paragraph in paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-8 flex flex-wrap gap-8">
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-3xl font-extrabold text-teal-700">{{ stat.value }}</p>
            <p class="mt-1 text-sm text-gray-500">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2">
        <div
          class="h-[400px] overflow-hidden rounded-3xl shadow-2xl"
          :class="{ 'bg-gradient-to-br from-teal-100 to-cyan-50': !showImage }"
        >
          <img
            v-if="showImage"
            :src="imageSrc"
            :alt="imageAlt"
            class="h-full w-full object-cover"
            @error="showImage = false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { StartupStat } from '@/data/startups'

withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    paragraphs?: string[]
    stats: StartupStat[]
    imageSrc?: string
    imageAlt?: string
  }>(),
  {
    eyebrow: 'Our Community',
    title: 'Meet the Innovators Driving Our Ecosystem',
    paragraphs: () => [
      'At IDRP, we support startups through incubation, mentoring, funding access, and ecosystem connections. This portfolio gives a quick but useful view of each venture.',
      'Open any card to see the startup brief, founders, LinkedIn profiles, website, investor one-pager, and contact details.',
    ],
    imageSrc: '/vision-innovation.jfif',
    imageAlt: 'IDRP Startups',
  },
)

const showImage = ref(true)
</script>