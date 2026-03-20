<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/incubation-hero.jfif'" alt="Incubation"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Programs</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Incubation</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Approach</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6 leading-tight">Guiding Startups Towards Growth &amp; Impact</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>At IDRP, we believe early-stage startups need more than just infrastructure. They need structure, mentorship, and the right support to succeed in the market.</p>
            <p>Our incubation programs are designed for founders ready to move beyond idea validation or MVP development. With hands-on guidance, access to experienced mentors, and strong ecosystem connections, we help startups achieve product-market fit, build strong foundations, and prepare for scale.</p>
            <p>Whether you're refining your pitch or shaping your go-to-market strategy, our programs are tailored to support your journey.</p>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
            <img :src="'/incubation-intro.jfif'" alt="Incubation at IDRP"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Value of Incubation ───────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <!-- Left: Content -->
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Why Incubate?</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-8 leading-tight">The Value of Incubation</h2>
          <ul class="space-y-4">
            <li v-for="item in valueItems" :key="item"
              class="flex items-start gap-4 group">
              <div class="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p class="text-gray-700 leading-relaxed text-sm pt-1">{{ item }}</p>
            </li>
          </ul>
        </div>
        <!-- Right: Image -->
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
            <img :src="'/incubation-value.jfif'" alt="Value of Incubation"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Our Incubation Programs ───────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Call for Applications</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Incubation Programs</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Choose the program that fits your stage and ambition.</p>
        </div>

        <!-- Program 1: Resident -->
        <div class="mb-12 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
          <div class="p-8 md:p-10">
            <div class="flex flex-col md:flex-row md:items-start gap-8">
              <!-- Left: Description -->
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">12-18 Months</span>
                  <span class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">On-Site</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Resident Incubation Program</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">Designed for early-stage startups at the idea, PoC, or MVP stage, this program offers a comprehensive support system to help you build, validate, and scale your venture. With access to dedicated infrastructure, expert mentorship, and funding opportunities, founders can focus on turning their ideas into impactful businesses within a collaborative campus environment.</p>
                <router-link to="/apply/resident-incubation"
                  class="inline-block bg-teal-700 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm">
                  Apply Now
                </router-link>
              </div>

              <!-- Right: Accordion details -->
              <div class="md:w-80 flex flex-col gap-3 shrink-0">

                <!-- Eligibility -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="residentOpen.eligibility = !residentOpen.eligibility"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Eligibility
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': residentOpen.eligibility }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="residentOpen.eligibility" class="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                    Early-stage startups at idea, PoC, or MVP stage.
                  </div>
                </div>

                <!-- What it offers -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="residentOpen.offers = !residentOpen.offers"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    What This Program Offers
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': residentOpen.offers }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="residentOpen.offers" class="px-5 pb-4 border-t border-gray-100 pt-3">
                    <ul class="space-y-2">
                      <li v-for="item in residentOffers" :key="item" class="flex items-start gap-2 text-sm text-gray-600">
                        <span class="text-teal-500 mt-0.5 shrink-0">✓</span>{{ item }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Details table -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="residentOpen.details = !residentOpen.details"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Program Details
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': residentOpen.details }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="residentOpen.details" class="border-t border-gray-100">
                    <table class="w-full text-sm">
                      <tbody>
                        <tr class="border-b border-gray-50">
                          <td class="px-5 py-3 font-semibold text-gray-500">Mode</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">On-Site</td>
                        </tr>
                        <tr class="border-b border-gray-50">
                          <td class="px-5 py-3 font-semibold text-gray-500">Duration</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">12-18 Months</td>
                        </tr>
                        <tr>
                          <td class="px-5 py-3 font-semibold text-gray-500">Cohort Size</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">15-20 Startups</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Program 2: Virtual -->
        <div class="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div class="h-1 bg-gradient-to-r from-cyan-400 to-teal-500"></div>
          <div class="p-8 md:p-10">
            <div class="flex flex-col md:flex-row md:items-start gap-8">
              <!-- Left: Description -->
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-cyan-50 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full">6-12 Months</span>
                  <span class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Online</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Virtual Incubation Program</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">Designed for founders who want to leverage IDRP's ecosystem without being physically present, this program offers flexible, remote support to help early-stage startups grow and scale. With access to mentorship, resources, and investor networks, entrepreneurs across India can build, learn, and connect from anywhere.</p>
                <router-link to="/apply/virtual-incubation"
                  class="inline-block bg-teal-700 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm">
                  Apply Now
                </router-link>
              </div>

              <!-- Right: Accordion details -->
              <div class="md:w-80 flex flex-col gap-3 shrink-0">

                <!-- Eligibility -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="virtualOpen.eligibility = !virtualOpen.eligibility"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Eligibility
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': virtualOpen.eligibility }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="virtualOpen.eligibility" class="px-5 pb-4 border-t border-gray-100 pt-3">
                    <p class="text-sm text-gray-600 mb-2">You're eligible if you have:</p>
                    <ul class="space-y-1.5">
                      <li class="flex items-start gap-2 text-sm text-gray-600"><span class="text-teal-500 mt-0.5 shrink-0">✓</span>A registered startup</li>
                      <li class="flex items-start gap-2 text-sm text-gray-600"><span class="text-teal-500 mt-0.5 shrink-0">✓</span>A working MVP, already market-tested with early or pilot customers</li>
                    </ul>
                  </div>
                </div>

                <!-- What it offers -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="virtualOpen.offers = !virtualOpen.offers"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    What This Program Offers
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': virtualOpen.offers }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="virtualOpen.offers" class="px-5 pb-4 border-t border-gray-100 pt-3">
                    <ul class="space-y-2">
                      <li v-for="item in virtualOffers" :key="item" class="flex items-start gap-2 text-sm text-gray-600">
                        <span class="text-teal-500 mt-0.5 shrink-0">✓</span>{{ item }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Details table -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="virtualOpen.details = !virtualOpen.details"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Program Details
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': virtualOpen.details }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="virtualOpen.details" class="border-t border-gray-100">
                    <table class="w-full text-sm">
                      <tbody>
                        <tr class="border-b border-gray-50">
                          <td class="px-5 py-3 font-semibold text-gray-500">Mode</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">Online</td>
                        </tr>
                        <tr class="border-b border-gray-50">
                          <td class="px-5 py-3 font-semibold text-gray-500">Duration</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">6-12 Months</td>
                        </tr>
                        <tr>
                          <td class="px-5 py-3 font-semibold text-gray-500">Cohort Size</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">15-20 Startups</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-gradient-to-r from-teal-700 to-cyan-600">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 class="text-2xl font-bold text-white">Not sure which program is right for you?</h3>
          <p class="text-teal-100 mt-2">Talk to our team and we will help you find the best fit.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <router-link to="/contact" class="bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">Talk to Us</router-link>
        </div>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref } from 'vue'

const residentOpen = ref({ eligibility: false, offers: false, details: false })
const virtualOpen  = ref({ eligibility: false, offers: false, details: false })

const valueItems = [
  'Helps you sharpen your product and build with clear direction',
  'Provides structured, milestone-driven guidance',
  'Connects you with experienced mentors and industry experts',
  'Prepares you for fundraising, partnerships, and scaling',
  'A founder-first community driven by peer learning and expert insights',
]

const residentOffers = [
  'Dedicated workspace at campus',
  'Access to research labs and equipment',
  'Technical mentorship from faculty',
  'Business development support',
  'Seed funding up to Rs.50 lakhs',
  'Industry networking events',
]

const virtualOffers = [
  'Remote mentorship sessions',
  'Access to digital resources',
  'Investor connect programs',
  'Online Startup School',
  'Alumni network access',
  'Grant application support',
]
</script>