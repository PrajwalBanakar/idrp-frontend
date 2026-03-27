<template>
  <div class="contact-view">
    <ContactHeroSection :hero="contactHero" />

    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            {{ contactIntro.eyebrow }}
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            {{ contactIntro.title }}
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
            {{ contactIntro.description }}
          </p>
        </div>

        <div class="flex flex-col items-start gap-14 lg:flex-row">
          <ContactFormSection />
          <ContactInfoSection :contact-items="contactItems" :socials="socials" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactFormSection from '@/components/contact/ContactFormSection.vue'
import ContactHeroSection from '@/components/contact/ContactHeroSection.vue'
import ContactInfoSection from '@/components/contact/ContactInfoSection.vue'

import { contactIntro, contactItems, socials,contactHero } from '@/data/contact'

</script>