<template>
  <!-- Navbar -->
  <nav class="flex justify-between items-center px-10 py-4 shadow bg-white relative z-50">
    <router-link to="/" class="flex items-center space-x-2">
      <img :src="'/iiitd.webp'" alt="IDRP Logo" class="h-8 w-8" />
      <span class="text-lg font-bold text-teal-700">IIIT Dharwad Research Park</span>
    </router-link>

    <div class="space-x-6 hidden md:flex items-center">

      <!-- About Dropdown -->
      <div class="relative" @mouseenter="openDropdown('about')" @mouseleave="closeDropdown('about')">
        <a class="cursor-pointer flex items-center gap-1 hover:text-teal-700 transition-colors py-2">
          About
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': aboutOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div v-show="aboutOpen" class="absolute top-full left-0 w-44 z-50">
          <div class="bg-white rounded-lg shadow-lg border border-gray-100 py-1 mt-1">
            <a @click="navigate('/about-idrp')"   class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">IDRP</a>
            <a @click="navigate('/our-board')"    class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Our Board</a>
            <a @click="navigate('/our-team')"     class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Our Team</a>
            <a @click="navigate('/our-partners')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Our Partners</a>
            <a @click="navigate('/mentors')"      class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Mentors</a>
          </div>
        </div>
      </div>

      <!-- Programs Dropdown -->
      <div class="relative" @mouseenter="openDropdown('programs')" @mouseleave="closeDropdown('programs')">
        <a class="cursor-pointer flex items-center gap-1 hover:text-teal-700 transition-colors py-2">
          Programs
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': programsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div v-show="programsOpen" class="absolute top-full left-0 w-44 z-50">
          <div class="bg-white rounded-lg shadow-lg border border-gray-100 py-1 mt-1">
            <a @click="navigate('/incubation')"   class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Incubation</a>
            <a @click="navigate('/acceleration')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Acceleration</a>
          </div>
        </div>
      </div>

      <!-- Services Dropdown -->
      <div class="relative" @mouseenter="openDropdown('services')" @mouseleave="closeDropdown('services')">
        <a class="cursor-pointer flex items-center gap-1 hover:text-teal-700 transition-colors py-2">
          Services
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': servicesOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div v-show="servicesOpen" class="absolute top-full left-0 w-52 z-50">
          <div class="bg-white rounded-lg shadow-lg border border-gray-100 py-1 mt-1">
            <a @click="navigate('/funding')"           class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Access to Funding</a>
            <a @click="navigate('/market-connects')"   class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Market Connects</a>
            <a @click="navigate('/business-services')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Business Services</a>
            <a @click="navigate('/co-working')"        class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer">Co-Working</a>
          </div>
        </div>
      </div>

      <router-link to="/events"   class="cursor-pointer hover:text-teal-700 transition-colors" active-class="text-teal-700 font-semibold">Events</router-link>
      <router-link to="/startups" class="cursor-pointer hover:text-teal-700 transition-colors" active-class="text-teal-700 font-semibold">Startups</router-link>
    </div>

    <router-link to="/contact" class="border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white transition-colors px-5 py-2 rounded-full font-medium hidden md:inline-flex">
      Contact Us
    </router-link>

    <!-- Hamburger -->
    <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
      <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>

  <!-- Mobile Drawer -->
  <Transition name="slide-down">
    <div v-show="mobileOpen" class="md:hidden fixed top-[64px] left-0 right-0 bg-white z-40 shadow-xl border-t border-gray-100 max-h-[85vh] overflow-y-auto">
      <div class="px-6 py-4 flex flex-col gap-1">
        <div>
          <button @click="mobileAbout = !mobileAbout" class="w-full flex items-center justify-between py-3 text-gray-800 font-medium hover:text-teal-700 transition-colors">
            About
            <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': mobileAbout }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="mobileAbout" class="pl-4 pb-2 flex flex-col gap-1">
            <router-link @click="mobileOpen=false" to="/about-idrp"    class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">IDRP</router-link>
            <router-link @click="mobileOpen=false" to="/our-board"     class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Our Board</router-link>
            <router-link @click="mobileOpen=false" to="/our-team"      class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Our Team</router-link>
            <router-link @click="mobileOpen=false" to="/our-partners"  class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Our Partners</router-link>
            <router-link @click="mobileOpen=false" to="/mentors"       class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Mentors</router-link>
          </div>
        </div>
        <div>
          <button @click="mobilePrograms = !mobilePrograms" class="w-full flex items-center justify-between py-3 text-gray-800 font-medium hover:text-teal-700 transition-colors">
            Programs
            <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': mobilePrograms }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="mobilePrograms" class="pl-4 pb-2 flex flex-col gap-1">
            <router-link @click="mobileOpen=false" to="/incubation"   class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Incubation</router-link>
            <router-link @click="mobileOpen=false" to="/acceleration" class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Acceleration</router-link>
          </div>
        </div>
        <div>
          <button @click="mobileServices = !mobileServices" class="w-full flex items-center justify-between py-3 text-gray-800 font-medium hover:text-teal-700 transition-colors">
            Services
            <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': mobileServices }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="mobileServices" class="pl-4 pb-2 flex flex-col gap-1">
            <router-link @click="mobileOpen=false" to="/funding"           class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Access to Funding</router-link>
            <router-link @click="mobileOpen=false" to="/market-connects"   class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Market Connects</router-link>
            <router-link @click="mobileOpen=false" to="/business-services" class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Business Services</router-link>
            <router-link @click="mobileOpen=false" to="/co-working"        class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Co-Working</router-link>
          </div>
        </div>
        <div class="border-t border-gray-100 pt-1">
          <router-link @click="mobileOpen=false" to="/events"   class="block py-3 text-gray-800 font-medium hover:text-teal-700 transition-colors">Events</router-link>
          <router-link @click="mobileOpen=false" to="/startups" class="block py-3 text-gray-800 font-medium hover:text-teal-700 transition-colors">Startups</router-link>
        </div>
        <div class="pt-2 pb-4">
          <router-link @click="mobileOpen=false" to="/contact" class="block w-full text-center bg-teal-700 text-white font-semibold py-3 rounded-xl hover:bg-teal-800 transition-colors">
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Page content slot -->
  <slot />

  <!-- Scroll to Top -->
  <Transition name="fade">
    <button v-show="showScrollTop" @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 bg-teal-700 hover:bg-teal-800 text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
      aria-label="Scroll to top">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>

  <!-- Footer -->
  <footer class="bg-gray-950 text-gray-300">
    <div class="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

      <div class="lg:col-span-2 flex flex-col gap-5">
        <router-link to="/" class="flex items-center gap-2.5 w-fit">
          <img :src="'/iiitd.webp'" alt="IDRP" class="h-9 w-9" />
          <div>
            <p class="text-white font-bold text-sm leading-tight">IIIT Dharwad</p>
            <p class="text-teal-400 text-xs font-semibold tracking-wide">Research Park</p>
          </div>
        </router-link>
        <p class="text-sm text-gray-400 leading-relaxed max-w-xs">Nurturing deep-tech innovations that address India's most complex technological and societal challenges.</p>
        <div class="flex items-start gap-2.5 text-sm">
          <svg class="w-4 h-4 text-teal-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <div>
            <p class="text-gray-300 font-medium">Pi Block, IIIT Dharwad</p>
            <a href="https://www.google.com/maps/place/IIIT+Dharwad+Research+Park+(IDRP)/@15.3925499,75.0236567,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb8d30008aeeadb:0x8a69d94bb8a9e11e!8m2!3d15.3925499!4d75.0262316!16s%2Fg%2F11w8gt2mw6?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" rel="noopener" class="text-gray-400 hover:text-teal-400 transition-colors text-xs mt-0.5 inline-block">
              92VG+2F9, IIIT Circle Rd, Dharwad, Karnataka 580009 ↗
            </a>
          </div>
        </div>
        <div class="flex items-center gap-2.5 text-sm">
          <svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <a href="tel:+910000000000" class="text-gray-400 hover:text-teal-400 transition-colors">+91 00000 00000</a>
        </div>
        <div class="flex items-center gap-2.5 text-sm">
          <svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a href="mailto:contact@idrp.in" class="text-gray-400 hover:text-teal-400 transition-colors">contact@idrp.in</a>
        </div>
        <div class="flex items-center gap-3 mt-1">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener"
            class="w-9 h-9 rounded-xl bg-white/5 hover:bg-teal-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            :aria-label="social.name">
            <span v-html="social.icon"></span>
          </a>
        </div>
      </div>

      <div>
        <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">About</h4>
        <ul class="space-y-3">
          <li v-for="link in footerAbout" :key="link.label">
            <router-link :to="link.to" class="text-sm text-gray-400 hover:text-teal-400 transition-colors">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Programs & Services</h4>
        <ul class="space-y-3">
          <li v-for="link in footerPrograms" :key="link.label">
            <router-link :to="link.to" class="text-sm text-gray-400 hover:text-teal-400 transition-colors">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Information</h4>
        <ul class="space-y-3">
          <li v-for="link in footerInfo" :key="link.label">
            <router-link :to="link.to" class="text-sm text-gray-400 hover:text-teal-400 transition-colors">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

    </div>
    <div class="max-w-7xl mx-auto px-6 md:px-16">
      <div class="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-xs text-gray-500">© {{ new Date().getFullYear() }} IIIT Dharwad Research Park. All rights reserved.</p>
        <div class="flex gap-5 text-xs text-gray-500">
          <span class="hover:text-teal-400 transition-colors cursor-default">Privacy Policy</span>
          <span class="hover:text-teal-400 transition-colors cursor-default">Terms of Use</span>
          <router-link to="/contact" class="hover:text-teal-400 transition-colors">Contact Us</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function openDropdown(name) {
  clearTimeout(closeTimer)
  if (name === 'about')    aboutOpen.value    = true
  if (name === 'programs') programsOpen.value = true
  if (name === 'services') servicesOpen.value = true
}

function closeDropdown(name) {
  closeTimer = setTimeout(function() {
    if (name === 'about')    aboutOpen.value    = false
    if (name === 'programs') programsOpen.value = false
    if (name === 'services') servicesOpen.value = false
  }, 150)
}


function navigate(path) {
  aboutOpen.value    = false
  programsOpen.value = false
  servicesOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
  router.push(path).catch(function() {})
}

// Nav state
const aboutOpen    = ref(false)
const programsOpen = ref(false)
const servicesOpen = ref(false)
const mobileOpen   = ref(false)
const mobileAbout    = ref(false)
const mobilePrograms = ref(false)
const mobileServices = ref(false)
let closeTimer = null

// Scroll to top
const showScrollTop = ref(false)
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
function handleScroll() { showScrollTop.value = window.scrollY > 400 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// Footer data
const footerAbout = [
  { label: 'About IDRP',   to: '/about-idrp' },
  { label: 'Our Board',    to: '/our-board' },
  { label: 'Our Team',     to: '/our-team' },
  { label: 'Our Partners', to: '/our-partners' },
  { label: 'Mentors',      to: '/mentors' },
  { label: 'Careers',      to: '/careers' },
  { label: 'Events',       to: '/events' },
  { label: 'Startups',     to: '/startups' },
]
const footerPrograms = [
  { label: 'Resident Incubation',   to: '/incubation' },
  { label: 'Virtual Incubation',    to: '/incubation' },
  { label: 'Deep-Tech Accelerator', to: '/acceleration' },
  { label: 'Access to Funding',     to: '/funding' },
  { label: 'Market Connects',       to: '/market-connects' },
  { label: 'Business Services',     to: '/business-services' },
  { label: 'Co-Working',            to: '/co-working' },
  { label: 'Startup School',        to: '/startup-school' },
]
const footerInfo = [
  { label: 'Contact Us',     to: '/contact' },
  { label: 'FAQ',            to: '/faq' },
  { label: 'Help Center',    to: '/help' },
  { label: 'Apply Now',      to: '/apply/resident-incubation' },
  { label: 'News & Updates', to: '/news' },
  { label: 'Gallery',        to: '/gallery' },
  { label: 'Annual Reports', to: '/reports' },
  { label: 'Grievance',      to: '/grievance' },
]
const socials = [
  { name: 'LinkedIn',   url: 'https://linkedin.com',  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
  { name: 'Twitter / X', url: 'https://twitter.com', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
  { name: 'Instagram',  url: 'https://instagram.com', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>` },
  { name: 'YouTube',    url: 'https://youtube.com',  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>` },
  { name: 'Facebook',   url: 'https://facebook.com', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-down-enter-active { transition: all 0.3s ease; }
.slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-8px); }
</style>