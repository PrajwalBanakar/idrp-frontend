<template>
  <AppLayout>

    <!-- ─── Hero ──────────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/vision-community.jfif'" alt="Startups"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Startups</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Community</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6 leading-tight">Meet the Innovators Driving Our Ecosystem</h2>
          <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>At IDRP, we celebrate a vibrant community of startups tackling real-world challenges with bold ideas and cutting-edge technology. From early prototypes to market-ready products and investor-backed scale-ups, these ventures embody the spirit of entrepreneurship.</p>
            <p>We have empowered hundreds of founders through customized programs, expert mentorship, funding opportunities, and collaborative growth environments. Discover our diverse portfolio of startups.</p>
          </div>
          <!-- Quick stats -->
          <div class="mt-8 flex flex-wrap gap-8">
            <div><p class="text-3xl font-extrabold text-teal-700">400+</p><p class="text-sm text-gray-500 mt-1">Startups graduated</p></div>
            <div><p class="text-3xl font-extrabold text-teal-700">26+</p><p class="text-sm text-gray-500 mt-1">Startups funded</p></div>
            <div><p class="text-3xl font-extrabold text-teal-700">150+</p><p class="text-sm text-gray-500 mt-1">Active community</p></div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <img :src="'/vision-innovation.jfif'" alt="IDRP Startups"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Startup Portfolio ─────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">

        <!-- Category tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
            class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            :class="activeTab === tab.key
              ? 'bg-teal-700 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-400 hover:text-teal-700'">
            {{ tab.label }}
            <span class="ml-1.5 text-xs font-bold opacity-70">({{ tabCount(tab.key) }})</span>
          </button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <a v-for="startup in filteredStartups" :key="startup.name"
            :href="startup.website" target="_blank" rel="noopener"
            class="group flex flex-col items-center bg-white rounded-2xl p-5 border border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <!-- Logo -->
            <div class="w-16 h-16 rounded-xl overflow-hidden mb-3 flex items-center justify-center border border-gray-100 bg-gray-50 shrink-0">
              <img :src="startup.logo" :alt="startup.name"
                class="w-full h-full object-contain"
                onerror="this.style.display='none'" />
              <!-- Fallback initials -->
              <span class="text-lg font-extrabold text-teal-600 hidden last:flex">{{ startup.name.charAt(0) }}</span>
            </div>
            <p class="text-sm font-bold text-gray-800 text-center group-hover:text-teal-700 transition-colors leading-tight">{{ startup.name }}</p>
            <p class="text-xs text-gray-400 mt-1 text-center">{{ startup.sector }}</p>
            <!-- Category badge -->
            <span class="mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              :class="badgeClass(startup.category)">
              {{ startup.category }}
            </span>
          </a>
        </div>

        <!-- Empty state -->
        <div v-if="filteredStartups.length === 0" class="text-center py-16 text-gray-400">
          <p class="text-4xl mb-4">🚀</p>
          <p class="font-semibold text-gray-500">No startups in this category yet.</p>
        </div>

        <!-- Result count -->
        <p class="text-center text-sm text-gray-400 mt-8">
          Showing {{ filteredStartups.length }} startup{{ filteredStartups.length !== 1 ? 's' : '' }}
        </p>

      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-gradient-to-r from-teal-700 to-cyan-600">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 class="text-2xl font-bold text-white">Ready to join this community?</h3>
          <p class="text-teal-100 mt-2">Apply to one of our programs and become part of the IDRP story.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <router-link to="/apply/resident-incubation" class="bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">Apply Now</router-link>
          <router-link to="/contact" class="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition-colors text-sm">Contact Us</router-link>
        </div>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref, computed } from 'vue'

const activeTab = ref('all')

const tabs = [
  { key: 'all',       label: 'All Startups' },
  { key: 'incubated', label: 'Incubated' },
  { key: 'funded',    label: 'Funded' },
  { key: 'graduated', label: 'Graduated' },
]

const startups = [
  { name: 'NeuroSense AI',       sector: 'AI / HealthTech',   category: 'funded',    logo: '/logos/neurosense.png',    website: '#' },
  { name: 'AgriVision Labs',     sector: 'AgriTech',          category: 'incubated', logo: '/logos/agrivision.png',    website: '#' },
  { name: 'SecureChain Systems', sector: 'Blockchain',        category: 'graduated', logo: '/logos/securechain.png',   website: '#' },
  { name: 'XR Dynamics',        sector: 'Extended Reality',  category: 'incubated', logo: '/logos/xrdynamics.png',    website: '#' },
  { name: 'IoTForge',           sector: 'IoT',               category: 'funded',    logo: '/logos/iotforge.png',      website: '#' },
  { name: 'MediScan Health',    sector: 'MedTech',           category: 'graduated', logo: '/logos/mediscan.png',      website: '#' },
  { name: 'SpaceSense Tech',    sector: 'Space Tech',        category: 'funded',    logo: '/logos/spacesense.png',    website: '#' },
  { name: 'NLP Nexus',          sector: 'AI / NLP',          category: 'incubated', logo: '/logos/nlpnexus.png',      website: '#' },
  { name: 'CyberShield',        sector: 'Cyber Security',    category: 'graduated', logo: '/logos/cybershield.png',   website: '#' },
  { name: 'FarmConnect',        sector: 'AgriTech',          category: 'incubated', logo: '/logos/farmconnect.png',   website: '#' },
  { name: 'HealthOS',           sector: 'HealthTech',        category: 'funded',    logo: '/logos/healthos.png',      website: '#' },
  { name: 'BuildRight AR',      sector: 'AR / PropTech',     category: 'incubated', logo: '/logos/buildright.png',    website: '#' },
  { name: 'DataSprout',         sector: 'Data Analytics',    category: 'graduated', logo: '/logos/datasprout.png',    website: '#' },
  { name: 'FinBridge',          sector: 'FinTech',           category: 'funded',    logo: '/logos/finbridge.png',     website: '#' },
  { name: 'EduReach',           sector: 'EdTech',            category: 'graduated', logo: '/logos/edureach.png',      website: '#' },
  { name: 'GreenTrace',         sector: 'CleanTech',         category: 'incubated', logo: '/logos/greentrace.png',    website: '#' },
  { name: 'LogiFlow',           sector: 'Logistics / SaaS',  category: 'graduated', logo: '/logos/logiflow.png',      website: '#' },
  { name: 'VocalAI',            sector: 'Speech Tech',       category: 'funded',    logo: '/logos/vocalai.png',       website: '#' },
  { name: 'SemiCore Labs',      sector: 'Semiconductor',     category: 'incubated', logo: '/logos/semicore.png',      website: '#' },
  { name: 'MobiTrack',          sector: 'Mobility',          category: 'graduated', logo: '/logos/mobitrack.png',     website: '#' },
]

const filteredStartups = computed(() =>
  activeTab.value === 'all'
    ? startups
    : startups.filter(s => s.category === activeTab.value)
)

function tabCount(key) {
  return key === 'all' ? startups.length : startups.filter(s => s.category === key).length
}

function badgeClass(category) {
  const map = {
    incubated: 'bg-teal-50 text-teal-700',
    funded:    'bg-emerald-50 text-emerald-700',
    graduated: 'bg-blue-50 text-blue-700',
  }
  return map[category] || 'bg-gray-100 text-gray-600'
}
</script>