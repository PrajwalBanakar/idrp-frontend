import type {
  TeamCTAContent,
  TeamHeroContent,
  TeamIntroContent,
  TeamMember,
} from '@/types/team'

export const teamHero: TeamHeroContent = {
  eyebrow: 'Our Team',
  title: 'Meet the People Behind IDRP',
  image: '/team-hero.jfif',
  imageAlt: 'Our Team',
}

export const teamIntro: TeamIntroContent = {
  eyebrow: 'The People Powering Innovation',
  title: 'A Team Built to Support Founders, Research, and Ecosystem Growth',
  description:
    'Our team brings together academic leadership, operational strength, ecosystem building, and founder-focused support to help ideas move from research and experimentation to meaningful innovation and venture creation.',
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Darshana',
    role: 'Team Member',
    image: '/team-darshana.jpeg',
    imageAlt: 'Darshana',
  },
  {
    name: 'Lokesh',
    role: 'Team Member',
    image: '/team-lokesh.jpeg',
    imageAlt: 'Lokesh',
  },
  {
    name: 'Neha',
    role: 'Team Member',
    image: '/team-neha.jpeg',
    imageAlt: 'Neha',
  },
  {
    name: 'Rakshata',
    role: 'Team Member',
    image: '/team-rakshata.jpeg',
    imageAlt: 'Rakshata',
  },
  {
    name: 'Ravi',
    role: 'Team Member',
    image: '/team-ravi.jpeg',
    imageAlt: 'Ravi',
  },
  {
    name: 'Reshma',
    role: 'Team Member',
    image: '/team-reshma.jpeg',
    imageAlt: 'Reshma',
  },
  {
    name: 'Sunita',
    role: 'Team Member',
    image: '/team-sunita.jpeg',
    imageAlt: 'Sunita',
  },
]

export const teamCTA: TeamCTAContent = {
  eyebrow: 'Work With Us',
  title: 'Connect With the IDRP Team',
  description:
    'Whether you are a founder, mentor, partner, researcher, or ecosystem enabler, our team is here to help you engage with the right program, people, and opportunities.',
  primaryActionLabel: 'Contact Us',
  primaryActionTo: '/contact',
  secondaryActionLabel: 'Apply Now',
  secondaryActionTo: '/apply',
}