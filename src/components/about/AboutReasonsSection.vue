<script setup lang="ts">
import type { Reason } from '@/types/about'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  reasons: Reason[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Why IDRP',
  title: 'Why Founders Build With Us',
  description:
    'IDRP combines academic depth, ecosystem access, and startup-focused support to help ambitious ideas grow into meaningful ventures.',
})
</script>

<template>
  <section class="bg-white px-6 py-24 md:px-16">
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

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="reason in reasons"
          :key="reason.title"
          class="group rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-200 hover:bg-white"
        >
          <div
            class="mb-5 h-1.5 w-14 rounded-full bg-teal-500 transition-all duration-200 group-hover:w-20"
          />
          <h3 class="text-lg font-bold text-gray-900">
            {{ reason.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">
            {{ reason.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>