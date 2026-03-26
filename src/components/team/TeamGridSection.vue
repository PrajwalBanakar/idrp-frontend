<script setup lang="ts">
import TeamMemberCard from '@/components/team/TeamMemberCard.vue'
import type { TeamMember } from '@/types/team'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  members: TeamMember[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Core Team',
  title: 'The Team Behind IDRP',
  description:
    'A dedicated group working across operations, ecosystem building, founder support, and program execution to help innovation move forward.',
})
</script>

<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          {{ eyebrow }}
        </span>

        <h2 class="mt-3 text-4xl font-bold text-gray-900">
          {{ title }}
        </h2>

        <p class="mt-4 leading-relaxed text-gray-600">
          {{ description }}
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TeamMemberCard
          v-for="member in members"
          :key="member.name"
          :member="member"
        />
      </div>
    </div>
  </section>
</template>