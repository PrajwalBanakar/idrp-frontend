<template>
  <section class="bg-gradient-to-b from-[#f7f4ee] to-[#efe9dd] px-6 py-20 md:px-16">
    <div class="mx-auto max-w-7xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Featured Collection
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Newsletter Bookshelf</h2>
        <p class="mx-auto mt-4 max-w-3xl text-gray-600">
          Browse IDRP newsletters as a curated bookshelf and open each issue in its own dedicated
          reading view.
        </p>
      </div>

      <div
        class="relative overflow-hidden rounded-[2rem] border border-[#d9d0c1] bg-[#f8f3ea] px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:px-10"
      >
        <div
          class="pointer-events-none absolute left-4 right-4 top-[7.25rem] hidden h-4 rounded-full bg-gradient-to-b from-[#9a6a3d] to-[#6f4725] shadow-lg md:block"
        />
        <div
          class="pointer-events-none absolute left-4 right-4 bottom-8 hidden h-4 rounded-full bg-gradient-to-b from-[#9a6a3d] to-[#6f4725] shadow-lg md:block"
        />

        <div class="relative z-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          <RouterLink
            v-for="newsletter in newsletters"
            :key="newsletter.id"
            :to="`/resources/newsletters/${newsletter.slug}`"
            class="group relative flex h-[240px] w-full items-end justify-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              class="relative h-[220px] w-[92%] rounded-l-md rounded-r-xl border border-black/10 text-left shadow-[12px_10px_24px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:shadow-[16px_14px_30px_rgba(0,0,0,0.22)]"
              :style="{ background: newsletter.coverGradient }"
            >
              <div class="absolute left-0 top-0 h-full w-4 rounded-l-md bg-black/15" />

              <div class="flex h-full flex-col justify-between p-4 pl-6 text-white">
                <span class="badge">{{ newsletter.issue }}</span>

                <div>
                  <h3 class="text-lg font-extrabold leading-snug line-clamp-4">
                    {{ newsletter.title }}
                  </h3>
                  <p class="mt-3 text-xs text-white/85">
                    {{ newsletter.date }}
                  </p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Newsletter } from '@/types/newsletter'

defineProps<{
  newsletters: Newsletter[]
}>()
</script>