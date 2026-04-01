<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  eyebrow?: string
  title: string
  subtitle: string
  image?: string
  imageAlt?: string
  minHeightClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Program',
  image: '',
  imageAlt: 'Program hero image',
  minHeightClass: 'min-h-[360px]',
})

const showHeroImage = ref(true)
</script>

<template>
  <section
    class="relative h-[55vh] overflow-hidden"
    :class="props.minHeightClass"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/75 to-teal-700/25" />
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

    <div class="relative z-10 flex h-full items-center px-6 md:px-16">
      <div class="max-w-3xl">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            {{ props.eyebrow }}
          </span>
        </div>

        <h1 class="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
          {{ props.title }}
        </h1>

        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-teal-100 md:text-xl">
          {{ props.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>