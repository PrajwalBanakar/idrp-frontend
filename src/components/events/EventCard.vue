<template>
  <article
    class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
          <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <img
              :src="event.image"
              :alt="event.title"
              class="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
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

            <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              {{ event.category }}
            </span>
          </div>

          <h3 class="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            {{ event.title }}
          </h3>

          <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {{ event.description }}
          </p>

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

          <div v-if="event.highlights?.length" class="mt-6">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Highlights
            </p>

            <ul class="mt-3 grid gap-2">
              <li
                v-for="(highlight, index) in event.highlights"
                :key="`${event.id}-highlight-${index}`"
                class="flex items-start gap-2 text-sm font-medium text-slate-700"
              >
                <span class="mt-1 h-2 w-2 rounded-full bg-teal-500" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
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

          <button
            v-if="variant === 'past' && hasGallery"
            type="button"
            class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            @click="isGalleryOpen = !isGalleryOpen"
          >
            {{ isGalleryOpen ? 'Hide Event Gallery' : 'View Event Gallery' }}
          </button>

          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-400 hover:text-teal-700"
          >
            Contact Organizer
          </RouterLink>
        </div>
      </div>
    </div>

    <div
      v-if="variant === 'past' && hasGallery && isGalleryOpen"
      class="border-t border-slate-200 bg-slate-50 p-4 sm:p-6"
    >
      <EventGallerySection
        :images="event.gallery"
        title="Event Gallery"
        eyebrow="Captured Moments"
        :alt-prefix="event.title"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import EventGallerySection from '@/components/events/EventGallerySection.vue'
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

const isGalleryOpen = ref(false)

const badgeText = computed(() => (props.variant === 'upcoming' ? 'Upcoming' : 'Past'))

const registerLink = computed(() => `/community/events/${props.event.id}/register`)
const brochureLink = computed(() => props.event.brochureUrl || props.event.image)

const hasGallery = computed(
  () => Array.isArray(props.event.gallery) && props.event.gallery.length > 0,
)

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