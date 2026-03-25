<template>
  <article
    class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
  >
    <div class="p-6">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex items-start gap-4">
          <div
            class="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
          >
            <img
              v-if="!logoBroken"
              :src="startup.logo"
              :alt="startup.name"
              class="h-full w-full object-contain"
              @error="handleLogoError"
            />
            <span v-else class="text-2xl font-extrabold text-teal-600">
              {{ initial }}
            </span>
          </div>

          <div>
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="text-2xl font-bold text-gray-900">
                {{ startup.name }}
              </h3>

              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="badgeClass"
              >
                {{ categoryLabel }}
              </span>
            </div>

            <p class="mt-1 text-sm font-medium text-teal-700">
              {{ startup.sector }}
            </p>

            <div class="mt-3 flex flex-wrap gap-3">
              <a
                :href="startup.website"
                target="_blank"
                rel="noopener"
                class="text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Visit Website
              </a>

              <span class="text-gray-300">|</span>

              <a
                :href="startup.onePager"
                target="_blank"
                rel="noopener"
                class="text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Investor One-Pager
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          @click="$emit('toggle', startup.id)"
        >
          {{ expanded ? 'Hide Details' : 'View Details' }}
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[1000px] opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-[1000px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-if="expanded"
        class="border-t border-gray-100 bg-gray-50 px-6 py-6"
      >
        <div class="grid grid-cols-1 gap-8 xl:grid-cols-[1.4fr_1fr]">
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-gray-900">
              Brief Overview
            </h4>

            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ startup.brief }}
            </p>

            <h4 class="mt-8 text-sm font-bold uppercase tracking-wider text-gray-900">
              Founders
            </h4>

            <div class="mt-4 space-y-4">
              <div
                v-for="founder in startup.founders"
                :key="`${startup.id}-${founder.name}`"
                class="rounded-2xl border border-gray-100 bg-white p-4"
              >
                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p class="text-sm font-bold text-gray-900">
                      {{ founder.name }}
                    </p>
                    <p class="text-xs text-gray-500">
                      {{ founder.role }}
                    </p>
                  </div>

                  <a
                    :href="founder.linkedin"
                    target="_blank"
                    rel="noopener"
                    class="text-sm font-semibold text-teal-700 hover:text-teal-800"
                  >
                    LinkedIn
                  </a>
                </div>

                <div class="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                  <a
                    :href="`mailto:${founder.email}`"
                    class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 hover:border-teal-300 hover:text-teal-700"
                  >
                    {{ founder.email }}
                  </a>

                  <a
                    :href="`tel:${founder.phone}`"
                    class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 hover:border-teal-300 hover:text-teal-700"
                  >
                    {{ founder.phone }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-gray-900">
              Startup Contact
            </h4>

            <div class="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div class="space-y-4 text-sm text-gray-600">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Contact Email
                  </p>
                  <a
                    :href="`mailto:${startup.contactEmail}`"
                    class="mt-1 inline-block font-medium text-gray-800 hover:text-teal-700"
                  >
                    {{ startup.contactEmail }}
                  </a>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Contact Number
                  </p>
                  <a
                    :href="`tel:${startup.contactPhone}`"
                    class="mt-1 inline-block font-medium text-gray-800 hover:text-teal-700"
                  >
                    {{ startup.contactPhone }}
                  </a>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Website
                  </p>
                  <a
                    :href="startup.website"
                    target="_blank"
                    rel="noopener"
                    class="mt-1 inline-block break-all font-medium text-gray-800 hover:text-teal-700"
                  >
                    {{ websiteLabel }}
                  </a>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Investor Material
                  </p>
                  <a
                    :href="startup.onePager"
                    target="_blank"
                    rel="noopener"
                    class="mt-1 inline-block font-medium text-teal-700 hover:text-teal-800"
                  >
                    View / Download One-Pager
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { categoryLabels, type Startup, type StartupCategory } from '@/data/startups'

const props = defineProps<{
  startup: Startup
  expanded: boolean
}>()

defineEmits<{
  (e: 'toggle', startupId: string): void
}>()

const logoBroken = ref(false)

const initial = computed(() => props.startup.name.charAt(0).toUpperCase())

const categoryLabel = computed(() => categoryLabels[props.startup.category])

const websiteLabel = computed(() => props.startup.website.replace(/^https?:\/\//, ''))

const badgeClass = computed(() => {
  const badgeMap: Record<StartupCategory, string> = {
    incubated: 'bg-teal-50 text-teal-700',
    funded: 'bg-emerald-50 text-emerald-700',
    graduated: 'bg-blue-50 text-blue-700',
  }

  return badgeMap[props.startup.category]
})

function handleLogoError() {
  logoBroken.value = true
}
</script>