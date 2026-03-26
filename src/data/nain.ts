import type { NAINPageData } from '@/types/nain'

export const nainPage: NAINPageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'New Age Innovation Network',
    subtitle:
      'NAIN at IDRP supports innovation, mentoring, prototyping, and entrepreneurship by connecting institutes, faculty mentors, and student teams through structured project guidance and ecosystem support.',
    primaryActionLabel: 'Explore Institutes',
    primaryActionHref: '#institutes',
    secondaryActionLabel: 'Contact IDRP',
    secondaryActionTo: '/contact',
  },

  overview: {
    eyebrow: 'Overview',
    title: 'Building an institute-level innovation network',
    paragraphs: [
      'The New Age Innovation Network (NAIN) builds an innovation pipeline by mentoring institutes, supporting student idea development, enabling project execution, and strengthening early-stage entrepreneurial thinking.',
      'As the number of supported institutes and projects grows every year, this page is designed to showcase mentorship in a scalable way — institute-wise, year-wise, and project-wise.',
    ],
    stats: [
      {
        id: 'institutes',
        label: 'Institutes Supported',
        tone: 'teal',
      },
      {
        id: 'projects',
        label: 'Total Projects Listed',
        tone: 'cyan',
      },
    ],
  },

  facultyMentor: {
    name: 'Dr. [Faculty Mentor Name]',
    designation: 'IIIT Dharwad Faculty Mentor',
    bio: 'Add mentor description...',
    image: '',
    linkedin: '',
    profileLink: '',
  },

  institutesSection: {
    eyebrow: 'Institutes We Support',
    title: 'PMU Mentoring & Supported Institutes',
    description:
      'Browse all partner institutes and explore their NAIN projects year-wise with project briefs, faculty guides, student teams, and external links where available.',
  },

  institutes: [
    {
      id: 'inst-1',
      name: 'Institute Name 1',
      location: 'Karnataka',
      description: '...',
      years: [
        {
          year: '2025-26',
          projects: [
            {
              id: 'p-1',
              title: 'AI-enabled Smart Agriculture Monitoring',
              brief: '...',
              facultyGuide: 'Prof. A. Kumar',
              students: ['Student 1', 'Student 2'],
            },
          ],
        },
      ],
    },
  ],
}