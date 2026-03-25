<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-6 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Ecosystem
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Our Partners</h2>
      </div>

      <p class="mx-auto mb-16 max-w-2xl text-center leading-relaxed text-gray-500">
        Through enduring, value-driven partnerships, IDRP has played a key role in strengthening
        the startup ecosystem by connecting people, institutions, and government.
      </p>

      <div class="mb-12 flex flex-wrap justify-center gap-3">
        <button
          v-for="cat in partnerCategories"
          :key="cat.key"
          type="button"
          class="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
          :class="
            activePartnerTab === cat.key
              ? 'bg-teal-700 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-700'
          "
          @click="activePartnerTab = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div
          v-for="partner in filteredPartners"
          :key="partner.name"
          class="group flex cursor-default flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:border-teal-200 hover:bg-white hover:shadow-md"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
            :style="{ background: partner.color }"
          >
            {{ partner.abbr }}
          </div>

          <p
            class="text-center text-xs font-semibold leading-tight text-gray-600 transition-colors group-hover:text-teal-700"
          >
            {{ partner.name }}
          </p>
        </div>
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