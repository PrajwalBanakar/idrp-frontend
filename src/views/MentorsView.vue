<template>
  <div class="mentors-view">
    <MentorsHeroSection />
    <MentorsIntroSection />
    <MentorsTabs :tabs="mentorTabs" :active-tab="activeTab" @change="setTab" />
    <MentorsGridSection :title="activeCategoryTitle" :mentors="activeMentors" />
    <MentorsCTASection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { businessMentors, technologyMentors, facultyMentors } from '@/data/mentors'
import MentorsGridSection from '@/components/mentors/MentorsGridSection.vue'
import MentorsTabs from '@/components/mentors/MentorsTabs.vue'
import MentorsHeroSection from '@/components/mentors/MentorsHeroSection.vue'
import MentorsIntroSection from '@/components/mentors/MentorsIntroSection.vue'
import MentorsCTASection from '@/components/mentors/MentorsCTASection.vue'

type MentorTabKey = 'business' | 'technology' | 'faculty'

const route = useRoute()
const router = useRouter()

const mentorTabs: { key: MentorTabKey; label: string }[] = [
  { key: 'business', label: 'Business Mentors' },
  { key: 'technology', label: 'Technology Mentors' },
  { key: 'faculty', label: 'Faculty Mentors' },
]

function getValidTab(tab: unknown): MentorTabKey {
  if (tab === 'technology' || tab === 'faculty' || tab === 'business') {
    return tab
  }
  return 'business'
}

const activeTab = ref<MentorTabKey>(getValidTab(route.query.tab))

watch(
  () => route.query.tab,
  (newTab) => {
    activeTab.value = getValidTab(newTab)
  },
)

function setTab(tab: MentorTabKey) {
  activeTab.value = tab
  router.replace({
    path: '/mentors',
    query: { tab },
  })
}

const activeMentors = computed(() => {
  if (activeTab.value === 'technology') return technologyMentors
  if (activeTab.value === 'faculty') return facultyMentors
  return businessMentors
})

const activeCategoryTitle = computed(() => {
  if (activeTab.value === 'technology') return 'Technology Mentors'
  if (activeTab.value === 'faculty') return 'Faculty Mentors'
  return 'Business Mentors'
})
</script>
