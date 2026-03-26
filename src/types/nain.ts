export type NAINProject = {
  id: string
  title: string
  brief: string
  facultyGuide: string
  students: string[]
  image?: string
  link?: string
  linkedin?: string
}

export type NAINYearGroup = {
  year: string
  projects: NAINProject[]
}

export type NAINInstitute = {
  id: string
  name: string
  location: string
  description: string
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

export type NAINFacultyMentor = {
  name: string
  designation: string
  bio: string
  image?: string
  linkedin?: string
  profileLink?: string
}

export type NAINSectionIntro = {
  eyebrow?: string
  title: string
  description: string
}

export type NAINPageData = {
  hero: NAINHeroContent
  overview: NAINOverviewContent
  facultyMentor: NAINFacultyMentor
  institutesSection: NAINSectionIntro
  institutes: NAINInstitute[]
}