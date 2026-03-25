<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          What We Offer
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Our Impact</h2>
        <p class="mx-auto mt-3 max-w-xl text-gray-500">
          Building the deep-tech ecosystem that transforms ambitious ideas into globally
          competitive ventures.
        </p>
      </div>

      <div class="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="card in impactCards"
          :key="card.title"
          class="group cursor-default rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
        >
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white"
          >
            <span v-html="card.icon" class="h-6 w-6" />
          </div>

          <h3 class="mb-2 text-lg font-bold text-gray-900">
            {{ card.title }}
          </h3>

          <p class="text-sm leading-relaxed text-gray-500">
            {{ card.description }}
          </p>
        </div>
      </div>

      <div class="rounded-3xl bg-gradient-to-br from-teal-700 to-cyan-600 px-10 py-14">
        <div class="mb-12 text-center">
          <h3 class="text-3xl font-bold text-white">By the Numbers</h3>
          <p class="mt-2 text-teal-100">A decade of impact across India's deep-tech landscape</p>
        </div>

        <div ref="statsSectionRef" class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div v-for="stat in animatedStats" :key="stat.label" class="text-center">
            <div class="mb-1 flex items-center justify-center gap-1">
              <span class="text-2xl text-teal-200">
                <span v-html="stat.icon" />
              </span>
            </div>

            <div class="text-3xl font-extrabold text-white md:text-4xl">
              {{ stat.prefix ?? '' }}{{ stat.displayed }}{{ stat.suffix }}
            </div>

            <p class="mt-1 text-sm leading-snug text-teal-100">
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