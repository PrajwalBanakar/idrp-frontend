<template>
  <article
    class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="p-6 sm:p-7">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div class="flex items-start gap-4 sm:gap-5">
          <div
            class="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
          >
            <img
              v-if="!logoBroken && startup.logo"
              :src="startup.logo"
              :alt="startup.name"
              class="h-full w-full object-contain"
              @error="handleLogoError"
            />
            <span
              v-else
              class="text-2xl font-extrabold uppercase tracking-wide text-teal-600"
            >
              {{ initial }}
            </span>
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {{ startup.name }}
              </h3>

              <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="badgeClass">
                {{ categoryLabel }}
              </span>
            </div>

            <p class="mt-1 text-sm font-medium text-teal-700">
              {{ startup.sector || 'Sector to be updated' }}
            </p>

            <p
              v-if="startup.brief"
              class="mt-4 max-w-3xl text-sm leading-7 text-slate-600"
            >
              {{ startup.brief }}
            </p>

            <div class="mt-5 flex flex-wrap gap-3">
              <a
                v-if="startup.website"
                :href="startup.website"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-full bg-teal-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-teal-800"
              >
                Visit Website
              </a>

              <a
                v-if="startup.onePager"
                :href="startup.onePager"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
              >
                View One-Pager
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
          @click="$emit('toggle', startup.id)"
        >
          <span>{{ expanded ? 'Hide Details' : 'View Details' }}</span>

          <ChevronDown
            class="h-4 w-4 transition-transform duration-300"
            :class="expanded ? 'rotate-180' : 'rotate-0'"
          />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[1800px] opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-[1800px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-if="expanded" class="border-t border-slate-200 bg-slate-50 px-6 py-6 sm:px-7">
        <div class="grid grid-cols-1 gap-8 xl:grid-cols-[1.45fr_1fr]">
          <div class="space-y-8">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Founders
              </h4>

              <div class="mt-4 space-y-4">
                <div
                  v-for="founder in startup.founders"
                  :key="`${startup.id}-founder-${founder.name}`"
                  class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p class="text-sm font-semibold text-slate-900">
                        {{ founder.name }}
                      </p>
                      <p class="mt-1 text-xs text-slate-500">
                        {{ founder.role }}
                      </p>
                    </div>

                    <a
                      v-if="founder.linkedin"
                      :href="founder.linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                    >
                      View LinkedIn
                    </a>
                  </div>

                  <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <a
                      v-if="founder.email"
                      :href="`mailto:${founder.email}`"
                      class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                    >
                      {{ founder.email }}
                    </a>

                    <a
                      v-if="founder.phone"
                      :href="`tel:${founder.phone}`"
                      class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                    >
                      {{ founder.phone }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="startup.techFacultyMentors?.length">
              <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Tech Faculty Mentors
              </h4>

              <div class="mt-4 space-y-4">
                <div
                  v-for="mentor in startup.techFacultyMentors"
                  :key="`${startup.id}-mentor-${mentor.name}`"
                  class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    {{ mentor.name }}
                  </p>

                  <a
                    v-if="mentor.email"
                    :href="`mailto:${mentor.email}`"
                    class="mt-3 inline-block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                  >
                    {{ mentor.email }}
                  </a>
                </div>
              </div>
            </div>

            <div v-if="startup.teamMembers?.length">
              <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Team Members
              </h4>

              <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div
                  v-for="member in startup.teamMembers"
                  :key="`${startup.id}-member-${member.name}`"
                  class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    {{ member.name }}
                  </p>

                  <div class="mt-3 space-y-2">
                    <a
                      v-if="member.email"
                      :href="`mailto:${member.email}`"
                      class="block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                    >
                      {{ member.email }}
                    </a>

                    <a
                      v-if="member.phone"
                      :href="`tel:${member.phone}`"
                      class="block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-teal-300 hover:text-teal-700"
                    >
                      {{ member.phone }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Startup Contact
            </h4>

            <div class="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="space-y-5 text-sm text-slate-600">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Contact Email
                  </p>
                  <a
                    :href="`mailto:${startup.contactEmail}`"
                    class="mt-1 inline-block font-medium text-slate-800 transition hover:text-teal-700"
                  >
                    {{ startup.contactEmail }}
                  </a>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Contact Number
                  </p>
                  <a
                    :href="`tel:${startup.contactPhone}`"
                    class="mt-1 inline-block font-medium text-slate-800 transition hover:text-teal-700"
                  >
                    {{ startup.contactPhone }}
                  </a>
                </div>

                <div v-if="startup.website">
                  <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Website
                  </p>
                  <a
                    :href="startup.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 inline-block break-all font-medium text-slate-800 transition hover:text-teal-700"
                  >
                    {{ websiteLabel }}
                  </a>
                </div>

                <div v-if="startup.onePager">
                  <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Investor Material
                  </p>
                  <a
                    :href="startup.onePager"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 inline-block font-semibold text-teal-700 transition hover:text-teal-800"
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
import { ChevronDown } from 'lucide-vue-next'
import { categoryLabels } from '@/data/startups'
import type { Startup, StartupCategory } from '@/types/startups'

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

const websiteLabel = computed(() =>
  props.startup.website ? props.startup.website.replace(/^https?:\/\//, '') : '',
)

const badgeClass = computed(() => {
  const badgeMap: Record<StartupCategory, string> = {
    'pre-incubated': 'bg-cyan-50 text-cyan-700',
    incubated: 'bg-teal-50 text-teal-700',
    funded: 'bg-emerald-50 text-emerald-700',
  }

  return badgeMap[props.startup.category]
})

function handleLogoError() {
  logoBroken.value = true
}
</script>