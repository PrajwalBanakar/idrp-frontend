<template>
  <div
    v-if="agenda?.length"
    class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
  >
    <div class="mb-4 flex items-center gap-3">
      <div class="h-8 w-1 rounded-full bg-teal-500" />
      <h2 class="text-2xl font-bold text-gray-900">Agenda</h2>
    </div>

    <div class="space-y-4">
      <div
        v-for="(item, index) in agenda"
        :key="`${item.time}-${item.title}-${index}`"
        class="flex gap-4 rounded-2xl border border-gray-100 p-5"
      >
        <div class="min-w-[100px]">
          <p class="text-sm font-bold text-teal-700">{{ item.time }}</p>
        </div>

        <div>
          <p class="text-base font-bold text-gray-900">{{ item.title }}</p>
          <p v-if="item.description" class="mt-1 text-sm leading-6 text-gray-600">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type AgendaItem = {
  time: string
  title: string
  description?: string
}

defineProps<{
  agenda?: AgendaItem[]
}>()
</script>