<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/mentors-hero.jfif'" alt="Mentors"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Guidance &amp; Expertise</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Mentors</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-20 px-6 md:px-16 bg-white">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Expert Network</span>
        <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6">Find Your Mentors At IDRP</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-5">
          We provide access to a diverse network of experienced industry experts who support your journey. Connect with mentors through one-on-one sessions, gain valuable insights, and get guidance to move your startup forward. Book your session today.
        </p>
        <p class="text-gray-600 text-lg leading-relaxed">
          We support founders at every stage, from early ideation to scaling. Through our flexible open incubation model, founder-first programs, and strong ecosystem, we help you build with confidence, connect with the right people, and grow sustainably.
        </p>
        <div class="mt-8 w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto"></div>
      </div>
    </section>

    <!-- ─── Domain Tags ────────────────────────────────────────── -->
    <section class="py-6 px-6 md:px-16 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <p class="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Mentors available across domains</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="domain in domains" :key="domain"
            class="px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-full text-sm font-semibold hover:bg-teal-700 hover:text-white transition-colors duration-200 cursor-default">
            {{ domain }}
          </span>
        </div>
      </div>
    </section>

    <!-- ─── Request a Mentor Form ──────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Connect</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Request a Mentor</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Tell us what kind of expertise you need and we will connect you with the right mentor from our network.</p>
        </div>

        <form @submit.prevent="submitMentorRequest" class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 space-y-6">

          <!-- Industry Domain -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Industry Domain / Area of Expertise Needed <span class="text-red-500">*</span></label>
            <select v-model="mentorForm.domain"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white text-gray-700"
              required>
              <option value="" disabled>Select a domain</option>
              <option v-for="d in domains" :key="d" :value="d">{{ d }}</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Mentor Name</label>
              <input v-model="mentorForm.name" type="text" placeholder="Full name of preferred mentor (if known)"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                 />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Your Name <span class="text-red-500">*</span></label>
              <input v-model="mentorForm.yourName" type="text" placeholder="Your full name"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email ID <span class="text-red-500">*</span></label>
              <input v-model="mentorForm.email" type="email" placeholder="you@startup.com"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span class="text-red-500">*</span></label>
              <input v-model="mentorForm.phone" type="tel" placeholder="+91 98765 43210"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Functional Area <span class="text-red-500">*</span></label>
            <input v-model="mentorForm.functionalArea" type="text" placeholder="e.g. Product Strategy, Fundraising, Marketing, Legal"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
              required />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Brief Details <span class="text-red-500">*</span></label>
            <textarea v-model="mentorForm.details" rows="4"
              placeholder="Briefly describe your startup, the challenge you're facing, and what kind of mentorship support you are looking for..."
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white resize-none"
              required></textarea>
          </div>

          <!-- Disclaimer -->
          <div class="bg-white rounded-xl border border-gray-200 p-5 text-xs text-gray-500 leading-relaxed">
            <p class="font-semibold text-gray-700 mb-2">Disclaimer &amp; Consent</p>
            <p>By submitting this form, I/We consent to IDRP collecting and using the provided information solely for the purpose of evaluating and delivering incubation, acceleration, funding, mentorship, networking, and related programs. The information is shared voluntarily, and I/We acknowledge that no confidential or proprietary data should be submitted unless we are comfortable with its use for these purposes. IDRP will maintain reasonable confidentiality, will not share information with third parties without consent (except where required by law or for service delivery), and may contact us using the provided details regarding this application and relevant opportunities.</p>
          </div>

          <div class="flex items-start gap-3">
            <input id="mentorConsent" v-model="mentorForm.consent" type="checkbox"
              class="mt-0.5 w-4 h-4 rounded accent-teal-600 shrink-0 cursor-pointer"
              required />
            <label for="mentorConsent" class="text-sm text-gray-600 cursor-pointer leading-relaxed">
              I have read and agree to the disclaimer
            </label>
          </div>

          <div class="pt-2">
            <button type="submit"
              class="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide">
              Submit Request
            </button>
          </div>

          <div v-if="mentorSubmitted" class="flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-xl px-5 py-4 text-teal-700 text-sm font-medium">
            <span class="text-xl">✅</span>
            Thank you! We will match you with a suitable mentor and get back to you shortly.
          </div>

        </form>
      </div>
    </section>

    <!-- ─── Become a Mentor CTA ───────────────────────────────── -->
    <section class="py-20 px-6 md:px-16 bg-gradient-to-br from-teal-800 to-cyan-600">
      <div class="max-w-2xl mx-auto text-center">
        <div class="text-4xl mb-5">🌟</div>
        <h2 class="text-3xl font-bold text-white mb-4">Want to become a Mentor?</h2>
        <p class="text-teal-100 text-lg leading-relaxed mb-8">
          Share your experience and expertise with the next generation of deep-tech founders. Join our growing network of mentors and help shape India's startup ecosystem.
        </p>
        <router-link to="/contact"
          class="inline-block bg-white text-teal-800 font-bold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-xl">
          Contact Us
        </router-link>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref } from 'vue'

const domains = [
  'Artificial Intelligence', 'Computer Vision', 'Extended Reality (XR)', 'Blockchain',
  'Cyber Security', 'Space Tech', 'IoT', 'HealthTech', 'MedTech', 'FinTech',
  'AgriTech', 'Industry 4.0', 'Semiconductor', 'Mobility', 'SaaS / B2B',
  'Product Strategy', 'Fundraising', 'Legal & IP', 'Marketing & GTM', 'HR & Operations',
]

const mentorSubmitted = ref(false)

const mentorForm = ref({
  domain: '',
  name: '',
  yourName: '',
  email: '',
  phone: '',
  functionalArea: '',
  details: '',
  consent: false,
})

function submitMentorRequest() {
  mentorSubmitted.value = true
  mentorForm.value = { domain: '', name: '', yourName: '', email: '', phone: '', functionalArea: '', details: '', consent: false }
  setTimeout(() => { mentorSubmitted.value = false }, 6000)
}
</script>