<template>
  <section class="bg-slate-50 px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <!-- Header -->
      <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          Services
        </span>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Enabling innovation through focused support
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Targeted services designed to strengthen research, industry collaboration, and technical
          capacity across the ecosystem.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <RouterLink
          v-for="service in services"
          :key="service.title"
          :to="service.route"
          class="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-7"
        >
          <div>
            <div
              class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white"
            >
              <span v-html="service.icon" class="h-6 w-6" />
            </div>

            <h3 class="text-xl font-semibold text-slate-900 transition-colors group-hover:text-teal-700 sm:text-2xl">
              {{ service.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {{ service.description }}
            </p>
          </div>

          <div
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-all duration-300 group-hover:gap-3"
          >
            Explore service
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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