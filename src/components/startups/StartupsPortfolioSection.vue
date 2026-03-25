<template>
  <section class="bg-gray-50 px-6 py-16 md:px-16">
    <div class="mx-auto max-w-7xl">
      <div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="tab in startupTabs"
            :key="tab.key"
            type="button"
            class="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
            :class="
              activeTab === tab.key
                ? 'bg-teal-700 text-white shadow-md'
                : 'border border-gray-200 bg-white text-gray-600 hover:border-teal-400 hover:text-teal-700'
            "
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
            <span class="ml-1.5 text-xs font-bold opacity-70">
              ({{ getTabCount(tab.key) }})
            </span>
          </button>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <div class="relative">
            <input
              v-model.trim="searchQuery"
              type="text"
              placeholder="Search startups, sector, founder..."
              class="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100 sm:w-80"
            />
          </div>

          <select
            v-model="sortBy"
            class="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
          >
            <option value="name-asc">Sort: A–Z</option>
            <option value="name-desc">Sort: Z–A</option>
            <option value="category">Sort: Category</option>
          </select>
        </div>
      </div>

      <div v-if="visibleStartups.length > 0" class="space-y-6">
        <StartupCard
          v-for="startup in visibleStartups"
          :key="startup.id"
          :startup="startup"
          :expanded="expandedStartupId === startup.id"
          @toggle="toggleStartup"
        />
      </div>

      <div v-else class="py-16 text-center text-gray-400">
        <p class="mb-4 text-4xl">🚀</p>
        <p class="font-semibold text-gray-500">No startups match your filters.</p>
      </div>

      <p class="mt-8 text-center text-sm text-gray-400">
        Showing {{ visibleStartups.length }} startup{{ visibleStartups.length !== 1 ? 's' : '' }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import StartupCard from '@/components/startups/StartupCard.vue'
import { startupTabs, type Startup, type TabKey } from '@/data/startups'

type SortOption = 'name-asc' | 'name-desc' | 'category'

const props = defineProps<{
  startups: Startup[]
}>()

const activeTab = ref<TabKey>('all')
const expandedStartupId = ref<string | null>(null)
const searchQuery = ref('')
const sortBy = ref<SortOption>('name-asc')

const filteredStartups = computed(() => {
  const base =
    activeTab.value === 'all'
      ? props.startups
      : props.startups.filter((startup) => startup.category === activeTab.value)

  const query = searchQuery.value.toLowerCase()

  if (!query) return base

  return base.filter((startup) => {
    const founderText = startup.founders
      .map((founder) => `${founder.name} ${founder.role}`)
      .join(' ')
      .toLowerCase()

    return (
      startup.name.toLowerCase().includes(query) ||
      startup.sector.toLowerCase().includes(query) ||
      founderText.includes(query)
    )
  })
})

const visibleStartups = computed(() => {
  const sorted = [...filteredStartups.value]

  if (sortBy.value === 'name-asc') {
    return sorted.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sortBy.value === 'name-desc') {
    return sorted.sort((a, b) => b.name.localeCompare(a.name))
  }

  return sorted.sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name)
    }
    return a.category.localeCompare(b.category)
  })
})

function toggleStartup(startupId: string) {
  expandedStartupId.value = expandedStartupId.value === startupId ? null : startupId
}

function getTabCount(key: TabKey) {
  if (key === 'all') return props.startups.length
  return props.startups.filter((startup) => startup.category === key).length
}
</script>