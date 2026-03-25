<template>
  <section class="bg-gray-50 px-6 py-6 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Network
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Our Partnerships</h2>
      </div>

      <div
        v-for="category in partnerCategories"
        :key="category.key"
        class="mb-16 last:mb-4"
      >
        <div class="mb-6 flex items-start gap-4">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg text-white"
            :class="category.iconBgClass"
          >
            {{ category.icon }}
          </div>

          <div>
            <h3 class="text-2xl font-bold text-gray-900">{{ category.title }}</h3>
            <p class="mt-0.5 text-sm font-medium" :class="category.textClass">
              {{ category.subtitle }}
            </p>
            <p class="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
              {{ category.description }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <PartnerCard
            v-for="partner in category.partners"
            :key="partner.name"
            :partner="partner"
            :hover-border-class="category.hoverBorderClass"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PartnerCard from '@/components/partners/PartnerCard.vue'
import type { PartnerCategory } from '@/types/partners'

defineProps<{
  partnerCategories: PartnerCategory[]
}>()
</script>