<template>
  <section class="px-6 py-24 md:px-16">
    <div class="mx-auto max-w-3xl">
      <div class="mb-12 text-center">
        <span
          v-if="eyebrow"
          class="text-sm font-semibold uppercase tracking-widest text-teal-600"
        >
          {{ eyebrow }}
        </span>

        <h2 class="mt-2 text-4xl font-bold text-gray-900">
          {{ title }}
        </h2>

        <p
          v-if="description"
          class="mx-auto mt-3 max-w-xl text-gray-500"
        >
          {{ description }}
        </p>
      </div>

      <form
        class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
        @submit.prevent="submitForm"
      >
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-for="field in primaryFields" :key="field.key">
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              {{ field.label }} <span class="text-red-500">*</span>
            </label>

            <input
              v-model.trim="form[field.key]"
              :type="field.type"
              :placeholder="field.placeholder"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-for="field in secondaryFields" :key="field.key">
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              {{ field.label }} <span class="text-red-500">*</span>
            </label>

            <input
              v-model.trim="form[field.key]"
              :type="field.type"
              :placeholder="field.placeholder"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
        </div>

        <div v-if="options.length">
          <label class="mb-2 block text-sm font-semibold text-gray-700">
            {{ selectLabel }} <span class="text-red-500">*</span>
          </label>

          <select
            v-model="form.area"
            class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          >
            <option disabled value="">{{ selectPlaceholder }}</option>
            <option
              v-for="option in options"
              :key="getOptionValue(option)"
              :value="getOptionValue(option)"
            >
              {{ getOptionLabel(option) }}
            </option>
          </select>
        </div>

        <div>
          <label class="mb-2 block text-sm font-semibold text-gray-700">
            {{ detailsLabel }} <span class="text-red-500">*</span>
          </label>

          <textarea
            v-model.trim="form.details"
            rows="5"
            :placeholder="detailsPlaceholder"
            class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-500">
          <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
          <p>
            By submitting this form, I/We consent to IDRP collecting and using the provided
            information solely for the purpose of evaluating and responding to service enquiries,
            collaborations, advisory requests, innovation support, research discussions, training
            requirements, and related engagement opportunities. The information is shared
            voluntarily, and I/We acknowledge that confidential or proprietary data should not be
            submitted unless we are comfortable with its use for these purposes. IDRP will maintain
            reasonable confidentiality, will not share information with third parties without
            consent except where required by law or for service delivery, and may contact us using
            the details provided regarding this enquiry and relevant opportunities.
          </p>
        </div>

        <div class="flex items-start gap-3">
          <input
            id="serviceConsent"
            v-model="form.consent"
            type="checkbox"
            class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
            required
          />
          <label
            for="serviceConsent"
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
            {{ submitLabel }}
          </button>
        </div>

        <div
          v-if="submitted"
          class="flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 px-5 py-4 text-sm font-medium text-teal-700"
        >
          <span class="text-xl">✅</span>
          {{ successMessage }}
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ServiceFormOption } from '@/types/service'

type FormState = {
  name: string
  organization: string
  phone: string
  email: string
  area: string
  details: string
  consent: boolean
}

type FieldKey = 'name' | 'organization' | 'phone' | 'email'

type InputField = {
  key: FieldKey
  label: string
  type: 'text' | 'tel' | 'email'
  placeholder: string
}

const props = withDefaults(
  defineProps<{
    options?: ServiceFormOption[]
    eyebrow?: string
    title?: string
    description?: string
    selectLabel?: string
    selectPlaceholder?: string
    detailsLabel?: string
    detailsPlaceholder?: string
    submitLabel?: string
    successMessage?: string
  }>(),
  {
    options: () => [],
    eyebrow: 'Connect With Us',
    title: 'Start a Conversation',
    description: 'Share your requirement and our team will connect with you.',
    selectLabel: 'Area of Interest',
    selectPlaceholder: 'Select an option',
    detailsLabel: 'Requirement / Challenge / Message',
    detailsPlaceholder:
      'Describe your requirement, challenge, expected outcomes, or collaboration need...',
    submitLabel: 'Submit Enquiry',
    successMessage: 'Thank you! We have received your enquiry and will get in touch shortly.',
  },
)

const submitted = ref(false)

const form = reactive<FormState>({
  name: '',
  organization: '',
  phone: '',
  email: '',
  area: '',
  details: '',
  consent: false,
})

const primaryFields: InputField[] = [
  {
    key: 'name',
    label: 'Your Name',
    type: 'text',
    placeholder: 'Full name',
  },
  {
    key: 'organization',
    label: 'Organization',
    type: 'text',
    placeholder: 'Company / Startup / Institution',
  },
]

const secondaryFields: InputField[] = [
  {
    key: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+91 98765 43210',
  },
  {
    key: 'email',
    label: 'Email ID',
    type: 'email',
    placeholder: 'you@example.com',
  },
]

function getOptionLabel(option: ServiceFormOption) {
  return option.label
}

function getOptionValue(option: ServiceFormOption) {
  return option.value
}

function resetForm() {
  form.name = ''
  form.organization = ''
  form.phone = ''
  form.email = ''
  form.area = ''
  form.details = ''
  form.consent = false
}

function submitForm() {
  submitted.value = true
  resetForm()

  window.setTimeout(() => {
    submitted.value = false
  }, 6000)
}
</script>