export type InvestmentCommitteeMember = {
  name: string
  role: string
  image: string
  imageAlt: string
}

export type InvestmentCommitteeHeroContent = {
  eyebrow: string
  title: string
  image: string
  imageAlt: string
}

export type InvestmentCommitteeIntroContent = {
  eyebrow: string
  title: string
  description: string
}

export type InvestmentCommitteeCTAContent = {
  eyebrow: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}