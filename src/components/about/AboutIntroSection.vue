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
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
      <div class="lg:w-1/2">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 mb-6 text-4xl font-bold leading-tight text-gray-900">
          {{ props.title }}
        </h2>

        <div class="space-y-4 leading-relaxed text-gray-600">
          <p v-for="paragraph in props.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div v-if="props.stats.length" class="mt-8 flex flex-wrap gap-8">
          <div v-for="stat in props.stats" :key="stat.label">
            <p class="text-3xl font-extrabold text-teal-700">{{ stat.value }}</p>
            <p class="mt-1 text-sm text-gray-500">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2">
        <div
          class="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl"
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
          <div
            class="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-3xl bg-teal-600/20"
          />
        </div>

        <div
          v-if="props.badgeText"
          class="mt-4 ml-4 inline-flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-3"
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