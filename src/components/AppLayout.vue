<template>
  <div class="app-layout">
    <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
      <div class="container header-inner">
        <RouterLink to="/" class="brand" @click="closeAllMenus">
          <img src="/idrp.jfif" alt="IDRP" class="brand-logo" />
          <div class="brand-text">
            <span class="brand-title">IDRP</span>
            <span class="brand-subtitle">Ignite • Incubate • Innovate</span>
          </div>
        </RouterLink>

        <nav class="desktop-nav">
          <div
            class="nav-group"
            @mouseenter="openDropdown('about')"
            @mouseleave="scheduleDropdownClose"
          >
            <button
              type="button"
              class="nav-link nav-button"
              :class="{ 'nav-link--active': isSectionActive(aboutLinks) }"
              @click="toggleDropdown('about')"
            >
              About
              <span class="chevron" :class="{ 'chevron--open': activeDropdown === 'about' }">
                ▾
              </span>
            </button>

            <transition name="fade-slide">
              <div
                v-if="activeDropdown === 'about'"
                class="dropdown-menu"
                @mouseenter="cancelDropdownClose"
                @mouseleave="scheduleDropdownClose"
              >
                <template v-for="item in aboutLinks" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="dropdown-link"
                    :class="{ 'dropdown-link--active': isExactNavMatch(item.to) }"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else class="dropdown-group has-children">
                    <div class="dropdown-link dropdown-link--parent">
                      <span>{{ item.label }}</span>
                      <span class="submenu-arrow">›</span>
                    </div>

                    <div class="submenu">
                      <RouterLink
                        v-for="child in item.children"
                        :key="child.to"
                        :to="child.to!"
                        class="dropdown-link"
                        :class="{ 'dropdown-link--active': isExactNavMatch(child.to!) }"
                        @click="closeAllMenus"
                      >
                        {{ child.label }}
                      </RouterLink>
                    </div>
                  </div>
                </template>
              </div>
            </transition>
          </div>

          <div
            class="nav-group"
            @mouseenter="openDropdown('programs')"
            @mouseleave="scheduleDropdownClose"
          >
            <button
              type="button"
              class="nav-link nav-button"
              :class="{ 'nav-link--active': isSectionActive(programLinks) }"
              @click="toggleDropdown('programs')"
            >
              Programs
              <span class="chevron" :class="{ 'chevron--open': activeDropdown === 'programs' }">
                ▾
              </span>
            </button>

            <transition name="fade-slide">
              <div
                v-if="activeDropdown === 'programs'"
                class="dropdown-menu"
                @mouseenter="cancelDropdownClose"
                @mouseleave="scheduleDropdownClose"
              >
                <template v-for="item in programLinks" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="dropdown-link"
                    :class="{ 'dropdown-link--active': isExactNavMatch(item.to) }"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else class="dropdown-group has-children">
                    <div class="dropdown-link dropdown-link--parent">
                      <span>{{ item.label }}</span>
                      <span class="submenu-arrow">›</span>
                    </div>

                    <div class="submenu">
                      <RouterLink
                        v-for="child in item.children"
                        :key="child.to"
                        :to="child.to!"
                        class="dropdown-link"
                        :class="{ 'dropdown-link--active': isExactNavMatch(child.to!) }"
                        @click="closeAllMenus"
                      >
                        {{ child.label }}
                      </RouterLink>
                    </div>
                  </div>
                </template>
              </div>
            </transition>
          </div>

          <div
            class="nav-group"
            @mouseenter="openDropdown('community')"
            @mouseleave="scheduleDropdownClose"
          >
            <button
              type="button"
              class="nav-link nav-button"
              :class="{ 'nav-link--active': isSectionActive(communityLinks) }"
              @click="toggleDropdown('community')"
            >
              Community
              <span class="chevron" :class="{ 'chevron--open': activeDropdown === 'community' }">
                ▾
              </span>
            </button>

            <transition name="fade-slide">
              <div
                v-if="activeDropdown === 'community'"
                class="dropdown-menu"
                @mouseenter="cancelDropdownClose"
                @mouseleave="scheduleDropdownClose"
              >
                <template v-for="item in communityLinks" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="dropdown-link"
                    :class="{ 'dropdown-link--active': isExactNavMatch(item.to) }"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else class="dropdown-group has-children">
                    <div class="dropdown-link dropdown-link--parent">
                      <span>{{ item.label }}</span>
                      <span class="submenu-arrow">›</span>
                    </div>

                    <div class="submenu">
                      <RouterLink
                        v-for="child in item.children"
                        :key="child.to"
                        :to="child.to!"
                        class="dropdown-link"
                        :class="{ 'dropdown-link--active': isExactNavMatch(child.to!) }"
                        @click="closeAllMenus"
                      >
                        {{ child.label }}
                      </RouterLink>
                    </div>
                  </div>
                </template>
              </div>
            </transition>
          </div>

          <RouterLink
            to="/startups"
            class="nav-link"
            :class="{ 'nav-link--active': isExactNavMatch('/startups') }"
          >
            Startups
          </RouterLink>

          <RouterLink
            to="/contact"
            class="nav-link nav-link--cta"
            :class="{ 'nav-link--active': isExactNavMatch('/contact') }"
          >
            Contact
          </RouterLink>
        </nav>

        <button
          type="button"
          class="mobile-toggle"
          :aria-expanded="String(isMobileMenuOpen)"
          aria-label="Toggle navigation menu"
          @click="toggleMobileMenu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="mobile-nav">
          <div class="container mobile-nav-inner">
            <div class="mobile-section">
              <button
                type="button"
                class="mobile-section-trigger"
                :class="{ 'mobile-section-trigger--active': isSectionActive(aboutLinks) }"
                @click="toggleMobileSection('about')"
              >
                <span>About</span>
                <span>{{ mobileSections.about ? '−' : '+' }}</span>
              </button>

              <div v-if="mobileSections.about" class="mobile-submenu">
                <template v-for="item in aboutLinks" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="mobile-sublink"
                    :class="{ 'mobile-sublink--active': isExactNavMatch(item.to) }"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else class="mobile-subgroup">
                    <div class="mobile-sublink mobile-sublink--parent">
                      {{ item.label }}
                    </div>

                    <RouterLink
                      v-for="child in item.children"
                      :key="child.to"
                      :to="child.to!"
                      class="mobile-sublink mobile-sublink--child"
                      :class="{ 'mobile-sublink--active': isExactNavMatch(child.to!) }"
                      @click="closeAllMenus"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </div>
                </template>
              </div>
            </div>

            <div class="mobile-section">
              <button
                type="button"
                class="mobile-section-trigger"
                :class="{ 'mobile-section-trigger--active': isSectionActive(programLinks) }"
                @click="toggleMobileSection('programs')"
              >
                <span>Programs</span>
                <span>{{ mobileSections.programs ? '−' : '+' }}</span>
              </button>

              <div v-if="mobileSections.programs" class="mobile-submenu">
                <template v-for="item in programLinks" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="mobile-sublink"
                    :class="{ 'mobile-sublink--active': isExactNavMatch(item.to) }"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else class="mobile-subgroup">
                    <div class="mobile-sublink mobile-sublink--parent">
                      {{ item.label }}
                    </div>

                    <RouterLink
                      v-for="child in item.children"
                      :key="child.to"
                      :to="child.to!"
                      class="mobile-sublink mobile-sublink--child"
                      :class="{ 'mobile-sublink--active': isExactNavMatch(child.to!) }"
                      @click="closeAllMenus"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </div>
                </template>
              </div>
            </div>

            <div class="mobile-section">
              <button
                type="button"
                class="mobile-section-trigger"
                :class="{ 'mobile-section-trigger--active': isSectionActive(communityLinks) }"
                @click="toggleMobileSection('community')"
              >
                <span>Community</span>
                <span>{{ mobileSections.community ? '−' : '+' }}</span>
              </button>

              <div v-if="mobileSections.community" class="mobile-submenu">
                <template v-for="item in communityLinks" :key="item.label">
                  <RouterLink
                    v-if="item.to"
                    :to="item.to"
                    class="mobile-sublink"
                    :class="{ 'mobile-sublink--active': isExactNavMatch(item.to) }"
                    @click="closeAllMenus"
                  >
                    {{ item.label }}
                  </RouterLink>

                  <div v-else class="mobile-subgroup">
                    <div class="mobile-sublink mobile-sublink--parent">
                      {{ item.label }}
                    </div>

                    <RouterLink
                      v-for="child in item.children"
                      :key="child.to"
                      :to="child.to!"
                      class="mobile-sublink mobile-sublink--child"
                      :class="{ 'mobile-sublink--active': isExactNavMatch(child.to!) }"
                      @click="closeAllMenus"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </div>
                </template>
              </div>
            </div>

            <RouterLink
              to="/startups"
              class="mobile-link"
              :class="{ 'mobile-link--active': isExactNavMatch('/startups') }"
              @click="closeAllMenus"
            >
              Startups
            </RouterLink>

            <RouterLink
              to="/contact"
              class="mobile-link mobile-link--cta"
              :class="{ 'mobile-link--active': isExactNavMatch('/contact') }"
              @click="closeAllMenus"
            >
              Contact
            </RouterLink>
          </div>
        </div>
      </transition>
    </header>

    <main class="page-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <section class="footer-brand">
          <img src="/idrp.jfif" alt="IDRP" class="footer-logo" />
          <h3>IDRP</h3>
          <p>
            Supporting innovation, incubation, acceleration, and ecosystem development through a
            strong startup and research platform.
          </p>
        </section>

        <section>
          <h4 class="footer-title">About</h4>
          <nav class="footer-links">
            <template v-for="item in aboutLinks" :key="item.label">
              <RouterLink
                v-if="item.to"
                :to="item.to"
                class="footer-link"
                :class="{ 'footer-link--active': isExactNavMatch(item.to) }"
              >
                {{ item.label }}
              </RouterLink>

              <template v-else>
                <span class="footer-link footer-link--heading">{{ item.label }}</span>
                <RouterLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to!"
                  class="footer-link footer-link--child"
                  :class="{ 'footer-link--active': isExactNavMatch(child.to!) }"
                >
                  {{ child.label }}
                </RouterLink>
              </template>
            </template>

            <span class="footer-link footer-link--heading">Community</span>
            <RouterLink to="/events" class="footer-link">Events</RouterLink>
            <RouterLink to="/our-partners" class="footer-link">Partners</RouterLink>
            <RouterLink to="/resources" class="footer-link">Resources</RouterLink>
            <RouterLink
              to="/startups"
              class="footer-link"
              :class="{ 'footer-link--active': isExactNavMatch('/startups') }"
            >
              Startups
            </RouterLink>
          </nav>
        </section>

        <section>
          <h4 class="footer-title">Programs & Services</h4>
          <nav class="footer-links">
            <template v-for="item in programLinks" :key="item.label">
              <RouterLink
                v-if="item.to"
                :to="item.to"
                class="footer-link"
                :class="{ 'footer-link--active': isExactNavMatch(item.to) }"
              >
                {{ item.label }}
              </RouterLink>

              <template v-else>
                <span class="footer-link footer-link--heading">{{ item.label }}</span>
                <RouterLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to!"
                  class="footer-link footer-link--child"
                  :class="{ 'footer-link--active': isExactNavMatch(child.to!) }"
                >
                  {{ child.label }}
                </RouterLink>
              </template>
            </template>
          </nav>
        </section>

        <section>
          <h4 class="footer-title">Quick Actions</h4>
          <nav class="footer-links">
            <RouterLink
              to="/apply/resident-incubation"
              class="footer-link"
              :class="{ 'footer-link--active': isExactNavMatch('/apply/resident-incubation') }"
            >
              Apply Now
            </RouterLink>
            <RouterLink
              to="/contact"
              class="footer-link"
              :class="{ 'footer-link--active': isExactNavMatch('/contact') }"
            >
              Contact Us
            </RouterLink>
            <RouterLink
              to="/careers"
              class="footer-link"
              :class="{ 'footer-link--active': isExactNavMatch('/careers') }"
            >
              Careers
            </RouterLink>
          </nav>
        </section>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p>© {{ currentYear }} IDRP. All rights reserved.</p>
          <button type="button" class="footer-top-link" @click="scrollToTop">Back to top ↑</button>
        </div>
      </div>
    </footer>

    <transition name="fade">
      <button
        v-if="showScrollTop"
        type="button"
        class="scroll-top"
        aria-label="Scroll to top"
        @click="scrollToTop"
      >
        ↑
      </button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

type NavItem = {
  label: string
  to?: string
  children?: NavItem[]
}

type DropdownKey = 'about' | 'programs' | 'community'
type MobileSectionKey = DropdownKey

const route = useRoute()

const aboutLinks: NavItem[] = [
  { label: 'About IDRP', to: '/about-idrp' },
  { label: 'Our Team', to: '/our-team' },
  {
    label: 'Mentors',
    children: [
      { label: 'Business Mentors', to: '/mentors?tab=business' },
      { label: 'Technology Mentors', to: '/mentors?tab=technology' },
      { label: 'Faculty Mentors', to: '/mentors?tab=faculty' },
    ],
  },
  { label: 'Investment Committee', to: '/investment-committee' },
]

const programLinks: NavItem[] = [
  {
    label: 'Incubation Programs',
    children: [
      { label: 'Pre Incubation', to: '/pre-incubation' },
      { label: 'Incubation', to: '/incubation' },
    ],
  },
  {
    label: 'Government Initiatives',
    children: [
      { label: 'New Age Innovation Network', to: '/programs/nain' },
      { label: 'Common Instrumentation Facility', to: '/programs/cif' },
      {
        label: 'Centre of Excellence in Quantum AI and Computing',
        to: '/programs/coe-quantum-ai',
      },
      { label: 'Capacity Building for Design and Entrepreneurship', to: '/programs/cbde' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Industry Research & Advisory', to: '/industry-research' },
      { label: 'Technical Education Academy', to: '/technical-education-academy' },
    ],
  },
]

const communityLinks: NavItem[] = [
  { label: 'Events', to: '/events' },
  { label: 'Partners', to: '/our-partners' },
  { label: 'Resources', to: '/resources' },
]

const activeDropdown = ref<DropdownKey | null>(null)
const isMobileMenuOpen = ref(false)
const showScrollTop = ref(false)
const isScrolled = ref(false)

const mobileSections = reactive<Record<MobileSectionKey, boolean>>({
  about: false,
  programs: false,
  community: false,
})

const currentYear = computed(() => new Date().getFullYear())

let dropdownCloseTimer: number | null = null

function normalizeQueryValue(value: unknown) {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

function isExactNavMatch(to: string) {
  const [targetPath, queryString] = to.split('?')

  if (route.path !== targetPath) return false

  if (!queryString) {
    return Object.keys(route.query).length === 0
  }

  const params = new URLSearchParams(queryString)

  for (const [key, value] of params.entries()) {
    if (String(normalizeQueryValue(route.query[key])) !== value) {
      return false
    }
  }

  const targetKeys = Array.from(params.keys())
  const routeKeys = Object.keys(route.query)

  return targetKeys.length === routeKeys.length
}

function isSectionActive(items: NavItem[]) {
  return items.some((item) => {
    if (item.to && isExactNavMatch(item.to)) return true
    if (item.children) {
      return item.children.some((child) => child.to && isExactNavMatch(child.to))
    }
    return false
  })
}

function clearDropdownTimer() {
  if (dropdownCloseTimer !== null) {
    window.clearTimeout(dropdownCloseTimer)
    dropdownCloseTimer = null
  }
}

function openDropdown(name: DropdownKey) {
  clearDropdownTimer()
  activeDropdown.value = name
}

function toggleDropdown(name: DropdownKey) {
  clearDropdownTimer()
  activeDropdown.value = activeDropdown.value === name ? null : name
}

function scheduleDropdownClose() {
  clearDropdownTimer()
  dropdownCloseTimer = window.setTimeout(() => {
    activeDropdown.value = null
  }, 120)
}

function cancelDropdownClose() {
  clearDropdownTimer()
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    resetMobileSections()
  }
}

function toggleMobileSection(section: MobileSectionKey) {
  mobileSections[section] = !mobileSections[section]
}

function resetMobileSections() {
  mobileSections.about = false
  mobileSections.programs = false
  mobileSections.community = false
}

function closeAllMenus() {
  activeDropdown.value = null
  isMobileMenuOpen.value = false
  resetMobileSections()
  clearDropdownTimer()
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function handleScroll() {
  const y = window.scrollY
  isScrolled.value = y > 16
  showScrollTop.value = y > 400
}

watch(
  () => route.fullPath,
  () => {
    closeAllMenus()
  },
)

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  clearDropdownTimer()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  color: #14213d;
  background: #ffffff;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}

:global(a) {
  color: inherit;
  text-decoration: none;
}

:global(button) {
  font: inherit;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(20, 33, 61, 0.08);
  transition:
    box-shadow 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease;
}

.site-header--scrolled {
  box-shadow: 0 12px 30px rgba(20, 33, 61, 0.08);
  border-color: rgba(20, 33, 61, 0.12);
}

.header-inner {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.brand-logo,
.footer-logo {
  width: 48px;
  height: 48px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 12px;
}

.brand-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.brand-subtitle {
  color: #5b6577;
  font-size: 0.77rem;
  line-height: 1.3;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-group {
  position: relative;
}

.nav-link,
.nav-button {
  color: #22304d;
  padding: 0.72rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.nav-button {
  border: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.nav-link:hover,
.nav-button:hover,
.nav-link--active {
  background: rgba(16, 91, 255, 0.08);
  color: #105bff;
}

.nav-link--cta {
  color: #ffffff;
  background: linear-gradient(135deg, #105bff, #0b7adf);
}

.nav-link--cta:hover,
.nav-link--cta.nav-link--active {
  color: #ffffff;
  background: linear-gradient(135deg, #0e52e6, #096ec7);
}

.chevron {
  display: inline-block;
  transition: transform 0.2s ease;
}

.chevron--open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 0;
  min-width: 260px;
  padding: 0.5rem;
  border: 1px solid rgba(20, 33, 61, 0.08);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(20, 33, 61, 0.12);
}

.dropdown-link {
  display: block;
  padding: 0.8rem 0.95rem;
  color: #22304d;
  border-radius: 12px;
  font-weight: 500;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;
}

.dropdown-link:hover,
.dropdown-link--active {
  background: rgba(16, 91, 255, 0.08);
  color: #105bff;
}

.dropdown-group {
  position: relative;
}

.has-children > .dropdown-link--parent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-weight: 700;
  color: #22304d;
  cursor: default;
}

.submenu-arrow {
  flex-shrink: 0;
  opacity: 0.6;
  font-size: 1rem;
}

.submenu {
  position: absolute;
  top: 0;
  left: calc(100% + 0.45rem);
  min-width: 260px;
  padding: 0.5rem;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(20, 33, 61, 0.08);
  box-shadow: 0 18px 40px rgba(20, 33, 61, 0.12);
  opacity: 0;
  visibility: hidden;
  transform: translateX(8px);
  transition:
    opacity 0.18s ease,
    visibility 0.18s ease,
    transform 0.18s ease;
}

.has-children:hover > .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.mobile-toggle {
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.28rem;
}

.mobile-toggle span {
  width: 24px;
  height: 2.5px;
  border-radius: 999px;
  background: #22304d;
}

.mobile-nav {
  border-top: 1px solid rgba(20, 33, 61, 0.08);
  background: #ffffff;
}

.mobile-nav-inner {
  padding: 0.6rem 0 1rem;
}

.mobile-link,
.mobile-section-trigger,
.mobile-sublink {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #22304d;
  background: transparent;
  border: 0;
  padding: 0.95rem 0;
  text-align: left;
}

.mobile-link,
.mobile-section-trigger {
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

.mobile-link--cta {
  color: #105bff;
}

.mobile-link--active,
.mobile-sublink--active,
.mobile-section-trigger--active {
  color: #105bff;
}

.mobile-section {
  border-top: 1px solid rgba(20, 33, 61, 0.06);
}

.mobile-submenu {
  padding: 0 0 0.35rem 0.9rem;
}

.mobile-subgroup {
  display: flex;
  flex-direction: column;
}

.mobile-sublink {
  font-weight: 500;
  color: #4d5b78;
}

.mobile-sublink--parent {
  font-weight: 700;
  color: #22304d;
  padding-top: 0.9rem;
}

.mobile-sublink--child {
  padding-left: 1rem;
}

.page-main {
  flex: 1;
}

.site-footer {
  margin-top: auto;
  color: #edf2ff;
  background: linear-gradient(180deg, #162340 0%, #0f172a 100%);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.9fr;
  gap: 2rem;
  padding: 3.5rem 0 2.5rem;
}

.footer-brand h3,
.footer-title {
  margin: 0 0 1rem;
  font-size: 1.05rem;
  font-weight: 800;
}

.footer-brand p {
  max-width: 34ch;
  margin: 1rem 0 0;
  color: rgba(237, 242, 255, 0.78);
  line-height: 1.7;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer-link {
  color: rgba(237, 242, 255, 0.8);
  transition: color 0.18s ease;
}

.footer-link:hover,
.footer-link--active {
  color: #ffffff;
}

.footer-link--heading {
  font-weight: 700;
  color: #ffffff;
  cursor: default;
}

.footer-link--child {
  padding-left: 0.9rem;
  color: rgba(237, 242, 255, 0.74);
}

.footer-bottom {
  border-top: 1px solid rgba(237, 242, 255, 0.1);
}

.footer-bottom-inner {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-bottom-inner p {
  margin: 0;
  color: rgba(237, 242, 255, 0.72);
}

.footer-top-link {
  color: #ffffff;
  border: 1px solid rgba(237, 242, 255, 0.18);
  background: transparent;
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
}

.footer-top-link:hover {
  background: rgba(255, 255, 255, 0.08);
}

.scroll-top {
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 999px;
  color: #ffffff;
  background: linear-gradient(135deg, #105bff, #0b7adf);
  box-shadow: 0 16px 32px rgba(16, 91, 255, 0.28);
  cursor: pointer;
}

.fade-slide-enter-active,
.fade-slide-leave-active,
.fade-enter-active,
.fade-leave-active,
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1080px) {
  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: inline-flex;
  }

  .brand-subtitle {
    display: none;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 720px) {
  .container {
    width: min(100% - 1.25rem, 1180px);
  }

  .header-inner {
    min-height: 72px;
  }

  .brand-logo,
  .footer-logo {
    width: 42px;
    height: 42px;
  }

  .brand-title {
    font-size: 1rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    padding: 2.75rem 0 2rem;
  }

  .footer-bottom-inner {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }

  .scroll-top {
    right: 0.9rem;
    bottom: 0.9rem;
  }
}
</style>