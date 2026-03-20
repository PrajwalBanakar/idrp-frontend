<template>
  <AppLayout>

    <!-- ─── Hero ──────────────────────────────────────────────── -->
    <section class="relative h-[40vh] min-h-[280px] overflow-hidden">
      <img :src="'/apply-hero.jfif'" alt="Apply"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Applications</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">{{ program.title }}</h1>
      </div>
    </section>

    <!-- ─── Form ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-3xl mx-auto">

        <div class="text-center mb-12">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">{{ program.badge }}</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-2">Apply Now</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">{{ program.description }}</p>
        </div>

        <!-- Program badge -->
        <div class="flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-2xl px-6 py-4 mb-8">
          <span class="text-2xl">{{ program.emoji }}</span>
          <div>
            <p class="text-sm font-bold text-teal-800">{{ program.title }}</p>
            <p class="text-xs text-teal-600 mt-0.5">{{ program.meta }}</p>
          </div>
        </div>

        <form @submit.prevent="submitApplication" class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 space-y-6">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Your Name <span class="text-red-500">*</span></label>
              <input v-model="form.name" type="text" placeholder="Full name"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Startup / Company Name <span class="text-red-500">*</span></label>
              <input v-model="form.startup" type="text" placeholder="Your startup name"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span class="text-red-500">*</span></label>
              <input v-model="form.phone" type="tel" placeholder="+91 98765 43210"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email ID <span class="text-red-500">*</span></label>
              <input v-model="form.email" type="email" placeholder="you@startup.com"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">About Your Startup <span class="text-red-500">*</span></label>
            <textarea v-model="form.description" rows="5"
              placeholder="Briefly describe your startup, the problem you are solving, current stage, and why you want to join this program..."
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white resize-none"
              required></textarea>
          </div>

          <!-- Disclaimer -->
          <div class="bg-white rounded-xl border border-gray-200 p-5 text-xs text-gray-500 leading-relaxed">
            <p class="font-semibold text-gray-700 mb-2">Disclaimer &amp; Consent</p>
            <p>By submitting this form, I/We consent to IDRP collecting and using the provided information solely for the purpose of evaluating and delivering incubation, acceleration, funding, mentorship, networking, and related programs. The information is shared voluntarily, and I/We acknowledge that no confidential or proprietary data should be submitted unless we are comfortable with its use for these purposes. IDRP will maintain reasonable confidentiality, will not share information with third parties without consent (except where required by law or for service delivery), and may contact us using the provided details regarding this application and relevant opportunities.</p>
          </div>

          <div class="flex items-start gap-3">
            <input id="applyConsent" v-model="form.consent" type="checkbox"
              class="mt-0.5 w-4 h-4 rounded accent-teal-600 shrink-0 cursor-pointer"
              required />
            <label for="applyConsent" class="text-sm text-gray-600 cursor-pointer leading-relaxed">
              I have read and agree to the disclaimer
            </label>
          </div>

          <button type="submit"
            class="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide">
            Submit Application
          </button>

          <div v-if="submitted" class="flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-xl px-5 py-4 text-teal-700 text-sm font-medium">
            <span class="text-xl">✅</span>
            Thank you for applying! We have received your application and will be in touch within 5-7 business days.
          </div>

        </form>

        <!-- Back link -->
        <div class="text-center mt-8">
          <button @click="goBack" class="text-sm text-gray-400 hover:text-teal-600 transition-colors">
            Back to {{ program.backLabel }}
          </button>
        </div>

      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route  = useRoute()
const router = useRouter()

const submitted = ref(false)

const form = ref({
  name: '', startup: '', phone: '', email: '', description: '', consent: false,
})

function submitApplication() {
  submitted.value = true
  form.value = { name: '', startup: '', phone: '', email: '', description: '', consent: false }
  setTimeout(function() { submitted.value = false }, 8000)
}

function goBack() {
  router.back()
}

const programs = {
  'resident-incubation': {
    title: 'Resident Incubation Program',
    badge: 'Incubation',
    emoji: '🏢',
    meta: 'On-Site · 12-18 Months · 15-20 Startups per cohort',
    description: 'Apply for our flagship on-campus incubation program. Early-stage startups at idea, PoC, or MVP stage are welcome.',
    backLabel: 'Incubation',
  },
  'virtual-incubation': {
    title: 'Virtual Incubation Program',
    badge: 'Incubation',
    emoji: '💻',
    meta: 'Online · 6-12 Months · 15-20 Startups per cohort',
    description: 'Apply for our flexible remote incubation program. Open to registered startups with a working, market-tested MVP.',
    backLabel: 'Incubation',
  },
  'deep-tech-accelerator': {
    title: 'Deep-Tech Accelerator',
    badge: 'Acceleration',
    emoji: '🚀',
    meta: 'On-Site · 6 Months Intensive · 15-20 Startups per cohort',
    description: 'Apply for our intensive deep-tech acceleration program. Designed for startups with a market-ready MVP ready to scale.',
    backLabel: 'Acceleration',
  },
}

const programKey = computed(function() {
  return route.params.program || 'resident-incubation'
})

const program = computed(function() {
  return programs[programKey.value] || programs['resident-incubation']
})
</script>