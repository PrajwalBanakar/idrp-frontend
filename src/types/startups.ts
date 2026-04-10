export type StartupCategory = 'pre-incubated' | 'incubated' | 'funded'
export type TabKey = 'all' | StartupCategory

export type Tab = {
  key: TabKey
  label: string
}

export type StartupStat = {
  value: string
  label: string
}

export type Founder = {
  name: string
  role: string
  linkedin: string
  email: string
  phone: string
}

export type TechFacultyMentor = {
  name: string
  email: string
}

export type TeamMember = {
  name: string
  phone?: string
  email?: string
}

export type Startup = {
  id: string
  name: string
  sector: string
  category: StartupCategory
  logo: string
  website: string
  onePager: string
  brief: string
  contactEmail: string
  contactPhone: string
  techFacultyMentors: TechFacultyMentor[]
  founders: Founder[]
  teamMembers: TeamMember[]
}

export type StartupsHero = {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  title: string
  description: string
}

export type StartupsIntro = {
  eyebrow: string
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}
