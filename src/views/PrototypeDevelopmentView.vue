<template>
  <div class="prototype-development-view">
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/prototype-development-hero.jfif"
        alt="Prototype Development"
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
          Prototype Development
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Build & Validate
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
          From Concept to Functional Prototype.
        </h2>

        <div class="space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            At IDRP, Prototype Development helps innovators transform ideas into tangible,
            testable, and refinement-ready solutions.
          </p>
          <p>
            We support startups, student founders, research teams, and industry collaborators in
            moving from early concepts to working models, pilot-ready systems, and proof-of-concept
            builds that enable feedback, validation, and market learning.
          </p>
          <p>
            Whether you are exploring a hardware product, digital platform, engineering system, or
            applied technology solution, our prototype support is designed to reduce uncertainty and
            accelerate informed development.
          </p>
        </div>

        <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
      </div>
    </section>

    <!-- Development Areas -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Development Areas
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            What Prototype Development at IDRP Covers
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Practical development support to shape, test, refine, and demonstrate solution ideas.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="area in prototypeAreas"
            :key="area.title"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-teal-200 hover:shadow-xl"
          >
            <div class="relative h-36 overflow-hidden" :class="area.bg">
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
            Turning Ideas Into Demonstrable Solutions
          </h2>
          <p class="mt-3 text-teal-100">
            Structured support for validation, iteration, and pilot readiness.
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

    <!-- Enquiry Form -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-3xl">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Build With Us
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Submit a Prototype Enquiry</h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Share your idea, prototype requirement, or development goal and our team will connect
            with you.
          </p>
        </div>

        <form
          class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
          @submit.prevent="submitPrototypeForm"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Your Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="prototypeForm.name"
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
                v-model.trim="prototypeForm.organization"
                type="text"
                placeholder="Startup / Company / Institution"
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
                v-model.trim="prototypeForm.phone"
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
                v-model.trim="prototypeForm.email"
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Prototype Type <span class="text-red-500">*</span>
            </label>
            <select
              v-model="prototypeForm.prototypeType"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            >
              <option value="" disabled>Select a prototype type</option>
              <option
                v-for="option in prototypeOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Idea / Prototype Requirement <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model.trim="prototypeForm.details"
              rows="5"
              placeholder="Describe your idea, development stage, features needed, technical scope, or expected outcome..."
              class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-500">
            <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
            <p>
              By submitting this form, I/We consent to IDRP collecting and using the provided
              information solely for the purpose of evaluating and responding to prototype
              development, innovation support, research translation, technical validation,
              consulting, and related service requests. The information is shared voluntarily, and
              I/We acknowledge that no confidential or proprietary data should be submitted unless
              we are comfortable with its use for these purposes. IDRP will maintain reasonable
              confidentiality, will not share information with third parties without consent (except
              where required by law or for service delivery), and may contact us using the provided
              details regarding this request and relevant opportunities.
            </p>
          </div>

          <div class="flex items-start gap-3">
            <input
              id="prototypeConsent"
              v-model="prototypeForm.consent"
              type="checkbox"
              class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
              required
            />
            <label
              for="prototypeConsent"
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
              Submit Prototype Enquiry
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

type PrototypeForm = {
  name: string
  organization: string
  phone: string
  email: string
  prototypeType: string
  details: string
  consent: boolean
}

type Stat = {
  value: string
  label: string
}

type PrototypeArea = {
  title: string
  emoji: string
  image: string
  bg: string
  visible: boolean
}

const showHeroImage = ref(true)
const formSubmitted = ref(false)

const prototypeOptions: string[] = [
  'Hardware Prototype',
  'Software Prototype',
  'Product MVP',
  'Pilot-Ready Model',
  'Proof of Concept',
  'Research Translation Prototype',
]

const prototypeForm = reactive<PrototypeForm>({
  name: '',
  organization: '',
  phone: '',
  email: '',
  prototypeType: '',
  details: '',
  consent: false,
})

const stats: Stat[] = [
  { value: '50+', label: 'Prototype Concepts Supported' },
  { value: '20+', label: 'Pilot & Validation Tracks' },
  { value: '15+', label: 'Technology Domains Covered' },
  { value: '100+', label: 'Mentors, Experts & Builders' },
]

const prototypeAreas = reactive<PrototypeArea[]>([
  {
    title: 'Concept Visualization',
    emoji: '💡',
    image: '/prototype-concept.jfif',
    bg: 'bg-amber-50',
    visible: true,
  },
  {
    title: 'Proof of Concept',
    emoji: '🧪',
    image: '/prototype-poc.jfif',
    bg: 'bg-teal-50',
    visible: true,
  },
  {
    title: 'MVP Development',
    emoji: '⚙️',
    image: '/prototype-mvp.jfif',
    bg: 'bg-cyan-50',
    visible: true,
  },
  {
    title: 'Testing & Refinement',
    emoji: '🔍',
    image: '/prototype-testing.jfif',
    bg: 'bg-green-50',
    visible: true,
  },
  {
    title: 'Pilot Readiness',
    emoji: '🚀',
    image: '/prototype-pilot.jfif',
    bg: 'bg-indigo-50',
    visible: true,
  },
])

function resetPrototypeForm() {
  prototypeForm.name = ''
  prototypeForm.organization = ''
  prototypeForm.phone = ''
  prototypeForm.email = ''
  prototypeForm.prototypeType = ''
  prototypeForm.details = ''
  prototypeForm.consent = false
}

function submitPrototypeForm() {
  formSubmitted.value = true
  resetPrototypeForm()

  window.setTimeout(() => {
    formSubmitted.value = false
  }, 6000)
}
</script>