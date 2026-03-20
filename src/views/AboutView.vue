<template>
  <AppLayout>

    <!-- ─── Hero Banner ─────────────────────────────────────────── -->
    <section class="relative h-[55vh] min-h-[380px] overflow-hidden">
      <img :src="'/about-hero.jfif'" alt="About IDRP"
        class="absolute inset-0 w-full h-full object-cover object-center"
        onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/75 to-teal-700/20"></div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-8 bg-teal-400 rounded-full"></div>
          <span class="text-teal-300 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">About IDRP</h1>
        <p class="text-teal-100 text-lg leading-relaxed max-w-lg">
          A pioneering deep-tech incubator at the heart of IIIT Dharwad, built to transform ideas into ventures that matter.
        </p>
      </div>
    </section>

    <!-- ─── Introduction ─────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">Bridging Research and Real-World Impact</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>IIIT Dharwad Research Park (IDRP) was established with a singular purpose - to close the gap between cutting-edge academic research and real-world innovation. Situated within the IIIT Dharwad campus, we are more than an incubator; we are a living laboratory where ideas are stress-tested, refined, and scaled.</p>
            <p>Since our inception, IDRP has been home to over 150 startups working across deep-tech domains including Artificial Intelligence, Computer Vision, Extended Reality, Blockchain, Space Tech, and more.</p>
            <p>We serve founders at every stage: from those still in the ideation phase, through teams with proven prototypes, to growth-stage companies preparing to scale nationally and internationally.</p>
          </div>
          <div class="mt-8 flex flex-wrap gap-8">
            <div><p class="text-3xl font-extrabold text-teal-700">10+</p><p class="text-sm text-gray-500 mt-1">Years of operation</p></div>
            <div><p class="text-3xl font-extrabold text-teal-700">400+</p><p class="text-sm text-gray-500 mt-1">Startups graduated</p></div>
            <div><p class="text-3xl font-extrabold text-teal-700">₹50Mn+</p><p class="text-sm text-gray-500 mt-1">Funding facilitated</p></div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <img :src="'/about-intro.jfif'" alt="IDRP Campus" class="w-full h-full object-cover"
              onerror="this.parentElement.classList.add('bg-gradient-to-br','from-teal-100','to-cyan-50'); this.style.display='none'" />
            <div class="absolute bottom-0 right-0 w-32 h-32 bg-teal-600/20 rounded-tl-3xl pointer-events-none"></div>
          </div>
          <div class="mt-4 ml-4 inline-flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-2xl px-5 py-3">
            <div class="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
            <p class="text-sm font-semibold text-teal-700">Actively accepting applications</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Mission & Vision + Pillars ──────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        <div class="lg:w-1/2 flex flex-col gap-10">
          <div class="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-cyan-400 rounded-l-2xl"></div>
            <div class="pl-4">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 text-lg">
                  ⚡
                </div>
                <h3 class="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p class="text-gray-600 leading-relaxed text-sm">To nurture a dynamic and inclusive startup ecosystem that empowers entrepreneurs to build impactful ventures for a better tomorrow - providing not just resources, but a community that believes in founders at every stage.</p>
            </div>
          </div>
          <div class="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-teal-600 rounded-l-2xl"></div>
            <div class="pl-4">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 text-lg">
                  👁
                </div>
                <h3 class="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p class="text-gray-600 leading-relaxed text-sm">To be a catalyst for innovation and inclusive entrepreneurship - building a world-class, founder-first ecosystem where startups thrive freely, empowered with the right support, connections, and resources to create meaningful impact in India and beyond.</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 flex flex-col gap-6">
          <div class="mb-2">
            <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Pillars</span>
            <h2 class="text-3xl font-bold text-gray-900 mt-2">What drives us forward</h2>
          </div>
          <div class="group flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl bg-teal-50">💡</div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg mb-1">Innovation</h4>
              <p class="text-gray-500 text-sm leading-relaxed">We champion bold ideas and unconventional thinking, creating pathways for new technologies that reshape industries and improve lives.</p>
            </div>
          </div>
          <div class="group flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl bg-cyan-50">📈</div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg mb-1">Impact</h4>
              <p class="text-gray-500 text-sm leading-relaxed">Every venture we support is measured not just by growth metrics, but by its potential to drive meaningful economic and social transformation.</p>
            </div>
          </div>
          <div class="group flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl bg-teal-50">🤝</div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg mb-1">Collaboration</h4>
              <p class="text-gray-500 text-sm leading-relaxed">No startup succeeds alone. We foster an open ecosystem where founders, mentors, investors, corporates, and academia work together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── From Vision to Impact (Timeline) ────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white overflow-hidden">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Journey</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">From Vision to Impact</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">Over a decade of building, learning, and growing alongside the startups that trusted us.</p>
        </div>

        <div class="relative">
          <!-- Spine -->
          <div class="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-600 -translate-x-1/2"></div>

          <div v-for="(event, i) in timeline" :key="event.year"
            class="relative flex items-stretch mb-10 last:mb-0"
            :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">

            <!-- Card -->
            <div class="w-full md:w-[46%]" :class="i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'">
              <div class="group relative bg-white border border-gray-100 hover:border-teal-200 hover:shadow-2xl rounded-2xl p-6 transition-all duration-300 overflow-hidden">
                <div class="absolute top-0 left-0 w-1 h-full rounded-l-2xl" :style="{ background: event.color }"></div>
                <div class="pl-3">
                  <span class="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 text-white" :style="{ backgroundColor: event.color }">{{ event.year }}</span>
                  <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{{ event.tag }}</p>
                  <p class="text-gray-700 text-sm leading-relaxed font-medium">{{ event.milestone }}</p>
                </div>
              </div>
            </div>

            <!-- Center dot -->
            <div class="hidden md:flex w-[8%] flex-col items-center justify-center">
              <div class="w-5 h-5 rounded-full ring-4 ring-white shadow-md z-10 transition-transform duration-300 hover:scale-125"
                :style="{ backgroundColor: event.color }"></div>
            </div>

            <!-- Spacer -->
            <div class="hidden md:block w-[46%]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── What We Offer (Donut Pie) ────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Offerings</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">What We Offer</h2>
          <p class="text-gray-500 mt-3 max-w-xl mx-auto">A comprehensive ecosystem of services designed to take you from idea to impact.</p>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-center">

          <!-- SVG Donut Pie Chart -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <svg viewBox="0 0 500 500" class="w-full max-w-[480px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="dropshadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#00000025"/>
                </filter>
              </defs>

              <!-- 6 equal pie segments (60° each) with white dividers -->
              <!-- Segment 1: Cohort — teal, 270°→330° (top, slightly right) -->
              <path d="M250,250 L250,60 A190,190 0 0,1 414.6,145 Z" fill="#0d9488" opacity="0.93"/>
              <!-- Segment 2: Mentoring — red, 330°→30° -->
              <path d="M250,250 L414.6,145 A190,190 0 0,1 414.6,355 Z" fill="#dc2626" opacity="0.93"/>
              <!-- Segment 3: Infrastructure — orange, 30°→90° -->
              <path d="M250,250 L414.6,355 A190,190 0 0,1 250,440 Z" fill="#ea580c" opacity="0.93"/>
              <!-- Segment 4: Market Access — blue, 90°→150° -->
              <path d="M250,250 L250,440 A190,190 0 0,1 85.4,355 Z" fill="#2563eb" opacity="0.93"/>
              <!-- Segment 5: Investment — green, 150°→210° -->
              <path d="M250,250 L85.4,355 A190,190 0 0,1 85.4,145 Z" fill="#16a34a" opacity="0.93"/>
              <!-- Segment 6: Founder Community — cyan, 210°→270° -->
              <path d="M250,250 L85.4,145 A190,190 0 0,1 250,60 Z" fill="#0891b2" opacity="0.93"/>

              <!-- White divider lines -->
              <line x1="250" y1="250" x2="250" y2="55"   stroke="white" stroke-width="3.5"/>
              <line x1="250" y1="250" x2="420" y2="138"  stroke="white" stroke-width="3.5"/>
              <line x1="250" y1="250" x2="420" y2="362"  stroke="white" stroke-width="3.5"/>
              <line x1="250" y1="250" x2="250" y2="445"  stroke="white" stroke-width="3.5"/>
              <line x1="250" y1="250" x2="80"  y2="362"  stroke="white" stroke-width="3.5"/>
              <line x1="250" y1="250" x2="80"  y2="138"  stroke="white" stroke-width="3.5"/>

              <!-- Center white donut -->
              <circle cx="250" cy="250" r="100" fill="white" filter="url(#dropshadow)"/>
              <circle cx="250" cy="250" r="100" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

              <!-- Center IDRP text -->
              <text x="250" y="244" text-anchor="middle" font-size="16" font-weight="800" fill="#0f766e" font-family="system-ui,sans-serif">IDRP</text>
              <text x="250" y="262" text-anchor="middle" font-size="9" fill="#94a3b8" font-family="system-ui,sans-serif">Nurturing Ventures</text>

              <!-- Icon circles at segment midpoints (radius ~218 from center) -->
              <!-- Seg 1 mid 30°: 250+218*sin30=359, 250-218*cos30=61 -->
              <circle cx="359" cy="61"  r="30" fill="white" stroke="#0d9488" stroke-width="2.5" filter="url(#dropshadow)"/>
              <text x="359" y="72"  text-anchor="middle" font-size="22">👥</text>
              <!-- Seg 2 mid 90°: 250+218=468, 250 -->
              <circle cx="468" cy="250" r="30" fill="white" stroke="#dc2626" stroke-width="2.5" filter="url(#dropshadow)"/>
              <text x="468" y="261" text-anchor="middle" font-size="22">🎓</text>
              <!-- Seg 3 mid 150°: 250+218*sin30=359, 250+218*cos30=439 -->
              <circle cx="359" cy="439" r="30" fill="white" stroke="#ea580c" stroke-width="2.5" filter="url(#dropshadow)"/>
              <text x="359" y="450" text-anchor="middle" font-size="22">🏢</text>
              <!-- Seg 4 mid 210°: 250-218*sin30=141, 250+218*cos30=439 -->
              <circle cx="141" cy="439" r="30" fill="white" stroke="#2563eb" stroke-width="2.5" filter="url(#dropshadow)"/>
              <text x="141" y="450" text-anchor="middle" font-size="22">🌐</text>
              <!-- Seg 5 mid 270°: 250-218=32, 250 -->
              <circle cx="32"  cy="250" r="30" fill="white" stroke="#16a34a" stroke-width="2.5" filter="url(#dropshadow)"/>
              <text x="32"  y="261" text-anchor="middle" font-size="22">💰</text>
              <!-- Seg 6 mid 330°: 250-218*sin30=141, 250-218*cos30=61 -->
              <circle cx="141" cy="61"  r="30" fill="white" stroke="#0891b2" stroke-width="2.5" filter="url(#dropshadow)"/>
              <text x="141" y="72"  text-anchor="middle" font-size="22">🤝</text>

              <!-- Dashed connector lines from icon edge to pie edge -->
              <line x1="333" y1="76"  x2="308" y2="108" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55"/>
              <line x1="438" y1="250" x2="440" y2="250" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55"/>
              <line x1="333" y1="424" x2="308" y2="392" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55"/>
              <line x1="167" y1="424" x2="192" y2="392" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55"/>
              <line x1="62"  y1="250" x2="60"  y2="250" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55"/>
              <line x1="167" y1="76"  x2="192" y2="108" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.55"/>

              <!-- Labels outside icon circles -->
              <text x="383" y="42"  text-anchor="middle" font-size="9.5" font-weight="700" fill="#0d9488" font-family="system-ui,sans-serif">Cohort</text>
              <text x="483" y="230" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626" font-family="system-ui,sans-serif">Mentoring +</text>
              <text x="483" y="244" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626" font-family="system-ui,sans-serif">Masterclass</text>
              <text x="380" y="480" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c" font-family="system-ui,sans-serif">Infrastructure &amp;</text>
              <text x="380" y="494" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c" font-family="system-ui,sans-serif">Co-working</text>
              <text x="120" y="480" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2563eb" font-family="system-ui,sans-serif">Market</text>
              <text x="120" y="494" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2563eb" font-family="system-ui,sans-serif">Access</text>
              <text x="16"  y="230" text-anchor="middle" font-size="9.5" font-weight="700" fill="#16a34a" font-family="system-ui,sans-serif">Invest-</text>
              <text x="16"  y="244" text-anchor="middle" font-size="9.5" font-weight="700" fill="#16a34a" font-family="system-ui,sans-serif">ment</text>
              <text x="117" y="42"  text-anchor="middle" font-size="9.5" font-weight="700" fill="#0891b2" font-family="system-ui,sans-serif">Founder</text>
              <text x="117" y="56"  text-anchor="middle" font-size="9.5" font-weight="700" fill="#0891b2" font-family="system-ui,sans-serif">Community</text>
            </svg>
          </div>

          <!-- Offering cards -->
          <div class="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="offer in offerings" :key="offer.title"
              class="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 text-xl shadow-sm"
                :style="{ backgroundColor: offer.color }">{{ offer.emoji }}</div>
              <div>
                <h4 class="font-bold text-gray-900 text-sm mb-1 group-hover:text-teal-700 transition-colors">{{ offer.title }}</h4>
                <p class="text-gray-500 text-xs leading-relaxed">{{ offer.description }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── Why IDRP? ─────────────────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">The IDRP Difference</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Why IDRP?</h2>
          <p class="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">More than an incubator, IDRP is a strategic partner in your startup journey.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-50 hover:bg-teal-700 border border-gray-100 rounded-2xl p-7 transition-all duration-300 cursor-default group">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold mb-5 bg-teal-100 text-teal-700">01</div>
            <div class="text-2xl mb-4">🔓</div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">Open Incubation Model</h3>
            <p class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors">Flexible, founder-friendly support without rigid timelines or constraints. We adapt to your pace and needs.</p>
          </div>
          <div class="bg-gray-50 hover:bg-teal-700 border border-gray-100 rounded-2xl p-7 transition-all duration-300 cursor-default group">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold mb-5 bg-teal-100 text-teal-700">02</div>
            <div class="text-2xl mb-4">🚀</div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">Focus on Future-Driven Sectors</h3>
            <p class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors">Driving innovation across HealthTech, MedTech, FinTech, AgriTech, AI, DeepTech, and more.</p>
          </div>
          <div class="bg-gray-50 hover:bg-teal-700 border border-gray-100 rounded-2xl p-7 transition-all duration-300 cursor-default group">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold mb-5 bg-teal-100 text-teal-700">03</div>
            <div class="text-2xl mb-4">📈</div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">Programs Built for Growth</h3>
            <p class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors">Structured incubation and acceleration programs designed to take you from idea to scale.</p>
          </div>
          <div class="bg-gray-50 hover:bg-teal-700 border border-gray-100 rounded-2xl p-7 transition-all duration-300 cursor-default group">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold mb-5 bg-teal-100 text-teal-700">04</div>
            <div class="text-2xl mb-4">🏛️</div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">Access to Government Support</h3>
            <p class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors">Backed by DST-TBI, SISFS, and NIDHI-SSS, with recognition from leading ecosystem bodies.</p>
          </div>
          <div class="bg-gray-50 hover:bg-teal-700 border border-gray-100 rounded-2xl p-7 transition-all duration-300 cursor-default group">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold mb-5 bg-teal-100 text-teal-700">05</div>
            <div class="text-2xl mb-4">🏢</div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">World-Class Infrastructure</h3>
            <p class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors">55,000 sq. ft. of fully equipped, plug-and-play workspace designed for productivity.</p>
          </div>
          <div class="bg-gray-50 hover:bg-teal-700 border border-gray-100 rounded-2xl p-7 transition-all duration-300 cursor-default group">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold mb-5 bg-teal-100 text-teal-700">06</div>
            <div class="text-2xl mb-4">🌐</div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">Strong Ecosystem Network</h3>
            <p class="text-gray-500 group-hover:text-teal-100 text-sm leading-relaxed transition-colors">A thriving community of founders, mentors, investors, and partners supporting your journey.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Our Vision & Approach ─────────────────────────────────── -->
    <section class="py-24 px-6 md:px-16 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-6">
          <span class="text-teal-600 font-semibold text-sm uppercase tracking-widest">How We Think</span>
          <h2 class="text-4xl font-bold text-gray-900 mt-2">Our Vision &amp; Approach</h2>
        </div>
        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          At IDRP, we go beyond supporting startups. We partner with them, committed to building a founder-first ecosystem where innovation thrives through empathy, collaboration, and strong networks.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-300">
            <div class="h-52 bg-gradient-to-br from-teal-500 to-cyan-400 relative overflow-hidden">
              <img :src="'/vision-resources.jfif'" alt="Resources" class="w-full h-full object-cover" onerror="this.style.display='none'" />
              <span class="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">Resources</span>
            </div>
            <div class="p-7">
              <div class="text-2xl mb-3">⚡</div>
              <h3 class="text-lg font-bold text-gray-900 mb-3">Enabling Entrepreneurs with the Right Resources</h3>
              <p class="text-gray-500 text-sm leading-relaxed">We create an environment that encourages founders to think differently. With access to mentorship, funding, market connections, and legal/IP support, we empower startups to move forward with confidence.</p>
            </div>
          </div>
          <div class="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-300">
            <div class="h-52 bg-gradient-to-br from-blue-500 to-indigo-400 relative overflow-hidden">
              <img :src="'/vision-community.jfif'" alt="Community" class="w-full h-full object-cover" onerror="this.style.display='none'" />
              <span class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Community</span>
            </div>
            <div class="p-7">
              <div class="text-2xl mb-3">🤝</div>
              <h3 class="text-lg font-bold text-gray-900 mb-3">Building a Strong Entrepreneurial Community</h3>
              <p class="text-gray-500 text-sm leading-relaxed">IDRP is more than a workspace. It is a collaborative ecosystem where founders learn from each other, grow together, and receive continuous support throughout their journey.</p>
            </div>
          </div>
          <div class="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-300">
            <div class="h-52 bg-gradient-to-br from-orange-500 to-amber-400 relative overflow-hidden">
              <img :src="'/vision-innovation.jfif'" alt="Innovation" class="w-full h-full object-cover" onerror="this.style.display='none'" />
              <span class="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">Innovation</span>
            </div>
            <div class="p-7">
              <div class="text-2xl mb-3">💡</div>
              <h3 class="text-lg font-bold text-gray-900 mb-3">Empowering Tech-Driven Innovation</h3>
              <p class="text-gray-500 text-sm leading-relaxed">Through workshops, training, and mentorship, we enable startups to solve real-world challenges. By connecting them with industry and government partners, we contribute to building a self-reliant India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-16 px-6 md:px-16 bg-gradient-to-r from-teal-700 to-cyan-600">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 class="text-2xl font-bold text-white">Ready to be part of the IDRP story?</h3>
          <p class="text-teal-100 mt-2">Join a community of founders building India's deep-tech future.</p>
        </div>
        <div class="flex gap-4 shrink-0">
          <router-link to="/apply/resident-incubation" class="bg-white text-teal-800 font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm shadow-lg">Apply Now</router-link>
          <router-link to="/contact" class="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition-colors text-sm">Get in Touch</router-link>
        </div>
      </div>
    </section>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'

const timeline = [
  { year: '2010', milestone: 'Began our journey under the DST–TBI initiative, laying the foundation for deep-tech entrepreneurship in Karnataka.', tag: 'Foundation', color: '#0d9488' },
  { year: '2011', milestone: 'Expanded to a sector-agnostic model to empower startups across domains — from healthcare to space tech.', tag: 'Expansion', color: '#0891b2' },
  { year: '2012', milestone: 'Received DST NIDHI–SSS support, strengthening our capacity to mentor and fund early-stage ventures.', tag: 'Government Support', color: '#7c3aed' },
  { year: '2014', milestone: 'Backed high-potential technology ventures, catalysing our first cohort of product-driven deep-tech startups.', tag: 'First Cohort', color: '#ea580c' },
  { year: '2019', milestone: 'Introduced our flagship accelerator program — a structured, intensive track for startups ready to scale fast.', tag: 'Accelerator Launch', color: '#16a34a' },
  { year: '2022', milestone: 'Selected for the Startup India Seed Fund Scheme (SISFS), unlocking seed capital for promising early-stage founders.', tag: 'SISFS Selection', color: '#be185d' },
  { year: '2023', milestone: 'Recognized among the leading accelerators in Karnataka by KDEM — a testament to our growing ecosystem impact.', tag: 'KDEM Recognition', color: '#1d4ed8' },
]

const offerings = [
  { title: 'Cohort Programs',             description: 'Structured batch-based programs with peer learning, expert sessions, and milestone-driven growth.', emoji: '👥', color: '#0d9488' },
  { title: 'Mentoring & Masterclasses',   description: 'One-on-one mentoring from industry veterans plus focused masterclasses on critical startup skills.', emoji: '🎓', color: '#dc2626' },
  { title: 'Infrastructure & Co-working', description: 'State-of-the-art labs, dedicated desks, meeting rooms, and prototyping facilities on campus.', emoji: '🏢', color: '#ea580c' },
  { title: 'Market Access',               description: 'Strategic connections to enterprise customers, distribution partners, and global market entry support.', emoji: '🌐', color: '#2563eb' },
  { title: 'Investment',                  description: 'Seed funding, grant facilitation, and warm introductions to angel investors and VCs.', emoji: '💰', color: '#16a34a' },
  { title: 'Founder Community',           description: 'A vibrant network of founders, alumni, and ecosystem builders who collaborate and grow together.', emoji: '🤝', color: '#0891b2' },
]
</script>