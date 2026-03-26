<template>
  <div class="technical-education-academy-view">
    <ServiceHeroSection :hero="technicalEducationAcademyPage.hero" />
    <ServiceIntroSection :intro="technicalEducationAcademyPage.intro" />
    <ServiceHighlightsSection :items="technicalEducationAcademyPage.highlights ?? []" />
    <ServiceStatsSection :stats="technicalEducationAcademyPage.stats ?? []" />
    <CoursesSection :courses="courses" />
    <ServiceCTASection
      v-if="technicalEducationAcademyPage.cta"
      :cta="technicalEducationAcademyPage.cta"
    />
    <AcademyFormSection />
  </div>
</template>

<script setup lang="ts">
import { courses } from '@/data/courses'
import { technicalEducationAcademyPage } from '@/data/technicalEducationAcademy'
import AcademyFormSection from '@/components/academy/AcademyFormSection.vue'
import CoursesSection from '@/components/academy/CoursesSection.vue'
import ServiceCTASection from '@/components/services/ServiceCTASection.vue'
import ServiceHeroSection from '@/components/services/ServiceHeroSection.vue'
import ServiceHighlightsSection from '@/components/services/ServiceHighlightsSection.vue'
import ServiceIntroSection from '@/components/services/ServiceIntroSection.vue'
import ServiceStatsSection from '@/components/services/ServiceStatsSection.vue'
</script>