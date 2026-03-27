<template>
  <div class="min-h-screen bg-gray-50 px-6 py-16 md:px-16">
    <div class="mx-auto max-w-3xl">
      <EventRegistrationHeader
        title="Event Registration"
        description="Register for the event and we’ll get back to you with confirmation details."
      />

      <EventRegistrationNotFound v-if="!event" />

      <template v-else>
        <EventRegistrationEventCard :event="event" />
        <EventRegistrationFormSection :event="event" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import EventRegistrationEventCard from '@/components/events/EventRegistrationEventCard.vue'
import EventRegistrationFormSection from '@/components/events/EventRegistrationFormSection.vue'
import EventRegistrationHeader from '@/components/events/EventRegistrationHeader.vue'
import EventRegistrationNotFound from '@/components/events/EventRegistrationNotFound.vue'

import { getEventById } from '@/data/events'

const route = useRoute()

const event = computed(() => {
  const id = Number(route.params.id)
  return getEventById(id) ?? null
})
</script>