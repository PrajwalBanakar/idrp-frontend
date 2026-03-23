<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700 px-6 py-20 md:px-16"
    >
      <div class="mx-auto max-w-5xl text-white">
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-100"
        >
          📘 FDP Registration
        </div>

        <h1 class="text-4xl font-extrabold leading-tight md:text-5xl">
          Apply for Faculty Development Program
        </h1>

        <p class="mt-5 max-w-3xl text-base leading-relaxed text-teal-100 md:text-lg">
          Complete the registration form below to express your interest in the 2-day Faculty
          Development Program offered through IDRP.
        </p>
      </div>
    </section>

    <!-- Form -->
    <section class="px-6 py-16 md:px-16">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <!-- Left -->
        <div class="rounded-3xl bg-white p-8 shadow-xl">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900">Registration Form</h2>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Fill in your details to register your interest. This helps the IDRP team understand
              your academic profile, institutional role, and expectations from the FDP.
            </p>
          </div>

          <form class="space-y-8" @submit.prevent="handleSubmit">
            <!-- Personal Details -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Personal Details</h3>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Full Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.fullName"
                    type="text"
                    placeholder="Enter full name"
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
                    placeholder="Enter email address"
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
                    City / Location <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.location"
                    type="text"
                    placeholder="Enter city / location"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Academic / Institutional Details -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Academic / Institutional Details</h3>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Institution / Organization <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.institution"
                    type="text"
                    placeholder="Enter institution / organization"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Department / Discipline <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.department"
                    type="text"
                    placeholder="Computer Science, ECE, Mechanical..."
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Designation <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.designation"
                    type="text"
                    placeholder="Assistant Professor, Associate Professor..."
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <input
                    v-model="form.experience"
                    type="text"
                    placeholder="Example: 5 years"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>
            </div>

            <!-- Program Interest -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Program Interest</h3>

              <div class="space-y-5">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Areas of Teaching / Research Interest
                  </label>
                  <input
                    v-model="form.interestArea"
                    type="text"
                    placeholder="AI, Data Science, Embedded Systems, Manufacturing..."
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Why are you interested in this FDP? <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="form.statement"
                    rows="5"
                    placeholder="Describe your motivation, what you want to learn, and how this workshop will help your teaching or research."
                    class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  ></textarea>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Specific Expectations from the Workshop
                  </label>
                  <textarea
                    v-model="form.expectations"
                    rows="4"
                    placeholder="Mention specific skills, themes, or outcomes you are expecting."
                    class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  ></textarea>
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
                  and I am submitting this form for the Faculty Development Program.
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
                to="/courses/fdp"
                class="rounded-full border border-gray-300 px-8 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Back to Program
              </RouterLink>
            </div>

            <p
              v-if="submitted"
              class="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              Your FDP application has been submitted successfully.
            </p>
          </form>
        </div>

        <!-- Right -->
        <div class="space-y-6">
          <div class="rounded-3xl bg-white p-8 shadow-xl">
            <h3 class="text-xl font-bold text-gray-900">Program Snapshot</h3>
            <div class="mt-5 space-y-4 text-sm text-gray-700">
              <p><strong class="text-gray-900">Program:</strong> Faculty Development Program</p>
              <p><strong class="text-gray-900">Duration:</strong> 2 Days</p>
              <p><strong class="text-gray-900">Type:</strong> Workshop</p>
              <p>
                <strong class="text-gray-900">Focus:</strong> Pedagogy, technology awareness,
                research alignment, and faculty readiness
              </p>
            </div>
          </div>

          <div
            class="rounded-3xl bg-gradient-to-br from-teal-700 to-cyan-600 p-8 text-white shadow-xl"
          >
            <h3 class="text-xl font-bold">Why Apply?</h3>
            <ul class="mt-5 space-y-4 text-sm text-teal-50">
              <li>Compact 2-day faculty development workshop</li>
              <li>Relevant for emerging technologies and pedagogy upgrade</li>
              <li>Supports academic, research, and innovation readiness</li>
              <li>Useful for faculty, coordinators, and institutional contributors</li>
            </ul>
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

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  location: '',
  institution: '',
  department: '',
  designation: '',
  experience: '',
  interestArea: '',
  statement: '',
  expectations: '',
  declaration: false,
})

const resetForm = () => {
  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.location = ''
  form.institution = ''
  form.department = ''
  form.designation = ''
  form.experience = ''
  form.interestArea = ''
  form.statement = ''
  form.expectations = ''
  form.declaration = false
}

const handleSubmit = () => {
  console.log('FDP Application:', { ...form })
  submitted.value = true
  resetForm()
}
</script>