<template>
  <article
    class="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md"
    :class="hoverBorderClass"
  >
    <div
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
      :style="{ background: partner.color }"
    >
      {{ partner.abbr }}
    </div>

    <p class="text-center text-xs font-semibold leading-tight text-gray-600">
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