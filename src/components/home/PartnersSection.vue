<template>
  <section class="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          Ecosystem
        </span>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Our Partners
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          A growing network of academic, industry, ecosystem, and institutional partners helping
          strengthen innovation, collaboration, and entrepreneurial growth.
        </p>
      </div>

      <div class="mb-10 flex flex-wrap justify-center gap-3 lg:mb-12">
        <button
          v-for="cat in partnerCategories"
          :key="cat.key"
          type="button"
          class="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
          :class="
            activePartnerTab === cat.key
              ? 'bg-teal-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700'
          "
          @click="activePartnerTab = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <article
          v-for="partner in filteredPartners"
          :key="partner.name"
          class="group flex min-h-[150px] flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-md sm:min-h-[165px] sm:p-6"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white shadow-sm"
            :style="{ background: partner.color }"
          >
            {{ partner.abbr }}
          </div>

          <p class="text-xs font-semibold leading-5 text-slate-600 transition-colors duration-300 group-hover:text-teal-700 sm:text-sm">
            {{ partner.name }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Partner, PartnerCategory } from '@/data/home'

const props = defineProps<{
  partnerCategories: PartnerCategory[]
  allPartners: Partner[]
}>()

const activePartnerTab = ref('all')

const filteredPartners = computed(() => {
  if (activePartnerTab.value === 'all') {
    return props.allPartners
  }

  return props.allPartners.filter((partner) => partner.category === activePartnerTab.value)
})
</script>