<script setup lang="ts">
import TeamCTASection from '@/components/team/TeamCTASection.vue'
import TeamGridSection from '@/components/team/TeamGridSection.vue'
import TeamHeroSection from '@/components/team/TeamHeroSection.vue'
import TeamIntroSection from '@/components/team/TeamIntroSection.vue'

import {
  investmentCommitteeCTA,
  investmentCommitteeHero,
  investmentCommitteeIntro,
  investmentCommitteeMembers,
} from '@/data/investmentCommittee'
</script>

<template>
  <div class="investment-committee-view">
    <TeamHeroSection v-bind="investmentCommitteeHero" />
    <TeamIntroSection v-bind="investmentCommitteeIntro" />
    <TeamGridSection
      eyebrow="Committee Members"
      title="People Guiding Investment Readiness"
      description="A focused group of leaders supporting venture evaluation, strategic direction, and ecosystem growth."
      :members="investmentCommitteeMembers"
    />
    <TeamCTASection v-bind="investmentCommitteeCTA" />
  </div>
</template>