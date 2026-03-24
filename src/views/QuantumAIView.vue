<template>
  <div class="quantum-ai-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/quantum-ai-hero.jfif"
        alt="Centre of Excellence in Quantum AI and Computing"
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
          Centre of Excellence in Quantum AI and Computing
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A strategic initiative focused on advancing frontier research, capability building, and
          innovation in quantum technologies, artificial intelligence, and next-generation computing.
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
            Building capability in emerging and high-impact computing domains
          </h2>

          <div class="space-y-4 leading-relaxed text-gray-600">
            <p>
              The Centre of Excellence in Quantum AI and Computing is envisioned as a focused
              platform for research, innovation, learning, and collaboration in advanced computing
              areas that are expected to shape the future of science, technology, and industry.
            </p>
            <p>
              By bringing together artificial intelligence, quantum thinking, computational
              foundations, and interdisciplinary problem-solving, the initiative can enable new
              opportunities for talent development, research-led innovation, and strategic technology
              advancement.
            </p>
            <p>
              It positions IDRP to contribute to future-ready domains through knowledge creation,
              capability building, ecosystem engagement, and innovation-oriented exploration.
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
              src="/quantum-ai-intro.jfif"
              alt="Quantum AI and Computing at IDRP"
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
            Why This Centre?
          </span>
          <h2 class="mt-3 mb-8 text-3xl font-bold leading-tight text-gray-900">
            The Value of a Quantum AI and Computing Centre of Excellence
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
              src="/quantum-ai-value.jfif"
              alt="Value of Quantum AI and Computing"
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
            What the Centre Can Enable
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            The centre can serve as a foundation for future-ready research, learning, innovation,
            and collaboration in advanced computing domains.
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
            Who Can Benefit from the Centre
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            The initiative is relevant for students, researchers, faculty, startups, and innovation
            teams interested in future computing technologies.
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
            Interested in frontier research and advanced computing?
          </h3>
          <p class="mt-2 text-teal-100">
            Connect with IDRP to explore research, collaboration, and innovation opportunities in
            Quantum AI and next-generation computing.
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
  'Creates institutional capability in frontier areas such as quantum technologies, AI, and advanced computing',
  'Supports future-ready research, interdisciplinary exploration, and knowledge creation',
  'Strengthens talent development in emerging domains with high strategic and technological relevance',
  'Provides a platform for innovation, collaboration, and ecosystem engagement in advanced computing',
  'Positions the institution to contribute meaningfully to next-generation science and technology initiatives',
]

const focusAreas: FocusArea[] = [
  {
    title: 'Quantum & Advanced Computing Awareness',
    description:
      'The centre can promote foundational understanding and structured engagement with quantum ideas, computational models, and emerging paradigms in future computing.',
    points: [
      'Exposure to emerging computing concepts',
      'Future-oriented capability building',
      'Awareness of strategic technology directions',
    ],
  },
  {
    title: 'AI & Computational Innovation',
    description:
      'The initiative can support exploration of AI methods, computational intelligence, and advanced algorithmic thinking in connection with next-generation systems.',
    points: [
      'AI-oriented innovation pathways',
      'Algorithmic and computational exploration',
      'Research-led problem-solving opportunities',
    ],
  },
  {
    title: 'Research, Collaboration & Talent Development',
    description:
      'The centre can create opportunities for faculty, students, and research teams to work on advanced topics through collaborative, interdisciplinary, and guided engagement.',
    points: [
      'Collaborative research culture',
      'Talent development in emerging domains',
      'Interdisciplinary project opportunities',
    ],
  },
  {
    title: 'Innovation & Strategic Technology Ecosystem',
    description:
      'By building a strong institutional focus on advanced computing, the centre can contribute to innovation ecosystems, future technology readiness, and long-term strategic positioning.',
    points: [
      'Ecosystem and partnership readiness',
      'Innovation-linked advanced technology focus',
      'Stronger institutional positioning in future domains',
    ],
  },
]

const beneficiaryGroups: BeneficiaryGroup[] = [
  {
    title: 'Students',
    description:
      'Students interested in advanced computing, AI, future technologies, and research-oriented learning pathways.',
  },
  {
    title: 'Faculty',
    description:
      'Faculty members exploring interdisciplinary research, advanced computing themes, and strategic academic development.',
  },
  {
    title: 'Researchers',
    description:
      'Research teams and scholars working on emerging technology domains, computational methods, and innovation-focused projects.',
  },
  {
    title: 'Startups & Innovators',
    description:
      'Innovation teams and startups interested in deep-tech directions, future computing opportunities, and strategic technology exploration.',
  },
]
</script>