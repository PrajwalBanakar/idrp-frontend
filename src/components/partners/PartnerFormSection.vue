<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { partnerFormConfig } from '@/data/forms/partnerForm'

const formConfig = computed(() => partnerFormConfig)
</script>

<template>
  <GenericFormSection
    :config="formConfig"
  />
</template>