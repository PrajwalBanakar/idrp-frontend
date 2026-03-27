import type { FormConfig } from '@/types/form'
import { contactFormConfig } from '@/data/forms/contactForm'
import { partnerFormConfig } from '@/data/forms/partnerForm'

export const formRegistry: Record<string, FormConfig> = {
  contact: contactFormConfig,
  partner: partnerFormConfig,
}