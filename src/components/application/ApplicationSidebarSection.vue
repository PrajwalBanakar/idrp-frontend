<template>
  <div class="space-y-6">
    <div class="card">
      <h3>Program Snapshot</h3>
      <p>{{ program.title }}</p>
      <p>{{ program.meta }}</p>
    </div>

    <div class="card">
      <h3>What We Look For</h3>
      <ul>
        <li v-for="item in evaluationPoints" :key="item">
          ✓ {{ item }}
        </li>
      </ul>
    </div>

    <div class="card bg-teal-700 text-white">
      <RouterLink to="/contact">Contact Us</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProgramMeta } from '@/types/application'

defineProps<{
  program: ProgramMeta
  evaluationPoints: string[]
}>()
</script>