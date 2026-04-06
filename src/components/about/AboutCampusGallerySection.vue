<template>
  <section class="bg-white px-4 py-14 sm:px-6 md:px-12 lg:px-16 lg:py-16">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
        <span
          v-if="section.eyebrow"
          class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700"
        >
          {{ section.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {{ section.title }}
        </h2>

        <p
          v-if="section.description"
          class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
        >
          {{ section.description }}
        </p>
      </div>

      <div
        v-if="images.length"
        class="relative"
        @mouseenter="pauseAutoSlide"
        @mouseleave="startAutoSlide"
        @touchstart.passive="handleTouchStart"
        @touchend.passive="handleTouchEnd"
      >
        <div class="relative mx-auto h-[320px] sm:h-[360px] lg:h-[420px]">
          <button
            type="button"
            aria-label="Previous slide"
            class="absolute left-0 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-800 shadow-md transition hover:border-teal-200 hover:text-teal-700 md:flex"
            @click="goToPrevious"
          >
            ‹
          </button>

          <div class="relative h-full w-full overflow-hidden">
            <div
              v-for="(image, index) in visibleSlides"
              :key="`${image.id}-${index}`"
              class="absolute left-1/2 top-1/2 transition-all duration-500 ease-out"
              :class="getSlideClass(index)"
              :style="getSlideStyle(index)"
            >
              <div
                class="group relative overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-slate-200"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="h-[260px] w-[88vw] max-w-[360px] object-cover sm:h-[250px] sm:w-[320px] lg:h-[300px] lg:w-[430px]"
                  loading="lazy"
                />

                <div
                  v-if="index === centerSlideIndex"
                  class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-4"
                >
                  <div class="inline-flex max-w-[92%] rounded-2xl bg-white/92 px-4 py-2 shadow-md backdrop-blur">
                    <h3 class="text-sm font-semibold text-slate-900 sm:text-base">
                      {{ image.title }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Next slide"
            class="absolute right-0 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-800 shadow-md transition hover:border-teal-200 hover:text-teal-700 md:flex"
            @click="goToNext"
          >
            ›
          </button>
        </div>

        <div class="mt-6 flex items-center justify-center gap-2">
          <button
            v-for="(image, index) in images"
            :key="image.id"
            type="button"
            :aria-label="`Go to slide ${index + 1}`"
            class="rounded-full transition-all duration-300"
            :class="
              index === currentIndex
                ? 'h-2.5 w-8 bg-teal-600'
                : 'h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400'
            "
            @click="goToSlide(index)"
          />
        </div>

        <div class="mt-3 hidden text-center text-sm text-slate-500 sm:block">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { AboutCampusGalleryImage, AboutSectionIntro } from '@/types/about'

const props = defineProps<{
  section: AboutSectionIntro
  images: AboutCampusGalleryImage[]
}>()

const currentIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)
const autoSlideInterval = ref<number | null>(null)

const centerSlideIndex = 1

const fallbackImage: AboutCampusGalleryImage = {
  id: 'fallback',
  src: '',
  alt: '',
  title: '',
}

function normalizeIndex(index: number) {
  const length = props.images.length
  if (!length) return 0
  return (index + length) % length
}

function getImageAt(index: number): AboutCampusGalleryImage {
  return props.images[normalizeIndex(index)] ?? fallbackImage
}

const visibleSlides = computed<AboutCampusGalleryImage[]>(() => {
  if (!props.images.length) return []

  return [
    getImageAt(currentIndex.value - 1),
    getImageAt(currentIndex.value),
    getImageAt(currentIndex.value + 1),
  ]
})

function getSlideClass(index: number) {
  if (index === centerSlideIndex) {
    return 'z-20'
  }

  return 'z-10 hidden sm:block'
}

function getSlideStyle(index: number) {
  if (index === centerSlideIndex) {
    return {
      transform: 'translate(-50%, -50%) scale(1)',
      opacity: '1',
    }
  }

  if (index === 0) {
    return {
      transform: 'translate(-135%, -50%) scale(0.88)',
      opacity: '0.5',
    }
  }

  return {
    transform: 'translate(35%, -50%) scale(0.88)',
    opacity: '0.5',
  }
}

function goToSlide(index: number) {
  currentIndex.value = index
  restartAutoSlide()
}

function goToPrevious() {
  if (!props.images.length) return
  currentIndex.value = normalizeIndex(currentIndex.value - 1)
  restartAutoSlide()
}

function goToNext() {
  if (!props.images.length) return
  currentIndex.value = normalizeIndex(currentIndex.value + 1)
  restartAutoSlide()
}

function goToNextWithoutRestart() {
  if (!props.images.length) return
  currentIndex.value = normalizeIndex(currentIndex.value + 1)
}

function startAutoSlide() {
  if (autoSlideInterval.value !== null || props.images.length <= 1) return

  autoSlideInterval.value = window.setInterval(() => {
    goToNextWithoutRestart()
  }, 4500)
}

function pauseAutoSlide() {
  if (autoSlideInterval.value !== null) {
    window.clearInterval(autoSlideInterval.value)
    autoSlideInterval.value = null
  }
}

function restartAutoSlide() {
  pauseAutoSlide()
  startAutoSlide()
}

function handleTouchStart(event: TouchEvent) {
  touchStartX.value = event.changedTouches[0]?.clientX ?? 0
}

function handleTouchEnd(event: TouchEvent) {
  touchEndX.value = event.changedTouches[0]?.clientX ?? 0
  const diff = touchStartX.value - touchEndX.value

  if (diff > 50) goToNext()
  else if (diff < -50) goToPrevious()
}

watch(
  () => props.images.length,
  () => {
    if (currentIndex.value >= props.images.length) {
      currentIndex.value = 0
    }
    restartAutoSlide()
  }
)

onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  pauseAutoSlide()
})
</script>