<template>
  <div class="event-detail-view bg-white">
    <!-- Not Found -->
    <section
      v-if="!event"
      class="flex min-h-[70vh] items-center justify-center px-6 py-20 md:px-16"
    >
      <div class="max-w-xl text-center">
        <div
          class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-3xl"
        >
          📅
        </div>
        <h1 class="text-3xl font-extrabold text-gray-900 md:text-4xl">Event not found</h1>
        <p class="mt-4 text-base leading-7 text-gray-600">
          The event you are looking for does not exist or may have been removed.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/events"
            class="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-teal-800"
          >
            Back to Events
          </RouterLink>

          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>

    <template v-else>
      <!-- Hero -->
      <section class="relative min-h-[55vh] overflow-hidden">
        <img
          v-if="showHeroImage"
          :src="event.image"
          :alt="event.title"
          class="absolute inset-0 h-full w-full object-cover object-center"
          @error="showHeroImage = false"
        />
        <div v-else class="absolute inset-0 bg-gradient-to-br" :class="event.fallbackBg" />

        <div
          class="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-slate-900/40"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

        <div
          class="relative z-10 mx-auto flex min-h-[55vh] max-w-6xl items-end px-6 py-12 md:px-16 md:py-16"
        >
          <div class="max-w-3xl">
            <div class="mb-4 flex flex-wrap items-center gap-3">
              <span
                class="rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-100 backdrop-blur-sm"
              >
                {{ event.category }}
              </span>
              <span
                class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm"
              >
                {{ event.isUpcoming ? 'Upcoming Event' : 'Past Event' }}
              </span>
            </div>

            <h1 class="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              {{ event.title }}
            </h1>

            <p class="mt-5 max-w-2xl text-base leading-7 text-teal-50 md:text-lg">
              {{ event.description }}
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <RouterLink
                to="/events"
                class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                ← Back to Events
              </RouterLink>

              <RouterLink
                v-if="event.isUpcoming"
                :to="`/events/${event.id}/register`"
                class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
              >
                Register Now
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Info -->
      <section class="bg-white px-6 py-10 md:px-16">
        <div class="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
          <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Date</p>
            <p class="mt-2 text-base font-bold text-gray-900">{{ event.date }}</p>
          </div>

          <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Time</p>
            <p class="mt-2 text-base font-bold text-gray-900">{{ event.time || '-' }}</p>
          </div>

          <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Location</p>
            <p class="mt-2 text-base font-bold text-gray-900">{{ event.location || '-' }}</p>
          </div>

          <div class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Mode</p>
            <p class="mt-2 text-base font-bold text-gray-900">{{ event.mode || '-' }}</p>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="bg-gray-50 px-6 py-14 md:px-16">
        <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <!-- Left -->
          <div class="space-y-8">
            <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <div class="mb-4 flex items-center gap-3">
                <div class="h-8 w-1 rounded-full bg-teal-500" />
                <h2 class="text-2xl font-bold text-gray-900">About This Event</h2>
              </div>

              <p class="text-base leading-8 text-gray-600">
                {{ event.fullDescription }}
              </p>
            </div>

            <div
              v-if="event.highlights?.length"
              class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
            >
              <div class="mb-4 flex items-center gap-3">
                <div class="h-8 w-1 rounded-full bg-teal-500" />
                <h2 class="text-2xl font-bold text-gray-900">What You Can Expect</h2>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div
                  v-for="(item, index) in event.highlights"
                  :key="`${item}-${index}`"
                  class="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                >
                  <div class="mb-2 text-xl">✨</div>
                  <p class="text-sm font-semibold leading-6 text-gray-700">
                    {{ item }}
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="event.agenda?.length"
              class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
            >
              <div class="mb-4 flex items-center gap-3">
                <div class="h-8 w-1 rounded-full bg-teal-500" />
                <h2 class="text-2xl font-bold text-gray-900">Agenda</h2>
              </div>

              <div class="space-y-4">
                <div
                  v-for="(item, index) in event.agenda"
                  :key="`${item.time}-${item.title}-${index}`"
                  class="flex gap-4 rounded-2xl border border-gray-100 p-5"
                >
                  <div class="min-w-[100px]">
                    <p class="text-sm font-bold text-teal-700">{{ item.time }}</p>
                  </div>
                  <div>
                    <p class="text-base font-bold text-gray-900">{{ item.title }}</p>
                    <p v-if="item.description" class="mt-1 text-sm leading-6 text-gray-600">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right -->
          <div class="space-y-8">
            <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <div class="mb-4 flex items-center gap-3">
                <div class="h-8 w-1 rounded-full bg-teal-500" />
                <h2 class="text-2xl font-bold text-gray-900">Event Snapshot</h2>
              </div>

              <div class="space-y-5">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Category
                  </p>
                  <p class="mt-1 text-sm font-bold text-gray-800">{{ event.category }}</p>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Audience
                  </p>
                  <p class="mt-1 text-sm font-bold text-gray-800">{{ event.audience }}</p>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">Venue</p>
                  <p class="mt-1 text-sm font-bold text-gray-800">{{ event.location }}</p>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Organised By
                  </p>
                  <p class="mt-1 text-sm font-bold text-gray-800">{{ event.organiser }}</p>
                </div>
              </div>

              <div class="mt-8 space-y-3">
                <RouterLink
                  v-if="event.isUpcoming"
                  :to="`/events/${event.id}/register`"
                  class="inline-flex w-full items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
                >
                  Register for Event
                </RouterLink>

                <RouterLink
                  to="/contact"
                  class="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-teal-300 hover:text-teal-700"
                >
                  Contact Organizer
                </RouterLink>
              </div>
            </div>

            <div
              v-if="event.speakers?.length"
              class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
            >
              <div class="mb-4 flex items-center gap-3">
                <div class="h-8 w-1 rounded-full bg-teal-500" />
                <h2 class="text-2xl font-bold text-gray-900">Speakers</h2>
              </div>

              <div class="space-y-4">
                <div
                  v-for="(speaker, index) in event.speakers"
                  :key="`${speaker.name}-${index}`"
                  class="rounded-2xl border border-gray-100 p-4"
                >
                  <p class="text-sm font-bold text-gray-900">{{ speaker.name }}</p>
                  <p class="mt-1 text-sm text-teal-700">{{ speaker.role }}</p>
                  <p v-if="speaker.bio" class="mt-2 text-sm leading-6 text-gray-600">
                    {{ speaker.bio }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-8 text-white shadow-xl"
            >
              <h3 class="text-2xl font-bold">Interested in similar events?</h3>
              <p class="mt-3 text-sm leading-7 text-teal-100">
                Explore more ecosystem events, startup workshops, investor connects, and founder
                engagement opportunities at IDRP.
              </p>

              <RouterLink
                to="/events"
                class="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 transition-colors hover:bg-teal-50"
              >
                Explore All Events
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
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
