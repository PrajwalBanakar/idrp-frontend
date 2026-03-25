<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          What We Provide
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Our Services</h2>
        <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-500">
          IDRP supports innovation through focused industry collaboration and high-impact
          technical learning initiatives.
        </p>
      </div>

      <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <RouterLink
          v-for="service in services"
          :key="service.title"
          :to="service.route"
          class="group flex min-h-[320px] flex-col justify-between rounded-3xl border border-gray-100 bg-white p-10 transition-all duration-300 hover:border-teal-200 hover:shadow-2xl md:p-12"
        >
          <div>
            <div
              class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white"
            >
              <span v-html="service.icon" />
            </div>

            <h3
              class="mb-5 text-2xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-700 md:text-3xl"
            >
              {{ service.title }}
            </h3>

            <p class="text-base leading-relaxed text-gray-500">
              {{ service.description }}
            </p>
          </div>

          <div
            class="mt-8 inline-flex items-center gap-2 font-semibold text-teal-700 transition-all duration-200 group-hover:gap-3"
          >
            Explore
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Service } from '@/data/home'

defineProps<{
  services: Service[]
}>()
</script>