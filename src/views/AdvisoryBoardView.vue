<template>
  <div class="advisory-board-view">
    <!-- Hero Banner -->
    <section class="relative h-[50vh] min-h-[340px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/advisory-board-hero.jfif"
        alt="Advisory Board"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/30" />
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Strategic Guidance
          </span>
        </div>
        <h1 class="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Advisory Board
        </h1>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-600">
          Expert Leadership
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold text-gray-900">
          Guidance that strengthens innovation and growth
        </h2>
        <p class="text-lg leading-relaxed text-gray-600">
          Our Advisory Board brings together accomplished leaders from academia,
          industry, entrepreneurship, and technology ecosystems. Their guidance
          helps IDRP stay future-ready, build strong collaborations, and shape
          meaningful innovation pathways that create long-term impact.
        </p>
        <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
      </div>
    </section>

    <!-- Advisory Board Members -->
    <section class="bg-white px-6 pb-24 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          <article
            v-for="member in advisoryMembers"
            :key="member.name"
            class="group flex flex-col items-center text-center"
          >
            <div
              class="mb-5 h-60 w-60 overflow-hidden rounded-full shadow-lg ring-4 ring-gray-100 transition-all duration-300 group-hover:ring-teal-300"
            >
              <img
                v-if="member.visible"
                :src="member.image"
                :alt="member.name"
                class="h-full w-full object-cover object-top"
                @error="member.visible = false"
              />
              <div
                v-else
                class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 text-5xl"
              >
                👤
              </div>
            </div>

            <h3 class="text-lg font-bold text-gray-900">{{ member.name }}</h3>
            <p class="mt-1 text-sm font-semibold text-teal-600">
              {{ member.role }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 class="text-2xl font-bold text-white">
            Want to know more about our leadership ecosystem?
          </h3>
          <p class="mt-2 text-teal-100">
            Explore IDRP, our mentors, and connect with our team.
          </p>
        </div>

        <div class="flex shrink-0 gap-4">
          <RouterLink
            to="/about-idrp"
            class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition-colors hover:bg-teal-50"
          >
            About IDRP
          </RouterLink>
          <RouterLink
            to="/contact"
            class="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

type AdvisoryMember = {
  name: string
  role: string
  image: string
  visible: boolean
}

const showHeroImage = ref(true)

const advisoryMembers = reactive<AdvisoryMember[]>([
  {
    name: 'Kathik Sankaran',
    role: 'Advisory Board Member',
    image: '/advisory-karthik.jfif',
    visible: true,
  },
  {
    name: 'Poyni Bhatt',
    role: 'Advisory Board Member',
    image: '/advisory-poyni.jfif',
    visible: true,
  },
  {
    name: 'Ram Subramanian',
    role: 'Advisory Board Member',
    image: '/advisory-ram.jfif',
    visible: true,
  },
  {
    name: 'Amar Gaonkar',
    role: 'Advisory Board Member',
    image: '/advisory-amar.jfif',
    visible: true,
  },
])
</script>