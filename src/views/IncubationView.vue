<template>
  <div class="incubation-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/incubation-hero.jfif"
        alt="Udhyami"
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
          Udhyami
        </h1>
        <p class="mt-4 max-w-xl text-base leading-relaxed text-teal-100 md:text-lg">
          IDRP’s incubation pathway for startups ready to move from early validation toward growth, traction, and venture-building.
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
            Udhyami: Guiding Startups Towards Growth &amp; Impact
          </h2>

          <div class="space-y-4 leading-relaxed text-gray-600">
            <p>
              At IDRP, we believe early-stage startups need more than infrastructure alone. They need
              structured guidance, strong mentorship, and the right ecosystem support to grow with clarity.
            </p>
            <p>
              Udhyami is designed for founders who are ready to move beyond idea exploration and early
              validation into focused venture-building. With hands-on support, expert mentors, and access
              to a collaborative innovation ecosystem, startups can strengthen their product, sharpen their
              market approach, and prepare for long-term growth.
            </p>
            <p>
              Whether you are refining your business model, building customer traction, or preparing your
              next major milestone, Udhyami supports your journey with a founder-first approach.
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
              src="/incubation-intro.jfif"
              alt="Udhyami at IDRP"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Value of Udhyami -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Why Udhyami?
          </span>
          <h2 class="mt-3 mb-8 text-3xl font-bold leading-tight text-gray-900">
            The Value of Incubation Through Udhyami
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
              src="/incubation-value.jfif"
              alt="Value of Udhyami"
              class="h-full w-full object-cover"
              @error="showValueImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Udhyami Programs -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Call for Applications
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Udhyami Pathways
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Choose the incubation pathway that best matches your startup stage and operating model.
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
            Not sure which Udhyami pathway is right for you?
          </h3>
          <p class="mt-2 text-teal-100">
            Talk to our team and we will help you identify the best fit for your startup.
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
type ProgramId = 'resident' | 'virtual'

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
  'Helps startups sharpen product direction and build with stronger market clarity',
  'Provides structured, milestone-driven guidance for venture growth',
  'Connects founders with experienced mentors, experts, and ecosystem support',
  'Supports readiness for partnerships, traction-building, and future fundraising',
  'Creates a founder-first community driven by collaboration, peer learning, and execution',
]

const programs: Program[] = [
  {
    id: 'resident',
    title: 'Udhyami Resident',
    duration: '12-18 Months',
    mode: 'On-Site',
    description:
      'Designed for early-stage startups at the idea, PoC, or MVP stage, Udhyami Resident offers a structured on-campus incubation environment with access to mentors, infrastructure, business support, and ecosystem opportunities. It is ideal for founders who benefit from close engagement, collaborative working, and deeper integration with the IDRP innovation environment.',
    applyTo: '/apply/resident-incubation',
    gradientClass: 'from-teal-500 to-cyan-400',
    durationBadgeClass: 'bg-teal-50 text-teal-700',
    sections: [
      {
        key: 'eligibility',
        title: 'Eligibility',
        contentType: 'text',
        text: 'Early-stage startups at idea, PoC, or MVP stage that are ready for structured incubation support.',
      },
      {
        key: 'offers',
        title: 'What This Program Offers',
        contentType: 'list',
        items: [
          'Dedicated workspace within the campus ecosystem',
          'Access to relevant labs, facilities, and support infrastructure',
          'Technical mentorship from faculty and domain experts',
          'Business development and venture guidance',
          'Ecosystem connects for growth and exposure',
          'A structured incubation pathway through IDRP',
        ],
      },
      {
        key: 'details',
        title: 'Program Details',
        contentType: 'table',
        rows: [
          { label: 'Mode', value: 'On-Site' },
          { label: 'Duration', value: '12-18 Months' },
          { label: 'Ideal For', value: 'Founders seeking immersive incubation support' },
        ],
      },
    ],
  },
  {
    id: 'virtual',
    title: 'Udhyami Virtual',
    duration: '6-12 Months',
    mode: 'Online',
    description:
      'Designed for founders who want to leverage IDRP’s incubation ecosystem without being physically present, Udhyami Virtual offers flexible remote support for startups building from different locations. It helps founders access mentorship, business guidance, expert connects, and structured support while continuing to operate from wherever they are.',
    applyTo: '/apply/virtual-incubation',
    gradientClass: 'from-cyan-400 to-teal-500',
    durationBadgeClass: 'bg-cyan-50 text-cyan-700',
    sections: [
      {
        key: 'eligibility',
        title: 'Eligibility',
        contentType: 'list',
        intro: "You're eligible if you have:",
        items: [
          'A startup or founder team with a clear venture direction',
          'An early product, MVP, prototype, or market-tested startup case',
        ],
      },
      {
        key: 'offers',
        title: 'What This Program Offers',
        contentType: 'list',
        items: [
          'Remote mentorship sessions and regular guidance',
          'Access to digital ecosystem resources',
          'Business and venture-building support',
          'Investor, expert, and mentor connects',
          'Flexible participation from any location',
          'A remote incubation pathway through IDRP',
        ],
      },
      {
        key: 'details',
        title: 'Program Details',
        contentType: 'table',
        rows: [
          { label: 'Mode', value: 'Online' },
          { label: 'Duration', value: '6-12 Months' },
          { label: 'Ideal For', value: 'Startups seeking flexible incubation support' },
        ],
      },
    ],
  },
]

const openSections = reactive<Record<ProgramId, Record<AccordionKey, boolean>>>({
  resident: {
    eligibility: false,
    offers: false,
    details: false,
  },
  virtual: {
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