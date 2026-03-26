<template>
  <div class="our-team-view">
    <TeamHeroSection v-bind="teamHero" />
    <TeamIntroSection v-bind="teamIntro" />
    <TeamGridSection :members="teamMembers" />
    <TeamCTASection v-bind="teamCTA" />
  </div>
</template>

<script setup lang="ts">
import TeamHeroSection from '@/components/team/TeamHeroSection.vue'
import TeamGridSection from '@/components/team/TeamGridSection.vue'
import TeamIntroSection from '@/components/team/TeamIntroSection.vue'
import TeamCTASection from '@/components/team/TeamCTASection.vue'

import { teamMembers, teamHero, teamIntro, teamCTA } from '@/data/team'
</script>
