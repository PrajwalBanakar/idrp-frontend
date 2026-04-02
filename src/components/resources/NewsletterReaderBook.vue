<template>
  <div
    class="overflow-hidden rounded-[1.75rem] border border-[#d8cfbf] bg-[#e9decb] p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] md:p-4"
  >
    <div
      class="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
    >
      <iframe
        v-if="newsletter.pdfUrl"
        :src="viewerSrc"
        class="w-full bg-white"
        style="height: 75vh;"
        title="Newsletter PDF"
      />

      <div
        v-else
        class="flex h-[60vh] items-center justify-center text-sm font-medium text-slate-500"
      >
        PDF not available.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Newsletter } from '@/types/newsletter'

const props = defineProps<{
  newsletter: Newsletter
}>()

const viewerSrc = computed(() => {
  if (!props.newsletter.pdfUrl) return ''

  // 🔥 BEST SETTINGS
  return `${props.newsletter.pdfUrl}#page=1&zoom=page-fit&toolbar=1&navpanes=0`
})
</script>