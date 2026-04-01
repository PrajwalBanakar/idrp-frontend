<template>
  <div class="mentors-view bg-white">
    <MentorsHeroSection />

    <MentorsTabs
      :tabs="mentorTabs"
      :active-tab="activeTab"
      :search-query="searchQuery"
      @change="setTab"
      @update:searchQuery="searchQuery = $event"
    />

    <MentorsGridSection :mentors="filteredMentors" />

    <MentorsCTASection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
  allMentors,
  mentorGroups,
  mentorTabs,
} from '@/data/mentors'

import MentorsGridSection from '@/components/mentors/MentorsGridSection.vue'
import MentorsTabs from '@/components/mentors/MentorsTabs.vue'
import MentorsHeroSection from '@/components/mentors/MentorsHeroSection.vue'
import MentorsCTASection from '@/components/mentors/MentorsCTASection.vue'

import type { MentorCategory } from '@/types/mentors'

const route = useRoute()
const router = useRouter()

const searchQuery = ref('')

function getValidTab(tab: unknown): MentorCategory {
  if (tab === 'business' || tab === 'technology' || tab === 'faculty' || tab === 'all') {
    return tab
  }
  return 'all'
}

const activeTab = ref<MentorCategory>(getValidTab(route.query.tab))

watch(
  () => route.query.tab,
  (newTab) => {
    activeTab.value = getValidTab(newTab)
  },
)

function setTab(tab: MentorCategory) {
  activeTab.value = tab

  router.replace({
    path: route.path,
    query: tab === 'all' ? {} : { tab },
  })
}

const activeMentors = computed(() => {
  if (activeTab.value === 'all') return allMentors
  return mentorGroups[activeTab.value]
})

const filteredMentors = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) return activeMentors.value

  return activeMentors.value.filter((mentor) => {
    return [
      mentor.name,
      mentor.role,
      mentor.organization ?? '',
      mentor.bio ?? '',
    ]
      .join(' ')
      .toLowerCase()
      .includes(query)
  })
})
</script>