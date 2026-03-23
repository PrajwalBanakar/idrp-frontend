<template>
  <div class="market-connects-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/mentors-hero.jfif"
        alt="Market Connects"
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
          Market Connects
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
            Expand Your Reach. Go Beyond Boundaries.
          </h2>

          <p class="mb-6 text-sm leading-relaxed text-gray-600">
            At IDRP, we help startups evolve from local players to global
            contenders. Our Market Access &amp; Expansion program equips you
            with the insights, connections, and strategic support needed to
            enter new markets, scale effectively, and build a lasting presence,
            across India and beyond.
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

          <p class="mb-2 text-sm leading-relaxed text-gray-600">
            Whether your goal is regional growth or international expansion,
            IDRP provides the platform, network, and expertise to accelerate
            your journey.
          </p>
          <p class="mt-4 text-sm font-semibold text-teal-700">
            Scale with clarity. Grow with intent. Go global with IDRP.
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
              alt="Market Connects at IDRP"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Cards -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            What We Offer
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Our Market Connect Services
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Strategic tools and connections to help you enter, grow, and lead in
            new markets.
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
            Ready to take your startup global?
          </h3>
          <p class="mt-2 text-teal-100">
            Connect with our team and start your market expansion journey today.
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
  'Discover and validate the right markets for expansion',
  'Navigate regional business environments and regulatory frameworks',
  'Forge strategic partnerships with industry leaders, investors, and trade organizations',
  'Develop go-to-market strategies with localization support',
  'Engage in cross-border accelerators, delegations, and global expos',
]

const serviceCards: ServiceCard[] = [
  {
    title: 'Market Discovery & Validation',
    description:
      'Identify the right markets for your product through structured research, competitive analysis, and validation frameworks.',
    emoji: '🔍',
    iconBg: '#7c2d12',
  },
  {
    title: 'Regulatory Navigation',
    description:
      'Get expert guidance on regional regulations, compliance requirements, and business environment nuances before you enter.',
    emoji: '📋',
    iconBg: '#312e81',
  },
  {
    title: 'Strategic Partnerships',
    description:
      'Forge meaningful connections with industry leaders, trade bodies, and investors to accelerate market entry.',
    emoji: '🤝',
    iconBg: '#14532d',
  },
  {
    title: 'Go-to-Market Strategy',
    description:
      'Develop localized GTM strategies tailored to your target market, including positioning, pricing, and distribution.',
    emoji: '🎯',
    iconBg: '#92400e',
  },
  {
    title: 'Global Delegations & Expos',
    description:
      'Participate in cross-border accelerators, trade delegations, and international expos to boost visibility and credibility.',
    emoji: '✈️',
    iconBg: '#7c2d12',
  },
  {
    title: 'Investor & Partner Connects',
    description:
      'Get curated introductions to global investors, strategic partners, and ecosystem players aligned with your vision.',
    emoji: '🌐',
    iconBg: '#312e81',
  },
  {
    title: 'Localization Support',
    description:
      'Adapt your product, messaging, and operations to resonate with local audiences and cultural expectations.',
    emoji: '🗺️',
    iconBg: '#14532d',
  },
  {
    title: 'Ongoing Market Intelligence',
    description:
      'Stay ahead with continuous market insights, trend reports, and competitive landscape updates as you scale.',
    emoji: '📈',
    iconBg: '#92400e',
  },
]
</script>