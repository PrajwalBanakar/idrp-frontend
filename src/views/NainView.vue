<script setup lang="ts">
import { computed, ref } from 'vue'

import NainFilters from '@/components/nain/NainFilters.vue'
import NainHeroSection from '@/components/nain/NainHeroSection.vue'
import NainInstituteCard from '@/components/nain/NainInstituteCard.vue'
import NainMentorSection from '@/components/nain/NainMentorSection.vue'
import NainOverviewSection from '@/components/nain/NainOverviewSection.vue'

import { nainPage } from '@/data/nain'

const searchQuery = ref('')
const selectedYear = ref('all')
const expandedInstituteId = ref<string | null>(null)

function toggleInstitute(id: string) {
  expandedInstituteId.value = expandedInstituteId.value === id ? null : id
}

const availableYears = computed(() => {
  const yearSet = new Set<string>()

  nainPage.institutes.forEach((institute) => {
    institute.years.forEach((yearGroup) => {
      yearSet.add(yearGroup.year)
    })
  })

  return Array.from(yearSet).sort().reverse()
})

const totalProjects = computed(() => {
  return nainPage.institutes.reduce((total, institute) => {
    return (
      total +
      institute.years.reduce((sum, yearGroup) => {
        return sum + yearGroup.projects.length
      }, 0)
    )
  }, 0)
})

const overviewStats = computed(() =>
  nainPage.overview.stats.map((stat) => ({
    ...stat,
    value: stat.id === 'institutes' ? nainPage.institutes.length : totalProjects.value,
  })),
)

const filteredInstitutes = computed<typeof nainPage.institutes>(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return nainPage.institutes
    .map((institute) => {
      const visibleYears = institute.years.flatMap((yearGroup) => {
        const yearMatches =
          selectedYear.value === 'all' || yearGroup.year === selectedYear.value

        if (!yearMatches) return []

        const filteredProjects = yearGroup.projects.filter((project) => {
          if (!query) return true

          const searchableText = [
            institute.name,
            institute.location,
            institute.description,
            yearGroup.year,
            project.title,
            project.brief,
            project.facultyGuide,
            ...project.students,
          ]
            .join(' ')
            .toLowerCase()

          return searchableText.includes(query)
        })

        if (filteredProjects.length === 0) return []

        return [
          {
            ...yearGroup,
            projects: filteredProjects,
          },
        ]
      })

      return {
        ...institute,
        years: visibleYears,
      }
    })
    .filter((institute) => institute.years.length > 0)
})
</script>

<template>
  <div class="nain-view bg-white">
    <NainHeroSection v-bind="nainPage.hero" />

    <NainOverviewSection
      :overview="nainPage.overview"
      :stats="overviewStats"
    />

    <NainMentorSection :mentor="nainPage.facultyMentor" />

    <section id="institutes" class="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            {{ nainPage.institutesSection.eyebrow }}
          </span>

          <h2 class="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            {{ nainPage.institutesSection.title }}
          </h2>

          <p class="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600">
            {{ nainPage.institutesSection.description }}
          </p>
        </div>

        <NainFilters
          :search-query="searchQuery"
          :selected-year="selectedYear"
          :available-years="availableYears"
          @update:search-query="searchQuery = $event"
          @update:selected-year="selectedYear = $event"
        />
      </div>

      <div class="space-y-6">
        <NainInstituteCard
          v-for="institute in filteredInstitutes"
          :key="institute.id"
          :institute="institute"
          :expanded="expandedInstituteId === institute.id"
          :selected-year="selectedYear"
          @toggle="toggleInstitute"
        />

        <div
          v-if="filteredInstitutes.length === 0"
          class="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center"
        >
          <h3 class="text-xl font-bold text-slate-900">No matching institutes found</h3>
          <p class="mt-2 text-sm text-slate-600">
            Try changing the search text or year filter.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-r from-teal-700 to-cyan-600">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:px-12 lg:flex-row lg:text-left"
      >
        <div>
          <h3 class="text-2xl font-bold text-white">
            Want to showcase more supported institutes and student innovations?
          </h3>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-teal-100">
            This section can be continuously expanded with institute-wise and year-wise project
            records, mentor details, images, and external profiles.
          </p>
        </div>

        <RouterLink
          to="/contact"
          class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
        >
          Contact IDRP
        </RouterLink>
      </div>
    </section>
  </div>
</template>