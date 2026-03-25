<template>
  <div v-if="applyPage" class="course-apply-view">
    <section class="relative h-[42vh] min-h-[300px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />
      <div class="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-center px-6 md:px-16">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
          {{ applyPage.eyebrow }}
        </span>
        <h1 class="mt-3 text-4xl font-extrabold text-white md:text-5xl">
          {{ applyPage.title }}
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-teal-100">
          {{ applyPage.description }}
        </p>
      </div>
    </section>

    <section class="bg-gray-50 px-6 py-20 md:px-16">
      <div class="mx-auto max-w-3xl">
        <form
          class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-10"
          @submit.prevent="submitForm"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="form.name"
                type="text"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="form.email"
                type="email"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your email"
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
                v-model.trim="form.phone"
                type="tel"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Organization / Institution
              </label>
              <input
                v-model.trim="form.organization"
                type="text"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="College / Company / Institution"
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Program Interest <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.programInterest"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            >
              <option value="" disabled>Select a program</option>
              <option
                v-for="option in applyPage.interestOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Why are you interested? <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model.trim="form.message"
              rows="5"
              class="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Tell us briefly about your interest, background, or expectations"
              required
            />
          </div>

          <div class="flex items-start gap-3">
            <input
              id="applyConsent"
              v-model="form.consent"
              type="checkbox"
              class="mt-1 h-4 w-4 rounded accent-teal-600"
              required
            />
            <label for="applyConsent" class="text-sm leading-relaxed text-gray-600">
              I confirm that the information provided is accurate and I agree to be contacted regarding this application.
            </label>
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-teal-700 py-4 text-sm font-bold text-white transition hover:bg-teal-800"
          >
            {{ applyPage.submitLabel }}
          </button>

          <div
            v-if="submitted"
            class="rounded-xl border border-teal-200 bg-teal-50 px-5 py-4 text-sm font-medium text-teal-700"
          >
            {{ applyPage.successMessage }}
          </div>
        </form>
      </div>
    </section>
  </div>

  <div v-else class="px-6 py-24 md:px-16">
    <div class="mx-auto max-w-3xl rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
      <h1 class="text-2xl font-bold text-red-700">Application page not found</h1>
      <RouterLink
        to="/courses"
        class="mt-6 inline-flex rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
      >
        Back to Courses
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getCourseApplyPageBySlug } from '@/data/courses'

type ApplyForm = {
  name: string
  email: string
  phone: string
  organization: string
  programInterest: string
  message: string
  consent: boolean
}

const route = useRoute()
const applyPage = getCourseApplyPageBySlug(String(route.params.slug ?? ''))

const submitted = ref(false)
let successTimeout: number | null = null

const form = reactive<ApplyForm>({
  name: '',
  email: '',
  phone: '',
  organization: '',
  programInterest: applyPage?.interestOptions[0] ?? '',
  message: '',
  consent: false,
})

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.organization = ''
  form.programInterest = applyPage?.interestOptions[0] ?? ''
  form.message = ''
  form.consent = false
}

function submitForm() {
  submitted.value = true
  resetForm()

  if (successTimeout) {
    window.clearTimeout(successTimeout)
  }

  successTimeout = window.setTimeout(() => {
    submitted.value = false
    successTimeout = null
  }, 6000)
}

onBeforeUnmount(() => {
  if (successTimeout) {
    window.clearTimeout(successTimeout)
  }
})
</script>