<template>
  <div class="mentors-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/mentors-hero.jfif"
        alt="Mentors"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Guidance & Support
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Mentors
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Mentor Network
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold text-gray-900">
          Experts who empower ideas, technology, and growth
        </h2>
        <p class="text-lg leading-relaxed text-gray-600">
          Our mentor network supports innovators, startups, and teams at different stages
          of their journey. From business strategy and market validation to technology
          development and academic guidance, our mentors help transform promising ideas
          into impactful outcomes.
        </p>
        <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
      </div>
    </section>

    <!-- Tabs -->
    <section class="bg-white px-6 pb-8 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-wrap items-center justify-center gap-4">
          <button
            v-for="tab in mentorTabs"
            :key="tab.key"
            type="button"
            @click="setTab(tab.key)"
            class="rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200"
            :class="
              activeTab === tab.key
                ? 'bg-teal-600 text-white shadow-lg'
                : 'border border-gray-200 bg-white text-gray-700 hover:border-teal-300 hover:text-teal-700'
            "
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Mentors Grid -->
    <section class="bg-white px-6 pb-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
            {{ activeCategoryTitle }}
          </span>
          <h3 class="mt-3 text-3xl font-bold text-gray-900">
            Meet our {{ activeCategoryTitle.toLowerCase() }}
          </h3>
        </div>

        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          <article
            v-for="mentor in activeMentors"
            :key="mentor.name"
            class="group flex flex-col items-center text-center"
          >
            <div
              class="mb-5 h-60 w-60 overflow-hidden rounded-full shadow-lg ring-4 ring-gray-100 transition-all duration-300 group-hover:ring-teal-300"
            >
              <img
                v-if="mentor.visible"
                :src="mentor.image"
                :alt="mentor.name"
                class="h-full w-full object-cover object-top"
                @error="mentor.visible = false"
              />
              <div
                v-else
                class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 text-5xl"
              >
                👤
              </div>
            </div>

            <h3 class="text-lg font-bold text-gray-900">{{ mentor.name }}</h3>
            <p class="mt-1 text-sm font-semibold text-teal-600">
              {{ mentor.role }}
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
          <h3 class="text-2xl font-bold text-white">
            Looking to connect with the IDRP ecosystem?
          </h3>
          <p class="mt-2 text-teal-100">
            Explore our programs, boards, and mentoring support.
          </p>
        </div>

        <div class="flex shrink-0 gap-4">
          <RouterLink
            to="/about-idrp"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
          >
            About IDRP
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
import { computed, reactive, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

type MentorTabKey = 'business' | 'technology' | 'faculty'

type Mentor = {
  name: string
  role: string
  image: string
  visible: boolean
}

const route = useRoute()
const router = useRouter()
const showHeroImage = ref(true)

const mentorTabs: { key: MentorTabKey; label: string }[] = [
  { key: 'business', label: 'Business Mentors' },
  { key: 'technology', label: 'Technology Mentors' },
  { key: 'faculty', label: 'Faculty Mentors' },
]

function getValidTab(tab: unknown): MentorTabKey {
  if (tab === 'technology' || tab === 'faculty' || tab === 'business') {
    return tab
  }
  return 'business'
}

const activeTab = ref<MentorTabKey>(getValidTab(route.query.tab))

watch(
  () => route.query.tab,
  (newTab) => {
    activeTab.value = getValidTab(newTab)
  }
)

function setTab(tab: MentorTabKey) {
  activeTab.value = tab
  router.replace({
    path: '/mentors',
    query: { tab },
  })
}

const businessMentors = reactive<Mentor[]>([
  {
    name: 'Kathik Sankaran',
    role: 'Business Mentor',
    image: '/advisory-karthik.jfif',
    visible: true,
  },
  {
    name: 'Ram Subramanian',
    role: 'Business Mentor',
    image: '/advisory-ram.jfif',
    visible: true,
  },
  {
    name: 'Mallikarjun Kande',
    role: 'Business Mentor',
    image: '/business-mallikarjun.jfif',
    visible: true,
  },
  {
    name: 'Shashidar Shettar',
    role: 'Business Mentor',
    image: '/business-shashidar.jfif',
    visible: true,
  },
  {
    name: 'Santosh Devanallikar',
    role: 'Business Mentor',
    image: '/business-santosh.jfif',
    visible: true,
  },
  {
    name: 'Ravi Kumar',
    role: 'Business Mentor',
    image: '/business-ravi.jfif',
    visible: true,
  },
    {
    name: 'RK Patil',
    role: 'Business Mentor',
    image: '/business-rk.jfif',
    visible: true,
  },
    {
    name: 'Sasikumar Sundarajan',
    role: 'Business Mentor',
    image: '/business-sasikumar.jfif',
    visible: true,
  },
    {
    name: 'Ambarish Kulkarni',
    role: 'Business Mentor',
    image: '/business-ambarish.jfif',
    visible: true,
  },
    {
    name: 'Anand Bariya',
    role: 'Business Mentor',
    image: '/business-anand.jfif',
    visible: true,
  },
    {
    name: 'Shubash Marihal',
    role: 'Business Mentor',
    image: '/business-shubash.jfif',
    visible: true,
  },
    {
    name: 'Jit Goel',
    role: 'Business Mentor',
    image: '/business-jit.jfif',
    visible: true,
  },
])

const technologyMentors = reactive<Mentor[]>([
  {
    name: 'Mallikarjun Kande',
    role: 'Technology Mentor',
    image: '/business-mallikarjun.jfif',
    visible: true,
  },
  {
    name: 'Santosh Devanallikar',
    role: 'Technology Mentor',
    image: '/technology-santosh.jfif',
    visible: true,
  },
  {
    name: 'Ravi Kumar',
    role: 'Technology Mentor',
    image: '/technology-ravi.jfif',
    visible: true,
  },
  {
    name: 'RK Patil',
    role: 'Technology Mentor',
    image: '/technology-rk.jfif',
    visible: true,
  },
  {
    name: 'Preetham Umarani',
    role: 'Technology Mentor',
    image: '/technology-preetham.jfif',
    visible: true,
  }
])

const facultyMentors = reactive<Mentor[]>([
  {
    name: 'Dr. Jagadish DN',
    role: 'Faculty Mentor',
    image: '/faculty-jagadish.jfif',
    visible: true,
  },
  {
    name: 'Dr. Aswath Babu',
    role: 'Faculty Mentor',
    image: '/faculty-aswath.jfif',
    visible: true,
  },
  {
    name: 'Dr. Manjunath Vanahalli',
    role: 'Faculty Mentor',
    image: '/faculty-manjunath.jfif',
    visible: true,
  },
  {
    name: 'Dr. Anushree Kini',
    role: 'Faculty Mentor',
    image: '/faculty-anushree.jfif',
    visible: true,
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Faculty Mentor',
    image: '/faculty-rajesh.jfif',
    visible: true,
  },
  {
    name: 'Dr. Abdul Wahid',
    role: 'Faculty Mentor',
    image: '/faculty-abdul.jfif',
    visible: true,
  },
    {
    name: 'Dr. Girish G N',
    role: 'Faculty Mentor',
    image: '/faculty-girish.jfif',
    visible: true,
  },
  {
    name: 'Dr. Sunil C K',
    role: 'Faculty Mentor',
    image: '/faculty-sunil.jfif',
    visible: true,
  },
  {
    name: 'Dr. Sunil Saumya',
    role: 'Faculty Mentor',
    image: '/faculty-sunil.jfif',
    visible: true,
  },
  {
    name: 'Dr. Malay Kumar',
    role: 'Faculty Mentor',
    image: '/faculty-malay.jfif',
    visible: true,
  },
  {
    name: 'Dr. Pavan Kumar C',
    role: 'Faculty Mentor',
    image: '/faculty-pavan.jfif',
    visible: true,
  },
  {
    name: 'Dr. Sandesh Phalke',
    role: 'Faculty Mentor',
    image: '/faculty-sandesh.jfif',
    visible: true,
  },
  {
    name: 'Dr. Chinmayananda A',
    role: 'Faculty Mentor',
    image: '/faculty-chinmayananda.jfif',
    visible: true,
  },
    {
    name: 'Dr. Krishnendu Ghosh',
    role: 'Faculty Mentor',
    image: '/faculty-krishnendu.jfif',
    visible: true,
  },
    {
    name: 'Dr. Pankaj Kumar',
    role: 'Faculty Mentor',
    image: '/faculty-pankaj.jfif',
    visible: true,
  },
    {
    name: 'Dr. Prabhu Prasad',
    role: 'Faculty Mentor',
    image: '/faculty-prabhu.jfif',
    visible: true,
  },
    {
    name: 'Dr. Prakash Pawar',
    role: 'Faculty Mentor',
    image: '/faculty-prakash.jfif',
    visible: true,
  },
    {
    name: 'Dr. Nataraj K S',
    role: 'Faculty Mentor',
    image: '/faculty-nataraj.jfif',
    visible: true,
  },
    {
    name: 'Dr. Shirshendu Layek',
    role: 'Faculty Mentor',
    image: '/faculty-shirshendu.jfif',
    visible: true,
  },
    {
    name: 'Dr. Siddharth R',
    role: 'Faculty Mentor',
    image: '/faculty-siddharth.jfif',
    visible: true,
  },
    {
    name: 'Dr. Sunil Kumar P V',
    role: 'Faculty Mentor',
    image: '/faculty-sunil.jfif',
    visible: true,
  },
    {
    name: 'Dr. Suvadip Hazra',
    role: 'Faculty Mentor',
    image: '/faculty-suvadip.jfif',
    visible: true,
  },
      {
    name: 'Dr. Vivekraj V K',
    role: 'Faculty Mentor',
    image: '/faculty-vivekraj.jfif',
    visible: true,
  },
    {
    name: 'Dr. Sibasankar Padhy',
    role: 'Faculty Mentor',
    image: '/faculty-sibasankar.jfif',
    visible: true,
  },
])

const activeMentors = computed(() => {
  if (activeTab.value === 'technology') return technologyMentors
  if (activeTab.value === 'faculty') return facultyMentors
  return businessMentors
})

const activeCategoryTitle = computed(() => {
  if (activeTab.value === 'technology') return 'Technology Mentors'
  if (activeTab.value === 'faculty') return 'Faculty Mentors'
  return 'Business Mentors'
})
</script>