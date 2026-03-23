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
        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Events
        </h1>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="bg-white px-6 py-16 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 flex items-center justify-between">
          <div>
            <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
              What's Next
            </span>
            <h2 class="mt-1 text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <span class="rounded-full bg-teal-50 px-4 py-2 text-xs font-bold text-teal-700">
            {{ upcomingEvents.length }} Events
          </span>
        </div>

        <div
          v-if="upcomingEvents.length"
          class="flex flex-col gap-6"
        >
          <article
            v-for="event in paginatedUpcoming"
            :key="event.id"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-teal-200 hover:shadow-xl sm:flex-row"
          >
            <!-- Brochure / Image -->
            <div
              class="relative h-48 shrink-0 overflow-hidden bg-gradient-to-br sm:h-auto sm:w-56"
              :class="event.fallbackBg"
            >
              <img
                v-if="event.visible"
                :src="event.image"
                :alt="event.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                @error="event.visible = false"
              />
              <span class="absolute top-3 left-3 rounded-full bg-teal-600 px-3 py-1 text-xs font-bold text-white">
                Upcoming
              </span>
            </div>

            <!-- Details -->
            <div class="flex flex-1 flex-col sm:flex-row">
              <div class="flex-1 p-6">
                <span class="text-xs font-bold uppercase tracking-widest text-teal-600">
                  {{ event.category }}
                </span>
                <h3 class="mt-1 mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-teal-700">
                  {{ event.title }}
                </h3>
                <p class="line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {{ event.description }}
                </p>
                <div class="mt-4">
                  <a
                    :href="event.registerUrl || '#'"
                    class="inline-block rounded-full bg-teal-700 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-800"
                  >
                    Register Now
                  </a>
                </div>
              </div>

              <div class="flex shrink-0 flex-col justify-center gap-4 border-t border-gray-100 p-6 sm:w-44 sm:border-t-0 sm:border-l">
                <div class="flex items-start gap-3">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-base text-teal-600">
                    📅
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Date</p>
                    <p class="mt-0.5 text-sm font-bold text-gray-800">{{ event.date }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-base text-teal-600">
                    🕐
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Time</p>
                    <p class="mt-0.5 text-sm font-bold text-gray-800">{{ event.time }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-base text-teal-600">
                    📍
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Location</p>
                    <p class="mt-0.5 text-sm font-bold text-gray-800">{{ event.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div
          v-else
          class="py-16 text-center text-gray-400"
        >
          <p class="mb-4 text-4xl">📅</p>
          <p class="font-semibold text-gray-500">
            No upcoming events right now. Check back soon!
          </p>
        </div>

        <!-- Pagination: Upcoming -->
        <div
          v-if="upcomingTotalPages > 1"
          class="mt-8 flex justify-center gap-2"
        >
          <button
            type="button"
            :disabled="upcomingPage === 1"
            class="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-teal-400 hover:text-teal-600 disabled:opacity-30"
            @click="upcomingPage--"
          >
            Previous
          </button>

          <button
            v-for="page in upcomingTotalPages"
            :key="page"
            type="button"
            class="h-10 w-10 rounded-xl border text-sm font-bold transition-colors"
            :class="
              upcomingPage === page
                ? 'border-teal-700 bg-teal-700 text-white'
                : 'border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600'
            "
            @click="upcomingPage = page"
          >
            {{ page }}
          </button>

          <button
            type="button"
            :disabled="upcomingPage === upcomingTotalPages"
            class="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-teal-400 hover:text-teal-600 disabled:opacity-30"
            @click="upcomingPage++"
          >
            Next
          </button>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section class="bg-gray-50 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 flex items-center justify-between">
          <div>
            <span class="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Archive
            </span>
            <h2 class="mt-1 text-3xl font-bold text-gray-900">Past Events</h2>
          </div>
          <span class="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-600">
            {{ pastEvents.length }} Events
          </span>
        </div>

        <div class="flex flex-col gap-5">
          <article
            v-for="event in paginatedPast"
            :key="event.id"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white opacity-90 transition-all duration-300 hover:opacity-100 hover:shadow-md sm:flex-row"
          >
            <div
              class="relative h-44 shrink-0 overflow-hidden bg-gradient-to-br sm:h-auto sm:w-56"
              :class="event.fallbackBg"
            >
              <img
                v-if="event.visible"
                :src="event.image"
                :alt="event.title"
                class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                @error="event.visible = false"
              />
              <span class="absolute top-3 left-3 rounded-full bg-gray-500 px-3 py-1 text-xs font-bold text-white">
                Past
              </span>
            </div>

            <div class="flex flex-1 flex-col sm:flex-row">
              <div class="flex-1 p-6">
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {{ event.category }}
                </span>
                <h3 class="mt-1 mb-2 text-lg font-bold text-gray-700 transition-colors group-hover:text-teal-700">
                  {{ event.title }}
                </h3>
                <p class="line-clamp-2 text-sm leading-relaxed text-gray-400">
                  {{ event.description }}
                </p>
              </div>

              <div class="flex shrink-0 flex-col justify-center gap-4 border-t border-gray-100 p-6 sm:w-44 sm:border-t-0 sm:border-l">
                <div class="flex items-start gap-3">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-base text-gray-400">
                    📅
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Date</p>
                    <p class="mt-0.5 text-sm font-bold text-gray-600">{{ event.date }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-base text-gray-400">
                    📍
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Location</p>
                    <p class="mt-0.5 text-sm font-bold text-gray-600">{{ event.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination: Past -->
        <div
          v-if="pastTotalPages > 1"
          class="mt-8 flex justify-center gap-2"
        >
          <button
            type="button"
            :disabled="pastPage === 1"
            class="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-teal-400 hover:text-teal-600 disabled:opacity-30"
            @click="pastPage--"
          >
            Previous
          </button>

          <button
            v-for="page in pastTotalPages"
            :key="page"
            type="button"
            class="h-10 w-10 rounded-xl border text-sm font-bold transition-colors"
            :class="
              pastPage === page
                ? 'border-gray-700 bg-gray-700 text-white'
                : 'border-gray-200 text-gray-600 hover:border-gray-400'
            "
            @click="pastPage = page"
          >
            {{ page }}
          </button>

          <button
            type="button"
            :disabled="pastPage === pastTotalPages"
            class="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-teal-400 hover:text-teal-600 disabled:opacity-30"
            @click="pastPage++"
          >
            Next
          </button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 class="text-2xl font-bold text-white">
            Want to host an event at IDRP?
          </h3>
          <p class="mt-2 text-teal-100">
            Reach out to us about our event spaces and auditorium.
          </p>
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
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

type BaseEvent = {
  id: number
  title: string
  category: string
  description: string
  date: string
  location: string
  image: string
  fallbackBg: string
  visible: boolean
}

type UpcomingEvent = BaseEvent & {
  time: string
  registerUrl?: string
}

type PastEvent = BaseEvent

const PER_PAGE = 4

const showHeroImage = ref(true)

// Upcoming Events
const upcomingPage = ref(1)

const upcomingEvents = reactive<UpcomingEvent[]>([
  {
    id: 1,
    title: 'Deep-Tech Demo Day – Cohort 12',
    category: 'Demo Day',
    description:
      'Watch the latest cohort of IDRP startups pitch their innovations to a curated audience of investors, corporate partners, and ecosystem leaders.',
    date: 'April 18, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    image: '/event-demoday.jfif',
    fallbackBg: 'from-teal-600 to-cyan-500',
    registerUrl: '#',
    visible: true,
  },
  {
    id: 2,
    title: 'Startup Masterclass: Fundraising & Valuation',
    category: 'Masterclass',
    description:
      'A focused session with leading investors and CFOs on how to prepare for your Series A, structure your equity, and navigate the fundraising process.',
    date: 'April 25, 2026',
    time: '2:00 PM – 5:00 PM',
    location: 'IDRP Board Room, Dharwad',
    image: '/event-masterclass.jfif',
    fallbackBg: 'from-blue-600 to-indigo-500',
    registerUrl: '#',
    visible: true,
  },
  {
    id: 3,
    title: 'Founders Mixer – Q2 2026',
    category: 'Networking',
    description:
      'An evening of curated networking for founders, mentors, and investors across the IDRP ecosystem. Build new connections and strengthen existing ones.',
    date: 'May 8, 2026',
    time: '6:00 PM – 9:00 PM',
    location: 'IDRP Campus, Dharwad',
    image: '/event-mixer.jfif',
    fallbackBg: 'from-violet-600 to-purple-500',
    registerUrl: '#',
    visible: true,
  },
  {
    id: 4,
    title: 'IP & Legal Clinic for Startups',
    category: 'Workshop',
    description:
      'Get your startup IP strategy right. Expert IP attorneys will guide you through patents, trademarks, and legal structures in a one-on-one clinic format.',
    date: 'May 15, 2026',
    time: '10:00 AM – 12:00 PM',
    location: 'Online (Zoom)',
    image: '/event-ipclinic.jfif',
    fallbackBg: 'from-orange-500 to-amber-400',
    registerUrl: '#',
    visible: true,
  },
  {
    id: 5,
    title: 'GTM Strategy Bootcamp',
    category: 'Bootcamp',
    description:
      'A hands-on full-day bootcamp on building your go-to-market strategy, targeting the right customer segments, and driving early traction.',
    date: 'May 22, 2026',
    time: '9:00 AM – 5:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    image: '/event-gtm.jfif',
    fallbackBg: 'from-rose-600 to-pink-500',
    registerUrl: '#',
    visible: true,
  },
])

const upcomingTotalPages = computed(() =>
  Math.ceil(upcomingEvents.length / PER_PAGE),
)

const paginatedUpcoming = computed(() => {
  const start = (upcomingPage.value - 1) * PER_PAGE
  return upcomingEvents.slice(start, start + PER_PAGE)
})

// Past Events
const pastPage = ref(1)

const pastEvents = reactive<PastEvent[]>([
  {
    id: 101,
    title: 'IDRP Annual Startup Showcase 2025',
    category: 'Showcase',
    description:
      'Over 40 startups presented their innovations to 200+ attendees including investors, corporates, and government representatives.',
    date: 'December 10, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-showcase25.jfif',
    fallbackBg: 'from-gray-400 to-gray-500',
    visible: true,
  },
  {
    id: 102,
    title: 'Women in Tech & Entrepreneurship Summit',
    category: 'Summit',
    description:
      'A day-long summit celebrating women founders and changemakers, featuring keynotes, panels, and networking across Karnataka.',
    date: 'November 18, 2025',
    location: 'IDRP Auditorium, Dharwad',
    image: '/event-womenintech.jfif',
    fallbackBg: 'from-purple-400 to-fuchsia-400',
    visible: true,
  },
  {
    id: 103,
    title: 'Investor Connect Night – Q3 2025',
    category: 'Networking',
    description:
      'An exclusive evening connecting 25 curated startups with 15 angel investors and seed fund representatives.',
    date: 'September 5, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-investornight.jfif',
    fallbackBg: 'from-teal-400 to-cyan-400',
    visible: true,
  },
  {
    id: 104,
    title: 'Startup School Graduation – Batch 8',
    category: 'Graduation',
    description:
      'Batch 8 of IDRP Startup School graduates, celebrating their milestones with mentors, families, and ecosystem leaders.',
    date: 'August 20, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-graduation.jfif',
    fallbackBg: 'from-amber-400 to-orange-400',
    visible: true,
  },
  {
    id: 105,
    title: 'Deep-Tech Hackathon 2025',
    category: 'Hackathon',
    description:
      '48-hour hackathon with 120+ participants across AI, IoT, and Blockchain tracks. Winning teams received seed grants and incubation offers.',
    date: 'July 12, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-hackathon.jfif',
    fallbackBg: 'from-blue-400 to-indigo-400',
    visible: true,
  },
  {
    id: 106,
    title: 'KDEM Innovation Day 2025',
    category: 'Conference',
    description:
      'IDRP participated in the Karnataka Digital Economy Mission innovation showcase, representing 12 deep-tech startups.',
    date: 'June 3, 2025',
    location: 'Bengaluru, Karnataka',
    image: '/event-kdem.jfif',
    fallbackBg: 'from-green-400 to-teal-400',
    visible: true,
  },
])

const pastTotalPages = computed(() =>
  Math.ceil(pastEvents.length / PER_PAGE),
)

const paginatedPast = computed(() => {
  const start = (pastPage.value - 1) * PER_PAGE
  return pastEvents.slice(start, start + PER_PAGE)
})
</script>