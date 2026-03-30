<template>
  <div class="contact-view">
    <ContactHeroSection :hero="contactHero" />

    <section class="bg-white px-6 py-24 md:px-12 lg:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <span class="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
            {{ contactIntro.eyebrow }}
          </span>

          <h2 class="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {{ contactIntro.title }}
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            {{ contactIntro.description }}
          </p>
        </div>

        <div class="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactFormSection />
          <ContactInfoSection
            :contact-items="contactItems"
            :socials="socials"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactFormSection from '@/components/contact/ContactFormSection.vue'
import ContactHeroSection from '@/components/contact/ContactHeroSection.vue'
import ContactInfoSection from '@/components/contact/ContactInfoSection.vue'

import { contactIntro, contactItems, socials, contactHero } from '@/data/contact'
</script>