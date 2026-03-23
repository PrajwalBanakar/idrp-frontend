<template>
  <div class="our-partners-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/partners-hero.jfif"
        alt="Our Partners"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Ecosystem
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Our Partners
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Together We Build
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold text-gray-900">
          Shaping the Ecosystem Together
        </h2>
        <p class="mb-5 text-lg leading-relaxed text-gray-600">
          At IDRP, we believe collaboration drives innovation. Our partnerships
          span academia, industry, investors, government, and global networks,
          working together to support startup growth.
        </p>
        <p class="text-lg leading-relaxed text-gray-600">
          Over the years, these collaborations have enabled greater access,
          accelerated impact, and strengthened a connected, founder-first
          ecosystem.
        </p>
        <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
      </div>
    </section>

    <!-- Our Partnerships -->
    <section class="bg-gray-50 px-6 py-6 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Network
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Our Partnerships</h2>
        </div>

        <div
          v-for="category in partnerCategories"
          :key="category.key"
          class="mb-16 last:mb-4"
        >
          <div class="mb-6 flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg text-white"
              :class="category.iconBgClass"
            >
              {{ category.icon }}
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900">{{ category.title }}</h3>
              <p
                class="mt-0.5 text-sm font-medium"
                :class="category.textClass"
              >
                {{ category.subtitle }}
              </p>
              <p class="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
                {{ category.description }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <article
              v-for="partner in category.partners"
              :key="partner.name"
              class="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md"
              :class="category.hoverBorderClass"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                :style="{ background: partner.color }"
              >
                {{ partner.abbr }}
              </div>
              <p class="text-center text-xs font-semibold leading-tight text-gray-600">
                {{ partner.name }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner with IDRP Form -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-3xl">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Collaborate
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Partner with IDRP</h2>
          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Interested in joining our ecosystem? Tell us about your organisation
            and how we can build something meaningful together.
          </p>
        </div>

        <form
          class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
          @submit.prevent="submitForm"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Organization Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="form.orgName"
                type="text"
                placeholder="e.g. Acme Technologies Pvt. Ltd."
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Your Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="form.name"
                type="text"
                placeholder="Full name"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Email ID <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="form.email"
                type="email"
                placeholder="you@organisation.com"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="form.phone"
                type="tel"
                placeholder="+91 98765 43210"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Type of Partner <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.partnerType"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            >
              <option value="" disabled>Select partnership type</option>
              <option
                v-for="type in partnerTypeOptions"
                :key="type"
                :value="type"
              >
                {{ type }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Website / LinkedIn URL
              <span class="font-normal text-gray-400">(Optional)</span>
            </label>
            <input
              v-model.trim="form.url"
              type="url"
              placeholder="https://"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Brief Description of Collaboration Interest <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model.trim="form.description"
              rows="4"
              placeholder="Tell us how you'd like to collaborate with IDRP and what value you can bring to the ecosystem..."
              class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div class="rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-500">
            <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
            <p>
              By submitting this form, I/We consent to IDRP collecting and using
              the provided information solely for the purpose of evaluating and
              delivering incubation, acceleration, funding, mentorship,
              networking, and related programs. The information is shared
              voluntarily, and I/We acknowledge that no confidential or
              proprietary data should be submitted unless we are comfortable
              with its use for these purposes. IDRP will maintain reasonable
              confidentiality, will not share information with third parties
              without consent (except where required by law or for service
              delivery), and may contact us using the provided details regarding
              this application and relevant opportunities.
            </p>
          </div>

          <div class="flex items-start gap-3">
            <input
              id="consent"
              v-model="form.consent"
              type="checkbox"
              class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
              required
            />
            <label
              for="consent"
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
              Submit Partnership Request
            </button>
          </div>

          <div
            v-if="submitted"
            class="flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 px-5 py-4 text-sm font-medium text-teal-700"
          >
            <span class="text-xl">✅</span>
            Thank you! We have received your request and will be in touch shortly.
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type Partner = {
  name: string
  abbr: string
  color: string
}

type PartnerCategory = {
  key: string
  title: string
  subtitle: string
  description: string
  icon: string
  iconBgClass: string
  textClass: string
  hoverBorderClass: string
  partners: Partner[]
}

type PartnerForm = {
  orgName: string
  name: string
  email: string
  phone: string
  partnerType: string
  url: string
  description: string
  consent: boolean
}

const showHeroImage = ref(true)
const submitted = ref(false)

const partnerTypeOptions: string[] = [
  'Academic Partner',
  'Technology Partner',
  'Ecosystem Partner',
  'Investor Network',
  // 'International Ally',
  'Corporate Partner',
  'Government / Policy Partner',
  'Media Partner',
  'Other',
]

const form = reactive<PartnerForm>({
  orgName: '',
  name: '',
  email: '',
  phone: '',
  partnerType: '',
  url: '',
  description: '',
  consent: false,
})

function resetForm() {
  form.orgName = ''
  form.name = ''
  form.email = ''
  form.phone = ''
  form.partnerType = ''
  form.url = ''
  form.description = ''
  form.consent = false
}

function submitForm() {
  submitted.value = true
  resetForm()

  window.setTimeout(() => {
    submitted.value = false
  }, 6000)
}

const partnerCategories: PartnerCategory[] = [
  // Academic / Training
  {
    key: 'academic',
    title: 'Academic & Training Partners',
    subtitle: 'Building skills and deep-tech capability.',
    description:
      'We collaborate with academic institutions and training providers to build strong technical foundations, enable research translation, and prepare talent for industry and innovation ecosystems.',
    icon: '🎓',
    iconBgClass: 'bg-teal-600',
    textClass: 'text-teal-600',
    hoverBorderClass: 'hover:border-teal-200',
    partners: [
      { name: 'Sandeepani (SESD)', abbr: 'SES', color: 'linear-gradient(135deg,#7c3aed,#a78bfa)' },
      { name: 'FAS Silicon Academy', abbr: 'FAS', color: 'linear-gradient(135deg,#059669,#34d399)' },
      { name: 'Maven Silicon', abbr: 'MS', color: 'linear-gradient(135deg,#16a34a,#86efac)' },
      { name: 'Fuel', abbr: 'FUEL', color: 'linear-gradient(135deg,#f59e0b,#fde68a)' },
      { name: 'Xcel Corp', abbr: 'XC', color: 'linear-gradient(135deg,#6b7280,#9ca3af)' },
      { name: 'RV-VLSI Design Center', abbr: 'RV', color: 'linear-gradient(135deg,#0f766e,#99f6e4)' },
    ],
  },

  // Technology / Deep Tech
  {
    key: 'technology',
    title: 'Technology & Industry Partners',
    subtitle: 'Driving applied engineering and deep-tech innovation.',
    description:
      'Our technology partners enable product development, semiconductor innovation, AI solutions, and industry-aligned engineering through tools, expertise, and collaborative execution.',
    icon: '💻',
    iconBgClass: 'bg-blue-600',
    textClass: 'text-blue-600',
    hoverBorderClass: 'hover:border-blue-200',
    partners: [
      { name: 'Infosys', abbr: 'INF', color: 'linear-gradient(135deg,#2563eb,#60a5fa)' },
      { name: 'iMerit', abbr: 'IM', color: 'linear-gradient(135deg,#dc2626,#f87171)' },
      { name: 'Nanopix', abbr: 'NP', color: 'linear-gradient(135deg,#0ea5e9,#67e8f9)' },
      { name: 'Sankalp Semiconductor', abbr: 'SS', color: 'linear-gradient(135deg,#2563eb,#93c5fd)' },
      { name: 'Tessolve', abbr: 'TES', color: 'linear-gradient(135deg,#ea580c,#fb923c)' },
      { name: 'FutureWiz', abbr: 'FW', color: 'linear-gradient(135deg,#f97316,#fdba74)' },
    ],
  },

  // Ecosystem / Government / Foundations
  {
    key: 'ecosystem',
    title: 'Ecosystem & Policy Partners',
    subtitle: 'Strengthening the innovation ecosystem.',
    description:
      'We work with government bodies, foundations, and ecosystem enablers to build infrastructure, support startups, and drive innovation-led growth across sectors.',
    icon: '🌐',
    iconBgClass: 'bg-cyan-600',
    textClass: 'text-cyan-600',
    hoverBorderClass: 'hover:border-cyan-200',
    partners: [
      { name: 'KEONICS', abbr: 'KEO', color: 'linear-gradient(135deg,#0f766e,#2dd4bf)' },
      { name: 'STPI', abbr: 'STPI', color: 'linear-gradient(135deg,#2563eb,#60a5fa)' },
      { name: 'CII', abbr: 'CII', color: 'linear-gradient(135deg,#0f766e,#2dd4bf)' },
      { name: 'Deshpande Foundation', abbr: 'DF', color: 'linear-gradient(135deg,#16a34a,#4ade80)' },
      { name: 'EkStep Foundation', abbr: 'EK', color: 'linear-gradient(135deg,#0ea5e9,#38bdf8)' },
      { name: 'Culkey Foundation', abbr: 'CF', color: 'linear-gradient(135deg,#b45309,#f59e0b)' },
      { name: 'Create (Spin-off)', abbr: 'CRT', color: 'linear-gradient(135deg,#374151,#9ca3af)' },
      { name: 'GX', abbr: 'GX', color: 'linear-gradient(135deg,#111827,#4b5563)' },
    ],
  },

  // Investors
  {
    key: 'investor',
    title: 'Investor Networks',
    subtitle: 'Fueling innovation with capital and connections.',
    description:
      'We collaborate with venture capital funds, angel networks, and ecosystem investors to support startups in accessing funding, mentorship, and growth opportunities.',
    icon: '💰',
    iconBgClass: 'bg-emerald-600',
    textClass: 'text-emerald-600',
    hoverBorderClass: 'hover:border-emerald-200',
    partners: [
      { name: '100X.VC', abbr: '100X', color: 'linear-gradient(135deg,#1e1b4b,#4338ca)' },
      { name: 'Seafund', abbr: 'SEA', color: 'linear-gradient(135deg,#0f766e,#5eead4)' },
      { name: 'Campus Fund', abbr: 'CF', color: 'linear-gradient(135deg,#7c3aed,#c084fc)' },
      { name: 'TiE', abbr: 'TiE', color: 'linear-gradient(135deg,#dc2626,#fb7185)' },
    ],
  },
]
</script>