<template>
  <article
    class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 sm:flex-row"
    :class="
      variant === 'upcoming'
        ? 'hover:border-teal-200 hover:shadow-xl'
        : 'opacity-90 hover:opacity-100 hover:shadow-md'
    "
  >
    <div
      class="relative h-44 shrink-0 overflow-hidden bg-gradient-to-br sm:h-auto sm:w-56"
      :class="[event.fallbackBg, imageHeightClass]"
    >
      <img
        :src="event.image"
        :alt="event.title"
        class="h-full w-full object-cover transition-all duration-500"
        :class="variant === 'upcoming' ? 'group-hover:scale-105' : 'grayscale group-hover:grayscale-0'"
      />

      <span
        class="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white"
        :class="variant === 'upcoming' ? 'bg-teal-600' : 'bg-gray-500'"
      >
        {{ badgeText }}
      </span>
    </div>

    <div class="flex flex-1 flex-col sm:flex-row">
      <div class="flex-1 p-6">
        <span
          class="text-xs font-bold uppercase tracking-widest"
          :class="variant === 'upcoming' ? 'text-teal-600' : 'text-gray-400'"
        >
          {{ event.category }}
        </span>

        <RouterLink :to="detailsLink">
          <h3
            class="mb-2 mt-1 font-bold transition-colors group-hover:text-teal-700"
            :class="variant === 'upcoming' ? 'text-xl text-gray-900' : 'text-lg text-gray-700'"
          >
            {{ event.title }}
          </h3>
        </RouterLink>

        <p
          class="leading-relaxed"
          :class="variant === 'upcoming' ? 'line-clamp-3 text-sm text-gray-500' : 'line-clamp-2 text-sm text-gray-400'"
        >
          {{ event.description }}
        </p>

        <div class="mt-4 flex flex-wrap gap-3">
          <RouterLink
            :to="detailsLink"
            class="inline-block rounded-full border border-gray-200 px-5 py-2 text-xs font-bold transition-colors hover:border-teal-300 hover:text-teal-700"
            :class="variant === 'upcoming' ? 'text-gray-700' : 'text-gray-600'"
          >
            View Details
          </RouterLink>

          <RouterLink
            v-if="variant === 'upcoming'"
            :to="registerLink"
            class="inline-block rounded-full bg-teal-700 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-800"
          >
            Register Now
          </RouterLink>
        </div>
      </div>

      <div
        class="flex shrink-0 flex-col justify-center gap-4 border-t border-gray-100 p-6 sm:w-44 sm:border-l sm:border-t-0"
      >
        <div
          v-for="item in metaItems"
          :key="`${event.id}-${item.label}`"
          class="flex items-start gap-3"
        >
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base"
            :class="variant === 'upcoming' ? 'bg-teal-50 text-teal-600' : 'bg-gray-50 text-gray-400'"
          >
            {{ item.icon }}
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {{ item.label }}
            </p>
            <p
              class="mt-0.5 text-sm font-bold"
              :class="variant === 'upcoming' ? 'text-gray-800' : 'text-gray-600'"
            >
              {{ item.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { EventItem } from '@/types/events'

type EventCardVariant = 'upcoming' | 'past'

type MetaItem = {
  label: string
  value: string
  icon: string
}

const props = defineProps<{
  event: EventItem
  variant: EventCardVariant
}>()

const badgeText = computed(() => (props.variant === 'upcoming' ? 'Upcoming' : 'Past'))

const detailsLink = computed(() => `/events/${props.event.id}`)
const registerLink = computed(() => `/events/${props.event.id}/register`)

const imageHeightClass = computed(() =>
  props.variant === 'upcoming' ? 'h-48 sm:h-auto' : 'h-44 sm:h-auto',
)

const metaItems = computed<MetaItem[]>(() => {
  if (props.variant === 'upcoming') {
    return [
      {
        label: 'Date',
        value: props.event.date,
        icon: '📅',
      },
      {
        label: 'Time',
        value: props.event.time ?? 'To be announced',
        icon: '🕐',
      },
      {
        label: 'Location',
        value: props.event.location ?? 'TBA',
        icon: '📍',
      },
    ]
  }

  return [
    {
      label: 'Date',
      value: props.event.date,
      icon: '📅',
    },
    {
      label: 'Location',
      value: props.event.location ?? 'TBA',
      icon: '📍',
    },
  ]
})
</script>