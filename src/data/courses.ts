import type { Course, AcademyArea, Stat, CourseOption } from '@/types/courses'
import type { CourseApplyPage } from '@/types/courses'


export const courseApplyPages: CourseApplyPage[] = [
  {
    slug: 'online-mtech',
    eyebrow: 'Apply',
    title: 'Apply for Online M.Tech Program',
    description:
      'Submit your interest for the Online M.Tech Program and our team will connect with you regarding eligibility, process, and next steps.',
    submitLabel: 'Submit Application',
    successMessage:
      'Thank you! Your Online M.Tech application has been received.',
    interestOptions: [
      'Online M.Tech Program',
    ],
  },
  {
    slug: 'iet',
    eyebrow: 'Apply',
    title: 'Apply for IET Program',
    description:
      'Submit your interest for the IET Program and our team will connect with you regarding participation and upcoming cohorts.',
    submitLabel: 'Submit Application',
    successMessage:
      'Thank you! Your IET application has been received.',
    interestOptions: [
      'IET Program',
    ],
  },
  {
    slug: 'fdp',
    eyebrow: 'Apply',
    title: 'Apply for Faculty Development Program',
    description:
      'Submit your interest for the FDP workshop and our team will connect with you regarding theme, participation, and upcoming schedules.',
    submitLabel: 'Submit Application',
    successMessage:
      'Thank you! Your FDP application has been received.',
    interestOptions: [
      'Faculty Development Program',
    ],
  },
  {
    slug: '3dw',
    eyebrow: 'Apply',
    title: 'Apply for 3DW Workshop',
    description:
      'Submit your interest for the 3DW workshop and our team will connect with you regarding themes, participation, and upcoming schedules.',
    submitLabel: 'Submit Application',
    successMessage:
      'Thank you! Your 3DW application has been received.',
    interestOptions: [
      '3DW Workshop',
    ],
  },
]

export function getCourseApplyPageBySlug(slug: string) {
  return courseApplyPages.find((page) => page.slug === slug)
}

// ─── Academy Areas ─────────────────────────────────────────

export const academyAreas: AcademyArea[] = [
  {
    title: 'Student Upskilling',
    emoji: '🎓',
    image: '/academy-students.jfif',
    bg: 'bg-teal-50',
  },
  {
    title: 'Faculty Development',
    emoji: '👩‍🏫',
    image: '/academy-faculty.jfif',
    bg: 'bg-cyan-50',
  },
  {
    title: 'Workshops & Bootcamps',
    emoji: '🛠️',
    image: '/academy-workshops.jfif',
    bg: 'bg-amber-50',
  },
  {
    title: 'Emerging Technology Training',
    emoji: '💻',
    image: '/academy-tech.jfif',
    bg: 'bg-indigo-50',
  },
  {
    title: 'Innovation Learning',
    emoji: '🚀',
    image: '/academy-innovation.jfif',
    bg: 'bg-green-50',
  },
]

// ─── Stats ─────────────────────────────────────────

export const academyStats: Stat[] = [
  { value: '100+', label: 'Training Sessions & Workshops' },
  { value: '25+', label: 'Technical Domains Covered' },
  { value: '5000+', label: 'Students, Faculty & Professionals Reached' },
  { value: '50+', label: 'Institutional & Industry Learning Partners' },
]

// ─── Course Options (Form Dropdown) ───────────────────────

export const academyOptions: CourseOption[] = [
  'Online M.Tech Program',
  'IET Program',
  'Faculty Development Program',
  '3DW Workshop',
  'Student Technical Training',
  'Industry-Oriented Workshop',
  'Customized Technical Program',
]

// ─── Courses (Core Cards + Future Detail Pages) ───────────

export const courses: Course[] = [
  {
    slug: 'online-mtech',
    title: 'Online M.Tech Program',
    duration: '2 Years',
    type: 'Postgraduate Program',
    description:
      'A structured online postgraduate program designed to build advanced capability in deep-tech, applied AI, research-oriented problem solving, and innovation-led engineering practice.',
    route: '/courses/online-mtech',
    features: [
      'Online delivery for working professionals and learners',
      'Advanced technical and research-oriented learning',
      'Industry and innovation relevance',
      'Designed for long-term capability building',
    ],

    // Future-ready detail page data
    overview:
      'The Online M.Tech program is designed for learners aiming to develop deep expertise in advanced computing, AI, and applied research with strong industry alignment.',
    eligibility: [
      'Bachelor’s degree in Engineering / Technology',
      'Working professionals preferred',
    ],
    outcomes: [
      'Strong foundation in advanced computing systems',
      'Ability to work on applied AI and research problems',
      'Industry-ready technical depth',
    ],
    curriculum: [
      'Advanced Machine Learning',
      'Distributed Systems',
      'AI Systems Engineering',
      'Capstone Research Project',
    ],
  },

  {
    slug: 'iet',
    title: 'IET Program',
    duration: '3 Months',
    type: 'Short-Term Program',
    description:
      'A focused learning track intended to provide practical exposure, applied technical grounding, and industry-facing learning for emerging innovators and professionals.',
    route: '/courses/iet',
    features: [
      'Short-duration structured engagement',
      'Practical orientation',
      'Focused skill-building',
      'Industry relevance',
    ],

    overview:
      'The IET program provides immersive short-term training aimed at bridging academic learning with real-world industry expectations.',
    outcomes: [
      'Hands-on technical exposure',
      'Improved industry readiness',
      'Applied problem-solving skills',
    ],
  },

  {
    slug: 'fdp',
    title: 'Faculty Development Program (FDP)',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A compact faculty-focused program to strengthen pedagogy, technology awareness, research alignment, and emerging domain readiness.',
    route: '/courses/fdp',
    features: [
      'Faculty upskilling',
      'Emerging technology orientation',
      'Pedagogy and research alignment',
      'Short and intensive format',
    ],

    overview:
      'FDP is designed to help educators stay aligned with emerging technologies, teaching practices, and research directions.',
    outcomes: [
      'Enhanced teaching effectiveness',
      'Awareness of emerging tech trends',
      'Improved curriculum delivery',
    ],
  },

  {
    slug: '3dw',
    title: '3DW',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A hands-on short workshop format designed for rapid technical immersion, focused learning outcomes, and applied exposure to specific tools or themes.',
    route: '/courses/3dw',
    features: [
      'Hands-on learning',
      'Focused technical immersion',
      'Short-format delivery',
      'Practical outcomes',
    ],

    overview:
      '3DW workshops provide rapid, focused exposure to specific tools, frameworks, or emerging technologies.',
    outcomes: [
      'Quick skill acquisition',
      'Tool-level proficiency',
      'Applied technical experience',
    ],
  },
]

import type { CourseDetailPage } from '@/types/courses'

export const courseDetailPages: CourseDetailPage[] = [
  {
    slug: 'online-mtech',
    eyebrow: 'Postgraduate Program',
    heroTitle: 'Online M.Tech Program',
    heroDescription:
      'A 2-year online postgraduate pathway designed to strengthen advanced technical competence, applied research thinking, and innovation-led problem solving for next-generation engineers and professionals.',
    overviewTitle: 'Flexible Advanced Learning for Deep-Tech and Innovation',
    overviewParagraphs: [
      'The Online M.Tech Program is intended for learners who want advanced postgraduate education without stepping away from their current academic, professional, or personal commitments.',
      'The program is designed to combine conceptual depth, applied engineering thinking, research orientation, and industry relevance. It can support learners who want to move toward deeper specialization, stronger problem-solving ability, and innovation-focused practice.',
      'With a 2-year format, the program enables sustained academic engagement while supporting flexibility in participation and continuity in learning.',
    ],
    snapshotTitle: 'Program Snapshot',
    snapshotItems: [
      { label: 'Mode', value: 'Online' },
      { label: 'Duration', value: '2 Years' },
      { label: 'Format', value: 'Structured postgraduate learning' },
      {
        label: 'Focus',
        value: 'Advanced technical capability, applied research, innovation readiness',
      },
      {
        label: 'Suitable For',
        value: 'Learners, professionals, advanced aspirants, and research-oriented candidates',
      },
    ],
    highlights: [
      {
        title: 'Online Flexibility',
        description:
          'Supports postgraduate learning through an online format that enables continuity alongside other commitments.',
        icon: '💻',
      },
      {
        title: 'Advanced Technical Depth',
        description:
          'Intended to strengthen conceptual understanding and deeper capability in advanced engineering and emerging technology domains.',
        icon: '🧠',
      },
      {
        title: 'Research Orientation',
        description:
          'Encourages analytical thinking, applied inquiry, and research-driven problem solving.',
        icon: '🔬',
      },
      {
        title: 'Industry Relevance',
        description:
          'Built to align learning with real-world problems, innovation needs, and application contexts.',
        icon: '🏭',
      },
      {
        title: 'Innovation Readiness',
        description:
          'Supports learners who want to connect academic depth with product thinking, systems perspective, and innovation practice.',
        icon: '🚀',
      },
      {
        title: 'Long-Term Capability Building',
        description:
          'Designed as a sustained 2-year journey for serious postgraduate growth and specialization.',
        icon: '📘',
      },
    ],
    audience: [
      'Graduates seeking advanced postgraduate technical learning',
      'Working professionals who need a flexible online format',
      'Learners interested in applied research and deep-tech capability',
      'Individuals aiming to strengthen innovation and problem-solving orientation',
    ],
    outcomes: [
      'Stronger advanced technical understanding',
      'Better research and analytical problem-solving capability',
      'Improved innovation-oriented thinking and application readiness',
      'A structured pathway for long-term professional and academic growth',
    ],
    applyRoute: '/courses/online-mtech/apply',
    enquireRoute: '/contact',
    ctaTitle: 'Interested in the Online M.Tech Program?',
    ctaDescription:
      'Reach out to IDRP to learn more about the program, application process, and future updates.',
  },
  {
  slug: 'iet',
  eyebrow: 'Short-Term Program',
  heroTitle: 'IET Program',
  heroDescription:
    'A 3-month focused program designed to provide practical exposure, industry orientation, and structured capability building for learners, innovators, and emerging professionals.',
  overviewTitle: 'Industry-Oriented Learning in a Compact Format',
  overviewParagraphs: [
    'The IET Program is designed for participants who want a short-duration but meaningful engagement with industry-relevant learning, practical exposure, and focused skill development.',
    'Over a period of 3 months, the program supports structured learning through guided sessions, application-oriented exposure, and engagement with real-world tools, workflows, or problem contexts.',
    'It is suited for learners who want to build stronger readiness for technical work, innovation environments, or future advanced programs.',
  ],
  snapshotTitle: 'Program Snapshot',
  snapshotItems: [
    { label: 'Mode', value: 'Structured / Short-Term' },
    { label: 'Duration', value: '3 Months' },
    { label: 'Format', value: 'Industry-oriented learning' },
    {
      label: 'Focus',
      value: 'Practical exposure, applied capability, technical readiness',
    },
    {
      label: 'Suitable For',
      value: 'Students, fresh graduates, learners, and early professionals',
    },
  ],
  highlights: [
    {
      title: 'Short-Term Structure',
      description:
        'A focused 3-month format designed for compact but meaningful learning and capability development.',
      icon: '⏱️',
    },
    {
      title: 'Industry Orientation',
      description:
        'Built to expose participants to practical, real-world contexts, tools, and expectations.',
      icon: '🏭',
    },
    {
      title: 'Applied Learning',
      description:
        'Encourages hands-on understanding and practical engagement rather than only theoretical exposure.',
      icon: '🛠️',
    },
    {
      title: 'Skill Readiness',
      description:
        'Helps participants strengthen technical confidence and readiness for future work or advanced pathways.',
      icon: '📈',
    },
    {
      title: 'Guided Engagement',
      description:
        'Offers structured mentoring and learning support over the course of the program.',
      icon: '🧭',
    },
    {
      title: 'Future Pathway',
      description:
        'Can serve as a preparatory step toward higher-level learning, technical projects, or innovation programs.',
      icon: '🚀',
    },
  ],
  audience: [
    'Students seeking applied technical exposure',
    'Fresh graduates building practical readiness',
    'Learners exploring industry-oriented programs',
    'Early professionals looking to strengthen focused capabilities',
  ],
  outcomes: [
    'Improved industry-facing understanding',
    'Stronger applied and practical confidence',
    'Better readiness for technical and innovation environments',
    'A structured short-term learning experience with real relevance',
  ],
  applyRoute: '/courses/iet/apply',
  enquireRoute: '/contact',
  ctaTitle: 'Ready to join the IET Program?',
  ctaDescription:
    'Apply now to register your interest and learn more about participation, format, and upcoming cohorts.',
},
{
  slug: 'fdp',
  eyebrow: 'Faculty Development Program',
  heroTitle: 'FDP',
  heroDescription:
    'A 2-day faculty development workshop designed to strengthen pedagogy, technology awareness, research alignment, and innovation-readiness in emerging domains.',

  overviewTitle:
    'Strengthening Faculty Readiness in Emerging Technology and Innovation',

  overviewParagraphs: [
    'The FDP is designed as a compact and intensive 2-day workshop for faculty members who want to upgrade their understanding of emerging domains, modern teaching approaches, and industry-relevant academic alignment.',
    'The program supports educators in connecting curriculum, pedagogy, research orientation, and applied technological developments. It is intended to help faculty become better prepared to teach, mentor, and guide students in contemporary innovation ecosystems.',
    'With its focused workshop structure, the FDP creates space for both knowledge enrichment and reflection on academic practice in a rapidly evolving technical landscape.',
  ],

  snapshotTitle: 'Program Snapshot',
  snapshotItems: [
    { label: 'Mode', value: 'Workshop Format' },
    { label: 'Duration', value: '2 Days' },
    { label: 'Type', value: 'Faculty Development Workshop' },
    {
      label: 'Focus',
      value: 'Pedagogy, emerging technology awareness, research alignment',
    },
    {
      label: 'Suitable For',
      value: 'Faculty members, academic coordinators, and educators',
    },
  ],

  highlights: [
    {
      title: 'Compact Intensive Format',
      description:
        'A focused 2-day structure designed for meaningful faculty engagement within a short duration.',
      icon: '⏱️',
    },
    {
      title: 'Pedagogy Enrichment',
      description:
        'Supports faculty in rethinking teaching methods, learner engagement, and classroom relevance.',
      icon: '📘',
    },
    {
      title: 'Emerging Technology Exposure',
      description:
        'Introduces faculty to evolving technological domains and their academic significance.',
      icon: '💡',
    },
    {
      title: 'Research Alignment',
      description:
        'Helps participants connect teaching practice with research thinking, innovation, and application contexts.',
      icon: '🔬',
    },
    {
      title: 'Academic-Industry Relevance',
      description:
        'Encourages stronger linkage between curriculum, practical skills, and external ecosystem expectations.',
      icon: '🏭',
    },
    {
      title: 'Faculty Readiness',
      description:
        'Builds confidence for teaching, mentoring, and academic leadership in contemporary domains.',
      icon: '🎓',
    },
  ],

  audience: [
    'Faculty members across engineering and technology disciplines',
    'Academic coordinators and curriculum contributors',
    'Educators seeking exposure to emerging domains and current practices',
    'Faculty interested in strengthening research and innovation orientation',
  ],

  outcomes: [
    'Improved awareness of emerging technologies and their academic relevance',
    'Stronger pedagogy and curriculum alignment thinking',
    'Better readiness for research-linked teaching and mentoring',
    'A compact but meaningful faculty development experience',
  ],

  applyRoute: '/courses/fdp/apply',
  enquireRoute: '/contact',

  ctaTitle: 'Ready to join the FDP workshop?',
  ctaDescription:
    'Apply now to register your interest and learn more about participation, theme, and upcoming workshop schedules.',
},
{
  slug: '3dw',
  eyebrow: 'Workshop Program',
  heroTitle: '3DW',
  heroDescription:
    'A 2-day focused workshop designed for rapid technical immersion, hands-on exposure, and applied learning in targeted themes and tools.',

  overviewTitle: 'Rapid Skill-Building Through Focused Hands-On Workshops',

  overviewParagraphs: [
    '3DW is intended as a compact technical workshop format that enables participants to engage deeply with a focused topic within a short duration.',
    'The workshop supports hands-on exposure, guided practice, and application-oriented learning. It is designed for learners who want practical immersion rather than a long-term program.',
    'With its short and intensive format, 3DW can be used to introduce tools, methods, concepts, or emerging domains in a way that is immediate, structured, and outcome-focused.',
  ],

  snapshotTitle: 'Program Snapshot',
  snapshotItems: [
    { label: 'Mode', value: 'Workshop Format' },
    { label: 'Duration', value: '2 Days' },
    { label: 'Type', value: 'Hands-On Workshop' },
    {
      label: 'Focus',
      value: 'Technical immersion, practical learning, skill-building',
    },
    {
      label: 'Suitable For',
      value: 'Students, learners, professionals, and workshop participants',
    },
  ],

  highlights: [
    {
      title: 'Short Intensive Format',
      description:
        'A focused 2-day structure designed for rapid learning and meaningful exposure within a compact timeline.',
      icon: '⏱️',
    },
    {
      title: 'Hands-On Practice',
      description:
        'Encourages direct engagement with tools, methods, or technical tasks through guided activities.',
      icon: '🛠️',
    },
    {
      title: 'Applied Learning',
      description:
        'Moves beyond theory to support practical understanding and immediate relevance.',
      icon: '📘',
    },
    {
      title: 'Focused Technical Themes',
      description:
        'Can be organized around specific domains, toolchains, concepts, or emerging technologies.',
      icon: '💡',
    },
    {
      title: 'Accessible Workshop Model',
      description:
        'Suitable for a broad range of learners who want quick immersion without a long-duration commitment.',
      icon: '🎯',
    },
    {
      title: 'Immediate Skill Exposure',
      description:
        'Helps participants gain confidence and foundational exposure that can be built upon later.',
      icon: '🚀',
    },
  ],

  audience: [
    'Students looking for hands-on technical workshops',
    'Learners seeking quick immersion in a focused topic',
    'Professionals wanting short-duration upskilling',
    'Participants interested in practical exposure to tools or methods',
  ],

  outcomes: [
    'Better familiarity with a specific technical topic or tool',
    'Hands-on exposure through guided workshop participation',
    'Improved practical confidence in short-duration learning settings',
    'A compact and focused workshop experience with direct relevance',
  ],

  applyRoute: '/courses/3dw/apply',
  enquireRoute: '/contact',

  ctaTitle: 'Ready to join the 3DW workshop?',
  ctaDescription:
    'Apply now to register your interest and learn more about workshop themes, participation, and upcoming schedules.',
}
]

export function getCourseDetailPageBySlug(slug: string) {
  return courseDetailPages.find((page) => page.slug === slug)
}