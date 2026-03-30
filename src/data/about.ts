import type {
  AboutCTAContent,
  AboutHeroContent,
  AboutIntroContent,
  AboutSectionIntro,
  MissionVisionItem,
  Offering,
  OfferingsHighlight,
  Pillar,
  Reason,
  TimelineItem,
  VisionCard,
} from '@/types/about'

export const aboutHero: AboutHeroContent = {
  eyebrow: 'Who We Are',
  title: 'About IDRP',
  subtitle:
    'A pioneering deep-tech incubator at the heart of IIIT Dharwad, built to transform ideas into ventures that matter.',
  image: '/about-hero.jfif',
  imageAlt: 'About IDRP',
  minHeightClass: 'min-h-[380px]',
}

export const aboutIntro: AboutIntroContent = {
  eyebrow: 'Our Story',
  title: 'Bridging Research and Real-World Impact',
  paragraphs: [
    'IIIT Dharwad Research Park (IDRP) was established with a singular purpose — to close the gap between cutting-edge academic research and real-world innovation.',
    'Situated within the IIIT Dharwad campus, we are more than an incubator; we are a living laboratory where ideas are stress-tested, refined, and scaled.',
    'Since our inception, IDRP has been home to over 150 startups working across deep-tech domains including Artificial Intelligence, Computer Vision, Extended Reality, Blockchain, Space Tech, and more.',
    'We serve founders at every stage: from those still in the ideation phase, through teams with proven prototypes, to growth-stage companies preparing to scale nationally and internationally.',
  ],
  stats: [
    { value: '150+', label: 'Startups supported' },
    { value: '10+', label: 'Deep-tech domains' },
    { value: '1', label: 'Integrated innovation ecosystem' },
  ],
  image: '/about-intro.jfif',
  imageAlt: 'IDRP Campus',
  badgeText: 'Actively accepting applications',
}

export const missionVisionSection: AboutSectionIntro = {
  eyebrow: 'Our Purpose',
  title: 'Mission, Vision & Core Pillars',
  description:
    'Everything we do at IDRP is grounded in a clear purpose: translating innovation into impact through deep-tech entrepreneurship.',
}

export const missionVision: MissionVisionItem[] = [
  {
    title: 'Our Mission',
    description:
      'To empower innovators, researchers, and founders with the infrastructure, mentorship, and ecosystem needed to transform high-potential ideas into meaningful ventures.',
    icon: '🎯',
  },
  {
    title: 'Our Vision',
    description:
      'To become a globally respected deep-tech innovation hub that catalyzes research translation, startup growth, and societal impact through technology entrepreneurship.',
    icon: '🚀',
  },
]

export const pillars: Pillar[] = [
  {
    title: 'Research to Venture',
    description:
      'We help convert academic and technical research into startup-ready solutions with real-world relevance.',
  },
  {
    title: 'Founder-Centric Support',
    description:
      'From mentoring to market access, every program is designed around the actual journey of a founder.',
  },
  {
    title: 'Deep-Tech Focus',
    description:
      'We prioritize innovation in advanced domains where technical depth creates long-term value.',
  },
  {
    title: 'Collaborative Ecosystem',
    description:
      'We bring together academia, startups, investors, mentors, corporates, and government support systems.',
  },
]

export const timelineSection: AboutSectionIntro = {
  eyebrow: 'Our Journey',
  title: 'Growth Through Milestones',
  description:
    'From foundation to ecosystem building, IDRP has evolved step by step into a platform that supports innovation, entrepreneurship, and deep-tech venture creation.',
}

export const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Foundation of IDRP',
    description:
      'IDRP was established as a strategic initiative to foster innovation, entrepreneurship, and deep-tech venture creation within the IIIT Dharwad ecosystem.',
  },
  {
    year: '2021',
    title: 'Early Ecosystem Building',
    description:
      'The focus shifted toward building early support structures including founder outreach, startup mentoring, and research-driven innovation engagement.',
  },
  {
    year: '2022',
    title: 'Program Expansion',
    description:
      'IDRP expanded its incubation support and strengthened collaborations across innovation, academic, and industry stakeholders.',
  },
  {
    year: '2023',
    title: 'Deep-Tech Acceleration',
    description:
      'Programs began to increasingly emphasize deep-tech ventures across AI, computer vision, XR, robotics, and emerging technology domains.',
  },
  {
    year: '2024',
    title: 'Integrated Innovation Platform',
    description:
      'IDRP evolved into a broader platform for incubation, applied research, startup support, and ecosystem-driven capacity building.',
  },
]

export const offeringsSection: AboutSectionIntro = {
  eyebrow: 'What We Offer',
  title: 'Support Designed for the Startup Journey',
  description:
    'IDRP provides a connected set of services that help founders move from idea to validation, growth, and long-term scale.',
}

export const offerings: Offering[] = [
  {
    title: 'Incubation & Acceleration',
    description:
      'Structured support for startups through validation, mentoring, business strategy, and growth readiness.',
  },
  {
    title: 'Mentorship Network',
    description:
      'Access to domain experts, founders, investors, and industry professionals across technology and business.',
  },
  {
    title: 'Research & Innovation Support',
    description:
      'A platform for translating academic and technical ideas into deployable products and ventures.',
  },
  {
    title: 'Investor & Market Connect',
    description:
      'Opportunities to connect with investors, ecosystem enablers, and industry pathways for growth.',
  },
  {
    title: 'Infrastructure & Workspace',
    description:
      'Access to institutional ecosystem support, innovation facilities, and collaborative work environments.',
  },
  {
    title: 'Programs & Capacity Building',
    description:
      'Workshops, academies, and thematic programs that build technical, entrepreneurial, and innovation capability.',
  },
]

export const offeringsHighlight: OfferingsHighlight = {
  eyebrow: 'Founder Support Model',
  title: 'A connected ecosystem, not isolated services',
  description:
    'At IDRP, incubation is not treated as a single program. Founders gain access to a layered system of mentoring, research support, infrastructure, market access, and capacity building that evolves with their stage of growth.',
  stages: [
    {
      label: 'Stage 1',
      description:
        'Idea validation, research exploration, and early problem discovery.',
    },
    {
      label: 'Stage 2',
      description:
        'Product shaping, startup mentoring, and ecosystem support for traction.',
    },
    {
      label: 'Stage 3',
      description:
        'Investor readiness, market connects, and long-term venture growth pathways.',
    },
  ],
}

export const reasonsSection: AboutSectionIntro = {
  eyebrow: 'Why IDRP',
  title: 'Why Founders Build With Us',
  description:
    'IDRP combines academic depth, ecosystem access, and startup-focused support to help ambitious ideas grow into meaningful ventures.',
}

export const reasons: Reason[] = [
  {
    title: 'Backed by IIIT Dharwad',
    description:
      'Strong academic roots and an innovation-focused institutional environment give founders a meaningful launchpad.',
  },
  {
    title: 'Built for Deep-Tech',
    description:
      'We are designed for technically ambitious ideas that need patient development, expert guidance, and ecosystem support.',
  },
  {
    title: 'End-to-End Journey Support',
    description:
      'From idea validation to venture growth, we support startups across multiple stages of maturity.',
  },
  {
    title: 'Connected Ecosystem',
    description:
      'Our network spans mentors, investors, researchers, institutions, and strategic collaborators.',
  },
]

export const visionSection: AboutSectionIntro = {
  eyebrow: 'Our Philosophy',
  title: 'What Drives Us',
  description:
    'Our work is guided by a set of principles that shape how we support innovation, build ecosystems, and enable founders.',
}

export const visionCards: VisionCard[] = [
  {
    title: 'Innovation',
    description:
      'We cultivate a mindset of experimentation, creativity, and problem-solving that turns bold ideas into meaningful innovation.',
    image: '/vision-innovation.jfif',
    imageAlt: 'Innovation at IDRP',
  },
  {
    title: 'Community',
    description:
      'We believe strong ecosystems are built through collaboration among founders, researchers, mentors, and institutions.',
    image: '/vision-community.jfif',
    imageAlt: 'Community at IDRP',
  },
  {
    title: 'Resources',
    description:
      'We provide founders and innovators with access to the knowledge, networks, and support systems needed to grow.',
    image: '/vision-resources.jfif',
    imageAlt: 'Resources at IDRP',
  },
]

export const aboutCTA: AboutCTAContent = {
  eyebrow: 'Join the Ecosystem',
  title: 'Build with IDRP',
  description:
    'Whether you are a founder, researcher, mentor, partner, or investor, IDRP is designed to help meaningful innovation move forward.',
  primaryActionLabel: 'Apply Now',
  primaryActionTo: '/apply/resident-incubation',
  secondaryActionLabel: 'Contact Us',
  secondaryActionTo: '/contact',
}