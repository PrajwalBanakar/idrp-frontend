import type {
  FormConfig,
  FormMeta,
  FormSubmitEnvelope,
  FormSubmitResult,
  FormValues,
  FormValue,
} from '@/types/form'

function mapValuesToPayload(
  config: FormConfig,
  values: FormValues,
): Record<string, string | number | boolean | string[] | null> {
  const fields = config.sections.flatMap((section) => section.fields)

  return fields.reduce<Record<string, string | number | boolean | string[] | null>>(
    (acc, field) => {
      const key = field.backendKey ?? field.name
      acc[key] = values[field.name] ?? null
      return acc
    },
    {},
  )
}

export function buildFormPayload(
  config: FormConfig,
  values: FormValues,
): FormSubmitEnvelope {
  const meta: FormMeta = {
    formType: config.type,
    submittedAt: new Date().toISOString(),
    ...(config.meta ?? {}),
  }

  if (config.transformPayload) {
    return config.transformPayload(values, meta)
  }

  return {
    formId: config.id,
    formType: config.type,
    meta,
    data: mapValuesToPayload(config, values),
  }
}

function normalizeWeb3FormsValue(value: FormValue): string | number | boolean {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (value === null) {
    return ''
  }

  return value
}

function isWeb3FormsEndpoint(endpoint?: string): boolean {
  return endpoint === 'https://api.web3forms.com/submit'
}

async function submitToWeb3Forms(
  config: FormConfig,
  payload: FormSubmitEnvelope,
): Promise<FormSubmitResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return {
      success: false,
      message: 'Web3Forms access key is missing. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.',
    }
  }

  const web3Payload: Record<string, string | number | boolean> = {
    access_key: accessKey,
    subject: `[IDRP] ${config.type} - ${config.title ?? 'Form Submission'}`,
    from_name: 'IDRP Website',
    form_id: payload.formId,
    form_type: payload.formType,
    submitted_at: payload.meta.submittedAt ?? '',
    source_page: String(payload.meta.sourcePage ?? ''),
  }

  for (const [key, value] of Object.entries(payload.data)) {
    web3Payload[key] = normalizeWeb3FormsValue(value)
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(web3Payload),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit form.')
  }

  return {
    success: true,
    message: config.successMessage ?? result.message ?? 'Form submitted successfully.',
  }
}

export async function submitForm(
  config: FormConfig,
  values: FormValues,
): Promise<FormSubmitResult> {
  const payload = buildFormPayload(config, values)

  console.log('Submitting form payload:', payload)

  try {
    if (isWeb3FormsEndpoint(config.endpoint)) {
      return await submitToWeb3Forms(config, payload)
    }

    if (config.endpoint) {
      const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form.')
      }

      return {
        success: true,
        message: config.successMessage ?? 'Form submitted successfully.',
      }
    }

    return {
      success: true,
      message: config.successMessage ?? 'Form submitted successfully.',
    }
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Something went wrong while submitting the form.',
    }
  }
}