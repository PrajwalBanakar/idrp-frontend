<template>
  <section class="bg-white px-6 py-8 md:px-12 lg:px-16">
    <div class="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          @click="$emit('change', tab.key)"
          class="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300"
          :class="
            activeTab === tab.key
              ? 'bg-teal-600 text-white shadow-md shadow-teal-200'
              : 'border border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700'
          "
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="w-full lg:w-72">
        <input
          :value="searchQuery"
          type="text"
          placeholder="Search mentors..."
          class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
        />
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
  searchQuery: string
}>()

defineEmits<{
  change: [tab: MentorCategory]
  'update:searchQuery': [value: string]
}>()
</script>