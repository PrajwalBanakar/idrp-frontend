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

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Portfolio
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Startups
        </h1>
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
              At IDRP, we celebrate a vibrant community of startups tackling
              real-world challenges with bold ideas and cutting-edge technology.
              From early prototypes to market-ready products and investor-backed
              scale-ups, these ventures embody the spirit of entrepreneurship.
            </p>
            <p>
              We have empowered hundreds of founders through customized
              programs, expert mentorship, funding opportunities, and
              collaborative growth environments. Discover our diverse portfolio
              of startups.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
            >
              <p class="text-3xl font-extrabold text-teal-700">{{ stat.value }}</p>
              <p class="mt-1 text-sm text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div
            class="h-[400px] overflow-hidden rounded-3xl shadow-2xl"
            :class="{
              'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage,
            }"
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
      <div class="mx-auto max-w-6xl">
        <!-- Category Tabs -->
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

        <!-- Grid -->
        <div
          v-if="startupsWithMeta.length > 0"
          class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          <a
            v-for="startup in startupsWithMeta"
            :key="startup.name"
            :href="startup.website"
            target="_blank"
            rel="noopener"
            class="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-teal-300 hover:shadow-xl"
          >
            <div
              class="mb-3 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
            >
              <img
                v-if="startup.logoVisible"
                :src="startup.logo"
                :alt="startup.name"
                class="h-full w-full object-contain"
                @error="startup.logoVisible = false"
              />
              <span
                v-else
                class="text-lg font-extrabold text-teal-600"
              >
                {{ startup.initial }}
              </span>
            </div>

            <p class="text-center text-sm font-bold leading-tight text-gray-800 transition-colors group-hover:text-teal-700">
              {{ startup.name }}
            </p>
            <p class="mt-1 text-center text-xs text-gray-400">
              {{ startup.sector }}
            </p>

            <span
              class="mt-2 rounded-full px-2.5 py-0.5 text-xs font-semibold"
              :class="getBadgeClass(startup.category)"
            >
              {{ startup.categoryLabel }}
            </span>
          </a>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="py-16 text-center text-gray-400"
        >
          <p class="mb-4 text-4xl">🚀</p>
          <p class="font-semibold text-gray-500">
            No startups in this category yet.
          </p>
        </div>

        <!-- Result Count -->
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

type Startup = {
  name: string
  sector: string
  category: StartupCategory
  logo: string
  website: string
  logoVisible: boolean
}

type StartupWithMeta = Startup & {
  initial: string
  categoryLabel: string
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
    website: '#',
    logoVisible: true,
  },
  {
    name: 'AgriVision Labs',
    sector: 'AgriTech',
    category: 'incubated',
    logo: '/logos/agrivision.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'SecureChain Systems',
    sector: 'Blockchain',
    category: 'graduated',
    logo: '/logos/securechain.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'XR Dynamics',
    sector: 'Extended Reality',
    category: 'incubated',
    logo: '/logos/xrdynamics.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'IoTForge',
    sector: 'IoT',
    category: 'funded',
    logo: '/logos/iotforge.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'MediScan Health',
    sector: 'MedTech',
    category: 'graduated',
    logo: '/logos/mediscan.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'SpaceSense Tech',
    sector: 'Space Tech',
    category: 'funded',
    logo: '/logos/spacesense.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'NLP Nexus',
    sector: 'AI / NLP',
    category: 'incubated',
    logo: '/logos/nlpnexus.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'CyberShield',
    sector: 'Cyber Security',
    category: 'graduated',
    logo: '/logos/cybershield.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'FarmConnect',
    sector: 'AgriTech',
    category: 'incubated',
    logo: '/logos/farmconnect.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'HealthOS',
    sector: 'HealthTech',
    category: 'funded',
    logo: '/logos/healthos.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'BuildRight AR',
    sector: 'AR / PropTech',
    category: 'incubated',
    logo: '/logos/buildright.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'DataSprout',
    sector: 'Data Analytics',
    category: 'graduated',
    logo: '/logos/datasprout.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'FinBridge',
    sector: 'FinTech',
    category: 'funded',
    logo: '/logos/finbridge.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'EduReach',
    sector: 'EdTech',
    category: 'graduated',
    logo: '/logos/edureach.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'GreenTrace',
    sector: 'CleanTech',
    category: 'incubated',
    logo: '/logos/greentrace.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'LogiFlow',
    sector: 'Logistics / SaaS',
    category: 'graduated',
    logo: '/logos/logiflow.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'VocalAI',
    sector: 'Speech Tech',
    category: 'funded',
    logo: '/logos/vocalai.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'SemiCore Labs',
    sector: 'Semiconductor',
    category: 'incubated',
    logo: '/logos/semicore.png',
    website: '#',
    logoVisible: true,
  },
  {
    name: 'MobiTrack',
    sector: 'Mobility',
    category: 'graduated',
    logo: '/logos/mobitrack.png',
    website: '#',
    logoVisible: true,
  },
])

const categoryLabels: Record<StartupCategory, string> = {
  incubated: 'Incubated',
  funded: 'Funded',
  graduated: 'Graduated',
}

const filteredStartups = computed(() => {
  if (activeTab.value === 'all') {
    return startups
  }

  return startups.filter((startup) => startup.category === activeTab.value)
})

const startupsWithMeta = computed<StartupWithMeta[]>(() =>
  filteredStartups.value.map((startup) => ({
    ...startup,
    initial: startup.name.charAt(0).toUpperCase(),
    categoryLabel: categoryLabels[startup.category],
  })),
)

function getTabCount(key: TabKey) {
  if (key === 'all') {
    return startups.length
  }

  return startups.filter((startup) => startup.category === key).length
}

function getBadgeClass(category: StartupCategory) {
  const badgeMap: Record<StartupCategory, string> = {
    incubated: 'bg-teal-50 text-teal-700',
    funded: 'bg-emerald-50 text-emerald-700',
    graduated: 'bg-blue-50 text-blue-700',
  }

  return badgeMap[category]
}
</script>