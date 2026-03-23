<template>
  <div class="courses-view">
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
            Learning & Capacity Building
          </span>
        </div>

        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Courses & Workshops
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          IDRP offers industry-aligned learning pathways, postgraduate programs, faculty development
          initiatives, and short-duration workshops to build deep-tech capability and innovation readiness.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            What We Offer
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Structured Learning Offerings by IDRP
          </h2>
          <p class="mx-auto mt-3 max-w-3xl text-gray-500">
            These offerings are designed for students, faculty, innovators, and professionals who
            want to strengthen their technical, research, and entrepreneurial capabilities.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article
            v-for="course in courses"
            :key="course.title"
            class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400" />
            <div class="p-8">
              <div class="mb-4 flex items-center gap-3">
                <span class="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">
                  {{ course.duration }}
                </span>
                <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                  {{ course.type }}
                </span>
              </div>

              <h3 class="text-2xl font-bold text-gray-900">
                {{ course.title }}
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-gray-600">
                {{ course.description }}
              </p>

              <ul class="mt-6 space-y-2">
                <li
                  v-for="feature in course.features"
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span class="mt-0.5 text-teal-500">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <div class="mt-8">
                <RouterLink
                  :to="course.route"
                  class="inline-flex rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
                >
                  Explore
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <h3 class="text-3xl font-bold text-white">
          Looking for the right learning pathway?
        </h3>
        <p class="mt-3 text-teal-100">
          Whether you are a learner, faculty member, or industry professional, IDRP can help you
          identify the most suitable course or workshop.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/courses/online-mtech"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            Explore Online M.Tech
          </RouterLink>

          <RouterLink
            to="/contact"
            class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

type CourseCard = {
  title: string
  duration: string
  type: string
  description: string
  route: string
  features: string[]
}

const courses: CourseCard[] = [
  {
    title: 'Online M.Tech Program',
    duration: '2 Years',
    type: 'Postgraduate Program',
    description:
      'A structured online postgraduate program designed to build advanced capability in deep-tech, applied AI, research-oriented problem solving, and innovation-led engineering practice.',
    route: '/courses/online-mtech',
    features: [
      'Online delivery for working professionals and learners',
      'Advanced technical and research-oriented learning',
      'Industry and innovation relevance',
      'Designed for long-term capability building',
    ],
  },
  {
    title: 'IET Program',
    duration: '3 Months',
    type: 'Short-Term Program',
    description:
      'A focused learning track intended to provide practical exposure, applied technical grounding, and industry-facing learning for emerging innovators and professionals.',
    route: '/courses/iet',
    features: [
      'Short-duration structured engagement',
      'Practical orientation',
      'Focused skill-building',
      'Industry relevance',
    ],
  },
  {
    title: 'Faculty Development Program (FDP)',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A compact faculty-focused program to strengthen pedagogy, technology awareness, research alignment, and emerging domain readiness.',
    route: '/courses/fdp',
    features: [
      'Faculty upskilling',
      'Emerging technology orientation',
      'Pedagogy and research alignment',
      'Short and intensive format',
    ],
  },
  {
    title: '3DW',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A hands-on short workshop format designed for rapid technical immersion, focused learning outcomes, and applied exposure to specific tools or themes.',
    route: '/courses/3dw',
    features: [
      'Hands-on learning',
      'Focused technical immersion',
      'Short-format delivery',
      'Practical outcomes',
    ],
  },
]
</script>