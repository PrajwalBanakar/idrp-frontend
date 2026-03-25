<template>
  <div class="startups-view">
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/vision-community.jfif"
        alt="Startups"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Portfolio
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Startups
        </h1>
        <p class="max-w-2xl text-sm leading-relaxed text-teal-50 md:text-base">
          Explore startups from the IDRP ecosystem with their profiles, founders, and investor-facing information.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Community
          </span>
          <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
            Meet the Innovators Driving Our Ecosystem
          </h2>

          <div class="space-y-4 text-sm leading-relaxed text-gray-600">
            <p>
              At IDRP, we support startups through incubation, mentoring, funding access,
              and ecosystem connections. This portfolio gives a quick but useful view of each venture.
            </p>
            <p>
              Open any card to see the startup brief, founders, LinkedIn profiles, website,
              investor one-pager, and contact details.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-8">
            <div v-for="stat in stats" :key="stat.label">
              <p class="text-3xl font-extrabold text-teal-700">{{ stat.value }}</p>
              <p class="mt-1 text-sm text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div
            class="h-[400px] overflow-hidden rounded-3xl shadow-2xl"
            :class="{ 'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage }"
          >
            <img
              v-if="showIntroImage"
              src="/vision-innovation.jfif"
              alt="IDRP Startups"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Startup Portfolio -->
    <section class="bg-gray-50 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-7xl">
        <!-- Tabs -->
        <div class="mb-12 flex flex-wrap justify-center gap-3">
          <button
            v-for="tab in tabs"
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

        <!-- Collapsible Cards -->
        <div v-if="startupsWithMeta.length > 0" class="space-y-6">
          <article
            v-for="startup in startupsWithMeta"
            :key="startup.name"
            class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <!-- Card Header -->
            <div class="p-6">
              <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div class="flex items-start gap-4">
                  <div
                    class="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
                  >
                    <img
                      v-if="startup.logoVisible"
                      :src="startup.logo"
                      :alt="startup.name"
                      class="h-full w-full object-contain"
                      @error="startup.logoVisible = false"
                    />
                    <span v-else class="text-2xl font-extrabold text-teal-600">
                      {{ startup.initial }}
                    </span>
                  </div>

                  <div>
                    <div class="flex flex-wrap items-center gap-3">
                      <h3 class="text-2xl font-bold text-gray-900">
                        {{ startup.name }}
                      </h3>
                      <span
                        class="rounded-full px-3 py-1 text-xs font-semibold"
                        :class="getBadgeClass(startup.category)"
                      >
                        {{ startup.categoryLabel }}
                      </span>
                    </div>

                    <p class="mt-1 text-sm font-medium text-teal-700">
                      {{ startup.sector }}
                    </p>

                    <div class="mt-3 flex flex-wrap gap-3">
                      <a
                        :href="startup.website"
                        target="_blank"
                        rel="noopener"
                        class="text-sm font-semibold text-teal-700 hover:text-teal-800"
                      >
                        Visit Website
                      </a>
                      <span class="text-gray-300">|</span>
                      <a
                        :href="startup.onePager"
                        target="_blank"
                        rel="noopener"
                        class="text-sm font-semibold text-teal-700 hover:text-teal-800"
                      >
                        Investor One-Pager
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-teal-300 hover:text-teal-700"
                  @click="toggleStartup(startup.name)"
                >
                  {{ expandedStartup === startup.name ? 'Hide Details' : 'View Details' }}
                </button>
              </div>
            </div>

            <!-- Expandable Content -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[1000px] opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-[1000px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div
                v-if="expandedStartup === startup.name"
                class="border-t border-gray-100 bg-gray-50 px-6 py-6"
              >
                <div class="grid grid-cols-1 gap-8 xl:grid-cols-[1.4fr_1fr]">
                  <div>
                    <h4 class="text-sm font-bold uppercase tracking-wider text-gray-900">
                      Brief Overview
                    </h4>
                    <p class="mt-3 text-sm leading-relaxed text-gray-600">
                      {{ startup.brief }}
                    </p>

                    <h4 class="mt-8 text-sm font-bold uppercase tracking-wider text-gray-900">
                      Founders
                    </h4>
                    <div class="mt-4 space-y-4">
                      <div
                        v-for="founder in startup.founders"
                        :key="`${startup.name}-${founder.name}`"
                        class="rounded-2xl border border-gray-100 bg-white p-4"
                      >
                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p class="text-sm font-bold text-gray-900">
                              {{ founder.name }}
                            </p>
                            <p class="text-xs text-gray-500">
                              {{ founder.role }}
                            </p>
                          </div>

                          <a
                            :href="founder.linkedin"
                            target="_blank"
                            rel="noopener"
                            class="text-sm font-semibold text-teal-700 hover:text-teal-800"
                          >
                            LinkedIn
                          </a>
                        </div>

                        <div class="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                          <a
                            :href="`mailto:${founder.email}`"
                            class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 hover:border-teal-300 hover:text-teal-700"
                          >
                            {{ founder.email }}
                          </a>
                          <a
                            :href="`tel:${founder.phone}`"
                            class="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 hover:border-teal-300 hover:text-teal-700"
                          >
                            {{ founder.phone }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-sm font-bold uppercase tracking-wider text-gray-900">
                      Startup Contact
                    </h4>

                    <div class="mt-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                      <div class="space-y-4 text-sm text-gray-600">
                        <div>
                          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Contact Email
                          </p>
                          <a
                            :href="`mailto:${startup.contactEmail}`"
                            class="mt-1 inline-block font-medium text-gray-800 hover:text-teal-700"
                          >
                            {{ startup.contactEmail }}
                          </a>
                        </div>

                        <div>
                          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Contact Number
                          </p>
                          <a
                            :href="`tel:${startup.contactPhone}`"
                            class="mt-1 inline-block font-medium text-gray-800 hover:text-teal-700"
                          >
                            {{ startup.contactPhone }}
                          </a>
                        </div>

                        <div>
                          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Website
                          </p>
                          <a
                            :href="startup.website"
                            target="_blank"
                            rel="noopener"
                            class="mt-1 inline-block break-all font-medium text-gray-800 hover:text-teal-700"
                          >
                            {{ startup.websiteLabel }}
                          </a>
                        </div>

                        <div>
                          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Investor Material
                          </p>
                          <a
                            :href="startup.onePager"
                            target="_blank"
                            rel="noopener"
                            class="mt-1 inline-block font-medium text-teal-700 hover:text-teal-800"
                          >
                            View / Download One-Pager
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </article>
        </div>

        <div v-else class="py-16 text-center text-gray-400">
          <p class="mb-4 text-4xl">🚀</p>
          <p class="font-semibold text-gray-500">No startups in this category yet.</p>
        </div>

        <p class="mt-8 text-center text-sm text-gray-400">
          Showing {{ startupsWithMeta.length }} startup{{ startupsWithMeta.length !== 1 ? 's' : '' }}
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 class="text-2xl font-bold text-white">
            Ready to join this community?
          </h3>
          <p class="mt-2 text-teal-100">
            Apply to one of our programs and become part of the IDRP story.
          </p>
        </div>

        <div class="flex shrink-0 gap-4">
          <RouterLink
            to="/apply/resident-incubation"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
          >
            Apply Now
          </RouterLink>
          <RouterLink
            to="/contact"
            class="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

type StartupCategory = 'incubated' | 'funded' | 'graduated'
type TabKey = 'all' | StartupCategory

type Tab = {
  key: TabKey
  label: string
}

type StartupStat = {
  value: string
  label: string
}

type Founder = {
  name: string
  role: string
  linkedin: string
  email: string
  phone: string
}

type Startup = {
  name: string
  sector: string
  category: StartupCategory
  logo: string
  website: string
  onePager: string
  brief: string
  contactEmail: string
  contactPhone: string
  founders: Founder[]
  logoVisible: boolean
}

type StartupWithMeta = Startup & {
  initial: string
  categoryLabel: string
  websiteLabel: string
}

const showHeroImage = ref(true)
const showIntroImage = ref(true)
const activeTab = ref<TabKey>('all')

const stats: StartupStat[] = [
  { value: '400+', label: 'Startups graduated' },
  { value: '26+', label: 'Startups funded' },
  { value: '150+', label: 'Active community' },
]

const tabs: Tab[] = [
  { key: 'all', label: 'All Startups' },
  { key: 'incubated', label: 'Incubated' },
  { key: 'funded', label: 'Funded' },
  { key: 'graduated', label: 'Graduated' },
]

const startups = reactive<Startup[]>([
  {
    name: 'NeuroSense AI',
    sector: 'AI / HealthTech',
    category: 'funded',
    logo: '/logos/neurosense.png',
    website: 'https://example.com/neurosense',
    onePager: '/one-pagers/neurosense-ai.pdf',
    brief:
      'NeuroSense AI develops AI-powered health intelligence tools focused on screening, predictive insights, and clinical workflow support.',
    contactEmail: 'hello@neurosense.ai',
    contactPhone: '+91 98765 43210',
    founders: [
      {
        name: 'Aarav Sharma',
        role: 'Co-Founder & CEO',
        linkedin: 'https://linkedin.com/in/aaravsharma',
        email: 'aarav@neurosense.ai',
        phone: '+91 98765 43210',
      },
      {
        name: 'Ishita Rao',
        role: 'Co-Founder & CTO',
        linkedin: 'https://linkedin.com/in/ishitarao',
        email: 'ishita@neurosense.ai',
        phone: '+91 98765 43211',
      },
    ],
    logoVisible: true,
  },
  {
    name: 'AgriVision Labs',
    sector: 'AgriTech',
    category: 'incubated',
    logo: '/logos/agrivision.png',
    website: 'https://example.com/agrivision',
    onePager: '/one-pagers/agrivision-labs.pdf',
    brief:
      'AgriVision Labs builds precision agriculture solutions using computer vision and IoT to improve crop monitoring and farm productivity.',
    contactEmail: 'contact@agrivisionlabs.com',
    contactPhone: '+91 98765 41001',
    founders: [
      {
        name: 'Rohit Kulkarni',
        role: 'Founder',
        linkedin: 'https://linkedin.com/in/rohitkulkarni',
        email: 'rohit@agrivisionlabs.com',
        phone: '+91 98765 41001',
      },
    ],
    logoVisible: true,
  },
  {
    name: 'SecureChain Systems',
    sector: 'Blockchain',
    category: 'graduated',
    logo: '/logos/securechain.png',
    website: 'https://example.com/securechain',
    onePager: '/one-pagers/securechain-systems.pdf',
    brief:
      'SecureChain Systems offers blockchain-backed trust infrastructure for supply chains, document validation, and enterprise workflows.',
    contactEmail: 'info@securechain.io',
    contactPhone: '+91 98765 42002',
    founders: [
      {
        name: 'Mehul Patil',
        role: 'Co-Founder',
        linkedin: 'https://linkedin.com/in/mehulpatil',
        email: 'mehul@securechain.io',
        phone: '+91 98765 42002',
      },
      {
        name: 'Sana Khan',
        role: 'Co-Founder',
        linkedin: 'https://linkedin.com/in/sanakhan',
        email: 'sana@securechain.io',
        phone: '+91 98765 42003',
      },
    ],
    logoVisible: true,
  },
])

// const expandedStartups = reactive<Record<string, boolean>>({})

// startups.forEach((startup) => {
//   expandedStartups[startup.name] = false
// })

const expandedStartup = ref<string | null>(null)

function toggleStartup(name: string) {
  expandedStartup.value = expandedStartup.value === name ? null : name
}

const categoryLabels: Record<StartupCategory, string> = {
  incubated: 'Incubated',
  funded: 'Funded',
  graduated: 'Graduated',
}

const filteredStartups = computed(() => {
  if (activeTab.value === 'all') return startups
  return startups.filter((startup) => startup.category === activeTab.value)
})

const startupsWithMeta = computed<StartupWithMeta[]>(() =>
  filteredStartups.value.map((startup) => ({
    ...startup,
    initial: startup.name.charAt(0).toUpperCase(),
    categoryLabel: categoryLabels[startup.category],
    websiteLabel: startup.website.replace(/^https?:\/\//, ''),
  })),
)

function getTabCount(key: TabKey) {
  if (key === 'all') return startups.length
  return startups.filter((startup) => startup.category === key).length
}

// function toggleStartup(name: string) {
//   expandedStartups[name] = !expandedStartups[name]
// }

function getBadgeClass(category: StartupCategory) {
  const badgeMap: Record<StartupCategory, string> = {
    incubated: 'bg-teal-50 text-teal-700',
    funded: 'bg-emerald-50 text-emerald-700',
    graduated: 'bg-blue-50 text-blue-700',
  }

  return badgeMap[category]
}
</script>