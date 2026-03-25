export type Partner = {
  name: string
  abbr: string
  color: string
}

export type PartnerCategory = {
  key: string
  title: string
  subtitle: string
  description: string
  icon: string
  iconBgClass: string
  textClass: string
  hoverBorderClass: string
  partners: Partner[]
}

export type PartnerForm = {
  orgName: string
  name: string
  email: string
  phone: string
  partnerType: string
  url: string
  description: string
  consent: boolean
}