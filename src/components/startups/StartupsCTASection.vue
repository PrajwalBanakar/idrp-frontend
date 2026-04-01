<template>
  <section class="bg-white px-6 pb-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-2xl md:px-12 md:py-12"
      >
        <!-- Background -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900" />
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_28%)]"
          />
        </div>

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
          <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        </div>

        <!-- Content -->
        <div
          class="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
        >
          <!-- Left -->
          <div class="max-w-2xl">
            <h3 class="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-slate-200 md:text-base">
              {{ description }}
            </p>
          </div>

          <!-- Right -->
          <div class="flex shrink-0 flex-col gap-4 sm:flex-row">
            <RouterLink
              :to="primaryTo"
              class="inline-flex min-w-[200px] items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700"
            >
              {{ primaryLabel }}
            </RouterLink>

            <RouterLink
              :to="secondaryTo"
              class="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:text-slate-950"
            >
              {{ secondaryLabel }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
  defineProps<{
    title?: string
    description?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }>(),
  {
    title: 'Ready to join this community?',
    description: 'Apply to one of our programs and become part of the IDRP story.',
    primaryLabel: 'Apply Now',
    primaryTo: '/apply/incubation',
    secondaryLabel: 'Contact Us',
    secondaryTo: '/contact',
  },
)
</script>