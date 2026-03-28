<template>
  <section class="bg-slate-50 px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          Our Impact
        </span>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Building a stronger innovation ecosystem
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          From incubation and research support to partnerships and talent development, IDRP is
          designed to help innovation move forward with clarity, collaboration, and measurable
          outcomes.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="card in impactCards"
          :key="card.title"
          class="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
        >
          <div
            class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white"
          >
            <span v-html="card.icon" class="h-6 w-6" />
          </div>

          <h3 class="text-xl font-semibold text-slate-900">
            {{ card.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            {{ card.description }}
          </p>
        </article>
      </div>

      <div class="mt-12 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl lg:mt-14">
        <div class="bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-700 px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div class="mx-auto max-w-3xl text-center">
            <h3 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              By the numbers
            </h3>
            <p class="mt-3 text-sm leading-6 text-teal-100 sm:text-base">
              A snapshot of the scale, reach, and momentum of the ecosystem being built.
            </p>
          </div>
        </div>

        <div
          ref="statsSectionRef"
          class="grid grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-12"
        >
          <div
            v-for="stat in animatedStats"
            :key="stat.label"
            class="text-center"
          >
            <div class="mb-3 flex items-center justify-center text-teal-300">
              <span v-html="stat.icon" class="h-6 w-6" />
            </div>

            <div class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {{ stat.prefix ?? '' }}{{ stat.displayed }}{{ stat.suffix }}
            </div>

            <p class="mt-2 text-sm leading-6 text-slate-300">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { IconCard, Stat } from '@/data/home'

type AnimatedStat = Stat & {
  displayed: number
}

const props = defineProps<{
  impactCards: IconCard[]
  stats: Stat[]
}>()

const statsSectionRef = ref<HTMLElement | null>(null)

const animatedStats = ref<AnimatedStat[]>(
  props.stats.map((stat) => ({
    ...stat,
    displayed: 0,
  })),
)

let statsObserver: IntersectionObserver | null = null
let hasAnimatedStats = false

function animateStats() {
  if (hasAnimatedStats) return
  hasAnimatedStats = true

  animatedStats.value.forEach((stat) => {
    const duration = 1800
    const steps = 60
    let current = 0
    const increment = stat.target / steps

    const interval = window.setInterval(() => {
      current += increment

      if (current >= stat.target) {
        stat.displayed = stat.target
        window.clearInterval(interval)
        return
      }

      stat.displayed = Math.round(current)
    }, duration / steps)
  })
}

onMounted(() => {
  statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateStats()
        statsObserver?.disconnect()
      }
    },
    { threshold: 0.2 },
  )

  if (statsSectionRef.value) {
    statsObserver.observe(statsSectionRef.value)
  }
})

onUnmounted(() => {
  statsObserver?.disconnect()
})
</script>