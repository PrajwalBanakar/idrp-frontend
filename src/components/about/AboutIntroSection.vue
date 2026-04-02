<script setup lang="ts">
type IntroStat = {
  label: string
  value: string
}

type Props = {
  eyebrow?: string
  title: string
  paragraphs: string[]
  stats?: IntroStat[]
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Our Story',
  stats: () => [],
})
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-5xl">
      <div class="text-center">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {{ props.title }}
        </h2>
      </div>

      <div class="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-8 text-slate-600 sm:text-lg">
        <p v-for="paragraph in props.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div
        v-if="props.stats.length"
        class="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="stat in props.stats"
          :key="stat.label"
          class="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
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
  </section>
</template>