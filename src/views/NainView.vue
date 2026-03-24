<template>
  <div class="nain-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/nain-hero.jfif"
        alt="New Age Innovation Network"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Government Initiatives
          </span>
        </div>
        <h1 class="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          New Age Innovation Network
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A government-supported initiative that promotes student innovation, startup culture,
          ideation, and entrepreneurship through structured institutional support.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Overview
          </span>
          <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
            NAIN: Building a Strong Innovation & Entrepreneurship Culture
          </h2>

          <div class="space-y-4 leading-relaxed text-gray-600">
            <p>
              The New Age Innovation Network (NAIN) is aimed at fostering innovation-driven thinking
              among students and aspiring entrepreneurs by providing a structured platform for idea
              development, experimentation, and early-stage venture support.
            </p>
            <p>
              Through NAIN, IDRP can encourage innovators to identify real-world challenges, convert
              ideas into prototypes, and prepare for entrepreneurial journeys with access to mentors,
              institutional facilities, and ecosystem support.
            </p>
            <p>
              It serves as a valuable bridge between academic creativity and startup readiness,
              enabling promising ideas to move toward validation, impact, and long-term growth.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div
            class="h-96 overflow-hidden rounded-3xl shadow-2xl"
            :class="{
              'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage,
            }"
          >
            <img
              v-if="showIntroImage"
              src="/nain-intro.jfif"
              alt="NAIN at IDRP"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Value Section -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Why NAIN?
          </span>
          <h2 class="mt-3 mb-8 text-3xl font-bold leading-tight text-gray-900">
            The Value of the NAIN Initiative
          </h2>

          <ul class="space-y-4">
            <li
              v-for="item in valueItems"
              :key="item"
              class="group flex items-start gap-4"
            >
              <div
                class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="white"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p class="pt-1 text-sm leading-relaxed text-gray-700">
                {{ item }}
              </p>
            </li>
          </ul>
        </div>

        <div class="lg:w-1/2">
          <div
            class="h-96 overflow-hidden rounded-3xl shadow-2xl"
            :class="{
              'bg-gradient-to-br from-teal-100 to-cyan-50': !showValueImage,
            }"
          >
            <img
              v-if="showValueImage"
              src="/nain-value.jfif"
              alt="Value of NAIN"
              class="h-full w-full object-cover"
              @error="showValueImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Focus Areas -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Focus Areas
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            What NAIN Supports
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            NAIN supports the journey from ideation to entrepreneurial readiness through structured
            innovation support and ecosystem engagement.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <article
            v-for="area in focusAreas"
            :key="area.title"
            class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400" />
            <div class="p-8 md:p-10">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">
                {{ area.title }}
              </h3>
              <p class="mb-6 text-sm leading-relaxed text-gray-600">
                {{ area.description }}
              </p>

              <ul class="space-y-3">
                <li
                  v-for="point in area.points"
                  :key="point"
                  class="flex items-start gap-3 text-sm leading-relaxed text-gray-600"
                >
                  <span class="mt-0.5 shrink-0 text-teal-500">✓</span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Who Can Benefit -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Beneficiaries
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Who Can Benefit from NAIN
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            NAIN is designed for students, innovators, and early-stage entrepreneurial teams who
            are ready to explore, build, and validate meaningful ideas.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="group in beneficiaryGroups"
            :key="group.title"
            class="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 class="text-xl font-bold text-gray-900">
              {{ group.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ group.description }}
            </p>
          </div>
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
            Interested in innovation through NAIN?
          </h3>
          <p class="mt-2 text-teal-100">
            Connect with IDRP to explore innovation support, ideation pathways, and startup
            readiness opportunities.
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

type FocusArea = {
  title: string
  description: string
  points: string[]
}

type BeneficiaryGroup = {
  title: string
  description: string
}

const showHeroImage = ref(true)
const showIntroImage = ref(true)
const showValueImage = ref(true)

const valueItems: string[] = [
  'Encourages students to identify real-world problems and develop innovative solutions',
  'Creates a structured platform for ideation, experimentation, and entrepreneurial thinking',
  'Connects innovators with mentors, institutional support, and startup ecosystem opportunities',
  'Supports prototype development and early-stage validation of promising ideas',
  'Strengthens the innovation pipeline from campus ideas to startup-ready ventures',
]

const focusAreas: FocusArea[] = [
  {
    title: 'Innovation & Ideation Support',
    description:
      'NAIN helps participants move from raw ideas to more structured innovation concepts by encouraging creative problem-solving and user-centered thinking.',
    points: [
      'Idea exploration and refinement',
      'Problem identification and opportunity discovery',
      'Early concept validation support',
    ],
  },
  {
    title: 'Entrepreneurship Development',
    description:
      'The initiative promotes entrepreneurial awareness and helps aspiring founders understand how innovative ideas can be shaped into viable ventures.',
    points: [
      'Startup mindset development',
      'Exposure to entrepreneurial pathways',
      'Guidance toward venture-building readiness',
    ],
  },
  {
    title: 'Mentorship & Ecosystem Access',
    description:
      'Participants can benefit from connections with faculty, experts, mentors, and the wider innovation ecosystem to improve direction and execution.',
    points: [
      'Mentor interactions and expert guidance',
      'Institutional and ecosystem support',
      'Networking and collaboration opportunities',
    ],
  },
  {
    title: 'Prototype & Growth Pathways',
    description:
      'NAIN can support innovators in moving toward prototypes, proof-of-concept work, and next-stage opportunities such as incubation.',
    points: [
      'Prototype-oriented support',
      'Innovation-to-incubation pipeline',
      'Readiness for further startup support',
    ],
  },
]

const beneficiaryGroups: BeneficiaryGroup[] = [
  {
    title: 'Students',
    description:
      'Students with innovative ideas who want to explore problem-solving, design thinking, and entrepreneurship.',
  },
  {
    title: 'Student Teams',
    description:
      'Interdisciplinary teams working on early concepts, prototypes, or socially relevant innovation ideas.',
  },
  {
    title: 'Early Innovators',
    description:
      'Individuals or groups at the beginning of their innovation journey who need structured support and guidance.',
  },
  {
    title: 'Aspiring Founders',
    description:
      'Entrepreneurially inclined participants looking to convert ideas into startup opportunities over time.',
  },
]
</script>