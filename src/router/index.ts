import { createRouter, createWebHistory } from 'vue-router'
import type { NavigationFailure } from 'vue-router'

import HomeView             from '@/views/HomeView.vue'
import AboutView            from '@/views/AboutView.vue'
import OurBoardView         from '@/views/OurBoardView.vue'
import OurTeamView          from '@/views/OurTeamView.vue'
import OurPartnersView      from '@/views/OurPartnersView.vue'
import MentorsView          from '@/views/MentorsView.vue'
import IncubationView       from '@/views/IncubationView.vue'
import AccelerationView     from '@/views/AccelerationView.vue'
import AccessFundingView    from '@/views/AccessFundingView.vue'
import MarketConnectsView   from '@/views/MarketConnectsView.vue'
import BusinessServicesView from '@/views/BusinessServicesView.vue'
import CoWorkingView        from '@/views/CoWorkingView.vue'
import EventsView           from '@/views/EventsView.vue'
import ApplyView from '@/views/ApplyView.vue'
import ContactView from '@/views/ContactView.vue'
import StartupsView         from '@/views/StartupsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/',                   name: 'home',       component: HomeView },
    { path: '/about-idrp',         name: 'about',      component: AboutView },
    { path: '/our-board',          name: 'board',      component: OurBoardView },
    { path: '/our-team',           name: 'team',       component: OurTeamView },
    { path: '/our-partners',       name: 'partners',   component: OurPartnersView },
    { path: '/mentors',            name: 'mentors',    component: MentorsView },
    { path: '/incubation',         name: 'incubation', component: IncubationView },
    { path: '/acceleration',       name: 'acceleration', component: AccelerationView },
    { path: '/funding',            name: 'funding',    component: AccessFundingView },
    { path: '/market-connects',    name: 'market',     component: MarketConnectsView },
    { path: '/business-services',  name: 'business',   component: BusinessServicesView },
    { path: '/co-working',         name: 'coworking',  component: CoWorkingView },
    { path: '/events',             name: 'events',     component: EventsView },
    { path: '/startups',           name: 'startups',   component: StartupsView },

    { path: '/apply/:program', name: 'apply', component: ApplyView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/careers',  redirect: '/' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

// Silently ignore duplicate navigation errors (same route clicked again)
const originalPush = router.push.bind(router)
router.push = async (location) => {
  try {
    return await originalPush(location)
  } catch (err) {
    const { isNavigationFailure, NavigationFailureType } = await import('vue-router')
    if (isNavigationFailure(err as NavigationFailure, NavigationFailureType.duplicated)) {
      // Same route — just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return err as NavigationFailure
    }
    throw err
  }
}

export default router