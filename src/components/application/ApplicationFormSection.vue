<template>
  <div class="rounded-3xl bg-white p-8 shadow-xl">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900">Application Form</h2>
      <p class="mt-2 text-sm leading-relaxed text-gray-600">
        Please complete the application below. This helps the IDRP team understand your startup,
        stage of progress, and the kind of support you are looking for through
        the {{ program.title }}.
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
          />
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
          />
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
            />
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
            />
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
            and I am submitting this application for the {{ program.title }}.
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
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ApplicationForm, ProgramMeta } from '@/types/application'

const props = defineProps<{
  program: ProgramMeta
  supportOptions: string[]
}>()

const submitted = ref(false)

const createInitialFormState = (): ApplicationForm => ({
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
  supportNeeded: [],
  pitchDeck: '',
  demoLink: '',
  declaration: false,
})

const form = reactive<ApplicationForm>(createInitialFormState())

function resetForm() {
  Object.assign(form, createInitialFormState())
}

function handleSubmit() {
  console.log('Program application submitted:', {
    programTitle: props.program.title,
    ...form,
  })

  submitted.value = true
  resetForm()
}
</script>