<template>
  <div class="iet-view">
    <!-- Hero -->
    <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
            Short-Term Program
          </span>
        </div>

        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          IET Program
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A 3-month focused program designed to provide practical exposure, industry orientation,
          and structured capability building for learners, innovators, and emerging professionals.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/courses/iet/apply"
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
            Industry-Oriented Learning in a Compact Format
          </h2>

          <div class="mt-6 space-y-4 text-gray-600">
            <p>
              The IET Program is designed for participants who want a short-duration but meaningful
              engagement with industry-relevant learning, practical exposure, and focused skill development.
            </p>
            <p>
              Over a period of 3 months, the program supports structured learning through guided sessions,
              application-oriented exposure, and engagement with real-world tools, workflows, or problem contexts.
            </p>
            <p>
              It is suited for learners who want to build stronger readiness for technical work,
              innovation environments, or future advanced programs.
            </p>
          </div>
        </div>

        <div class="rounded-3xl bg-gray-50 p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">Program Snapshot</h3>
          <div class="mt-6 space-y-4 text-sm text-gray-700">
            <p><strong class="text-gray-900">Mode:</strong> Structured / Short-Term</p>
            <p><strong class="text-gray-900">Duration:</strong> 3 Months</p>
            <p><strong class="text-gray-900">Format:</strong> Industry-oriented learning</p>
            <p><strong class="text-gray-900">Focus:</strong> Practical exposure, applied capability, technical readiness</p>
            <p><strong class="text-gray-900">Suitable For:</strong> Students, fresh graduates, learners, and early professionals</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Why This Program
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
          <h3 class="text-2xl font-bold text-gray-900">Who This Program Is For</h3>
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
          Ready to join the IET Program?
        </h3>
        <p class="mt-3 text-teal-100">
          Apply now to register your interest and learn more about participation, format, and upcoming cohorts.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/courses/iet/apply"
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
    title: 'Short-Term Structure',
    description:
      'A focused 3-month format designed for compact but meaningful learning and capability development.',
    icon: '⏱️',
  },
  {
    title: 'Industry Orientation',
    description:
      'Built to expose participants to practical, real-world contexts, tools, and expectations.',
    icon: '🏭',
  },
  {
    title: 'Applied Learning',
    description:
      'Encourages hands-on understanding and practical engagement rather than only theoretical exposure.',
    icon: '🛠️',
  },
  {
    title: 'Skill Readiness',
    description:
      'Helps participants strengthen technical confidence and readiness for future work or advanced pathways.',
    icon: '📈',
  },
  {
    title: 'Guided Engagement',
    description:
      'Offers structured mentoring and learning support over the course of the program.',
    icon: '🧭',
  },
  {
    title: 'Future Pathway',
    description:
      'Can serve as a preparatory step toward higher-level learning, technical projects, or innovation programs.',
    icon: '🚀',
  },
]

const audience: string[] = [
  'Students seeking applied technical exposure',
  'Fresh graduates building practical readiness',
  'Learners exploring industry-oriented programs',
  'Early professionals looking to strengthen focused capabilities',
]

const outcomes: string[] = [
  'Improved industry-facing understanding',
  'Stronger applied and practical confidence',
  'Better readiness for technical and innovation environments',
  'A structured short-term learning experience with real relevance',
]
</script>