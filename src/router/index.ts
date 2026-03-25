import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
  NavigationFailureType,
  type RouteLocationRaw,
  type RouteRecordRaw,
  type Router,
} from 'vue-router'

export const ROUTE_NAMES = {
  HOME: 'home',
  ABOUT: 'about',
  BOARD: 'board',
  ADVISORY: 'advisory',
  INVESTORS: 'investors',
  TEAM: 'team',
  PARTNERS: 'partners',
  MENTORS: 'mentors',
  INCUBATION: 'incubation',
  ACCELERATION: 'acceleration',
  FUNDING: 'funding',
  MARKET_CONNECTS: 'market-connects',
  BUSINESS_SERVICES: 'business-services',
  CO_WORKING: 'co-working',
  EVENTS: 'events',
  STARTUPS: 'startups',
  APPLY: 'apply',
  CONTACT: 'contact',
  COMMUNITY_MEMBERSHIP_APPLY: 'community-membership-apply',
  PRE_INCUBATION: 'pre-incubation',
  COURSES: 'courses',
  ONLINE_MTECH: 'online-mtech',
  ONLINE_MTECH_APPLY: 'online-mtech-apply',
  IET: 'iet',
  IET_APPLY: 'iet-apply',
  FDP: 'fdp',
  FDP_APPLY: 'fdp-apply',
  THREE_DW: 'three-dw',
  THREE_DW_APPLY: 'three-dw-apply',
  INDUSTRY_RESEARCH: 'industry-research',
  PROTOTYPE_DEVELOPMENT: 'prototype-development',
  TECHNICAL_EDUCATION_ACADEMY: 'technical-education-academy',
  CONSULTING: 'consulting',
  RESOURCES: 'resources',
  MATCHMAKING: 'matchmaking',
  STARTUP_MATCHMAKING: 'startup-matchmaking',
  INVESTOR_MATCHMAKING: 'investor-matchmaking',
  CBDE: 'cbde',
  NAIN: 'nain',
  CIF: 'cif',
  COE_QUANTUM_AI: 'coe-quantum-ai',
  EVENT_DETAIL: 'event-detail',
  EVENT_REGISTER: 'event-register',
  NEWSLETTER_DETAIL: 'newsletter-detail',
} as const

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about-idrp',
    name: ROUTE_NAMES.ABOUT,
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About IDRP',
    },
  },

  // Organization
  {
    path: '/our-board',
    name: ROUTE_NAMES.BOARD,
    component: () => import('@/views/OurBoardView.vue'),
    meta: {
      title: 'Our Board',
    },
  },
  {
    path: '/advisory-board',
    name: ROUTE_NAMES.ADVISORY,
    component: () => import('@/views/AdvisoryBoardView.vue'),
    meta: {
      title: 'Advisory Board',
    },
  },
  {
    path: '/our-team',
    name: ROUTE_NAMES.TEAM,
    component: () => import('@/views/OurTeamView.vue'),
    meta: {
      title: 'Our Team',
    },
  },
  {
    path: '/our-partners',
    name: ROUTE_NAMES.PARTNERS,
    component: () => import('@/views/OurPartnersView.vue'),
    meta: {
      title: 'Our Partners',
    },
  },
  {
    path: '/mentors',
    name: ROUTE_NAMES.MENTORS,
    component: () => import('@/views/MentorsView.vue'),
    meta: {
      title: 'Mentors',
    },
  },
  {
    path: '/investment-committee',
    name: ROUTE_NAMES.INVESTORS,
    component: () => import('@/views/InvestmentCommitteeView.vue'),
    meta: {
      title: 'Investment Committee',
    },
  },

  // Programs
  {
    path: '/pre-incubation',
    name: ROUTE_NAMES.PRE_INCUBATION,
    component: () => import('@/views/PreIncubationView.vue'),
    meta: {
      title: 'Pre Incubation',
    },
  },
  {
    path: '/incubation',
    name: ROUTE_NAMES.INCUBATION,
    component: () => import('@/views/IncubationView.vue'),
    meta: {
      title: 'Incubation',
    },
  },
  {
    path: '/acceleration',
    name: ROUTE_NAMES.ACCELERATION,
    component: () => import('@/views/AccelerationView.vue'),
    meta: {
      title: 'Acceleration',
    },
  },
  {
    path: '/programs/nain',
    name: ROUTE_NAMES.NAIN,
    component: () => import('@/views/NainView.vue'),
    meta: {
      title: 'New Age Innovation Network',
    },
  },
  {
    path: '/programs/cif',
    name: ROUTE_NAMES.CIF,
    component: () => import('@/views/CifView.vue'),
    meta: {
      title: 'Common Instrumentation Facility',
    },
  },
  {
    path: '/programs/coe-quantum-ai',
    name: ROUTE_NAMES.COE_QUANTUM_AI,
    component: () => import('@/views/QuantumAIView.vue'),
    meta: {
      title: 'Centre of Excellence in Quantum AI and Computing',
    },
  },
  {
    path: '/programs/cbde',
    name: ROUTE_NAMES.CBDE,
    component: () => import('@/views/CbdeView.vue'),
    meta: {
      title: 'Capacity Building for Design and Entrepreneurship',
    },
  },
  {
    path: '/funding',
    name: ROUTE_NAMES.FUNDING,
    component: () => import('@/views/AccessFundingView.vue'),
    meta: {
      title: 'Access Funding',
    },
  },
  {
    path: '/courses/online-mtech',
    name: ROUTE_NAMES.ONLINE_MTECH,
    component: () => import('@/views/OnlineMTechView.vue'),
    meta: {
      title: 'Online M.Tech Program',
    },
  },
  {
    path: '/courses/online-mtech/apply',
    name: ROUTE_NAMES.ONLINE_MTECH_APPLY,
    component: () => import('@/views/OnlineMTechApplyView.vue'),
    meta: {
      title: 'Apply - Online M.Tech Program',
    },
  },

  {
    path: '/courses/iet',
    name: ROUTE_NAMES.IET,
    component: () => import('@/views/IETView.vue'),
    meta: {
      title: 'IET Program',
    },
  },
  {
    path: '/courses/iet/apply',
    name: ROUTE_NAMES.IET_APPLY,
    component: () => import('@/views/IETApplyView.vue'),
    meta: {
      title: 'Apply - IET Program',
    },
  },
  {
    path: '/courses/fdp',
    name: ROUTE_NAMES.FDP,
    component: () => import('@/views/FDPView.vue'),
    meta: {
      title: 'Faculty Development Program',
    },
  },
  {
    path: '/courses/fdp/apply',
    name: ROUTE_NAMES.FDP_APPLY,
    component: () => import('@/views/FDPApplyView.vue'),
    meta: {
      title: 'Apply - Faculty Development Program',
    },
  },
  {
    path: '/courses/3dw',
    name: ROUTE_NAMES.THREE_DW,
    component: () => import('@/views/ThreeDWView.vue'),
    meta: {
      title: '3DW Workshop',
    },
  },
  {
    path: '/courses/3dw/apply',
    name: ROUTE_NAMES.THREE_DW_APPLY,
    component: () => import('@/views/ThreeDWApplyView.vue'),
    meta: {
      title: 'Apply - 3DW Workshop',
    },
  },

  // Services
  {
    path: '/market-connects',
    name: ROUTE_NAMES.MARKET_CONNECTS,
    component: () => import('@/views/MarketConnectsView.vue'),
    meta: {
      title: 'Market Connects',
    },
  },
  {
    path: '/business-services',
    name: ROUTE_NAMES.BUSINESS_SERVICES,
    component: () => import('@/views/BusinessServicesView.vue'),
    meta: {
      title: 'Business Services',
    },
  },
  {
    path: '/matchmaking/startup',
    name: ROUTE_NAMES.STARTUP_MATCHMAKING,
    component: () => import('@/views/StartupMatchmakingFormView.vue'),
    meta: {
      title: 'Startup Matchmaking Form',
    },
  },
  {
    path: '/matchmaking/investor',
    name: ROUTE_NAMES.INVESTOR_MATCHMAKING,
    component: () => import('@/views/InvestorMatchmakingFormView.vue'),
    meta: {
      title: 'Investor Matchmaking Form',
    },
  },
  {
    path: '/co-working',
    name: ROUTE_NAMES.CO_WORKING,
    component: () => import('@/views/CoWorkingView.vue'),
    meta: {
      title: 'Co-Working',
    },
  },
  {
    path: '/industry-research',
    name: ROUTE_NAMES.INDUSTRY_RESEARCH,
    component: () => import('@/views/IndustryResearchView.vue'),
    meta: {
      title: 'Industry Research',
    },
  },
  {
    path: '/prototype-development',
    name: ROUTE_NAMES.PROTOTYPE_DEVELOPMENT,
    component: () => import('@/views/PrototypeDevelopmentView.vue'),
    meta: {
      title: 'Prototype Development',
    },
  },
  {
    path: '/technical-education-academy',
    name: ROUTE_NAMES.TECHNICAL_EDUCATION_ACADEMY,
    component: () => import('@/views/TechnicalEducationAcademyView.vue'),
    meta: {
      title: 'Technical Education Academy',
    },
  },
  {
    path: '/consulting',
    name: ROUTE_NAMES.CONSULTING,
    component: () => import('@/views/ConsultingView.vue'),
    meta: {
      title: 'Consulting',
    },
  },

  // Community
  {
    path: '/events',
    name: ROUTE_NAMES.EVENTS,
    component: () => import('@/views/EventsView.vue'),
    meta: {
      title: 'Events',
    },
  },
  {
    path: '/events/:id',
    name: ROUTE_NAMES.EVENT_DETAIL,
    component: () => import('@/views/EventDetailView.vue'),
    meta: {
      title: 'Event Detail',
    },
  },
  {
    path: '/events/:id/register',
    name: ROUTE_NAMES.EVENT_REGISTER,
    component: () => import('@/views/EventRegistrationView.vue'),
    meta: {
      title: 'Event Registration',
    },
  },
  {
    path: '/resources',
    name: ROUTE_NAMES.RESOURCES,
    component: () => import('@/views/ResourcesView.vue'),
    meta: {
      title: 'Resources',
    },
  },
  {
    path:'/resources/newsletters/:slug',
    name: ROUTE_NAMES.NEWSLETTER_DETAIL,
    component: () => import('@/views/NewsletterDetailView.vue'),
    meta: {
      title: 'Newsletter Detail',
    },
  },
  {
    path: '/startups',
    name: ROUTE_NAMES.STARTUPS,
    component: () => import('@/views/StartupsView.vue'),
    meta: {
      title: 'Startups',
    },
  },
  {
    path: '/matchmaking',
    name: ROUTE_NAMES.MATCHMAKING,
    component: () => import('@/views/MatchmakingView.vue'),
    meta: {
      title: 'Investor Startup Matchmaking',
    },
  },

  // Actions
  {
    path: '/apply/:program',
    name: ROUTE_NAMES.APPLY,
    component: () => import('@/views/ApplyView.vue'),
    props: (route) => ({
      program: String(route.params.program ?? ''),
    }),
    meta: {
      title: 'Apply',
    },
  },
  {
    path: '/contact',
    name: ROUTE_NAMES.CONTACT,
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact',
    },
  },
  {
    path: '/community-membership/apply',
    name: ROUTE_NAMES.COMMUNITY_MEMBERSHIP_APPLY,
    component: () => import('@/views/CommunityMembershipApplyView.vue'),
    meta: {
      title: 'Community Membership Application',
    },
  },

  // Redirects / fallback
  {
    path: '/careers',
    redirect: { name: ROUTE_NAMES.HOME },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: ROUTE_NAMES.HOME },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  const baseTitle = 'IDRP'
  const pageTitle =
    typeof to.meta.title === 'string' && to.meta.title.trim().length > 0
      ? `${to.meta.title} | ${baseTitle}`
      : baseTitle

  document.title = pageTitle
})

function enhanceRouterPush(routerInstance: Router) {
  const originalPush = routerInstance.push.bind(routerInstance)

  routerInstance.push = async function push(to: RouteLocationRaw) {
    try {
      return await originalPush(to)
    } catch (error) {
      if (isNavigationFailure(error, NavigationFailureType.duplicated)) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        return error
      }

      throw error
    }
  }
}

enhanceRouterPush(router)

export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import type { NavigationFailure } from 'vue-router'

// import HomeView             from '@/views/HomeView.vue'
// import AboutView            from '@/views/AboutView.vue'
// import OurBoardView         from '@/views/OurBoardView.vue'
// import OurTeamView          from '@/views/OurTeamView.vue'
// import OurPartnersView      from '@/views/OurPartnersView.vue'
// import MentorsView          from '@/views/MentorsView.vue'
// import IncubationView       from '@/views/IncubationView.vue'
// import AccelerationView     from '@/views/AccelerationView.vue'
// import AccessFundingView    from '@/views/AccessFundingView.vue'
// import MarketConnectsView   from '@/views/MarketConnectsView.vue'
// import BusinessServicesView from '@/views/BusinessServicesView.vue'
// import CoWorkingView        from '@/views/CoWorkingView.vue'
// import EventsView           from '@/views/EventsView.vue'
// import ApplyView from '@/views/ApplyView.vue'
// import ContactView from '@/views/ContactView.vue'
// import StartupsView         from '@/views/StartupsView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   scrollBehavior(_to, _from, savedPosition) {
//     if (savedPosition) return savedPosition
//     return { top: 0, behavior: 'smooth' }
//   },
//   routes: [
//     { path: '/',                   name: 'home',       component: HomeView },
//     { path: '/about-idrp',         name: 'about',      component: AboutView },
//     { path: '/our-board',          name: 'board',      component: OurBoardView },
//     { path: '/our-team',           name: 'team',       component: OurTeamView },
//     { path: '/our-partners',       name: 'partners',   component: OurPartnersView },
//     { path: '/mentors',            name: 'mentors',    component: MentorsView },
//     { path: '/incubation',         name: 'incubation', component: IncubationView },
//     { path: '/acceleration',       name: 'acceleration', component: AccelerationView },
//     { path: '/funding',            name: 'funding',    component: AccessFundingView },
//     { path: '/market-connects',    name: 'market',     component: MarketConnectsView },
//     { path: '/business-services',  name: 'business',   component: BusinessServicesView },
//     { path: '/co-working',         name: 'coworking',  component: CoWorkingView },
//     { path: '/events',             name: 'events',     component: EventsView },
//     { path: '/startups',           name: 'startups',   component: StartupsView },

//     { path: '/apply/:program', name: 'apply', component: ApplyView },
//     { path: '/contact', name: 'contact', component: ContactView },
//     { path: '/careers',  redirect: '/' },
//     { path: '/:pathMatch(.*)*', redirect: '/' },
//   ],
// })

// // Silently ignore duplicate navigation errors (same route clicked again)
// const originalPush = router.push.bind(router)
// router.push = async (location) => {
//   try {
//     return await originalPush(location)
//   } catch (err) {
//     const { isNavigationFailure, NavigationFailureType } = await import('vue-router')
//     if (isNavigationFailure(err as NavigationFailure, NavigationFailureType.duplicated)) {
//       // Same route — just scroll to top
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//       return err as NavigationFailure
//     }
//     throw err
//   }
// }

// export default router
