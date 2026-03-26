<script setup lang="ts">
import type { NAINOverviewContent } from '@/types/nain'

type OverviewStatItem = {
  id: string
  label: string
  value: number | string
  tone?: 'teal' | 'cyan' | 'slate'
}

type Props = {
  overview: NAINOverviewContent
  stats: OverviewStatItem[]
}

defineProps<Props>()

function getCardClasses(tone?: 'teal' | 'cyan' | 'slate') {
  switch (tone) {
    case 'cyan':
      return 'border-cyan-100 bg-cyan-50'
    case 'slate':
      return 'border-slate-200 bg-slate-50'
    case 'teal':
    default:
      return 'border-teal-100 bg-teal-50'
  }
}

function getLabelClasses(tone?: 'teal' | 'cyan' | 'slate') {
  switch (tone) {
    case 'cyan':
      return 'text-cyan-700'
    case 'slate':
      return 'text-slate-700'
    case 'teal':
    default:
      return 'text-teal-700'
  }
}
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-16 md:px-12">
    <div class="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
      <div>
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ overview.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          {{ overview.title }}
        </h2>

        <div class="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
          <p v-for="paragraph in overview.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div
          v-for="stat in stats"
          :key="stat.id"
          :class="[
            'rounded-3xl border p-6',
            getCardClasses(stat.tone),
          ]"
        >
          <p
            :class="[
              'text-sm font-semibold uppercase tracking-wider',
              getLabelClasses(stat.tone),
            ]"
          >
            {{ stat.label }}
          </p>

          <p class="mt-2 text-4xl font-extrabold text-slate-900">
            {{ stat.value }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>