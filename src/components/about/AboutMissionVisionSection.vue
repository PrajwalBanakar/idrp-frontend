<script setup lang="ts">
import type { MissionVisionItem, Pillar } from '@/types/about'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  missionVision: MissionVisionItem[]
  pillars: Pillar[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Our Purpose',
  title: 'Mission, Vision & Core Pillars',
  description:
    'Everything we do at IDRP is grounded in a clear purpose: translating innovation into impact through deep-tech entrepreneurship.',
})
</script>

<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ eyebrow }}
        </span>
        <h2 class="mt-3 text-4xl font-bold text-gray-900">
          {{ title }}
        </h2>
        <p class="mt-4 leading-relaxed text-gray-600">
          {{ description }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <article
          v-for="item in missionVision"
          :key="item.title"
          class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1"
        >
          <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
            {{ item.icon }}
          </div>

          <h3 class="text-2xl font-bold text-gray-900">
            {{ item.title }}
          </h3>

          <p class="mt-4 leading-relaxed text-gray-600">
            {{ item.description }}
          </p>
        </article>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="pillar in pillars"
          :key="pillar.title"
          class="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm"
        >
          <div class="mb-4 h-1.5 w-14 rounded-full bg-teal-500" />
          <h4 class="text-lg font-bold text-gray-900">
            {{ pillar.title }}
          </h4>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">
            {{ pillar.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>