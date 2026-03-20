<template>
  <AppLayout>

    <!-- ─── Hero ──────────────────────────────────────────────── -->
    <section class="relative h-[45vh] min-h-[300px] overflow-hidden">
      <img :src="'/hero3.jfif'" alt="Events"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Community</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight">Events</h1>
      </div>
    </section>

    <!-- ─── Upcoming Events ───────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center justify-between mb-10">
          <div>
            <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">What's Next</span>
            <h2 class="text-3xl font-bold text-gray-900 mt-1">Upcoming Events</h2>
          </div>
          <span class="bg-teal-50 text-teal-700 text-xs font-bold px-4 py-2 rounded-full">
            {{ upcomingEvents.length }} Events
          </span>
        </div>

        <div v-if="upcomingEvents.length" class="flex flex-col gap-6">
          <div v-for="event in paginatedUpcoming" :key="event.id"
            class="group flex flex-col sm:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300">

            <!-- Brochure / Image -->
            <div class="sm:w-56 shrink-0 h-48 sm:h-auto relative overflow-hidden bg-gradient-to-br"
              :class="event.fallbackBg">
              <img :src="event.image" :alt="event.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onerror="this.style.display='none'" />
              <!-- Upcoming badge -->
              <span class="absolute top-3 left-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Upcoming
              </span>
            </div>

            <!-- Details -->
            <div class="flex flex-1 flex-col sm:flex-row">
              <!-- Main info -->
              <div class="flex-1 p-6">
                <span class="text-xs font-bold text-teal-600 uppercase tracking-widest">{{ event.category }}</span>
                <h3 class="text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-teal-700 transition-colors">{{ event.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed line-clamp-3">{{ event.description }}</p>
                <div class="mt-4">
                  <a :href="event.registerUrl || '#'"
                    class="inline-block bg-teal-700 text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-teal-800 transition-colors">
                    Register Now
                  </a>
                </div>
              </div>

              <!-- Date / Time / Location sidebar -->
              <div class="sm:w-44 border-t sm:border-t-0 sm:border-l border-gray-100 p-6 flex flex-col gap-4 justify-center shrink-0">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 text-base">📅</div>
                  <div>
                    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Date</p>
                    <p class="text-sm font-bold text-gray-800 mt-0.5">{{ event.date }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 text-base">🕐</div>
                  <div>
                    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Time</p>
                    <p class="text-sm font-bold text-gray-800 mt-0.5">{{ event.time }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-teal-600 text-base">📍</div>
                  <div>
                    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Location</p>
                    <p class="text-sm font-bold text-gray-800 mt-0.5">{{ event.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-4">📅</p>
          <p class="font-semibold text-gray-500">No upcoming events right now. Check back soon!</p>
        </div>

        <!-- Pagination: Upcoming -->
        <div v-if="upcomingTotalPages > 1" class="flex justify-center gap-2 mt-8">
          <button @click="upcomingPage--" :disabled="upcomingPage === 1"
            class="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-teal-400 hover:text-teal-600 disabled:opacity-30 transition-colors">
            Previous
          </button>
          <button v-for="p in upcomingTotalPages" :key="p" @click="upcomingPage = p"
            class="w-10 h-10 rounded-xl border text-sm font-bold transition-colors"
            :class="upcomingPage === p ? 'bg-teal-700 text-white border-teal-700' : 'border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600'">
            {{ p }}
          </button>
          <button @click="upcomingPage++" :disabled="upcomingPage === upcomingTotalPages"
            class="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-teal-400 hover:text-teal-600 disabled:opacity-30 transition-colors">
            Next
          </button>
        </div>

      </div>
    </section>

    <!-- ─── Past Events ───────────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center justify-between mb-10">
          <div>
            <span class="text-gray-400 font-semibold text-sm uppercase tracking-widest">Archive</span>
            <h2 class="text-3xl font-bold text-gray-900 mt-1">Past Events</h2>
          </div>
          <span class="bg-gray-100 text-gray-600 text-xs font-bold px-4 py-2 rounded-full">
            {{ pastEvents.length }} Events
          </span>
        </div>

        <div class="flex flex-col gap-5">
          <div v-for="event in paginatedPast" :key="event.id"
            class="group flex flex-col sm:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 opacity-90 hover:opacity-100">

            <!-- Brochure -->
            <div class="sm:w-56 shrink-0 h-44 sm:h-auto relative overflow-hidden bg-gradient-to-br"
              :class="event.fallbackBg">
              <img :src="event.image" :alt="event.title"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                onerror="this.style.display='none'" />
              <span class="absolute top-3 left-3 bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Past
              </span>
            </div>

            <!-- Details -->
            <div class="flex flex-1 flex-col sm:flex-row">
              <div class="flex-1 p-6">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ event.category }}</span>
                <h3 class="text-lg font-bold text-gray-700 mt-1 mb-2 group-hover:text-teal-700 transition-colors">{{ event.title }}</h3>
                <p class="text-gray-400 text-sm leading-relaxed line-clamp-2">{{ event.description }}</p>
              </div>
              <div class="sm:w-44 border-t sm:border-t-0 sm:border-l border-gray-100 p-6 flex flex-col gap-4 justify-center shrink-0">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-gray-400 text-base">📅</div>
                  <div>
                    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Date</p>
                    <p class="text-sm font-bold text-gray-600 mt-0.5">{{ event.date }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-gray-400 text-base">📍</div>
                  <div>
                    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Location</p>
                    <p class="text-sm font-bold text-gray-600 mt-0.5">{{ event.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination: Past -->
        <div v-if="pastTotalPages > 1" class="flex justify-center gap-2 mt-8">
          <button @click="pastPage--" :disabled="pastPage === 1"
            class="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-teal-400 hover:text-teal-600 disabled:opacity-30 transition-colors">
            Previous
          </button>
          <button v-for="p in pastTotalPages" :key="p" @click="pastPage = p"
            class="w-10 h-10 rounded-xl border text-sm font-bold transition-colors"
            :class="pastPage === p ? 'bg-gray-700 text-white border-gray-700' : 'border-gray-200 text-gray-600 hover:border-gray-400'">
            {{ p }}
          </button>
          <button @click="pastPage++" :disabled="pastPage === pastTotalPages"
            class="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-teal-400 hover:text-teal-600 disabled:opacity-30 transition-colors">
            Next
          </button>
        </div>

      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-gradient-to-r from-teal-700 to-cyan-600">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 class="text-2xl font-bold text-white">Want to host an event at IDRP?</h3>
          <p class="text-teal-100 mt-2">Reach out to us about our event spaces and auditorium.</p>
        </div>
        <router-link to="/contact" class="shrink-0 bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">
          Contact Us
        </router-link>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref, computed } from 'vue'

const PER_PAGE = 4

// ── Upcoming Events ────────────────────────────────────────────
const upcomingPage = ref(1)
const upcomingEvents = [
  {
    id: 1,
    title: 'Deep-Tech Demo Day – Cohort 12',
    category: 'Demo Day',
    description: 'Watch the latest cohort of IDRP startups pitch their innovations to a curated audience of investors, corporate partners, and ecosystem leaders.',
    date: 'April 18, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    image: '/event-demoday.jfif',
    fallbackBg: 'from-teal-600 to-cyan-500',
    registerUrl: '#',
  },
  {
    id: 2,
    title: 'Startup Masterclass: Fundraising & Valuation',
    category: 'Masterclass',
    description: 'A focused session with leading investors and CFOs on how to prepare for your Series A, structure your equity, and navigate the fundraising process.',
    date: 'April 25, 2026',
    time: '2:00 PM – 5:00 PM',
    location: 'IDRP Board Room, Dharwad',
    image: '/event-masterclass.jfif',
    fallbackBg: 'from-blue-600 to-indigo-500',
    registerUrl: '#',
  },
  {
    id: 3,
    title: 'Founders Mixer – Q2 2026',
    category: 'Networking',
    description: 'An evening of curated networking for founders, mentors, and investors across the IDRP ecosystem. Build new connections and strengthen existing ones.',
    date: 'May 8, 2026',
    time: '6:00 PM – 9:00 PM',
    location: 'IDRP Campus, Dharwad',
    image: '/event-mixer.jfif',
    fallbackBg: 'from-violet-600 to-purple-500',
    registerUrl: '#',
  },
  {
    id: 4,
    title: 'IP & Legal Clinic for Startups',
    category: 'Workshop',
    description: 'Get your startup IP strategy right. Expert IP attorneys will guide you through patents, trademarks, and legal structures in a one-on-one clinic format.',
    date: 'May 15, 2026',
    time: '10:00 AM – 12:00 PM',
    location: 'Online (Zoom)',
    image: '/event-ipclinic.jfif',
    fallbackBg: 'from-orange-500 to-amber-400',
    registerUrl: '#',
  },
  {
    id: 5,
    title: 'GTM Strategy Bootcamp',
    category: 'Bootcamp',
    description: 'A hands-on full-day bootcamp on building your go-to-market strategy, targeting the right customer segments, and driving early traction.',
    date: 'May 22, 2026',
    time: '9:00 AM – 5:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    image: '/event-gtm.jfif',
    fallbackBg: 'from-rose-600 to-pink-500',
    registerUrl: '#',
  },
]

const upcomingTotalPages = computed(() => Math.ceil(upcomingEvents.length / PER_PAGE))
const paginatedUpcoming = computed(() => {
  const start = (upcomingPage.value - 1) * PER_PAGE
  return upcomingEvents.slice(start, start + PER_PAGE)
})

// ── Past Events ────────────────────────────────────────────────
const pastPage = ref(1)
const pastEvents = [
  {
    id: 101,
    title: 'IDRP Annual Startup Showcase 2025',
    category: 'Showcase',
    description: 'Over 40 startups presented their innovations to 200+ attendees including investors, corporates, and government representatives.',
    date: 'December 10, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-showcase25.jfif',
    fallbackBg: 'from-gray-400 to-gray-500',
  },
  {
    id: 102,
    title: 'Women in Tech & Entrepreneurship Summit',
    category: 'Summit',
    description: 'A day-long summit celebrating women founders and changemakers, featuring keynotes, panels, and networking across Karnataka.',
    date: 'November 18, 2025',
    location: 'IDRP Auditorium, Dharwad',
    image: '/event-womenintech.jfif',
    fallbackBg: 'from-purple-400 to-fuchsia-400',
  },
  {
    id: 103,
    title: 'Investor Connect Night – Q3 2025',
    category: 'Networking',
    description: 'An exclusive evening connecting 25 curated startups with 15 angel investors and seed fund representatives.',
    date: 'September 5, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-investornight.jfif',
    fallbackBg: 'from-teal-400 to-cyan-400',
  },
  {
    id: 104,
    title: 'Startup School Graduation – Batch 8',
    category: 'Graduation',
    description: 'Batch 8 of IDRP Startup School graduates, celebrating their milestones with mentors, families, and ecosystem leaders.',
    date: 'August 20, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-graduation.jfif',
    fallbackBg: 'from-amber-400 to-orange-400',
  },
  {
    id: 105,
    title: 'Deep-Tech Hackathon 2025',
    category: 'Hackathon',
    description: '48-hour hackathon with 120+ participants across AI, IoT, and Blockchain tracks. Winning teams received seed grants and incubation offers.',
    date: 'July 12, 2025',
    location: 'IDRP Campus, Dharwad',
    image: '/event-hackathon.jfif',
    fallbackBg: 'from-blue-400 to-indigo-400',
  },
  {
    id: 106,
    title: 'KDEM Innovation Day 2025',
    category: 'Conference',
    description: 'IDRP participated in the Karnataka Digital Economy Mission innovation showcase, representing 12 deep-tech startups.',
    date: 'June 3, 2025',
    location: 'Bengaluru, Karnataka',
    image: '/event-kdem.jfif',
    fallbackBg: 'from-green-400 to-teal-400',
  },
]

const pastTotalPages = computed(() => Math.ceil(pastEvents.length / PER_PAGE))
const paginatedPast = computed(() => {
  const start = (pastPage.value - 1) * PER_PAGE
  return pastEvents.slice(start, start + PER_PAGE)
})
</script>