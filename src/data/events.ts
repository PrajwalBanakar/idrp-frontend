import type { EventItem } from '@/types/events'

// ─────────────────────────────────────────────
// PAGE CONTENT
// ─────────────────────────────────────────────

export const eventsHero = {
  eyebrow: 'Community',
  title: 'Events',
  image: '/hero3.jfif',
  imageAlt: 'IDRP community events',
}

export const eventsSections = {
  upcoming: {
    eyebrow: "What's Next",
    title: 'Upcoming Events',
  },
  past: {
    eyebrow: 'Archive',
    title: 'Past Events',
  },
}

export const eventsCta = {
  title: 'Want to host an event with IDRP?',
  description:
    'Reach out to us for collaborations, hackathons, showcases, workshops, and community events.',
  buttonLabel: 'Contact Us',
  buttonTo: '/contact',
}

// ─────────────────────────────────────────────
// EVENTS DATA
// ─────────────────────────────────────────────

export const events: EventItem[] = [
  {
    id: 1,
    slug: 'deep-tech-demo-day-2026',
    title: 'Deep-Tech Demo Day 2026',
    category: 'Showcase',
    description:
      'An upcoming showcase where startups and innovators present their solutions, demos, and progress to mentors, partners, and ecosystem stakeholders.',
    date: 'April 18, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    mode: 'Offline',
    audience: 'Startups, Students, Mentors, Industry Partners',
    organiser: 'IDRP',
    image: '',
    fallbackBg: 'from-teal-600 to-cyan-500',
    registerUrl: '#',
    isUpcoming: true,
    highlights: [
      'Startup demos and product showcases',
      'Networking with mentors and ecosystem partners',
      'Interaction with founders and innovators',
    ],
  },
  {
    id: 2,
    slug: 'hack2future-hackathon-2026',
    title: 'Hack2Future Hackathon 2026',
    category: 'Hackathon',
    description:
      'A two-day hackathon held on 4th and 5th April 2026, sponsored by IDRP, bringing together students and innovators for collaborative problem-solving and prototype development.',
    date: 'April 4–5, 2026',
    time: '2 Days',
    location: 'IIIT Dharwad',
    mode: 'Offline',
    audience: 'Students, Innovators, Developers, Startup Aspirants',
    organiser: 'Hack2Future Team • Sponsored by IDRP',
    image: '/hack2future/DSC_0300.JPG',
    fallbackBg: 'from-slate-700 to-teal-600',
    isUpcoming: false,
    highlights: [
      'Two-day hackathon with student participation',
      'Sponsored by IDRP',
      'Mentoring, collaboration, and prototype building',
      'Final presentations and innovation showcase',
    ],
    gallery: [
      '/hack2future/1.JPG',
      '/hack2future/2.JPG',
      '/hack2future/3.JPG',
      '/hack2future/4.JPG',
    ],
  },
]

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export const getVisibleEvents = () =>
  events.filter((event) => event.visible !== false)

export const getEventById = (id: number) =>
  events.find((event) => event.id === id && event.visible !== false)

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug && event.visible !== false)

export const getUpcomingEvents = () =>
  events.filter((event) => event.isUpcoming && event.visible !== false)

export const getPastEvents = () =>
  events.filter((event) => !event.isUpcoming && event.visible !== false)