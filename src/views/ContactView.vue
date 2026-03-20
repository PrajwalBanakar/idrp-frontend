<template>
  <AppLayout>

    <!-- ─── Hero ──────────────────────────────────────────────── -->
    <section class="relative h-[45vh] min-h-[300px] overflow-hidden">
      <img :src="'/idrp.jfif'" alt="Contact IDRP"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight">Contact Us</h1>
      </div>
    </section>

    <!-- ─── Main Content ──────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Reach Out</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Let's Collaborate!</h2>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            We invite entrepreneurs, investors, and partners to connect with us and explore opportunities for collaboration.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-14 items-start">

          <!-- ── Left: Form ───────────────────────────────────── -->
          <div class="w-full lg:w-1/2">
            <form @submit.prevent="submitForm" class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 space-y-6">

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Your Name <span class="text-red-500">*</span></label>
                  <input v-model="form.name" type="text" placeholder="Full name"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                    required />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span class="text-red-500">*</span></label>
                  <input v-model="form.phone" type="tel" placeholder="+91 98765 43210"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                    required />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email ID <span class="text-red-500">*</span></label>
                <input v-model="form.email" type="email" placeholder="you@example.com"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                  required />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Message <span class="text-red-500">*</span></label>
                <textarea v-model="form.message" rows="5"
                  placeholder="Tell us about yourself and how you'd like to collaborate..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white resize-none"
                  required></textarea>
              </div>

              <!-- Disclaimer -->
              <div class="bg-white rounded-xl border border-gray-200 p-5 text-xs text-gray-500 leading-relaxed">
                <p class="font-semibold text-gray-700 mb-2">Disclaimer &amp; Consent</p>
                <p>By submitting this form, I/We consent to IDRP collecting and using the provided information solely for the purpose of evaluating and delivering incubation, acceleration, funding, mentorship, networking, and related programs. The information is shared voluntarily, and I/We acknowledge that no confidential or proprietary data should be submitted unless we are comfortable with its use for these purposes. IDRP will maintain reasonable confidentiality, will not share information with third parties without consent (except where required by law or for service delivery), and may contact us using the provided details regarding this application and relevant opportunities.</p>
              </div>

              <div class="flex items-start gap-3">
                <input id="contactConsent" v-model="form.consent" type="checkbox"
                  class="mt-0.5 w-4 h-4 rounded accent-teal-600 shrink-0 cursor-pointer"
                  required />
                <label for="contactConsent" class="text-sm text-gray-600 cursor-pointer leading-relaxed">
                  I have read and agree to the disclaimer
                </label>
              </div>

              <button type="submit"
                class="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide">
                Send Message
              </button>

              <div v-if="submitted" class="flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-xl px-5 py-4 text-teal-700 text-sm font-medium">
                <span class="text-xl">✅</span>
                Thank you! We have received your message and will get back to you shortly.
              </div>

            </form>
          </div>

          <!-- ── Right: Info ───────────────────────────────────── -->
          <div class="w-full lg:w-1/2 flex flex-col gap-8">

            <!-- Building image -->
            <div class="rounded-3xl overflow-hidden shadow-xl h-64">
              <img :src="'/about-intro.jfif'" alt="IDRP Campus"
                class="w-full h-full object-cover"
                onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
            </div>

            <!-- Contact details card -->
            <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col gap-6">

              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-4">Find Us</h3>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 text-xl">📍</div>
                  <div>
                    <p class="font-semibold text-gray-800 text-sm">IIIT Dharwad Research Park</p>
                    <p class="text-gray-500 text-sm mt-1 leading-relaxed">Pi Block, IIIT Dharwad<br />92VG+2F9, IIIT Circle Rd<br />Dharwad, Karnataka 580009</p>
                    <a href="https://www.google.com/maps/place/IIIT+Dharwad+Research+Park+(IDRP)/@15.3925499,75.0236567,17z"
                      target="_blank" rel="noopener"
                      class="inline-block mt-2 text-teal-600 text-xs font-semibold hover:text-teal-800 transition-colors">
                      View on Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6 flex flex-col gap-4">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 text-xl">📧</div>
                  <div>
                    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Email</p>
                    <a href="mailto:contact@idrp.in" class="text-sm font-semibold text-gray-800 hover:text-teal-600 transition-colors">contact@idrp.in</a>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 text-xl">📞</div>
                  <div>
                    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Phone</p>
                    <a href="tel:+910000000000" class="text-sm font-semibold text-gray-800 hover:text-teal-600 transition-colors">+91 00000 00000</a>
                  </div>
                </div>
              </div>

              <!-- Social profiles -->
              <div class="border-t border-gray-200 pt-6">
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">Follow Us</p>
                <div class="flex flex-wrap gap-3">
                  <a v-for="social in socials" :key="social.name"
                    :href="social.url" target="_blank" rel="noopener"
                    class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:border-teal-400 hover:text-teal-600 transition-all duration-200">
                    <span v-html="social.icon" class="w-4 h-4"></span>
                    {{ social.name }}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref } from 'vue'

const submitted = ref(false)

const form = ref({
  name: '', phone: '', email: '', message: '', consent: false,
})

function submitForm() {
  submitted.value = true
  form.value = { name: '', phone: '', email: '', message: '', consent: false }
  setTimeout(function() { submitted.value = false }, 6000)
}

const socials = [
  { name: 'LinkedIn',  url: 'https://linkedin.com',  icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>' },
  { name: 'Twitter',   url: 'https://twitter.com',   icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
  { name: 'Instagram', url: 'https://instagram.com', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>' },
  { name: 'YouTube',   url: 'https://youtube.com',   icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' },
  { name: 'Facebook',  url: 'https://facebook.com',  icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' },
]
</script>