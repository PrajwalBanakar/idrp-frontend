<template>
  <div class="nain-view bg-white">
    <NainHeroSection v-bind="nainPage.hero" />

    <NainOverviewSection
      :overview="nainPage.overview"
      :stats="overviewStats"
    />

    <NainMentorSection :mentor="nainPage.facultyMentor" />

    <NainInstitutesSection
      :section="nainPage.institutesSection"
      :institutes="filteredInstitutes"
      :search-query="searchQuery"
      :selected-year="selectedYear"
      :available-years="availableYears"
      :expanded-institute-id="expandedInstituteId"
      @update:searchQuery="searchQuery = $event"
      @update:selectedYear="selectedYear = $event"
      @toggleInstitute="toggleInstitute"
    />

    <NainCTASection
      title="Want to showcase more supported institutes and student innovations?"
      description="This section can be continuously expanded with institute-wise and year-wise project records, mentor details, images, and external profiles."
      button-label="Contact IDRP"
      button-to="/contact"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import NainCTASection from '@/components/nain/NainCTASection.vue'
import NainHeroSection from '@/components/nain/NainHeroSection.vue'
import NainInstitutesSection from '@/components/nain/NainInstitutesSection.vue'
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