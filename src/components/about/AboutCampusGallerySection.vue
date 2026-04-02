<template>
  <section class="bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-16">
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
        class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
        @mouseenter="pauseAutoSlide"
        @mouseleave="startAutoSlide"
      >
        <div
          class="relative h-[260px] overflow-hidden bg-slate-100 sm:h-[320px] lg:h-[400px]"
          @touchstart.passive="handleTouchStart"
          @touchend.passive="handleTouchEnd"
        >
          <Transition name="fade" mode="out-in">
            <div :key="currentImage.id" class="relative h-full w-full">
              <!-- Soft blurred background fill -->
              <img
                :src="currentImage.src"
                :alt="currentImage.alt"
                class="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-25"
                loading="lazy"
                aria-hidden="true"
              />

              <div class="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-black/10" />

              <!-- Main full image -->
              <img
                :src="currentImage.src"
                :alt="currentImage.alt"
                class="relative z-10 h-full w-full object-contain px-3 py-3 sm:px-4 sm:py-4"
                loading="lazy"
              />
            </div>
          </Transition>

          <!-- Title overlay -->
          <div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
            <div class="inline-flex max-w-[85%] rounded-2xl bg-white/78 px-4 py-2.5 shadow-md backdrop-blur-md">
              <h3 class="text-sm font-semibold text-slate-900 sm:text-base">
                {{ currentImage.title }}
              </h3>
            </div>
          </div>

          <!-- Controls -->
          <button
            type="button"
            aria-label="Previous slide"
            class="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-slate-800 shadow-md backdrop-blur transition hover:bg-white md:flex"
            @click="goToPrevious"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next slide"
            class="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-slate-800 shadow-md backdrop-blur transition hover:bg-white md:flex"
            @click="goToNext"
          >
            ›
          </button>
        </div>

        <div class="flex items-center justify-between px-5 py-4">
          <div class="flex items-center gap-2">
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

          <div class="hidden text-sm text-slate-500 sm:block">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
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

const currentImage = computed<AboutCampusGalleryImage>(() => {
  return (
    props.images[currentIndex.value] ??
    props.images[0] ?? {
      id: 'fallback',
      src: '',
      alt: '',
      title: '',
    }
  )
})

function goToSlide(index: number) {
  currentIndex.value = index
  restartAutoSlide()
}

function goToPrevious() {
  if (!props.images.length) return

  currentIndex.value =
    currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1

  restartAutoSlide()
}

function goToNext() {
  if (!props.images.length) return

  currentIndex.value =
    currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1

  restartAutoSlide()
}

function goToNextWithoutRestart() {
  if (!props.images.length) return

  currentIndex.value =
    currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>