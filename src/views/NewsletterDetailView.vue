<template>
  <div v-if="newsletter" class="min-h-screen bg-[#f5efe4]">
    <section class="px-4 py-6 md:px-8 lg:px-12">
      <div class="mx-auto max-w-5xl">
        <!-- Header -->
        <div class="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <RouterLink
              to="/resources"
              class="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
            >
              ← Back to Resources
            </RouterLink>

            <h1 class="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              {{ newsletter.title }}
            </h1>

            <p class="mt-1 text-sm text-slate-600">
              {{ newsletter.issue }} · {{ newsletter.date }}
            </p>
          </div>

          <div class="text-sm font-semibold text-slate-600">
            {{ spreadLabel }}
          </div>
        </div>

        <!-- Reader -->
        <div class="relative">
          <!-- Desktop left arrow -->
          <button
            type="button"
            class="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white/95 text-lg font-bold text-slate-700 shadow-lg transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 lg:inline-flex"
            :disabled="!canGoPrev"
            aria-label="Previous spread"
            @click="goPrev"
          >
            ←
          </button>

          <!-- Desktop right arrow -->
          <button
            type="button"
            class="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white/95 text-lg font-bold text-slate-700 shadow-lg transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 lg:inline-flex"
            :disabled="!canGoNext"
            aria-label="Next spread"
            @click="goNext"
          >
            →
          </button>

          <div
            class="rounded-[1.75rem] border border-[#d8cfbf] bg-[#e9decb] p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] md:p-4"
          >
            <transition :name="flipDirection" mode="out-in">
              <div
                :key="spreadKey"
                class="grid h-[480px] grid-cols-1 overflow-hidden rounded-[1.35rem] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.12)] lg:h-[560px] lg:grid-cols-2"
              >
                <!-- Left page -->
                <article
                  class="relative flex h-full flex-col overflow-hidden border-b border-slate-200 px-5 py-5 lg:border-b-0 lg:border-r lg:px-7 lg:py-6"
                >
                  <div
                    class="absolute right-0 top-0 hidden h-full w-6 bg-gradient-to-l from-slate-100/80 to-transparent lg:block"
                  />

                  <div class="min-h-0 flex-1 overflow-y-auto pr-1">
                    <!-- Intro page -->
                    <template v-if="leftPage.type === 'intro'">
                      <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-teal-600">
                        Newsletter Intro
                      </p>

                      <h2 class="mt-2 text-2xl font-bold leading-tight text-slate-900 lg:text-3xl">
                        {{ newsletter.title }}
                      </h2>

                      <p class="mt-2 text-sm font-medium text-slate-500">
                        {{ newsletter.issue }} · {{ newsletter.date }}
                      </p>

                      <p class="mt-5 text-sm leading-6 text-slate-700">
                        {{ newsletter.preview }}
                      </p>

                      <div class="mt-5">
                        <h3 class="text-xs font-bold uppercase tracking-widest text-slate-500">
                          In this issue
                        </h3>

                        <ul class="mt-3 space-y-2.5">
                          <li
                            v-for="point in newsletter.highlights"
                            :key="point"
                            class="rounded-xl bg-slate-50 px-3 py-2.5 text-sm leading-6 text-slate-700"
                          >
                            {{ point }}
                          </li>
                        </ul>
                      </div>
                    </template>

                    <!-- Content page -->
                    <template v-else-if="leftPage.type === 'content'">
                      <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-teal-600">
                        Newsletter Page
                      </p>

                      <h2 class="mt-2 text-2xl font-bold leading-tight text-slate-900 lg:text-3xl">
                        {{ leftPage.page.title }}
                      </h2>

                      <p
                        v-if="leftPage.page.subtitle"
                        class="mt-1.5 text-sm font-medium text-slate-500"
                      >
                        {{ leftPage.page.subtitle }}
                      </p>

                      <div class="mt-5 space-y-4">
                        <p
                          v-for="paragraph in leftPage.page.body"
                          :key="paragraph"
                          class="text-sm leading-6 text-slate-700"
                        >
                          {{ paragraph }}
                        </p>

                        <div
                          v-if="leftPage.page.highlight"
                          class="rounded-xl bg-teal-50 px-4 py-3 text-sm font-medium leading-6 text-teal-900"
                        >
                          {{ leftPage.page.highlight }}
                        </div>
                      </div>
                    </template>

                    <!-- Blank -->
                    <template v-else>
                      <div class="flex h-full items-center justify-center">
                        <p class="text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
                          End of issue
                        </p>
                      </div>
                    </template>
                  </div>

                  <div class="mt-4 pt-3 text-right text-xs font-medium text-slate-400">
                    {{ leftPageNumberLabel }}
                  </div>
                </article>

                <!-- Right page -->
                <article
                  class="relative flex h-full flex-col overflow-hidden px-5 py-5 lg:px-7 lg:py-6"
                >
                  <div
                    class="absolute left-0 top-0 hidden h-full w-6 bg-gradient-to-r from-slate-100/80 to-transparent lg:block"
                  />

                  <div class="min-h-0 flex-1 overflow-y-auto pr-1">
                    <!-- Cover -->
                    <template v-if="rightPage.type === 'cover'">
                      <div
                        class="relative flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-[1.1rem] p-6 text-white lg:p-7"
                        :style="{ background: newsletter.coverGradient }"
                      >
                        <div
                          class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"
                        />
                        <div class="absolute left-0 top-0 h-full w-6 bg-black/15" />
                        <div
                          class="absolute right-0 top-3 h-[calc(100%-1.5rem)] w-2.5 rounded-r-xl bg-white/70"
                        />

                        <div class="relative">
                          <span
                            class="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                          >
                            {{ newsletter.issue }}
                          </span>
                        </div>

                        <div class="relative">
                          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                            IDRP Newsletter
                          </p>

                          <h2 class="text-2xl font-extrabold leading-tight lg:text-4xl">
                            {{ newsletter.title }}
                          </h2>

                          <p class="mt-4 text-sm leading-6 text-white/90">
                            {{ newsletter.description }}
                          </p>

                          <p class="mt-5 text-sm font-medium text-white/80">
                            {{ newsletter.date }}
                          </p>
                        </div>

                        <div class="relative text-[11px] uppercase tracking-[0.24em] text-white/75">
                          Use arrows or keyboard
                        </div>
                      </div>
                    </template>

                    <!-- Content -->
                    <template v-else-if="rightPage.type === 'content'">
                      <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-teal-600">
                        Newsletter Page
                      </p>

                      <h2 class="mt-2 text-2xl font-bold leading-tight text-slate-900 lg:text-3xl">
                        {{ rightPage.page.title }}
                      </h2>

                      <p
                        v-if="rightPage.page.subtitle"
                        class="mt-1.5 text-sm font-medium text-slate-500"
                      >
                        {{ rightPage.page.subtitle }}
                      </p>

                      <div class="mt-5 space-y-4">
                        <p
                          v-for="paragraph in rightPage.page.body"
                          :key="paragraph"
                          class="text-sm leading-6 text-slate-700"
                        >
                          {{ paragraph }}
                        </p>

                        <div
                          v-if="rightPage.page.highlight"
                          class="rounded-xl bg-teal-50 px-4 py-3 text-sm font-medium leading-6 text-teal-900"
                        >
                          {{ rightPage.page.highlight }}
                        </div>
                      </div>
                    </template>

                    <!-- Blank -->
                    <template v-else>
                      <div class="flex h-full items-center justify-center">
                        <p class="text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
                          End of issue
                        </p>
                      </div>
                    </template>
                  </div>

                  <div class="mt-4 pt-3 text-right text-xs font-medium text-slate-400">
                    {{ rightPageNumberLabel }}
                  </div>
                </article>
              </div>
            </transition>
          </div>

          <!-- Mobile controls -->
          <div class="mt-4 flex items-center justify-between lg:hidden">
            <button
              type="button"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="!canGoPrev"
              aria-label="Previous spread"
              @click="goPrev"
            >
              ←
            </button>

            <div class="text-center text-sm font-semibold text-slate-600">
              {{ spreadLabel }}
            </div>

            <button
              type="button"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="!canGoNext"
              aria-label="Next spread"
              @click="goNext"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="flex min-h-screen items-center justify-center bg-gray-50 px-6">
    <div class="max-w-md text-center">
      <h1 class="text-3xl font-bold text-slate-900">Newsletter not found</h1>
      <p class="mt-3 text-slate-600">
        The newsletter you are looking for does not exist or has not been published yet.
      </p>
      <RouterLink
        to="/resources"
        class="mt-6 inline-flex rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
      >
        Back to Resources
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { newsletters, type NewsletterPage } from '@/data/newsletters'

type PageSide =
  | { type: 'intro' }
  | { type: 'cover' }
  | { type: 'blank' }
  | { type: 'content'; page: NewsletterPage }

const route = useRoute()

const newsletter = computed(() => {
  const slug = String(route.params.slug || '')
  return newsletters.find((item) => item.slug === slug) || null
})

const spreadIndex = ref(0)
const flipDirection = ref<'spread-next' | 'spread-prev'>('spread-next')

const totalSpreads = computed(() => {
  if (!newsletter.value) return 0
  return 1 + Math.ceil(newsletter.value.pages.length / 2)
})

const canGoPrev = computed(() => spreadIndex.value > 0)

const canGoNext = computed(() => {
  if (!newsletter.value) return false
  return spreadIndex.value < totalSpreads.value - 1
})

const leftPage = computed<PageSide>(() => {
  if (!newsletter.value) return { type: 'blank' }

  if (spreadIndex.value === 0) {
    return { type: 'intro' }
  }

  const pageIndex = (spreadIndex.value - 1) * 2
  const page = newsletter.value.pages[pageIndex]

  return page ? { type: 'content', page } : { type: 'blank' }
})

const rightPage = computed<PageSide>(() => {
  if (!newsletter.value) return { type: 'blank' }

  if (spreadIndex.value === 0) {
    return { type: 'cover' }
  }

  const pageIndex = (spreadIndex.value - 1) * 2 + 1
  const page = newsletter.value.pages[pageIndex]

  return page ? { type: 'content', page } : { type: 'blank' }
})

const spreadKey = computed(() => `${newsletter.value?.slug || 'newsletter'}-${spreadIndex.value}`)

const spreadLabel = computed(() => {
  if (!newsletter.value) return ''
  return `Spread ${spreadIndex.value + 1} of ${totalSpreads.value}`
})

const leftPageNumberLabel = computed(() => {
  if (spreadIndex.value === 0) return 'Intro'
  const pageNo = (spreadIndex.value - 1) * 2 + 1
  return `Page ${pageNo}`
})

const rightPageNumberLabel = computed(() => {
  if (!newsletter.value) return ''
  if (spreadIndex.value === 0) return 'Cover'

  const pageNo = (spreadIndex.value - 1) * 2 + 2
  return pageNo <= newsletter.value.pages.length ? `Page ${pageNo}` : ''
})

function goNext() {
  if (!canGoNext.value) return
  flipDirection.value = 'spread-next'
  spreadIndex.value += 1
}

function goPrev() {
  if (!canGoPrev.value) return
  flipDirection.value = 'spread-prev'
  spreadIndex.value -= 1
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    goNext()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    goPrev()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})

watch(
  () => route.params.slug,
  () => {
    spreadIndex.value = 0
    flipDirection.value = 'spread-next'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { immediate: true },
)
</script>

<style scoped>
.spread-next-enter-active,
.spread-next-leave-active,
.spread-prev-enter-active,
.spread-prev-leave-active {
  transition: all 0.3s ease;
}

.spread-next-enter-from {
  opacity: 0;
  transform: translateX(18px) rotateY(-6deg);
}

.spread-next-leave-to {
  opacity: 0;
  transform: translateX(-18px) rotateY(6deg);
}

.spread-prev-enter-from {
  opacity: 0;
  transform: translateX(-18px) rotateY(6deg);
}

.spread-prev-leave-to {
  opacity: 0;
  transform: translateX(18px) rotateY(-6deg);
}
</style>