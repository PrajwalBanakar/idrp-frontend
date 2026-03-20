<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img :src="'/incubation-hero.jfif'" alt="Business Services"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Services</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">Business Services</h1>
      </div>
    </section>

    <!-- ─── Intro ──────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Approach</span>
          <h2 class="text-3xl font-bold text-gray-900 mt-3 mb-6 leading-tight">You Build the Future. We Handle the Foundations.</h2>
          <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>Building a startup demands complete focus. At IDRP, we manage the essential business functions so you can concentrate on your product, customers, and growth. From legal and financial support to HR and branding, we ensure every critical element is taken care of.</p>
            <p>Our Business Services are designed to support startups at every stage, whether you're part of a structured program or our Open Incubation model. We believe every founder should have access to high-quality support without unnecessary barriers or complexity.</p>
            <p>Whether you're gearing up for your first fundraise or scaling with the right investment partners, IDRP is with you at every step.</p>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <img :src="'/incubation-intro.jfif'" alt="Business Services at IDRP"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Open Incubation ───────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        <!-- Left: Image -->
        <div class="lg:w-1/2 order-2 lg:order-1">
          <div class="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <img :src="'/team-hero.jfif'" alt="Open Incubation"
              class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-50','to-cyan-50'); this.style.display='none'" />
          </div>
        </div>

        <!-- Right: Content -->
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="inline-flex items-center gap-2 bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5">
            <span>⚡</span> Powered by Open Incubation
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-3 leading-tight">Not in a formal cohort? That's perfectly fine.</h2>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Our Open Incubation model gives startups access to IDRP's full range of services, mentorship, and community support, without the constraints of a fixed program.
          </p>
          <ul class="space-y-3 mb-6">
            <li v-for="point in openPoints" :key="point" class="flex items-start gap-3 text-sm text-gray-600">
              <div class="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              {{ point }}
            </li>
          </ul>
          <p class="text-gray-600 text-sm leading-relaxed">
            Whether you're an early-stage innovator or an established startup seeking expert guidance, IDRP provides founder-first flexibility and trusted support, all under one roof.
          </p>
        </div>

      </div>
    </section>

    <!-- ─── What We Offer Cards ───────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-6">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Services Designed for Founders</h2>
        </div>
        <p class="text-center text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed">
          IDRP connects startups with experienced, founder-friendly professionals who understand the challenges of lean teams, tight timelines, and limited bandwidth. Our services are available on-demand, with flexible, modular support tailored to your pace and budget.
        </p>

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
          <h3 class="text-2xl font-bold text-white">Focus on building. Let us handle the rest.</h3>
          <p class="text-teal-100 mt-2">Talk to our team and explore the business services that fit your needs.</p>
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

const openPoints = [
  'Join as a Community Member with a nominal annual fee',
  'Gain access to mentors, events, and essential business services',
  'Scale at your own pace with support exactly when you need it',
]

const serviceCards = [
  {
    title: 'Marketing, GTM & Brand Strategy',
    description: 'Build your brand, craft your go-to-market strategy, and attract the right customers with expert-led support.',
    emoji: '📣',
    iconBg: '#7c2d12',
  },
  {
    title: 'Accounting & Financial Management',
    description: 'Stay on top of your books, manage cash flow, and ensure compliance with professional financial support.',
    emoji: '📊',
    iconBg: '#312e81',
  },
  {
    title: 'Human Resources & Team Support',
    description: 'Build your team right with HR policies, hiring support, and people management frameworks tailored for startups.',
    emoji: '👥',
    iconBg: '#14532d',
  },
  {
    title: 'Legal Compliance & IP Assistance',
    description: 'Navigate legal requirements, protect your intellectual property, and stay compliant with expert guidance.',
    emoji: '⚖️',
    iconBg: '#92400e',
  },
  {
    title: 'Knowledge Sessions & Expert Consultations',
    description: 'Access curated workshops, expert clinics, and one-on-one consultations to sharpen your skills and strategy.',
    emoji: '🎓',
    iconBg: '#7c2d12',
  },
  {
    title: 'Pitch Deck & Fundraising Prep',
    description: 'Craft compelling pitch narratives, refine your deck, and prepare for investor conversations with confidence.',
    emoji: '🎯',
    iconBg: '#312e81',
  },
  {
    title: 'Tech & Product Advisory',
    description: 'Get guidance on tech stack decisions, product roadmaps, and engineering best practices from seasoned advisors.',
    emoji: '💻',
    iconBg: '#14532d',
  },
  {
    title: 'Operations & Scaling Support',
    description: 'Streamline processes, build scalable systems, and get operational guidance as you grow beyond your founding team.',
    emoji: '⚙️',
    iconBg: '#92400e',
  },
]
</script>