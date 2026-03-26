<script setup lang="ts">
type Props = {
  searchQuery: string
  selectedYear: string
  availableYears: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:searchQuery', value: string): void
  (e: 'update:selectedYear', value: string): void
}>()
</script>

<template>
  <div class="grid gap-3 sm:grid-cols-2 lg:min-w-[420px]">
    <input
      :value="props.searchQuery"
      type="text"
      placeholder="Search institute, project, faculty, student..."
      class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition placeholder:text-slate-400 focus:border-teal-400"
      @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
    />

    <select
      :value="props.selectedYear"
      class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-400"
      @change="emit('update:selectedYear', ($event.target as HTMLSelectElement).value)"
    >
      <option value="all">All Years</option>
      <option
        v-for="year in props.availableYears"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
  </div>
</template>