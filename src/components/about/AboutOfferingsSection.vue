<script setup lang="ts">
import type {
  AboutSectionIntro,
  Offering,
  OfferingsHighlight,
} from '@/types/about'

defineProps<{
  section: AboutSectionIntro
  offerings: Offering[]
  highlight: OfferingsHighlight
}>()
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
          {{ section.eyebrow }}
        </span>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ section.title }}
        </h2>
        <p class="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {{ section.description }}
        </p>
      </div>

      <div class="grid items-stretch gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div class="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <div class="grid flex-1 gap-5 sm:grid-cols-2">
            <article
              v-for="offering in offerings"
              :key="offering.title"
              class="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div class="mb-4 h-1.5 w-14 rounded-full bg-teal-500" />
              <h3 class="text-lg font-bold tracking-tight text-slate-900">
                {{ offering.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
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
              {{ highlight.eyebrow }}
            </span>

            <h3 class="mt-4 text-3xl font-bold tracking-tight">
              {{ highlight.title }}
            </h3>

            <p class="mt-4 max-w-xl text-base leading-8 text-teal-50">
              {{ highlight.description }}
            </p>

            <div class="mt-8 space-y-4">
              <div
                v-for="stage in highlight.stages"
                :key="stage.label"
                class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <p class="text-sm font-semibold text-white">{{ stage.label }}</p>
                <p class="mt-1 text-sm leading-7 text-teal-50">
                  {{ stage.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>