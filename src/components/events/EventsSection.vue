<template>
  <section :class="sectionClass">
    <div class="mx-auto max-w-5xl">
      <div class="mb-10 flex items-center justify-between">
        <div>
          <span
            class="text-sm font-semibold uppercase tracking-widest"
            :class="variant === 'upcoming' ? 'text-teal-600' : 'text-gray-400'"
          >
            {{ eyebrow }}
          </span>
          <h2 class="mt-1 text-3xl font-bold text-gray-900">{{ title }}</h2>
        </div>

        <span
          class="rounded-full px-4 py-2 text-xs font-bold"
          :class="
            variant === 'upcoming'
              ? 'bg-teal-50 text-teal-700'
              : 'bg-gray-100 text-gray-600'
          "
        >
          {{ items.length }} Events
        </span>
      </div>

      <div v-if="items.length" class="flex flex-col" :class="listGapClass">
        <EventCard
          v-for="event in paginatedItems"
          :key="event.id"
          :event="event"
          :variant="variant"
        />
      </div>

      <div v-else class="py-16 text-center text-gray-400">
        <p class="mb-4 text-4xl">{{ emptyIcon }}</p>
        <p class="font-semibold text-gray-500">{{ emptyText }}</p>
      </div>

      <div v-if="totalPages > 1" class="mt-8 flex justify-center gap-2">
        <button
          type="button"
          :disabled="currentPage === 1"
          class="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-teal-400 hover:text-teal-600 disabled:opacity-30"
          @click="$emit('update:currentPage', currentPage - 1)"
        >
          Previous
        </button>

        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          type="button"
          class="h-10 w-10 rounded-xl border text-sm font-bold transition-colors"
          :class="pageButtonClass(pageNumber)"
          @click="$emit('update:currentPage', pageNumber)"
        >
          {{ pageNumber }}
        </button>

        <button
          type="button"
          :disabled="currentPage === totalPages"
          class="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-teal-400 hover:text-teal-600 disabled:opacity-30"
          @click="$emit('update:currentPage', currentPage + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import EventCard from '@/components/events/EventCard.vue'
import type { EventItem } from '@/types/events'

type EventsSectionVariant = 'upcoming' | 'past'

const props = defineProps<{
  eyebrow: string
  title: string
  items: EventItem[]
  paginatedItems: EventItem[]
  currentPage: number
  totalPages: number
  variant: EventsSectionVariant
}>()

defineEmits<{
  (e: 'update:currentPage', value: number): void
}>()

const sectionClass = computed(() =>
  props.variant === 'upcoming'
    ? 'bg-white px-6 py-16 md:px-16'
    : 'bg-gray-50 px-6 py-16 md:px-16',
)

const listGapClass = computed(() =>
  props.variant === 'upcoming' ? 'gap-6' : 'gap-5',
)

const emptyIcon = computed(() => (props.variant === 'upcoming' ? '📅' : '🗂️'))

const emptyText = computed(() =>
  props.variant === 'upcoming'
    ? 'No upcoming events right now. Check back soon!'
    : 'No past events available yet.',
)

function pageButtonClass(pageNumber: number) {
  if (props.variant === 'upcoming') {
    return props.currentPage === pageNumber
      ? 'border-teal-700 bg-teal-700 text-white'
      : 'border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600'
  }

  return props.currentPage === pageNumber
    ? 'border-gray-700 bg-gray-700 text-white'
    : 'border-gray-200 text-gray-600 hover:border-gray-400'
}
</script>