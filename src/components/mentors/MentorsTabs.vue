<template>
  <section class="bg-white px-6 pb-8 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-wrap items-center justify-center gap-4">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          @click="$emit('change', tab.key)"
          class="rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200"
          :class="
            activeTab === tab.key
              ? 'bg-teal-600 text-white shadow-lg'
              : 'border border-gray-200 bg-white text-gray-700 hover:border-teal-300 hover:text-teal-700'
          "
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MentorCategory } from '@/types/mentors'

type MentorTab = {
  key: MentorCategory
  label: string
}

defineProps<{
  tabs: MentorTab[]
  activeTab: MentorCategory
}>()

defineEmits<{
  change: [tab: MentorCategory]
}>()
</script>