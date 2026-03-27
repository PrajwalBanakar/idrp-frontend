<template>
  <div class="event-detail-view bg-white">
    <EventDetailNotFound v-if="!event" />

    <template v-else>
      <EventDetailHeroSection
        :event="event"
        :show-hero-image="showHeroImage"
        @imageError="showHeroImage = false"
      />

      <EventQuickInfoSection :event="event" />

      <section class="bg-gray-50 px-6 py-14 md:px-16">
        <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div class="space-y-8">
            <EventAboutSection :description="event.fullDescription" />
            <EventHighlightsSection :highlights="event.highlights" />
            <EventAgendaSection :agenda="event.agenda" />
          </div>

          <div class="space-y-8">
            <EventSnapshotCard :event="event" />
            <EventSpeakersSection :speakers="event.speakers" />
            <EventDetailCTASection />
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import EventAboutSection from '@/components/events/EventAboutSection.vue'
import EventAgendaSection from '@/components/events/EventAgendaSection.vue'
import EventDetailCTASection from '@/components/events/EventDetailCTASection.vue'
import EventDetailHeroSection from '@/components/events/EventDetailHeroSection.vue'
import EventDetailNotFound from '@/components/events/EventDetailNotFound.vue'
import EventHighlightsSection from '@/components/events/EventHighlightsSection.vue'
import EventQuickInfoSection from '@/components/events/EventQuickInfoSection.vue'
import EventSnapshotCard from '@/components/events/EventSnapshotCard.vue'
import EventSpeakersSection from '@/components/events/EventSpeakersSection.vue'

import { events } from '@/data/events'

const route = useRoute()
const showHeroImage = ref(true)

const event = computed(() => {
  const id = Number(route.params.id)
  return events.find((item) => item.id === id) ?? null
})

watch(
  () => route.params.id,
  () => {
    showHeroImage.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)
</script>