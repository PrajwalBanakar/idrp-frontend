<template>
  <div
    v-if="applyPage"
    class="course-apply-view"
  >
    <CourseApplyHeroSection
      :eyebrow="applyPage.eyebrow"
      :title="applyPage.title"
      :description="applyPage.description"
    />

    <CourseApplyFormSection :course="applyPage.course" />
  </div>

  <CourseApplyNotFound v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import CourseApplyFormSection from '@/components/academy/CourseApplyFormSection.vue'
import CourseApplyHeroSection from '@/components/academy/CourseApplyHeroSection.vue'
import CourseApplyNotFound from '@/components/academy/CourseApplyNotFound.vue'

import { getCourseApplyPageBySlug } from '@/data/courses'

const route = useRoute()

const applyPage = computed(() =>
  getCourseApplyPageBySlug(String(route.params.slug ?? '')),
)
</script>