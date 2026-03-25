<template>
  <div class="startups-view">
   <StartupsHeroSection
  image-src="/vision-community.jfif"
  image-alt="Startups"
  eyebrow="Portfolio"
  title="Startups"
  description="Explore startups from the IDRP ecosystem with their profiles, founders, and investor-facing information."
/>

<StartupsIntroSection
  :stats="startupStats"
  eyebrow="Our Community"
  title="Meet the Innovators Driving Our Ecosystem"
  :paragraphs="[
    'At IDRP, we support startups through incubation, mentoring, funding access, and ecosystem connections. This portfolio gives a quick but useful view of each venture.',
    'Open any card to see the startup brief, founders, LinkedIn profiles, website, investor one-pager, and contact details.',
  ]"
  image-src="/vision-innovation.jfif"
  image-alt="IDRP Startups"
/>

<StartupsPortfolioSection :startups="startups" />

 <StartupsCTASection />
  </div>
</template>

<script setup lang="ts">
import {
  startupStats,
  startups,
} from '@/data/startups'

import StartupsPortfolioSection from '@/components/startups/StartupsPortfolioSection.vue'
import StartupsHeroSection from '@/components/startups/StartupsHeroSection.vue'
import StartupsIntroSection from '@/components/startups/StartupsIntroSection.vue'
import StartupsCTASection from '@/components/startups/StartupsCTASection.vue'
</script>