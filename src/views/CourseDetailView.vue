<template>
  <div v-if="coursePage" class="course-detail-view">
    <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
            {{ coursePage.eyebrow }}
          </span>
        </div>

        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          {{ coursePage.heroTitle }}
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-teal-100 md:text-lg">
          {{ coursePage.heroDescription }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            :to="coursePage.applyRoute"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            Apply Now
          </RouterLink>

          <RouterLink
            :to="coursePage.enquireRoute"
            class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Enquire Now
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Overview
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            {{ coursePage.overviewTitle }}
          </h2>

          <div class="mt-6 space-y-4 text-gray-600">
            <p v-for="paragraph in coursePage.overviewParagraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="rounded-3xl bg-gray-50 p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">
            {{ coursePage.snapshotTitle }}
          </h3>

          <div class="mt-6 space-y-4 text-sm text-gray-700">
            <p v-for="item in coursePage.snapshotItems" :key="item.label">
              <strong class="text-gray-900">{{ item.label }}:</strong>
              {{ item.value }}
            </p>
          </div>
        </div>
      </div>
    </section>

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
            v-for="item in coursePage.highlights"
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

    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900">Who This Program Is For</h3>
          <ul class="mt-6 space-y-4">
            <li
              v-for="item in coursePage.audience"
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
          <h3 class="text-2xl font-bold text-gray-900">What Participants Can Expect</h3>
          <ul class="mt-6 space-y-4">
            <li
              v-for="item in coursePage.outcomes"
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

    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <h3 class="text-3xl font-bold text-white">
          {{ coursePage.ctaTitle }}
        </h3>

        <p class="mt-3 text-teal-100">
          {{ coursePage.ctaDescription }}
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            :to="coursePage.applyRoute"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            Apply Now
          </RouterLink>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="px-6 py-24 md:px-16">
    <div class="mx-auto max-w-3xl rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
      <h1 class="text-2xl font-bold text-red-700">Course not found</h1>
      <p class="mt-3 text-sm text-red-600">
        The requested course page does not exist.
      </p>
      <RouterLink
        to="/technical-education-academy"
        class="mt-6 inline-flex rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
      >
        Back to Academy
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getCourseDetailPageBySlug } from '@/data/courses'

const route = useRoute()

const coursePage = computed(() => {
  const slug = String(route.params.slug ?? '')
  return getCourseDetailPageBySlug(slug)
})
</script>