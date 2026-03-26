export type Newsletter = {
  id: number
  slug: string
  title: string
  issue: string
  date: string
  description: string
  preview: string
  highlights: string[]
  coverGradient: string
  pdfUrl?: string
}