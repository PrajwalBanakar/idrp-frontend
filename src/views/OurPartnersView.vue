<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/partners-hero.jfif'" alt="Our Partners"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Ecosystem</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Our Partners</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-20 px-6 md:px-16 bg-white">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Together We Build</span>
        <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6">Shaping the Ecosystem Together</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-5">
          At IDRP, we believe collaboration drives innovation. Our partnerships span academia, industry, investors, government, and global networks, working together to support startup growth.
        </p>
        <p class="text-gray-600 text-lg leading-relaxed">
          Over the years, these collaborations have enabled greater access, accelerated impact, and strengthened a connected, founder-first ecosystem.
        </p>
        <div class="mt-8 w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto"></div>
      </div>
    </section>

    <!-- ─── Our Partnerships ───────────────────────────────────── -->
    <section class="py-6 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Network</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Partnerships</h2>
        </div>

        <!-- Academic Partners -->
        <div class="mb-16">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0 text-lg">🎓</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Academic Partners</h3>
              <p class="text-teal-600 font-medium text-sm mt-0.5">Fostering innovation at its foundation.</p>
              <p class="text-gray-500 text-sm mt-2 max-w-2xl leading-relaxed">Through partnerships with universities and research institutions, we support emerging talent, co-develop programs, and connect academic research with real-world industry needs.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="p in academicPartners" :key="p.name"
              class="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                :style="{ background: p.color }">{{ p.abbr }}</div>
              <p class="text-xs font-semibold text-gray-600 text-center leading-tight">{{ p.name }}</p>
            </div>
          </div>
        </div>

        <!-- Technology Partners -->
        <div class="mb-16">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 text-lg">💻</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Technology Partners</h3>
              <p class="text-blue-600 font-medium text-sm mt-0.5">Enabling startups with a competitive tech advantage.</p>
              <p class="text-gray-500 text-sm mt-2 max-w-2xl leading-relaxed">We partner with global technology leaders and local solution providers to offer access to tools, infrastructure, cloud resources, and technical expertise.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="p in technologyPartners" :key="p.name"
              class="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                :style="{ background: p.color }">{{ p.abbr }}</div>
              <p class="text-xs font-semibold text-gray-600 text-center leading-tight">{{ p.name }}</p>
            </div>
          </div>
        </div>

        <!-- Ecosystem Partners -->
        <div class="mb-16">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white shrink-0 text-lg">🌐</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Ecosystem Partners</h3>
              <p class="text-cyan-600 font-medium text-sm mt-0.5">Building networks that empower founders.</p>
              <p class="text-gray-500 text-sm mt-2 max-w-2xl leading-relaxed">Our partners bring domain expertise, policy support, and ecosystem access, helping startups navigate challenges and unlock growth opportunities.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="p in ecosystemPartners" :key="p.name"
              class="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                :style="{ background: p.color }">{{ p.abbr }}</div>
              <p class="text-xs font-semibold text-gray-600 text-center leading-tight">{{ p.name }}</p>
            </div>
          </div>
        </div>

        <!-- Investor Networks -->
        <div class="mb-16">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 text-lg">💰</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Investor Networks</h3>
              <p class="text-emerald-600 font-medium text-sm mt-0.5">Fueling innovation with capital and confidence.</p>
              <p class="text-gray-500 text-sm mt-2 max-w-2xl leading-relaxed">We collaborate with angel networks, venture funds, and seed investors to help startups prepare for funding and connect with the right capital partners.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="p in investorPartners" :key="p.name"
              class="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                :style="{ background: p.color }">{{ p.abbr }}</div>
              <p class="text-xs font-semibold text-gray-600 text-center leading-tight">{{ p.name }}</p>
            </div>
          </div>
        </div>

        <!-- International Allies -->
        <div class="mb-4">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white shrink-0 text-lg">✈️</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">International Allies</h3>
              <p class="text-violet-600 font-medium text-sm mt-0.5">Enabling startups to scale globally.</p>
              <p class="text-gray-500 text-sm mt-2 max-w-2xl leading-relaxed">Our international partners provide global exposure, soft-landing opportunities, and cross-border collaboration to help startups expand beyond borders.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="p in internationalPartners" :key="p.name"
              class="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                :style="{ background: p.color }">{{ p.abbr }}</div>
              <p class="text-xs font-semibold text-gray-600 text-center leading-tight">{{ p.name }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── Partner with IDRP Form ─────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Collaborate</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Partner with IDRP</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Interested in joining our ecosystem? Tell us about your organisation and how we can build something meaningful together.</p>
        </div>

        <form @submit.prevent="submitForm" class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 space-y-6">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Organization Name <span class="text-red-500">*</span></label>
              <input v-model="form.orgName" type="text" placeholder="e.g. Acme Technologies Pvt. Ltd."
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white"
                required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Your Name <span class="text-red-500">*</span></label>
              <input v-model="form.name" type="text" placeholder="Full name"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white"
                required />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email ID <span class="text-red-500">*</span></label>
              <input v-model="form.email" type="email" placeholder="you@organisation.com"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white"
                required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span class="text-red-500">*</span></label>
              <input v-model="form.phone" type="tel" placeholder="+91 98765 43210"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white"
                required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Type of Partner <span class="text-red-500">*</span></label>
            <select v-model="form.partnerType"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white text-gray-700"
              required>
              <option value="" disabled>Select partnership type</option>
              <option>Academic Partner</option>
              <option>Technology Partner</option>
              <option>Ecosystem Partner</option>
              <option>Investor Network</option>
              <option>International Ally</option>
              <option>Corporate Partner</option>
              <option>Government / Policy Partner</option>
              <option>Media Partner</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Website / LinkedIn URL <span class="text-gray-400 font-normal">(Optional)</span></label>
            <input v-model="form.url" type="url" placeholder="https://"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Brief Description of Collaboration Interest <span class="text-red-500">*</span></label>
            <textarea v-model="form.description" rows="4" placeholder="Tell us how you'd like to collaborate with IDRP and what value you can bring to the ecosystem..."
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white resize-none"
              required></textarea>
          </div>

          <!-- Disclaimer -->
          <div class="bg-white rounded-xl border border-gray-200 p-5 text-xs text-gray-500 leading-relaxed">
            <p class="font-semibold text-gray-700 mb-2">Disclaimer &amp; Consent</p>
            <p>By submitting this form, I/We consent to IDRP collecting and using the provided information solely for the purpose of evaluating and delivering incubation, acceleration, funding, mentorship, networking, and related programs. The information is shared voluntarily, and I/We acknowledge that no confidential or proprietary data should be submitted unless we are comfortable with its use for these purposes. IDRP will maintain reasonable confidentiality, will not share information with third parties without consent (except where required by law or for service delivery), and may contact us using the provided details regarding this application and relevant opportunities.</p>
          </div>

          <!-- Consent checkbox -->
          <div class="flex items-start gap-3">
            <input id="consent" v-model="form.consent" type="checkbox"
              class="mt-0.5 w-4 h-4 rounded accent-teal-600 shrink-0 cursor-pointer"
              required />
            <label for="consent" class="text-sm text-gray-600 cursor-pointer leading-relaxed">
              I have read and agree to the disclaimer
            </label>
          </div>

          <!-- Submit -->
          <div class="pt-2">
            <button type="submit"
              class="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide">
              Submit Partnership Request
            </button>
          </div>

          <!-- Success message -->
          <div v-if="submitted" class="flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-xl px-5 py-4 text-teal-700 text-sm font-medium">
            <span class="text-xl">✅</span>
            Thank you! We have received your request and will be in touch shortly.
          </div>

        </form>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref } from 'vue'

const submitted = ref(false)

const form = ref({
  orgName: '',
  name: '',
  email: '',
  phone: '',
  partnerType: '',
  url: '',
  description: '',
  consent: false,
})

function submitForm() {
  submitted.value = true
  form.value = { orgName: '', name: '', email: '', phone: '', partnerType: '', url: '', description: '', consent: false }
  setTimeout(() => { submitted.value = false }, 6000)
}

const academicPartners = [
  { name: 'IIT Bombay',     abbr: 'IIT',  color: 'linear-gradient(135deg,#1a1a2e,#16213e)' },
  { name: 'IISc Bangalore', abbr: 'IISc', color: 'linear-gradient(135deg,#7b2d8b,#c45ab3)' },
  { name: 'IIIT Dharwad',   abbr: 'IIIT', color: 'linear-gradient(135deg,#0d9488,#06b6d4)' },
  { name: 'NIT Karnataka',  abbr: 'NIT',  color: 'linear-gradient(135deg,#b45309,#f59e0b)' },
  { name: 'BITS Pilani',    abbr: 'BITS', color: 'linear-gradient(135deg,#1d4ed8,#60a5fa)' },
  { name: 'VTU',            abbr: 'VTU',  color: 'linear-gradient(135deg,#7c3aed,#a78bfa)' },
]

const technologyPartners = [
  { name: 'Microsoft',        abbr: 'MS',  color: 'linear-gradient(135deg,#0078d4,#50e6ff)' },
  { name: 'Google',           abbr: 'G',   color: 'linear-gradient(135deg,#4285F4,#34A853)' },
  { name: 'NVIDIA',           abbr: 'NV',  color: 'linear-gradient(135deg,#76b900,#c3e88d)' },
  { name: 'Intel',            abbr: 'IN',  color: 'linear-gradient(135deg,#0071c5,#00aeef)' },
  { name: 'AWS',              abbr: 'AWS', color: 'linear-gradient(135deg,#ff9900,#ffcc60)' },
  { name: 'Qualcomm',         abbr: 'QC',  color: 'linear-gradient(135deg,#3253dc,#6e8efb)' },
  { name: 'Bosch',            abbr: 'BO',  color: 'linear-gradient(135deg,#c0392b,#e74c3c)' },
  { name: 'Tata Consultancy', abbr: 'TCS', color: 'linear-gradient(135deg,#0a2c6e,#1a56db)' },
]

const ecosystemPartners = [
  { name: 'NASSCOM',        abbr: 'NAS', color: 'linear-gradient(135deg,#0ea5e9,#38bdf8)' },
  { name: 'SIDBI',          abbr: 'SID', color: 'linear-gradient(135deg,#dc2626,#f87171)' },
  { name: 'Startup India',  abbr: 'SI',  color: 'linear-gradient(135deg,#f97316,#fb923c)' },
  { name: 'MeitY',          abbr: 'MEI', color: 'linear-gradient(135deg,#16a34a,#4ade80)' },
  { name: 'Karnataka Govt.',abbr: 'KA',  color: 'linear-gradient(135deg,#b45309,#fcd34d)' },
  { name: 'CII',            abbr: 'CII', color: 'linear-gradient(135deg,#0f766e,#2dd4bf)' },
  { name: 'TiE Global',     abbr: 'TiE', color: 'linear-gradient(135deg,#7c3aed,#c084fc)' },
]

const investorPartners = [
  { name: 'Sequoia Surge',        abbr: 'SS',  color: 'linear-gradient(135deg,#1e1b4b,#4338ca)' },
  { name: 'Accel Partners',       abbr: 'AC',  color: 'linear-gradient(135deg,#0d9488,#5eead4)' },
  { name: 'Blume Ventures',       abbr: 'BV',  color: 'linear-gradient(135deg,#92400e,#f59e0b)' },
  { name: 'Indian Angel Network', abbr: 'IAN', color: 'linear-gradient(135deg,#be123c,#fb7185)' },
  { name: 'Kalaari Capital',      abbr: 'KC',  color: 'linear-gradient(135deg,#1d4ed8,#93c5fd)' },
  { name: 'SIDBI Ventures',       abbr: 'SV',  color: 'linear-gradient(135deg,#0f766e,#99f6e4)' },
]

const internationalPartners = [
  { name: 'Singapore EDB',     abbr: 'EDB', color: 'linear-gradient(135deg,#c2001a,#ff6b6b)' },
  { name: 'UKIBC',             abbr: 'UK',  color: 'linear-gradient(135deg,#012169,#4169e1)' },
  { name: 'Germany Trade',     abbr: 'GT',  color: 'linear-gradient(135deg,#dd0000,#ffcc00)' },
  { name: 'Fraunhofer',        abbr: 'FH',  color: 'linear-gradient(135deg,#009b77,#55dde0)' },
  { name: 'US Consulate',      abbr: 'US',  color: 'linear-gradient(135deg,#002868,#bf0a30)' },
  { name: 'Israel Innovation', abbr: 'IIA', color: 'linear-gradient(135deg,#0038b8,#6fa7ff)' },
]
</script>