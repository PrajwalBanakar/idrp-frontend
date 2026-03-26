import type { ResourceCategory, MatchmakingStep } from '@/types/resources'

export const resourceCategories: ResourceCategory[] = [
  {
    key: 'blogs',
    title: 'Blogs',
    subtitle: 'Perspectives, stories, and practical insights.',
    description:
      'Explore thought pieces, founder experiences, expert opinions, and ecosystem narratives that capture practical lessons and emerging trends.',
    icon: '✍️',
    iconBgClass: 'bg-blue-600',
    textClass: 'text-blue-600',
    hoverBorderClass: 'hover:border-blue-200',
    badgeClass: 'bg-blue-50 text-blue-700',
    items: [
      {
        title: 'What Makes Startup–Investor Fit Work?',
        description:
          'A practical perspective on alignment across stage, sector, funding ask, and long-term value creation.',
        type: 'Blog',
        meta: '6 min read',
        tag: 'Matchmaking',
      },
      {
        title: 'From Idea to Incubation: Early Founder Lessons',
        description:
          'Insights from startup journeys navigating the earliest phases of building and validation.',
        type: 'Blog',
        meta: '5 min read',
        tag: 'Founders',
      },
      {
        title: 'Industry Collaboration as a Driver for Innovation',
        description:
          'How research, advisory, and ecosystem partnerships help strengthen startup and institutional outcomes.',
        type: 'Blog',
        meta: '7 min read',
        tag: 'Industry',
      },
    ],
  },

  // keep all other categories EXACTLY same (papers, reports, whitepapers)
]

export const matchmakingSteps: MatchmakingStep[] = [
  {
    step: '01',
    title: 'Profile Collection',
    description:
      'Capture startup and investor profiles including sector, stage, preferences, funding range, and strategic areas.',
  },
  {
    step: '02',
    title: 'Fit Assessment',
    description:
      'Identify relevant matches using structured criteria such as sector alignment, maturity, funding ask, and growth potential.',
  },
  {
    step: '03',
    title: 'Curated Introductions',
    description:
      'Facilitate meaningful introductions, meetings, and ecosystem touchpoints through a guided matchmaking process.',
  },
]