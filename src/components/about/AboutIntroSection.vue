<script setup lang="ts">
import { ref } from 'vue'

type IntroStat = {
  label: string
  value: string
}

type Props = {
  eyebrow?: string
  title: string
  paragraphs: string[]
  stats?: IntroStat[]
  image?: string
  imageAlt?: string
  badgeText?: string
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Our Story',
  stats: () => [],
  image: '/about-intro.jfif',
  imageAlt: 'IDRP Campus',
  badgeText: 'Actively accepting applications',
})

const showIntroImage = ref(true)
</script>

<template>
  <section class="bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ props.title }}
        </h2>

        <div class="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          <p v-for="paragraph in props.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div v-if="props.stats.length" class="mt-8 grid gap-6 sm:grid-cols-3">
          <div
            v-for="stat in props.stats"
            :key="stat.label"
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p class="text-3xl font-bold tracking-tight text-teal-700">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-sm font-medium text-slate-500">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div
          class="relative h-[400px] overflow-hidden rounded-[2rem] shadow-xl"
          :class="{
            'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage,
          }"
        >
          <img
            v-if="showIntroImage && props.image"
            :src="props.image"
            :alt="props.imageAlt"
            class="h-full w-full object-cover"
            @error="showIntroImage = false"
          />

          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent" />
        </div>

        <div
          v-if="props.badgeText"
          class="mt-5 inline-flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-3"
        >
          <div class="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
          <p class="text-sm font-semibold text-teal-700">
            {{ props.badgeText }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>