<template>
  <div class="business-services-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/incubation-hero.jfif"
        alt="Business Services"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30"
      />
      <div
        class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
      />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Services
          </span>
        </div>
        <h1 class="text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Business Services
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="lg:w-1/2">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Approach
          </span>
          <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900">
            You Build the Future. We Handle the Foundations.
          </h2>

          <div class="space-y-4 text-sm leading-relaxed text-gray-600">
            <p>
              Building a startup demands complete focus. At IDRP, we manage the essential business
              functions so you can concentrate on your product, customers, and growth. From legal
              and financial support to HR and branding, we ensure every critical element is taken
              care of.
            </p>
            <p>
              Our Business Services are designed to support startups at every stage, whether you're
              part of a structured program or our Open Incubation model. We believe every founder
              should have access to high-quality support without unnecessary barriers or complexity.
            </p>
            <p>
              Whether you're gearing up for your first fundraise or scaling with the right
              investment partners, IDRP is with you at every step.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div
            class="h-[420px] overflow-hidden rounded-3xl shadow-2xl"
            :class="{
              'bg-gradient-to-br from-teal-100 to-cyan-50': !showIntroImage,
            }"
          >
            <img
              v-if="showIntroImage"
              src="/incubation-intro.jfif"
              alt="Business Services at IDRP"
              class="h-full w-full object-cover"
              @error="showIntroImage = false"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Open Incubation -->
    <section class="bg-gray-50 px-6 py-24 md:px-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
        <div class="order-2 lg:w-1/2 lg:order-1">
          <div
            class="h-[420px] overflow-hidden rounded-3xl shadow-2xl"
            :class="{
              'bg-gradient-to-br from-teal-50 to-cyan-50': !showOpenImage,
            }"
          >
            <img
              v-if="showOpenImage"
              src="/team-hero.jfif"
              alt="Open Incubation"
              class="h-full w-full object-cover"
              @error="showOpenImage = false"
            />
          </div>
        </div>

        <div class="order-1 lg:w-1/2 lg:order-2">
          <div
            class="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-1.5 text-xs font-bold text-white"
          >
            <span>⚡</span> Powered by Open Incubation
          </div>

          <h2 class="mb-3 text-3xl font-bold leading-tight text-gray-900">
            Not in a formal cohort? That's perfectly fine.
          </h2>

          <p class="mb-6 text-sm leading-relaxed text-gray-600">
            Our Open Incubation model gives startups access to IDRP's full range of services,
            mentorship, and community support, without the constraints of a fixed program.
          </p>

          <ul class="mb-6 space-y-3">
            <li
              v-for="point in openPoints"
              :key="point"
              class="flex items-start gap-3 text-sm text-gray-600"
            >
              <div
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="white"
                  class="h-3 w-3"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              {{ point }}
            </li>
          </ul>

          <p class="text-sm leading-relaxed text-gray-600">
            Whether you're an early-stage innovator or an established startup seeking expert
            guidance, IDRP provides founder-first flexibility and trusted support, all under one
            roof.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink
              to="/community-membership/apply"
              class="rounded-full bg-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-teal-700 hover:shadow-xl"
            >
              Join as Community Member
            </RouterLink>

            <RouterLink
              to="/contact"
              class="rounded-full border border-teal-600 px-6 py-3 text-sm font-bold text-teal-700 transition-all duration-300 hover:bg-teal-50"
            >
              Talk to Us
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-6 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            What We Offer
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Services Designed for Founders</h2>
        </div>

        <p class="mx-auto mb-14 max-w-2xl text-center leading-relaxed text-gray-500">
          IDRP connects startups with experienced, founder-friendly professionals who understand the
          challenges of lean teams, tight timelines, and limited bandwidth. Our services are
          available on-demand, with flexible, modular support tailored to your pace and budget.
        </p>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="card in serviceCards"
            :key="card.title"
            class="relative rounded-2xl bg-teal-500 p-6 pt-10 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div
              class="absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-full text-xl text-white shadow-lg"
              :style="{ backgroundColor: card.iconBg }"
            >
              {{ card.emoji }}
            </div>

            <h4 class="mt-1 mb-3 text-base font-bold leading-snug">
              {{ card.title }}
            </h4>
            <p class="text-sm leading-relaxed text-teal-100">
              {{ card.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 class="text-2xl font-bold text-white">Focus on building. Let us handle the rest.</h3>
          <p class="mt-2 text-teal-100">
            Talk to our team and explore the business services that fit your needs.
          </p>
        </div>

        <div class="flex shrink-0 gap-4">
          <RouterLink
            to="/contact"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
          >
            Talk to Us
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

type ServiceCard = {
  title: string
  description: string
  emoji: string
  iconBg: string
}

const showHeroImage = ref(true)
const showIntroImage = ref(true)
const showOpenImage = ref(true)

const openPoints: string[] = [
  'Join as a Community Member with a nominal annual fee',
  'Gain access to mentors, events, and essential business services',
  'Scale at your own pace with support exactly when you need it',
]

const serviceCards: ServiceCard[] = [
  {
    title: 'Marketing, GTM & Brand Strategy',
    description:
      'Build your brand, craft your go-to-market strategy, and attract the right customers with expert-led support.',
    emoji: '📣',
    iconBg: '#7c2d12',
  },
  {
    title: 'Accounting & Financial Management',
    description:
      'Stay on top of your books, manage cash flow, and ensure compliance with professional financial support.',
    emoji: '📊',
    iconBg: '#312e81',
  },
  {
    title: 'Human Resources & Team Support',
    description:
      'Build your team right with HR policies, hiring support, and people management frameworks tailored for startups.',
    emoji: '👥',
    iconBg: '#14532d',
  },
  {
    title: 'Legal Compliance & IP Assistance',
    description:
      'Navigate legal requirements, protect your intellectual property, and stay compliant with expert guidance.',
    emoji: '⚖️',
    iconBg: '#92400e',
  },
  {
    title: 'Knowledge Sessions & Expert Consultations',
    description:
      'Access curated workshops, expert clinics, and one-on-one consultations to sharpen your skills and strategy.',
    emoji: '🎓',
    iconBg: '#7c2d12',
  },
  {
    title: 'Pitch Deck & Fundraising Prep',
    description:
      'Craft compelling pitch narratives, refine your deck, and prepare for investor conversations with confidence.',
    emoji: '🎯',
    iconBg: '#312e81',
  },
  {
    title: 'Tech & Product Advisory',
    description:
      'Get guidance on tech stack decisions, product roadmaps, and engineering best practices from seasoned advisors.',
    emoji: '💻',
    iconBg: '#14532d',
  },
  {
    title: 'Operations & Scaling Support',
    description:
      'Streamline processes, build scalable systems, and get operational guidance as you grow beyond your founding team.',
    emoji: '⚙️',
    iconBg: '#92400e',
  },
]
</script>
