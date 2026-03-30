<script setup lang="ts">
import type { AboutSectionIntro, Reason } from '@/types/about'

type Props = {
  section: AboutSectionIntro
  reasons: Reason[]
}

defineProps<Props>()
</script>

<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ section.eyebrow }}
        </span>

        <h2 class="mt-3 text-4xl font-bold text-gray-900">
          {{ section.title }}
        </h2>

        <p class="mt-4 leading-relaxed text-gray-600">
          {{ section.description }}
        </p>
      </div>

      <div class="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="reason in reasons"
          :key="reason.title"
          class="group flex h-full flex-col rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-200 hover:bg-white"
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