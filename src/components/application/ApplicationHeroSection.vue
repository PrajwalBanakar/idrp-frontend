<template>
  <section class="relative bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700 px-6 py-20 md:px-16 text-white">
    <div class="mx-auto max-w-6xl">
      <button @click="$emit('back')" class="mb-6 text-sm">
        ← Back to {{ program.backLabel }}
      </button>

      <div class="mb-4">
        {{ program.emoji }} {{ program.badge }}
      </div>

      <h1 class="text-4xl font-bold">{{ program.title }}</h1>
      <p class="mt-4">{{ program.description }}</p>
      <p class="mt-2 text-sm text-teal-200">{{ program.meta }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProgramMeta } from '@/types/application'

defineProps<{ program: ProgramMeta }>()
defineEmits(['back'])
</script>