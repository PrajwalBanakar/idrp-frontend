<template>
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
        <span class="h-4 w-4" v-html="social.icon" />
        {{ social.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
type SocialLink = {
  name: string
  url: string
  icon: string
}

defineProps<{
  socials: SocialLink[]
}>()
</script>