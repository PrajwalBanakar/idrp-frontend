<script setup lang="ts">
import { ref } from 'vue'
import type { TeamMember } from '@/types/team'

type Props = {
  member: TeamMember
}

const props = defineProps<Props>()

const showImage = ref(true)
</script>

<template>
  <article
    class="group rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
  >
    <!-- Avatar -->
    <div class="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full bg-gray-100">
      <img
        v-if="showImage && props.member.image"
        :src="props.member.image"
        :alt="props.member.imageAlt"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        @error="showImage = false"
      />

      <!-- Fallback -->
      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 text-xl font-bold text-teal-700"
      >
        {{ props.member.name.charAt(0) }}
      </div>
    </div>

    <!-- Name -->
    <h3 class="text-lg font-bold text-gray-900">
      {{ props.member.name }}
    </h3>

    <!-- Role -->
    <p class="mt-1 text-sm text-gray-500">
      {{ props.member.role }}
    </p>
  </article>
</template>