<script setup lang="ts">
type Props = {
  images: { src: string; alt?: string }[]
}

defineProps<Props>()
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="img in images"
          :key="img.src"
          class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <img
            :src="img.src"
            :alt="img.alt || 'NAIN activity'"
            class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>