<template>
  <section class="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-16 lg:py-24">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_28%)]" />
    </div>

    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
    </div>

    <div class="relative z-10 mx-auto max-w-4xl text-center">
      <span
        class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-100 backdrop-blur-sm sm:text-xs"
      >
        Start Your Journey
      </span>

      <h2 class="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Ready to build the future?
      </h2>

      <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
        Explore programs, connect with the ecosystem, and take the next step with the right
        support, guidance, and infrastructure behind you.
      </p>

      <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <RouterLink
          to="/apply/resident-incubation"
          class="inline-flex min-w-[220px] items-center justify-center rounded-full bg-teal-600 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 sm:text-base"
        >
          Apply to a Program
        </RouterLink>

        <RouterLink
          to="/contact"
          class="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:text-slate-950 sm:text-base"
        >
          Talk to Our Team
        </RouterLink>
      </div>

      <div class="mx-auto mt-12 max-w-2xl border-t border-white/15 pt-8">
        <p class="text-sm font-medium text-slate-200">
          Stay updated with the latest from IDRP
        </p>

        <form
          class="mx-auto mt-4 flex max-w-xl flex-col gap-3 sm:flex-row"
          @submit.prevent="subscribeNewsletter"
        >
          <input
            v-model.trim="newsletterEmail"
            type="email"
            placeholder="Enter your email"
            class="w-full flex-1 rounded-full border border-white/10 bg-white px-5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            class="inline-flex shrink-0 items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal-700"
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