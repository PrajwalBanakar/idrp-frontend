<template>
  <!-- Navbar -->
  <nav class="flex justify-between items-center px-10 py-4 shadow bg-white relative z-50">
    <router-link to="/" class="flex items-center space-x-2">
      <img src="/iiitd.webp" alt="IDRP Logo" class="h-8 w-8" />
      <span class="text-lg font-bold text-teal-700">
        IIIT Dharwad Research Park
      </span>
    </router-link>

    <div class="space-x-6 hidden md:flex items-center">

      <!-- About Dropdown -->
      <div class="relative" @mouseenter="aboutOpen = true" @mouseleave="aboutOpen = false">
        <a class="cursor-pointer flex items-center gap-1 hover:text-teal-700 transition-colors py-2">
          About
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': aboutOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div v-show="aboutOpen" class="absolute top-full left-0 pt-2 w-44 z-50">
          <div class="bg-white rounded-lg shadow-lg border border-gray-100 py-1">
            <router-link to="/about-idrp"         class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">IDRP</router-link>
            <router-link to="/our-board"    class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Our Board</router-link>
            <router-link to="/our-team"     class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Our Team</router-link>
            <router-link to="/our-partners" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Our Partners</router-link>
            <router-link to="/mentors"      class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Mentors</router-link>
          </div>
        </div>
      </div>

      <!-- Programs Dropdown -->
      <div class="relative" @mouseenter="programsOpen = true" @mouseleave="programsOpen = false">
        <a class="cursor-pointer flex items-center gap-1 hover:text-teal-700 transition-colors py-2">
          Programs
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': programsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div v-show="programsOpen" class="absolute top-full left-0 pt-2 w-44 z-50">
          <div class="bg-white rounded-lg shadow-lg border border-gray-100 py-1">
            <router-link to="/incubation"   class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Incubation</router-link>
            <router-link to="/acceleration" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Acceleration</router-link>
          </div>
        </div>
      </div>

      <!-- Services Dropdown -->
      <div class="relative" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
        <a class="cursor-pointer flex items-center gap-1 hover:text-teal-700 transition-colors py-2">
          Services
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': servicesOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div v-show="servicesOpen" class="absolute top-full left-0 pt-2 w-52 z-50">
          <div class="bg-white rounded-lg shadow-lg border border-gray-100 py-1">
            <router-link to="/funding"           class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Access to Funding</router-link>
            <router-link to="/market-connects"   class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Market Connects</router-link>
            <router-link to="/business-services" class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Business Services</router-link>
            <router-link to="/co-working"        class="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors">Co-Working</router-link>
          </div>
        </div>
      </div>

      <router-link to="/events"   class="cursor-pointer hover:text-teal-700 transition-colors">Events</router-link>
      <router-link to="/startups" class="cursor-pointer hover:text-teal-700 transition-colors">Startups</router-link>

    </div>

    <router-link
      to="/contact"
      class="border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white transition-colors px-5 py-2 rounded-full font-medium hidden md:inline-flex"
    >
      Contact Us
    </router-link>

    <!-- Hamburger (mobile only) -->
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

        <!-- About accordion -->
        <div>
          <button @click="mobileAbout = !mobileAbout" class="w-full flex items-center justify-between py-3 text-gray-800 font-medium hover:text-teal-700 transition-colors">
            About
            <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': mobileAbout }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="mobileAbout" class="pl-4 pb-2 flex flex-col gap-1">
            <router-link @click="mobileOpen=false" to="/about-idrp"         class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">IDRP</router-link>
            <router-link @click="mobileOpen=false" to="/our-board"    class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Our Board</router-link>
            <router-link @click="mobileOpen=false" to="/our-team"     class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Our Team</router-link>
            <router-link @click="mobileOpen=false" to="/our-partners" class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Our Partners</router-link>
            <router-link @click="mobileOpen=false" to="/mentors"      class="py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors">Mentors</router-link>
          </div>
        </div>

        <!-- Programs accordion -->
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

        <!-- Services accordion -->
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

  <!-- Hero Carousel -->
  <section class="relative h-[88vh] overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-600">

    <!-- Slides -->
    <div
      v-for="(slide, index) in heroSlides"
      :key="index"
      class="absolute inset-0 flex items-center px-12 md:px-24 transition-opacity duration-1000 ease-in-out"
      :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
      <!-- Left: Text -->
      <div class="w-full md:w-1/2 text-white pr-0 md:pr-12">
        <h1
          class="text-4xl md:text-5xl font-bold leading-tight mb-6 transition-all duration-700"
          :class="currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          {{ slide.heading }}
        </h1>
        <p
          class="text-lg md:text-xl text-teal-100 leading-relaxed mb-10 transition-all duration-700 delay-100"
          :class="currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          {{ slide.subtext }}
        </p>

      </div>

      <!-- Right: Image -->
      <div class="hidden md:flex w-1/2 justify-center items-center">
        <div class="w-[420px] h-[320px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
          <img
            :src="slide.image"
            :alt="slide.heading"
            class="w-full h-full object-cover transition-transform duration-700 scale-105"
            :class="currentSlide === index ? 'scale-100' : 'scale-105'"
          />
        </div>
      </div>
    </div>

    <!-- CTA Buttons — fixed overlay, never moves during transitions -->
    <div class="absolute bottom-24 left-12 md:left-24 z-20 flex flex-wrap gap-4">
      <router-link
        to="/incubation"
        class="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors shadow-lg"
      >
        Explore our Programs
      </router-link>
      <router-link
        to="/contact"
        class="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-teal-700 transition-colors"
      >
        Join Our Community
      </router-link>
    </div>

    <!-- Dot indicators -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      <button
        v-for="(_, i) in heroSlides"
        :key="i"
        @click="goToSlide(i)"
        class="h-2 rounded-full transition-all duration-300"
        :class="currentSlide === i ? 'bg-white w-8' : 'bg-white/40 w-2'"
      />
    </div>

    <!-- Prev / Next arrows -->
    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

  </section>


  <!-- Our Impact Section -->
  <section class="py-24 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
        <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Impact</h2>
        <p class="text-gray-500 mt-3 max-w-xl mx-auto">Building the deep-tech ecosystem that transforms ambitious ideas into globally competitive ventures.</p>
      </div>

      <!-- Impact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div v-for="card in impactCards" :key="card.title"
          class="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-default"
        >
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
            <span v-html="card.icon" class="w-6 h-6"></span>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ card.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ card.description }}</p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-gradient-to-br from-teal-700 to-cyan-600 rounded-3xl px-10 py-14">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white">By the Numbers</h3>
          <p class="text-teal-100 mt-2">A decade of impact across India's deep-tech landscape</p>
        </div>
        <div class="stats-trigger grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="flex items-center justify-center gap-1 mb-1">
              <span class="text-2xl text-teal-200">
                <span v-html="stat.icon"></span>
              </span>
            </div>
            <div class="text-3xl md:text-4xl font-extrabold text-white">
              {{ stat.prefix }}{{ stat.displayed }}{{ stat.suffix }}
            </div>
            <p class="text-teal-100 text-sm mt-1 leading-snug">{{ stat.label }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>


  <!-- Programs -->
  <section class="py-24 px-6 md:px-16 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <span class="inline-block bg-teal-50 text-teal-700 font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Call for Applications
        </span>
        <h2 class="text-4xl font-bold text-gray-900">Our Programs</h2>
        <p class="text-gray-500 mt-3 text-lg">Guiding startups from idea to scale</p>
      </div>
      <div class="flex flex-col gap-6 max-w-3xl mx-auto">

        <div class="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300">
          <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
          <div class="p-8">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <span class="text-xs font-semibold bg-teal-50 text-teal-700 px-3 py-1 rounded-full">12–18 months</span>
                <h3 class="text-2xl font-bold text-gray-900 mt-3">Resident Incubation Program</h3>
              </div>
              <router-link to="/apply/resident-incubation" class="shrink-0 self-start sm:self-center bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm whitespace-nowrap">Apply Now</router-link>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">Comprehensive support for startups at idea, PoC, or MVP stage. Get access to dedicated workspace, labs, mentorship, and seed funding opportunities.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div v-for="f in residentFeatures" :key="f" class="flex items-center gap-2.5 text-sm text-gray-700">
                <svg class="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                {{ f }}
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300">
          <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
          <div class="p-8">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <span class="text-xs font-semibold bg-teal-50 text-teal-700 px-3 py-1 rounded-full">6–12 months</span>
                <h3 class="text-2xl font-bold text-gray-900 mt-3">Virtual Incubation Program</h3>
              </div>
              <router-link to="/apply/virtual-incubation" class="shrink-0 self-start sm:self-center bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm whitespace-nowrap">Apply Now</router-link>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">Remote support for startups and entrepreneurs who want to leverage our ecosystem without physical presence. Perfect for early-stage ventures across India.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div v-for="f in virtualFeatures" :key="f" class="flex items-center gap-2.5 text-sm text-gray-700">
                <svg class="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                {{ f }}
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300">
          <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
          <div class="p-8">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <span class="text-xs font-semibold bg-teal-50 text-teal-700 px-3 py-1 rounded-full">6 months intensive</span>
                <h3 class="text-2xl font-bold text-gray-900 mt-3">Deep-Tech Accelerator</h3>
              </div>
              <router-link to="/apply/deep-tech-accelerator" class="shrink-0 self-start sm:self-center bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm whitespace-nowrap">Apply Now</router-link>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">Fast-track program for startups with proven technology ready for market entry. Focus on GTM strategy, scaling, and Series A preparation.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div v-for="f in acceleratorFeatures" :key="f" class="flex items-center gap-2.5 text-sm text-gray-700">
                <svg class="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                {{ f }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Our Services Section -->
  <section class="py-24 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-16 items-start">

        <!-- Left: Service Cards -->
        <div class="w-full lg:w-1/2">
          <div class="mb-10">
            <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Provide</span>
            <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
          </div>

          <div class="flex flex-col gap-4">
            <router-link
              v-for="service in services"
              :key="service.title"
              :to="service.route"
              class="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="w-11 h-11 rounded-xl bg-teal-50 group-hover:bg-teal-600 flex items-center justify-center text-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <span v-html="service.icon"></span>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <h3 class="font-bold text-gray-900 group-hover:text-teal-700 transition-colors">{{ service.title }}</h3>
                  <svg class="w-4 h-4 text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p class="text-gray-500 text-sm mt-1 leading-relaxed">{{ service.description }}</p>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Right: Description + Image -->
        <div class="w-full lg:w-1/2 flex flex-col gap-8 lg:pt-20">
          <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <p class="text-gray-700 text-lg leading-relaxed">
              From ideation to scale and beyond, IDRP provides end-to-end support tailored to every stage of your journey—whether you're launching a startup or growing into an enterprise.
            </p>
            <router-link to="/contact" class="inline-flex items-center gap-2 mt-6 text-teal-700 font-semibold text-sm hover:gap-3 transition-all duration-200">
              Talk to us
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>

          <!-- Image -->
          <div class="rounded-2xl overflow-hidden shadow-lg h-60 bg-teal-100">
            <img
              src="/services.jpg"
              alt="IDRP Services"
              class="w-full h-full object-cover"
              onerror="this.style.display='none'; this.parentElement.classList.add('flex','items-center','justify-center'); this.parentElement.innerHTML += '<span class=\'text-teal-400 text-sm\'>services.jpg</span>'"
            />
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Our Approach Section -->
  <section class="py-24 px-6 md:px-16 bg-white">
    <div class="max-w-6xl mx-auto">

      <div class="text-center mb-14">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">How We Work</span>
        <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Approach</h2>
        <p class="text-gray-500 mt-3 max-w-xl mx-auto">A community-first model that puts founders at the center of everything we do.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="approach in approaches" :key="approach.title"
          class="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-teal-700 hover:border-teal-700 hover:shadow-2xl transition-all duration-300 cursor-default overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-teal-100 group-hover:bg-white/20 flex items-center justify-center text-teal-600 group-hover:text-white transition-all duration-300 mb-6">
              <span v-html="approach.icon"></span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">{{ approach.title }}</h3>
            <p class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors duration-300">{{ approach.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Success Stories Section -->
  <section class="py-24 bg-gray-50 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 md:px-16">
      <div class="text-center mb-14">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Founder Voices</span>
        <h2 class="text-4xl font-bold text-gray-900 mt-2">Success Stories</h2>
        <p class="text-gray-500 mt-3 max-w-xl mx-auto">Real founders, real impact — the stories behind some of India's most exciting deep-tech ventures.</p>
      </div>
    </div>

    <!-- Infinite scroll track -->
    <div class="relative">
      <!-- Fade masks left & right -->
      <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

      <!-- Row 1 — scrolls left -->
      <div class="flex gap-6 mb-6 stories-track-left" :style="{ '--count': successStories.length }">
        <div
          v-for="(story, i) in [...successStories, ...successStories]"
          :key="'a' + i"
          class="shrink-0 w-80 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 cursor-default"
        >
          <!-- Quote icon -->
          <svg class="w-8 h-8 text-teal-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p class="text-gray-700 text-sm leading-relaxed mb-6 italic">"{{ story.quote }}"</p>
          <div class="flex items-center gap-3 mt-auto">
            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0" :style="{ background: story.color }">
              {{ story.initials }}
            </div>
            <div>
              <p class="font-bold text-gray-900 text-sm">{{ story.name }}</p>
              <p class="text-xs text-gray-500">{{ story.role }} · {{ story.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2 — scrolls right -->
      <div class="flex gap-6 stories-track-right" :style="{ '--count': successStories.length }">
        <div
          v-for="(story, i) in [...successStories, ...successStories].reverse()"
          :key="'b' + i"
          class="shrink-0 w-80 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 cursor-default"
        >
          <svg class="w-8 h-8 text-teal-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p class="text-gray-700 text-sm leading-relaxed mb-6 italic">"{{ story.quote }}"</p>
          <div class="flex items-center gap-3 mt-auto">
            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0" :style="{ background: story.color }">
              {{ story.initials }}
            </div>
            <div>
              <p class="font-bold text-gray-900 text-sm">{{ story.name }}</p>
              <p class="text-xs text-gray-500">{{ story.role }} · {{ story.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Partners Section -->
  <section class="py-24 px-6 md:px-16 bg-white">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-6">
        <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Ecosystem</span>
        <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Partners</h2>
      </div>
      <p class="text-center text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
        Through enduring, value-driven partnerships, IDRP has played a key role in strengthening the startup ecosystem by connecting people, institutions, and government.
      </p>

      <!-- Category Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="cat in partnerCategories"
          :key="cat.key"
          @click="activePartnerTab = cat.key"
          class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          :class="activePartnerTab === cat.key
            ? 'bg-teal-700 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-700'"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Partner Logos Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <div
          v-for="partner in filteredPartners"
          :key="partner.name"
          class="group flex flex-col items-center justify-center gap-3 bg-gray-50 hover:bg-white border border-gray-100 hover:border-teal-200 hover:shadow-md rounded-2xl p-5 transition-all duration-300 cursor-default"
        >
          <!-- Icon placeholder with initials -->
          <div class="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
            :style="{ background: partner.color }">
            {{ partner.abbr }}
          </div>
          <p class="text-xs font-semibold text-gray-600 group-hover:text-teal-700 text-center leading-tight transition-colors">{{ partner.name }}</p>
        </div>
      </div>


    </div>
  </section>

  <!-- Awards & Recognition Section -->
  <section class="py-24 px-6 md:px-16 bg-gray-50">
    <div class="max-w-6xl mx-auto">

      <!-- Two-column header layout -->
      <div class="flex flex-col lg:flex-row gap-16 items-start mb-20">

        <!-- Left: Title -->
        <div class="lg:w-2/5 shrink-0">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Milestones</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2 leading-tight">Awards &<br>Recognition</h2>
          <div class="mt-6 w-12 h-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"></div>
        </div>

        <!-- Right: Description -->
        <div class="lg:w-3/5 space-y-4 text-gray-600 leading-relaxed">
          <p>
            The truest measure of our work is visible in the ventures we help build. When a founder scales, files a patent, or closes a funding round, that's recognition we carry with pride. But acknowledgment from institutions and peers has followed too.
          </p>
          <p>
            IDRP's contributions to mentorship, startup growth, and ecosystem development have earned recognition from leading bodies — a reflection of a collective effort involving founders, mentors, partners, and policymakers alike.
          </p>
          <p class="text-teal-700 font-medium">
            These honours don't define us — they remind us that when startups succeed, the nation moves forward. And that keeps us going.
          </p>
        </div>
      </div>

      <!-- Awards Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div
          v-for="award in awards"
          :key="award.title"
          class="group flex flex-col items-center bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300"
        >
          <!-- Image area -->
          <div class="w-full h-40 overflow-hidden bg-gradient-to-br"
            :class="award.bg">
            <img
              v-if="award.image"
              :src="award.image"
              :alt="award.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Placeholder when no image -->
            <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2 px-4">
              <div class="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
              </div>
              <span class="text-white/80 text-xs font-semibold text-center">{{ award.issuer }}</span>
            </div>
          </div>

          <!-- Title -->
          <div class="px-4 py-4 text-center">
            <p class="text-xs font-bold text-gray-800 leading-snug group-hover:text-teal-700 transition-colors">{{ award.title }}</p>
            <p class="text-xs text-gray-400 mt-1">{{ award.year }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA Banner -->
  <section class="py-20 px-6 md:px-16 bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-600 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5"></div>
      <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 text-center">
      <span class="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
        Start Your Journey
      </span>
      <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
        Ready to build the future?
      </h2>
      <p class="text-teal-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Whether you're at the idea stage or ready to scale, IDRP has the programs, people, and infrastructure to take you further. Applications are open now.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <router-link to="/apply/resident-incubation"
          class="bg-white text-teal-800 font-bold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors shadow-xl text-sm">
          Apply to a Program
        </router-link>
        <router-link to="/contact"
          class="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm">
          Talk to our Team
        </router-link>
      </div>

      <!-- Newsletter signup -->
      <div class="border-t border-white/20 pt-10">
        <p class="text-teal-100 text-sm mb-4 font-medium">Stay updated with the latest from IDRP</p>
        <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            v-model="newsletterEmail"
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-5 py-3 rounded-full text-sm text-gray-800 outline-none focus:ring-2 focus:ring-white/50 bg-white placeholder-gray-400"
          />
          <button type="submit"
            class="bg-teal-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-950 transition-colors text-sm shrink-0">
            Subscribe
          </button>
        </form>
        <p v-if="newsletterSuccess" class="text-teal-200 text-xs mt-3">
          ✓ You're subscribed! We'll keep you in the loop.
        </p>
      </div>
    </div>
  </section>

  <Transition name="fade">
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 bg-teal-700 hover:bg-teal-800 text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
      aria-label="Scroll to top"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>

  <!-- Footer -->
  <footer class="bg-gray-950 text-gray-300">

    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

      <!-- Col 1: Brand + Contact (spans 2 cols on lg) -->
      <div class="lg:col-span-2 flex flex-col gap-5">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2.5 w-fit">
          <img src="/iiitd.webp" alt="IDRP" class="h-9 w-9" />
          <div>
            <p class="text-white font-bold text-sm leading-tight">IIIT Dharwad</p>
            <p class="text-teal-400 text-xs font-semibold tracking-wide">Research Park</p>
          </div>
        </router-link>

        <p class="text-sm text-gray-400 leading-relaxed max-w-xs">
          Nurturing deep-tech innovations that address India's most complex technological and societal challenges.
        </p>

        <!-- Location -->
        <div class="flex items-start gap-2.5 text-sm">
          <svg class="w-4 h-4 text-teal-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <div>
            <p class="text-gray-300 font-medium">Pi Block, IIIT Dharwad</p>
            <a
              href="https://www.google.com/maps/place/IIIT+Dharwad+Research+Park+(IDRP)/@15.3925499,75.0236567,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb8d30008aeeadb:0x8a69d94bb8a9e11e!8m2!3d15.3925499!4d75.0262316!16s%2Fg%2F11w8gt2mw6?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener"
              class="text-gray-400 hover:text-teal-400 transition-colors text-xs mt-0.5 inline-block"
            >
              92VG+2F9, IIIT Circle Rd, Dharwad, Karnataka 580009 ↗
            </a>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex items-center gap-2.5 text-sm">
          <svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <a href="tel:+910000000000" class="text-gray-400 hover:text-teal-400 transition-colors">+91 00000 00000</a>
        </div>

        <!-- Email -->
        <div class="flex items-center gap-2.5 text-sm">
          <svg class="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a href="mailto:contact@idrp.in" class="text-gray-400 hover:text-teal-400 transition-colors">contact@idrp.in</a>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-3 mt-1">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener"
            class="w-9 h-9 rounded-xl bg-white/5 hover:bg-teal-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            :aria-label="social.name">
            <span v-html="social.icon"></span>
          </a>
        </div>
      </div>

      <!-- Col 2: About -->
      <div>
        <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">About</h4>
        <ul class="space-y-3">
          <li v-for="link in footerAbout" :key="link.label">
            <router-link :to="link.to" class="text-sm text-gray-400 hover:text-teal-400 transition-colors">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Col 3: Programs & Services -->
      <div>
        <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Programs & Services</h4>
        <ul class="space-y-3">
          <li v-for="link in footerPrograms" :key="link.label">
            <router-link :to="link.to" class="text-sm text-gray-400 hover:text-teal-400 transition-colors">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Col 4: Information -->
      <div>
        <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Information</h4>
        <ul class="space-y-3">
          <li v-for="link in footerInfo" :key="link.label">
            <router-link :to="link.to" class="text-sm text-gray-400 hover:text-teal-400 transition-colors">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

    </div>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-6 md:px-16">
      <div class="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-xs text-gray-500">© {{ new Date().getFullYear() }} IIIT Dharwad Research Park. All rights reserved.</p>
        <div class="flex gap-5 text-xs text-gray-500">
          <router-link to="/privacy" class="hover:text-teal-400 transition-colors">Privacy Policy</router-link>
          <router-link to="/terms"   class="hover:text-teal-400 transition-colors">Terms of Use</router-link>
          <router-link to="/sitemap" class="hover:text-teal-400 transition-colors">Sitemap</router-link>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const aboutOpen = ref(false)
const programsOpen = ref(false)
const servicesOpen = ref(false)
const mobileOpen = ref(false)
const mobileAbout = ref(false)
const mobilePrograms = ref(false)
const mobileServices = ref(false)

// Hero carousel
const currentSlide = ref(0)

const heroSlides = [
  {
    heading: "Empowering Deep-Tech Innovation for Tomorrow's Solutions",
    subtext: "IIIT Dharwad Research Park is at the forefront of nurturing breakthrough innovations that address complex technological and societal challenges.",
    image: "/hero1.jfif",
  },
  {
    heading: "Where ideas transform into impactful ventures",
    subtext: "Providing the ecosystem, guidance, and capital to help you scale.",
    image: "/hero2.jfif",
  },
  {
    heading: "Build, connect, and grow in a space designed for founders",
    subtext: "More than just desks, IDRP is a hub for innovation and meaningful collaboration.",
    image: "/hero3.jfif",
  },
]

function goToSlide(i) {
  currentSlide.value = i
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
}

// ── Program features ───────────────────────────────────────────
const residentFeatures = [
  'Dedicated workspace at campus',
  'Access to research labs and equipment',
  'Technical mentorship from faculty',
  'Business development support',
  'Seed funding up to ₹50 lakhs',
  'Industry networking events',
]

const virtualFeatures = [
  'Remote mentorship sessions',
  'Access to digital resources',
  'Investor connect programs',
  'Online Startup School',
  'Alumni network access',
  'Grant application support',
]

const acceleratorFeatures = [
  'Intensive GTM workshops',
  'Pilot project facilitation',
  'Corporate partnership opportunities',
  'Investor pitch sessions',
  'Product-market fit validation',
  'Series A readiness training',
]


// ── Footer links ───────────────────────────────────────────────
const footerAbout = [
  { label: 'About IDRP',      to: '/about-idrp' },
  { label: 'Our Board',       to: '/our-board' },
  { label: 'Our Team',        to: '/our-team' },
  { label: 'Our Partners',    to: '/our-partners' },
  { label: 'Mentors',         to: '/mentors' },
  { label: 'Careers',         to: '/careers' },
  { label: 'Events',          to: '/events' },
  { label: 'Startups',        to: '/startups' },
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
  { label: 'Contact Us',      to: '/contact' },
  { label: 'FAQ',             to: '/faq' },
  { label: 'Help Center',     to: '/help' },
  { label: 'Apply Now',       to: '/apply/resident-incubation' },
  { label: 'News & Updates',  to: '/news' },
  { label: 'Gallery',         to: '/gallery' },
  { label: 'Annual Reports',  to: '/reports' },
  { label: 'Grievance',       to: '/grievance' },
]

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  },
]

// ── Awards ─────────────────────────────────────────────────────
const awards = [
  { title: 'Best Technology Business Incubator', issuer: 'NITI Aayog', year: '2023', image: '', bg: 'from-teal-600 to-cyan-500' },
  { title: 'Outstanding Startup Ecosystem Award', issuer: 'MeitY', year: '2023', image: '', bg: 'from-blue-600 to-indigo-500' },
  { title: 'Top Deep-Tech Incubator of India', issuer: 'NASSCOM', year: '2022', image: '', bg: 'from-violet-600 to-purple-500' },
  { title: 'National Innovation Award', issuer: 'DST India', year: '2022', image: '', bg: 'from-orange-500 to-amber-400' },
  { title: 'Best Incubator — Karnataka', issuer: 'Karnataka Govt.', year: '2022', image: '', bg: 'from-rose-600 to-pink-500' },
  { title: 'Emerging Incubator Excellence', issuer: 'TiE Global', year: '2021', image: '', bg: 'from-emerald-600 to-teal-400' },
  { title: 'Women in Tech Enabler Award', issuer: 'CII', year: '2021', image: '', bg: 'from-fuchsia-600 to-pink-400' },
  { title: 'Atal Innovation Mission Recognition', issuer: 'AIM — NITI Aayog', year: '2021', image: '', bg: 'from-sky-600 to-blue-400' },
]

// ── Partners ───────────────────────────────────────────────────
const activePartnerTab = ref('technology')

const partnerCategories = [
  { key: 'technology',   label: 'Technology' },
  { key: 'academic',     label: 'Academic' },
  { key: 'ecosystem',    label: 'Ecosystem' },
  { key: 'international',label: 'International' },
  { key: 'investor',     label: 'Investor' },
]

const allPartners = [
  // Technology
  { name: 'Microsoft',         abbr: 'MS',  color: 'linear-gradient(135deg,#0078d4,#50e6ff)', category: 'technology' },
  { name: 'Google',            abbr: 'G',   color: 'linear-gradient(135deg,#4285F4,#34A853)', category: 'technology' },
  { name: 'NVIDIA',            abbr: 'NV',  color: 'linear-gradient(135deg,#76b900,#c3e88d)', category: 'technology' },
  { name: 'Intel',             abbr: 'IN',  color: 'linear-gradient(135deg,#0071c5,#00aeef)', category: 'technology' },
  { name: 'AWS',               abbr: 'AWS', color: 'linear-gradient(135deg,#ff9900,#ffcc60)', category: 'technology' },
  { name: 'Qualcomm',          abbr: 'QC',  color: 'linear-gradient(135deg,#3253dc,#6e8efb)', category: 'technology' },
  { name: 'Bosch',             abbr: 'BO',  color: 'linear-gradient(135deg,#c0392b,#e74c3c)', category: 'technology' },
  { name: 'Tata Consultancy',  abbr: 'TCS', color: 'linear-gradient(135deg,#0a2c6e,#1a56db)', category: 'technology' },

  // Academic
  { name: 'IIT Bombay',        abbr: 'IIT', color: 'linear-gradient(135deg,#1a1a2e,#16213e)', category: 'academic' },
  { name: 'IISc Bangalore',    abbr: 'IISc',color: 'linear-gradient(135deg,#7b2d8b,#c45ab3)', category: 'academic' },
  { name: 'IIIT Dharwad',      abbr: 'IIIT',color: 'linear-gradient(135deg,#0d9488,#06b6d4)', category: 'academic' },
  { name: 'NIT Karnataka',     abbr: 'NIT', color: 'linear-gradient(135deg,#b45309,#f59e0b)', category: 'academic' },
  { name: 'BITS Pilani',       abbr: 'BITS',color: 'linear-gradient(135deg,#1d4ed8,#60a5fa)', category: 'academic' },
  { name: 'VTU',               abbr: 'VTU', color: 'linear-gradient(135deg,#7c3aed,#a78bfa)', category: 'academic' },

  // Ecosystem
  { name: 'NASSCOM',           abbr: 'NAS', color: 'linear-gradient(135deg,#0ea5e9,#38bdf8)', category: 'ecosystem' },
  { name: 'SIDBI',             abbr: 'SID', color: 'linear-gradient(135deg,#dc2626,#f87171)', category: 'ecosystem' },
  { name: 'Startup India',     abbr: 'SI',  color: 'linear-gradient(135deg,#f97316,#fb923c)', category: 'ecosystem' },
  { name: 'MeitY',             abbr: 'MEI', color: 'linear-gradient(135deg,#16a34a,#4ade80)', category: 'ecosystem' },
  { name: 'Karnataka Govt.',   abbr: 'KA',  color: 'linear-gradient(135deg,#b45309,#fcd34d)', category: 'ecosystem' },
  { name: 'CII',               abbr: 'CII', color: 'linear-gradient(135deg,#0f766e,#2dd4bf)', category: 'ecosystem' },
  { name: 'TiE Global',        abbr: 'TiE', color: 'linear-gradient(135deg,#7c3aed,#c084fc)', category: 'ecosystem' },

  // International
  { name: 'Singapore EDB',     abbr: 'EDB', color: 'linear-gradient(135deg,#c2001a,#ff6b6b)', category: 'international' },
  { name: 'UKIBC',             abbr: 'UK',  color: 'linear-gradient(135deg,#012169,#4169e1)', category: 'international' },
  { name: 'Germany Trade',     abbr: 'GT',  color: 'linear-gradient(135deg,#dd0000,#ffcc00)', category: 'international' },
  { name: 'Fraunhofer',        abbr: 'FH',  color: 'linear-gradient(135deg,#009b77,#55dde0)', category: 'international' },
  { name: 'US Consulate',      abbr: 'US',  color: 'linear-gradient(135deg,#002868,#bf0a30)', category: 'international' },
  { name: 'Israel Innovation', abbr: 'IIA', color: 'linear-gradient(135deg,#0038b8,#6fa7ff)', category: 'international' },

  // Investor
  { name: 'Sequoia Surge',     abbr: 'SS',  color: 'linear-gradient(135deg,#1e1b4b,#4338ca)', category: 'investor' },
  { name: 'Accel Partners',    abbr: 'AC',  color: 'linear-gradient(135deg,#0d9488,#5eead4)', category: 'investor' },
  { name: 'Blume Ventures',    abbr: 'BV',  color: 'linear-gradient(135deg,#92400e,#f59e0b)', category: 'investor' },
  { name: 'Indian Angel Network', abbr: 'IAN', color: 'linear-gradient(135deg,#be123c,#fb7185)', category: 'investor' },
  { name: 'Kalaari Capital',   abbr: 'KC',  color: 'linear-gradient(135deg,#1d4ed8,#93c5fd)', category: 'investor' },
  { name: 'SIDBI Ventures',    abbr: 'SV',  color: 'linear-gradient(135deg,#0f766e,#99f6e4)', category: 'investor' },
]

const filteredPartners = computed(() =>
  allPartners.filter(p => p.category === activePartnerTab.value)
)

// ── Success Stories ────────────────────────────────────────────
const successStories = [
  {
    quote: "IDRP gave us more than infrastructure — they gave us belief. From a lab prototype to a funded product, the journey was made possible by their ecosystem.",
    name: "Arjun Mehta",
    role: "Co-founder & CEO",
    company: "NeuroSense AI",
    initials: "AM",
    color: "linear-gradient(135deg, #0d9488, #06b6d4)",
  },
  {
    quote: "The mentorship at IDRP is unparalleled. We had access to domain experts who helped us pivot at exactly the right moment and scale faster than we imagined.",
    name: "Priya Nair",
    role: "Founder",
    company: "AgriVision Labs",
    initials: "PN",
    color: "linear-gradient(135deg, #7c3aed, #a78bfa)",
  },
  {
    quote: "Graduating from the Deep-Tech Accelerator opened doors we didn't even know existed. Three investor meetings in the first week post-demo day.",
    name: "Rohan Desai",
    role: "CEO",
    company: "SecureChain Systems",
    initials: "RD",
    color: "linear-gradient(135deg, #ea580c, #fbbf24)",
  },
  {
    quote: "The co-working space and research lab access meant we could run real experiments without burning our runway. IDRP de-risked our early stage completely.",
    name: "Sneha Kulkarni",
    role: "Founder & CTO",
    company: "XR Dynamics",
    initials: "SK",
    color: "linear-gradient(135deg, #0891b2, #22d3ee)",
  },
  {
    quote: "IDRP's network of corporate partners led directly to our first enterprise pilot. That pilot became our anchor customer and changed everything.",
    name: "Vikram Rao",
    role: "Co-founder",
    company: "IoTForge",
    initials: "VR",
    color: "linear-gradient(135deg, #be185d, #f472b6)",
  },
  {
    quote: "From grant writing support to investor introductions, IDRP covered every gap a first-time founder faces. We raised our seed round within 8 months.",
    name: "Ananya Sharma",
    role: "Founder",
    company: "MediScan Health",
    initials: "AS",
    color: "linear-gradient(135deg, #15803d, #4ade80)",
  },
  {
    quote: "The Startup School curriculum was practical and rigorous. It shaped how we think about GTM, pricing, and building a team — lessons that still guide us.",
    name: "Karan Joshi",
    role: "CEO",
    company: "SpaceSense Tech",
    initials: "KJ",
    color: "linear-gradient(135deg, #1d4ed8, #60a5fa)",
  },
  {
    quote: "Being part of the IDRP community meant we were never building alone. The peer network of founders is something you can't put a price on.",
    name: "Divya Menon",
    role: "Co-founder",
    company: "NLP Nexus",
    initials: "DM",
    color: "linear-gradient(135deg, #b45309, #fcd34d)",
  },
]

// ── Approaches ─────────────────────────────────────────────────
const approaches = [
  {
    title: 'Curated networking events for founders',
    description: 'Engage, collaborate, and grow within a vibrant startup community',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    title: 'Hands-on workshops & masterclasses',
    description: 'Develop critical skills guided by experienced professionals',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  },
  {
    title: 'Mentorship & expert clinics',
    description: 'Navigate legal, financial, and product challenges with experienced guidance',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
  },
]

const impactCards = [
  {
    title: 'Deep-Tech Domains',
    description: 'Specializing in Computer Vision, Extended Reality, Generative AI, Speech & NLP, Blockchain, Cyber Security, Space Tech, and IoT innovations.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>`,
  },
  {
    title: 'Sector Expertise',
    description: 'Serving Industry 4.0, Healthcare, Financial Services, Semiconductor, Agriculture, Mobility, and Digital Commerce sectors.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
  },
  {
    title: 'World-Class Infrastructure',
    description: 'State-of-the-art labs, prototyping facilities, and testing environments to accelerate product development from concept to market.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>`,
  },
  {
    title: 'Mentorship Network',
    description: 'Access to industry experts, successful entrepreneurs, and academic leaders who guide startups through their growth journey.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    title: 'Funding Support',
    description: 'Seed funding, grant facilitation, and investor connections to fuel startup growth at every stage from ideation to scale.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    title: 'Startup School Programs',
    description: 'Comprehensive training programs covering business strategy, product development, GTM execution, and leadership skills.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  },
]

// ── Services ───────────────────────────────────────────────────
const services = [
  {
    title: 'Access to Funding',
    description: 'Tap into funding opportunities powered by government initiatives',
    route: '/funding',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>`,
  },
  {
    title: 'Market Connects',
    description: 'Strategic support for startups growing beyond borders',
    route: '/market-connects',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
  },
  {
    title: 'Business Services',
    description: 'Adaptable support designed with our open incubation approach',
    route: '/business-services',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>`,
  },
  {
    title: 'Co-Working',
    description: 'Ready-to-use office spaces designed for productivity',
    route: '/co-working',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
  },
]


const stats = ref([
  { label: 'Startups scaled up by over 200%',    target: 70,    displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>` },
  { label: 'Mentors and Industry Experts',        target: 80,    displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>` },
  { label: 'Facilitated in Funding',              target: 50,    displayed: 0, suffix: 'Mn+', kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>` },
  { label: 'Vibrant startup community',           target: 150,   displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>` },
  { label: 'Startup networking events',           target: 1000,  displayed: 0, suffix: '+',   kilo: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>` },
  { label: 'Jobs created by startups',            target: 10,    displayed: 0, suffix: 'K+',  kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>` },
  { label: 'Patents filed by our startups',       target: 60,    displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>` },
  { label: 'Investors and strategic partners',    target: 50,    displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>` },
  { label: 'Successfully graduated startups',     target: 400,   displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>` },
  { label: 'Startups funded',                     target: 26,    displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>` },
  { label: 'Invested across sectors',             target: 7,     displayed: 0, suffix: 'Cr+', kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>` },
  { label: 'Startups funded through our network', target: 100,   displayed: 0, suffix: '+',   kilo: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>` },
])

let statsAnimated = false
let observer

function animateStats() {
  if (statsAnimated) return
  statsAnimated = true
  stats.value.forEach((stat) => {
    const duration = 1800
    const steps = 60
    let current = 0
    const increment = stat.target / steps
    const interval = setInterval(() => {
      current += increment
      if (current >= stat.target) {
        stat.displayed = stat.target
        clearInterval(interval)
      } else {
        stat.displayed = Math.round(current)
      }
    }, duration / steps)
  })
}

const newsletterEmail = ref('')
const newsletterSuccess = ref(false)

function subscribeNewsletter() {
  if (newsletterEmail.value) {
    newsletterSuccess.value = true
    newsletterEmail.value = ''
    setTimeout(() => { newsletterSuccess.value = false }, 4000)
  }
}

const showScrollTop = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 400
}

let timer
onMounted(() => {
  timer = setInterval(nextSlide, 5000)
  window.addEventListener('scroll', handleScroll)
  observer = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) animateStats() },
    { threshold: 0.2 }
  )
  const statsEl = document.querySelector('.stats-trigger')
  if (statsEl) observer.observe(statsEl)
})
onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-down-enter-active { transition: all 0.3s ease; }
.slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-8px); }

.stories-track-left {
  animation: scroll-left 40s linear infinite;
  width: max-content;
}
.stories-track-left:hover { animation-play-state: paused; }

.stories-track-right {
  animation: scroll-right 40s linear infinite;
  width: max-content;
}
.stories-track-right:hover { animation-play-state: paused; }

@keyframes scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scroll-right {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
</style>