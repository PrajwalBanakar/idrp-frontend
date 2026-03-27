// ─────────────────────────────────────────────
// SUB TYPES
// ─────────────────────────────────────────────

export type NewsletterPage = {
  title: string
  subtitle?: string
  body: string[]
  highlight?: string
}

// ─────────────────────────────────────────────
// MAIN NEWSLETTER TYPE
// ─────────────────────────────────────────────

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

  pages: NewsletterPage[]

  // 🔥 optional future-proof fields
  pdfUrl?: string
  visible?: boolean
}