import type { ProgramPageData } from '@/types/program'

export const cbdePage = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Capacity Building for Design and Entrepreneurship',
    subtitle:
      'A focused initiative to strengthen innovation capability, design thinking, entrepreneurial mindset, and venture readiness.',
    image: '/cbde-hero.jfif',
    imageAlt: 'CBDE Program',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Building design capability and entrepreneurial confidence',
    paragraphs: [
      'Capacity Building for Design and Entrepreneurship is aimed at creating a strong foundation for innovation by equipping participants with the mindset, methods, and practical orientation needed to identify opportunities, design solutions, and pursue entrepreneurial pathways.',
      'The initiative encourages a structured approach to creativity, user understanding, problem-solving, product thinking, and venture exploration.',
      'Through this initiative, IDRP nurtures innovators and aspiring founders prepared for real-world execution.',
    ],
    image: '/cbde-intro.jfif',
    imageAlt: 'CBDE Overview',
  },

  value: {
    eyebrow: 'Why This Initiative?',
    title: 'The Value of Design and Entrepreneurship Capacity Building',
    items: [
      {
        title: 'Strong Design Thinking Foundation',
        description:
          'Builds structured approaches to problem solving and innovation.',
      },
      {
        title: 'Opportunity Identification',
        description:
          'Encourages identifying real-world problems and user needs.',
      },
      {
        title: 'Execution Readiness',
        description:
          'Supports movement from idea to implementation.',
      },
      {
        title: 'Startup Orientation',
        description:
          'Develops entrepreneurial thinking and venture awareness.',
      },
    ],
    image: '/cbde-value.jfif',
    imageAlt: 'CBDE Value',
  },

  cta: {
    eyebrow: 'Get Involved',
    title: 'Build Stronger Innovation Capability',
    description:
      'Connect with IDRP to explore how this initiative can support your innovation journey.',
    primaryActionLabel: 'Contact Us',
    primaryActionTo: '/contact',
  },
}