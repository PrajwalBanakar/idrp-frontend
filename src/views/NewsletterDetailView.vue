<template>
  <div v-if="newsletter" class="min-h-screen bg-[#f5efe4]">
    <section class="px-4 py-6 md:px-8 lg:px-12">
      <div class="mx-auto max-w-5xl">
        <NewsletterReaderHeader
          :title="newsletter.title"
          :issue="newsletter.issue"
          :date="newsletter.date"
          :spread-label="spreadLabel"
        />

        <NewsletterReaderBook
          :newsletter="newsletter"
          :left-page="leftPage"
          :right-page="rightPage"
          :spread-key="spreadKey"
          :spread-label="spreadLabel"
          :left-page-number-label="leftPageNumberLabel"
          :right-page-number-label="rightPageNumberLabel"
          :can-go-prev="canGoPrev"
          :can-go-next="canGoNext"
          :flip-direction="flipDirection"
          @prev="goPrev"
          @next="goNext"
        />
      </div>
    </section>
  </div>

  <NewsletterDetailNotFound v-else />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import NewsletterDetailNotFound from '@/components/resources/NewsletterDetailNotFound.vue'
import NewsletterReaderBook from '@/components/resources/NewsletterReaderBook.vue'
import NewsletterReaderHeader from '@/components/resources/NewsletterReaderHeader.vue'

import { newsletters } from '@/data/newsletters'
import type { NewsletterPage } from '@/types/newsletter'

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