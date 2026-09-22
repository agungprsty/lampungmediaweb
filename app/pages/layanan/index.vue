<script setup lang="ts">
import { ref, computed } from 'vue'
import { SERVICES, serviceGroups } from '~/data/services'

const active = ref('Semua')
const filtered = computed(() =>
  active.value === 'Semua' ? SERVICES : SERVICES.filter((s) => s.group === active.value),
)

useHead({
  title: 'Jasa Pembuatan Website Berdasarkan Jenis Bisnis | LampungMediaWeb',
  meta: [
    { name: 'description', content: 'Jenis website yang dikerjakan LampungMediaWeb: landing page, company profile, toko online, sekolah, klinik, hotel, dan custom. Konsultasi dulu, gratis.' },
  ],
  link: [{ rel: 'canonical', href: 'https://lampungmediaweb.com/layanan' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Layanan Pembuatan Website LampungMediaWeb',
        url: 'https://lampungmediaweb.com/layanan',
        numberOfItems: SERVICES.length,
        itemListElement: SERVICES.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.title,
          url: `https://lampungmediaweb.com/layanan/${s.slug}`,
        })),
      }),
    },
  ],
})
</script>

<template>
  <section id="jenis" class="pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-widest text-brand-600 sm:text-sm">Layanan Kami</p>
        <h1 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
          Jenis Website yang Kami Kerjakan
        </h1>
        <p class="mt-3 text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
          Kami tidak kerja dengan satu template umum. Tiap bisnis beda-beda, jadi layanannya juga
          kami pecah per jenis. Cari yang paling mirip situasi Anda, atau langsung tanya
          — lebih cepat dibanding nebak sendiri.
        </p>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-2 sm:mt-8" role="group" aria-label="Filter kategori layanan">
        <button
          :class="active === 'Semua'
            ? 'bg-brand-600 text-white border-brand-600'
            : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-600'"
          class="rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
          @click="active = 'Semua'">
          Semua
        </button>
        <button
          v-for="g in serviceGroups" :key="g"
          :class="active === g
            ? 'bg-brand-600 text-white border-brand-600'
            : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-600'"
          class="rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
          @click="active = g">
          {{ g }}
        </button>
      </div>

      <ul class="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="s in filtered" :key="s.slug" class="group">
          <NuxtLink :to="`/layanan/${s.slug}`"
            class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg">
            <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <AppIcon :name="s.icon" class="h-6 w-6" />
            </span>
            <h3 class="mt-5 text-lg font-bold text-slate-900">{{ s.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{{ s.tagline }}</p>
            <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
              Lihat Detail
              <AppIcon name="arrowRight" class="h-4 w-4" />
            </span>
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-10 rounded-3xl bg-brand-900 p-6 text-center sm:mt-16 sm:p-8 lg:p-12">
        <h2 class="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">Tidak ketemu yang pas?</h2>
        <p class="mx-auto mt-3 max-w-xl leading-relaxed text-brand-100">
          Kemungkinan besar kebutuhan Anda cuma butuh dijelaskan dulu di chat. Ceritakan bisnisnya,
          kami kasih saran entah itu masuk kategori ini atau custom.
        </p>
        <a :href="wa('Halo LampungMediaWeb, saya mau konsultasi jenis website yang cocok untuk bisnis saya.')" target="_blank" rel="noopener"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-bold text-brand-900 transition-all hover:-translate-y-0.5 hover:bg-accent-600 sm:mt-7 sm:px-8 sm:py-4">
          <AppIcon name="whatsapp" class="h-5 w-5" />
          Tanya ke WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>