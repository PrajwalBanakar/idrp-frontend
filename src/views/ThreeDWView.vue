<template>
  <div class="three-dw-view">
    <!-- Hero -->
    <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
            Workshop Program
          </span>
        </div>

        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          3DW
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          A 2-day focused workshop designed for rapid technical immersion, hands-on exposure, and
          applied learning in targeted themes and tools.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/courses/3dw/apply"
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
            Rapid Skill-Building Through Focused Hands-On Workshops
          </h2>

          <div class="mt-6 space-y-4 text-gray-600">
            <p>
              3DW is intended as a compact technical workshop format that enables participants to
              engage deeply with a focused topic within a short duration.
            </p>
            <p>
              The workshop supports hands-on exposure, guided practice, and application-oriented
              learning. It is designed for learners who want practical immersion rather than a long-term program.
            </p>
            <p>
              With its short and intensive format, 3DW can be used to introduce tools, methods,
              concepts, or emerging domains in a way that is immediate, structured, and outcome-focused.
            </p>
          </div>
        </div>

        <div class="rounded-3xl bg-gray-50 p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">Program Snapshot</h3>
          <div class="mt-6 space-y-4 text-sm text-gray-700">
            <p><strong class="text-gray-900">Mode:</strong> Workshop Format</p>
            <p><strong class="text-gray-900">Duration:</strong> 2 Days</p>
            <p><strong class="text-gray-900">Type:</strong> Hands-On Workshop</p>
            <p><strong class="text-gray-900">Focus:</strong> Technical immersion, practical learning, skill-building</p>
            <p><strong class="text-gray-900">Suitable For:</strong> Students, learners, professionals, and workshop participants</p>
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
          Ready to join the 3DW workshop?
        </h3>
        <p class="mt-3 text-teal-100">
          Apply now to register your interest and learn more about workshop themes, participation,
          and upcoming schedules.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/courses/3dw/apply"
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
    title: 'Short Intensive Format',
    description:
      'A focused 2-day structure designed for rapid learning and meaningful exposure within a compact timeline.',
    icon: '⏱️',
  },
  {
    title: 'Hands-On Practice',
    description:
      'Encourages direct engagement with tools, methods, or technical tasks through guided activities.',
    icon: '🛠️',
  },
  {
    title: 'Applied Learning',
    description:
      'Moves beyond theory to support practical understanding and immediate relevance.',
    icon: '📘',
  },
  {
    title: 'Focused Technical Themes',
    description:
      'Can be organized around specific domains, toolchains, concepts, or emerging technologies.',
    icon: '💡',
  },
  {
    title: 'Accessible Workshop Model',
    description:
      'Suitable for a broad range of learners who want quick immersion without a long-duration commitment.',
    icon: '🎯',
  },
  {
    title: 'Immediate Skill Exposure',
    description:
      'Helps participants gain confidence and foundational exposure that can be built upon later.',
    icon: '🚀',
  },
]

const audience: string[] = [
  'Students looking for hands-on technical workshops',
  'Learners seeking quick immersion in a focused topic',
  'Professionals wanting short-duration upskilling',
  'Participants interested in practical exposure to tools or methods',
]

const outcomes: string[] = [
  'Better familiarity with a specific technical topic or tool',
  'Hands-on exposure through guided workshop participation',
  'Improved practical confidence in short-duration learning settings',
  'A compact and focused workshop experience with direct relevance',
]
</script>