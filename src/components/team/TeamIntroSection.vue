<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
  description: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'The People Behind IDRP',
})
</script>

<template>
  <section class="bg-white px-6 py-20 md:px-16">
    <div class="mx-auto max-w-4xl text-center">
      <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
        {{ eyebrow }}
      </span>

      <h2 class="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        {{ title }}
      </h2>

      <p class="mt-4 leading-relaxed text-gray-600">
        {{ description }}
      </p>
    </div>
  </section>
</template>