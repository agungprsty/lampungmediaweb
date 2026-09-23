<script setup lang="ts">
import { PORTFOLIO } from '~/data/portfolio'

useHead({
  title: 'Proyek & Portofolio Website | LampungMediaWeb',
  meta: [
    { name: 'description', content: 'Lihat proyek terpilih LampungMediaWeb: company profile, toko online, sistem booking, landing page, hingga aplikasi klinik di Lampung. Hasil nyata untuk bisnis.' },
  ],
  link: [{ rel: 'canonical', href: 'https://lampungmediaweb.com/proyek' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://lampungmediaweb.com/' },
          { '@type': 'ListItem', position: 2, name: 'Proyek', item: 'https://lampungmediaweb.com/proyek' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portofolio LampungMediaWeb',
        url: 'https://lampungmediaweb.com/proyek',
        description: 'Kumpulan proyek website oleh LampungMediaWeb di Lampung.',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: PORTFOLIO.length,
          itemListElement: PORTFOLIO.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.title,
            url: `https://lampungmediaweb.com/proyek#${p.domain}`,
          })),
        },
      }),
    },
  ],
})
</script>

<template>
  <section class="pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <nav class="text-xs font-semibold text-slate-500 sm:text-sm" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-brand-600">Beranda</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-brand-600" aria-current="page">Proyek</span>
      </nav>

      <div class="mt-4 max-w-3xl sm:mt-5">
        <h1 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Proyek yang Berdampak untuk Klien Kami
        </h1>
        <p class="mt-3 text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
          Tiap proyek di bawah ini dibangun sebagai mesin omzet dari company profile hingga toko online dan sistem booking.
        </p>
      </div>

      <ul class="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="p in PORTFOLIO" :key="p.title" class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
          <a :href="p.url" target="_blank" rel="noopener" class="relative flex aspect-[4/3] flex-col overflow-hidden border-b border-slate-100" aria-label="Buka {{ p.title }}">
            <div class="flex items-center gap-1.5 border-b border-slate-100 bg-white px-4 py-2.5">
              <span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
              <span class="ml-2 truncate rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-400">{{ p.domain }}</span>
            </div>
            <div class="relative flex-1">
              <PortfolioThumb :item="p" />
            </div>
          </a>
          <div class="flex flex-1 flex-col p-6">
            <span class="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{{ p.tag }}</span>
            <h3 class="mt-3 text-lg font-bold text-slate-900">{{ p.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{{ p.desc }}</p>
            <a :href="p.url" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700">
              Kunjungi situs
              <AppIcon name="arrowRight" class="h-3.5 w-3.5" />
            </a>
          </div>
        </li>
      </ul>

      <div class="mt-10 rounded-3xl bg-brand-900 p-6 text-center sm:mt-16 sm:p-8 lg:p-12">
        <h2 class="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">Punya ide proyek serupa?</h2>
        <p class="mx-auto mt-3 max-w-xl leading-relaxed text-brand-100">
          Ceritakan bisnis Anda, kami kasih saran jujur bahkan kalau ternyata belum butuh website baru.
        </p>
        <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row">
          <a :href="wa('Halo LampungMediaWeb, saya tertarik bikin website seperti di halaman proyek')" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-bold text-brand-900 transition-all hover:-translate-y-0.5 hover:bg-accent-600 sm:px-8 sm:py-4">
            <AppIcon name="whatsapp" class="h-5 w-5" />
            Konsultasi Gratis
          </a>
          <NuxtLink to="/#proyek"
            class="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-6 py-3 font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:px-8 sm:py-4">
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
