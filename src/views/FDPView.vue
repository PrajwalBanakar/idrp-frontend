<template>
  <div class="fdp-view">
    <!-- Hero -->
    <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
            Faculty Development Program
          </span>
        </div>

        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          FDP
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A 2-day faculty development workshop designed to strengthen pedagogy, technology awareness,
          research alignment, and innovation-readiness in emerging domains.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/courses/fdp/apply"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            Apply Now
          </RouterLink>

          <RouterLink
            to="/contact"
            class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Enquire Now
          </RouterLink>

          <RouterLink
            to="/courses"
            class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Back to Courses
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Overview
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Strengthening Faculty Readiness in Emerging Technology and Innovation
          </h2>

          <div class="mt-6 space-y-4 text-gray-600">
            <p>
              The FDP is designed as a compact and intensive 2-day workshop for faculty members who
              want to upgrade their understanding of emerging domains, modern teaching approaches,
              and industry-relevant academic alignment.
            </p>
            <p>
              The program supports educators in connecting curriculum, pedagogy, research orientation,
              and applied technological developments. It is intended to help faculty become better
              prepared to teach, mentor, and guide students in contemporary innovation ecosystems.
            </p>
            <p>
              With its focused workshop structure, the FDP creates space for both knowledge enrichment
              and reflection on academic practice in a rapidly evolving technical landscape.
            </p>
          </div>
        </div>

        <div class="rounded-3xl bg-gray-50 p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">Program Snapshot</h3>
          <div class="mt-6 space-y-4 text-sm text-gray-700">
            <p><strong class="text-gray-900">Mode:</strong> Workshop Format</p>
            <p><strong class="text-gray-900">Duration:</strong> 2 Days</p>
            <p><strong class="text-gray-900">Type:</strong> Faculty Development Workshop</p>
            <p><strong class="text-gray-900">Focus:</strong> Pedagogy, emerging technology awareness, research alignment</p>
            <p><strong class="text-gray-900">Suitable For:</strong> Faculty members, academic coordinators, and educators</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Why This Workshop
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Key Highlights
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in highlights"
            :key="item.title"
            class="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="mb-4 text-3xl">{{ item.icon }}</div>
            <h3 class="text-xl font-bold text-gray-900">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Audience / Outcomes -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">Who This Workshop Is For</h3>
          <ul class="mt-6 space-y-4">
            <li
              v-for="item in audience"
              :key="item"
              class="flex items-start gap-3 text-sm text-gray-700"
            >
              <span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                ✓
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">What Participants Can Expect</h3>
          <ul class="mt-6 space-y-4">
            <li
              v-for="item in outcomes"
              :key="item"
              class="flex items-start gap-3 text-sm text-gray-700"
            >
              <span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold text-white">
                ✓
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <h3 class="text-3xl font-bold text-white">
          Ready to join the FDP workshop?
        </h3>
        <p class="mt-3 text-teal-100">
          Apply now to register your interest and learn more about participation, theme, and upcoming workshop schedules.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/courses/fdp/apply"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            Apply Now
          </RouterLink>
          <RouterLink
            to="/courses"
            class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            View All Offerings
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

type Highlight = {
  title: string
  description: string
  icon: string
}

const highlights: Highlight[] = [
  {
    title: 'Compact Intensive Format',
    description:
      'A focused 2-day structure designed for meaningful faculty engagement within a short duration.',
    icon: '⏱️',
  },
  {
    title: 'Pedagogy Enrichment',
    description:
      'Supports faculty in rethinking teaching methods, learner engagement, and classroom relevance.',
    icon: '📘',
  },
  {
    title: 'Emerging Technology Exposure',
    description:
      'Introduces faculty to evolving technological domains and their academic significance.',
    icon: '💡',
  },
  {
    title: 'Research Alignment',
    description:
      'Helps participants connect teaching practice with research thinking, innovation, and application contexts.',
    icon: '🔬',
  },
  {
    title: 'Academic-Industry Relevance',
    description:
      'Encourages stronger linkage between curriculum, practical skills, and external ecosystem expectations.',
    icon: '🏭',
  },
  {
    title: 'Faculty Readiness',
    description:
      'Builds confidence for teaching, mentoring, and academic leadership in contemporary domains.',
    icon: '🎓',
  },
]

const audience: string[] = [
  'Faculty members across engineering and technology disciplines',
  'Academic coordinators and curriculum contributors',
  'Educators seeking exposure to emerging domains and current practices',
  'Faculty interested in strengthening research and innovation orientation',
]

const outcomes: string[] = [
  'Improved awareness of emerging technologies and their academic relevance',
  'Stronger pedagogy and curriculum alignment thinking',
  'Better readiness for research-linked teaching and mentoring',
  'A compact but meaningful faculty development experience',
]
</script>