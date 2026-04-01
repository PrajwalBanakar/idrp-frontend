<template>
  <article
    class="group flex min-h-[132px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    :class="hoverBorderClass"
  >
    <div
      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm"
      :style="{ background: partner.color }"
    >
      {{ partner.abbr }}
    </div>

    <p class="text-center text-sm font-semibold leading-snug text-slate-700">
      {{ partner.name }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { Partner } from '@/types/partners'

defineProps<{
  partner: Partner
  hoverBorderClass?: string
}>()
</script>