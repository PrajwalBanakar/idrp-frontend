<script setup lang="ts">
import { ref, watch } from 'vue'
import type { NAINInstitute } from '@/types/nain'

type Props = {
  institute: NAINInstitute
  expanded: boolean
}

const props = defineProps<Props>()

defineEmits<{
  (e: 'toggle', instituteId: string): void
}>()

const expandedYear = ref<string | null>(null)
const showInstituteLogo = ref(true)

watch(
  () => props.expanded,
  (isExpanded) => {
    if (!isExpanded) {
      expandedYear.value = null
    }
  },
)

function toggleYear(year: string) {
  expandedYear.value = expandedYear.value === year ? null : year
}

function getInstituteProjectCount(institute: NAINInstitute) {
  return institute.years.reduce((sum, year) => sum + year.projects.length, 0)
}
</script>

<template>
  <article class="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
    <button
      type="button"
      class="flex w-full flex-col gap-5 px-6 py-6 text-left transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
      @click="$emit('toggle', institute.id)"
    >
      <div class="flex items-start gap-4">
        <div
          class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <img
            v-if="institute.logo && showInstituteLogo"
            :src="institute.logo"
            :alt="institute.name"
            class="h-full w-full object-contain p-2"
            @error="showInstituteLogo = false"
          />

          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50 text-lg font-bold text-teal-700"
          >
            {{ institute.name.charAt(0) }}
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-slate-900">
            {{ institute.name }}
          </h3>

          <p class="mt-1 text-sm font-medium text-slate-500">
            {{ institute.city }}, {{ institute.state }}
          </p>

          <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {{ institute.description }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="text-right">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Projects
          </p>
          <p class="text-lg font-bold text-slate-900">
            {{ getInstituteProjectCount(institute) }}
          </p>
        </div>

        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
          <span class="text-xl leading-none">
            {{ expanded ? '−' : '+' }}
          </span>
        </div>
      </div>
    </button>

    <div
      v-if="expanded"
      class="border-t border-slate-200 bg-slate-50/70 px-6 py-6"
    >
      <div class="space-y-5">
        <article
          v-for="yearBlock in institute.years"
          :key="yearBlock.year"
          class="overflow-hidden rounded-3xl border border-slate-200 bg-white"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-slate-50"
            @click="toggleYear(yearBlock.year)"
          >
            <div>
              <h4 class="text-lg font-bold text-slate-900">
                {{ yearBlock.year }}
              </h4>
              <p class="mt-1 text-sm text-slate-500">
                {{ yearBlock.projects.length }} project{{ yearBlock.projects.length > 1 ? 's' : '' }}
              </p>
            </div>

            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <span class="text-lg leading-none">
                {{ expandedYear === yearBlock.year ? '−' : '+' }}
              </span>
            </div>
          </button>

          <div
            v-if="expandedYear === yearBlock.year"
            class="border-t border-slate-200 px-5 py-5"
          >
            <div class="mb-5 rounded-3xl border border-teal-100 bg-teal-50 p-5">
              <h5 class="text-base font-bold text-slate-900">
                Investigator Details
              </h5>

              <div class="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    Principal Investigator
                  </p>
                  <p class="mt-1 text-sm font-medium text-slate-800">
                    {{ yearBlock.principalInvestigator }}
                  </p>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    Co-Principal Investigator
                  </p>
                  <p class="mt-1 text-sm font-medium text-slate-800">
                    {{ yearBlock.coPrincipalInvestigator }}
                  </p>
                </div>
              </div>
            </div>

            <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <article
                v-for="project in yearBlock.projects"
                :key="project.id"
                class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h5 class="text-lg font-bold leading-6 text-slate-900">
                  {{ project.title }}
                </h5>

                <p class="mt-3 text-sm leading-6 text-slate-600">
                  {{ project.brief }}
                </p>

                <div class="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <p class="font-semibold text-slate-900">IIIT Faculty Guide</p>
                    <p>{{ project.iiitFacultyGuide }}</p>
                  </div>

                  <div>
                    <p class="font-semibold text-slate-900">NAIN Co-ordinator</p>
                    <p>{{ project.nainCoordinator }}</p>
                  </div>

                  <div>
                    <p class="font-semibold text-slate-900">DIA</p>
                    <p>{{ project.dia }}</p>
                  </div>

                  <div>
                    <p class="font-semibold text-slate-900">MIS Executive</p>
                    <ul class="mt-1 space-y-1 text-slate-600">
                      <li
                        v-for="member in project.misExecutives"
                        :key="member"
                      >
                        • {{ member }}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p class="font-semibold text-slate-900">Tech Mentor</p>
                    <p>{{ project.techMentor }}</p>
                  </div>

                  <div>
                    <p class="font-semibold text-slate-900">Program Associate</p>
                    <p>{{ project.programAssociate }}</p>
                  </div>

                  <div>
                    <p class="font-semibold text-slate-900">Student Members</p>
                    <ul class="mt-1 space-y-1 text-slate-600">
                      <li
                        v-for="member in project.studentMembers"
                        :key="member"
                      >
                        • {{ member }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div v-if="project.projectLink" class="mt-5">
                  <a
                    :href="project.projectLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-100"
                  >
                    View Project
                  </a>
                </div>
              </article>
            </div>
          </div>
        </article>
      </div>
    </div>
  </article>
</template>