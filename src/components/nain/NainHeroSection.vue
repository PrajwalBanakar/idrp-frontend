<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
  subtitle: string
  primaryActionLabel?: string
  primaryActionHref?: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Government Initiatives',
  primaryActionLabel: 'Explore Institutes',
  primaryActionHref: '#institutes',
  secondaryActionLabel: 'Contact IDRP',
  secondaryActionTo: '/contact',
})
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700">
    <div class="absolute inset-0 opacity-10">
      <div
        class="h-full w-full bg-[radial-gradient(circle_at_top_left,_white_0,_transparent_35%),radial-gradient(circle_at_bottom_right,_white_0,_transparent_30%)]"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
      <div class="max-w-3xl">
        <div
          class="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-100"
        >
          {{ eyebrow }}
        </div>

        <h1 class="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {{ title }}
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-7 text-teal-50 md:text-lg">
          {{ subtitle }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            v-if="primaryActionLabel && primaryActionHref"
            :href="primaryActionHref"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50"
          >
            {{ primaryActionLabel }}
          </a>

          <RouterLink
            v-if="secondaryActionLabel && secondaryActionTo"
            :to="secondaryActionTo"
            class="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            {{ secondaryActionLabel }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>