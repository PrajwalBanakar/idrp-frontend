<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700 px-6 py-20 md:px-16">
      <div class="mx-auto max-w-5xl text-white">
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-100"
        >
          ⚡ Open Incubation
        </div>

        <h1 class="text-4xl font-extrabold leading-tight md:text-5xl">
          Community Membership Application
        </h1>

        <p class="mt-5 max-w-3xl text-base leading-relaxed text-teal-100 md:text-lg">
          External startups that are not part of the formal IDRP program can apply
          here to join as community members and access mentorship, business services,
          events, and the broader innovation ecosystem.
        </p>
      </div>
    </section>

    <!-- Form -->
    <section class="px-6 py-16 md:px-16">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <!-- Left -->
        <div class="rounded-3xl bg-white p-8 shadow-xl">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900">Apply Now</h2>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Fill in the details below. This form helps the IDRP team understand
              your startup stage, support needs, and how Open Incubation can best
              assist you.
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
                    placeholder="AI, HealthTech, EdTech, Manufacturing..."
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
                    <option>Prototype Stage</option>
                    <option>Early Revenue</option>
                    <option>Growth Stage</option>
                    <option>Established Startup</option>
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
              </div>

              <div class="mt-5">
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Problem Statement / Startup Description <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="form.description"
                  rows="5"
                  placeholder="Describe what your startup does, the problem you are solving, and the current progress."
                  class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  required
                ></textarea>
              </div>
            </div>

            <!-- Support Needed -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Support Required</h3>

              <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
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

              <div class="mt-5">
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  v-model="form.notes"
                  rows="4"
                  placeholder="Mention any specific expectations, questions, or support requirements."
                  class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                ></textarea>
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
                  I confirm that the information provided is accurate to the best of my knowledge,
                  and I am applying for IDRP Open Incubation community membership as an external startup.
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

              <RouterLink
                to="/business-services"
                class="rounded-full border border-gray-300 px-8 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Back to Business Services
              </RouterLink>
            </div>

            <p
              v-if="submitted"
              class="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              Your application has been submitted successfully.
            </p>
          </form>
        </div>

        <!-- Right -->
        <div class="space-y-6">
          <div class="rounded-3xl bg-white p-8 shadow-xl">
            <h3 class="text-xl font-bold text-gray-900">Why Join?</h3>
            <ul class="mt-5 space-y-4">
              <li
                v-for="point in benefits"
                :key="point"
                class="flex items-start gap-3 text-sm text-gray-700"
              >
                <span
                  class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white"
                >
                  ✓
                </span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-3xl bg-gradient-to-br from-teal-700 to-cyan-600 p-8 text-white shadow-xl">
            <h3 class="text-xl font-bold">Membership Snapshot</h3>
            <div class="mt-5 space-y-4 text-sm text-teal-50">
              <p><strong class="text-white">Model:</strong> Open Incubation</p>
              <p><strong class="text-white">Eligibility:</strong> External startups outside formal cohort</p>
              <p><strong class="text-white">Access:</strong> Mentors, events, business services, founder support</p>
              <p><strong class="text-white">Fee:</strong> Nominal annual community membership fee</p>
              <p><strong class="text-white">Approach:</strong> Flexible, founder-first, on-demand engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

const submitted = ref(false)

const supportOptions = [
  'Mentorship',
  'Business Strategy',
  'Investor Readiness',
  'Legal / Compliance Support',
  'Branding / Go-to-Market',
  'Networking / Events',
  'Technical Guidance',
  'Funding Connect',
]

const benefits = [
  'Access expert mentors and startup advisors',
  'Use IDRP business services without joining a formal cohort',
  'Participate in events, workshops, and networking sessions',
  'Get founder-first support at your own pace',
]

const form = reactive({
  founderName: '',
  email: '',
  phone: '',
  website: '',
  startupName: '',
  domain: '',
  stage: '',
  teamSize: '',
  description: '',
  supportNeeded: [] as string[],
  notes: '',
  declaration: false,
})

const handleSubmit = () => {
  console.log('Community Membership Application:', { ...form })
  submitted.value = true

  form.founderName = ''
  form.email = ''
  form.phone = ''
  form.website = ''
  form.startupName = ''
  form.domain = ''
  form.stage = ''
  form.teamSize = ''
  form.description = ''
  form.supportNeeded = []
  form.notes = ''
  form.declaration = false
}
</script>