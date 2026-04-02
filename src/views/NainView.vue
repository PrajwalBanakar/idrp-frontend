<template>
  <div class="nain-view bg-white">
    <NainHeroSection v-bind="nainPage.hero" />

    <NainOverviewSection
      :overview="nainPage.overview"
      :stats="overviewStats"
    />

    <NainGallerySection :images="nainImages" />

    <NainInstitutesSection
      :section="nainPage.institutesSection"
      :institutes="filteredInstitutes"
      :search-query="searchQuery"
      :expanded-institute-id="expandedInstituteId"
      @update:searchQuery="searchQuery = $event"
      @toggleInstitute="toggleInstitute"
    />

    <NainCTASection
      title="Want to showcase more supported institutes and student innovations?"
      description="This section can be continuously expanded with institute-wise and year-wise project records, investigator details, project teams, and external project links."
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
import NainOverviewSection from '@/components/nain/NainOverviewSection.vue'
import NainGallerySection from '@/components/nain/NainGallerySection.vue'

import { nainPage, nainImages } from '@/data/nain'

const searchQuery = ref('')
const expandedInstituteId = ref<string | null>(null)

function toggleInstitute(id: string) {
  expandedInstituteId.value = expandedInstituteId.value === id ? null : id
}

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

  if (!query) return nainPage.institutes

  return nainPage.institutes
    .map((institute) => {
      const instituteMatches = [
        institute.name,
        institute.city,
        institute.state,
        institute.description,
      ]
        .join(' ')
        .toLowerCase()
        .includes(query)

      const visibleYears = institute.years
        .map((yearGroup) => {
          const yearMatches = [
            yearGroup.year,
            yearGroup.principalInvestigator,
            yearGroup.coPrincipalInvestigator,
          ]
            .join(' ')
            .toLowerCase()
            .includes(query)

          const filteredProjects = yearGroup.projects.filter((project) => {
            const searchableText = [
              project.title,
              project.brief,
              project.iiitFacultyGuide,
              project.nainCoordinator,
              project.dia,
              project.techMentor,
              project.programAssociate,
              ...project.misExecutives,
              ...project.studentMembers,
            ]
              .join(' ')
              .toLowerCase()

            return searchableText.includes(query)
          })

          if (instituteMatches || yearMatches) {
            return yearGroup
          }

          if (filteredProjects.length > 0) {
            return {
              ...yearGroup,
              projects: filteredProjects,
            }
          }

          return null
        })
        .filter(Boolean) as typeof institute.years

      if (instituteMatches || visibleYears.length > 0) {
        return {
          ...institute,
          years: visibleYears.length > 0 ? visibleYears : institute.years,
        }
      }

      return null
    })
    .filter(Boolean) as typeof nainPage.institutes
})
</script>