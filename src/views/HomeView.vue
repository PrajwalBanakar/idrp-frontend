<template>
  <div class="home-view">
    <!-- Hero Carousel -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-600 min-h-[88vh]"
    >
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.heading"
        class="absolute inset-0 flex items-center px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <div class="w-full md:w-1/2 text-white pr-0 md:pr-12">
          <h1
            class="text-4xl md:text-5xl font-bold leading-tight mb-6 transition-all duration-700"
            :class="
              currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            "
          >
            {{ slide.heading }}
          </h1>

          <p
            class="text-lg md:text-xl text-teal-100 leading-relaxed mb-10 transition-all duration-700 delay-100"
            :class="
              currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            "
          >
            {{ slide.subtext }}
          </p>
        </div>

        <div class="hidden md:flex w-1/2 justify-center items-center">
          <div
            class="w-[420px] h-[320px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20"
          >
            <img
              :src="slide.image"
              :alt="slide.heading"
              class="w-full h-full object-cover transition-transform duration-700"
              :class="currentSlide === index ? 'scale-100' : 'scale-105'"
            />
          </div>
        </div>
      </div>

      <div class="absolute bottom-24 left-6 md:left-12 lg:left-24 z-20 flex flex-wrap gap-4">
        <RouterLink
          to="/incubation"
          class="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors shadow-lg"
        >
          Explore our Programs
        </RouterLink>
        <RouterLink
          to="/contact"
          class="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-teal-700 transition-colors"
        >
          Join Our Community
        </RouterLink>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <button
          v-for="(_, i) in heroSlides"
          :key="i"
          type="button"
          :aria-label="`Go to slide ${i + 1}`"
          class="h-2 rounded-full transition-all duration-300"
          :class="currentSlide === i ? 'bg-white w-8' : 'bg-white/40 w-2'"
          @click="goToSlide(i)"
        />
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        @click="prevSlide"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        @click="nextSlide"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>

    <!-- Our Impact -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest"
            >What We Offer</span
          >
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Impact</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">
            Building the deep-tech ecosystem that transforms ambitious ideas into globally
            competitive ventures.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div
            v-for="card in impactCards"
            :key="card.title"
            class="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300"
            >
              <span v-html="card.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ card.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ card.description }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-teal-700 to-cyan-600 rounded-3xl px-10 py-14">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-white">By the Numbers</h3>
            <p class="text-teal-100 mt-2">A decade of impact across India's deep-tech landscape</p>
          </div>

          <div ref="statsSectionRef" class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="flex items-center justify-center gap-1 mb-1">
                <span class="text-2xl text-teal-200">
                  <span v-html="stat.icon" />
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
          <span
            class="inline-block bg-teal-50 text-teal-700 font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          >
            Call for Applications
          </span>
          <h2 class="text-4xl font-bold text-gray-900">Our Programs</h2>
          <p class="text-gray-500 mt-3 text-lg">Guiding startups from idea to scale</p>
        </div>

        <div class="max-w-5xl mx-auto space-y-14">
          <!-- Incubation Programs -->
          <div>
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900">Incubation Programs</h3>
              <p class="text-gray-500 mt-2">
                Guiding startups from idea validation to growth and scale.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-6">
              <RouterLink
                v-for="program in programs"
                :key="program.title"
                :to="program.detailsTo"
                class="block rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300"
              >
                <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400" />
                <div class="p-8">
                  <div
                    class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5"
                  >
                    <div>
                      <span
                        class="text-xs font-semibold bg-teal-50 text-teal-700 px-3 py-1 rounded-full"
                      >
                        {{ program.duration }}
                      </span>
                      <h3 class="text-2xl font-bold text-gray-900 mt-3">{{ program.title }}</h3>
                    </div>

                    <RouterLink
                      :to="program.applyTo"
                      class="shrink-0 self-start sm:self-center bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors text-sm whitespace-nowrap relative z-10"
                      @click.stop
                    >
                      Apply Now
                    </RouterLink>
                  </div>

                  <p class="text-gray-500 text-sm leading-relaxed mb-6">
                    {{ program.description }}
                  </p>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div
                      v-for="feature in program.features"
                      :key="feature"
                      class="flex items-center gap-2.5 text-sm text-gray-700"
                    >
                      <svg
                        class="w-4 h-4 text-teal-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {{ feature }}
                    </div>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>

          <!-- Government Initiatives -->
          <div>
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900">Government Initiatives</h3>
              <p class="text-gray-500 mt-2">
                Strategic government-supported programs that strengthen innovation, research,
                infrastructure, and entrepreneurship.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RouterLink
                v-for="item in governmentPrograms"
                :key="item.title"
                :to="item.route"
                class="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300"
              >
                <div
                  class="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 21h18M4 18h16M6 18V7l6-4 6 4v11M9 10h.01M12 10h.01M15 10h.01"
                    />
                  </svg>
                </div>

                <h4
                  class="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors"
                >
                  {{ item.title }}
                </h4>

                <p class="text-gray-500 text-sm leading-relaxed mt-3">
                  {{ item.description }}
                </p>

                <div
                  class="mt-6 inline-flex items-center gap-2 text-teal-700 font-semibold group-hover:gap-3 transition-all duration-200"
                >
                  Explore
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses & Workshops -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">
            Learning & Capacity Building
          </span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Courses & Workshops</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">
            Industry-aligned programs designed to build deep-tech skills, research capabilities, and
            entrepreneurial mindset.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Online MTech -->
          <RouterLink
            to="/courses/online-mtech"
            class="group bg-white p-8 rounded-2xl border hover:shadow-lg transition block"
          >
            <span class="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"> 2 Years </span>

            <h3 class="text-xl font-bold mt-4 group-hover:text-teal-700 transition">
              Online M.Tech Program
            </h3>

            <p class="text-gray-500 text-sm mt-3">
              A comprehensive online postgraduate program focused on deep-tech domains, applied AI,
              and industry-driven research aligned with real-world problems.
            </p>

            <div class="mt-6">
              <span class="text-sm font-semibold text-teal-700 group-hover:underline">
                Explore →
              </span>
            </div>
          </RouterLink>

          <!-- IET -->
          <RouterLink
            to="/courses/iet"
            class="group bg-white p-8 rounded-2xl border hover:shadow-lg transition block"
          >
            <span class="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"> 3 Months </span>

            <h3 class="text-xl font-bold mt-4 group-hover:text-teal-700 transition">
              Industry Exposure Track (IET)
            </h3>

            <p class="text-gray-500 text-sm mt-3">
              A short-term intensive program connecting students and professionals with real
              industry problems, tools, and workflows.
            </p>

            <div class="mt-6">
              <span class="text-sm font-semibold text-teal-700 group-hover:underline">
                Explore →
              </span>
            </div>
          </RouterLink>

          <!-- FDP -->
          <RouterLink
            to="/courses/fdp"
            class="group bg-white p-8 rounded-2xl border hover:shadow-lg transition block"
          >
            <span class="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"> 2 Days </span>

            <h3 class="text-xl font-bold mt-4 group-hover:text-teal-700 transition">
              Faculty Development Program (FDP)
            </h3>

            <p class="text-gray-500 text-sm mt-3">
              Designed for faculty to upgrade teaching methodologies, research alignment, and
              industry-relevant skills in emerging technologies.
            </p>

            <div class="mt-6">
              <span class="text-sm font-semibold text-teal-700 group-hover:underline">
                Explore →
              </span>
            </div>
          </RouterLink>

          <!-- 3DW -->
          <RouterLink
            to="/courses/3dw"
            class="group bg-white p-8 rounded-2xl border hover:shadow-lg transition block"
          >
            <span class="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full"> 2–3 Days </span>

            <h3 class="text-xl font-bold mt-4 group-hover:text-teal-700 transition">
              3-Day Workshops (3DW)
            </h3>

            <p class="text-gray-500 text-sm mt-3">
              Hands-on technical workshops focused on specific tools, domains, and emerging
              technologies for rapid skill development.
            </p>

            <div class="mt-6">
              <span class="text-sm font-semibold text-teal-700 group-hover:underline">
                Explore →
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">
            What We Provide
          </span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            IDRP supports innovation through focused industry collaboration and high-impact
            technical learning initiatives.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <RouterLink
            v-for="service in services"
            :key="service.title"
            :to="service.route"
            class="group bg-white rounded-3xl p-10 md:p-12 border border-gray-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-300 min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <div
                class="w-16 h-16 rounded-2xl bg-teal-50 group-hover:bg-teal-600 flex items-center justify-center text-teal-600 group-hover:text-white transition-colors duration-300 mb-8"
              >
                <span v-html="service.icon" />
              </div>

              <h3
                class="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug mb-5"
              >
                {{ service.title }}
              </h3>

              <p class="text-gray-500 text-base leading-relaxed">
                {{ service.description }}
              </p>
            </div>

            <div
              class="mt-8 inline-flex items-center gap-2 text-teal-700 font-semibold group-hover:gap-3 transition-all duration-200"
            >
              Explore
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Approach -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest"
            >How We Work</span
          >
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Approach</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">
            A community-first model that puts founders at the center of everything we do.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="approach in approaches"
            :key="approach.title"
            class="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-teal-700 hover:border-teal-700 hover:shadow-2xl transition-all duration-300 cursor-default overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
            />
            <div class="relative z-10">
              <div
                class="w-14 h-14 rounded-2xl bg-teal-100 group-hover:bg-white/20 flex items-center justify-center text-teal-600 group-hover:text-white transition-all duration-300 mb-6"
              >
                <span v-html="approach.icon" />
              </div>
              <h3
                class="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300"
              >
                {{ approach.title }}
              </h3>
              <p
                class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors duration-300"
              >
                {{ approach.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-24 bg-gray-50 overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 md:px-16">
        <div class="text-center mb-14">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest"
            >Founder Voices</span
          >
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Success Stories</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">
            Real founders, real impact — the stories behind some of India's most exciting deep-tech
            ventures.
          </p>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"
        />
        <div
          class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"
        />

        <div class="flex gap-6 mb-6 stories-track-left">
          <div
            v-for="(story, i) in duplicatedStories"
            :key="`left-${i}`"
            class="shrink-0 w-80 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 cursor-default"
          >
            <svg class="w-8 h-8 text-teal-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
            <p class="text-gray-700 text-sm leading-relaxed mb-6 italic">"{{ story.quote }}"</p>
            <div class="flex items-center gap-3 mt-auto">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                :style="{ background: story.color }"
              >
                {{ story.initials }}
              </div>
              <div>
                <p class="font-bold text-gray-900 text-sm">{{ story.name }}</p>
                <p class="text-xs text-gray-500">{{ story.role }} · {{ story.company }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-6 stories-track-right">
          <div
            v-for="(story, i) in reversedDuplicatedStories"
            :key="`right-${i}`"
            class="shrink-0 w-80 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 cursor-default"
          >
            <svg class="w-8 h-8 text-teal-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
            <p class="text-gray-700 text-sm leading-relaxed mb-6 italic">"{{ story.quote }}"</p>
            <div class="flex items-center gap-3 mt-auto">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                :style="{ background: story.color }"
              >
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

    <!-- Partners -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-6">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest"
            >Ecosystem</span
          >
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Partners</h2>
        </div>

        <p class="text-center text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Through enduring, value-driven partnerships, IDRP has played a key role in strengthening
          the startup ecosystem by connecting people, institutions, and government.
        </p>

        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="cat in partnerCategories"
            :key="cat.key"
            type="button"
            class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            :class="
              activePartnerTab === cat.key
                ? 'bg-teal-700 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-700'
            "
            @click="activePartnerTab = cat.key"
          >
            {{ cat.label }}
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <div
            v-for="partner in filteredPartners"
            :key="partner.name"
            class="group flex flex-col items-center justify-center gap-3 bg-gray-50 hover:bg-white border border-gray-100 hover:border-teal-200 hover:shadow-md rounded-2xl p-5 transition-all duration-300 cursor-default"
          >
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
              :style="{ background: partner.color }"
            >
              {{ partner.abbr }}
            </div>
            <p
              class="text-xs font-semibold text-gray-600 group-hover:text-teal-700 text-center leading-tight transition-colors"
            >
              {{ partner.name }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 items-start mb-20">
          <div class="lg:w-2/5 shrink-0">
            <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest"
              >Milestones</span
            >
            <h2 class="text-4xl font-bold text-gray-900 mt-2 leading-tight">
              Awards &<br />Recognition
            </h2>
            <div class="mt-6 w-12 h-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
          </div>

          <div class="lg:w-3/5 space-y-4 text-gray-600 leading-relaxed">
            <p>
              The truest measure of our work is visible in the ventures we help build. When a
              founder scales, files a patent, or closes a funding round, that's recognition we carry
              with pride. But acknowledgment from institutions and peers has followed too.
            </p>
            <p>
              IDRP's contributions to mentorship, startup growth, and ecosystem development have
              earned recognition from leading bodies — a reflection of a collective effort involving
              founders, mentors, partners, and policymakers alike.
            </p>
            <p class="text-teal-700 font-medium">
              These honours don't define us — they remind us that when startups succeed, the nation
              moves forward. And that keeps us going.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div
            v-for="award in awards"
            :key="award.title"
            class="group flex flex-col items-center bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all duration-300"
          >
            <div class="w-full h-40 overflow-hidden bg-gradient-to-br" :class="award.bg">
              <img
                v-if="award.image"
                :src="award.image"
                :alt="award.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                v-else
                class="w-full h-full flex flex-col items-center justify-center gap-2 px-4"
              >
                <div class="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                    />
                  </svg>
                </div>
                <span class="text-white/80 text-xs font-semibold text-center">{{
                  award.issuer
                }}</span>
              </div>
            </div>

            <div class="px-4 py-4 text-center">
              <p
                class="text-xs font-bold text-gray-800 leading-snug group-hover:text-teal-700 transition-colors"
              >
                {{ award.title }}
              </p>
              <p class="text-xs text-gray-400 mt-1">{{ award.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="py-20 px-6 md:px-16 bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-600 relative overflow-hidden"
    >
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
      </div>

      <div class="max-w-4xl mx-auto relative z-10 text-center">
        <span
          class="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        >
          Start Your Journey
        </span>

        <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Ready to build the future?
        </h2>

        <p class="text-teal-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're at the idea stage or ready to scale, IDRP has the programs, people, and
          infrastructure to take you further. Applications are open now.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <RouterLink
            to="/apply/resident-incubation"
            class="bg-white text-teal-800 font-bold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors shadow-xl text-sm"
          >
            Apply to a Program
          </RouterLink>
          <RouterLink
            to="/contact"
            class="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm"
          >
            Talk to our Team
          </RouterLink>
        </div>

        <div class="border-t border-white/20 pt-10">
          <p class="text-teal-100 text-sm mb-4 font-medium">
            Stay updated with the latest from IDRP
          </p>
          <form
            class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            @submit.prevent="subscribeNewsletter"
          >
            <input
              v-model.trim="newsletterEmail"
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-5 py-3 rounded-full text-sm text-gray-800 outline-none focus:ring-2 focus:ring-white/50 bg-white placeholder-gray-400"
            />
            <button
              type="submit"
              class="bg-teal-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-950 transition-colors text-sm shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p v-if="newsletterSuccess" class="text-teal-200 text-xs mt-3">
            ✓ You're subscribed! We'll keep you in the loop.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

type HeroSlide = {
  heading: string
  subtext: string
  image: string
}

type IconCard = {
  title: string
  description: string
  icon: string
}

type Program = {
  title: string
  duration: string
  description: string
  detailsTo: string
  applyTo: string
  features: string[]
}

type Service = {
  title: string
  description: string
  route: string
  icon: string
}

type Story = {
  quote: string
  name: string
  role: string
  company: string
  initials: string
  color: string
}

type PartnerCategory = {
  key: string
  label: string
}

type Partner = {
  name: string
  abbr: string
  color: string
  category: string
}

type Award = {
  title: string
  issuer: string
  year: string
  image: string
  bg: string
}

type Stat = {
  label: string
  target: number
  displayed: number
  prefix?: string
  suffix: string
  icon: string
}

type CourseOffering = {
  title: string
  duration: string
  description: string
  route: string
}

const heroSlides: HeroSlide[] = [
  {
    heading: "Empowering Deep-Tech Innovation for Tomorrow's Solutions",
    subtext:
      'IIIT Dharwad Research Park is at the forefront of nurturing breakthrough innovations that address complex technological and societal challenges.',
    image: '/hero1.jfif',
  },
  {
    heading: 'Where ideas transform into impactful ventures',
    subtext: 'Providing the ecosystem, guidance, and capital to help you scale.',
    image: '/hero2.jfif',
  },
  {
    heading: 'Build, connect, and grow in a space designed for founders',
    subtext: 'More than just desks, IDRP is a hub for innovation and meaningful collaboration.',
    image: '/hero3.jfif',
  },
]

const impactCards: IconCard[] = [
  {
    title: 'Deep-Tech Domains',
    description:
      'Specializing in Computer Vision, Extended Reality, Generative AI, Speech & NLP, Blockchain, Cyber Security, Space Tech, and IoT innovations.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>`,
  },
  {
    title: 'Sector Expertise',
    description:
      'Serving Industry 4.0, Healthcare, Financial Services, Semiconductor, Agriculture, Mobility, and Digital Commerce sectors.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
  },
  {
    title: 'World-Class Infrastructure',
    description:
      'State-of-the-art labs, prototyping facilities, and testing environments to accelerate product development from concept to market.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>`,
  },
  {
    title: 'Mentorship Network',
    description:
      'Access to industry experts, successful entrepreneurs, and academic leaders who guide startups through their growth journey.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    title: 'Funding Support',
    description:
      'Seed funding, grant facilitation, and investor connections to fuel startup growth at every stage from ideation to scale.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    title: 'Startup School Programs',
    description:
      'Comprehensive training programs covering business strategy, product development, GTM execution, and leadership skills.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  },
]

const programs: Program[] = [
  {
    title: 'Yuva Udyani Program',
    duration: '6–12 months',
    description:
      'A structured early-stage program for founders at idea, problem-validation, or prototype stage. Designed to help aspiring startups validate the problem, refine the solution, build an MVP roadmap, and prepare for incubation readiness.',
    detailsTo: '/pre-incubation',
    applyTo: '/apply/pre-incubation',
    features: [
      'Idea validation and customer discovery',
      'Mentorship on problem-solution fit',
      'MVP planning and prototype guidance',
      'Business model and market research support',
      'Pitch deck and founder readiness sessions',
      'Pathway to incubation and funding opportunities',
    ],
  },
  {
    title: 'Udhyami Resident Incubation',
    duration: '12–18 months',
    description:
      'Comprehensive support for startups at idea, PoC, or MVP stage. Get access to dedicated workspace, labs, mentorship, and seed funding opportunities.',
    detailsTo: '/incubation',
    applyTo: '/apply/resident-incubation',
    features: [
      'Dedicated workspace at campus',
      'Access to research labs and equipment',
      'Technical mentorship from faculty',
      'Business development support',
      'Seed funding up to ₹50 lakhs',
      'Industry networking events',
    ],
  },
  {
    title: 'Udhyami Virtual Incubation',
    duration: '6–12 months',
    description:
      'Remote support for startups and entrepreneurs who want to leverage our ecosystem without physical presence. Perfect for early-stage ventures across India.',
    detailsTo: '/incubation',
    applyTo: '/apply/virtual-incubation',
    features: [
      'Remote mentorship sessions',
      'Access to digital resources',
      'Investor connect programs',
      'Online Startup School',
      'Alumni network access',
      'Grant application support',
    ],
  },
]

type GovernmentProgram = {
  title: string
  description: string
  route: string
}

const governmentPrograms: GovernmentProgram[] = [
  {
    title: 'New Age Innovation Network',
    description:
      'A government-supported initiative focused on innovation, entrepreneurship development, and startup ecosystem strengthening for student and early-stage founders.',
    route: '/programs/nain',
  },
  {
    title: 'Common Instrumentation Facility',
    description:
      'Shared access to advanced instrumentation, lab facilities, and prototyping infrastructure that supports research, product development, and deep-tech experimentation.',
    route: '/programs/cif',
  },
  {
    title: 'Centre of Excellence in Quantum AI and Computing',
    description:
      'A focused initiative to advance research, talent development, and innovation in quantum technologies, artificial intelligence, and next-generation computing systems.',
    route: '/programs/coe-quantum-ai',
  },
  {
    title: 'Capacity Building for Design and Entrepreneurship',
    description:
      'A structured program to build innovation capability, product thinking, design mindset, and entrepreneurial readiness among students, researchers, and aspiring founders.',
    route: '/programs/cbde',
  },
]

const services: Service[] = [
  {
    title: 'Industry Research and Advisory',
    description:
      'Collaborative research, consulting, and strategic advisory support aligned with real industry challenges and innovation goals.',
    route: '/industry-research',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3h16.5M3.75 3v16.5m4.5-9 2.25 2.25 3.75-4.5 2.25 2.25 3-3" /></svg>`,
  },
  {
    title: 'Technical Education Academy',
    description:
      'Specialized technical education programs, industry-ready courses, and capacity-building initiatives for students, faculty, and professionals.',
    route: '/technical-education-academy',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14.25 4.5 9.75 12 5.25l7.5 4.5-7.5 4.5Zm0 0v6.75m0-6.75 6.16-3.696a.75.75 0 0 1 1.09.665v4.431a.75.75 0 0 1-.384.654L12 21m0-6.75L5.134 10.554a.75.75 0 0 0-1.134.651v4.446a.75.75 0 0 0 .384.654L12 21" /></svg>`,
  },
]

const approaches: IconCard[] = [
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

const successStories: Story[] = [
  {
    quote:
      'IDRP gave us more than infrastructure — they gave us belief. From a lab prototype to a funded product, the journey was made possible by their ecosystem.',
    name: 'Arjun Mehta',
    role: 'Co-founder & CEO',
    company: 'NeuroSense AI',
    initials: 'AM',
    color: 'linear-gradient(135deg, #0d9488, #06b6d4)',
  },
  {
    quote:
      'The mentorship at IDRP is unparalleled. We had access to domain experts who helped us pivot at exactly the right moment and scale faster than we imagined.',
    name: 'Priya Nair',
    role: 'Founder',
    company: 'AgriVision Labs',
    initials: 'PN',
    color: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    quote:
      "Graduating from the Deep-Tech Accelerator opened doors we didn't even know existed. Three investor meetings in the first week post-demo day.",
    name: 'Rohan Desai',
    role: 'CEO',
    company: 'SecureChain Systems',
    initials: 'RD',
    color: 'linear-gradient(135deg, #ea580c, #fbbf24)',
  },
  {
    quote:
      'The co-working space and research lab access meant we could run real experiments without burning our runway. IDRP de-risked our early stage completely.',
    name: 'Sneha Kulkarni',
    role: 'Founder & CTO',
    company: 'XR Dynamics',
    initials: 'SK',
    color: 'linear-gradient(135deg, #0891b2, #22d3ee)',
  },
  {
    quote:
      "IDRP's network of corporate partners led directly to our first enterprise pilot. That pilot became our anchor customer and changed everything.",
    name: 'Vikram Rao',
    role: 'Co-founder',
    company: 'IoTForge',
    initials: 'VR',
    color: 'linear-gradient(135deg, #be185d, #f472b6)',
  },
  {
    quote:
      'From grant writing support to investor introductions, IDRP covered every gap a first-time founder faces. We raised our seed round within 8 months.',
    name: 'Ananya Sharma',
    role: 'Founder',
    company: 'MediScan Health',
    initials: 'AS',
    color: 'linear-gradient(135deg, #15803d, #4ade80)',
  },
  {
    quote:
      'The Startup School curriculum was practical and rigorous. It shaped how we think about GTM, pricing, and building a team — lessons that still guide us.',
    name: 'Karan Joshi',
    role: 'CEO',
    company: 'SpaceSense Tech',
    initials: 'KJ',
    color: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
  },
  {
    quote:
      "Being part of the IDRP community meant we were never building alone. The peer network of founders is something you can't put a price on.",
    name: 'Divya Menon',
    role: 'Co-founder',
    company: 'NLP Nexus',
    initials: 'DM',
    color: 'linear-gradient(135deg, #b45309, #fcd34d)',
  },
]

const partnerCategories: PartnerCategory[] = [
  { key: 'all', label: 'All' },
  { key: 'technology', label: 'Technology' },
  { key: 'academic', label: 'Academic' },
  { key: 'ecosystem', label: 'Ecosystem' },
  // { key: 'international', label: 'International' },
  { key: 'investor', label: 'Investor' },
]

const allPartners: Partner[] = [
  // Government / Ecosystem
  {
    name: 'KEONICS',
    abbr: 'KEO',
    color: 'linear-gradient(135deg,#0f766e,#2dd4bf)',
    category: 'ecosystem',
  },
  {
    name: 'STPI',
    abbr: 'STPI',
    color: 'linear-gradient(135deg,#2563eb,#60a5fa)',
    category: 'ecosystem',
  },
  {
    name: 'CII',
    abbr: 'CII',
    color: 'linear-gradient(135deg,#0f766e,#2dd4bf)',
    category: 'ecosystem',
  },

  // Foundations / Non-Profit
  {
    name: 'Deshpande Foundation',
    abbr: 'DF',
    color: 'linear-gradient(135deg,#16a34a,#4ade80)',
    category: 'ecosystem',
  },
  {
    name: 'EkStep Foundation',
    abbr: 'EK',
    color: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
    category: 'ecosystem',
  },
  {
    name: 'Culkey Foundation',
    abbr: 'CF',
    color: 'linear-gradient(135deg,#b45309,#f59e0b)',
    category: 'ecosystem',
  },

  // Investors / Startup Ecosystem
  {
    name: '100X.VC',
    abbr: '100X',
    color: 'linear-gradient(135deg,#1e1b4b,#4338ca)',
    category: 'investor',
  },
  {
    name: 'Seafund',
    abbr: 'SEA',
    color: 'linear-gradient(135deg,#0f766e,#5eead4)',
    category: 'investor',
  },
  {
    name: 'Campus Fund',
    abbr: 'CF',
    color: 'linear-gradient(135deg,#7c3aed,#c084fc)',
    category: 'investor',
  },
  {
    name: 'TiE',
    abbr: 'TiE',
    color: 'linear-gradient(135deg,#dc2626,#fb7185)',
    category: 'investor',
  },

  // Technology / Industry
  {
    name: 'Infosys',
    abbr: 'INF',
    color: 'linear-gradient(135deg,#2563eb,#60a5fa)',
    category: 'technology',
  },
  {
    name: 'iMerit',
    abbr: 'IM',
    color: 'linear-gradient(135deg,#dc2626,#f87171)',
    category: 'technology',
  },
  {
    name: 'Nanopix',
    abbr: 'NP',
    color: 'linear-gradient(135deg,#0ea5e9,#67e8f9)',
    category: 'technology',
  },

  // Semiconductor / Deep Tech
  {
    name: 'Maven Silicon',
    abbr: 'MS',
    color: 'linear-gradient(135deg,#16a34a,#86efac)',
    category: 'technology',
  },
  {
    name: 'Sankalp Semiconductor',
    abbr: 'SS',
    color: 'linear-gradient(135deg,#2563eb,#93c5fd)',
    category: 'technology',
  },
  {
    name: 'Tessolve',
    abbr: 'TES',
    color: 'linear-gradient(135deg,#ea580c,#fb923c)',
    category: 'technology',
  },
  {
    name: 'FutureWiz',
    abbr: 'FW',
    color: 'linear-gradient(135deg,#f97316,#fdba74)',
    category: 'technology',
  },

  // Training / Academic / Skill
  {
    name: 'Sandeepani (SESD)',
    abbr: 'SES',
    color: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    category: 'academic',
  },
  {
    name: 'FAS Silicon Academy',
    abbr: 'FAS',
    color: 'linear-gradient(135deg,#059669,#34d399)',
    category: 'academic',
  },
  {
    name: 'Fuel',
    abbr: 'FUEL',
    color: 'linear-gradient(135deg,#f59e0b,#fde68a)',
    category: 'academic',
  },
  {
    name: 'Xcel Corp',
    abbr: 'XC',
    color: 'linear-gradient(135deg,#6b7280,#9ca3af)',
    category: 'academic',
  },

  // Innovation / Incubation / Consulting
  {
    name: 'Create (Spin-off | Pivot)',
    abbr: 'CRT',
    color: 'linear-gradient(135deg,#374151,#9ca3af)',
    category: 'ecosystem',
  },
  {
    name: 'GX',
    abbr: 'GX',
    color: 'linear-gradient(135deg,#111827,#4b5563)',
    category: 'ecosystem',
  },
  {
    name: 'RV-VLSI Design Center',
    abbr: 'RV',
    color: 'linear-gradient(135deg,#0f766e,#99f6e4)',
    category: 'academic',
  },
]

const awards: Award[] = [
  {
    title: 'Best Technology Business Incubator',
    issuer: 'NITI Aayog',
    year: '2023',
    image: '',
    bg: 'from-teal-600 to-cyan-500',
  },
  {
    title: 'Outstanding Startup Ecosystem Award',
    issuer: 'MeitY',
    year: '2023',
    image: '',
    bg: 'from-blue-600 to-indigo-500',
  },
  {
    title: 'Top Deep-Tech Incubator of India',
    issuer: 'NASSCOM',
    year: '2022',
    image: '',
    bg: 'from-violet-600 to-purple-500',
  },
  {
    title: 'National Innovation Award',
    issuer: 'DST India',
    year: '2022',
    image: '',
    bg: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Best Incubator — Karnataka',
    issuer: 'Karnataka Govt.',
    year: '2022',
    image: '',
    bg: 'from-rose-600 to-pink-500',
  },
  {
    title: 'Emerging Incubator Excellence',
    issuer: 'TiE Global',
    year: '2021',
    image: '',
    bg: 'from-emerald-600 to-teal-400',
  },
  {
    title: 'Women in Tech Enabler Award',
    issuer: 'CII',
    year: '2021',
    image: '',
    bg: 'from-fuchsia-600 to-pink-400',
  },
  {
    title: 'Atal Innovation Mission Recognition',
    issuer: 'AIM — NITI Aayog',
    year: '2021',
    image: '',
    bg: 'from-sky-600 to-blue-400',
  },
]

const stats = ref<Stat[]>([
  {
    label: 'Startups scaled up by over 200%',
    target: 70,
    displayed: 0,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`,
  },
  {
    label: 'Mentors and Industry Experts',
    target: 80,
    displayed: 0,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
  },
  {
    label: 'Facilitated in Funding',
    target: 50,
    displayed: 0,
    suffix: 'Mn+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    label: 'Vibrant startup community',
    target: 150,
    displayed: 0,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    label: 'Startup networking events',
    target: 1000,
    displayed: 0,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>`,
  },
  {
    label: 'Jobs created by startups',
    target: 10,
    displayed: 0,
    suffix: 'K+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>`,
  },
  {
    label: 'Patents filed by our startups',
    target: 60,
    displayed: 0,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
  },
  {
    label: 'Investors and strategic partners',
    target: 50,
    displayed: 0,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
  },
])

const currentSlide = ref(0)
const activePartnerTab = ref('all')
const newsletterEmail = ref('')
const newsletterSuccess = ref(false)
const showServiceImage = ref(true)
const statsSectionRef = ref<HTMLElement | null>(null)

const filteredPartners = computed(() => {
  if (activePartnerTab.value === 'all') {
    return allPartners
  }
  return allPartners.filter((partner) => partner.category === activePartnerTab.value)
})

const duplicatedStories = computed(() => [...successStories, ...successStories])
const reversedDuplicatedStories = computed(() => [...duplicatedStories.value].reverse())

let slideTimer: number | undefined
let statsObserver: IntersectionObserver | null = null
let hasAnimatedStats = false

function goToSlide(index: number) {
  currentSlide.value = index
  restartSlideTimer()
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
  restartSlideTimer()
}

function startSlideTimer() {
  slideTimer = window.setInterval(nextSlide, 5000)
}

function stopSlideTimer() {
  if (slideTimer !== undefined) {
    window.clearInterval(slideTimer)
    slideTimer = undefined
  }
}

function restartSlideTimer() {
  stopSlideTimer()
  startSlideTimer()
}

function animateStats() {
  if (hasAnimatedStats) return
  hasAnimatedStats = true

  stats.value.forEach((stat) => {
    const duration = 1800
    const steps = 60
    let current = 0
    const increment = stat.target / steps

    const interval = window.setInterval(() => {
      current += increment
      if (current >= stat.target) {
        stat.displayed = stat.target
        window.clearInterval(interval)
        return
      }
      stat.displayed = Math.round(current)
    }, duration / steps)
  })
}

function subscribeNewsletter() {
  if (!newsletterEmail.value) return
  newsletterSuccess.value = true
  newsletterEmail.value = ''
  window.setTimeout(() => {
    newsletterSuccess.value = false
  }, 4000)
}

onMounted(() => {
  startSlideTimer()

  statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateStats()
        statsObserver?.disconnect()
      }
    },
    { threshold: 0.2 },
  )

  if (statsSectionRef.value) {
    statsObserver.observe(statsSectionRef.value)
  }
})

onUnmounted(() => {
  stopSlideTimer()
  statsObserver?.disconnect()
})
</script>

<style scoped>
.stories-track-left {
  animation: scroll-left 40s linear infinite;
  width: max-content;
}

.stories-track-left:hover {
  animation-play-state: paused;
}

.stories-track-right {
  animation: scroll-right 40s linear infinite;
  width: max-content;
}

.stories-track-right:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
