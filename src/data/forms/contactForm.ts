import type { FormConfig } from '@/types/form'

export const contactFormConfig: FormConfig = {
  id: 'contact-form',
  type: 'contact',
  title: 'Contact Us',
  description: 'Reach out to the IDRP team for partnerships, programs, and general queries.',
  submitLabel: 'Send Message',
  resetOnSuccess: true,
  successMessage: 'Your message has been submitted successfully.',
  endpoint: '/api/forms/contact',
  meta: {
    sourcePage: '/contact',
  },
  sections: [
    {
      id: 'contact-main',
      fields: [
        {
          name: 'name',
          label: 'Full Name',
          type: 'text',
          placeholder: 'Enter your full name',
          required: true,
          width: 'half',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          placeholder: 'Enter your phone number',
          required: true, // ← match your old form
          width: 'half',
          validation: [{ type: 'phone' }],
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Enter your email address',
          required: true,
          width: 'full',
          validation: [{ type: 'email' }],
        },
        {
          name: 'organization',
          label: 'Organization',
          type: 'text',
          placeholder: 'Enter your organization name',
          width: 'full',
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
          placeholder: 'Tell us how we can help',
          required: true,
          width: 'full',
          validation: [{ type: 'minLength', value: 10 }],
        },

        // ✅ Consent added here
        {
          name: 'consent',
          label: 'Consent',
          type: 'checkbox',
          checkboxLabel: 'I have read and agree to the disclaimer',
          required: true,
          width: 'full',
        },
      ],
    },
  ],
}