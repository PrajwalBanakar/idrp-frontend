<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Join the Ecosystem',
  secondaryActionLabel: '',
  secondaryActionTo: '',
})
</script>

<template>
  <section class="bg-white px-6 pb-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 px-8 py-12 text-white shadow-xl md:px-12 md:py-16"
      >
        <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
        <div class="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10" />

        <div class="relative z-10 mx-auto max-w-3xl text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-100">
            {{ eyebrow }}
          </span>

          <h2 class="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {{ title }}
          </h2>

          <p class="mt-4 leading-relaxed text-teal-50">
            {{ description }}
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RouterLink
              :to="primaryActionTo"
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-700 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {{ primaryActionLabel }}
            </RouterLink>

            <RouterLink
              v-if="secondaryActionLabel && secondaryActionTo"
              :to="secondaryActionTo"
              class="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              {{ secondaryActionLabel }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>