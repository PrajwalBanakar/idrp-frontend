<template>
  <div class="about-view">
    <AboutHeroSection v-bind="aboutHero" />
    <AboutIntroSection v-bind="aboutIntro" />

    <AboutMissionVisionSection
      :section="missionVisionSection"
      :mission-vision="missionVision"
      :pillars="pillars"
    />

    <AboutTimelineSection
      :section="timelineSection"
      :timeline="timeline"
    />

    <AboutOfferingsSection
      :section="offeringsSection"
      :offerings="offerings"
      :highlight="offeringsHighlight"
    />

    <AboutReasonsSection
      :section="reasonsSection"
      :reasons="reasons"
    />

    <AboutVisionSection
      :section="visionSection"
      :vision-cards="visionCards"
    />

    <AboutCTASection v-bind="aboutCTA" />
  </div>
</template>

<script setup lang="ts">
import AboutHeroSection from '@/components/about/AboutHeroSection.vue'
import AboutIntroSection from '@/components/about/AboutIntroSection.vue'
import AboutMissionVisionSection from '@/components/about/AboutMissionVisionSection.vue'
import AboutTimelineSection from '@/components/about/AboutTimelineSection.vue'
import AboutOfferingsSection from '@/components/about/AboutOfferingsSection.vue'
import AboutReasonsSection from '@/components/about/AboutReasonsSection.vue'
import AboutVisionSection from '@/components/about/AboutVisionSection.vue'
import AboutCTASection from '@/components/about/AboutCTASection.vue'

import {
  aboutCTA,
  aboutHero,
  aboutIntro,
  missionVisionSection,
  missionVision,
  pillars,
  timelineSection,
  timeline,
  offeringsSection,
  offerings,
  offeringsHighlight,
  reasonsSection,
  reasons,
  visionSection,
  visionCards,
} from '@/data/about'
</script>