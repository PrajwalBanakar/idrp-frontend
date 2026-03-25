<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span
          class="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-teal-700"
        >
          Call for Applications
        </span>
        <h2 class="text-4xl font-bold text-gray-900">Our Programs</h2>
        <p class="mt-3 text-lg text-gray-500">Guiding startups from idea to scale</p>
      </div>

      <div class="mx-auto max-w-5xl space-y-14">
        <!-- Incubation Programs -->
        <div>
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Incubation Programs</h3>
            <p class="mt-2 text-gray-500">
              Guiding startups from idea validation to growth and scale.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6">
            <RouterLink
              v-for="program in programs"
              :key="program.title"
              :to="program.detailsTo"
              class="block overflow-hidden rounded-2xl border border-gray-200 transition-all duration-300 hover:border-teal-200 hover:shadow-xl"
            >
              <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400" />

              <div class="p-8">
                <div
                  class="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <span
                      class="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
                    >
                      {{ program.duration }}
                    </span>
                    <h3 class="mt-3 text-2xl font-bold text-gray-900">
                      {{ program.title }}
                    </h3>
                  </div>

                  <RouterLink
                    :to="program.applyTo"
                    class="relative z-10 shrink-0 self-start whitespace-nowrap rounded-xl bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 sm:self-center"
                    @click.stop
                  >
                    Apply Now
                  </RouterLink>
                </div>

                <p class="mb-6 text-sm leading-relaxed text-gray-500">
                  {{ program.description }}
                </p>

                <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div
                    v-for="feature in program.features"
                    :key="feature"
                    class="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <svg
                      class="h-4 w-4 shrink-0 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {{ feature }}
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- Government Initiatives -->
        <div>
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Government Initiatives</h3>
            <p class="mt-2 text-gray-500">
              Strategic government-supported programs that strengthen innovation, research,
              infrastructure, and entrepreneurship.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <RouterLink
              v-for="item in governmentPrograms"
              :key="item.title"
              :to="item.route"
              class="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal-200 hover:shadow-xl"
            >
              <div
                class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 21h18M4 18h16M6 18V7l6-4 6 4v11M9 10h.01M12 10h.01M15 10h.01"
                  />
                </svg>
              </div>

              <h4 class="text-xl font-bold text-gray-900 transition-colors group-hover:text-teal-700">
                {{ item.title }}
              </h4>

              <p class="mt-3 text-sm leading-relaxed text-gray-500">
                {{ item.description }}
              </p>

              <div
                class="mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 transition-all duration-200 group-hover:gap-3"
              >
                Explore
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { GovernmentProgram, Program } from '@/data/home'

defineProps<{
  programs: Program[]
  governmentPrograms: GovernmentProgram[]
}>()
</script>