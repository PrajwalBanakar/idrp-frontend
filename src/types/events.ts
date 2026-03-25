export type EventItem = {
  id: number | string
  title: string
  description: string
  date: string
  time?: string
  location?: string
  image: string
  category: string
  isUpcoming: boolean
  fallbackBg: string
}