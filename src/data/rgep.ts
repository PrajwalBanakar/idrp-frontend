import type { InitiativePageData } from '@/types/program'

export const rgepPage: InitiativePageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Rajiv Gandhi Entrepreneurship Program',
    subtitle: '',
    image: '/rgep/rgep-intro.jfif',
    imageAlt: 'Rajiv Gandhi Entrepreneurship Program',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Supporting innovators through the uncertainty of early-stage entrepreneurship',
    paragraphs: [
      'Rajiv Gandhi Entrepreneurship Program (RGEP) is a pivotal initiative designed to cultivate innovation and foster entrepreneurship among young and talented graduates by shifting the focus from traditional job seeking toward entrepreneurship as a viable career path.',
      'The program promotes innovation-driven economic growth in Karnataka by encouraging innovative endeavors, startup formation, job creation, and technological advancement through sustained early-stage support.',
      'RGEP supports selected innovators through a monthly stipend of Rs.25,000 for a period of 12 months, helping them navigate the ideation stage and work toward a Prototype, Minimum Viable Product (MVP), or Proof of Concept with business potential.',
    ],
    image: '/rgep/rgep-intro.jpeg',
    imageAlt: 'RGEP Overview',
  },

  value: {
    eyebrow: 'Why This Initiative?',
    title: 'How RGEP strengthens early-stage innovation journeys',
    items: [
      {
        title: 'Early-Stage Financial Support',
        description:
          'Provides selected innovators with a monthly subsistence grant of Rs.25,000 for 12 months during the ideation and exploration phase.',
      },
      {
        title: 'Innovation to MVP Pathway',
        description:
          'Encourages progress toward a prototype, MVP, or proof of concept that demonstrates business and market potential.',
      },
      {
        title: 'Structured Monitoring and Guidance',
        description:
          'Ensures innovators are attached to designated innovation hubs and receive close progress monitoring throughout the program duration.',
      },
      {
        title: 'Entrepreneurship as a Career Option',
        description:
          'Creates a meaningful alternative to conventional job seeking by supporting founders in building innovation-led ventures.',
      },
    ],
    image: '/rgep/rgep-value.jfif',
    imageAlt: 'RGEP Value',
  },

  cta: {
    eyebrow: 'Apply to RGEP',
    title: 'Take the next step in your innovation journey',
    description:
      'Connect with IDRP to explore RGEP support, application pathways, and how your idea can progress toward a prototype or MVP.',
    primaryActionLabel: 'Apply Now',
    primaryActionTo: '/apply/rgep',
    secondaryActionLabel: 'Contact Us',
    secondaryActionTo: '/contact',
  },
}

export const rgepInnovators = [
  {
    name: 'Akshay K B',
    projectTitle: 'Wellverse',
    email: 'komarlaakshay@gmail.com',
  },
  {
    name: 'Shrikrishna',
    projectTitle: 'India Centric Blockchain Forensics Platform',
    email: 'krishnakailasa2000@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shrikrishna-s',
  },
]

export const rgepHighlights = [
  {
    label: 'Innovators supported',
    value: '30',
  },
  {
    label: 'Monthly stipend',
    value: 'Rs.25,000',
  },
  {
    label: 'Support duration',
    value: '12 months',
  },
  {
    label: 'Expected outcome',
    value: 'Prototype / MVP / PoC',
  },
]

export const rgepSupportPoints = [
  'Supports ideas, innovations, and startup initiatives by students and entrepreneurs.',
  'Helps innovators survive the uncertainty of the ideation phase through sustained monthly support.',
  'Promotes innovation-driven entrepreneurship, job creation, and technological advancement in Karnataka.',
  'Connects innovators with designated innovation hubs such as K-Tech partners for structured guidance and review.',
]
