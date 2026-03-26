<script setup lang="ts">
import { ref } from 'vue'
import type { NAINInstitute, NAINYearGroup } from '@/types/nain'

type Props = {
  institute: NAINInstitute
  expanded: boolean
  selectedYear?: string
}

const props = withDefaults(defineProps<Props>(), {
  selectedYear: 'all',
})

const emit = defineEmits<{
  (e: 'toggle', instituteId: string): void
}>()

const projectImageVisibility = ref<Record<string, boolean>>({})

function hideProjectImage(projectId: string) {
  projectImageVisibility.value[projectId] = false
}

function isProjectImageVisible(projectId: string) {
  return projectImageVisibility.value[projectId] ?? true
}

function getVisibleYears(years: NAINYearGroup[]) {
  if (props.selectedYear === 'all') return years
  return years.filter((year) => year.year === props.selectedYear)
}

function getInstituteProjectCount() {
  return props.institute.years.reduce((sum, year) => sum + year.projects.length, 0)
}
</script>

<template>
  <article class="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
    <button
      type="button"
      class="flex w-full flex-col gap-4 px-6 py-6 text-left transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
      @click="$emit('toggle', institute.id)"
    >
      <div>
        <div class="flex flex-wrap items-center gap-3">
          <h3 class="text-2xl font-bold text-slate-900">
            {{ institute.name }}
          </h3>
          <span class="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            {{ institute.location }}
          </span>
        </div>

        <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          {{ institute.description }}
        </p>
      </div>

      <div class="flex items-center gap-4">
        <div class="text-right">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Projects
          </p>
          <p class="text-lg font-bold text-slate-900">
            {{ getInstituteProjectCount() }}
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
      class="border-t border-slate-200 bg-slate-50/60 px-6 py-6"
    >
      <div class="space-y-8">
        <section
          v-for="yearBlock in getVisibleYears(institute.years)"
          :key="yearBlock.year"
        >
          <div class="mb-4 flex items-center justify-between">
            <h4 class="text-xl font-bold text-slate-900">
              {{ yearBlock.year }}
            </h4>

            <span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
              {{ yearBlock.projects.length }} Projects
            </span>
          </div>

          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="project in yearBlock.projects"
              :key="project.id"
              class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div class="h-48 overflow-hidden bg-slate-100">
                <img
                  v-if="project.image && isProjectImageVisible(project.id)"
                  :src="project.image"
                  :alt="project.title"
                  class="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                  @error="hideProjectImage(project.id)"
                />

                <div
                  v-else
                  class="flex h-full items-center justify-center text-sm font-semibold text-slate-400"
                >
                  Project Image
                </div>
              </div>

              <div class="p-5">
                <h5 class="text-lg font-bold leading-6 text-slate-900">
                  {{ project.title }}
                </h5>

                <p class="mt-3 text-sm leading-6 text-slate-600">
                  {{ project.brief }}
                </p>

                <div class="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <p class="font-semibold text-slate-900">Faculty Guide</p>
                    <p>{{ project.facultyGuide }}</p>
                  </div>

                  <div>
                    <p class="font-semibold text-slate-900">Student Members</p>
                    <ul class="mt-1 space-y-1 text-slate-600">
                      <li
                        v-for="member in project.students"
                        :key="member"
                      >
                        • {{ member }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  v-if="project.link || project.linkedin"
                  class="mt-5 flex flex-wrap gap-2"
                >
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Open Link
                  </a>

                  <a
                    v-if="project.linkedin"
                    :href="project.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-100"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>