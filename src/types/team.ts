export type TeamMember = {
  name: string
  role: string
  image: string
  imageAlt: string
  bio?: string
  linkedin?: string
}

export type TeamHeroContent = {
  eyebrow: string
  title: string
  image: string
  imageAlt: string
}

export type TeamIntroContent = {
  eyebrow: string
  title: string
  description: string
}

export type TeamCTAContent = {
  eyebrow: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}