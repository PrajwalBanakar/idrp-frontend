<script setup lang="ts">
import type { Offering } from '@/types/about'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  offerings: Offering[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'What We Offer',
  title: 'Support Designed for the Startup Journey',
  description:
    'IDRP provides a connected set of services that help founders move from idea to validation, growth, and long-term scale.',
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

      <div class="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-[2rem] border border-teal-100 bg-white p-8 shadow-sm md:p-10">
          <div class="grid gap-6 sm:grid-cols-2">
            <article
              v-for="offering in offerings"
              :key="offering.title"
              class="rounded-3xl border border-gray-100 bg-gray-50 p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div class="mb-4 h-1.5 w-14 rounded-full bg-teal-500" />
              <h3 class="text-lg font-bold text-gray-900">
                {{ offering.title }}
              </h3>
              <p class="mt-3 text-sm leading-relaxed text-gray-600">
                {{ offering.description }}
              </p>
            </article>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 p-8 text-white shadow-xl md:p-10">
          <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
          <div class="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10" />

          <div class="relative z-10">
            <span class="text-xs font-semibold uppercase tracking-[0.3em] text-teal-100">
              Founder Support Model
            </span>

            <h3 class="mt-4 text-3xl font-bold leading-tight">
              A connected ecosystem, not isolated services
            </h3>

            <p class="mt-4 max-w-xl leading-relaxed text-teal-50">
              At IDRP, incubation is not treated as a single program. Founders gain access to a
              layered system of mentoring, research support, infrastructure, market access, and
              capacity building that evolves with their stage of growth.
            </p>

            <div class="mt-8 space-y-4">
              <div class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p class="text-sm font-semibold text-white">Stage 1</p>
                <p class="mt-1 text-sm text-teal-50">
                  Idea validation, research exploration, and early problem discovery.
                </p>
              </div>

              <div class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p class="text-sm font-semibold text-white">Stage 2</p>
                <p class="mt-1 text-sm text-teal-50">
                  Product shaping, startup mentoring, and ecosystem support for traction.
                </p>
              </div>

              <div class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p class="text-sm font-semibold text-white">Stage 3</p>
                <p class="mt-1 text-sm text-teal-50">
                  Investor readiness, market connects, and long-term venture growth pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>