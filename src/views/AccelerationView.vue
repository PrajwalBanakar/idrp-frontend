<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/incubation-hero.jfif'" alt="Acceleration"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Programs</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Acceleration</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Approach</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6 leading-tight">Scale with Speed. Grow with Strategy.</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>Once your product is validated and gaining traction, the next step is accelerating growth. IDRP Acceleration Programs are tailored to help startups at this stage expand operations, refine their strategies, and build meaningful connections with investors, partners, and target markets.</p>
            <p>Whether you're gearing up for your next funding round, entering new markets, or strengthening your internal systems, our programs provide the resources, mentorship, and visibility needed to scale with clarity and confidence.</p>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
            <img :src="'/incubation-intro.jfif'" alt="Acceleration at IDRP"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Value of Acceleration ─────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Why Accelerate?</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-8 leading-tight">The Value of Acceleration</h2>
          <ul class="space-y-4">
            <li v-for="item in valueItems" :key="item" class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p class="text-gray-700 leading-relaxed text-sm pt-1">{{ item }}</p>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
            <img :src="'/incubation-value.jfif'" alt="Value of Acceleration"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Our Acceleration Programs ────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Call for Applications</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Acceleration Programs</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Built for startups ready to move fast and scale smart.</p>
        </div>

        <!-- Deep-Tech Accelerator -->
        <div class="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
          <div class="p-8 md:p-10">
            <div class="flex flex-col md:flex-row md:items-start gap-8">

              <!-- Left: Description -->
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">6 Months Intensive</span>
                  <span class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">On-Site</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Deep-Tech Accelerator</h3>
                <div class="space-y-3 text-gray-600 text-sm leading-relaxed mb-6">
                  <p>A fast-track program designed for startups with validated, cutting-edge technology that are ready to enter and compete in the market. The Deep-Tech Accelerator focuses on bridging the gap between innovation and commercialization by helping founders refine their go-to-market (GTM) strategies, validate product-market fit, and build a strong foundation for scalable growth.</p>
                  <p>Through intensive workshops, hands-on mentorship, and direct access to industry and investor networks, startups gain the clarity and traction needed to move from product readiness to market success. The program also emphasizes Series A preparedness, equipping founders with the tools, insights, and confidence required to raise their next round.</p>
                  <p>Participants benefit from structured GTM sessions, pilot project opportunities with corporates, investor pitch platforms, and continuous guidance to align their technology with real-world demand and growth opportunities.</p>
                </div>
                <router-link to="/apply/deep-tech-accelerator"
                  class="inline-block bg-teal-700 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm">
                  Apply Now
                </router-link>
              </div>

              <!-- Right: Accordion -->
              <div class="md:w-80 flex flex-col gap-3 shrink-0">

                <!-- Eligibility -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="accelOpen.eligibility = !accelOpen.eligibility"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Eligibility
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': accelOpen.eligibility }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="accelOpen.eligibility" class="px-5 pb-4 border-t border-gray-100 pt-3">
                    <ul class="space-y-2">
                      <li class="flex items-start gap-2 text-sm text-gray-600">
                        <span class="text-teal-500 mt-0.5 shrink-0">✓</span>
                        Early-stage startups in the focused sectors with a market-ready MVP and the ambition to scale.
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- What it offers -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="accelOpen.offers = !accelOpen.offers"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    What This Program Offers
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': accelOpen.offers }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="accelOpen.offers" class="px-5 pb-4 border-t border-gray-100 pt-3">
                    <ul class="space-y-2">
                      <li v-for="item in accelOffers" :key="item" class="flex items-start gap-2 text-sm text-gray-600">
                        <span class="text-teal-500 mt-0.5 shrink-0">✓</span>{{ item }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Details table -->
                <div class="border border-gray-100 rounded-2xl overflow-hidden">
                  <button @click="accelOpen.details = !accelOpen.details"
                    class="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                    Program Details
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': accelOpen.details }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="accelOpen.details" class="border-t border-gray-100">
                    <table class="w-full text-sm">
                      <tbody>
                        <tr class="border-b border-gray-50">
                          <td class="px-5 py-3 font-semibold text-gray-500">Mode</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">On-Site</td>
                        </tr>
                        <tr class="border-b border-gray-50">
                          <td class="px-5 py-3 font-semibold text-gray-500">Duration</td>
                          <td class="px-5 py-3 text-gray-800 font-medium">6 Months Intensive</td>
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
          <h3 class="text-2xl font-bold text-white">Ready to accelerate your startup?</h3>
          <p class="text-teal-100 mt-2">Apply today or talk to our team to learn more about the program.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <router-link to="/apply/deep-tech-accelerator" class="bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">Apply Now</router-link>
          <router-link to="/contact" class="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition-colors text-sm">Talk to Us</router-link>
        </div>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref } from 'vue'

const accelOpen = ref({ eligibility: false, offers: false, details: false })

const valueItems = [
  'Focus on fundraising, customer acquisition, and building scalable operations',
  'Guidance from experienced founders, investors, and domain experts',
  'Access to investor networks, pitch opportunities, and demo day showcases',
  'Support in developing scale-up strategies, refining pitch decks, and enhancing storytelling',
  'Assistance with grants, ecosystem connections, and ongoing alumni support',
]

const accelOffers = [
  'Intensive GTM workshops',
  'Pilot project facilitation',
  'Corporate partnership opportunities',
  'Investor pitch sessions',
  'Product-market fit validation',
  'Series A readiness training',
]
</script>