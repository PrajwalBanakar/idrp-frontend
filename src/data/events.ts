import type { EventItem } from '@/types/events'

// ─────────────────────────────────────────────
// PAGE CONTENT
// ─────────────────────────────────────────────

export const eventsHero = {
  eyebrow: 'Community',
  title: 'Events',
  image: '/hero3.jfif',
  imageAlt: 'Events',
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
  title: 'Want to host an event at IDRP?',
  description: 'Reach out to us about our event spaces and auditorium.',
  buttonLabel: 'Contact Us',
  buttonTo: '/contact',
}

// ─────────────────────────────────────────────
// EVENTS DATA
// ─────────────────────────────────────────────

export const events: EventItem[] = [
  {
    id: 1,
    slug: 'deep-tech-demo-day-cohort-12',
    title: 'Deep-Tech Demo Day – Cohort 12',
    category: 'Demo Day',
    description:
      'Watch the latest cohort of IDRP startups pitch their innovations to a curated audience of investors, corporate partners, and ecosystem leaders.',
    fullDescription:
      'Deep-Tech Demo Day brings together the latest IDRP cohort to showcase breakthrough ideas, prototypes, and startup journeys. The event is designed to create meaningful interactions between founders, investors, industry experts, mentors, and strategic partners. Attendees will get a close look at product demonstrations, hear startup pitches, and explore collaboration and investment opportunities across emerging deep-tech domains.',
    date: 'April 18, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    mode: 'Offline',
    audience: 'Startups, Investors, Mentors, Industry Partners',
    organiser: 'IDRP',
    image: '/event-demoday.jfif',
    fallbackBg: 'from-teal-600 to-cyan-500',
    registerUrl: '#',
    isUpcoming: true,
    highlights: [
      'Live startup pitches from Cohort 12 founders',
      'Product demos and innovation showcases',
      'Networking with investors and ecosystem leaders',
      'Opportunities for mentoring and collaboration',
    ],
    agenda: [
      {
        time: '10:00 AM',
        title: 'Registration & Welcome Networking',
        description: 'Attendee check-in followed by informal networking.',
      },
      {
        time: '10:30 AM',
        title: 'Opening Remarks',
        description: 'Introduction to the cohort and event objectives.',
      },
      {
        time: '11:00 AM',
        title: 'Startup Demo Showcase',
        description: 'Selected startups present their solutions and demos.',
      },
      {
        time: '12:15 PM',
        title: 'Mentor & Investor Interaction',
        description: 'Open interaction with founders, mentors, and investors.',
      },
    ],
    speakers: [
      {
        name: 'IDRP Leadership Team',
        role: 'Host',
        bio: 'Welcome address and ecosystem overview.',
      },
      {
        name: 'Invited Investor Panel',
        role: 'Guest Reviewers',
        bio: 'Feedback and interaction with participating startups.',
      },
    ],
  },
  {
    id: 2,
    slug: 'startup-masterclass-fundraising-and-valuation',
    title: 'Startup Masterclass: Fundraising & Valuation',
    category: 'Masterclass',
    description:
      'A focused session with leading investors and CFOs on how to prepare for your Series A, structure your equity, and navigate the fundraising process.',
    fullDescription:
      'This masterclass is designed for founders who are preparing for growth and need practical clarity on startup finance, valuation, investor expectations, and fundraising readiness. Participants will gain insights into cap tables, fundraising milestones, common mistakes, and how to position their startup effectively in investor conversations.',
    date: 'April 25, 2026',
    time: '2:00 PM – 5:00 PM',
    location: 'IDRP Board Room, Dharwad',
    mode: 'Offline',
    audience: 'Founders, Startup Teams, Early-Stage Entrepreneurs',
    organiser: 'IDRP',
    image: '/event-masterclass.jfif',
    fallbackBg: 'from-blue-600 to-indigo-500',
    registerUrl: '#',
    isUpcoming: true,
    highlights: [
      'Practical overview of fundraising stages',
      'Valuation frameworks for early-stage startups',
      'Founder mistakes to avoid during investor conversations',
      'Live Q&A with experts',
    ],
    agenda: [
      {
        time: '2:00 PM',
        title: 'Welcome & Session Context',
      },
      {
        time: '2:20 PM',
        title: 'Fundraising Readiness for Startups',
      },
      {
        time: '3:00 PM',
        title: 'Valuation Basics & Equity Structuring',
      },
      {
        time: '4:00 PM',
        title: 'Case Discussions & Q&A',
      },
    ],
    speakers: [
      {
        name: 'Guest Investor Panel',
        role: 'Industry Experts',
        bio: 'Practical insights from the startup funding ecosystem.',
      },
    ],
  },
  {
    id: 3,
    slug: 'founders-mixer-q2-2026',
    title: 'Founders Mixer – Q2 2026',
    category: 'Networking',
    description:
      'An evening of curated networking for founders, mentors, and investors across the IDRP ecosystem. Build new connections and strengthen existing ones.',
    fullDescription:
      'Founders Mixer is designed to strengthen the startup community by bringing together founders, mentors, investors, and collaborators in an informal but curated networking environment. The session encourages relationship building, peer learning, and future collaboration across the IDRP ecosystem.',
    date: 'May 8, 2026',
    time: '6:00 PM – 9:00 PM',
    location: 'IDRP Campus, Dharwad',
    mode: 'Offline',
    audience: 'Founders, Mentors, Investors',
    organiser: 'IDRP',
    image: '/event-mixer.jfif',
    fallbackBg: 'from-violet-600 to-purple-500',
    registerUrl: '#',
    isUpcoming: true,
    highlights: [
      'Curated startup networking',
      'Mentor and investor participation',
      'Informal founder discussions',
      'Collaboration opportunities',
    ],
    agenda: [
      {
        time: '6:00 PM',
        title: 'Welcome & Check-in',
      },
      {
        time: '6:30 PM',
        title: 'Founder Introductions',
      },
      {
        time: '7:15 PM',
        title: 'Networking Session',
      },
      {
        time: '8:15 PM',
        title: 'Open Conversations & Dinner',
      },
    ],
  },
  {
    id: 4,
    slug: 'ip-and-legal-clinic-for-startups',
    title: 'IP & Legal Clinic for Startups',
    category: 'Workshop',
    description:
      'Get your startup IP strategy right. Expert IP attorneys will guide you through patents, trademarks, and legal structures in a one-on-one clinic format.',
    fullDescription:
      'This clinic helps startup teams understand the fundamentals of intellectual property, legal structuring, trademarks, patents, and compliance. It is designed as a practical interaction session with experts so founders can identify next steps for protecting their innovations.',
    date: 'May 15, 2026',
    time: '10:00 AM – 12:00 PM',
    location: 'Online (Zoom)',
    mode: 'Online',
    audience: 'Startup Founders, Innovators, Student Entrepreneurs',
    organiser: 'IDRP',
    image: '/event-ipclinic.jfif',
    fallbackBg: 'from-orange-500 to-amber-400',
    registerUrl: '#',
    isUpcoming: true,
    highlights: [
      'Introduction to startup IP strategy',
      'Trademark and patent basics',
      'Legal structuring guidance',
      'One-to-one expert interactions',
    ],
    agenda: [
      {
        time: '10:00 AM',
        title: 'Opening & Context',
      },
      {
        time: '10:20 AM',
        title: 'IP Basics for Startups',
      },
      {
        time: '11:00 AM',
        title: 'Legal Structures & Compliance',
      },
      {
        time: '11:30 AM',
        title: 'Q&A / Expert Clinic',
      },
    ],
  },
  {
    id: 5,
    slug: 'gtm-strategy-bootcamp',
    title: 'GTM Strategy Bootcamp',
    category: 'Bootcamp',
    description:
      'A hands-on full-day bootcamp on building your go-to-market strategy, targeting the right customer segments, and driving early traction.',
    fullDescription:
      'This bootcamp is a practical session for startups to shape their go-to-market strategy with clarity. Participants will work through positioning, customer segmentation, traction planning, and early market entry frameworks relevant to startup growth.',
    date: 'May 22, 2026',
    time: '9:00 AM – 5:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    mode: 'Offline',
    audience: 'Startup Teams, Early-Stage Founders',
    organiser: 'IDRP',
    image: '/event-gtm.jfif',
    fallbackBg: 'from-rose-600 to-pink-500',
    registerUrl: '#',
    isUpcoming: true,
    highlights: [
      'Go-to-market strategy fundamentals',
      'Customer segment identification',
      'Hands-on startup exercises',
      'Early traction planning',
    ],
    agenda: [
      {
        time: '9:00 AM',
        title: 'Bootcamp Kickoff',
      },
      {
        time: '10:00 AM',
        title: 'Customer Segments & Positioning',
      },
      {
        time: '1:00 PM',
        title: 'GTM Design Workshop',
      },
      {
        time: '3:30 PM',
        title: 'Traction Planning & Review',
      },
    ],
  },
  {
    id: 101,
    slug: 'idrp-annual-startup-showcase-2025',
    title: 'IDRP Annual Startup Showcase 2025',
    category: 'Showcase',
    description:
      'Over 40 startups presented their innovations to 200+ attendees including investors, corporates, and government representatives.',
    fullDescription:
      'The annual showcase brought together a wide cross-section of the entrepreneurial ecosystem, featuring startup exhibits, presentations, networking opportunities, and ecosystem discussions. The event highlighted the progress of incubated ventures and created a strong platform for partnerships and visibility.',
    date: 'December 10, 2025',
    time: '10:00 AM – 4:00 PM',
    location: 'IDRP Campus, Dharwad',
    mode: 'Offline',
    audience: 'Founders, Students, Investors, Partners',
    organiser: 'IDRP',
    image: '/event-showcase25.jfif',
    fallbackBg: 'from-gray-400 to-gray-500',
    isUpcoming: false,
    highlights: [
      '40+ startup showcases',
      'Strong investor and ecosystem participation',
      'Corporate and government engagement',
      'Live networking and product displays',
    ],
    agenda: [
      {
        time: '10:00 AM',
        title: 'Opening Ceremony',
      },
      {
        time: '11:00 AM',
        title: 'Startup Exhibit Walkthrough',
      },
      {
        time: '1:00 PM',
        title: 'Networking Lunch',
      },
      {
        time: '2:00 PM',
        title: 'Partner & Investor Interactions',
      },
    ],
    speakers: [
      {
        name: 'IDRP Ecosystem Representatives',
        role: 'Hosts and Coordinators',
      },
    ],
  },
  {
    id: 102,
    slug: 'women-in-tech-and-entrepreneurship-summit',
    title: 'Women in Tech & Entrepreneurship Summit',
    category: 'Summit',
    description:
      'A day-long summit celebrating women founders and changemakers, featuring keynotes, panels, and networking across Karnataka.',
    fullDescription:
      'This summit celebrated women innovators, founders, and ecosystem enablers through sessions, panels, networking, and stories of impact from across the entrepreneurship community.',
    date: 'November 18, 2025',
    time: '10:00 AM – 5:00 PM',
    location: 'IDRP Auditorium, Dharwad',
    mode: 'Offline',
    audience: 'Women Founders, Students, Mentors, Ecosystem Leaders',
    organiser: 'IDRP',
    image: '/event-womenintech.jfif',
    fallbackBg: 'from-purple-400 to-fuchsia-400',
    isUpcoming: false,
    highlights: [
      'Keynotes from women leaders',
      'Founder stories and panels',
      'Networking across Karnataka',
    ],
  },
  {
    id: 103,
    slug: 'investor-connect-night-q3-2025',
    title: 'Investor Connect Night – Q3 2025',
    category: 'Networking',
    description:
      'An exclusive evening connecting 25 curated startups with 15 angel investors and seed fund representatives.',
    fullDescription:
      'Investor Connect Night created a focused environment for startups and investors to interact through curated meetings, startup introductions, and informal networking opportunities.',
    date: 'September 5, 2025',
    time: '6:00 PM – 9:00 PM',
    location: 'IDRP Campus, Dharwad',
    mode: 'Offline',
    audience: 'Startups, Investors',
    organiser: 'IDRP',
    image: '/event-investornight.jfif',
    fallbackBg: 'from-teal-400 to-cyan-400',
    isUpcoming: false,
    highlights: [
      'Curated investor-founder interactions',
      'Angel and seed fund participation',
    ],
  },
  {
    id: 104,
    slug: 'startup-school-graduation-batch-8',
    title: 'Startup School Graduation – Batch 8',
    category: 'Graduation',
    description:
      'Batch 8 of IDRP Startup School graduates, celebrating their milestones with mentors, families, and ecosystem leaders.',
    fullDescription:
      'The graduation event celebrated the achievements of Startup School participants, marking their journey with mentors, ecosystem leaders, and supporters.',
    date: 'August 20, 2025',
    time: '11:00 AM – 1:00 PM',
    location: 'IDRP Campus, Dharwad',
    mode: 'Offline',
    audience: 'Students, Mentors, Startup Teams, Families',
    organiser: 'IDRP',
    image: '/event-graduation.jfif',
    fallbackBg: 'from-amber-400 to-orange-400',
    isUpcoming: false,
    highlights: [
      'Graduation ceremony',
      'Mentor recognition',
      'Startup milestone celebration',
    ],
  },
  {
    id: 105,
    slug: 'deep-tech-hackathon-2025',
    title: 'Deep-Tech Hackathon 2025',
    category: 'Hackathon',
    description:
      '48-hour hackathon with 120+ participants across AI, IoT, and Blockchain tracks. Winning teams received seed grants and incubation offers.',
    fullDescription:
      'This hackathon brought together student innovators and startup teams for an intensive challenge focused on AI, IoT, and blockchain. It encouraged innovation, collaboration, and prototype building.',
    date: 'July 12, 2025',
    time: '9:00 AM – 6:00 PM',
    location: 'IDRP Campus, Dharwad',
    mode: 'Offline',
    audience: 'Students, Innovators, Startup Teams',
    organiser: 'IDRP',
    image: '/event-hackathon.jfif',
    fallbackBg: 'from-blue-400 to-indigo-400',
    isUpcoming: false,
    highlights: [
      '48-hour innovation challenge',
      'AI, IoT, and Blockchain tracks',
    ],
  },
  {
    id: 106,
    slug: 'kdem-innovation-day-2025',
    title: 'KDEM Innovation Day 2025',
    category: 'Conference',
    description:
      'IDRP participated in the Karnataka Digital Economy Mission innovation showcase, representing 12 deep-tech startups.',
    fullDescription:
      'KDEM Innovation Day offered a larger platform for showcasing startup innovation, ecosystem networking, and state-level visibility for deep-tech ventures supported by IDRP.',
    date: 'June 3, 2025',
    time: '10:00 AM – 4:00 PM',
    location: 'Bengaluru, Karnataka',
    mode: 'Offline',
    audience: 'Startups, Government, Industry, Ecosystem Leaders',
    organiser: 'IDRP',
    image: '/event-kdem.jfif',
    fallbackBg: 'from-green-400 to-teal-400',
    isUpcoming: false,
    highlights: [
      'State-level startup showcase',
      'Deep-tech ecosystem representation',
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