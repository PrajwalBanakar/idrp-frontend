<template>
  <div class="home-view">
    <HeroSection :hero-slides="heroSlides" />
    <ImpactSection :impact-cards="impactCards" :stats="statsData" />
    <ProgramsSection :programs="programs" :government-programs="governmentPrograms" />
    <CourseSection :courses="courses" />
    <ServicesSection :services="services" />
    <ApproachSection :approaches="approaches" />
    <SuccessStoriesSection :success-stories="successStories" />
    <PartnersSection :partner-categories="partnerCategories" :all-partners="allPartners" />
    <AwardsSection :awards="awards" />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import {
  heroSlides,
  impactCards,
  programs,
  governmentPrograms,
  courses,
  services,
  approaches,
  successStories,
  partnerCategories,
  allPartners,
  awards,
  stats as statsData,
} from '@/data/home'

import ProgramsSection from '@/components/home/ProgramsSection.vue'
import PartnersSection from '@/components/home/PartnersSection.vue'
import CourseSection from '@/components/home/CourseSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import ApproachSection from '@/components/home/ApproachSection.vue'
import ImpactSection from '@/components/home/ImpactSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection.vue'
import AwardsSection from '@/components/home/AwardsSection.vue'
import CTASection from '@/components/home/CTASection.vue'
</script>