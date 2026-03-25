<template>
  <div class="min-h-screen bg-gray-50 px-6 py-16 md:px-16">
    <div class="mx-auto max-w-3xl">
      <!-- Header -->
      <div class="mb-10 text-center">
        <h1 class="text-3xl font-bold text-gray-900">Event Registration</h1>
        <p class="mt-2 text-gray-500">
          Register for the event and we’ll get back to you with confirmation details.
        </p>
      </div>

      <!-- Event Not Found -->
      <div
        v-if="!event"
        class="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm"
      >
        <div class="mb-4 text-4xl">📅</div>
        <h2 class="text-2xl font-bold text-gray-900">Event not found</h2>
        <p class="mt-3 text-gray-500">
          The event you are trying to register for does not exist or may have been removed.
        </p>

        <RouterLink
          to="/events"
          class="mt-6 inline-block rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
        >
          Back to Events
        </RouterLink>
      </div>

      <template v-else>
        <!-- Event Info -->
        <div class="mb-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 class="text-xl font-bold text-gray-900">{{ event.title }}</h2>
          <p class="mt-2 text-sm text-gray-500">{{ event.date }} • {{ event.time || '—' }}</p>
          <p class="text-sm text-gray-500">{{ event.location }}</p>
        </div>

        <!-- Form -->
        <div
          v-if="!submitted"
          class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
        >
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="text-sm font-semibold text-gray-700">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:ring-0"
              />
            </div>

            <div>
              <label class="text-sm font-semibold text-gray-700">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:ring-0"
              />
            </div>

            <div>
              <label class="text-sm font-semibold text-gray-700">Phone</label>
              <input
                v-model="form.phone"
                type="tel"
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:ring-0"
              />
            </div>

            <div>
              <label class="text-sm font-semibold text-gray-700">Organisation / Startup</label>
              <input
                v-model="form.organization"
                type="text"
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:ring-0"
              />
            </div>

            <div>
              <label class="text-sm font-semibold text-gray-700">Why do you want to attend?</label>
              <textarea
                v-model="form.reason"
                rows="3"
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:ring-0"
              />
            </div>

            <button
              type="submit"
              class="w-full rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
            >
              Submit Registration
            </button>
          </form>
        </div>

        <!-- Success -->
        <div
          v-else
          class="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm"
        >
          <div class="mb-4 text-4xl">✅</div>
          <h2 class="text-2xl font-bold text-gray-900">Registration Successful!</h2>
          <p class="mt-3 text-gray-500">
            Thank you for registering for <span class="font-semibold text-gray-700">{{ event.title }}</span
            >. We’ll share further details with you soon.
          </p>

          <RouterLink
            to="/events"
            class="mt-6 inline-block rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
          >
            Back to Events
          </RouterLink>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { events } from '@/data/events'

const route = useRoute()

const event = computed(() => {
  const id = Number(route.params.id)
  return events.find((item) => item.id === id) ?? null
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  organization: '',
  reason: '',
})

const submitted = ref(false)

function handleSubmit() {
  console.log('Form Data:', {
    eventId: event.value?.id,
    eventTitle: event.value?.title,
    ...form,
  })
  submitted.value = true
}
</script>