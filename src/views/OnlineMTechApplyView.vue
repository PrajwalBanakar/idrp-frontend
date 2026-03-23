<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700 px-6 py-20 md:px-16">
      <div class="mx-auto max-w-5xl text-white">
        <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-100">
          🎓 Online M.Tech Admissions
        </div>

        <h1 class="text-4xl font-extrabold leading-tight md:text-5xl">
          Apply for Online M.Tech Program
        </h1>

        <p class="mt-5 max-w-3xl text-base leading-relaxed text-teal-100 md:text-lg">
          Complete the registration form below to express your interest in the 2-year Online M.Tech Program offered through IDRP.
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
              Fill in your details to register your interest. This helps the IDRP team understand your academic background, current profile, and suitability for the Online M.Tech Program.
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

            <!-- Academic Details -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Academic Details</h3>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Highest Qualification <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="form.qualification"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  >
                    <option disabled value="">Select qualification</option>
                    <option>B.E. / B.Tech</option>
                    <option>B.Sc</option>
                    <option>M.Sc</option>
                    <option>M.E. / M.Tech</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Discipline / Branch <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.branch"
                    type="text"
                    placeholder="Computer Science, ECE, Mechanical..."
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Institution / University <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.institution"
                    type="text"
                    placeholder="Enter institution / university"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Year of Graduation <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.graduationYear"
                    type="number"
                    min="1980"
                    max="2100"
                    placeholder="Enter graduation year"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Professional Details -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Professional Details</h3>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Current Status <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="form.currentStatus"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  >
                    <option disabled value="">Select current status</option>
                    <option>Student</option>
                    <option>Working Professional</option>
                    <option>Research Scholar</option>
                    <option>Entrepreneur</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Organization / Company
                  </label>
                  <input
                    v-model="form.organization"
                    type="text"
                    placeholder="Current company / organization"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div class="md:col-span-2">
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <input
                    v-model="form.experience"
                    type="text"
                    placeholder="Example: 2 years"
                    class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>
            </div>

            <!-- Statement -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Program Interest</h3>

              <div class="space-y-5">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Why are you interested in this Online M.Tech Program? <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="form.statement"
                    rows="5"
                    placeholder="Describe your motivation, interests, and learning goals."
                    class="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    required
                  ></textarea>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Preferred Area of Interest
                  </label>
                  <input
                    v-model="form.interestArea"
                    type="text"
                    placeholder="AI, Deep-Tech, Systems, Research, Innovation..."
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
                  I confirm that the information provided is accurate to the best of my knowledge and I am submitting this form for the Online M.Tech Program.
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
                to="/courses/online-mtech"
                class="rounded-full border border-gray-300 px-8 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Back to Program
              </RouterLink>
            </div>

            <p
              v-if="submitted"
              class="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              Your Online M.Tech application has been submitted successfully.
            </p>
          </form>
        </div>

        <!-- Right -->
        <div class="space-y-6">
          <div class="rounded-3xl bg-white p-8 shadow-xl">
            <h3 class="text-xl font-bold text-gray-900">Program Snapshot</h3>
            <div class="mt-5 space-y-4 text-sm text-gray-700">
              <p><strong class="text-gray-900">Program:</strong> Online M.Tech</p>
              <p><strong class="text-gray-900">Duration:</strong> 2 Years</p>
              <p><strong class="text-gray-900">Mode:</strong> Online</p>
              <p><strong class="text-gray-900">Type:</strong> Postgraduate Program</p>
              <p><strong class="text-gray-900">Focus:</strong> Advanced technical learning, research orientation, innovation readiness</p>
            </div>
          </div>

          <div class="rounded-3xl bg-gradient-to-br from-teal-700 to-cyan-600 p-8 text-white shadow-xl">
            <h3 class="text-xl font-bold">Why Apply?</h3>
            <ul class="mt-5 space-y-4 text-sm text-teal-50">
              <li>Advanced online postgraduate learning pathway</li>
              <li>Suitable for working professionals and advanced learners</li>
              <li>Supports research and innovation-oriented growth</li>
              <li>Long-term capability building in emerging domains</li>
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
  qualification: '',
  branch: '',
  institution: '',
  graduationYear: '',
  currentStatus: '',
  organization: '',
  experience: '',
  statement: '',
  interestArea: '',
  declaration: false,
})

const resetForm = () => {
  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.location = ''
  form.qualification = ''
  form.branch = ''
  form.institution = ''
  form.graduationYear = ''
  form.currentStatus = ''
  form.organization = ''
  form.experience = ''
  form.statement = ''
  form.interestArea = ''
  form.declaration = false
}

const handleSubmit = () => {
  console.log('Online M.Tech Application:', { ...form })
  submitted.value = true
  resetForm()
}
</script>