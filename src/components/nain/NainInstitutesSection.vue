<template>
  <section id="institutes" class="mx-auto max-w-7xl px-6 py-16 md:px-12">
    <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span
          v-if="section.eyebrow"
          class="text-sm font-semibold uppercase tracking-widest text-teal-600"
        >
          {{ section.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          {{ section.title }}
        </h2>

        <p class="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600">
          {{ section.description }}
        </p>
      </div>

      <NainFilters
        :search-query="searchQuery"
        @update:search-query="$emit('update:searchQuery', $event)"
      />
    </div>

    <div class="space-y-6">
      <NainInstituteCard
        v-for="institute in institutes"
        :key="institute.id"
        :institute="institute"
        :expanded="expandedInstituteId === institute.id"
        @toggle="$emit('toggleInstitute', $event)"
      />

      <div
        v-if="institutes.length === 0"
        class="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center"
      >
        <h3 class="text-xl font-bold text-slate-900">No matching institutes found</h3>
        <p class="mt-2 text-sm text-slate-600">Try changing the search text.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NainFilters from '@/components/nain/NainFilters.vue'
import NainInstituteCard from '@/components/nain/NainInstituteCard.vue'

import type { NAINInstitute, NAINSectionIntro } from '@/types/nain'

defineProps<{
  section: NAINSectionIntro
  institutes: NAINInstitute[]
  searchQuery: string
  expandedInstituteId: string | null
}>()

defineEmits<{
  (e: 'update:searchQuery', value: string): void
  (e: 'toggleInstitute', id: string): void
}>()
</script>