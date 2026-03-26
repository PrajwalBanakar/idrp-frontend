<script setup lang="ts">
import { ref } from 'vue'
import type { VisionCard } from '@/types/about'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  visionCards: VisionCard[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Our Philosophy',
  title: 'What Drives Us',
  description:
    'Our work is guided by a set of principles that shape how we support innovation, build ecosystems, and enable founders.',
})

const imageVisibility = ref<Record<string, boolean>>({})

function isImageVisible(card: VisionCard) {
  return imageVisibility.value[card.title] ?? true
}

function hideImage(card: VisionCard) {
  imageVisibility.value[card.title] = false
}
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

      <div class="grid gap-8 md:grid-cols-3">
        <article
          v-for="card in visionCards"
          :key="card.title"
          class="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
          <div class="relative h-56 overflow-hidden">
            <img
              v-if="isImageVisible(card) && card.image"
              :src="card.image"
              :alt="card.imageAlt"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="hideImage(card)"
            />

            <div
              v-else
              class="h-full w-full bg-gradient-to-br from-teal-100 via-cyan-50 to-white"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">
              {{ card.title }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ card.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>