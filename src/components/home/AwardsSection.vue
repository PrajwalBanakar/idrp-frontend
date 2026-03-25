<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-20 flex flex-col items-start gap-16 lg:flex-row">
        <div class="shrink-0 lg:w-2/5">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Milestones
          </span>
          <h2 class="mt-2 text-4xl font-bold leading-tight text-gray-900">
            Awards &<br />Recognition
          </h2>
          <div class="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
        </div>

        <div class="space-y-4 leading-relaxed text-gray-600 lg:w-3/5">
          <p>
            The truest measure of our work is visible in the ventures we help build. When a
            founder scales, files a patent, or closes a funding round, that's recognition we carry
            with pride. But acknowledgment from institutions and peers has followed too.
          </p>
          <p>
            IDRP's contributions to mentorship, startup growth, and ecosystem development have
            earned recognition from leading bodies — a reflection of a collective effort involving
            founders, mentors, partners, and policymakers alike.
          </p>
          <p class="font-medium text-teal-700">
            These honours don't define us — they remind us that when startups succeed, the nation
            moves forward. And that keeps us going.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        <div
          v-for="award in awards"
          :key="award.title"
          class="group flex flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-teal-200 hover:shadow-xl"
        >
          <div class="h-40 w-full overflow-hidden bg-gradient-to-br" :class="award.bg">
            <img
              v-if="award.image"
              :src="award.image"
              :alt="award.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              v-else
              class="flex h-full w-full flex-col items-center justify-center gap-2 px-4"
            >
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </div>
              <span class="text-center text-xs font-semibold text-white/80">
                {{ award.issuer }}
              </span>
            </div>
          </div>

          <div class="px-4 py-4 text-center">
            <p
              class="text-xs font-bold leading-snug text-gray-800 transition-colors group-hover:text-teal-700"
            >
              {{ award.title }}
            </p>
            <p class="mt-1 text-xs text-gray-400">{{ award.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Award } from '@/data/home'

defineProps<{
  awards: Award[]
}>()
</script>