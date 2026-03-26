// Core reusable types for all course/program pages

export type Course = {
  slug: string
  title: string
  duration: string
  type: string
  description: string
  route: string
  features: string[]

  // Detailed page data (used in individual course views)
  overview?: string
  eligibility?: string[]
  outcomes?: string[]
  curriculum?: string[]
}

export type AcademyArea = {
  title: string
  emoji: string
  image: string
  bg: string
}

export type Stat = {
  value: string
  label: string
}


export type CourseHighlight = {
  title: string
  description: string
  icon: string
}

export type CourseSnapshotItem = {
  label: string
  value: string
}

export type CourseDetailPage = {
  slug: string
  eyebrow: string
  heroTitle: string
  heroDescription: string
  overviewTitle: string
  overviewParagraphs: string[]
  snapshotTitle: string
  snapshotItems: CourseSnapshotItem[]
  highlights: CourseHighlight[]
  audience: string[]
  outcomes: string[]
  applyRoute: string
  enquireRoute: string
  ctaTitle: string
  ctaDescription: string
}

export type CourseApplyFieldOption = {
  label: string
  value: string
}

export type CourseApplyPage = {
  slug: string
  eyebrow: string
  title: string
  description: string
  submitLabel: string
  successMessage: string
  interestOptions: string[]
}


export type CourseOption = string