export type StartupCategory = 'pre-incubated' | 'incubated' | 'funded'
export type TabKey = 'all' | StartupCategory

export interface Tab {
  key: TabKey
  label: string
}

export interface StartupStat {
  value: string
  label: string
}

export interface Founder {
  name: string
  role: string
  linkedin?: string
  email?: string
}

export interface TechFacultyMentor {
  name: string
  linkedin?: string
  email?: string
}

export interface TeamMember {
  name: string
  linkedin?: string
  email?: string
}

export interface Startup {
  id: string
  name: string
  sector: string
  category: StartupCategory
  logo?: string
  website?: string
  onePager?: string
  brief?: string
  contactEmail?: string
  techFacultyMentors: TechFacultyMentor[]
  founders: Founder[]
  teamMembers: TeamMember[]
}

export interface StartupsHero {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  title: string
  description: string
}

export interface StartupsIntro {
  eyebrow: string
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}