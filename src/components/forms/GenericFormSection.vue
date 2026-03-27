<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import BaseForm from '@/components/forms/BaseForm.vue'
import type { FormConfig } from '@/types/form'

const props = defineProps<{
  config: FormConfig
  successText?: string
  cardClass?: string
}>()

const submitted = ref(false)

const resolvedSuccessText = computed(
  () =>
    props.successText ||
    props.config.successMessage ||
    'Your form has been submitted successfully.',
)

watch(
  () => props.config.id,
  () => {
    submitted.value = false
  },
)

function handleSuccess() {
  submitted.value = true
}
</script>

<template>
  <div :class="props.cardClass || 'rounded-3xl bg-white p-8 shadow-xl'">
    <BaseForm :config="config" @success="handleSuccess" />

    <p
      v-if="submitted"
      class="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
    >
      {{ resolvedSuccessText }}
    </p>
  </div>
</template>