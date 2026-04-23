<template>
  <article
    class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="p-6 sm:p-7">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div class="flex min-w-0 items-start gap-4 sm:gap-5">
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
              class="text-2xl font-extrabold uppercase tracking-wide text-[var(--color-primary)]"
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

            <p class="mt-1 text-sm font-medium text-[var(--color-primary)]">
              {{ startup.sector || 'Sector to be updated' }}
            </p>

            <p
              v-if="startup.brief"
              class="mt-3 max-w-3xl text-sm leading-6 text-slate-600 line-clamp-2"
            >
              {{ startup.brief }}
            </p>

            <div v-if="startup.website || startup.onePager" class="mt-4 flex flex-wrap gap-2.5">
              <a
                v-if="startup.website"
                :href="startup.website"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Visit Website
              </a>

              <a
                v-if="startup.onePager"
                :href="startup.onePager"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
              >
                View One-Pager
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
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
      enter-to-class="max-h-[1400px] opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-[1400px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-if="expanded" class="border-t border-slate-200 bg-slate-50 px-6 py-6 sm:px-7">
        <div class="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
          <div class="space-y-6">
            <section v-if="startup.founders?.length">
              <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Founders</h4>

              <div class="mt-3 space-y-3">
                <div
                  v-for="founder in startup.founders"
                  :key="`${startup.id}-founder-${founder.name}`"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3"
                >
                  <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p class="text-sm font-semibold text-slate-900">
                        {{ founder.name }}
                      </p>
                      <p v-if="founder.role" class="mt-0.5 text-xs text-slate-500">
                        {{ founder.role }}
                      </p>
                    </div>

                    <a
                      v-if="founder.linkedin"
                      :href="founder.linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-xs font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
                    >
                      LinkedIn
                    </a>
                  </div>

                  <div v-if="founder.email" class="mt-3 flex flex-wrap gap-2">
                    <a
                      :href="`mailto:${founder.email}`"
                      class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
                    >
                      {{ founder.email }}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section v-if="startup.techFacultyMentors?.length">
              <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Tech Faculty Mentors
              </h4>

              <div class="mt-3 flex flex-wrap gap-3">
                <div
                  v-for="mentor in startup.techFacultyMentors"
                  :key="`${startup.id}-mentor-${mentor.name}`"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    {{ mentor.name }}
                  </p>
                  <a
                    v-if="mentor.email"
                    :href="`mailto:${mentor.email}`"
                    class="mt-1 inline-block text-xs text-slate-600 transition hover:text-[var(--color-primary)]"
                  >
                    {{ mentor.email }}
                  </a>
                </div>
              </div>
            </section>

            <section v-if="startup.teamMembers?.length">
              <div class="flex items-center justify-between gap-3">
                <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Team Members
                </h4>
                <span
                  class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200"
                >
                  {{ startup.teamMembers.length }}
                </span>
              </div>

              <div class="mt-3 grid gap-3 sm:grid-cols-2">
                <div
                  v-for="member in startup.teamMembers"
                  :key="`${startup.id}-member-${member.name}`"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    {{ member.name }}
                  </p>

                  <a
                    v-if="member.email"
                    :href="`mailto:${member.email}`"
                    class="mt-2 block text-xs text-slate-600 transition hover:text-[var(--color-primary)]"
                  >
                    {{ member.email }}
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div class="space-y-6">
            <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Startup Contact
              </h4>

              <div class="mt-4 space-y-4">
                <div v-if="startup.contactEmail">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Email
                  </p>
                  <a
                    :href="`mailto:${startup.contactEmail}`"
                    class="mt-1 inline-block break-all text-sm font-medium text-slate-800 transition hover:text-[var(--color-primary)]"
                  >
                    {{ startup.contactEmail }}
                  </a>
                </div>

                <div v-if="startup.contactPhone">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Phone
                  </p>
                  <a
                    :href="`tel:${startup.contactPhone}`"
                    class="mt-1 inline-block text-sm font-medium text-slate-800 transition hover:text-[var(--color-primary)]"
                  >
                    {{ startup.contactPhone }}
                  </a>
                </div>

                <div v-if="startup.website">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Website
                  </p>
                  <a
                    :href="startup.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 inline-block break-all text-sm font-medium text-slate-800 transition hover:text-[var(--color-primary)]"
                  >
                    {{ websiteLabel }}
                  </a>
                </div>

                <div v-if="startup.onePager">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Investor Material
                  </p>
                  <a
                    :href="startup.onePager"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 inline-block text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
                  >
                    View / Download One-Pager
                  </a>
                </div>
              </div>
            </section>
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
    incubated: 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]',
    funded: 'bg-emerald-50 text-emerald-700',
  }

  return badgeMap[props.startup.category]
})

function handleLogoError() {
  logoBroken.value = true
}
</script>