<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { createCourseApplicationFormConfig } from '@/data/forms/courseApplyForm'
import type { Course } from '@/types/courses'

const props = defineProps<{
  course: Course
}>()

const formConfig = computed(() =>
  createCourseApplicationFormConfig(props.course),
)
</script>

<template>
  <GenericFormSection
    :config="formConfig"
    success-text="Your application has been submitted successfully."
  />
</template>