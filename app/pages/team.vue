<script setup lang="ts">
const team = [
  {
    name: 'Agung Prasetyo',
    role: 'Founder & Project Lead',
    initial: 'A',
    grad: 'from-brand-600 to-indigo-600',
    bio: 'Ngulik website sejak 2017. Biasa bantu UMKM sampai perusahaan di Lampung biar websitenya beres, cepat, dan gampang diurus sendiri.',
  },
  {
    name: 'Dery Andreansyah',
    role: 'UI/UX & Marketing',
    initial: 'D',
    grad: 'from-fuchsia-500 to-pink-500',
    bio: 'Ngulik desain dan marketing. Bikin tampilan yang enak dilihat tapi tetap ngarah ke closing, plus bantu iklan biar traffic jadi orderan.',
  },
]

useHead({
  title: 'Tim Kami: Orang di Balik LampungMediaWeb',
  meta: [
    { name: 'description', content: 'Kenalan dengan tim LampungMediaWeb: engineer, desainer, dan SEO di Bandar Lampung yang membangun website cepat dan kredibel untuk bisnis Lampung.' },
  ],
  link: [{ rel: 'canonical', href: 'https://lampungmediaweb.com/team' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Tim LampungMediaWeb',
        url: 'https://lampungmediaweb.com/team',
        mainEntity: {
          '@type': 'Organization',
          name: 'LampungMediaWeb',
          url: 'https://lampungmediaweb.com/',
          member: team.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role })),
        },
      }),
    },
  ],
})
</script>

<template>
  <!-- Hero -->
  <section class="pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-brand-600 sm:text-sm">Tim Kami</p>
        <h1 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
          Orang di balik website yang cepat & kredibel
        </h1>
        <p class="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
          Tim kecil, respons cepat. Berbasis di Bandar Lampung, kerja hybrid untuk seluruh Lampung tanpa birokrasi berlapis.
        </p>
      </div>

      <!-- Team grid -->
      <ul class="mx-auto mt-8 grid max-w-3xl gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2">
        <li v-for="m in team" :key="m.name"
          class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg sm:p-6">
          <div class="flex items-center gap-4">
            <span :class="['flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-extrabold text-white sm:h-14 sm:w-14 sm:text-xl', m.grad]">
              {{ m.initial }}
            </span>
            <div class="min-w-0">
              <h3 class="truncate text-base font-bold text-slate-900 sm:text-lg">{{ m.name }}</h3>
              <p class="text-xs font-semibold text-brand-600 sm:text-sm">{{ m.role }}</p>
            </div>
          </div>
          <p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{{ m.bio }}</p>
          <div class="mt-5 flex gap-2">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <AppIcon name="mail" class="h-4 w-4" />
            </span>
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <AppIcon name="linkedin" class="h-4 w-4" />
            </span>
          </div>
        </li>
      </ul>

      <!-- CTA -->
      <div class="mt-10 rounded-3xl bg-brand-900 p-6 text-center sm:mt-12 sm:p-8 lg:p-12">
        <h2 class="text-xl font-extrabold text-white sm:text-2xl">Mau kenalan dulu sebelum mulai proyek?</h2>
        <p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-brand-100 sm:text-base">
          Konsultasi 15 menit gratis via WhatsApp. Ceritakan bisnis Anda, kami kasih saran jujur, bahkan kalau ternyata belum butuh website baru.
        </p>
        <a :href="wa('Halo LampungMediaWeb, saya mau kenalan dengan tim sebelum konsultasi website')" target="_blank" rel="noopener"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-brand-900 transition-all hover:-translate-y-0.5 hover:bg-accent-600 sm:px-8 sm:py-4 sm:text-base">
          <AppIcon name="whatsapp" class="h-5 w-5" />
          Chat Tim Kami
        </a>
      </div>
    </div>
  </section>
</template>
