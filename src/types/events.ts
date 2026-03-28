export type EventSpeaker = {
  name: string
  role: string
  bio?: string
}

export type EventAgendaItem = {
  time: string
  title: string
  description?: string
}

export type EventItem = {
  id: number
  slug?: string

  title: string
  category: string

  description: string
  fullDescription: string

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

  highlights?: string[]
  agenda?: EventAgendaItem[]
  speakers?: EventSpeaker[]
}