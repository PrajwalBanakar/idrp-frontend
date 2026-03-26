import type { ProgramKey, ProgramMeta } from '@/types/application'

export const programs: Record<ProgramKey, ProgramMeta> = {
  'pre-incubation': {
    title: 'Yuva Udyami',
    badge: 'Pre Incubation',
    emoji: '🌱',
    meta: 'Hybrid / Flexible · 6-12 Months · Idea to MVP Readiness',
    description: 'Apply for Yuva Udyami...',
    backLabel: 'Home',
  },
  'resident-incubation': {
    title: 'Udyami Resident Incubation',
    badge: 'Incubation',
    emoji: '🏢',
    meta: 'On-Site · 12-18 Months',
    description: 'Apply for Udyami Resident...',
    backLabel: 'Incubation',
  },
  'virtual-incubation': {
    title: 'Udyami Virtual Incubation',
    badge: 'Incubation',
    emoji: '💻',
    meta: 'Online · 6-12 Months',
    description: 'Apply for Udyami Virtual...',
    backLabel: 'Incubation',
  },
  'deep-tech-accelerator': {
    title: 'Deep-Tech Accelerator',
    badge: 'Acceleration',
    emoji: '🚀',
    meta: 'On-Site · 6 Months',
    description: 'Apply for Deep-Tech...',
    backLabel: 'Acceleration',
  },
}

export const supportOptions = [
  'Mentorship',
  'Problem / Market Validation',
  'MVP / Prototype Support',
  'Business Model Development',
  'Go-to-Market Support',
  'Funding Readiness',
  'Investor Connect',
  'Legal / Compliance Guidance',
  'Branding / Pitch Deck Support',
  'Industry / Research Connect',
]

export const evaluationPoints = [
  'Clarity of problem statement',
  'Solution strength',
  'Founder commitment',
  'Market validation',
  'Innovation depth',
  'Readiness for program',
]