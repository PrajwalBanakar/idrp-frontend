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
  <section class="bg-slate-50 px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-7xl">

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TeamMemberCard
          v-for="member in members"
          :key="member.name"
          :member="member"
        />
      </div>
    </div>
  </section>
</template>