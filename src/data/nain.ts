import type { NAINPageData } from '@/types/nain'

export const nainImages = [
  { src: '/nain/img1.jpeg', alt: 'Startup demo' },
  { src: '/nain/img2.jpeg', alt: 'Student innovation' },
  { src: '/nain/img3.jpeg', alt: 'Mentorship session' },
]

export const nainPage: NAINPageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'New Age Innovation Network',
    subtitle:
      'NAIN at IDRP supports innovation, mentoring, prototyping, and entrepreneurship by connecting institutes, investigators, coordinators, faculty guides, and student teams through structured project guidance and ecosystem support.',
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

  institutesSection: {
    eyebrow: 'Institutes We Support',
    title: 'PMU Mentoring & Supported Institutes',
    description:
      'Browse all partner institutes and explore their NAIN projects through year-wise records, investigator details, student teams, and external project links where available.',
  },

  institutes: [
    {
      id: 'inst-1',
      name: 'Institute Name 1',
      city: 'Hubballi',
      state: 'Karnataka',
      description: 'Add institute description here.',
      logo: '/institutes/institute-1-logo.png',
      years: [
        {
          year: '2025-26',
          principalInvestigator: 'Dr. Principal Investigator Name',
          coPrincipalInvestigator: 'Dr. Co-Principal Investigator Name',
          projects: [
            {
              id: 'p-1',
              title: 'AI-enabled Smart Agriculture Monitoring',
              brief: 'Add project brief here.',
              iiitFacultyGuide: 'Prof. A. Kumar',
              nainCoordinator: 'Coordinator Name',
              dia: 'DIA Name',
              misExecutives: ['MIS Executive 1', 'MIS Executive 2'],
              techMentor: 'Tech Mentor Name',
              programAssociate: 'Program Associate Name',
              studentMembers: ['Student 1', 'Student 2', 'Student 3'],
              projectLink: 'https://example.com/project',
            },
          ],
        },
        {
          year: '2024-25',
          principalInvestigator: 'Dr. PI Name 2024',
          coPrincipalInvestigator: 'Dr. Co-PI Name 2024',
          projects: [
            {
              id: 'p-2',
              title: 'IoT-based Water Quality Tracker',
              brief: 'Add another project brief here.',
              iiitFacultyGuide: 'Prof. B. Rao',
              nainCoordinator: 'Coordinator Name',
              dia: 'DIA Name',
              misExecutives: ['MIS Executive 1'],
              techMentor: 'Tech Mentor Name',
              programAssociate: 'Program Associate Name',
              studentMembers: ['Student A', 'Student B'],
              projectLink: 'https://example.com/project-2',
            },
          ],
        },
      ],
    },
  ],
}