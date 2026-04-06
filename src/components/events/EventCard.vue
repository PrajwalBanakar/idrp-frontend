<template>
  <article
    class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    :class="variant === 'past' ? 'opacity-95' : ''"
  >
    <div class="grid gap-0 lg:grid-cols-[360px_1fr]">
      <!-- Left: brochure/poster -->
      <div class="bg-slate-100 p-4 sm:p-5">
        <a
          :href="brochureLink"
          target="_blank"
          rel="noopener noreferrer"
          class="block h-full"
        >
          <div
            class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
          >
            <img
              :src="event.image"
              :alt="event.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </a>
      </div>

      <!-- Right: content -->
      <div class="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <div class="mb-5 flex items-center gap-3">
            <span
              class="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
              :class="
                variant === 'upcoming'
                  ? 'bg-teal-50 text-teal-700'
                  : 'bg-slate-100 text-slate-500'
              "
            >
              {{ badgeText }}
            </span>
          </div>

          <h3 class="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            {{ event.title }}
          </h3>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              v-for="item in metaItems"
              :key="`${event.id}-${item.label}`"
              class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-slate-200"
              >
                {{ item.icon }}
              </div>

              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {{ item.label }}
                </p>
                <p class="mt-1 text-sm font-semibold text-slate-800">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink
            v-if="variant === 'upcoming'"
            :to="registerLink"
            class="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Register Now
          </RouterLink>

          <!-- <a
            :href="brochureLink"
            target="_blank"
            rel="noopener noreferrer"
            download
            class="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-400 hover:text-teal-700"
          >
            Download Brochure
          </a> -->
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

const registerLink = computed(() => `/events/${props.event.id}/register`)
const brochureLink = computed(() => props.event.brochureUrl || props.event.image)

const metaItems = computed<MetaItem[]>(() => {
  const items: MetaItem[] = [
    {
      label: 'Date',
      value: props.event.date,
      icon: '📅',
    },
  ]

  if (props.event.time) {
    items.push({
      label: 'Time',
      value: props.event.time,
      icon: '🕐',
    })
  }

  if (props.event.location) {
    items.push({
      label: 'Location',
      value: props.event.location,
      icon: '📍',
    })
  }

  if (props.event.mode) {
    items.push({
      label: 'Mode',
      value: props.event.mode,
      icon: '🖥️',
    })
  }

  return items
})
</script>