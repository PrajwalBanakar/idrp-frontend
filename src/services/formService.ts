import type { FormConfig, FormMeta, FormSubmitEnvelope, FormSubmitResult, FormValues } from '@/types/form'

function mapValuesToPayload(config: FormConfig, values: FormValues): Record<string, string | number | boolean | null> {
  const fields = config.sections.flatMap((section) => section.fields)

  return fields.reduce<Record<string, string | number | boolean | null>>((acc, field) => {
    const key = field.backendKey ?? field.name
    acc[key] = values[field.name] ?? null
    return acc
  }, {})
}

export function buildFormPayload(config: FormConfig, values: FormValues): FormSubmitEnvelope {
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

export async function submitForm(config: FormConfig, values: FormValues): Promise<FormSubmitResult> {
  const payload = buildFormPayload(config, values)

  // Replace this later with real backend endpoint logic
  // For now this keeps frontend ready without coupling each form to fetch details.
  console.log('Submitting form payload:', payload)

  try {
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
      message: error instanceof Error ? error.message : 'Something went wrong while submitting the form.',
    }
  }
}