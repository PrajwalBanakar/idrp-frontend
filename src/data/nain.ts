import type { NAINPageData, NAINImage } from '@/types/nain'

export const nainImages: NAINImage[] = [
  { src: '/nain/img1.jpeg', alt: 'Startup demo' },
  { src: '/nain/img2.jpeg', alt: 'Student innovation' },
  { src: '/nain/img3.jpeg', alt: 'Mentorship session' },
]

export const nainPage: NAINPageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'New Age Innovation Network',
    subtitle:
      'NAIN at IDRP supports innovation, mentoring, and student-led project development across partner institutes through structured ecosystem support.',
    primaryActionLabel: 'Explore Institutes',
    primaryActionHref: '#institutes',
    secondaryActionLabel: 'Contact IDRP',
    secondaryActionTo: '/contact',
  },

  overview: {
    eyebrow: 'Overview',
    title: 'Building an innovation network across institutes',
    paragraphs: [
      'The New Age Innovation Network (NAIN) enables institutes to build a strong innovation culture by supporting student ideas, guiding project execution, and encouraging early-stage entrepreneurship.',
      'Through structured mentorship, coordination, and ecosystem support, NAIN helps transform ideas into impactful projects.',
    ],
    stats: [
      { id: 'institutes', label: 'Institutes Supported', tone: 'teal' },
      { id: 'projects', label: 'Total Projects', tone: 'cyan' },
    ],
  },

  pmu: {
    name: 'Indian Institute of Information Technology, Dharwad',
    principalInvestigator: 'Dr. Deepak K T',
    coPrincipalInvestigator: 'Dr. Sunil Saumya',
    programAssociate: 'Ms. Darshana Kasar',
  },

  institutesSection: {
    title: 'Institutes supported under NAIN',
  },

  institutes: [
    {
      id: 'kleit',
      name: 'KLE Institute of Technology',
      city: 'Hubballi',
      state: 'Karnataka',
      description: 'Supported under NAIN (2025–26 cycle)',
      logo: '/partners/kleit.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Krishnendu Ghosh',
            dia: 'Mr. Manjunath Prasad',
            misExecutives: ['Mrs. Deepa Sajjan'],
            nainCoordinator: 'Mr. Manjunath Prasad',
          },
          projects: [
            {
              id: 'kleit-p1',
              title: 'Oursoulss: Peer and professional counseling platform',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Mr. Manish S Shetty',
              teamMembers: ['Mr. Yashas Patil', 'Miss. Shravani Sindagi'],
            },
            {
              id: 'kleit-p2',
              title: 'Pedal-powered electricity generation',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Mr. Amir Hamza Betgeri',
              teamMembers: ['Mr. Vijay Joshi', 'Mr. Talluri Shivaram'],
            },
          ],
        },
      ],
    },

    {
      id: 'dimhans',
      name: 'Dharwad Institute of Mental Health and Neurosciences',
      city: 'Dharwad',
      state: 'Karnataka',
      description: 'Supported under NAIN (2025–26 cycle)',
      logo: '/partners/dimhans.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Chinmayananda A',
            dia: 'Dr. Shivarudrappa Bhairappanavar',
            misExecutives: ['NA'],
            nainCoordinator: 'Dr. Srinivas Kosgi',
          },
          projects: [
            {
              id: 'dimhans-p1',
              title: 'AI-based support for children with IDD',
              facultyGuideName: 'Smt. Sushma C',
              teamLeaderName: 'Arpitha I M',
              teamMembers: ['Dr. Sunanda G T', 'Dr. Megahamala'],
            },
          ],
        },
      ],
    },

    {
      id: 'klecop',
      name: 'KLE College of Pharmacy',
      city: 'Belagavi',
      state: 'Karnataka',
      description: 'Supported under NAIN (2025–26 cycle)',
      logo: '/partners/klepharm.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Sunilkumar P V',
            dia: 'Dr. Bhaskar K. Kurangi',
            misExecutives: ['Mr. Rohan Singadi'],
            nainCoordinator: 'Dr. Nithyananda Sastry Darbha',
          },
          projects: [
            {
              id: 'klecop-p1',
              title: 'Nanoformulation for Parkinson’s treatment',
              facultyGuideName: 'Ms. Kishori P Sutar',
              teamLeaderName: 'Ms. Yashaswini Joshi',
              teamMembers: ['Ms. Priyanka Saini'],
            },
          ],
        },
      ],
    },
  ],
}