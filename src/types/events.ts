export type EventItem = {
  id: number
  slug: string

  title: string
  category: string
  description: string

  date: string
  time?: string
  location: string
  mode?: string

  audience?: string
  organiser?: string

  image: string
  fallbackBg: string

  registerUrl?: string
  isUpcoming: boolean
  visible?: boolean
  brochureUrl?: string

  highlights?: string[]
  gallery?: string[]
}