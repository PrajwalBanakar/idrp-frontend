<template>
  <div class="nain-view bg-white">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700">
      <div class="absolute inset-0 opacity-10">
        <div class="h-full w-full bg-[radial-gradient(circle_at_top_left,_white_0,_transparent_35%),radial-gradient(circle_at_bottom_right,_white_0,_transparent_30%)]"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
        <div class="max-w-3xl">
          <div class="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-100">
            Government Initiatives
          </div>

          <h1 class="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            New Age Innovation Network
          </h1>

          <p class="mt-5 max-w-2xl text-base leading-7 text-teal-50 md:text-lg">
            NAIN at IDRP supports innovation, mentoring, prototyping, and entrepreneurship by
            connecting institutes, faculty mentors, and student teams through structured project
            guidance and ecosystem support.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#institutes"
              class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
            >
              Explore Institutes
            </a>
            <RouterLink
              to="/contact"
              class="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact IDRP
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div class="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Overview
          </span>
          <h2 class="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Building an institute-level innovation network
          </h2>
          <div class="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              The New Age Innovation Network (NAIN) builds an innovation pipeline by mentoring
              institutes, supporting student idea development, enabling project execution, and
              strengthening early-stage entrepreneurial thinking.
            </p>
            <p>
              As the number of supported institutes and projects grows every year, this page is
              designed to showcase mentorship in a scalable way — institute-wise, year-wise, and
              project-wise.
            </p>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div class="rounded-3xl border border-teal-100 bg-teal-50 p-6">
            <p class="text-sm font-semibold uppercase tracking-wider text-teal-700">
              Institutes Supported
            </p>
            <p class="mt-2 text-4xl font-extrabold text-slate-900">
              {{ institutes.length }}
            </p>
          </div>

          <div class="rounded-3xl border border-cyan-100 bg-cyan-50 p-6">
            <p class="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Total Projects Listed
            </p>
            <p class="mt-2 text-4xl font-extrabold text-slate-900">
              {{ totalProjects }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Mentor Spotlight -->
    <section class="bg-slate-50">
      <div class="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div class="mb-8">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Faculty Mentor
          </span>
          <h2 class="mt-3 text-3xl font-bold text-slate-900">
            IIIT Dharwad Faculty Mentor
          </h2>
        </div>

        <div class="grid gap-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8">
          <div class="overflow-hidden rounded-3xl bg-slate-100">
            <img
              v-if="facultyMentor.image"
              :src="facultyMentor.image"
              :alt="facultyMentor.name"
              class="h-full w-full object-cover"
            />
            <div
              v-else
              class="flex h-64 items-center justify-center text-lg font-bold text-slate-400"
            >
              Photo
            </div>
          </div>

          <div>
            <p class="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Mentor Profile
            </p>
            <h3 class="mt-2 text-2xl font-bold text-slate-900">
              {{ facultyMentor.name }}
            </h3>
            <p class="mt-1 text-sm font-medium text-slate-500">
              {{ facultyMentor.designation }}
            </p>

            <p class="mt-5 max-w-3xl text-[15px] leading-7 text-slate-600">
              {{ facultyMentor.bio }}
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                v-if="facultyMentor.linkedin"
                :href="facultyMentor.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
              >
                LinkedIn Profile
              </a>

              <a
                v-if="facultyMentor.profileLink"
                :href="facultyMentor.profileLink"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Institutes -->
    <section id="institutes" class="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Institutes We Support
          </span>
          <h2 class="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            PMU Mentoring & Supported Institutes
          </h2>
          <p class="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600">
            Browse all partner institutes and explore their NAIN projects year-wise with project
            briefs, faculty guides, student teams, and external links where available.
          </p>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 lg:min-w-[420px]">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search institute, project, faculty, student..."
            class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition placeholder:text-slate-400 focus:border-teal-400"
          />

          <select
            v-model="selectedYear"
            class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-400"
          >
            <option value="all">All Years</option>
            <option
              v-for="year in availableYears"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
        </div>
      </div>

      <div class="space-y-6">
        <article
          v-for="institute in filteredInstitutes"
          :key="institute.id"
          class="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
        >
          <button
            type="button"
            class="flex w-full flex-col gap-4 px-6 py-6 text-left transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
            @click="toggleInstitute(institute.id)"
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
                  {{ getInstituteProjectCount(institute) }}
                </p>
              </div>
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
              >
                <span class="text-xl leading-none">
                  {{ expandedInstitutes[institute.id] ? '−' : '+' }}
                </span>
              </div>
            </div>
          </button>

          <div v-if="expandedInstitutes[institute.id]" class="border-t border-slate-200 bg-slate-50/60 px-6 py-6">
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
                        v-if="project.image"
                        :src="project.image"
                        :alt="project.title"
                        class="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
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

                      <div v-if="project.link || project.linkedin" class="mt-5 flex flex-wrap gap-2">
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

        <div
          v-if="filteredInstitutes.length === 0"
          class="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center"
        >
          <h3 class="text-xl font-bold text-slate-900">No matching institutes found</h3>
          <p class="mt-2 text-sm text-slate-600">
            Try changing the search text or year filter.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:px-12 lg:flex-row lg:text-left">
        <div>
          <h3 class="text-2xl font-bold text-white">
            Want to showcase more supported institutes and student innovations?
          </h3>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-teal-100">
            This section can be continuously expanded with institute-wise and year-wise project
            records, mentor details, images, and external profiles.
          </p>
        </div>

        <RouterLink
          to="/contact"
          class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
        >
          Contact IDRP
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

type Project = {
  id: string
  title: string
  brief: string
  facultyGuide: string
  students: string[]
  image?: string
  link?: string
  linkedin?: string
}

type YearGroup = {
  year: string
  projects: Project[]
}

type Institute = {
  id: string
  name: string
  location: string
  description: string
  years: YearGroup[]
}

type FacultyMentor = {
  name: string
  designation: string
  bio: string
  image?: string
  linkedin?: string
  profileLink?: string
}

const searchQuery = ref('')
const selectedYear = ref('all')

const facultyMentor: FacultyMentor = {
  name: 'Dr. [Faculty Mentor Name]',
  designation: 'IIIT Dharwad Faculty Mentor',
  bio: 'Add a concise profile here describing the mentor’s role in guiding institutes, supporting student innovators, and strengthening the NAIN innovation ecosystem through project mentoring and academic-industry engagement.',
  image: '',
  linkedin: '',
  profileLink: '',
}

const institutes = ref<Institute[]>([
  {
    id: 'inst-1',
    name: 'Institute Name 1',
    location: 'Karnataka',
    description:
      'Brief description about the institute, the nature of support provided, and how it participates in the NAIN ecosystem.',
    years: [
      {
        year: '2025-26',
        projects: [
          {
            id: 'p-1',
            title: 'AI-enabled Smart Agriculture Monitoring',
            brief:
              'A student innovation project focused on real-time crop health monitoring, smart irrigation insights, and actionable analytics for precision farming.',
            facultyGuide: 'Prof. A. Kumar',
            students: ['Student 1', 'Student 2', 'Student 3'],
            image: '',
            link: '',
            linkedin: '',
          },
          {
            id: 'p-2',
            title: 'Low-cost Assistive Navigation Device',
            brief:
              'A mobility support solution intended to improve accessibility using embedded sensing and guidance feedback.',
            facultyGuide: 'Dr. P. Rao',
            students: ['Student 4', 'Student 5'],
            image: '',
            link: '',
            linkedin: '',
          },
        ],
      },
      {
        year: '2024-25',
        projects: [
          {
            id: 'p-3',
            title: 'Waste Segregation Prototype',
            brief:
              'An innovation project aimed at automated waste sorting for cleaner campus and community environments.',
            facultyGuide: 'Prof. R. Joshi',
            students: ['Student 6', 'Student 7', 'Student 8'],
            image: '',
            link: '',
            linkedin: '',
          },
        ],
      },
    ],
  },
  {
    id: 'inst-2',
    name: 'Institute Name 2',
    location: 'Hubballi-Dharwad',
    description:
      'Another supported institute with year-wise projects, mentor engagement, and student innovation participation.',
    years: [
      {
        year: '2025-26',
        projects: [
          {
            id: 'p-4',
            title: 'IoT-based Campus Energy Tracker',
            brief:
              'A monitoring and optimization solution designed to study energy usage patterns and improve operational efficiency.',
            facultyGuide: 'Dr. S. Patil',
            students: ['Student 9', 'Student 10'],
            image: '',
            link: '',
            linkedin: '',
          },
        ],
      },
    ],
  },
])

const expandedInstitutes = reactive<Record<string, boolean>>(
  Object.fromEntries(institutes.value.map((item) => [item.id, false])),
)

const availableYears = computed(() => {
  const yearSet = new Set<string>()
  institutes.value.forEach((institute) => {
    institute.years.forEach((year) => yearSet.add(year.year))
  })
  return Array.from(yearSet).sort().reverse()
})

const totalProjects = computed(() => {
  return institutes.value.reduce((total, institute) => {
    return (
      total +
      institute.years.reduce((sum, year) => {
        return sum + year.projects.length
      }, 0)
    )
  }, 0)
})

const filteredInstitutes = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return institutes.value
    .map((institute) => {
      const visibleYears = institute.years
        .map((yearGroup) => {
          const yearMatches =
            selectedYear.value === 'all' || yearGroup.year === selectedYear.value

          if (!yearMatches) return null

          const filteredProjects = yearGroup.projects.filter((project) => {
            if (!query) return true

            const searchableText = [
              institute.name,
              institute.location,
              institute.description,
              yearGroup.year,
              project.title,
              project.brief,
              project.facultyGuide,
              ...project.students,
            ]
              .join(' ')
              .toLowerCase()

            return searchableText.includes(query)
          })

          if (filteredProjects.length === 0) return null

          return {
            ...yearGroup,
            projects: filteredProjects,
          }
        })
        .filter(Boolean) as YearGroup[]

      return {
        ...institute,
        years: visibleYears,
      }
    })
    .filter((institute) => institute.years.length > 0)
})

function toggleInstitute(id: string) {
  expandedInstitutes[id] = !expandedInstitutes[id]
}

function getInstituteProjectCount(institute: Institute) {
  return institute.years.reduce((sum, year) => sum + year.projects.length, 0)
}

function getVisibleYears(years: YearGroup[]) {
  if (selectedYear.value === 'all') return years
  return years.filter((year) => year.year === selectedYear.value)
}
</script>