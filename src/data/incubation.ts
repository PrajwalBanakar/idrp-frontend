import type { ProgramPageData } from '@/types/program'

export const incubationPage: ProgramPageData = {
  hero: {
    eyebrow: 'Incubation',
    title: 'Udyami',
    subtitle:
      'A structured incubation program designed to support startups in building, validating, and scaling their ventures with strong ecosystem backing.',
    image: '/incubation-hero.jfif',
    imageAlt: 'Incubation Program',
  },

  intro: {
    eyebrow: 'Our Approach',
    title: 'From Idea to Scalable Venture',
    paragraphs: [
      'The incubation program at IDRP is designed to support startups that are ready to move beyond ideation and begin structured venture building.',
      'We work closely with founders to refine their product, validate their market, and build a sustainable business model.',
      'The program combines mentorship, ecosystem access, and institutional support to help startups navigate early-stage challenges and prepare for growth.',
    ],
    image: '/incubation-intro.jfif',
    imageAlt: 'Incubation Program',
  },

  value: {
    eyebrow: 'Why Udyami',
    title: 'Designed for Venture Growth',
    items: [
      {
        title: 'Structured Mentorship',
        description:
          'Startups receive continuous guidance from mentors across technology, business, and product domains.',
      },
      {
        title: 'Ecosystem Access',
        description:
          'Founders gain access to investors, industry partners, and innovation networks.',
      },
      {
        title: 'Market Readiness',
        description:
          'Support for refining product-market fit and preparing for real-world deployment.',
      },
      {
        title: 'Growth Pathways',
        description:
          'Guidance for scaling, fundraising, and long-term venture strategy.',
      },
    ],
    image: '/incubation-value.jfif',
    imageAlt: 'Incubation Value',
  },

  tracks: {
    eyebrow: 'Programs',
    title: 'Incubation Tracks',
    description:
      'Choose the incubation model that best fits your startup’s stage, operating style, and support needs.',
  },

  programs: [
    {
      id: 'resident-incubation',
      title: 'Udyami Resident Incubation',
      subtitle: 'For startups seeking on-campus incubation support',
      description:
        'Comprehensive support for startups at idea, PoC, or MVP stage with access to dedicated workspace, labs, mentorship, and seed funding opportunities.',
      duration: '12–18 months',
      mode: 'On-campus / Hybrid',
      applyTo: '/apply/resident-incubation',
      sections: [
        {
          title: 'Who It Is For',
          items: [
            'Startups at idea, PoC, or MVP stage',
            'Founders who benefit from physical incubation support',
            'Teams looking for deeper research, lab, and campus ecosystem access',
          ],
        },
        {
          title: 'What Startups Gain',
          items: [
            'Dedicated workspace at campus',
            'Access to research labs and equipment',
            'Technical mentorship from faculty',
            'Business development support',
            'Industry networking events',
          ],
        },
        {
          title: 'Outcomes',
          items: [
            'Stronger product and prototype development',
            'Better institutional and industry integration',
            'Improved readiness for grants, seed funding, and growth',
          ],
        },
      ],
    },
    {
      id: 'virtual-incubation',
      title: 'Udyami Virtual Incubation',
      subtitle: 'For startups seeking flexible remote support',
      description:
        'Remote support for startups and entrepreneurs who want to leverage the IDRP ecosystem without requiring physical presence on campus.',
      duration: '6–12 months',
      mode: 'Virtual',
      applyTo: '/apply/virtual-incubation',
      sections: [
        {
          title: 'Who It Is For',
          items: [
            'Early-stage ventures across India',
            'Founders who need ecosystem access without relocation',
            'Teams looking for flexible mentorship and remote incubation support',
          ],
        },
        {
          title: 'What Startups Gain',
          items: [
            'Remote mentorship sessions',
            'Access to digital resources',
            'Investor connect programs',
            'Online Startup School',
            'Alumni network access',
            'Grant application support',
          ],
        },
        {
          title: 'Outcomes',
          items: [
            'Clearer venture direction and execution support',
            'Improved investor and funding readiness',
            'Access to a wider startup and mentor network',
          ],
        },
      ],
    },
  ],

  cta: {
    eyebrow: 'Grow Your Startup',
    title: 'Take the Next Step in Your Venture Journey',
    description:
      'If you are ready to build, validate, and scale your startup, the Udyami incubation program provides the support, mentorship, and ecosystem you need.',
    primaryActionLabel: 'Apply Now',
    primaryActionTo: '/apply/resident-incubation',
    secondaryActionLabel: 'Contact Us',
    secondaryActionTo: '/contact',
  },
}