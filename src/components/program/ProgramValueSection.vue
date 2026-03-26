<script setup lang="ts">
import { ref } from 'vue'
import type { ProgramValueItem } from '@/types/program'

type Props = {
  eyebrow?: string
  title: string
  items: ProgramValueItem[]
  image?: string
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Why This Program',
  image: '',
  imageAlt: 'Program value image',
})

const showImage = ref(true)
</script>

<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 text-4xl font-bold leading-tight text-gray-900">
          {{ props.title }}
        </h2>

        <div class="mt-8 space-y-5">
          <article
            v-for="item in props.items"
            :key="item.title"
            class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
          >
            <div class="mb-4 h-1.5 w-14 rounded-full bg-teal-500" />
            <h3 class="text-lg font-bold text-gray-900">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>

      <div>
        <div
          class="relative h-[460px] overflow-hidden rounded-[2rem] shadow-2xl"
          :class="{
            'bg-gradient-to-br from-teal-100 via-cyan-50 to-white': !showImage,
          }"
        >
          <img
            v-if="showImage && props.image"
            :src="props.image"
            :alt="props.imageAlt"
            class="h-full w-full object-cover"
            @error="showImage = false"
          />

          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-900/10 via-transparent to-transparent" />
          <div class="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20" />
          <div class="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-teal-200/30" />
        </div>
      </div>
    </div>
  </section>
</template>