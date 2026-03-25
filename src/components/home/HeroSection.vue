<template>
  <section
    class="relative min-h-[88vh] overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-600"
  >
    <div
      v-for="(slide, index) in heroSlides"
      :key="slide.heading"
      class="absolute inset-0 flex items-center px-6 transition-opacity duration-1000 ease-in-out md:px-12 lg:px-24"
      :class="currentSlide === index ? 'z-10 opacity-100' : 'z-0 opacity-0'"
    >
      <div class="w-full pr-0 text-white md:w-1/2 md:pr-12">
        <h1
          class="mb-6 text-4xl font-bold leading-tight transition-all duration-700 md:text-5xl"
          :class="currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          {{ slide.heading }}
        </h1>

        <p
          class="mb-10 text-lg leading-relaxed text-teal-100 transition-all delay-100 duration-700 md:text-xl"
          :class="currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          {{ slide.subtext }}
        </p>
      </div>

      <div class="hidden w-1/2 items-center justify-center md:flex">
        <div
          class="h-[320px] w-[420px] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/20"
        >
          <img
            :src="slide.image"
            :alt="slide.heading"
            class="h-full w-full object-cover transition-transform duration-700"
            :class="currentSlide === index ? 'scale-100' : 'scale-105'"
          />
        </div>
      </div>
    </div>

    <div class="absolute bottom-24 left-6 z-20 flex flex-wrap gap-4 md:left-12 lg:left-24">
      <RouterLink
        to="/incubation"
        class="rounded-full bg-white px-6 py-3 font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50"
      >
        Explore our Programs
      </RouterLink>

      <RouterLink
        to="/contact"
        class="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-teal-700"
      >
        Join Our Community
      </RouterLink>
    </div>

    <div class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
      <button
        v-for="(_, index) in heroSlides"
        :key="index"
        type="button"
        :aria-label="`Go to slide ${index + 1}`"
        class="h-2 rounded-full transition-all duration-300"
        :class="currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/40'"
        @click="goToSlide(index)"
      />
    </div>

    <button
      type="button"
      aria-label="Previous slide"
      class="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
      @click="prevSlide"
    >
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      type="button"
      aria-label="Next slide"
      class="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
      @click="nextSlide"
    >
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { HeroSlide } from '@/data/home'

const props = defineProps<{
  heroSlides: HeroSlide[]
}>()

const currentSlide = ref(0)

let slideTimer: number | undefined

function goToSlide(index: number) {
  currentSlide.value = index
  restartSlideTimer()
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % props.heroSlides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + props.heroSlides.length) % props.heroSlides.length
  restartSlideTimer()
}

function startSlideTimer() {
  slideTimer = window.setInterval(nextSlide, 5000)
}

function stopSlideTimer() {
  if (slideTimer !== undefined) {
    window.clearInterval(slideTimer)
    slideTimer = undefined
  }
}

function restartSlideTimer() {
  stopSlideTimer()
  startSlideTimer()
}

onMounted(() => {
  startSlideTimer()
})

onUnmounted(() => {
  stopSlideTimer()
})
</script>