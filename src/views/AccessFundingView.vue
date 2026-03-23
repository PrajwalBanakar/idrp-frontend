<template>
  <div class="access-funding-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/mentors-hero.jfif"
        alt="Access to Funding"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Services
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Access to Funding
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Approach
          </span>
          <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
            Fueling Growth with the Right Capital and Connections
          </h2>

          <p class="mb-6 text-sm leading-relaxed text-gray-600">
            At IDRP, we understand that funding is not just about money. It's
            about unlocking opportunities. That's why we provide structured,
            startup-friendly access to capital through government-backed seed
            funding, curated investor connections, and specialized
            pitch-readiness programs. Whether you're preparing for your first
            raise or looking to scale with the right investment partner, IDRP
            supports you every step of the way.
          </p>

          <ul class="mb-6 space-y-3">
            <li
              v-for="point in introPoints"
              :key="point"
              class="flex items-start gap-3 text-sm text-gray-600"
            >
              <div
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="white"
                  class="h-3 w-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              {{ point }}
            </li>
          </ul>

          <p class="text-sm leading-relaxed text-gray-600">
            Raising funds is one of the most critical and challenging milestones
            in every startup's journey. At IDRP, we simplify this process by
            guiding founders through every step of the investment journey, from
            understanding valuation and equity structures to connecting with the
            right investors. Our Investment Services are designed to bridge the
            gap between promising startups and strategic investors who believe
            in innovation and impact.
          </p>
        </div>

        <div class="lg:w-1/2">
          <div
            class="h-[420px] overflow-hidden rounded-3xl shadow-2xl"
            :class="{
              'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage,
            }"
          >
            <img
              v-if="showIntroImage"
              src="/incubation-intro.jfif"
              alt="Funding at IDRP"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Service Cards -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            What We Offer
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Our Investment Services
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            End-to-end support to help you raise the right capital at the right
            time.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="card in serviceCards"
            :key="card.title"
            class="relative rounded-2xl bg-teal-500 p-6 pt-10 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div
              class="absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-full text-xl text-white shadow-lg"
              :style="{ backgroundColor: card.iconBg }"
            >
              {{ card.emoji }}
            </div>

            <h4 class="mt-1 mb-3 text-base font-bold leading-snug">
              {{ card.title }}
            </h4>
            <p class="text-sm leading-relaxed text-teal-100">
              {{ card.description }}
            </p>
          </article>
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
            Ready to start your funding journey?
          </h3>
          <p class="mt-2 text-teal-100">
            Talk to our team and take the first step towards your next raise.
          </p>
        </div>

        <div class="flex shrink-0 gap-4">
          <RouterLink
            to="/contact"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
          >
            Talk to Us
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

type ServiceCard = {
  title: string
  description: string
  emoji: string
  iconBg: string
}

const showHeroImage = ref(true)
const showIntroImage = ref(true)

const introPoints: string[] = [
  'Recognized by DST and Startup India for startup support.',
  'Strong track record in investment facilitation (Rs. 7 Cr+ invested, $50 Mn+ enabled).',
  'In-house team for pitch coaching, storytelling, and fundraising strategy.',
  'Investor-ready mentorship and curated connections.',
  'Transparent processes and real outcomes.',
]

const serviceCards: ServiceCard[] = [
  {
    title: 'Get Investor-Ready',
    description:
      'With mentorship and pitch support to help you present your startup with clarity and confidence.',
    emoji: '🎯',
    iconBg: '#7c2d12',
  },
  {
    title: 'Participate in Demo Days',
    description:
      'Get ready for investor meets and curated funding programs that put you in front of the right people.',
    emoji: '🤝',
    iconBg: '#312e81',
  },
  {
    title: 'Navigate Business Readiness Process',
    description:
      'Get due diligence, valuation, and investment processes handled with expert guidance.',
    emoji: '✅',
    iconBg: '#14532d',
  },
  {
    title: 'Valuation & Financial Modeling',
    description:
      'Helping you determine fair value and plan for sustainable growth with the right financial framework.',
    emoji: '📊',
    iconBg: '#92400e',
  },
  {
    title: 'Equity & Debt Structuring',
    description:
      'Building the right capital mix for your stage and strategy to protect founders and attract investors.',
    emoji: '💹',
    iconBg: '#7c2d12',
  },
  {
    title: 'Shareholding Advisory',
    description:
      'Ensuring transparency, compliance, and long-term founder control through smart shareholding structures.',
    emoji: '🏛️',
    iconBg: '#312e81',
  },
  {
    title: 'Investor Connects',
    description:
      'Facilitating introductions to angels, VCs, and institutional investors through curated events and networks.',
    emoji: '🌐',
    iconBg: '#14532d',
  },
  {
    title: 'Funding Support',
    description:
      'From pitch readiness to due diligence, we prepare startups to confidently engage with investors.',
    emoji: '💰',
    iconBg: '#92400e',
  },
]
</script>