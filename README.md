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
│  │  ├─ about
│  │  │  ├─ AboutCTASection.vue
│  │  │  ├─ AboutHeroSection.vue
│  │  │  ├─ AboutIntroSection.vue
│  │  │  ├─ AboutMissionVisionSection.vue
│  │  │  ├─ AboutOfferingsSection.vue
│  │  │  ├─ AboutReasonsSection.vue
│  │  │  ├─ AboutTimelineSection.vue
│  │  │  └─ AboutVisionSection.vue
│  │  ├─ academy
│  │  │  ├─ AcademyAreasSection.vue
│  │  │  ├─ AcademyCTASection.vue
│  │  │  ├─ AcademyFormSection.vue
│  │  │  ├─ AcademyHeroSection.vue
│  │  │  ├─ AcademyIntroSection.vue
│  │  │  ├─ AcademyStatsSection.vue
│  │  │  ├─ CourseCard.vue
│  │  │  └─ CoursesSection.vue
│  │  ├─ AppLayout.vue
│  │  ├─ application
│  │  │  ├─ ApplicationFormSection.vue
│  │  │  ├─ ApplicationHeroSection.vue
│  │  │  └─ ApplicationSidebarSection.vue
│  │  ├─ cbde
│  │  ├─ common
│  │  │  ├─ BeneficiariesSection.vue
│  │  │  └─ FocusSection.vue
│  │  ├─ contact
│  │  │  ├─ ContactFormSection.vue
│  │  │  ├─ ContactHeroSection.vue
│  │  │  ├─ ContactInfoSection.vue
│  │  │  └─ ContactSocialLinks.vue
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
│  │  ├─ mentors
│  │  │  ├─ MentorCard.vue
│  │  │  ├─ MentorsCTASection.vue
│  │  │  ├─ MentorsGridSection.vue
│  │  │  ├─ MentorsHeroSection.vue
│  │  │  ├─ MentorsIntroSection.vue
│  │  │  └─ MentorsTabs.vue
│  │  ├─ nain
│  │  │  ├─ NainFilters.vue
│  │  │  ├─ NainHeroSection.vue
│  │  │  ├─ NainInstituteCard.vue
│  │  │  ├─ NainMentorSection.vue
│  │  │  └─ NainOverviewSection.vue
│  │  ├─ partners
│  │  │  ├─ PartnerCard.vue
│  │  │  ├─ PartnerFormSection.vue
│  │  │  ├─ PartnersGridSection.vue
│  │  │  ├─ PartnersHeroSection.vue
│  │  │  └─ PartnersIntroSection.vue
│  │  ├─ program
│  │  │  ├─ ProgramCard.vue
│  │  │  ├─ ProgramCTASection.vue
│  │  │  ├─ ProgramHeroSection.vue
│  │  │  ├─ ProgramIntroSection.vue
│  │  │  ├─ ProgramTracksSection.vue
│  │  │  └─ ProgramValueSection.vue
│  │  ├─ resources
│  │  │  ├─ MatchmakingSection.vue
│  │  │  ├─ NewsletterBookshelfSection.vue
│  │  │  ├─ ResourceCategoriesSection.vue
│  │  │  ├─ ResourcesCTASection.vue
│  │  │  ├─ ResourcesHeroSection.vue
│  │  │  └─ ResourcesIntroSection.vue
│  │  ├─ services
│  │  │  ├─ ServiceCTASection.vue
│  │  │  ├─ ServiceFormSection.vue
│  │  │  ├─ ServiceHeroSection.vue
│  │  │  ├─ ServiceHighlightsSection.vue
│  │  │  ├─ ServiceIntroSection.vue
│  │  │  └─ ServiceStatsSection.vue
│  │  ├─ startups
│  │  │  ├─ StartupCard.vue
│  │  │  ├─ StartupsCTASection.vue
│  │  │  ├─ StartupsHeroSection.vue
│  │  │  ├─ StartupsIntroSection.vue
│  │  │  └─ StartupsPortfolioSection.vue
│  │  └─ team
│  │     ├─ TeamCTASection.vue
│  │     ├─ TeamGridSection.vue
│  │     ├─ TeamHeroSection.vue
│  │     ├─ TeamIntroSection.vue
│  │     └─ TeamMemberCard.vue
│  ├─ composables
│  │  └─ useNain.ts
│  ├─ data
│  │  ├─ about.ts
│  │  ├─ application.ts
│  │  ├─ cbde.ts
│  │  ├─ cbdeExtra.ts
│  │  ├─ cif.ts
│  │  ├─ cifExtra.ts
│  │  ├─ contact.ts
│  │  ├─ courses.ts
│  │  ├─ events.ts
│  │  ├─ home.ts
│  │  ├─ incubation.ts
│  │  ├─ industryResearch.ts
│  │  ├─ investmentCommittee.ts
│  │  ├─ mentors.ts
│  │  ├─ nain.ts
│  │  ├─ newsletters.ts
│  │  ├─ partners.ts
│  │  ├─ preIncubation.ts
│  │  ├─ programCatalog.ts
│  │  ├─ quantumAI.ts
│  │  ├─ quantumAIExtra.ts
│  │  ├─ resources.ts
│  │  ├─ startups.ts
│  │  ├─ team.ts
│  │  └─ technicalEducationAcademy.ts
│  ├─ main.ts
│  ├─ router
│  │  └─ index.ts
│  ├─ services
│  ├─ stores
│  │  └─ counter.ts
│  ├─ style.css
│  ├─ types
│  │  ├─ about.ts
│  │  ├─ application.ts
│  │  ├─ contact.ts
│  │  ├─ courses.ts
│  │  ├─ events.ts
│  │  ├─ investmentCommittee.ts
│  │  ├─ mentors.ts
│  │  ├─ nain.ts
│  │  ├─ newsletter.ts
│  │  ├─ partners.ts
│  │  ├─ program.ts
│  │  ├─ resources.ts
│  │  ├─ service.ts
│  │  └─ team.ts
│  └─ views
│     ├─ AboutView.vue
│     ├─ ApplyView.vue
│     ├─ CbdeView.vue
│     ├─ CifView.vue
│     ├─ ContactView.vue
│     ├─ CourseApplyView.vue
│     ├─ CourseDetailView.vue
│     ├─ EventDetailView.vue
│     ├─ EventRegistrationView.vue
│     ├─ EventsView.vue
│     ├─ HomeView.vue
│     ├─ IncubationView.vue
│     ├─ IndustryResearchView.vue
│     ├─ InvestmentCommitteeView.vue
│     ├─ InvestorMatchmakingFormView.vue
│     ├─ MatchmakingView.vue
│     ├─ MentorsView.vue
│     ├─ NainView.vue
│     ├─ NewsletterDetailView.vue
│     ├─ OurPartnersView.vue
│     ├─ OurTeamView.vue
│     ├─ PreIncubationView.vue
│     ├─ QuantumAIView.vue
│     ├─ ResourcesView.vue
│     ├─ StartupMatchmakingFormView.vue
│     ├─ StartupsView.vue
│     └─ TechnicalEducationAcademyView.vue
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```