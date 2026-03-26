// ─── HERO ─────────────────────────────────────────────

export type ProgramHeroContent = {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export type ProgramId =
  | 'pre-incubation'
  | 'resident-incubation'
  | 'virtual-incubation'

export type Program = {
  id: ProgramId
  title: string
  duration: string
  description: string
  detailsTo: string
  applyTo: string
  features: string[]
}

// ─── INTRO ────────────────────────────────────────────

export type ProgramIntroContent = {
  eyebrow: string
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

// ─── VALUE / BENEFITS ─────────────────────────────────

export type ProgramValueItem = {
  title: string
  description: string
}

export type ProgramValueContent = {
  eyebrow: string
  title: string
  items: ProgramValueItem[]
  image: string
  imageAlt: string
}

// ─── PROGRAM CARD (CORE UNIT) ─────────────────────────

export type ProgramAccordionSection = {
  title: string
  items: string[]
}

export type ProgramCardData = {
  id: string
  title: string
  subtitle?: string
  description: string

  duration?: string
  mode?: string

  applyTo?: string

  sections: ProgramAccordionSection[]
}

// ─── TRACKS / PROGRAM LIST HEADER ─────────────────────

export type ProgramTracksContent = {
  eyebrow: string
  title: string
  description: string
}

// ─── CTA ──────────────────────────────────────────────

export type ProgramCTAContent = {
  eyebrow?: string
  title: string
  description: string

  primaryActionLabel: string
  primaryActionTo: string

  secondaryActionLabel?: string
  secondaryActionTo?: string
}

// ─── FULL PAGE STRUCTURE ──────────────────────────────

export type ProgramPageData = {
  hero: ProgramHeroContent
  intro: ProgramIntroContent
  value: ProgramValueContent

  tracks: ProgramTracksContent
  programs: ProgramCardData[]

  cta: ProgramCTAContent
}