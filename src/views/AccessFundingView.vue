<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/mentors-hero.jfif'" alt="Access to Funding"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Services</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Access to Funding</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        <!-- Left: Text -->
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Approach</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6 leading-tight">Fueling Growth with the Right Capital and Connections</h2>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            At IDRP, we understand that funding is not just about money. It's about unlocking opportunities. That's why we provide structured, startup-friendly access to capital through government-backed seed funding, curated investor connections, and specialized pitch-readiness programs. Whether you're preparing for your first raise or looking to scale with the right investment partner, IDRP supports you every step of the way.
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
          <p class="text-gray-600 text-sm leading-relaxed">
            Raising funds is one of the most critical and challenging milestones in every startup's journey. At IDRP, we simplify this process by guiding founders through every step of the investment journey, from understanding valuation and equity structures to connecting with the right investors. Our Investment Services are designed to bridge the gap between promising startups and strategic investors who believe in innovation and impact.
          </p>
        </div>

        <!-- Right: Image -->
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <img :src="'/incubation-intro.jfif'" alt="Funding at IDRP"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>

      </div>
    </section>

    <!-- ─── Service Cards (styled like uploaded image) ────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Investment Services</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">End-to-end support to help you raise the right capital at the right time.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="card in serviceCards" :key="card.title"
            class="relative bg-teal-500 rounded-2xl p-6 pt-10 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <!-- Icon circle floating above card -->
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
          <h3 class="text-2xl font-bold text-white">Ready to start your funding journey?</h3>
          <p class="text-teal-100 mt-2">Talk to our team and take the first step towards your next raise.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <router-link to="/contact" class="bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">Talk to Us</router-link>
        </div>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'

const introPoints = [
  'Recognized by DST and Startup India for startup support.',
  'Strong track record in investment facilitation (Rs. 7 Cr+ invested, $50 Mn+ enabled).',
  'In-house team for pitch coaching, storytelling, and fundraising strategy.',
  'Investor-ready mentorship and curated connections.',
  'Transparent processes and real outcomes.',
]

const serviceCards = [
  {
    title: 'Get Investor-Ready',
    description: 'With mentorship and pitch support to help you present your startup with clarity and confidence.',
    emoji: '🎯',
    iconBg: '#7c2d12',
  },
  {
    title: 'Participate in Demo Days',
    description: 'Get ready for investor meets and curated funding programs that put you in front of the right people.',
    emoji: '🤝',
    iconBg: '#312e81',
  },
  {
    title: 'Navigate Business Readiness Process',
    description: 'Get due diligence, valuation, and investment processes handled with expert guidance.',
    emoji: '✅',
    iconBg: '#14532d',
  },
  {
    title: 'Valuation & Financial Modeling',
    description: 'Helping you determine fair value and plan for sustainable growth with the right financial framework.',
    emoji: '📊',
    iconBg: '#92400e',
  },
  {
    title: 'Equity & Debt Structuring',
    description: 'Building the right capital mix for your stage and strategy to protect founders and attract investors.',
    emoji: '💹',
    iconBg: '#7c2d12',
  },
  {
    title: 'Shareholding Advisory',
    description: 'Ensuring transparency, compliance, and long-term founder control through smart shareholding structures.',
    emoji: '🏛️',
    iconBg: '#312e81',
  },
  {
    title: 'Investor Connects',
    description: 'Facilitating introductions to angels, VCs, and institutional investors through curated events and networks.',
    emoji: '🌐',
    iconBg: '#14532d',
  },
  {
    title: 'Funding Support',
    description: 'From pitch readiness to due diligence, we prepare startups to confidently engage with investors.',
    emoji: '💰',
    iconBg: '#92400e',
  },
]
</script>