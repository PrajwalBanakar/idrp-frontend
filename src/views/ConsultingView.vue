<template>
  <div class="consulting-view">
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/consulting-hero.jfif"
        alt="Consulting"
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
          Consulting
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Advisory & Strategic Support
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
          Expert Guidance for Growth, Innovation, and Execution.
        </h2>

        <div class="space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            At IDRP, Consulting is designed to help organizations, startups, institutions, and
            innovation teams solve complex challenges through structured expert support.
          </p>
          <p>
            We work across strategy, technology, research, innovation, systems improvement,
            entrepreneurship, and capability building to provide practical recommendations and
            implementation-oriented guidance.
          </p>
          <p>
            Whether you are exploring a new initiative, improving an existing system, validating an
            approach, or planning for scale, our consulting engagements are focused on clarity,
            relevance, and outcomes.
          </p>
        </div>

        <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
      </div>
    </section>

    <!-- Consulting Areas -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Consulting Areas
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            What Consulting at IDRP Covers
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Strategic and technical support tailored to help teams make better decisions and execute
            with confidence.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="area in consultingAreas"
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
            Turning Expertise Into Actionable Progress
          </h2>
          <p class="mt-3 text-teal-100">
            Structured advisory support for strategy, innovation, execution, and transformation.
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
            Consult With Us
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Submit a Consulting Enquiry</h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Share your consulting requirement, challenge, or advisory need and our team will get in
            touch with you.
          </p>
        </div>

        <form
          class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
          @submit.prevent="submitConsultingForm"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Your Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="consultingForm.name"
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
                v-model.trim="consultingForm.organization"
                type="text"
                placeholder="Company / Startup / Institution"
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
                v-model.trim="consultingForm.phone"
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
                v-model.trim="consultingForm.email"
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Consulting Area <span class="text-red-500">*</span>
            </label>
            <select
              v-model="consultingForm.consultingType"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            >
              <option value="" disabled>Select a consulting area</option>
              <option
                v-for="option in consultingOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Requirement / Challenge <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model.trim="consultingForm.details"
              rows="5"
              placeholder="Describe your consulting need, challenge, objective, or expected support..."
              class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-500">
            <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
            <p>
              By submitting this form, I/We consent to IDRP collecting and using the provided
              information solely for the purpose of evaluating and responding to consulting,
              advisory, innovation support, research, technical services, training, incubation, and
              related service requests. The information is shared voluntarily, and I/We acknowledge
              that no confidential or proprietary data should be submitted unless we are comfortable
              with its use for these purposes. IDRP will maintain reasonable confidentiality, will
              not share information with third parties without consent (except where required by law
              or for service delivery), and may contact us using the provided details regarding this
              request and relevant opportunities.
            </p>
          </div>

          <div class="flex items-start gap-3">
            <input
              id="consultingConsent"
              v-model="consultingForm.consent"
              type="checkbox"
              class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
              required
            />
            <label
              for="consultingConsent"
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
              Submit Consulting Enquiry
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

type ConsultingForm = {
  name: string
  organization: string
  phone: string
  email: string
  consultingType: string
  details: string
  consent: boolean
}

type Stat = {
  value: string
  label: string
}

type ConsultingArea = {
  title: string
  emoji: string
  image: string
  bg: string
  visible: boolean
}

const showHeroImage = ref(true)
const formSubmitted = ref(false)

const consultingOptions: string[] = [
  'Business Strategy Consulting',
  'Technology Consulting',
  'Innovation & Product Consulting',
  'Research & Validation Support',
  'Capacity Building & Training Advisory',
  'Customized Consulting Engagement',
]

const consultingForm = reactive<ConsultingForm>({
  name: '',
  organization: '',
  phone: '',
  email: '',
  consultingType: '',
  details: '',
  consent: false,
})

const stats: Stat[] = [
  { value: '75+', label: 'Consulting Engagement Themes' },
  { value: '30+', label: 'Innovation & Strategy Areas' },
  { value: '20+', label: 'Industry & Academic Sectors Served' },
  { value: '100+', label: 'Experts, Mentors & Advisors' },
]

const consultingAreas = reactive<ConsultingArea[]>([
  {
    title: 'Strategy & Planning',
    emoji: '📘',
    image: '/consulting-strategy.jfif',
    bg: 'bg-blue-50',
    visible: true,
  },
  {
    title: 'Technology Advisory',
    emoji: '💻',
    image: '/consulting-technology.jfif',
    bg: 'bg-teal-50',
    visible: true,
  },
  {
    title: 'Innovation Consulting',
    emoji: '💡',
    image: '/consulting-innovation.jfif',
    bg: 'bg-amber-50',
    visible: true,
  },
  {
    title: 'Research & Validation',
    emoji: '🔬',
    image: '/consulting-research.jfif',
    bg: 'bg-cyan-50',
    visible: true,
  },
  {
    title: 'Execution Support',
    emoji: '🚀',
    image: '/consulting-execution.jfif',
    bg: 'bg-indigo-50',
    visible: true,
  },
])

function resetConsultingForm() {
  consultingForm.name = ''
  consultingForm.organization = ''
  consultingForm.phone = ''
  consultingForm.email = ''
  consultingForm.consultingType = ''
  consultingForm.details = ''
  consultingForm.consent = false
}

function submitConsultingForm() {
  formSubmitted.value = true
  resetConsultingForm()

  window.setTimeout(() => {
    formSubmitted.value = false
  }, 6000)
}
</script>