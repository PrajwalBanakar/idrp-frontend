import type { ServicePage } from '@/types/service'

export const technicalEducationAcademyPage: ServicePage = {
  slug: 'technical-education-academy',
  hero: {
    eyebrow: 'Services',
    title: 'Technical Education Academy',
    description:
      'Industry-aligned technical education, courses, workshops, and capacity building for students, faculty, and institutions.',
    image: '/academy-hero.jfif',
  },
  intro: {
    eyebrow: 'Learning & Capacity Building',
    title: 'Building Technical Depth Through Structured Learning Experiences',
    paragraphs: [
      'The Technical Education Academy delivers practical, future-ready learning opportunities across emerging technologies and applied engineering domains.',
      'Our programs include courses, workshops, bootcamps, and specialized learning pathways designed for academic and industry relevance.',
    ],
  },
  highlights: [
    {
      id: 'courses',
      title: 'Courses & Certifications',
      icon: '📘',
      tone: 'teal',
    },
    {
      id: 'bootcamps',
      title: 'Hands-on Bootcamps',
      icon: '🛠️',
      tone: 'cyan',
    },
    {
      id: 'faculty',
      title: 'Faculty Development',
      icon: '🎓',
      tone: 'amber',
    },
    {
      id: 'workshops',
      title: 'Workshops & Training',
      icon: '⚙️',
      tone: 'indigo',
    },
  ],
  stats: [
    { value: '20+', label: 'Learning Tracks' },
    { value: '1000+', label: 'Learners Engaged' },
    { value: '50+', label: 'Hands-on Sessions' },
    { value: '10+', label: 'Emerging Domains Covered' },
  ],
  cta: {
    eyebrow: 'Learn With IDRP',
    title: 'Explore Courses, Workshops, and Training Programs',
    description:
      'Join structured technical learning experiences designed for real-world readiness.',
  },
}