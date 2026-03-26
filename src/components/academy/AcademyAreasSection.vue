<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Program Areas
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">
          What Technical Education Academy Covers
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-gray-500">
          Learning pathways and technical upskilling programs designed for relevance, rigor, and
          real-world readiness.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <article
          v-for="area in localAreas"
          :key="area.title"
          class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
        >
          <div class="relative h-36 overflow-hidden" :class="area.bg">
            <img
              v-if="area.visible"
              :src="area.image"
              :alt="area.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="area.visible = false"
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-4xl">{{ area.emoji }}</span>
            </div>
          </div>

          <div class="p-4 text-center">
            <p class="text-sm font-bold text-gray-800 transition-colors group-hover:text-teal-700">
              {{ area.title }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { AcademyArea } from '@/types/courses'

type AcademyAreaWithVisibility = AcademyArea & {
  visible: boolean
}

const props = defineProps<{
  areas: AcademyArea[]
}>()

const localAreas = reactive<AcademyAreaWithVisibility[]>(
  props.areas.map((area) => ({
    ...area,
    visible: true,
  })),
)
</script>