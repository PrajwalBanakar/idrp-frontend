export type NAINProject = {
  id: string
  title: string
  brief: string
  iiitFacultyGuide: string
  nainCoordinator: string
  dia: string
  misExecutives: string[]
  techMentor: string
  programAssociate: string
  studentMembers: string[]
  image?: string
  projectLink?: string
}

export type NAINYearGroup = {
  year: string
  principalInvestigator: string
  coPrincipalInvestigator: string
  projects: NAINProject[]
}

export type NAINInstitute = {
  id: string
  name: string
  city: string
  state: string
  description: string
  logo?: string
  years: NAINYearGroup[]
}

export type NAINHeroContent = {
  eyebrow?: string
  title: string
  subtitle: string
  primaryActionLabel?: string
  primaryActionHref?: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}

export type NAINOverviewStat = {
  id: string
  label: string
  tone?: 'teal' | 'cyan' | 'slate'
}

export type NAINOverviewContent = {
  eyebrow: string
  title: string
  paragraphs: string[]
  stats: NAINOverviewStat[]
}

export type NAINSectionIntro = {
  eyebrow?: string
  title: string
  description: string
}

export type NAINPageData = {
  hero: NAINHeroContent
  overview: NAINOverviewContent
  institutesSection: NAINSectionIntro
  institutes: NAINInstitute[]
}