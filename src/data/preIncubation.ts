import type { ProgramPageData } from '@/types/program'

export const preIncubationPage: ProgramPageData = {
  hero: {
    eyebrow: 'Pre-Incubation',
    title: 'Yuva Udyami',
    subtitle:
      'A structured pre-incubation pathway that helps early innovators validate ideas, build confidence, and take their first steps toward entrepreneurship.',
    image: '/incubation-hero.jfif',
    imageAlt: 'Pre-Incubation Program',
  },

  intro: {
    eyebrow: 'Our Approach',
    title: 'Helping Ideas Take Shape Before They Become Startups',
    paragraphs: [
      'Yuva Udyami is designed for students, innovators, and aspiring founders who are still at the earliest stage of their entrepreneurial journey.',
      'The program focuses on helping participants discover meaningful problems, shape ideas into structured opportunities, and gain the exposure needed to think like founders.',
      'Rather than pushing teams too early into venture building, the pre-incubation phase creates a guided environment for exploration, validation, mentorship, and capability building.',
    ],
    image: '/incubation-intro.jfif',
    imageAlt: 'Yuva Udyami Program',
  },

  value: {
    eyebrow: 'Why Yuva Udyami',
    title: 'A Strong Foundation for First-Time Founders',
    items: [
      {
        title: 'Idea Exploration',
        description:
          'Participants get the space and guidance to explore real-world problems and identify ideas worth pursuing.',
      },
      {
        title: 'Mentor Access',
        description:
          'Early-stage innovators interact with mentors who help refine thinking, direction, and opportunity areas.',
      },
      {
        title: 'Structured Exposure',
        description:
          'The program introduces participants to startup thinking, market awareness, and problem-solution framing.',
      },
      {
        title: 'Founder Readiness',
        description:
          'Participants begin building the mindset, confidence, and communication skills needed for future venture creation.',
      },
    ],
    image: '/incubation-value.jfif',
    imageAlt: 'Pre-Incubation Value',
  },

  tracks: {
    eyebrow: 'Programs',
    title: 'Choose the Right Starting Point',
    description:
      'Yuva Udyami includes structured program tracks tailored to different stages of idea discovery, early validation, and innovation readiness.',
  },

  programs: [
    {
      id: 'yuva-udyami-explore',
      title: 'Yuva Udyami Explore',
      subtitle: 'For idea discovery and early-stage exploration',
      description:
        'An entry-level track for students and aspiring innovators who want to identify meaningful problems, explore startup opportunities, and begin their entrepreneurial journey.',
      duration: '6–8 weeks',
      mode: 'Hybrid',
      applyTo: '/apply/pre-incubation',
      sections: [
        {
          title: 'Who It Is For',
          items: [
            'Students with curiosity about startups and innovation',
            'Early thinkers who want to work on real-world problems',
            'Participants who do not yet have a fully formed startup idea',
          ],
        },
        {
          title: 'What Participants Gain',
          items: [
            'Problem discovery and idea exploration support',
            'Exposure to startup thinking and innovation frameworks',
            'Mentorship for narrowing and refining early concepts',
          ],
        },
        {
          title: 'Program Outcomes',
          items: [
            'Clearer opportunity areas to work on',
            'Better understanding of problem-solution fit',
            'Readiness to move into deeper validation or incubation tracks',
          ],
        },
      ],
    },
    {
      id: 'yuva-udyami-build',
      title: 'Yuva Udyami Build',
      subtitle: 'For teams moving toward validation and early structure',
      description:
        'A guided track for participants who already have an initial idea and want support to validate, shape, and strengthen it into a more structured startup opportunity.',
      duration: '8–12 weeks',
      mode: 'Hybrid',
      applyTo: '/apply/pre-incubation',
      sections: [
        {
          title: 'Who It Is For',
          items: [
            'Students or teams with an early idea or concept',
            'Innovators looking for guidance on shaping a solution',
            'Aspiring founders preparing for the next stage of venture support',
          ],
        },
        {
          title: 'What Participants Gain',
          items: [
            'Mentorship on idea refinement and early validation',
            'Support for articulating value proposition and user need',
            'Structured exposure to startup fundamentals and ecosystem pathways',
          ],
        },
        {
          title: 'Program Outcomes',
          items: [
            'Improved clarity on the idea and its relevance',
            'An early-stage venture direction or project framing',
            'Preparedness for incubation or advanced innovation programs',
          ],
        },
      ],
    },
  ],

  cta: {
    eyebrow: 'Begin Your Journey',
    title: 'Take the First Step Into Entrepreneurship',
    description:
      'If you are exploring ideas, testing your interests, or preparing to build something meaningful, Yuva Udyami gives you the environment and support to begin with clarity.',
    primaryActionLabel: 'Apply Now',
    primaryActionTo: '/apply',
    secondaryActionLabel: 'Contact Us',
    secondaryActionTo: '/contact',
  },
}