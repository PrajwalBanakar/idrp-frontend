import type { ProgramPageData } from '@/types/program'

export const cifPage = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Common Instrumentation Facility',
    subtitle:
      'A shared infrastructure initiative enabling access to advanced equipment, testing tools, and prototyping facilities.',
    image: '/cif-hero.jfif',
    imageAlt: 'CIF Program',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Shared access to critical tools and innovation infrastructure',
    paragraphs: [
      'The Common Instrumentation Facility (CIF) provides innovators, researchers, startups, and academic teams with access to shared instrumentation and advanced infrastructure.',
      'By creating a common platform for equipment usage and experimentation, CIF improves efficiency in product development and research.',
      'It serves as a strong institutional enabler for deep-tech work, interdisciplinary projects, and startup validation.',
    ],
    image: '/cif/cif-intro.jpeg',
    imageAlt: 'CIF Overview',
  },

  value: {
    eyebrow: 'Why CIF?',
    title: 'The Value of the Common Instrumentation Facility',
    items: [
      {
        title: 'Shared Infrastructure Access',
        description:
          'Provides access to advanced tools and equipment through a shared model.',
      },
      {
        title: 'Reduced Cost Barriers',
        description:
          'Makes high-end infrastructure accessible without individual investment.',
      },
      {
        title: 'Hands-on Innovation',
        description:
          'Supports experimentation, testing, and validation.',
      },
      {
        title: 'Ecosystem Strengthening',
        description:
          'Enables collaboration across startups, academia, and research teams.',
      },
    ],
    image: '/cif/cif-value.jpeg',
    imageAlt: 'CIF Value',
  },

  cta: {
    eyebrow: 'Access Infrastructure',
    title: 'Leverage Shared Innovation Facilities',
    description:
      'Connect with IDRP to explore access to instrumentation, testing, and prototyping infrastructure.',
    primaryActionLabel: 'Contact Us',
    primaryActionTo: '/contact',
  },
}