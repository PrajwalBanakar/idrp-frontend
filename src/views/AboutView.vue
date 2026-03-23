<template>
  <div class="about-view">
    <!-- Hero Banner -->
    <section class="relative h-[55vh] min-h-[380px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/about-hero.jfif"
        alt="About IDRP"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/75 to-teal-700/20" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Who We Are
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          About IDRP
        </h1>
        <p class="max-w-lg text-lg leading-relaxed text-teal-100">
          A pioneering deep-tech incubator at the heart of IIIT Dharwad, built
          to transform ideas into ventures that matter.
        </p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Story
          </span>
          <h2 class="mt-3 mb-6 text-4xl font-bold leading-tight text-gray-900">
            Bridging Research and Real-World Impact
          </h2>

          <div class="space-y-4 leading-relaxed text-gray-600">
            <p>
              IIIT Dharwad Research Park (IDRP) was established with a singular
              purpose — to close the gap between cutting-edge academic research
              and real-world innovation. Situated within the IIIT Dharwad campus,
              we are more than an incubator; we are a living laboratory where
              ideas are stress-tested, refined, and scaled.
            </p>
            <p>
              Since our inception, IDRP has been home to over 150 startups
              working across deep-tech domains including Artificial Intelligence,
              Computer Vision, Extended Reality, Blockchain, Space Tech, and more.
            </p>
            <p>
              We serve founders at every stage: from those still in the ideation
              phase, through teams with proven prototypes, to growth-stage
              companies preparing to scale nationally and internationally.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-8">
            <div v-for="stat in introStats" :key="stat.label">
              <p class="text-3xl font-extrabold text-teal-700">{{ stat.value }}</p>
              <p class="mt-1 text-sm text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div
            class="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl"
            :class="{
              'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage,
            }"
          >
            <img
              v-if="showIntroImage"
              src="/about-intro.jfif"
              alt="IDRP Campus"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
            <div class="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-3xl bg-teal-600/20" />
          </div>

          <div
            class="mt-4 ml-4 inline-flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-3"
          >
            <div class="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
            <p class="text-sm font-semibold text-teal-700">
              Actively accepting applications
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision + Pillars -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-start gap-16 lg:flex-row">
        <div class="flex flex-col gap-10 lg:w-1/2">
          <article
            v-for="item in missionVision"
            :key="item.title"
            class="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          >
            <div
              class="absolute top-0 left-0 h-full w-1 rounded-l-2xl bg-gradient-to-b"
              :class="item.barClass"
            />
            <div class="pl-4">
              <div class="mb-4 flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-lg text-teal-600"
                >
                  {{ item.icon }}
                </div>
                <h3 class="text-xl font-bold text-gray-900">{{ item.title }}</h3>
              </div>
              <p class="text-sm leading-relaxed text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>

        <div class="flex flex-col gap-6 lg:w-1/2">
          <div class="mb-2">
            <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Our Pillars
            </span>
            <h2 class="mt-2 text-3xl font-bold text-gray-900">
              What drives us forward
            </h2>
          </div>

          <article
            v-for="pillar in pillars"
            :key="pillar.title"
            class="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-teal-200 hover:shadow-lg"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
              :class="pillar.bgClass"
            >
              {{ pillar.icon }}
            </div>
            <div>
              <h4 class="mb-1 text-lg font-bold text-gray-900">{{ pillar.title }}</h4>
              <p class="text-sm leading-relaxed text-gray-500">
                {{ pillar.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="overflow-hidden bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Journey
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            From Vision to Impact
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Over a decade of building, learning, and growing alongside the
            startups that trusted us.
          </p>
        </div>

        <div class="relative">
          <div
            class="absolute top-4 bottom-4 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-600 md:block"
          />

          <div
            v-for="(event, index) in timeline"
            :key="`${event.year}-${event.tag}`"
            class="relative mb-10 flex items-stretch last:mb-0"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <div
              class="w-full md:w-[46%]"
              :class="index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'"
            >
              <article
                class="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-teal-200 hover:shadow-2xl"
              >
                <div
                  class="absolute top-0 left-0 h-full w-1 rounded-l-2xl"
                  :style="{ background: event.color }"
                />
                <div class="pl-3">
                  <span
                    class="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    :style="{ backgroundColor: event.color }"
                  >
                    {{ event.year }}
                  </span>
                  <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {{ event.tag }}
                  </p>
                  <p class="text-sm font-medium leading-relaxed text-gray-700">
                    {{ event.milestone }}
                  </p>
                </div>
              </article>
            </div>

            <div class="hidden w-[8%] flex-col items-center justify-center md:flex">
              <div
                class="z-10 h-5 w-5 rounded-full ring-4 ring-white shadow-md transition-transform duration-300 hover:scale-125"
                :style="{ backgroundColor: event.color }"
              />
            </div>

            <div class="hidden w-[46%] md:block" />
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Offerings
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">What We Offer</h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            A comprehensive ecosystem of services designed to take you from idea
            to impact.
          </p>
        </div>

        <div class="flex flex-col items-center gap-12 lg:flex-row">
          <div class="flex w-full justify-center lg:w-1/2">
            <svg
              viewBox="0 0 500 500"
              class="w-full max-w-[480px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="dropshadow">
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="4"
                    flood-color="#00000025"
                  />
                </filter>
              </defs>

              <path d="M250,250 L250,60 A190,190 0 0,1 414.6,145 Z" fill="#0d9488" opacity="0.93" />
              <path d="M250,250 L414.6,145 A190,190 0 0,1 414.6,355 Z" fill="#dc2626" opacity="0.93" />
              <path d="M250,250 L414.6,355 A190,190 0 0,1 250,440 Z" fill="#ea580c" opacity="0.93" />
              <path d="M250,250 L250,440 A190,190 0 0,1 85.4,355 Z" fill="#2563eb" opacity="0.93" />
              <path d="M250,250 L85.4,355 A190,190 0 0,1 85.4,145 Z" fill="#16a34a" opacity="0.93" />
              <path d="M250,250 L85.4,145 A190,190 0 0,1 250,60 Z" fill="#0891b2" opacity="0.93" />

              <line x1="250" y1="250" x2="250" y2="55" stroke="white" stroke-width="3.5" />
              <line x1="250" y1="250" x2="420" y2="138" stroke="white" stroke-width="3.5" />
              <line x1="250" y1="250" x2="420" y2="362" stroke="white" stroke-width="3.5" />
              <line x1="250" y1="250" x2="250" y2="445" stroke="white" stroke-width="3.5" />
              <line x1="250" y1="250" x2="80" y2="362" stroke="white" stroke-width="3.5" />
              <line x1="250" y1="250" x2="80" y2="138" stroke="white" stroke-width="3.5" />

              <circle cx="250" cy="250" r="100" fill="white" filter="url(#dropshadow)" />
              <circle cx="250" cy="250" r="100" fill="none" stroke="#e2e8f0" stroke-width="1.5" />

              <text
                x="250"
                y="244"
                text-anchor="middle"
                font-size="16"
                font-weight="800"
                fill="#0f766e"
                font-family="system-ui,sans-serif"
              >
                IDRP
              </text>
              <text
                x="250"
                y="262"
                text-anchor="middle"
                font-size="9"
                fill="#94a3b8"
                font-family="system-ui,sans-serif"
              >
                Nurturing Ventures
              </text>

              <circle cx="359" cy="61" r="30" fill="white" stroke="#0d9488" stroke-width="2.5" filter="url(#dropshadow)" />
              <text x="359" y="72" text-anchor="middle" font-size="22">👥</text>

              <circle cx="468" cy="250" r="30" fill="white" stroke="#dc2626" stroke-width="2.5" filter="url(#dropshadow)" />
              <text x="468" y="261" text-anchor="middle" font-size="22">🎓</text>

              <circle cx="359" cy="439" r="30" fill="white" stroke="#ea580c" stroke-width="2.5" filter="url(#dropshadow)" />
              <text x="359" y="450" text-anchor="middle" font-size="22">🏢</text>

              <circle cx="141" cy="439" r="30" fill="white" stroke="#2563eb" stroke-width="2.5" filter="url(#dropshadow)" />
              <text x="141" y="450" text-anchor="middle" font-size="22">🌐</text>

              <circle cx="32" cy="250" r="30" fill="white" stroke="#16a34a" stroke-width="2.5" filter="url(#dropshadow)" />
              <text x="32" y="261" text-anchor="middle" font-size="22">💰</text>

              <circle cx="141" cy="61" r="30" fill="white" stroke="#0891b2" stroke-width="2.5" filter="url(#dropshadow)" />
              <text x="141" y="72" text-anchor="middle" font-size="22">🤝</text>

              <line x1="333" y1="76" x2="308" y2="108" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55" />
              <line x1="438" y1="250" x2="440" y2="250" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55" />
              <line x1="333" y1="424" x2="308" y2="392" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55" />
              <line x1="167" y1="424" x2="192" y2="392" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55" />
              <line x1="62" y1="250" x2="60" y2="250" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55" />
              <line x1="167" y1="76" x2="192" y2="108" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55" />

              <text x="383" y="42" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0d9488" font-family="system-ui,sans-serif">Cohort</text>
              <text x="483" y="230" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626" font-family="system-ui,sans-serif">Mentoring +</text>
              <text x="483" y="244" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626" font-family="system-ui,sans-serif">Masterclass</text>
              <text x="380" y="480" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c" font-family="system-ui,sans-serif">Infrastructure &amp;</text>
              <text x="380" y="494" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c" font-family="system-ui,sans-serif">Co-working</text>
              <text x="120" y="480" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2563eb" font-family="system-ui,sans-serif">Market</text>
              <text x="120" y="494" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2563eb" font-family="system-ui,sans-serif">Access</text>
              <text x="16" y="230" text-anchor="middle" font-size="9.5" font-weight="700" fill="#16a34a" font-family="system-ui,sans-serif">Invest-</text>
              <text x="16" y="244" text-anchor="middle" font-size="9.5" font-weight="700" fill="#16a34a" font-family="system-ui,sans-serif">ment</text>
              <text x="117" y="42" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0891b2" font-family="system-ui,sans-serif">Founder</text>
              <text x="117" y="56" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0891b2" font-family="system-ui,sans-serif">Community</text>
            </svg>
          </div>

          <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-1/2">
            <article
              v-for="offer in offerings"
              :key="offer.title"
              class="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl text-white shadow-sm"
                :style="{ backgroundColor: offer.color }"
              >
                {{ offer.emoji }}
              </div>
              <div>
                <h4 class="mb-1 text-sm font-bold text-gray-900 transition-colors group-hover:text-teal-700">
                  {{ offer.title }}
                </h4>
                <p class="text-xs leading-relaxed text-gray-500">
                  {{ offer.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Why IDRP -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            The IDRP Difference
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Why IDRP?</h2>
          <p class="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            More than an incubator, IDRP is a strategic partner in your startup journey.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="reason in reasons"
            :key="reason.number"
            class="group cursor-default rounded-2xl border border-gray-100 bg-gray-50 p-7 transition-all duration-300 hover:bg-teal-700"
          >
            <div
              class="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-sm font-extrabold text-teal-700"
            >
              {{ reason.number }}
            </div>
            <div class="mb-4 text-2xl">{{ reason.icon }}</div>
            <h3 class="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-white">
              {{ reason.title }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-teal-100">
              {{ reason.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Vision & Approach -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-6 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            How We Think
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Our Vision &amp; Approach
          </h2>
        </div>

        <p class="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
          At IDRP, we go beyond supporting startups. We partner with them,
          committed to building a founder-first ecosystem where innovation
          thrives through empathy, collaboration, and strong networks.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <article
            v-for="card in visionCards"
            :key="card.title"
            class="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:border-teal-200 hover:shadow-2xl"
          >
            <div
              class="relative h-52 overflow-hidden bg-gradient-to-br"
              :class="card.gradientClass"
            >
              <img
                v-if="card.visible"
                :src="card.image"
                :alt="card.alt"
                class="h-full w-full object-cover"
                @error="card.visible = false"
              />
              <span
                class="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white"
                :class="card.badgeClass"
              >
                {{ card.badge }}
              </span>
            </div>

            <div class="p-7">
              <div class="mb-3 text-2xl">{{ card.icon }}</div>
              <h3 class="mb-3 text-lg font-bold text-gray-900">{{ card.title }}</h3>
              <p class="text-sm leading-relaxed text-gray-500">
                {{ card.description }}
              </p>
            </div>
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
            Ready to be part of the IDRP story?
          </h3>
          <p class="mt-2 text-teal-100">
            Join a community of founders building India's deep-tech future.
          </p>
        </div>

        <div class="flex shrink-0 gap-4">
          <RouterLink
            to="/apply/resident-incubation"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
          >
            Apply Now
          </RouterLink>
          <RouterLink
            to="/contact"
            class="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Get in Touch
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

type IntroStat = {
  label: string
  value: string
}

type MissionVisionItem = {
  title: string
  icon: string
  description: string
  barClass: string
}

type Pillar = {
  title: string
  icon: string
  description: string
  bgClass: string
}

type TimelineEvent = {
  year: string
  milestone: string
  tag: string
  color: string
}

type Offering = {
  title: string
  description: string
  emoji: string
  color: string
}

type Reason = {
  number: string
  icon: string
  title: string
  description: string
}

type VisionCard = {
  badge: string
  badgeClass: string
  title: string
  description: string
  icon: string
  image: string
  alt: string
  gradientClass: string
  visible: boolean
}

const showHeroImage = ref(true)
const showIntroImage = ref(true)

const introStats: IntroStat[] = [
  { value: '10+', label: 'Years of operation' },
  { value: '400+', label: 'Startups graduated' },
  { value: '₹50Mn+', label: 'Funding facilitated' },
]

const missionVision: MissionVisionItem[] = [
  {
    title: 'Our Mission',
    icon: '⚡',
    description:
      'To provide a dynamic platform that bridges academic research and industry  needs. We aim to enable transformative solutions through advanced R&D,  skill development, and entrepreneurial ventures that address real-world challenges.',
    barClass: 'from-teal-500 to-cyan-400',
  },
  {
    title: 'Our Vision',
    icon: '👁',
    description:
      'To be a global hub for innovation, research, and industry-academia collaboration, advancing technological solutions that create lasting economic impact.',
    barClass: 'from-cyan-400 to-teal-600',
  },
]

const pillars: Pillar[] = [
  {
    title: 'Innovation',
    icon: '💡',
    description:
      'We champion bold ideas and unconventional thinking, creating pathways for new technologies that reshape industries and improve lives.',
    bgClass: 'bg-teal-50',
  },
  {
    title: 'Impact',
    icon: '📈',
    description:
      'Every venture we support is measured not just by growth metrics, but by its potential to drive meaningful economic and social transformation.',
    bgClass: 'bg-cyan-50',
  },
  {
    title: 'Collaboration',
    icon: '🤝',
    description:
      'No startup succeeds alone. We foster an open ecosystem where founders, mentors, investors, corporates, and academia work together.',
    bgClass: 'bg-teal-50',
  },
]

const timeline: TimelineEvent[] = [
  {
    year: '2010',
    milestone:
      'Began our journey under the DST–TBI initiative, laying the foundation for deep-tech entrepreneurship in Karnataka.',
    tag: 'Foundation',
    color: '#0d9488',
  },
  {
    year: '2011',
    milestone:
      'Expanded to a sector-agnostic model to empower startups across domains — from healthcare to space tech.',
    tag: 'Expansion',
    color: '#0891b2',
  },
  {
    year: '2012',
    milestone:
      'Received DST NIDHI–SSS support, strengthening our capacity to mentor and fund early-stage ventures.',
    tag: 'Government Support',
    color: '#7c3aed',
  },
  {
    year: '2014',
    milestone:
      'Backed high-potential technology ventures, catalysing our first cohort of product-driven deep-tech startups.',
    tag: 'First Cohort',
    color: '#ea580c',
  },
  {
    year: '2019',
    milestone:
      'Introduced our flagship accelerator program — a structured, intensive track for startups ready to scale fast.',
    tag: 'Accelerator Launch',
    color: '#16a34a',
  },
  {
    year: '2022',
    milestone:
      'Selected for the Startup India Seed Fund Scheme (SISFS), unlocking seed capital for promising early-stage founders.',
    tag: 'SISFS Selection',
    color: '#be185d',
  },
  {
    year: '2023',
    milestone:
      'Recognized among the leading accelerators in Karnataka by KDEM — a testament to our growing ecosystem impact.',
    tag: 'KDEM Recognition',
    color: '#1d4ed8',
  },
]

const offerings: Offering[] = [
  {
    title: 'Cohort Programs',
    description:
      'Structured batch-based programs with peer learning, expert sessions, and milestone-driven growth.',
    emoji: '👥',
    color: '#0d9488',
  },
  {
    title: 'Mentoring & Masterclasses',
    description:
      'One-on-one mentoring from industry veterans plus focused masterclasses on critical startup skills.',
    emoji: '🎓',
    color: '#dc2626',
  },
  {
    title: 'Infrastructure & Co-working',
    description:
      'State-of-the-art labs, dedicated desks, meeting rooms, and prototyping facilities on campus.',
    emoji: '🏢',
    color: '#ea580c',
  },
  {
    title: 'Market Access',
    description:
      'Strategic connections to enterprise customers, distribution partners, and global market entry support.',
    emoji: '🌐',
    color: '#2563eb',
  },
  {
    title: 'Investment',
    description:
      'Seed funding, grant facilitation, and warm introductions to angel investors and VCs.',
    emoji: '💰',
    color: '#16a34a',
  },
  {
    title: 'Founder Community',
    description:
      'A vibrant network of founders, alumni, and ecosystem builders who collaborate and grow together.',
    emoji: '🤝',
    color: '#0891b2',
  },
]

const reasons: Reason[] = [
  {
    number: '01',
    icon: '🔓',
    title: 'Open Incubation Model',
    description:
      'Flexible, founder-friendly support without rigid timelines or constraints. We adapt to your pace and needs.',
  },
  {
    number: '02',
    icon: '🚀',
    title: 'Focus on Future-Driven Sectors',
    description:
      'Driving innovation across HealthTech, MedTech, FinTech, AgriTech, AI, DeepTech, and more.',
  },
  {
    number: '03',
    icon: '📈',
    title: 'Programs Built for Growth',
    description:
      'Structured incubation and acceleration programs designed to take you from idea to scale.',
  },
  {
    number: '04',
    icon: '🏛️',
    title: 'Access to Government Support',
    description:
      'Backed by DST-TBI, SISFS, and NIDHI-SSS, with recognition from leading ecosystem bodies.',
  },
  {
    number: '05',
    icon: '🏢',
    title: 'World-Class Infrastructure',
    description:
      '55,000 sq. ft. of fully equipped, plug-and-play workspace designed for productivity.',
  },
  {
    number: '06',
    icon: '🌐',
    title: 'Strong Ecosystem Network',
    description:
      'A thriving community of founders, mentors, investors, and partners supporting your journey.',
  },
]

const visionCards = reactive<VisionCard[]>([
  {
    badge: 'Resources',
    badgeClass: 'bg-teal-600',
    title: 'Enabling Entrepreneurs with the Right Resources',
    description:
      'We create an environment that encourages founders to think differently. With access to mentorship, funding, market connections, and legal/IP support, we empower startups to move forward with confidence.',
    icon: '⚡',
    image: '/vision-resources.jfif',
    alt: 'Resources',
    gradientClass: 'from-teal-500 to-cyan-400',
    visible: true,
  },
  {
    badge: 'Community',
    badgeClass: 'bg-blue-600',
    title: 'Building a Strong Entrepreneurial Community',
    description:
      'IDRP is more than a workspace. It is a collaborative ecosystem where founders learn from each other, grow together, and receive continuous support throughout their journey.',
    icon: '🤝',
    image: '/vision-community.jfif',
    alt: 'Community',
    gradientClass: 'from-blue-500 to-indigo-400',
    visible: true,
  },
  {
    badge: 'Innovation',
    badgeClass: 'bg-orange-600',
    title: 'Empowering Tech-Driven Innovation',
    description:
      'Through workshops, training, and mentorship, we enable startups to solve real-world challenges. By connecting them with industry and government partners, we contribute to building a self-reliant India.',
    icon: '💡',
    image: '/vision-innovation.jfif',
    alt: 'Innovation',
    gradientClass: 'from-orange-500 to-amber-400',
    visible: true,
  },
])
</script>