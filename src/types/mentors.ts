export type MentorCategory = 'business' | 'technology' | 'faculty'

export type Mentor = {
  name: string
  role: string
  image: string
  imageAlt?: string
  organization?: string
  bio?: string
  linkedin?: string
}