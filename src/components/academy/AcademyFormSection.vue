<template>
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
            <option v-for="option in academyOptions" :key="option" :value="option">
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
</template>

<script setup lang="ts">
import { computed, reactive, ref, onBeforeUnmount } from 'vue'
import { academyOptions } from '@/data/courses'

type AcademyForm = {
  name: string
  organization: string
  phone: string
  email: string
  programType: string
  details: string
  consent: boolean
}

let successMessageTimeout: number | null = null

const formSubmitted = ref(false)

const academyForm = reactive<AcademyForm>({
  name: '',
  organization: '',
  phone: '',
  email: '',
  programType: '',
  details: '',
  consent: false,
})

const hasValidForm = computed(() => {
  return (
    academyForm.name.trim() &&
    academyForm.organization.trim() &&
    academyForm.phone.trim() &&
    academyForm.email.trim() &&
    academyForm.programType &&
    academyForm.details.trim() &&
    academyForm.consent
  )
})

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
  if (!hasValidForm.value) return

  formSubmitted.value = true
  resetAcademyForm()

  if (successMessageTimeout) {
    window.clearTimeout(successMessageTimeout)
  }

  successMessageTimeout = window.setTimeout(() => {
    formSubmitted.value = false
    successMessageTimeout = null
  }, 6000)
}

onBeforeUnmount(() => {
  if (successMessageTimeout) {
    window.clearTimeout(successMessageTimeout)
  }
})
</script>