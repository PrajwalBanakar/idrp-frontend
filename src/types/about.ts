export type AboutStat = {
  label: string
  value: string
}

export type MissionVisionItem = {
  title: string
  description: string
  icon: string
}

export type Pillar = {
  title: string
  description: string
}

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export type Offering = {
  title: string
  description: string
}

export type Reason = {
  title: string
  description: string
}

export type VisionCard = {
  title: string
  description: string
  image: string
  imageAlt: string
}

export type AboutHeroContent = {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export type AboutIntroContent = {
  eyebrow: string
  title: string
  paragraphs: string[]
  stats: AboutStat[]
  image: string
  imageAlt: string
  badgeText: string
}

export type AboutCTAContent = {
  eyebrow: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}