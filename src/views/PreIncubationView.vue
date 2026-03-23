<template>
  <div class="pre-incubation-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/incubation-hero.jfif"
        alt="Yuva Udyani"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Programs
          </span>
        </div>
        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Yuva Udyani
        </h1>
        <p class="mt-4 max-w-xl text-base leading-relaxed text-teal-100 md:text-lg">
          IDRP's pre-incubation pathway for student innovators, aspiring founders, and early-stage teams.
        </p>
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
            Yuva Udyani: Shaping Early Ideas into Incubation-Ready Ventures
          </h2>

          <div class="space-y-4 leading-relaxed text-gray-600">
            <p>
              Yuva Udyani is IDRP’s pre-incubation program designed for founders who are at the idea,
              problem-validation, or early prototype stage. It is the right starting point for innovators
              who need guidance before entering full incubation.
            </p>
            <p>
              The program helps teams validate the problem, understand user needs, explore solution fit,
              shape an initial business model, and build founder readiness. It creates a structured pathway
              from concept to credibility.
            </p>
            <p>
              Whether the venture begins as a student idea, research output, technical innovation, or
              early startup concept, Yuva Udyani provides mentor-led support to help founders move toward
              the next stage with clarity and confidence.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div
            class="h-96 overflow-hidden rounded-3xl shadow-2xl"
            :class="{ 'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage }"
          >
            <img
              v-if="showIntroImage"
              src="/incubation-intro.jfif"
              alt="Yuva Udyani at IDRP"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Value -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Why Yuva Udyani?
          </span>
          <h2 class="mt-3 mb-8 text-3xl font-bold leading-tight text-gray-900">
            Build the Right Foundations Before Incubation
          </h2>

          <ul class="space-y-4">
            <li
              v-for="item in valueItems"
              :key="item"
              class="flex items-start gap-4"
            >
              <div class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 shadow-sm">
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
            :class="{ 'bg-gradient-to-br from-teal-100 to-cyan-50': !showValueImage }"
          >
            <img
              v-if="showValueImage"
              src="/incubation-value.jfif"
              alt="Value of Yuva Udyani"
              class="h-full w-full object-cover"
              @error="showValueImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Tracks -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Call for Applications
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Yuva Udyani Tracks
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Choose the pathway that best matches your current stage and prepare for Udhyami incubation.
          </p>
        </div>

        <article
          v-for="program in programs"
          :key="program.title"
          class="mb-12 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 last:mb-0 hover:shadow-xl"
        >
          <div
            class="h-1 bg-gradient-to-r"
            :class="program.gradientClass"
          />
          <div class="p-8 md:p-10">
            <div class="flex flex-col gap-8 md:flex-row md:items-start">
              <div class="flex-1">
                <div class="mb-4 flex items-center gap-3">
                  <span
                    class="rounded-full px-3 py-1 text-xs font-bold"
                    :class="program.durationBadgeClass"
                  >
                    {{ program.duration }}
                  </span>
                  <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                    {{ program.mode }}
                  </span>
                </div>

                <h3 class="mb-3 text-2xl font-bold text-gray-900">
                  {{ program.title }}
                </h3>

                <p class="mb-6 text-sm leading-relaxed text-gray-600">
                  {{ program.description }}
                </p>

                <RouterLink
                  :to="program.applyTo"
                  class="inline-block rounded-xl bg-teal-700 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-teal-800"
                >
                  Apply Now
                </RouterLink>
              </div>

              <div class="flex shrink-0 flex-col gap-3 md:w-80">
                <div
                  v-for="section in program.sections"
                  :key="section.key"
                  class="overflow-hidden rounded-2xl border border-gray-100"
                >
                  <button
                    type="button"
                    class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                    @click="toggleSection(program.id, section.key)"
                  >
                    {{ section.title }}
                    <svg
                      class="h-4 w-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': isSectionOpen(program.id, section.key) }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    v-show="isSectionOpen(program.id, section.key)"
                    class="border-t border-gray-100 px-5 pt-3 pb-4"
                  >
                    <template v-if="section.contentType === 'text'">
                      <p class="text-sm text-gray-600">
                        {{ section.text }}
                      </p>
                    </template>

                    <template v-else-if="section.contentType === 'list'">
                      <p
                        v-if="section.intro"
                        class="mb-2 text-sm text-gray-600"
                      >
                        {{ section.intro }}
                      </p>
                      <ul class="space-y-2">
                        <li
                          v-for="item in section.items"
                          :key="item"
                          class="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span class="mt-0.5 shrink-0 text-teal-500">✓</span>
                          {{ item }}
                        </li>
                      </ul>
                    </template>

                    <template v-else-if="section.contentType === 'table'">
                      <table class="w-full text-sm">
                        <tbody>
                          <tr
                            v-for="row in section.rows"
                            :key="row.label"
                            class="border-b border-gray-50 last:border-b-0"
                          >
                            <td class="px-0 py-3 font-semibold text-gray-500">
                              {{ row.label }}
                            </td>
                            <td class="px-0 py-3 font-medium text-gray-800">
                              {{ row.value }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 class="text-2xl font-bold text-white">
            Have an idea but not sure where to begin?
          </h3>
          <p class="mt-2 text-teal-100">
            Talk to our team and we will guide you through Yuva Udyani and the path toward Udhyami.
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
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

type AccordionKey = 'eligibility' | 'offers' | 'details'
type ProgramId = 'idea' | 'prototype'

type TableRow = {
  label: string
  value: string
}

type ProgramSection =
  | {
      key: AccordionKey
      title: string
      contentType: 'text'
      text: string
    }
  | {
      key: AccordionKey
      title: string
      contentType: 'list'
      items: string[]
      intro?: string
    }
  | {
      key: AccordionKey
      title: string
      contentType: 'table'
      rows: TableRow[]
    }

type Program = {
  id: ProgramId
  title: string
  duration: string
  mode: string
  description: string
  applyTo: string
  gradientClass: string
  durationBadgeClass: string
  sections: ProgramSection[]
}

const showHeroImage = ref(true)
const showIntroImage = ref(true)
const showValueImage = ref(true)

const valueItems: string[] = [
  'Helps founders validate whether the identified problem is real, relevant, and worth solving',
  'Supports customer discovery, solution framing, and problem-solution fit',
  'Guides early startup teams from concept toward prototype or MVP planning',
  'Builds founder readiness in business model thinking, storytelling, and pitching',
  'Creates a stronger pathway into Udhyami incubation and future funding opportunities',
]

const programs: Program[] = [
  {
    id: 'idea',
    title: 'Idea Validation Track',
    duration: '6-9 Months',
    mode: 'Hybrid / Flexible',
    description:
      'Designed for aspiring founders and early teams who have identified a problem space but are still refining the right solution. This track helps participants validate the opportunity, understand users, shape a venture hypothesis, and prepare for the next stage.',
    applyTo: '/apply/pre-incubation',
    gradientClass: 'from-teal-500 to-cyan-400',
    durationBadgeClass: 'bg-teal-50 text-teal-700',
    sections: [
      {
        key: 'eligibility',
        title: 'Eligibility',
        contentType: 'text',
        text: 'Students, researchers, innovators, and founder teams at idea, concept, or early validation stage.',
      },
      {
        key: 'offers',
        title: 'What This Track Offers',
        contentType: 'list',
        items: [
          'Problem discovery and customer interview guidance',
          'Problem-solution fit mentoring',
          'Business model and value proposition support',
          'Pitch deck and founder readiness sessions',
          'Access to mentors and ecosystem interactions',
          'A structured pathway toward Udhyami incubation readiness',
        ],
      },
      {
        key: 'details',
        title: 'Program Details',
        contentType: 'table',
        rows: [
          { label: 'Mode', value: 'Hybrid / Flexible' },
          { label: 'Duration', value: '6-9 Months' },
          { label: 'Ideal For', value: 'Idea-stage founders' },
        ],
      },
    ],
  },
  {
    id: 'prototype',
    title: 'Prototype Readiness Track',
    duration: '9-12 Months',
    mode: 'Hybrid / Mentor-Led',
    description:
      'Built for teams that already have an early concept, research outcome, technical direction, or prototype and want to strengthen it into a viable startup case. This track supports validation, product direction, and readiness for formal incubation.',
    applyTo: '/apply/pre-incubation',
    gradientClass: 'from-cyan-400 to-teal-500',
    durationBadgeClass: 'bg-cyan-50 text-cyan-700',
    sections: [
      {
        key: 'eligibility',
        title: 'Eligibility',
        contentType: 'list',
        intro: "You're eligible if you have:",
        items: [
          'An early concept with technical, research, or domain depth',
          'A prototype, proof of concept, research output, or MVP roadmap in progress',
        ],
      },
      {
        key: 'offers',
        title: 'What This Track Offers',
        contentType: 'list',
        items: [
          'Prototype and MVP planning support',
          'Market validation and early user feedback loops',
          'Mentoring on positioning, value proposition, and startup narrative',
          'Readiness for Udhyami incubation applications',
          'Pitch preparation and venture refinement',
          'Access to IDRP experts, events, and ecosystem support',
        ],
      },
      {
        key: 'details',
        title: 'Program Details',
        contentType: 'table',
        rows: [
          { label: 'Mode', value: 'Hybrid / Mentor-Led' },
          { label: 'Duration', value: '9-12 Months' },
          { label: 'Ideal For', value: 'Prototype / PoC-stage teams' },
        ],
      },
    ],
  },
]

const openSections = reactive<Record<ProgramId, Record<AccordionKey, boolean>>>({
  idea: {
    eligibility: false,
    offers: false,
    details: false,
  },
  prototype: {
    eligibility: false,
    offers: false,
    details: false,
  },
})

function toggleSection(programId: ProgramId, sectionKey: AccordionKey) {
  openSections[programId][sectionKey] = !openSections[programId][sectionKey]
}

function isSectionOpen(programId: ProgramId, sectionKey: AccordionKey) {
  return openSections[programId][sectionKey]
}
</script>