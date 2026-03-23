<template>
  <div class="contact-view">
    <!-- Hero -->
    <section class="relative h-[45vh] min-h-[300px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/idrp.jfif"
        alt="Contact IDRP"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Get in Touch
          </span>
        </div>
        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Contact Us
        </h1>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Reach Out
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Let's Collaborate!
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
            We invite entrepreneurs, investors, and partners to connect with us
            and explore opportunities for collaboration.
          </p>
        </div>

        <div class="flex flex-col items-start gap-14 lg:flex-row">
          <!-- Left: Form -->
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
                  By submitting this form, I/We consent to IDRP collecting and using
                  the provided information solely for the purpose of evaluating and
                  delivering incubation, acceleration, funding, mentorship,
                  networking, and related programs. The information is shared
                  voluntarily, and I/We acknowledge that no confidential or
                  proprietary data should be submitted unless we are comfortable
                  with its use for these purposes. IDRP will maintain reasonable
                  confidentiality, will not share information with third parties
                  without consent (except where required by law or for service
                  delivery), and may contact us using the provided details regarding
                  this application and relevant opportunities.
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

          <!-- Right: Info -->
          <div class="flex w-full flex-col gap-8 lg:w-1/2">
            <div
              class="h-64 overflow-hidden rounded-3xl shadow-xl"
              :class="{
                'bg-gradient-to-br from-teal-100 to-cyan-50': !showCampusImage,
              }"
            >
              <img
                v-if="showCampusImage"
                src="/about-intro.jfif"
                alt="IDRP Campus"
                class="h-full w-full object-cover"
                @error="showCampusImage = false"
              />
            </div>

            <div class="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-gray-50 p-8">
              <div>
                <h3 class="mb-4 text-lg font-bold text-gray-900">Find Us</h3>
                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                    📍
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">
                      IIIT Dharwad Research Park
                    </p>
                    <p class="mt-1 text-sm leading-relaxed text-gray-500">
                      Pi Block, IIIT Dharwad<br />
                      92VG+2F9, IIIT Circle Rd<br />
                      Dharwad, Karnataka 580009
                    </p>
                    <a
                      href="https://www.google.com/maps/place/IIIT+Dharwad+Research+Park+(IDRP)/@15.3925499,75.0236567,17z"
                      target="_blank"
                      rel="noopener"
                      class="mt-2 inline-block text-xs font-semibold text-teal-600 transition-colors hover:text-teal-800"
                    >
                      View on Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4 border-t border-gray-200 pt-6">
                <div
                  v-for="item in contactItems"
                  :key="item.label"
                  class="flex items-center gap-4"
                >
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                    {{ item.emoji }}
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {{ item.label }}
                    </p>
                    <a
                      :href="item.href"
                      class="text-sm font-semibold text-gray-800 transition-colors hover:text-teal-600"
                    >
                      {{ item.value }}
                    </a>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <p class="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Follow Us
                </p>
                <div class="flex flex-wrap gap-3">
                  <a
                    v-for="social in socials"
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    rel="noopener"
                    class="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 transition-all duration-200 hover:border-teal-400 hover:text-teal-600"
                  >
                    <span v-html="social.icon" class="h-4 w-4" />
                    {{ social.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

type ContactItem = {
  label: string
  value: string
  href: string
  emoji: string
}

type SocialLink = {
  name: string
  url: string
  icon: string
}

const showHeroImage = ref(true)
const showCampusImage = ref(true)
const submitted = ref(false)

const form = reactive<ContactForm>({
  name: '',
  phone: '',
  email: '',
  message: '',
  consent: false,
})

const contactItems: ContactItem[] = [
  {
    label: 'Email',
    value: 'contact@idrp.in',
    href: 'mailto:contact@idrp.in',
    emoji: '📧',
  },
  {
    label: 'Phone',
    value: '+91 00000 00000',
    href: 'tel:+910000000000',
    emoji: '📞',
  },
]

const socials: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  },
]

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