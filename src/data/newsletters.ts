import type { Newsletter } from '@/types/newsletter'

// ─────────────────────────────────────────────
// PAGE CONTENT
// ─────────────────────────────────────────────

export const newslettersHero = {
  eyebrow: 'Resources',
  title: 'Newsletters',
  subtitle:
    'Stay updated with startup activity, ecosystem developments, research highlights, and program milestones across IDRP.',
}

export const newslettersIntro = {
  eyebrow: 'Publications',
  title: 'Explore Our Newsletters',
  description:
    'Browse curated newsletters covering innovation, founder activity, research developments, and ecosystem signals from IDRP.',
}

// ─────────────────────────────────────────────
// NEWSLETTER DATA
// ─────────────────────────────────────────────

export const newsletters: Newsletter[] = [
  {
    id: 1,
    slug: 'idrp-innovation-digest',
    title: 'IDRP Innovation Digest',
    issue: 'Vol. 01',
    date: 'March 2026',
    description:
      'Monthly updates on startups, incubation activities, partnerships, and community initiatives.',
    preview:
      'This issue covers the latest incubation momentum across IDRP, startup progress milestones, ecosystem collaborations, and upcoming innovation opportunities for founders, researchers, and institutional partners.',
    highlights: [
      'Startup and incubation highlights from the month',
      'Partnerships, ecosystem collaborations, and institutional updates',
      'Founder opportunities, calls, and announcements',
      'Featured stories from the innovation community',
    ],
    coverGradient:
      'linear-gradient(180deg, #0f766e 0%, #115e59 45%, #0b3b39 100%)',
    pages: [
      {
        title: 'Welcome Note',
        subtitle: 'From the IDRP team',
        body: [
          'This edition captures the latest momentum across incubation, startup support, and ecosystem engagement at IDRP.',
          'We continue to strengthen the bridge between innovation, mentorship, partnerships, and founder readiness.',
        ],
        highlight: 'Building a stronger innovation ecosystem together.',
      },
      {
        title: 'Startup Progress',
        subtitle: 'Cohort developments',
        body: [
          'Startups across the current cohort have progressed through mentoring, validation, and ecosystem interactions.',
          'Several teams have advanced their prototypes, refined business models, and entered deeper discussions with potential collaborators.',
        ],
      },
      {
        title: 'Partnerships & Outreach',
        subtitle: 'Ecosystem engagement',
        body: [
          'IDRP engaged with institutional and industry partners to create stronger support pathways for founders.',
          'These collaborations are helping expand access to expertise, mentorship, and opportunity networks.',
        ],
      },
      {
        title: 'What’s Next',
        subtitle: 'Upcoming focus areas',
        body: [
          'The next phase will focus on deeper founder support, showcase opportunities, and ecosystem-led matchmaking.',
          'We also plan to create stronger visibility for program outcomes and startup journeys.',
        ],
        highlight: 'More support. More visibility. More connections.',
      },
    ],
  },
  {
    id: 2,
    slug: 'founder-community-bulletin',
    title: 'Founder Community Bulletin',
    issue: 'Vol. 02',
    date: 'Monthly Edition',
    description:
      'Highlights from founder sessions, events, opportunities, and important announcements.',
    preview:
      'A practical founder-facing issue focused on events, expert sessions, community notes, new opportunities, and signals that matter to early-stage startup teams.',
    highlights: [
      'Founder meetups and ecosystem session highlights',
      'Program opportunities and application windows',
      'Community announcements and event calendar',
      'Practical notes for early-stage startup teams',
    ],
    coverGradient:
      'linear-gradient(180deg, #1d4ed8 0%, #1e40af 45%, #172554 100%)',
    pages: [
      {
        title: 'Founder Community Update',
        subtitle: 'This month at a glance',
        body: [
          'This edition brings together the most relevant updates for founders, including events, ecosystem opportunities, and practical announcements.',
          'It is designed to help early-stage teams stay connected to the right support systems and timelines.',
        ],
      },
      {
        title: 'Events & Sessions',
        subtitle: 'Learning and networking',
        body: [
          'A series of founder-oriented sessions, meetups, and interactions were organized to support startup learning and peer exchange.',
          'These engagements created opportunities for direct feedback, inspiration, and practical exposure.',
        ],
      },
      {
        title: 'Opportunities Open',
        subtitle: 'Applications and calls',
        body: [
          'Founders are encouraged to watch out for applications, cohort calls, and relevant ecosystem entry points.',
          'Early visibility into these opportunities helps teams prepare better and respond on time.',
        ],
        highlight: 'Stay ready, stay visible, stay connected.',
      },
      {
        title: 'Founder Notes',
        subtitle: 'Practical guidance',
        body: [
          'Small operational improvements in communication, clarity, and consistency can make a major difference in founder progress.',
          'This issue encourages teams to build with discipline while staying flexible to feedback and opportunities.',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'research-innovation-circular',
    title: 'Research & Innovation Circular',
    issue: 'Vol. 03',
    date: 'Quarterly',
    description:
      'A consolidated view of ongoing research, technical developments, and collaboration opportunities.',
    preview:
      'This edition captures key research directions, translational work, innovation-oriented collaborations, and technical developments relevant to faculty, student teams, and deep-tech initiatives.',
    highlights: [
      'Research themes and current technical developments',
      'Faculty and student innovation activity snapshots',
      'Calls for collaboration and translational opportunities',
      'Deep-tech ecosystem notes and research outlook',
    ],
    coverGradient:
      'linear-gradient(180deg, #4338ca 0%, #3730a3 45%, #1e1b4b 100%)',
    pages: [
      {
        title: 'Research Snapshot',
        subtitle: 'Quarterly overview',
        body: [
          'This edition presents a consolidated picture of active research directions, technical work, and innovation-linked developments.',
          'It serves as a bridge between institutional research activity and broader translational opportunities.',
        ],
      },
      {
        title: 'Innovation in Motion',
        subtitle: 'From ideas to applications',
        body: [
          'Faculty and student teams continue to contribute to problem-driven innovation efforts across emerging areas.',
          'The emphasis is on meaningful research that can evolve toward prototypes, systems, and deployment opportunities.',
        ],
      },
      {
        title: 'Collaboration Outlook',
        subtitle: 'Working across boundaries',
        body: [
          'Collaboration remains central to deep-tech growth, especially where academia, startups, and industry can jointly shape outcomes.',
          'This issue highlights the value of coordinated research and innovation partnerships.',
        ],
        highlight:
          'Research becomes stronger when it moves toward translation.',
      },
      {
        title: 'What to Watch',
        subtitle: 'Emerging directions',
        body: [
          'The innovation ecosystem is increasingly shaped by interdisciplinary thinking, technical depth, and deployment relevance.',
          'Teams are encouraged to think beyond isolated outputs and toward ecosystem-linked research impact.',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'ecosystem-signals-review',
    title: 'Ecosystem Signals Review',
    issue: 'Vol. 04',
    date: 'Special Issue',
    description:
      'Signals, trends, and notable developments across startups, deep-tech, and ecosystem growth.',
    preview:
      'A strategic scan of the startup and innovation landscape, highlighting sector movement and emerging opportunities.',
    highlights: [
      'Startup ecosystem movement and trends',
      'Deep-tech opportunity areas and signals',
      'Institutional and industry collaboration patterns',
      'Strategic notes for founders and innovation teams',
    ],
    coverGradient:
      'linear-gradient(180deg, #0f766e 0%, #0e7490 45%, #164e63 100%)',
    pages: [
      {
        title: 'Reading the Ecosystem',
        subtitle: 'Why signals matter',
        body: [
          'Ecosystem signals help founders and institutions understand where momentum is building and where support needs are evolving.',
          'This special issue offers a broader view of movement across the startup and innovation landscape.',
        ],
      },
      {
        title: 'Deep-Tech Watch',
        subtitle: 'Opportunity areas',
        body: [
          'Deep-tech continues to create new opportunities where strong technical capability meets real-world relevance.',
          'The issue encourages innovation teams to observe patterns, not just events, while making strategic decisions.',
        ],
      },
      {
        title: 'Partnership Patterns',
        subtitle: 'How collaboration is changing',
        body: [
          'Institutional and industry collaboration models are becoming more outcome-oriented, practical, and ecosystem-linked.',
          'This creates better conditions for startups and research groups seeking meaningful pathways forward.',
        ],
      },
      {
        title: 'Strategic Notes',
        subtitle: 'For founders and teams',
        body: [
          'The strongest advantage often comes from being able to spot emerging movement early and act with clarity.',
          'This issue encourages teams to combine awareness with deliberate action.',
        ],
        highlight: 'Signals are useful only when they inform decisions.',
      },
    ],
  },
  {
    id: 5,
    slug: 'idrp-program-notes',
    title: 'IDRP Program Notes',
    issue: 'Vol. 05',
    date: 'Edition 2026',
    description:
      'A focused publication on programs, participation, milestones, and structured ecosystem engagement.',
    preview:
      'This issue showcases milestones, cohort movement, and institutional activity shaping the IDRP ecosystem.',
    highlights: [
      'Program milestones and cohort developments',
      'Participation updates and engagement notes',
      'Institutional initiatives',
      'Upcoming ecosystem activities',
    ],
    coverGradient:
      'linear-gradient(180deg, #059669 0%, #047857 45%, #064e3b 100%)',
    pages: [
      {
        title: 'Program Overview',
        subtitle: 'Edition 2026',
        body: [
          'This edition focuses on the structure, participation, and progress of programs shaping the IDRP ecosystem.',
          'It reflects how activity across cohorts and initiatives is building a stronger innovation environment.',
        ],
      },
      {
        title: 'Milestones Reached',
        subtitle: 'Progress across programs',
        body: [
          'Key milestones have been achieved across participation, engagement, and program movement.',
          'These signals help show that structured support and clear pathways are creating visible momentum.',
        ],
      },
      {
        title: 'Institutional Activity',
        subtitle: 'Programs in context',
        body: [
          'Institutional initiatives continue to strengthen the foundation for ecosystem growth through coordinated support and visibility.',
          'Programs become more effective when backed by sustained institutional alignment.',
        ],
      },
      {
        title: 'Looking Ahead',
        subtitle: 'Next activities',
        body: [
          'Upcoming activities will focus on deeper participation, stronger outcomes, and better ecosystem connectivity.',
          'The goal is to make each program more engaging, impactful, and future-ready.',
        ],
        highlight:
          'Programs grow stronger when participation and purpose move together.',
      },
    ],
  },
]

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export const getVisibleNewsletters = () =>
  newsletters.filter((newsletter) => newsletter.visible !== false)

export const getNewsletterBySlug = (slug: string) =>
  newsletters.find(
    (newsletter) => newsletter.slug === slug && newsletter.visible !== false,
  )