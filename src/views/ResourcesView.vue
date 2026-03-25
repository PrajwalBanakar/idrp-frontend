<template>
  <div class="resources-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/resources-hero.jfif"
        alt="Resources"
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
            Knowledge Hub
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Resources
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Learn • Explore • Connect
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold text-gray-900">
          Insights, Publications, and Ecosystem Knowledge
        </h2>
        <p class="mb-5 text-lg leading-relaxed text-gray-600">
          The IDRP Resources page brings together curated newsletters, blogs, papers, industry
          reports, and knowledge assets that support innovation, startup growth, research
          translation, and ecosystem development.
        </p>
        <p class="text-lg leading-relaxed text-gray-600">
          It is designed as a common discovery space for founders, faculty, students, mentors,
          partners, and investors looking to stay informed and connected.
        </p>
        <div
          class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
        />
      </div>
    </section>

    <!-- Newsletter Bookshelf -->
    <section class="bg-gradient-to-b from-[#f7f4ee] to-[#efe9dd] px-6 py-20 md:px-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Featured Collection
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Newsletter Bookshelf</h2>
          <p class="mx-auto mt-4 max-w-3xl text-gray-600">
            Browse IDRP newsletters as a curated bookshelf and open each issue in its own dedicated
            reading view.
          </p>
        </div>

        <div
          class="relative overflow-hidden rounded-[2rem] border border-[#d9d0c1] bg-[#f8f3ea] px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:px-10"
        >
          <div
            class="pointer-events-none absolute left-4 right-4 top-[7.25rem] hidden h-4 rounded-full bg-gradient-to-b from-[#9a6a3d] to-[#6f4725] shadow-lg md:block"
          />
          <div
            class="pointer-events-none absolute left-4 right-4 bottom-8 hidden h-4 rounded-full bg-gradient-to-b from-[#9a6a3d] to-[#6f4725] shadow-lg md:block"
          />

          <div class="relative z-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            <RouterLink
              v-for="newsletter in newsletters"
              :key="newsletter.id"
              :to="`/resources/newsletters/${newsletter.slug}`"
              class="group relative flex h-[240px] w-full items-end justify-center outline-none transition-transform duration-300 hover:-translate-y-2 focus-visible:-translate-y-2"
            >
              <div
                class="relative h-[220px] w-[92%] rounded-l-md rounded-r-xl border border-black/10 text-left shadow-[12px_10px_24px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:shadow-[16px_14px_30px_rgba(0,0,0,0.22)]"
                :style="{ background: newsletter.coverGradient }"
              >
                <div class="absolute left-0 top-0 h-full w-4 rounded-l-md bg-black/15" />
                <div
                  class="absolute left-0 top-0 h-10 w-full rounded-t-xl bg-gradient-to-b from-white/20 to-transparent"
                />

                <div class="flex h-full flex-col justify-between p-4 pl-6 text-white">
                  <div>
                    <span
                      class="inline-flex rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/95 backdrop-blur-sm"
                    >
                      {{ newsletter.issue }}
                    </span>
                  </div>

                  <div>
                    <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                      IDRP Newsletter
                    </p>
                    <h3 class="line-clamp-4 text-lg font-extrabold leading-snug">
                      {{ newsletter.title }}
                    </h3>
                    <p class="mt-3 text-xs text-white/85">
                      {{ newsletter.date }}
                    </p>
                  </div>
                </div>

                <div
                  class="absolute right-0 top-[6px] h-[calc(100%-12px)] w-2 rounded-r-xl bg-white/70"
                />
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Resource Categories -->
    <section class="bg-gray-50 px-6 py-8 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-16 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Collections
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Explore More Resources</h2>
        </div>

        <div
          v-for="category in resourceCategories"
          :key="category.key"
          class="mb-16 last:mb-4"
        >
          <div class="mb-6 flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg text-white"
              :class="category.iconBgClass"
            >
              {{ category.icon }}
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900">{{ category.title }}</h3>
              <p class="mt-0.5 text-sm font-medium" :class="category.textClass">
                {{ category.subtitle }}
              </p>
              <p class="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
                {{ category.description }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="item in category.items"
              :key="item.title"
              class="rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              :class="category.hoverBorderClass"
            >
              <div class="mb-3 flex items-center justify-between gap-3">
                <span
                  class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                  :class="category.badgeClass"
                >
                  {{ item.type }}
                </span>
                <span class="text-xs font-medium text-gray-400">
                  {{ item.meta }}
                </span>
              </div>

              <h4 class="text-lg font-bold leading-snug text-gray-900">
                {{ item.title }}
              </h4>
              <p class="mt-2 text-sm leading-relaxed text-gray-600">
                {{ item.description }}
              </p>

              <div class="mt-4 flex items-center justify-between">
                <span class="text-xs font-medium text-gray-400">
                  {{ item.tag }}
                </span>
                <button
                  type="button"
                  class="text-sm font-semibold text-teal-700 transition-colors duration-200 hover:text-teal-800"
                >
                  View Resource →
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Matchmaking Section -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Startup Ecosystem
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Investor–Startup Matchmaking</h2>
          <p class="mx-auto mt-3 max-w-3xl text-gray-500">
            In addition to knowledge resources, IDRP can support structured matchmaking between
            startups and investors by aligning sector focus, stage, funding needs, and strategic
            fit.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10">
            <div class="mb-4 flex items-center gap-3">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-xl text-white"
              >
                🚀
              </div>
              <h3 class="text-2xl font-bold text-gray-900">For Startups</h3>
            </div>

            <p class="leading-relaxed text-gray-600">
              Founders can discover investors aligned with their domain, growth stage, funding ask,
              and long-term vision.
            </p>

            <ul class="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
              <li>• Startup profiling by sector, stage, traction, and capital requirement</li>
              <li>• Investor discovery based on strategic relevance and thesis alignment</li>
              <li>• Mentor-guided shortlisting and pitch-readiness support</li>
              <li>• Curated introductions and meeting facilitation</li>
            </ul>
          </article>

          <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10">
            <div class="mb-4 flex items-center gap-3">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white"
              >
                💰
              </div>
              <h3 class="text-2xl font-bold text-gray-900">For Investors</h3>
            </div>

            <p class="leading-relaxed text-gray-600">
              Investors can access a higher quality startup pipeline filtered by sector, maturity,
              funding fit, and ecosystem readiness.
            </p>

            <ul class="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
              <li>• Investor preference capture across sectors, stage, geography, and cheque size</li>
              <li>• Startup recommendations through curated fit assessment</li>
              <li>• Access to startup summaries, deck references, and traction snapshots</li>
              <li>• Support for demo days, focused meetings, and thematic showcases</li>
            </ul>
          </article>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <article
            v-for="step in matchmakingSteps"
            :key="step.step"
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <span class="text-xs font-bold uppercase tracking-widest text-teal-600">
              Step {{ step.step }}
            </span>
            <h4 class="mt-2 text-xl font-bold text-gray-900">{{ step.title }}</h4>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div class="rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center md:p-12">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Next Step
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">
            Explore Resources or Start Matchmaking
          </h2>
          <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-500">
            Discover curated knowledge assets across newsletters, blogs, papers, and reports, or
            move into the dedicated investor–startup matchmaking flow for structured ecosystem
            engagement.
          </p>

          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <RouterLink
              to="/matchmaking"
              class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:from-teal-700 hover:to-cyan-700"
            >
              Explore Matchmaking
            </RouterLink>

            <RouterLink
              to="/matchmaking/startup"
              class="inline-flex items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-teal-800"
            >
              Apply as Startup
            </RouterLink>

            <RouterLink
              to="/matchmaking/investor"
              class="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-emerald-700"
            >
              Join as Investor
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { newsletters } from '@/data/newsletters'

type ResourceItem = {
  title: string
  description: string
  type: string
  meta: string
  tag: string
}

type ResourceCategory = {
  key: string
  title: string
  subtitle: string
  description: string
  icon: string
  iconBgClass: string
  textClass: string
  hoverBorderClass: string
  badgeClass: string
  items: ResourceItem[]
}

type MatchmakingStep = {
  step: string
  title: string
  description: string
}

type Newsletter = {
  id: number
  slug: string
  title: string
  issue: string
  date: string
  description: string
  preview: string
  highlights: string[]
  coverGradient: string
  pdfUrl?: string
}

const showHeroImage = ref(true)

const resourceCategories: ResourceCategory[] = [
  {
    key: 'blogs',
    title: 'Blogs',
    subtitle: 'Perspectives, stories, and practical insights.',
    description:
      'Explore thought pieces, founder experiences, expert opinions, and ecosystem narratives that capture practical lessons and emerging trends.',
    icon: '✍️',
    iconBgClass: 'bg-blue-600',
    textClass: 'text-blue-600',
    hoverBorderClass: 'hover:border-blue-200',
    badgeClass: 'bg-blue-50 text-blue-700',
    items: [
      {
        title: 'What Makes Startup–Investor Fit Work?',
        description:
          'A practical perspective on alignment across stage, sector, funding ask, and long-term value creation.',
        type: 'Blog',
        meta: '6 min read',
        tag: 'Matchmaking',
      },
      {
        title: 'From Idea to Incubation: Early Founder Lessons',
        description:
          'Insights from startup journeys navigating the earliest phases of building and validation.',
        type: 'Blog',
        meta: '5 min read',
        tag: 'Founders',
      },
      {
        title: 'Industry Collaboration as a Driver for Innovation',
        description:
          'How research, advisory, and ecosystem partnerships help strengthen startup and institutional outcomes.',
        type: 'Blog',
        meta: '7 min read',
        tag: 'Industry',
      },
    ],
  },
  {
    key: 'papers',
    title: 'Research Papers',
    subtitle: 'Academic and applied research outputs.',
    description:
      'Browse papers, preprints, conference contributions, and translational research outputs relevant to deep-tech, innovation, and entrepreneurship.',
    icon: '📘',
    iconBgClass: 'bg-indigo-600',
    textClass: 'text-indigo-600',
    hoverBorderClass: 'hover:border-indigo-200',
    badgeClass: 'bg-indigo-50 text-indigo-700',
    items: [
      {
        title: 'Applied Innovation Models for Academic Ecosystems',
        description:
          'A research-oriented perspective on how institutional platforms can enable innovation and translation.',
        type: 'Paper',
        meta: 'Research',
        tag: 'Innovation Systems',
      },
      {
        title: 'Deep-Tech Incubation Pathways',
        description:
          'A study on enabling mechanisms, collaboration structures, and ecosystem support for deep-tech ventures.',
        type: 'Paper',
        meta: 'Conference',
        tag: 'Deep-Tech',
      },
      {
        title: 'Startup Support Frameworks in Emerging Ecosystems',
        description:
          'Comparative insights into ecosystem infrastructure, mentor networks, and capability building.',
        type: 'Paper',
        meta: 'Publication',
        tag: 'Startup Ecosystem',
      },
    ],
  },
  {
    key: 'reports',
    title: 'Industry Reports',
    subtitle: 'Trends, analysis, and opportunity mapping.',
    description:
      'Access reports focused on sectoral opportunities, innovation trends, startup landscapes, and strategic industry intelligence.',
    icon: '📊',
    iconBgClass: 'bg-cyan-600',
    textClass: 'text-cyan-600',
    hoverBorderClass: 'hover:border-cyan-200',
    badgeClass: 'bg-cyan-50 text-cyan-700',
    items: [
      {
        title: 'Deep-Tech Startup Landscape Report',
        description:
          'A sectoral overview of opportunity areas, challenges, and ecosystem readiness for deep-tech startups.',
        type: 'Report',
        meta: '2026',
        tag: 'Deep-Tech',
      },
      {
        title: 'Emerging Industry Collaboration Trends',
        description:
          'A synthesis of how industry partnerships are evolving in startup and innovation ecosystems.',
        type: 'Report',
        meta: 'Annual',
        tag: 'Industry Research',
      },
      {
        title: 'Innovation Opportunity Mapping for Startups',
        description:
          'An analysis of emerging sectors, high-potential domains, and strategic innovation opportunities.',
        type: 'Report',
        meta: 'Strategic',
        tag: 'Opportunity Mapping',
      },
    ],
  },
  {
    key: 'whitepapers',
    title: 'Whitepapers & Case Studies',
    subtitle: 'Structured insights and ecosystem learnings.',
    description:
      'Discover concept papers, strategic notes, startup case studies, and documented insights from innovation-led initiatives.',
    icon: '📄',
    iconBgClass: 'bg-emerald-600',
    textClass: 'text-emerald-600',
    hoverBorderClass: 'hover:border-emerald-200',
    badgeClass: 'bg-emerald-50 text-emerald-700',
    items: [
      {
        title: 'Investor–Startup Matchmaking Framework',
        description:
          'A concept note outlining a structured model for connecting startups and investors through fit-based curation.',
        type: 'Whitepaper',
        meta: 'Framework',
        tag: 'Matchmaking',
      },
      {
        title: 'Incubation Success Journey: Founder Case Study',
        description:
          'A documented case capturing startup progress, ecosystem interventions, and growth outcomes.',
        type: 'Case Study',
        meta: 'Startup Story',
        tag: 'Incubation',
      },
      {
        title: 'Building a Founder-First Ecosystem',
        description:
          'A strategic note on ecosystem design principles that support startup growth and long-term collaboration.',
        type: 'Whitepaper',
        meta: 'Strategy',
        tag: 'Ecosystem',
      },
    ],
  },
]

const matchmakingSteps: MatchmakingStep[] = [
  {
    step: '01',
    title: 'Profile Collection',
    description:
      'Capture startup and investor profiles including sector, stage, preferences, funding range, and strategic areas.',
  },
  {
    step: '02',
    title: 'Fit Assessment',
    description:
      'Identify relevant matches using structured criteria such as sector alignment, maturity, funding ask, and growth potential.',
  },
  {
    step: '03',
    title: 'Curated Introductions',
    description:
      'Facilitate meaningful introductions, meetings, and ecosystem touchpoints through a guided matchmaking process.',
  },
]
</script>