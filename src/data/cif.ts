import type { InitiativePageData } from '@/types/program'

export const cifPage: InitiativePageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Common Instrumentation Facility',
    subtitle: '',
    image: '/cif-hero.jfif',
    imageAlt: 'Common Instrumentation Facility',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Enabling innovation through shared infrastructure',
    paragraphs: [
      'The Common Instrumentation Facility (CIF) enables startups, researchers, and academic teams to access specialized equipment and lab infrastructure without the need for individual ownership.',
      'It supports faster product development by providing the tools required for testing, validation, and experimentation in one integrated environment.',
      'By bridging infrastructure gaps, CIF strengthens deep-tech innovation, interdisciplinary research, and early-stage prototyping.',
    ],
    image: '/cif/cif-intro.jpeg',
    imageAlt: 'CIF Overview',
  },

  value: {
    eyebrow: 'Why CIF?',
    title: 'What CIF enables',
    items: [
      {
        title: 'Advanced equipment access',
        description:
          'Utilize high-end tools and facilities without setting up independent infrastructure.',
      },
      {
        title: 'Cost efficiency',
        description: 'Minimize capital investment while gaining access to essential resources.',
      },
      {
        title: 'Faster prototyping',
        description: 'Accelerate testing, iteration, and validation cycles.',
      },
      {
        title: 'Collaborative ecosystem',
        description:
          'Work alongside startups, faculty, and research teams in a shared innovation environment.',
      },
    ],
    image: '/cif/cif-value.jpeg',
    imageAlt: 'CIF Value',
  },

  cta: {
    eyebrow: 'Get Started',
    title: 'Access CIF through IDRP',
    description:
      'Reach out to explore how CIF can support your research, testing, and product development needs.',
    primaryActionLabel: 'Contact Us',
    primaryActionTo: '/contact',
  },
}
