<template>
  <div class="industry-research-view">
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/industry-research-hero.jfif"
        alt="Industry Research"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Services
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Industry Research
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Research & Collaboration
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
          Solving Real Industry Problems Through Applied Research.
        </h2>

        <div class="space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            At IDRP, Industry Research connects academic capability, technical depth, and practical
            problem-solving to address real-world business and engineering challenges.
          </p>
          <p>
            We work with industries, startups, institutions, and innovation teams to define problem
            statements, investigate opportunities, validate approaches, and create knowledge-driven
            solutions with measurable value.
          </p>
          <p>
            From exploratory studies to applied technology validation and implementation pathways,
            our research engagements are structured to deliver insights that can lead to innovation,
            efficiency, and strategic growth.
          </p>
        </div>

        <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
      </div>
    </section>

    <!-- Research Areas -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Focus Areas
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            What Industry Research at IDRP Covers
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Research collaborations designed to generate insights, solutions, and actionable
            innovation pathways.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="area in researchAreas"
            :key="area.title"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-teal-200 hover:shadow-xl"
          >
            <div
              class="relative h-36 overflow-hidden"
              :class="area.bg"
            >
              <img
                v-if="area.visible"
                :src="area.image"
                :alt="area.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                @error="area.visible = false"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-4xl">{{ area.emoji }}</span>
              </div>
            </div>

            <div class="p-4 text-center">
              <p class="text-sm font-bold text-gray-800 transition-colors group-hover:text-teal-700">
                {{ area.title }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-gradient-to-br from-teal-800 to-cyan-600 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div class="mb-14 text-center">
          <h2 class="text-3xl font-bold text-white">
            Turning Questions Into Scalable Outcomes
          </h2>
          <p class="mt-3 text-teal-100">
            Research that strengthens innovation, decision-making, and implementation readiness.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <p class="text-4xl font-extrabold text-white md:text-5xl">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-sm leading-snug text-teal-100">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration Form -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-3xl">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Collaborate With Us
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Start a Research Discussion</h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Share your research interest, problem statement, or collaboration requirement and our
            team will connect with you.
          </p>
        </div>

        <form
          class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
          @submit.prevent="submitResearchForm"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Your Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="researchForm.name"
                type="text"
                placeholder="Full name"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Organization <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="researchForm.organization"
                type="text"
                placeholder="Organization / Institution / Startup"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="researchForm.phone"
                type="tel"
                placeholder="+91 98765 43210"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Email ID <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="researchForm.email"
                type="email"
                placeholder="you@company.com"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Research Area <span class="text-red-500">*</span>
            </label>
            <select
              v-model="researchForm.researchArea"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            >
              <option value="" disabled>Select a research area</option>
              <option
                v-for="option in researchOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Problem Statement / Requirement <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model.trim="researchForm.details"
              rows="5"
              placeholder="Describe the challenge, domain, research need, expected outcomes, or collaboration scope..."
              class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-500">
            <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
            <p>
              By submitting this form, I/We consent to IDRP collecting and using the provided
              information solely for the purpose of evaluating and responding to research,
              consulting, innovation, collaboration, prototyping, and related service requests.
              The information is shared voluntarily, and I/We acknowledge that no confidential or
              proprietary data should be submitted unless we are comfortable with its use for these
              purposes. IDRP will maintain reasonable confidentiality, will not share information
              with third parties without consent (except where required by law or for service
              delivery), and may contact us using the provided details regarding this request and
              relevant opportunities.
            </p>
          </div>

          <div class="flex items-start gap-3">
            <input
              id="researchConsent"
              v-model="researchForm.consent"
              type="checkbox"
              class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
              required
            />
            <label
              for="researchConsent"
              class="cursor-pointer text-sm leading-relaxed text-gray-600"
            >
              I have read and agree to the disclaimer
            </label>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              class="w-full rounded-xl bg-teal-700 py-4 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-teal-800"
            >
              Submit Research Enquiry
            </button>
          </div>

          <div
            v-if="formSubmitted"
            class="flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 px-5 py-4 text-sm font-medium text-teal-700"
          >
            <span class="text-xl">✅</span>
            Thank you! We have received your enquiry and will get in touch shortly.
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type ResearchForm = {
  name: string
  organization: string
  phone: string
  email: string
  researchArea: string
  details: string
  consent: boolean
}

type Stat = {
  value: string
  label: string
}

type ResearchAreaCard = {
  title: string
  emoji: string
  image: string
  bg: string
  visible: boolean
}

const showHeroImage = ref(true)
const formSubmitted = ref(false)

const researchOptions: string[] = [
  'Applied Technology Research',
  'Process Improvement Research',
  'Product Validation Research',
  'Feasibility Study',
  'Innovation Strategy Research',
  'AI / Data / Digital Transformation Research',
]

const researchForm = reactive<ResearchForm>({
  name: '',
  organization: '',
  phone: '',
  email: '',
  researchArea: '',
  details: '',
  consent: false,
})

const stats: Stat[] = [
  { value: '25+', label: 'Industry Collaboration Themes' },
  { value: '40+', label: 'Applied Research Engagements' },
  { value: '15+', label: 'Emerging Technology Focus Areas' },
  { value: '100+', label: 'Experts, Mentors & Innovation Enablers' },
]

const researchAreas = reactive<ResearchAreaCard[]>([
  {
    title: 'Applied Technology Research',
    emoji: '🔬',
    image: '/industry-tech.jfif',
    bg: 'bg-teal-50',
    visible: true,
  },
  {
    title: 'Process & Performance Studies',
    emoji: '📊',
    image: '/industry-process.jfif',
    bg: 'bg-cyan-50',
    visible: true,
  },
  {
    title: 'Feasibility & Validation',
    emoji: '✅',
    image: '/industry-feasibility.jfif',
    bg: 'bg-green-50',
    visible: true,
  },
  {
    title: 'Innovation & Strategy',
    emoji: '💡',
    image: '/industry-innovation.jfif',
    bg: 'bg-amber-50',
    visible: true,
  },
  {
    title: 'Pilot & Solution Pathways',
    emoji: '🚀',
    image: '/industry-pilot.jfif',
    bg: 'bg-indigo-50',
    visible: true,
  },
])

function resetResearchForm() {
  researchForm.name = ''
  researchForm.organization = ''
  researchForm.phone = ''
  researchForm.email = ''
  researchForm.researchArea = ''
  researchForm.details = ''
  researchForm.consent = false
}

function submitResearchForm() {
  formSubmitted.value = true
  resetResearchForm()

  window.setTimeout(() => {
    formSubmitted.value = false
  }, 6000)
}
</script>