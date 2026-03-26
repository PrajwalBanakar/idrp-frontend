<template>
  <div class="flex w-full flex-col gap-8 lg:w-1/2">
    <div
      class="h-64 overflow-hidden rounded-3xl shadow-xl"
      :class="{ 'bg-gradient-to-br from-teal-100 to-cyan-50': !showCampusImage }"
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

      <ContactSocialLinks :socials="socials" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactSocialLinks from '@/components/contact/ContactSocialLinks.vue'

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

defineProps<{
  contactItems: ContactItem[]
  socials: SocialLink[]
}>()

const showCampusImage = ref(true)
</script>