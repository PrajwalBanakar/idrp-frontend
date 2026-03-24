<template>
  <div class="technical-education-academy-view">
    <!-- Hero -->
    <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/technical-education-academy-hero.jfif"
        alt="Technical Education Academy"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-cyan-800/45" />
      <div class="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 py-16 md:px-16">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm"
          >
            Services
          </span>
          <h1 class="mb-4 mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Technical Education Academy
          </h1>
          <p class="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Structured technical learning, postgraduate programs, faculty development, and
            short-format workshops designed to build deep-tech capability and innovation readiness.
          </p>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Learning & Capacity Building
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
          Practical Technical Learning for Students, Faculty, and Professionals.
        </h2>

        <div class="space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            At IDRP, the Technical Education Academy is designed to bridge the gap between academic
            foundations, industry expectations, and emerging technology skills.
          </p>
          <p>
            We offer structured technical training, postgraduate learning pathways, faculty
            development initiatives, applied workshops, and innovation-focused capacity building
            programs for students, educators, professionals, and organizations.
          </p>
          <p>
            Our programs are built to strengthen knowledge, improve hands-on readiness, and support
            lifelong learning across evolving technical domains.
          </p>
        </div>

        <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
      </div>
    </section>

    <!-- Academy Areas -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Program Areas
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            What Technical Education Academy Covers
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            Learning pathways and technical upskilling programs designed for relevance, rigor, and
            real-world readiness.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="area in academyAreas"
            :key="area.title"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
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
            Building Skills for the Next Generation of Innovators
          </h2>
          <p class="mt-3 text-teal-100">
            Structured learning support across technical, academic, and professional contexts.
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

    <!-- Courses & Workshops -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Programs Offered
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Courses & Workshops
          </h2>
          <p class="mx-auto mt-3 max-w-3xl text-gray-500">
            Explore structured learning pathways, postgraduate programs, faculty development
            initiatives, and short-duration workshops offered through the Technical Education Academy.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article
            v-for="course in courses"
            :key="course.title"
            class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400" />
            <div class="p-8">
              <div class="mb-4 flex flex-wrap items-center gap-3">
                <span class="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">
                  {{ course.duration }}
                </span>
                <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                  {{ course.type }}
                </span>
              </div>

              <h3 class="text-2xl font-bold text-gray-900">
                {{ course.title }}
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-gray-600">
                {{ course.description }}
              </p>

              <ul class="mt-6 space-y-2">
                <li
                  v-for="feature in course.features"
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span class="mt-0.5 text-teal-500">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <div class="mt-8">
                <RouterLink
                  :to="course.route"
                  class="inline-flex rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
                >
                  Explore
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-4xl text-center">
        <h3 class="text-3xl font-bold text-white">
          Looking for the right learning pathway?
        </h3>
        <p class="mt-3 text-teal-100">
          Whether you are a learner, faculty member, institution, or industry professional, IDRP
          can help identify the most suitable course, workshop, or training format.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/courses/online-mtech"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            Explore Online M.Tech
          </RouterLink>

          <RouterLink
            to="/contact"
            class="rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Enquiry Form -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-3xl">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Learn With Us
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Submit a Training Enquiry</h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Tell us about your learning requirement, training goal, or program interest and our
            team will connect with you.
          </p>
        </div>

        <form
          class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
          @submit.prevent="submitAcademyForm"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Your Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="academyForm.name"
                type="text"
                placeholder="Full name"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Organization / Institution <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="academyForm.organization"
                type="text"
                placeholder="College / Company / Institution"
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
                v-model.trim="academyForm.phone"
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
                v-model.trim="academyForm.email"
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Program Interest <span class="text-red-500">*</span>
            </label>
            <select
              v-model="academyForm.programType"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            >
              <option value="" disabled>Select a program area</option>
              <option
                v-for="option in academyOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Training Requirement <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model.trim="academyForm.details"
              rows="5"
              placeholder="Describe the technical area, audience, duration, expected outcomes, or type of program you are looking for..."
              class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-500">
            <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
            <p>
              By submitting this form, I/We consent to IDRP collecting and using the provided
              information solely for the purpose of evaluating and responding to technical
              education, training, capacity building, faculty development, student programs,
              workshops, innovation learning, consulting, and related service requests. The
              information is shared voluntarily, and I/We acknowledge that no confidential or
              proprietary data should be submitted unless we are comfortable with its use for these
              purposes. IDRP will maintain reasonable confidentiality, will not share information
              with third parties without consent (except where required by law or for service
              delivery), and may contact us using the provided details regarding this request and
              relevant opportunities.
            </p>
          </div>

          <div class="flex items-start gap-3">
            <input
              id="academyConsent"
              v-model="academyForm.consent"
              type="checkbox"
              class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
              required
            />
            <label
              for="academyConsent"
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
              Submit Training Enquiry
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
import { RouterLink } from 'vue-router'

type AcademyForm = {
  name: string
  organization: string
  phone: string
  email: string
  programType: string
  details: string
  consent: boolean
}

type Stat = {
  value: string
  label: string
}

type AcademyArea = {
  title: string
  emoji: string
  image: string
  bg: string
  visible: boolean
}

type CourseCard = {
  title: string
  duration: string
  type: string
  description: string
  route: string
  features: string[]
}

const showHeroImage = ref(true)
const formSubmitted = ref(false)

const academyOptions: string[] = [
  'Online M.Tech Program',
  'IET Program',
  'Faculty Development Program',
  '3DW Workshop',
  'Student Technical Training',
  'Industry-Oriented Workshop',
  'Customized Technical Program',
]

const academyForm = reactive<AcademyForm>({
  name: '',
  organization: '',
  phone: '',
  email: '',
  programType: '',
  details: '',
  consent: false,
})

const stats: Stat[] = [
  { value: '100+', label: 'Training Sessions & Workshops' },
  { value: '25+', label: 'Technical Domains Covered' },
  { value: '5000+', label: 'Students, Faculty & Professionals Reached' },
  { value: '50+', label: 'Institutional & Industry Learning Partners' },
]

const academyAreas = reactive<AcademyArea[]>([
  {
    title: 'Student Upskilling',
    emoji: '🎓',
    image: '/academy-students.jfif',
    bg: 'bg-teal-50',
    visible: true,
  },
  {
    title: 'Faculty Development',
    emoji: '👩‍🏫',
    image: '/academy-faculty.jfif',
    bg: 'bg-cyan-50',
    visible: true,
  },
  {
    title: 'Workshops & Bootcamps',
    emoji: '🛠️',
    image: '/academy-workshops.jfif',
    bg: 'bg-amber-50',
    visible: true,
  },
  {
    title: 'Emerging Technology Training',
    emoji: '💻',
    image: '/academy-tech.jfif',
    bg: 'bg-indigo-50',
    visible: true,
  },
  {
    title: 'Innovation Learning',
    emoji: '🚀',
    image: '/academy-innovation.jfif',
    bg: 'bg-green-50',
    visible: true,
  },
])

const courses: CourseCard[] = [
  {
    title: 'Online M.Tech Program',
    duration: '2 Years',
    type: 'Postgraduate Program',
    description:
      'A structured online postgraduate program designed to build advanced capability in deep-tech, applied AI, research-oriented problem solving, and innovation-led engineering practice.',
    route: '/courses/online-mtech',
    features: [
      'Online delivery for working professionals and learners',
      'Advanced technical and research-oriented learning',
      'Industry and innovation relevance',
      'Designed for long-term capability building',
    ],
  },
  {
    title: 'IET Program',
    duration: '3 Months',
    type: 'Short-Term Program',
    description:
      'A focused learning track intended to provide practical exposure, applied technical grounding, and industry-facing learning for emerging innovators and professionals.',
    route: '/courses/iet',
    features: [
      'Short-duration structured engagement',
      'Practical orientation',
      'Focused skill-building',
      'Industry relevance',
    ],
  },
  {
    title: 'Faculty Development Program (FDP)',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A compact faculty-focused program to strengthen pedagogy, technology awareness, research alignment, and emerging domain readiness.',
    route: '/courses/fdp',
    features: [
      'Faculty upskilling',
      'Emerging technology orientation',
      'Pedagogy and research alignment',
      'Short and intensive format',
    ],
  },
  {
    title: '3DW',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A hands-on short workshop format designed for rapid technical immersion, focused learning outcomes, and applied exposure to specific tools or themes.',
    route: '/courses/3dw',
    features: [
      'Hands-on learning',
      'Focused technical immersion',
      'Short-format delivery',
      'Practical outcomes',
    ],
  },
]

function resetAcademyForm() {
  academyForm.name = ''
  academyForm.organization = ''
  academyForm.phone = ''
  academyForm.email = ''
  academyForm.programType = ''
  academyForm.details = ''
  academyForm.consent = false
}

function submitAcademyForm() {
  formSubmitted.value = true
  resetAcademyForm()

  window.setTimeout(() => {
    formSubmitted.value = false
  }, 6000)
}
</script>