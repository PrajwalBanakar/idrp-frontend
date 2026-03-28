<template>
  <section class="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          Programs
        </span>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Supporting startups from idea to scale
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Structured programs and initiatives designed to help founders validate, build, and grow
          impactful ventures.
        </p>
      </div>

      <div class="space-y-12 lg:space-y-14">
        <div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-slate-900 sm:text-2xl">Incubation Programs</h3>
            <p class="mt-1 text-sm text-slate-500 sm:text-base">
              From early validation to growth and scale.
            </p>
          </div>

          <div class="grid gap-6">
            <article
              v-for="program in programs"
              :key="program.title"
              class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-7"
              @click="goToProgram(program.detailsTo)"
            >
              <div class="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span
                    class="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
                  >
                    {{ program.duration }}
                  </span>

                  <h3 class="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                    {{ program.title }}
                  </h3>
                </div>

                <div class="sm:pr-2">
                  <RouterLink
                    :to="program.applyTo"
                    class="relative z-10 inline-flex min-w-[120px] items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg"
                    @click.stop
                  >
                    Apply
                  </RouterLink>
                </div>
              </div>

              <p class="mb-5 text-sm leading-7 text-slate-600 sm:text-base">
                {{ program.description }}
              </p>

              <div class="grid gap-2.5 sm:grid-cols-2">
                <div
                  v-for="feature in program.features"
                  :key="feature"
                  class="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <svg
                    class="h-4 w-4 shrink-0 text-teal-600"
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
            </article>
          </div>
        </div>

        <div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-slate-900 sm:text-2xl">Government Initiatives</h3>
            <p class="mt-1 text-sm text-slate-500 sm:text-base">
              Programs that strengthen infrastructure, research, and innovation.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <RouterLink
              v-for="item in governmentPrograms"
              :key="item.title"
              :to="item.route"
              class="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-7"
            >
              <div
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-all group-hover:bg-teal-700 group-hover:text-white"
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

              <h4
                class="text-lg font-semibold text-slate-900 transition-colors group-hover:text-teal-700 sm:text-xl"
              >
                {{ item.title }}
              </h4>

              <p class="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {{ item.description }}
              </p>

              <div
                class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-all group-hover:gap-3"
              >
                Explore
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
import { RouterLink, useRouter } from 'vue-router'
import type { GovernmentProgram, Program } from '@/data/home'

defineProps<{
  programs: Program[]
  governmentPrograms: GovernmentProgram[]
}>()

const router = useRouter()

function goToProgram(path: string) {
  router.push(path)
}
</script>
