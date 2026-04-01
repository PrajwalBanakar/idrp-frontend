import type { ProgramKey, ProgramMeta } from '@/types/application'

export const programs: Record<ProgramKey, ProgramMeta> = {
  'pre-incubation': {
    slug: 'pre-incubation',
    title: 'Yuva Udyami Pre Incubation Program',
    badge: 'Pre Incubation',
    emoji: '🌱',
    meta: 'Hybrid / Flexible · 6-12 Months · Idea to MVP Readiness',
    description: 'Apply for the Yuva Udyami Pre Incubation Program to explore ideas, validate early opportunities, and build readiness for venture creation.',
    backLabel: 'Home',
  },
  'incubation': {
  slug: 'incubation',
  title: 'Udyami Incubation Program',
  badge: 'Incubation',
  emoji: '🚀',
  meta: 'Hybrid / Flexible · 6-18 Months · Idea to Growth Support',
  description:
    'Apply for the Udyami Incubation Program to access structured incubation support, mentorship, infrastructure, ecosystem connections, and funding readiness support.',
  backLabel: 'Incubation',
},
  'resident-incubation': {
    slug: 'resident-incubation',
    title: 'Udyami Resident Incubation',
    badge: 'Incubation',
    emoji: '🏢',
    meta: 'On-Site · 12-18 Months',
    description: 'Apply for Udyami Resident...',
    backLabel: 'Incubation',
  },
  'virtual-incubation': {
    slug: 'virtual-incubation',
    title: 'Udyami Virtual Incubation',
    badge: 'Incubation',
    emoji: '💻',
    meta: 'Online · 6-12 Months',
    description: 'Apply for Udyami Virtual...',
    backLabel: 'Incubation',
  },
  'deep-tech-accelerator': {
    slug: 'deep-tech-accelerator',
    title: 'Deep-Tech Accelerator',
    badge: 'Acceleration',
    emoji: '🚀',
    meta: 'On-Site · 6 Months',
    description: 'Apply for Deep-Tech...',
    backLabel: 'Acceleration',
  },
}

export const supportOptions: string[] = [
  'Mentorship',
  'Product Validation',
  'Prototype / MVP Support',
  'Funding Readiness',
  'Investor Connect',
  'Market Access',
  'Technical Guidance',
  'Business Strategy',
  'IP / Legal Support',
  'Workspace / Infrastructure',
]

export const evaluationPoints: string[] = [
  'Problem clarity and relevance',
  'Innovation and uniqueness of solution',
  'Feasibility of implementation',
  'Founder motivation and team strength',
  'Market potential and scalability',
  'Readiness for incubation support',
]