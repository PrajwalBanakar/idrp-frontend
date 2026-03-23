<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700 px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl text-white">
        <button
          type="button"
          @click="goBack"
          class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-50 transition hover:bg-white/20"
        >
          ← Back to {{ currentProgram.backLabel }}
        </button>

        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-100"
        >
          <span>{{ currentProgram.emoji }}</span>
          <span>{{ currentProgram.badge }}</span>
        </div>

        <h1 class="text-4xl font-extrabold leading-tight md:text-5xl">
          {{ currentProgram.title }}
        </h1>

        <p class="mt-4 max-w-4xl text-base leading-relaxed text-teal-100 md:text-lg">
          {{ currentProgram.description }}
        </p>

        <p class="mt-4 text-sm font-medium text-teal-200">
          {{ currentProgram.meta }}
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="px-6 py-16 md:px-16">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <!-- Form -->
        <div class="rounded-3xl bg-white p-8 shadow-xl">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900">Application Form</h2>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Please complete the application below. This helps the IDRP team understand your startup,
              stage of progress, and the kind of support you are looking for through
              the {{ currentProgram.title }}.
            </p>
          </div>

          <form class="space-y-8" @submit.prevent="handleSubmit">
            <!-- Founder Details -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Founder Details</h3>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Founder Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.founderName"
                    type="text"
                    placeholder="Enter founder name"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Co-Founder Name
                  </label>
                  <input
                    v-model="form.coFounderName"
                    type="text"
                    placeholder="Enter co-founder name"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="Enter phone number"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    LinkedIn / Website
                  </label>
                  <input
                    v-model="form.website"
                    type="text"
                    placeholder="LinkedIn or website URL"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    City / Location
                  </label>
                  <input
                    v-model="form.location"
                    type="text"
                    placeholder="Enter city / location"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>
            </div>

            <!-- Startup Details -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Startup Details</h3>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Startup Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.startupName"
                    type="text"
                    placeholder="Enter startup name"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Sector / Domain <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.domain"
                    type="text"
                    placeholder="AI, Manufacturing, HealthTech, EdTech..."
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Startup Stage <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="form.stage"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  >
                    <option disabled value="">Select stage</option>
                    <option>Idea Stage</option>
                    <option>Validation Stage</option>
                    <option>Prototype / MVP Stage</option>
                    <option>Early Revenue</option>
                    <option>Growth Stage</option>
                    <option>Registered Startup</option>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Team Size
                  </label>
                  <input
                    v-model="form.teamSize"
                    type="number"
                    min="1"
                    placeholder="Enter team size"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div class="md:col-span-2">
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Startup Registration Status
                  </label>
                  <select
                    v-model="form.registrationStatus"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  >
                    <option disabled value="">Select registration status</option>
                    <option>Not Yet Registered</option>
                    <option>Incorporation in Progress</option>
                    <option>Registered Private Limited</option>
                    <option>Registered LLP</option>
                    <option>Registered OPC</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div class="mt-5">
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Problem Statement / Startup Description <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="form.description"
                  rows="5"
                  placeholder="Describe the problem you are solving, your solution, target users, and current progress."
                  class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  required
                ></textarea>
              </div>

              <div class="mt-5">
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Current Traction / Validation
                </label>
                <textarea
                  v-model="form.traction"
                  rows="4"
                  placeholder="Mention users, pilots, prototypes, customer interviews, revenue, partnerships, or validation achieved."
                  class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                ></textarea>
              </div>
            </div>

            <!-- Program Fit -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Program Fit & Support Needed</h3>

              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Why are you applying for this program? <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="form.whyApply"
                    rows="4"
                    placeholder="Explain why this program is relevant for your startup at this stage."
                    class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  ></textarea>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    What support are you looking for?
                  </label>
                  <textarea
                    v-model="form.supportSummary"
                    rows="4"
                    placeholder="Mentorship, prototyping, GTM, funding, validation, legal, partnerships..."
                    class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  ></textarea>
                </div>
              </div>

              <div class="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                <label
                  v-for="item in supportOptions"
                  :key="item"
                  class="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700"
                >
                  <input
                    v-model="form.supportNeeded"
                    :value="item"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span>{{ item }}</span>
                </label>
              </div>
            </div>

            <!-- Upload / Links -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Links & References</h3>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Pitch Deck Link
                  </label>
                  <input
                    v-model="form.pitchDeck"
                    type="text"
                    placeholder="Paste deck URL"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Product Demo / Prototype Link
                  </label>
                  <input
                    v-model="form.demoLink"
                    type="text"
                    placeholder="Paste demo or product URL"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>
            </div>

            <!-- Declaration -->
            <div class="rounded-2xl bg-teal-50 p-5">
              <label class="flex items-start gap-3 text-sm text-gray-700">
                <input
                  v-model="form.declaration"
                  type="checkbox"
                  class="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  required
                />
                <span>
                  I confirm that the information provided is accurate to the best of my knowledge
                  and I am submitting this application for the {{ currentProgram.title }}.
                </span>
              </label>
            </div>

            <div class="flex flex-wrap gap-4">
              <button
                type="submit"
                class="rounded-full bg-teal-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-teal-700 hover:shadow-xl"
              >
                Submit Application
              </button>

              <button
                type="button"
                @click="resetForm"
                class="rounded-full border border-gray-300 px-8 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Reset Form
              </button>
            </div>

            <p
              v-if="submitted"
              class="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              Your application has been submitted successfully.
            </p>
          </form>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <div class="rounded-3xl bg-white p-8 shadow-xl">
            <h3 class="text-xl font-bold text-gray-900">Program Snapshot</h3>
            <div class="mt-5 space-y-4 text-sm text-gray-700">
              <p><strong class="text-gray-900">Program:</strong> {{ currentProgram.title }}</p>
              <p><strong class="text-gray-900">Format:</strong> {{ currentProgram.meta }}</p>
              <p><strong class="text-gray-900">Focus:</strong> Startup growth, readiness, and structured support</p>
              <p><strong class="text-gray-900">Who should apply:</strong> Founders, student innovators, early-stage teams, and startups aligned to the program stage</p>
            </div>
          </div>

          <div class="rounded-3xl bg-white p-8 shadow-xl">
            <h3 class="text-xl font-bold text-gray-900">What We Look For</h3>
            <ul class="mt-5 space-y-4">
              <li
                v-for="item in evaluationPoints"
                :key="item"
                class="flex items-start gap-3 text-sm text-gray-700"
              >
                <span
                  class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white"
                >
                  ✓
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-3xl bg-gradient-to-br from-teal-700 to-cyan-600 p-8 text-white shadow-xl">
            <h3 class="text-xl font-bold">Need Help Before Applying?</h3>
            <p class="mt-3 text-sm leading-relaxed text-teal-50">
              If you are unsure which program fits your startup, reach out to the IDRP team.
              We can guide you to the most suitable pathway based on your stage and readiness.
            </p>

            <RouterLink
              to="/contact"
              class="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'

type ProgramKey =
  | 'pre-incubation'
  | 'resident-incubation'
  | 'virtual-incubation'
  | 'deep-tech-accelerator'

type ProgramMeta = {
  title: string
  badge: string
  emoji: string
  meta: string
  description: string
  backLabel: string
}

const programs: Record<ProgramKey, ProgramMeta> = {
  'pre-incubation': {
    title: 'Yuva Udhyani',
    badge: 'Pre Incubation',
    emoji: '🌱',
    meta: 'Hybrid / Flexible · 6-12 Months · Idea to MVP Readiness',
    description:
      'Apply for our Yuva Udhyani program designed for aspiring founders and early-stage teams at idea, validation, or prototype stage. The program helps startups refine problem-solution fit, validate assumptions, shape their business model, and prepare for incubation readiness.',
    backLabel: 'Home',
  },
  'resident-incubation': {
    title: 'Udhyami Resident Incubation',
    badge: 'Incubation',
    emoji: '🏢',
    meta: 'On-Site · 12-18 Months · Early-Stage Startup Support',
    description:
      'Apply for Udhyami Resident, IDRP flagship on-campus incubation pathway for startups at idea, PoC, or MVP stage.',
    backLabel: 'Incubation',
  },
  'virtual-incubation': {
    title: 'Udhyami Virtual Incubation',
    badge: 'Incubation',
    emoji: '💻',
    meta: 'Online · 6-12 Months · Remote Startup Support',
    description:
      'Apply for Udhyami Virtual, IDRP remote incubation pathway for startups seeking flexible ecosystem access.',
    backLabel: 'Incubation',
  },
  'deep-tech-accelerator': {
    title: 'Deep-Tech Accelerator',
    badge: 'Acceleration',
    emoji: '🚀',
    meta: 'On-Site · 6 Months Intensive · Scale Readiness',
    description:
      'Apply for our intensive deep-tech acceleration program designed for startups with a working technology base, product maturity, and strong scale potential.',
    backLabel: 'Acceleration',
  },
}

const supportOptions = [
  'Mentorship',
  'Problem / Market Validation',
  'MVP / Prototype Support',
  'Business Model Development',
  'Go-to-Market Support',
  'Funding Readiness',
  'Investor Connect',
  'Legal / Compliance Guidance',
  'Branding / Pitch Deck Support',
  'Industry / Research Connect',
]

const evaluationPoints = [
  'Clarity of problem statement and relevance',
  'Strength of the solution approach',
  'Founder commitment and execution ability',
  'Market need and user validation potential',
  'Technology depth or innovation strength',
  'Readiness for incubation / acceleration outcomes',
]

const route = useRoute()
const router = useRouter()
const submitted = ref(false)

const programKey = computed<ProgramKey>(() => {
  const param = String(route.params.program ?? 'pre-incubation')

  if (param in programs) {
    return param as ProgramKey
  }

  return 'pre-incubation'
})

const currentProgram = computed(() => programs[programKey.value])

const initialFormState = () => ({
  founderName: '',
  coFounderName: '',
  email: '',
  phone: '',
  website: '',
  location: '',
  startupName: '',
  domain: '',
  stage: '',
  teamSize: '',
  registrationStatus: '',
  description: '',
  traction: '',
  whyApply: '',
  supportSummary: '',
  supportNeeded: [] as string[],
  pitchDeck: '',
  demoLink: '',
  declaration: false,
})

const form = reactive(initialFormState())

function resetForm() {
  Object.assign(form, initialFormState())
}

function handleSubmit() {
  console.log('Program application submitted:', {
    program: programKey.value,
    programTitle: currentProgram.value.title,
    ...form,
  })

  submitted.value = true
  resetForm()
}

function goBack() {
  if (window.history.length > 1) {
    router.back()
    return
  }

  router.push('/')
}
</script>