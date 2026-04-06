<template>
  <div class="min-h-screen bg-slate-50 px-6 py-16 md:px-12 lg:px-16">
    <div class="mx-auto max-w-3xl">
      <EventRegistrationHeader
        title="Event Registration"
        description="Complete the registration form below. Our team will share confirmation details with you shortly."
      />

      <EventRegistrationNotFound v-if="!event" />
      <EventRegistrationFormSection v-else :event="event" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

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