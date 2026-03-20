<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/team-hero.jfif'" alt="Our Team"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">The People Behind IDRP</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Our Team</h1>
      </div>
    </section>

    <!-- ─── Intro Text ─────────────────────────────────────────── -->
    <section class="py-20 px-6 md:px-16 bg-white">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Meet the Team</span>
        <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6">Expertise that drives execution</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          Our team combines deep expertise in incubation, investment, and operations, bringing together strategy, experience, and execution. With strong leadership and domain insight, they guide startups from idea to scalable growth, fostering an ecosystem where innovation leads to impact.
        </p>
        <div class="mt-8 w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto"></div>
      </div>
    </section>

    <!-- ─── Team Members ──────────────────────────────────────── -->
    <section class="pb-24 px-6 md:px-16 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-row flex-wrap justify-center gap-12">

          <!-- Prof. Mahadev Prasanna -->
          <div class="flex flex-col items-center group">
            <div class="shrink-0 rounded-full overflow-hidden shadow-lg ring-4 ring-gray-100 group-hover:ring-teal-300 transition-all duration-300 mb-4"
              style="width:15rem;height:15rem;min-width:15rem;min-height:15rem;max-width:15rem;max-height:15rem;">
              <img :src="'/board-prasanna.jfif'" alt="Prof. Mahadev Prasanna"
                class="w-full h-full object-cover object-top" />
            </div>
            <h3 class="text-base font-bold text-gray-900 text-center">Prof. Mahadev Prasanna</h3>
            <p class="text-teal-600 font-semibold text-sm mt-1 text-center">Director</p>
          </div>

          <!-- Dr. Deepak K T -->
          <div class="flex flex-col items-center group">
            <div class="shrink-0 rounded-full overflow-hidden shadow-lg ring-4 ring-gray-100 group-hover:ring-teal-300 transition-all duration-300 mb-4"
              style="width:15rem;height:15rem;min-width:15rem;min-height:15rem;max-width:15rem;max-height:15rem;">
              <img :src="'/board-deepak.jfif'" alt="Dr. Deepak K T"
                class="w-full h-full object-cover object-top" />
            </div>
            <h3 class="text-base font-bold text-gray-900 text-center">Dr. Deepak K T</h3>
            <p class="text-teal-600 font-semibold text-sm mt-1 text-center">CEO, IDRP</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-gradient-to-r from-teal-700 to-cyan-600">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 class="text-2xl font-bold text-white">Want to join the IDRP family?</h3>
          <p class="text-teal-100 mt-2">Explore career opportunities or get in touch with us.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <router-link to="/careers" class="bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">Careers</router-link>
          <router-link to="/contact" class="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition-colors text-sm">Contact Us</router-link>
        </div>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
</script>