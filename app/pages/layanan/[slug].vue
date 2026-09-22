<script setup lang="ts">
import { SERVICES, serviceBySlug } from '~/data/services'

const route = useRoute()
const slug = route.params.slug
const service = serviceBySlug(String(slug))

useHead(() => ({
  title: service ? `${service.title} Lampung | LampungMediaWeb` : 'Layanan Tidak Ditemukan | LampungMediaWeb',
  meta: service ? [
    { name: 'description', content: service.desc },
  ] : [{ name: 'robots', content: 'noindex' }],
  link: service ? [{ rel: 'canonical', href: `https://lampungmediaweb.com/layanan/${service.slug}` }] : [],
  script: service ? [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${service.title} di Lampung`,
        description: service.desc,
        url: `https://lampungmediaweb.com/layanan/${service.slug}`,
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://lampungmediaweb.com/#business',
          name: 'LampungMediaWeb',
          url: 'https://lampungmediaweb.com/',
        },
        areaServed: { '@type': 'State', name: 'Lampung' },
      }),
    },
  ] : [],
}))

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Layanan tidak ditemukan', fatal: true })
}

const next = SERVICES[(SERVICES.findIndex((s) => s.slug === service.slug) + 1) % SERVICES.length]
</script>

<template>
  <!-- Nuxt error boundary is not used; service is guaranteed above -->
  <section v-if="service" class="pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <nav class="text-xs font-semibold text-slate-500 sm:text-sm" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-brand-600">Beranda</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/layanan" class="hover:text-brand-600">Layanan</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-brand-600">{{ service.title }}</span>
      </nav>

      <div class="mt-6 grid gap-8 sm:mt-8 sm:gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white sm:h-14 sm:w-14">
            <AppIcon :name="service.icon" class="h-6 w-6 sm:h-7 sm:w-7" />
          </span>
          <h1 class="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-6 sm:text-3xl">
            {{ service.title }}
          </h1>
          <p class="mt-3 text-base font-semibold text-brand-600 sm:mt-4 sm:text-lg">{{ service.tagline }}</p>
          <p class="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">{{ service.desc }}</p>

          <h2 class="mt-8 text-lg font-extrabold text-slate-900 sm:mt-10 sm:text-xl">Yang Anda Dapatkan</h2>
          <ul class="mt-4 grid max-w-2xl gap-3 sm:mt-5 sm:grid-cols-2">
            <li v-for="b in service.benefits" :key="b" class="flex items-start gap-3 text-sm font-medium text-slate-700">
              <AppIcon name="check" class="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              {{ b }}
            </li>
          </ul>

          <div class="mt-6 max-w-2xl rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm leading-relaxed text-brand-900 sm:mt-8 sm:p-5">
            <strong>Cocok untuk:</strong> {{ service.bonus }}
          </div>

          <div class="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a :href="wa(`Halo LampungMediaWeb, saya tertarik layanan ${service.title}. Boleh info detail & biayanya?`)"
              target="_blank" rel="noopener"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:px-7 sm:py-3.5 sm:text-base">
              <AppIcon name="whatsapp" class="h-5 w-5" />
              Konsultasi {{ service.title }}
            </a>
            <NuxtLink to="/layanan"
              class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-brand-600 hover:text-brand-600 sm:px-7 sm:py-3.5 sm:text-base">
              Lihat Semua Layanan
            </NuxtLink>
          </div>
        </div>

        <aside class="rounded-3xl bg-brand-900 p-5 text-white sm:p-7 lg:sticky lg:top-20">
          <h2 class="text-lg font-extrabold">Perkiraan &amp; Cara Kerja</h2>
          <p class="mt-2 text-sm leading-relaxed text-brand-100">
            Harga beda-beda tiap proyek — tergantung jumlah halaman, fitur, dan konten yang disiapkan.
            Pengerjaan juga tergantung antrean.
          </p>
          <div class="mt-6 space-y-3 text-sm font-semibold">
            <p class="flex items-center justify-between border-b border-brand-800 pb-3">
              <span class="text-brand-200">Pengerjaan</span>
              <span>1–3 minggu</span>
            </p>
            <p class="flex items-center justify-between">
              <span class="text-brand-200">Garansi</span>
              <span>30 hari</span>
            </p>
          </div>
          <a :href="wa(`Halo LampungMediaWeb, saya tertarik ${service.title}, minta penawaran pasti.`)"
            target="_blank" rel="noopener"
            class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 font-bold text-brand-900 transition-colors hover:bg-accent-600">
            <AppIcon name="whatsapp" class="h-5 w-5" />
            Minta Penawaran
          </a>
          <NuxtLink :to="`/layanan/${next.slug}`"
            class="mt-4 block text-center text-sm font-bold text-brand-200 underline-offset-4 hover:text-white hover:underline">
            Selanjutnya: {{ next.title }}
          </NuxtLink>
        </aside>
      </div>
    </div>
  </section>
</template>