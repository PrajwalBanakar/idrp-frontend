# IIIT Dharwad

IDRP Application code


```
idrp-frontend
├─ .prettierrc.json
├─ env.d.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ about-hero.jfif
│  ├─ about-intro.jfif
│  ├─ advisory-board-hero.jfif
│  ├─ advisory-karthik.jfif
│  ├─ advisory-poyni.jfif
│  ├─ apply-hero.jfif
│  ├─ board-deepak.jfif
│  ├─ board-hero.jfif
│  ├─ board-prasanna.jfif
│  ├─ business-anand.jfif
│  ├─ business-mallikarjun.jfif
│  ├─ cbde-hero.jfif
│  ├─ cbde-intro.jfif
│  ├─ cbde-value.jfif
│  ├─ cif-hero.jfif
│  ├─ cif-intro.jfif
│  ├─ cif-value.jfif
│  ├─ consulting-hero.jfif
│  ├─ faculty-abdul.jfif
│  ├─ faculty-anushree.jfif
│  ├─ faculty-girish.jfif
│  ├─ faculty-jagadish.jfif
│  ├─ faculty-krishnendu.jfif
│  ├─ faculty-manjunath.jfif
│  ├─ faculty-nataraj.jfif
│  ├─ faculty-prakash.jfif
│  ├─ faculty-rajesh.jfif
│  ├─ faculty-sandesh.jfif
│  ├─ faculty-shirshendu.jfif
│  ├─ faculty-sibasankar.jfif
│  ├─ faculty-sunil.jfif
│  ├─ faculty-suvadip.jfif
│  ├─ faculty-vivekraj.jfif
│  ├─ hero1.jfif
│  ├─ hero2.jfif
│  ├─ hero3.jfif
│  ├─ idrp.jfif
│  ├─ iiitd.webp
│  ├─ incubation-hero.jfif
│  ├─ incubation-intro.jfif
│  ├─ incubation-value.jfif
│  ├─ industry-research-hero.jfif
│  ├─ investment-committee-hero.jfif
│  ├─ investor-matchmaking-hero.jfif
│  ├─ matchmaking-hero.jfif
│  ├─ mentors-hero.jfif
│  ├─ nain-hero.jfif
│  ├─ nain-intro.jfif
│  ├─ nain-value.jfif
│  ├─ partners-hero.jfif
│  ├─ prototype-development-hero.jfif
│  ├─ quantum-ai-hero.jfif
│  ├─ quantum-ai-intro.jfif
│  ├─ quantum-ai-value.jfif
│  ├─ resources-hero.jfif
│  ├─ services.jpg
│  ├─ startup-matchmaking-hero.jfif
│  ├─ team-darshana.jpeg
│  ├─ team-hero.jfif
│  ├─ team-lokesh.jpeg
│  ├─ team-neha.jpeg
│  ├─ team-rakshata.jpeg
│  ├─ team-ravi.jpeg
│  ├─ team-reshma.jpeg
│  ├─ team-sunita.jpeg
│  ├─ technical-education-academy-hero.jfif
│  ├─ technology-preetham.jfif
│  ├─ vision-community.jfif
│  ├─ vision-innovation.jfif
│  └─ vision-resources.jfif
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  ├─ components
│  │  ├─ AppLayout.vue
│  │  ├─ courses
│  │  ├─ events
│  │  │  ├─ EventCard.vue
│  │  │  └─ EventsSection.vue
│  │  ├─ home
│  │  │  ├─ ApproachSection.vue
│  │  │  ├─ AwardsSection.vue
│  │  │  ├─ CourseSection.vue
│  │  │  ├─ CTASection.vue
│  │  │  ├─ HeroSection.vue
│  │  │  ├─ ImpactSection.vue
│  │  │  ├─ PartnersSection.vue
│  │  │  ├─ ProgramsSection.vue
│  │  │  ├─ ServicesSection.vue
│  │  │  └─ SuccessStoriesSection.vue
│  │  ├─ partners
│  │  │  ├─ PartnerCard.vue
│  │  │  ├─ PartnerFormSection.vue
│  │  │  ├─ PartnersGridSection.vue
│  │  │  ├─ PartnersHeroSection.vue
│  │  │  └─ PartnersIntroSection.vue
│  │  └─ startups
│  │     ├─ StartupCard.vue
│  │     ├─ StartupsCTASection.vue
│  │     ├─ StartupsHeroSection.vue
│  │     ├─ StartupsIntroSection.vue
│  │     └─ StartupsPortfolioSection.vue
│  ├─ data
│  │  ├─ courses.ts
│  │  ├─ events.ts
│  │  ├─ home.ts
│  │  ├─ newsletters.ts
│  │  ├─ partners.ts
│  │  └─ startups.ts
│  ├─ main.ts
│  ├─ router
│  │  └─ index.ts
│  ├─ services
│  ├─ stores
│  │  └─ counter.ts
│  ├─ style.css
│  ├─ types
│  │  ├─ courses.ts
│  │  ├─ events.ts
│  │  └─ partners.ts
│  └─ views
│     ├─ AboutView.vue
│     ├─ AccelerationView.vue
│     ├─ AccessFundingView.vue
│     ├─ AdvisoryBoardView.vue
│     ├─ ApplyView.vue
│     ├─ BusinessServicesView.vue
│     ├─ CbdeView.vue
│     ├─ CifView.vue
│     ├─ CommunityMembershipApplyView.vue
│     ├─ ConsultingView.vue
│     ├─ ContactView.vue
│     ├─ CourseDetailView.vue
│     ├─ CoursesView.vue
│     ├─ CoWorkingView.vue
│     ├─ EventDetailView.vue
│     ├─ EventRegistrationView.vue
│     ├─ EventsView.vue
│     ├─ FDPApplyView.vue
│     ├─ FDPView.vue
│     ├─ HomeView.vue
│     ├─ IETApplyView.vue
│     ├─ IETView.vue
│     ├─ IncubationView.vue
│     ├─ IndustryResearchView.vue
│     ├─ InvestmentCommitteeView.vue
│     ├─ InvestorMatchmakingFormView.vue
│     ├─ MarketConnectsView.vue
│     ├─ MatchmakingView.vue
│     ├─ MentorsView.vue
│     ├─ NainView.vue
│     ├─ NewsletterDetailView.vue
│     ├─ OnlineMTechApplyView.vue
│     ├─ OnlineMTechView.vue
│     ├─ OurBoardView.vue
│     ├─ OurPartnersView.vue
│     ├─ OurTeamView.vue
│     ├─ PreIncubationView.vue
│     ├─ PrototypeDevelopmentView.vue
│     ├─ QuantumAIView.vue
│     ├─ ResourcesView.vue
│     ├─ StartupMatchmakingFormView.vue
│     ├─ StartupsView.vue
│     ├─ TechnicalEducationAcademyView.vue
│     ├─ ThreeDWApplyView.vue
│     └─ ThreeDWView.vue
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```