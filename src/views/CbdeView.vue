<template>
  <div class="cbde-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/cbde-hero.jfif"
        alt="Capacity Building for Design and Entrepreneurship"
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
          Capacity Building for Design and Entrepreneurship
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A focused initiative to strengthen innovation capability, design thinking, entrepreneurial
          mindset, and venture readiness among students, innovators, and emerging startup teams.
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
            Building design capability and entrepreneurial confidence
          </h2>

          <div class="space-y-4 leading-relaxed text-gray-600">
            <p>
              Capacity Building for Design and Entrepreneurship is aimed at creating a strong
              foundation for innovation by equipping participants with the mindset, methods, and
              practical orientation needed to identify opportunities, design solutions, and pursue
              entrepreneurial pathways.
            </p>
            <p>
              The initiative encourages a structured approach to creativity, user understanding,
              problem-solving, product thinking, and venture exploration so that ideas can move
              beyond intent into meaningful execution.
            </p>
            <p>
              Through this initiative, IDRP can nurture innovators and aspiring founders who are
              better prepared to develop solutions, validate concepts, and engage with startup and
              innovation ecosystems more effectively.
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
              src="/cbde-intro.jfif"
              alt="Capacity Building for Design and Entrepreneurship at IDRP"
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
            Why This Initiative?
          </span>
          <h2 class="mt-3 mb-8 text-3xl font-bold leading-tight text-gray-900">
            The Value of Design and Entrepreneurship Capacity Building
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
              src="/cbde-value.jfif"
              alt="Value of Capacity Building for Design and Entrepreneurship"
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
            What the Initiative Supports
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            The initiative helps participants strengthen the capabilities needed to move from
            problem identification to solution design and entrepreneurial action.
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
            Who Can Benefit from CBDE
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            This initiative is valuable for students, aspiring founders, innovators, and teams
            seeking stronger design thinking, problem-solving, and entrepreneurial capabilities.
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
            Want to build stronger design and entrepreneurial capability?
          </h3>
          <p class="mt-2 text-teal-100">
            Connect with IDRP to explore how this initiative can support innovation mindset,
            design-oriented problem solving, and venture readiness.
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
  'Builds a stronger foundation in design thinking, innovation methods, and entrepreneurial mindset',
  'Encourages participants to identify user needs, opportunities, and practical problem statements',
  'Supports structured movement from idea framing to concept development and venture readiness',
  'Improves confidence in solution design, product thinking, and startup-oriented execution',
  'Strengthens the overall innovation and entrepreneurship culture within the institution',
]

const focusAreas: FocusArea[] = [
  {
    title: 'Design Thinking & Problem Discovery',
    description:
      'The initiative can help participants understand users, identify meaningful challenges, and approach innovation with a structured design mindset.',
    points: [
      'User-centered thinking and empathy',
      'Problem identification and opportunity mapping',
      'Structured solution framing approaches',
    ],
  },
  {
    title: 'Innovation & Product Thinking',
    description:
      'Participants can strengthen their ability to shape ideas into practical solutions by learning to think in terms of value creation, usability, and feasibility.',
    points: [
      'Idea refinement and concept shaping',
      'Solution-oriented product thinking',
      'Practical innovation development pathways',
    ],
  },
  {
    title: 'Entrepreneurial Mindset Development',
    description:
      'The initiative promotes initiative, ownership, creativity, and venture-oriented thinking that can help participants move toward startup readiness.',
    points: [
      'Entrepreneurial awareness and confidence',
      'Opportunity-oriented thinking',
      'Readiness for venture exploration',
    ],
  },
  {
    title: 'Execution Readiness & Ecosystem Linkages',
    description:
      'By building stronger capability in design and entrepreneurship, the initiative can help connect participants to wider innovation, incubation, and startup support pathways.',
    points: [
      'Better execution and validation readiness',
      'Linkages to incubation and startup pathways',
      'Stronger participation in innovation ecosystems',
    ],
  },
]

const beneficiaryGroups: BeneficiaryGroup[] = [
  {
    title: 'Students',
    description:
      'Students who want to build stronger innovation, design, and entrepreneurial capabilities beyond classroom learning.',
  },
  {
    title: 'Aspiring Founders',
    description:
      'Individuals exploring startup ideas and seeking stronger foundations in problem-solving, design, and venture thinking.',
  },
  {
    title: 'Innovation Teams',
    description:
      'Student or interdisciplinary teams working on ideas, concepts, prototypes, or early-stage solution development.',
  },
  {
    title: 'Early Entrepreneurs',
    description:
      'Participants at the beginning of their entrepreneurial journey who need structured support in design and execution thinking.',
  },
]
</script>