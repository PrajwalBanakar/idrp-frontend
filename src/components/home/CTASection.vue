<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-600 px-6 py-20 md:px-16"
  >
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5" />
      <div class="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5" />
    </div>

    <div class="relative z-10 mx-auto max-w-4xl text-center">
      <span
        class="mb-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
      >
        Start Your Journey
      </span>

      <h2 class="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl">
        Ready to build the future?
      </h2>

      <p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-teal-100">
        Whether you're at the idea stage or ready to scale, IDRP has the programs, people, and
        infrastructure to take you further. Applications are open now.
      </p>

      <div class="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <RouterLink
          to="/apply/resident-incubation"
          class="rounded-full bg-white px-8 py-4 text-sm font-bold text-teal-800 shadow-xl transition-colors hover:bg-teal-50"
        >
          Apply to a Program
        </RouterLink>

        <RouterLink
          to="/contact"
          class="rounded-full border-2 border-white/60 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Talk to our Team
        </RouterLink>
      </div>

      <div class="border-t border-white/20 pt-10">
        <p class="mb-4 text-sm font-medium text-teal-100">
          Stay updated with the latest from IDRP
        </p>

        <form
          class="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          @submit.prevent="subscribeNewsletter"
        >
          <input
            v-model.trim="newsletterEmail"
            type="email"
            placeholder="Enter your email"
            class="flex-1 rounded-full bg-white px-5 py-3 text-sm text-gray-800 outline-none placeholder-gray-400 focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            class="shrink-0 rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-950"
          >
            Subscribe
          </button>
        </form>

        <p v-if="newsletterSuccess" class="mt-3 text-xs text-teal-200">
          ✓ You're subscribed! We'll keep you in the loop.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const newsletterEmail = ref('')
const newsletterSuccess = ref(false)

function subscribeNewsletter() {
  if (!newsletterEmail.value) return

  newsletterSuccess.value = true
  newsletterEmail.value = ''

  window.setTimeout(() => {
    newsletterSuccess.value = false
  }, 4000)
}
</script>