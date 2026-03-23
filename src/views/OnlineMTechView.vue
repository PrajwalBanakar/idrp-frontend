<template>
  <div class="online-mtech-view">
    <!-- Hero -->
    <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />
      <div
        class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
      />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
            Postgraduate Program
          </span>
        </div>

        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Online M.Tech Program
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A 2-year online postgraduate pathway designed to strengthen advanced technical competence,
          applied research thinking, and innovation-led problem solving for next-generation
          engineers and professionals.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/courses/online-mtech/apply"
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
            Flexible Advanced Learning for Deep-Tech and Innovation
          </h2>

          <div class="mt-6 space-y-4 text-gray-600">
            <p>
              The Online M.Tech Program is intended for learners who want advanced postgraduate
              education without stepping away from their current academic, professional, or personal
              commitments.
            </p>
            <p>
              The program is designed to combine conceptual depth, applied engineering thinking,
              research orientation, and industry relevance. It can support learners who want to move
              toward deeper specialization, stronger problem-solving ability, and innovation-focused
              practice.
            </p>
            <p>
              With a 2-year format, the program enables sustained academic engagement while
              supporting flexibility in participation and continuity in learning.
            </p>
          </div>
        </div>

        <div class="rounded-3xl bg-gray-50 p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">Program Snapshot</h3>
          <div class="mt-6 space-y-4 text-sm text-gray-700">
            <p><strong class="text-gray-900">Mode:</strong> Online</p>
            <p><strong class="text-gray-900">Duration:</strong> 2 Years</p>
            <p><strong class="text-gray-900">Format:</strong> Structured postgraduate learning</p>
            <p>
              <strong class="text-gray-900">Focus:</strong> Advanced technical capability, applied
              research, innovation readiness
            </p>
            <p>
              <strong class="text-gray-900">Suitable For:</strong> Learners, professionals, advanced
              aspirants, and research-oriented candidates
            </p>
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
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Key Highlights</h2>
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

    <!-- Who is it for -->
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
              <span
                class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white"
              >
                ✓
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">What Learners Can Expect</h3>
          <ul class="mt-6 space-y-4">
            <li
              v-for="item in outcomes"
              :key="item"
              class="flex items-start gap-3 text-sm text-gray-700"
            >
              <span
                class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold text-white"
              >
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
        <h3 class="text-3xl font-bold text-white">Interested in the Online M.Tech Program?</h3>
        <p class="mt-3 text-teal-100">
          Reach out to IDRP to learn more about the program, application process, and future
          updates.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/courses/online-mtech/apply"
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
    title: 'Online Flexibility',
    description:
      'Supports postgraduate learning through an online format that enables continuity alongside other commitments.',
    icon: '💻',
  },
  {
    title: 'Advanced Technical Depth',
    description:
      'Intended to strengthen conceptual understanding and deeper capability in advanced engineering and emerging technology domains.',
    icon: '🧠',
  },
  {
    title: 'Research Orientation',
    description:
      'Encourages analytical thinking, applied inquiry, and research-driven problem solving.',
    icon: '🔬',
  },
  {
    title: 'Industry Relevance',
    description:
      'Built to align learning with real-world problems, innovation needs, and application contexts.',
    icon: '🏭',
  },
  {
    title: 'Innovation Readiness',
    description:
      'Supports learners who want to connect academic depth with product thinking, systems perspective, and innovation practice.',
    icon: '🚀',
  },
  {
    title: 'Long-Term Capability Building',
    description:
      'Designed as a sustained 2-year journey for serious postgraduate growth and specialization.',
    icon: '📘',
  },
]

const audience: string[] = [
  'Graduates seeking advanced postgraduate technical learning',
  'Working professionals who need a flexible online format',
  'Learners interested in applied research and deep-tech capability',
  'Individuals aiming to strengthen innovation and problem-solving orientation',
]

const outcomes: string[] = [
  'Stronger advanced technical understanding',
  'Better research and analytical problem-solving capability',
  'Improved innovation-oriented thinking and application readiness',
  'A structured pathway for long-term professional and academic growth',
]
</script>
