<script setup lang="ts">
const team = [
  {
    name: 'Agung Prasetyo',
    role: 'Founder & Project Lead',
    initial: 'A',
    grad: 'from-brand-600 to-indigo-600',
    bio: '8 tahun bangun website untuk UMKM–korporat di Lampung. Jaga scope tetap ramping, deadline jelas.',
  },
  {
    name: 'Rina Sari',
    role: 'UI/UX Designer',
    initial: 'R',
    grad: 'from-fuchsia-500 to-pink-500',
    bio: 'Fokus konversi: hierarki, tipografi, dan alur checkout yang nggak bikin mikir.',
  },
  {
    name: 'Budi Pratama',
    role: 'Fullstack Developer',
    initial: 'B',
    grad: 'from-emerald-500 to-teal-600',
    bio: 'Nuxt, Laravel, dan optimasi Core Web Vitals. Suka hapus kode daripada nambah.',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'SEO & Content',
    initial: 'S',
    grad: 'from-amber-500 to-orange-500',
    bio: 'Riset kata kunci lokal Lampung, on-page, dan Google Business Profile.',
  },
  {
    name: 'Dimas Saputra',
    role: 'Mobile & Performance',
    initial: 'D',
    grad: 'from-sky-500 to-blue-600',
    bio: 'PWA & audit performa mobile-first. Target skor 95+ di PageSpeed.',
  },
  {
    name: 'Kamu Selanjutnya?',
    role: 'Join the Team',
    initial: '+',
    grad: 'from-slate-700 to-slate-900',
    bio: 'Kami buka magang/remote untuk talenta Lampung. Kirim portofolio via WhatsApp.',
    hiring: true,
  },
]

const values = [
  { icon: 'gauge', title: 'Cepat', desc: 'Skor PageSpeed 90+ adalah standar, bukan bonus.' },
  { icon: 'check', title: 'Jujur', desc: 'Harga transparan, revisi jelas, tanpa biaya siluman.' },
  { icon: 'users', title: 'Kolaboratif', desc: 'Update harian di WhatsApp, bukan hilang seminggu.' },
]

useHead({
  title: 'Tim Kami — Orang di Balik LampungMediaWeb',
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
          Tim kecil, respons cepat. Berbasis di Bandar Lampung, kerja hybrid untuk seluruh Lampung — tanpa birokrasi berlapis.
        </p>
      </div>

      <!-- Team grid -->
      <ul class="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="m in team" :key="m.name"
          :class="['group flex flex-col rounded-2xl border bg-white p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg', m.hiring ? 'border-dashed border-slate-300 bg-slate-50/50' : 'border-slate-200 hover:border-brand-200']">
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
          <a v-if="m.hiring" :href="wa('Halo LampungMediaWeb, saya tertarik join tim/magang. Ini portofolio saya: ')" target="_blank" rel="noopener"
            class="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-black">
            <AppIcon name="whatsapp" class="h-4 w-4" />
            Kirim Portofolio
          </a>
          <div v-else class="mt-5 flex gap-2">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <AppIcon name="mail" class="h-4 w-4" />
            </span>
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <AppIcon name="linkedin" class="h-4 w-4" />
            </span>
          </div>
        </li>
      </ul>

      <!-- Values -->
      <div class="mt-10 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-3">
        <div v-for="v in values" :key="v.title" class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <AppIcon :name="v.icon" class="h-5 w-5" />
          </span>
          <h3 class="mt-4 text-base font-bold text-slate-900">{{ v.title }}</h3>
          <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ v.desc }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-10 rounded-3xl bg-brand-900 p-6 text-center sm:mt-12 sm:p-8 lg:p-12">
        <h2 class="text-xl font-extrabold text-white sm:text-2xl">Mau kenalan dulu sebelum mulai proyek?</h2>
        <p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-brand-100 sm:text-base">
          Konsultasi 15 menit gratis via WhatsApp — ceritakan bisnis Anda, kami kasih saran jujur (bahkan kalau nggak butuh website baru).
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
