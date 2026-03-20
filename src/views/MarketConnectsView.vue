<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/mentors-hero.jfif'" alt="Market Connects"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Services</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Market Connects</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        <!-- Left: Text -->
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Approach</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6 leading-tight">Expand Your Reach. Go Beyond Boundaries.</h2>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            At IDRP, we help startups evolve from local players to global contenders. Our Market Access &amp; Expansion program equips you with the insights, connections, and strategic support needed to enter new markets, scale effectively, and build a lasting presence, across India and beyond.
          </p>
          <ul class="space-y-3 mb-6">
            <li v-for="point in introPoints" :key="point" class="flex items-start gap-3 text-sm text-gray-600">
              <div class="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              {{ point }}
            </li>
          </ul>
          <p class="text-gray-600 text-sm leading-relaxed mb-2">
            Whether your goal is regional growth or international expansion, IDRP provides the platform, network, and expertise to accelerate your journey.
          </p>
          <p class="text-teal-700 font-semibold text-sm mt-4">
            Scale with clarity. Grow with intent. Go global with IDRP.
          </p>
        </div>

        <!-- Right: Image -->
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <img :src="'/incubation-intro.jfif'" alt="Market Connects at IDRP"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>

      </div>
    </section>

    <!-- ─── What We Offer Cards ───────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Market Connect Services</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Strategic tools and connections to help you enter, grow, and lead in new markets.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="card in serviceCards" :key="card.title"
            class="relative bg-teal-500 rounded-2xl p-6 pt-10 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="absolute -top-5 left-6 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              :style="{ backgroundColor: card.iconBg }">
              {{ card.emoji }}
            </div>
            <h4 class="font-bold text-base leading-snug mb-3 mt-1">{{ card.title }}</h4>
            <p class="text-teal-100 text-sm leading-relaxed">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────── -->
    <section class="py-16 px-6 md:px-16 bg-gradient-to-r from-teal-700 to-cyan-600">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 class="text-2xl font-bold text-white">Ready to take your startup global?</h3>
          <p class="text-teal-100 mt-2">Connect with our team and start your market expansion journey today.</p>
        </div>
        <router-link to="/contact" class="shrink-0 bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">
          Talk to Us
        </router-link>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'

const introPoints = [
  'Discover and validate the right markets for expansion',
  'Navigate regional business environments and regulatory frameworks',
  'Forge strategic partnerships with industry leaders, investors, and trade organizations',
  'Develop go-to-market strategies with localization support',
  'Engage in cross-border accelerators, delegations, and global expos',
]

const serviceCards = [
  {
    title: 'Market Discovery & Validation',
    description: 'Identify the right markets for your product through structured research, competitive analysis, and validation frameworks.',
    emoji: '🔍',
    iconBg: '#7c2d12',
  },
  {
    title: 'Regulatory Navigation',
    description: 'Get expert guidance on regional regulations, compliance requirements, and business environment nuances before you enter.',
    emoji: '📋',
    iconBg: '#312e81',
  },
  {
    title: 'Strategic Partnerships',
    description: 'Forge meaningful connections with industry leaders, trade bodies, and investors to accelerate market entry.',
    emoji: '🤝',
    iconBg: '#14532d',
  },
  {
    title: 'Go-to-Market Strategy',
    description: 'Develop localized GTM strategies tailored to your target market, including positioning, pricing, and distribution.',
    emoji: '🎯',
    iconBg: '#92400e',
  },
  {
    title: 'Global Delegations & Expos',
    description: 'Participate in cross-border accelerators, trade delegations, and international expos to boost visibility and credibility.',
    emoji: '✈️',
    iconBg: '#7c2d12',
  },
  {
    title: 'Investor & Partner Connects',
    description: 'Get curated introductions to global investors, strategic partners, and ecosystem players aligned with your vision.',
    emoji: '🌐',
    iconBg: '#312e81',
  },
  {
    title: 'Localization Support',
    description: 'Adapt your product, messaging, and operations to resonate with local audiences and cultural expectations.',
    emoji: '🗺️',
    iconBg: '#14532d',
  },
  {
    title: 'Ongoing Market Intelligence',
    description: 'Stay ahead with continuous market insights, trend reports, and competitive landscape updates as you scale.',
    emoji: '📈',
    iconBg: '#92400e',
  },
]
</script>