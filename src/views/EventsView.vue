<template>
  <div class="events-view">
    <!-- Hero -->
    <section class="relative h-[45vh] min-h-[300px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/hero3.jfif"
        alt="Events"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Community
          </span>
        </div>
        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">Events</h1>
      </div>
    </section>

    <EventsSection
      eyebrow="What's Next"
      title="Upcoming Events"
      :items="upcomingEvents"
      :paginated-items="upcomingPaginatedItems"
      :current-page="upcomingPage"
      :total-pages="upcomingTotalPages"
      variant="upcoming"
      @update:currentPage="upcomingPage = $event"
    />

    <EventsSection
      eyebrow="Archive"
      title="Past Events"
      :items="pastEvents"
      :paginated-items="pastPaginatedItems"
      :current-page="pastPage"
      :total-pages="pastTotalPages"
      variant="past"
      @update:currentPage="pastPage = $event"
    />

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 class="text-2xl font-bold text-white">Want to host an event at IDRP?</h3>
          <p class="mt-2 text-teal-100">Reach out to us about our event spaces and auditorium.</p>
        </div>

        <RouterLink
          to="/contact"
          class="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
        >
          Contact Us
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import { RouterLink } from 'vue-router'
import EventsSection from '@/components/events/EventsSection.vue'
import { events } from '@/data/events'
import type { EventItem } from '@/types/events'

const PER_PAGE = 4
const showHeroImage = ref(true)

function createPagination(items: Ref<EventItem[]>, page: Ref<number>) {
  const totalPages = computed(() => Math.max(1, Math.ceil(items.value.length / PER_PAGE)))

  const paginatedItems = computed(() => {
    const safePage = Math.min(page.value, totalPages.value)
    const start = (safePage - 1) * PER_PAGE
    return items.value.slice(start, start + PER_PAGE)
  })

  return {
    totalPages,
    paginatedItems,
  }
}

const upcomingEventsRef = computed(() => events.filter((event) => event.isUpcoming))
const pastEventsRef = computed(() => events.filter((event) => !event.isUpcoming))

const upcomingPage = ref(1)
const pastPage = ref(1)

const {
  totalPages: upcomingTotalPagesRef,
  paginatedItems: upcomingPaginatedItemsRef,
} = createPagination(upcomingEventsRef, upcomingPage)

const {
  totalPages: pastTotalPagesRef,
  paginatedItems: pastPaginatedItemsRef,
} = createPagination(pastEventsRef, pastPage)

const upcomingEvents = computed(() => upcomingEventsRef.value)
const pastEvents = computed(() => pastEventsRef.value)

const upcomingPaginatedItems = computed(() => upcomingPaginatedItemsRef.value)
const pastPaginatedItems = computed(() => pastPaginatedItemsRef.value)

const upcomingTotalPages = computed(() => upcomingTotalPagesRef.value)
const pastTotalPages = computed(() => pastTotalPagesRef.value)
</script>