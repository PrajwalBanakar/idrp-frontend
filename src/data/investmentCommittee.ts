import type {
  InvestmentCommitteeCTAContent,
  InvestmentCommitteeHeroContent,
  InvestmentCommitteeIntroContent,
  InvestmentCommitteeMember,
} from '@/types/investmentCommittee'

export const investmentCommitteeHero: InvestmentCommitteeHeroContent = {
  eyebrow: 'Investment Committee',
  title: 'Meet the Investment Committee',
  image: '/investment-committee-hero.jfif',
  imageAlt: 'Investment Committee',
}

export const investmentCommitteeIntro: InvestmentCommitteeIntroContent = {
  eyebrow: 'Strategic Guidance',
  title: 'Experienced Leaders Supporting Venture Growth',
  description:
    'Our Investment Committee brings together experienced professionals who help evaluate opportunities, guide strategic decisions, and support the growth of promising startups within the IDRP ecosystem.',
}

export const investmentCommitteeMembers: InvestmentCommitteeMember[] = [
  {
    name: 'Deepak',
    role: 'Investment Committee Member',
    image: '/board-deepak.jfif',
    imageAlt: 'Deepak',
  },
  {
    name: 'Prasanna',
    role: 'Investment Committee Member',
    image: '/board-prasanna.jfif',
    imageAlt: 'Prasanna',
  },
]

export const investmentCommitteeCTA: InvestmentCommitteeCTAContent = {
  eyebrow: 'Connect With Us',
  title: 'Engage With the Investment Ecosystem',
  description:
    'Whether you are a startup seeking strategic support or a stakeholder looking to collaborate, the IDRP ecosystem is built to create meaningful opportunities for innovation and growth.',
  primaryActionLabel: 'Contact Us',
  primaryActionTo: '/contact',
  secondaryActionLabel: 'Apply Now',
  secondaryActionTo: '/apply',
}