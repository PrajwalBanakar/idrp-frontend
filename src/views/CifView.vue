<template>
  <div class="cif-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/cif-hero.jfif"
        alt="Common Instrumentation Facility"
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
          Common Instrumentation Facility
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A shared infrastructure initiative that enables access to advanced equipment, testing
          tools, and prototyping facilities for innovation, research, product development, and
          entrepreneurial experimentation.
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
            Shared access to critical tools and innovation infrastructure
          </h2>

          <div class="space-y-4 leading-relaxed text-gray-600">
            <p>
              The Common Instrumentation Facility (CIF) is designed to provide innovators,
              researchers, startups, and academic teams with access to shared instrumentation,
              advanced facilities, and technical infrastructure that may otherwise be difficult to
              access individually.
            </p>
            <p>
              By creating a common platform for equipment usage, testing, experimentation, and
              prototype support, CIF helps improve the efficiency of product development, applied
              research, and innovation activities across multiple domains.
            </p>
            <p>
              It serves as a strong institutional enabler for deep-tech work, interdisciplinary
              projects, startup validation, and research-led problem solving.
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
              src="/cif-intro.jfif"
              alt="Common Instrumentation Facility at IDRP"
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
            Why CIF?
          </span>
          <h2 class="mt-3 mb-8 text-3xl font-bold leading-tight text-gray-900">
            The Value of the Common Instrumentation Facility
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
              src="/cif-value.jfif"
              alt="Value of CIF"
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
            What CIF Supports
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            CIF supports research, innovation, testing, and development by making critical
            infrastructure available through a shared-access model.
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
            Who Can Benefit from CIF
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            CIF is valuable for innovators, startups, faculty, students, and researchers who need
            access to quality infrastructure, instrumentation, and testing support.
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
            Need access to innovation and prototyping infrastructure?
          </h3>
          <p class="mt-2 text-teal-100">
            Connect with IDRP to explore shared facility access, research support, and development
            opportunities through CIF.
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
  'Provides shared access to advanced instruments, tools, and technical infrastructure',
  'Reduces the cost barrier for research, prototyping, testing, and validation activities',
  'Strengthens innovation and product development by enabling hands-on experimentation',
  'Supports interdisciplinary collaboration across startups, faculty, students, and research teams',
  'Improves institutional capability for deep-tech, applied research, and entrepreneurship support',
]

const focusAreas: FocusArea[] = [
  {
    title: 'Shared Instrumentation Access',
    description:
      'CIF enables access to common technical equipment and advanced tools that support innovation, research, and development across multiple domains.',
    points: [
      'Access to specialized instruments and lab tools',
      'Efficient shared-use infrastructure model',
      'Support for multiple users and teams',
    ],
  },
  {
    title: 'Prototype Development Support',
    description:
      'The facility can help innovators and startups use equipment and infrastructure required to build, refine, and evaluate early-stage prototypes.',
    points: [
      'Prototype-oriented experimentation',
      'Development and refinement support',
      'Early-stage product validation readiness',
    ],
  },
  {
    title: 'Research & Testing Enablement',
    description:
      'CIF can serve as a strong backbone for applied research, testing, analysis, and technical experimentation that requires reliable instrumentation access.',
    points: [
      'Testing and analytical support',
      'Applied research enablement',
      'Experimental and technical validation pathways',
    ],
  },
  {
    title: 'Innovation Ecosystem Strengthening',
    description:
      'By centralizing infrastructure support, CIF contributes to a stronger innovation ecosystem that benefits startups, faculty, students, and collaborative projects.',
    points: [
      'Infrastructure for innovation programs',
      'Stronger institutional research capability',
      'Improved startup and ecosystem readiness',
    ],
  },
]

const beneficiaryGroups: BeneficiaryGroup[] = [
  {
    title: 'Startups',
    description:
      'Early-stage startups that need access to tools, facilities, and testing support for product development and validation.',
  },
  {
    title: 'Students',
    description:
      'Students working on innovation projects, prototypes, and technical problem-solving activities that need structured facility access.',
  },
  {
    title: 'Faculty',
    description:
      'Faculty members engaged in applied projects, research initiatives, and student-guided innovation efforts.',
  },
  {
    title: 'Researchers',
    description:
      'Research teams and interdisciplinary groups requiring instrumentation support for experimentation, analysis, and development.',
  },
]
</script>