<template>
  <div class="w-full lg:w-1/2">
    <form
      class="space-y-6 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
      @submit.prevent="submitForm"
    >
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label class="mb-2 block text-sm font-semibold text-gray-700">
            Your Name <span class="text-red-500">*</span>
          </label>
          <input
            v-model.trim="form.name"
            type="text"
            placeholder="Full name"
            class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
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
            class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
      </div>

      <div>
        <label class="mb-2 block text-sm font-semibold text-gray-700">
          Email ID <span class="text-red-500">*</span>
        </label>
        <input
          v-model.trim="form.email"
          type="email"
          placeholder="you@example.com"
          class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div>
        <label class="mb-2 block text-sm font-semibold text-gray-700">
          Message <span class="text-red-500">*</span>
        </label>
        <textarea
          v-model.trim="form.message"
          rows="5"
          placeholder="Tell us about yourself and how you'd like to collaborate..."
          class="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div class="rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-500">
        <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
        <p>
          By submitting this form, I/We consent to IDRP collecting and using the
          provided information solely for the purpose of evaluating and delivering
          incubation, acceleration, funding, mentorship, networking, and related
          programs. The information is shared voluntarily, and I/We acknowledge
          that no confidential or proprietary data should be submitted unless we
          are comfortable with its use for these purposes. IDRP will maintain
          reasonable confidentiality, will not share information with third
          parties without consent (except where required by law or for service
          delivery), and may contact us using the provided details regarding this
          application and relevant opportunities.
        </p>
      </div>

      <div class="flex items-start gap-3">
        <input
          id="contactConsent"
          v-model="form.consent"
          type="checkbox"
          class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
          required
        />
        <label
          for="contactConsent"
          class="cursor-pointer text-sm leading-relaxed text-gray-600"
        >
          I have read and agree to the disclaimer
        </label>
      </div>

      <button
        type="submit"
        class="w-full rounded-xl bg-teal-700 py-4 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-teal-800"
      >
        Send Message
      </button>

      <div
        v-if="submitted"
        class="flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 px-5 py-4 text-sm font-medium text-teal-700"
      >
        <span class="text-xl">✅</span>
        Thank you! We have received your message and will get back to you shortly.
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type ContactForm = {
  name: string
  phone: string
  email: string
  message: string
  consent: boolean
}

const submitted = ref(false)

const form = reactive<ContactForm>({
  name: '',
  phone: '',
  email: '',
  message: '',
  consent: false,
})

function resetForm() {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.message = ''
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