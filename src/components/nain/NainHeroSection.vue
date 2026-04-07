<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Government Initiatives',
})
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-700">
    <!-- soft fade like other pages -->
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

    <div class="relative mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16 lg:px-16">
      <div class="max-w-4xl">
        
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-cyan-400" />
          <span class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {{ eyebrow }}
          </span>
        </div>

        <h1 class="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
          {{ title }}
        </h1>

      </div>
    </div>
  </section>
</template>