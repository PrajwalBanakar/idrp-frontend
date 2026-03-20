<template>
  <AppLayout>

    <!-- ─── Hero ──────────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/incubation-hero.jfif'" alt="Co-Working"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Services</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Co-Working</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Space</span>
        <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6 leading-tight">Work, Connect &amp; Grow. A Space Designed for Startups.</h2>
        <div class="space-y-4 text-gray-600 text-base leading-relaxed">
          <p>At IDRP, co-working goes beyond just providing a desk. It's a launchpad for ideas, a hub for innovators, and a community where ambition meets support.</p>
          <p>Our vibrant 55,000 sq. ft. campus, located in Dharwad, brings together entrepreneurs, creators, and changemakers under one roof. The centrally connected, premium space is designed to inspire collaboration, creativity, and growth.</p>
          <p>Whether you're a solo founder, an early-stage startup, or a scaling team, IDRP offers a flexible workspace that evolves with your needs.</p>
        </div>
        <div class="mt-8 w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto"></div>
      </div>
    </section>

    <!-- ─── Why Choose IDRP ───────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Amenities</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Why Choose IDRP for Co-Working?</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Everything you need to focus, build, and collaborate in one world-class campus.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div v-for="amenity in amenities" :key="amenity.title"
            class="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
            <!-- Image area -->
            <div class="h-36 overflow-hidden relative" :class="amenity.bg">
              <img :src="amenity.image" :alt="amenity.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onerror="this.style.display='none'" />
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-4xl">{{ amenity.emoji }}</span>
              </div>
            </div>
            <!-- Text -->
            <div class="p-4 text-center">
              <p class="font-bold text-gray-800 text-sm group-hover:text-teal-700 transition-colors">{{ amenity.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Stats ─────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gradient-to-br from-teal-800 to-cyan-600">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold text-white">Collaborate Within a Thriving Startup Community</h2>
          <p class="text-teal-100 mt-3">Join a campus built for the builders of tomorrow.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-4xl md:text-5xl font-extrabold text-white">{{ stat.value }}</p>
            <p class="text-teal-100 text-sm mt-2 leading-snug">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Book a Tour Form ──────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Visit Us</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Book a Tour</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Come experience the IDRP campus. Fill in your details and we will reach out to schedule your visit.</p>
        </div>

        <form @submit.prevent="submitTour" class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 space-y-6">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Your Name <span class="text-red-500">*</span></label>
              <input v-model="tourForm.name" type="text" placeholder="Full name"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span class="text-red-500">*</span></label>
              <input v-model="tourForm.phone" type="tel" placeholder="+91 98765 43210"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email ID <span class="text-red-500">*</span></label>
            <input v-model="tourForm.email" type="email" placeholder="you@startup.com"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
              required />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Type of Space <span class="text-red-500">*</span></label>
            <select v-model="tourForm.spaceType"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white text-gray-700"
              required>
              <option value="" disabled>Select a space type</option>
              <option>Work Station</option>
              <option>Work Cabin</option>
              <option>Meeting Room</option>
              <option>Board Room</option>
              <option>Auditorium</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Additional Details <span class="text-gray-400 font-normal">(Optional)</span></label>
            <textarea v-model="tourForm.details" rows="4"
              placeholder="Tell us about your team size, preferred visit dates, or any specific requirements..."
              class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white resize-none"></textarea>
          </div>

          <!-- Disclaimer -->
          <div class="bg-white rounded-xl border border-gray-200 p-5 text-xs text-gray-500 leading-relaxed">
            <p class="font-semibold text-gray-700 mb-2">Disclaimer &amp; Consent</p>
            <p>By submitting this form, I/We consent to IDRP collecting and using the provided information solely for the purpose of evaluating and delivering incubation, acceleration, funding, mentorship, networking, and related programs. The information is shared voluntarily, and I/We acknowledge that no confidential or proprietary data should be submitted unless we are comfortable with its use for these purposes. IDRP will maintain reasonable confidentiality, will not share information with third parties without consent (except where required by law or for service delivery), and may contact us using the provided details regarding this application and relevant opportunities.</p>
          </div>

          <div class="flex items-start gap-3">
            <input id="tourConsent" v-model="tourForm.consent" type="checkbox"
              class="mt-0.5 w-4 h-4 rounded accent-teal-600 shrink-0 cursor-pointer"
              required />
            <label for="tourConsent" class="text-sm text-gray-600 cursor-pointer leading-relaxed">
              I have read and agree to the disclaimer
            </label>
          </div>

          <div class="pt-2">
            <button type="submit"
              class="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide">
              Book My Tour
            </button>
          </div>

          <div v-if="tourSubmitted" class="flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-xl px-5 py-4 text-teal-700 text-sm font-medium">
            <span class="text-xl">✅</span>
            Thank you! We have received your request and will get in touch shortly to confirm your tour.
          </div>

        </form>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref } from 'vue'

const tourSubmitted = ref(false)

const tourForm = ref({
  name: '', phone: '', email: '', spaceType: '', details: '', consent: false,
})

function submitTour() {
  tourSubmitted.value = true
  tourForm.value = { name: '', phone: '', email: '', spaceType: '', details: '', consent: false }
  setTimeout(() => { tourSubmitted.value = false }, 6000)
}

const stats = [
  { value: '45+',   label: 'Active Startups' },
  { value: '1000+', label: 'Mixers, Masterclasses, and Pitch Events' },
  { value: '650+',  label: 'Innovators, Tech-Developers, and Founders' },
  { value: '130+',  label: 'On-site Mentors, Investors & Ecosystem Enablers' },
]

const amenities = [
  { title: 'Flexible Office Spaces',         emoji: '🏢', image: '/cowork-office.jfif',    bg: 'bg-teal-50' },
  { title: 'Cafeteria & Breakout Zones',      emoji: '☕', image: '/cowork-cafe.jfif',      bg: 'bg-amber-50' },
  { title: 'Secure Premises & Reception',     emoji: '🔒', image: '/cowork-secure.jfif',    bg: 'bg-blue-50' },
  { title: '24/7 Access & Power Backup',      emoji: '⚡', image: '/cowork-power.jfif',     bg: 'bg-yellow-50' },
  { title: 'High-Speed Internet',             emoji: '🌐', image: '/cowork-wifi.jfif',      bg: 'bg-cyan-50' },
  { title: 'Meeting & Board Rooms',           emoji: '🤝', image: '/cowork-meeting.jfif',   bg: 'bg-indigo-50' },
  { title: 'Event Spaces & Auditorium',       emoji: '🎤', image: '/cowork-events.jfif',    bg: 'bg-rose-50' },
  { title: 'Easy & Fast Accessibility',       emoji: '📍', image: '/cowork-access.jfif',    bg: 'bg-orange-50' },
  { title: 'Vibrant Community',               emoji: '💡', image: '/cowork-community.jfif', bg: 'bg-teal-50' },
  { title: 'Ample Parking & Green Campus',    emoji: '🌿', image: '/cowork-green.jfif',     bg: 'bg-green-50' },
]
</script>