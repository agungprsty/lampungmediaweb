<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Jasa Pembuatan Website di Lampung & Bandar Lampung | LampungMediaWeb',
  link: [{ rel: 'canonical', href: 'https://lampungmediaweb.com/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://lampungmediaweb.com/#business',
        name: 'LampungMediaWeb',
        url: 'https://lampungmediaweb.com/',
        image: 'https://lampungmediaweb.com/og-cover.svg',
        logo: 'https://lampungmediaweb.com/favicon.svg',
        description: 'Software house di Bandar Lampung: jasa pembuatan website company profile, toko online, aplikasi web, dan SEO.',
        telephone: '+6281234567890',
        email: 'halo@lampungmediaweb.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bandar Lampung',
          addressRegion: 'Lampung',
          addressCountry: 'ID',
        },
        geo: { '@type': 'GeoCoordinates', latitude: -5.45, longitude: 105.2531 },
        priceRange: 'Rp 1.500.000 - Rp 7.000.000',
        openingHours: 'Mo-Sa 08:00-21:00',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '100' },
        sameAs: [
          'https://www.instagram.com/lampungmediaweb',
          'https://www.facebook.com/lampungmediaweb',
          'https://www.linkedin.com/company/lampungmediaweb',
        ],
        makesOffer: [
          { '@type': 'Offer', name: 'UMKM Starter', price: '1500000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Company Profile', price: '3500000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Toko Online', price: '7000000', priceCurrency: 'IDR' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Berapa lama website selesai dibuat?',
            acceptedAnswer: { '@type': 'Answer', text: 'Paket UMKM dan Company Profile umumnya selesai dalam 7–14 hari kerja sejak desain disetujui. Toko online membutuhkan sekitar 2–3 minggu.' },
          },
          {
            '@type': 'Question',
            name: 'Apakah domain dan hosting sudah termasuk?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ya. Semua paket sudah termasuk gratis domain .com/.id untuk tahun pertama dan hosting cepat. Biaya perpanjangan tahun berikutnya transparan sesuai paket.' },
          },
          {
            '@type': 'Question',
            name: 'Apakah website bisa ditemukan di Google?',
            acceptedAnswer: { '@type': 'Answer', text: 'Setiap website kami dioptimasi SEO on-page dan didaftarkan ke Google Search Console. Layanan SEO khusus tersedia untuk kata kunci lokal Lampung.' },
          },
          {
            '@type': 'Question',
            name: 'Kota mana saja yang dilayani LampungMediaWeb?',
            acceptedAnswer: { '@type': 'Answer', text: 'Kami melayani seluruh Provinsi Lampung: Bandar Lampung, Metro, Lampung Selatan, Lampung Timur, Lampung Tengah, Lampung Utara, Pringsewu, dan Pesawaran.' },
          },
          {
            '@type': 'Question',
            name: 'Apakah ada garansi?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ada. Setiap paket bergaransi 30 hari uang kembali bila hasil tidak sesuai kesepakatan. Kode dan konten tetap milik Anda.' },
          },
        ],
      }),
    },
  ],
})

const services = [
  {
    icon: 'code',
    title: 'Website Company Profile',
    desc: 'Marketplace digital untuk memperkenalkan bisnis Anda secara profesional dan kredibel.',
    items: ['Hingga 10 halaman', 'Gratis domain & email bisnis', 'SEO on-page siap index'],
  },
  {
    icon: 'shoppingBag',
    title: 'Toko Online',
    desc: 'Platform jualan lengkap dengan pembayaran dan ongkir otomatis untuk seluruh Indonesia.',
    items: ['Integrasi payment gateway', 'Hitung ongkir JNE/J&T otomatis', 'Manajemen stok & kupon'],
  },
  {
    icon: 'smartphone',
    title: 'Aplikasi Web / Sistem',
    desc: 'Sistem internal yang merapikan operasional: CRM, booking, absensi, hingga dashboard manajemen.',
    items: ['Kustom sesuai alur bisnis', 'Dashboard & laporan realtime', 'Multi-user dengan hak akses'],
  },
  {
    icon: 'rocket',
    title: 'Landing Page & SEO',
    desc: 'Halaman iklan super cepat yang mengubah klik jadi leads, plus optimasi kata kunci lokal.',
    items: ['Load di bawah 2 detik', 'Fokus konversi iklan', 'Optimasi Google Maps & lokal'],
  },
]

const process = [
  { step: '01', title: 'Konsultasi & Riset', desc: 'Kami pahami bisnis, kompetitor, dan target pasar Anda lewat diskusi gratis.' },
  { step: '02', title: 'Desain Wireframe', desc: 'Struktur dan alur halaman disusun dulu. Revisi tanpa biaya sampai desain pas.' },
  { step: '03', title: 'Development', desc: 'Kode ditulis oleh engineer, bukan template. Responsif dari ponsel sampai desktop.' },
  { step: '04', title: 'Launch & Support', desc: 'SEO diaktifkan, lalu kami dampingi dengan garansi & maintenance rutin.' },
]

const plans = [
  {
    name: 'UMKM Starter',
    desc: 'Untuk bisnis yang baru mulai tampil online.',
    price: 'Rp 1,5jt',
    original: 'Rp 2.000.000',
    renewal: '+ Rp 800rb/tahun',
    cta: 'Pilih Paket',
    featured: false,
    perks: ['Gratis domain & hosting 1GB SSD', '3 halaman desain premium', 'Tombol chat WhatsApp', 'Setup Google indexing'],
  },
  {
    name: 'Company Profile',
    desc: 'Membangun kredibilitas & kepercayaan pelanggan.',
    price: 'Rp 3,5jt',
    original: 'Rp 4.000.000',
    badge: 'Hemat 12%',
    renewal: '+ Rp 1jt/tahun',
    cta: 'Tambah ke Troli',
    featured: true,
    perks: ['Semua fitur Starter', 'Unlimited bandwidth', 'Hingga 10 halaman', 'Custom email (@nama.com)', 'Gratis maintenance 1 bulan'],
  },
  {
    name: 'Toko Online',
    desc: 'Siap jualan ke seluruh Indonesia.',
    price: 'Rp 7jt',
    original: 'Rp 8.500.000',
    renewal: '+ Rp 2,5jt/tahun',
    cta: 'Hubungi Kami',
    featured: false,
    perks: ['Semua fitur Pro', 'Keranjang belanja', 'Ongkir otomatis JNE/J&T', 'Payment gateway (QRIS, BCA)', 'Manajemen stok & kupon'],
  },
  {
    name: 'Custom',
    desc: 'Butuh alur khusus di luar paket standar.',
    price: 'Custom',
    original: '',
    renewal: 'Penawaran setelah konsultasi',
    cta: 'Konsultasi Gratis',
    featured: false,
    perks: ['Bebas request fitur', 'Desain sesuai alur bisnis', 'Integrasi API/sistem lama', 'Pendampingan prioritas', 'Estimasi transparan'],
  },
]

const portfolio = [
  {
    tag: 'Company Profile',
    grad: 'from-amber-400/80 to-orange-500/80',
    title: 'PT. Konstruksi Lampung Jaya',
    domain: 'konstruksilampungjaya.co.id',
    desc: 'Website kontraktor dengan galeri 120+ proyek, sertifikat, dan form estimasi biaya yang diintegrasikan ke WhatsApp.',
    result: '+45 proyek tender dalam setahun',
  },
  {
    tag: 'Toko Online',
    grad: 'from-emerald-400/80 to-teal-600/80',
    title: 'Krakatau Roastery',
    domain: 'krakatauroastery.com',
    desc: 'E-commerce biji kopi Lampung dengan keranjang, pembayaran QRIS/BCA, dan ongkir otomatis JNE & J&T.',
    result: '3× omzet online dalam 6 bulan',
  },
  {
    tag: 'Sistem Booking',
    grad: 'from-violet-400/80 to-indigo-600/80',
    title: 'Glow Aesthetic Clinic',
    domain: 'glowclinic.id',
    desc: 'Website klinik kecantikan dengan booking jadwal dokter online dan pengingat WhatsApp otomatis.',
    result: '1.200+ reservasi online/tahun',
  },
  {
    tag: 'Toko Online',
    grad: 'from-sky-400/80 to-blue-600/80',
    title: 'Batik Khatulistiwa',
    domain: 'batikkhatulistiwa.com',
    desc: 'Toko online batik khas Lampung. Stok, kupon diskon, dan laporan penjualan dikelola sendiri oleh pemilik.',
    result: '1.800+ produk terjual online',
  },
  {
    tag: 'Landing Page',
    grad: 'from-rose-400/80 to-pink-600/80',
    title: 'RentCar Bandar Lampung',
    domain: 'rentcarlampung.com',
    desc: 'Landing page iklan Google + Meta dengan form pemesanan 1 langkah dan tracking konversi penuh.',
    result: 'CPA turun 40% dari iklan',
  },
  {
    tag: 'System Aplikasi',
    grad: 'from-teal-400/80 to-cyan-600/80',
    title: 'Klinik Sehati',
    domain: 'sehati-medical.com',
    desc: 'Sistem rekam medis digital dan manajemen antrean pasien untuk jaringan klinik di Bandar Lampung.',
    result: '5.000+ pasien terdaftar',
  },
]

const faq = [
  {
    q: 'Berapa lama website selesai dibuat?',
    a: 'Paket UMKM dan Company Profile umumnya selesai dalam 7–14 hari kerja sejak desain disetujui. Toko online dengan fitur lengkap membutuhkan sekitar 2–3 minggu tergantung kompleksitas.',
  },
  {
    q: 'Apakah domain dan hosting sudah termasuk?',
    a: 'Ya. Semua paket sudah termasuk gratis domain .com/.id untuk tahun pertama dan hosting cepat. Setelah tahun pertama, biaya perpanjangan sesuai paket dengan harga transparan.',
  },
  {
    q: 'Apakah website bisa ditemukan di Google?',
    a: 'Setiap website kami dioptimasi SEO on-page dan didaftarkan ke Google Search Console. Untuk hasil maksimal di kata kunci lokal Lampung, kami juga menawarkan layanan optimasi SEO tambahan.',
  },
  {
    q: 'Kota mana saja yang dilayani LampungMediaWeb?',
    a: 'Kami melayani seluruh Provinsi Lampung: Bandar Lampung, Metro, Lampung Selatan, Lampung Timur, Lampung Tengah, Lampung Utara, hingga Pringsewu dan Pesawaran. Pengerjaan online, konsultasi bisa via WhatsApp atau tatap muka.',
  },
  {
    q: 'Apakah ada garansi?',
    a: 'Ada. Setiap paket bergaransi 30 hari uang kembali bila hasil tidak sesuai kesepakatan. Kode dan konten tetap milik Anda, dan kami berikan dukungan teknis 24/7.',
  },
]

const testimonials = [
  {
    name: 'Bpk. Agus',
    role: 'Owner Kontraktor, Bandar Lampung',
    initial: 'A',
    stars: 5,
    quote: 'Website cepat jadi, tampilannya elegan persis yang saya mau. Kini kami terlihat lebih bonafit di Google.',
  },
  {
    name: 'Ibu Siti',
    role: 'Toko Hijab Online, Metro',
    initial: 'S',
    stars: 5,
    quote: 'Admin fast respon dan sabar ngajarin cara upload produk. Fitur ongkir otomatisnya sangat membantu toko saya.',
  },
  {
    name: 'Budi Santoso',
    role: 'Klinik Gigi, Pringsewu',
    initial: 'B',
    stars: 5,
    quote: 'Revisi gampang, tidak dipersulit. Walaupun saya awam teknologi, timnya sabar memandu dari awal sampai website rapi.',
  },
]

</script>

<template>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-brand-900 pt-20 pb-12 text-white sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <div class="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl"></div>
          <div class="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl"></div>
          <div class="absolute top-1/3 right-1/4 h-24 w-24 rounded-lg border border-white/10 rotate-12"></div>
          <div class="absolute bottom-16 right-10 h-16 w-16 rounded-lg border border-white/10 -rotate-12"></div>
        </div>

        <div class="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div class="text-center lg:text-left">
            <h1 class="text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              Jasa Pembuatan Website<br />
              <span class="text-brand-300">Lampung & Bandar Lampung</span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-brand-100/90 sm:mt-6 sm:text-base lg:text-lg sm:mx-0">
              Software house di Bandar Lampung yang membuat website bisnis cepat, kredibel, dan mudah ditemukan
              di Google untuk UMKM, klinik, toko online, hingga perusahaan di seluruh Provinsi Lampung.
            </p>

            <div class="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start">
              <a :href="wa('Halo LampungMediaWeb, saya ingin bikin website. Tolong info paket & harganya.')" target="_blank" rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-base font-bold text-brand-900 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-600 sm:px-8 sm:py-4 sm:text-lg">
                Konsultasi Gratis
                <AppIcon name="arrowRight" class="h-5 w-5" />
              </a>
              <a href="#harga"
                class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-6 py-3 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg">
                Lihat Paket
              </a>
            </div>

            <div class="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-brand-100 sm:gap-x-6 sm:gap-y-3 sm:text-sm lg:justify-start">
              <span v-for="badge in ['Gratis Domain .com', 'Garansi 30 Hari', 'Support 24/7']" :key="badge" class="inline-flex items-center gap-2">
                <AppIcon name="check" class="h-4 w-4 sm:h-5 sm:w-5 text-accent-500" />
                {{ badge }}
              </span>
            </div>
          </div>

          <!-- Hero visual -->
          <div class="relative hidden lg:block">
            <div class="relative mx-auto aspect-[4/3] max-w-lg">
              <div class="absolute inset-0 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
                <div class="flex items-center gap-1.5 rounded-t-3xl border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <span class="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                  <span class="ml-3 rounded-md border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-400">lampungmediaweb.com</span>
                </div>
                <div class="grid h-[calc(100%-3rem)] grid-cols-5 gap-4 p-6 text-slate-800">
                  <div class="col-span-2 flex flex-col gap-4">
                    <div class="rounded-xl bg-brand-50 p-4">
                      <p class="text-xs font-bold text-slate-500 uppercase">Pertumbuhan Trafik</p>
                      <p class="mt-1 text-2xl font-extrabold text-brand-600">+184%</p>
                    </div>
                    <div class="rounded-xl bg-slate-50 p-4">
                      <p class="text-xs font-bold text-slate-500 uppercase">Page Speed</p>
                      <p class="mt-1 text-2xl font-extrabold text-slate-900">0.9s</p>
                    </div>
                    <div class="rounded-xl bg-slate-50 p-4">
                      <p class="text-xs font-bold text-slate-500 uppercase">Skor Google</p>
                      <p class="mt-1 text-2xl font-extrabold text-emerald-500">99 / 100</p>
                    </div>
                  </div>
                  <div class="col-span-3 flex flex-col justify-between border-l border-slate-100 pl-4">
                    <div>
                      <p class="text-sm font-bold text-slate-900">Tren Bulan Ini ✅</p>
                      <div class="mt-3 flex items-end gap-1.5">
                        <div v-for="h in [30, 55, 40, 75, 58, 90, 70, 100]" :key="h"
                          class="w-full rounded-t-md bg-brand-500/20" :style="{ height: h * 0.9 + 'px' }"></div>
                      </div>
                    </div>
                    <div class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-700">
                      ✔ Semua pemeriksaan berjalan normal
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
                <span class="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <AppIcon name="gauge" class="h-6 w-6" />
                </span>
                <div>
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Performa Situs</p>
                  <p class="text-lg font-extrabold text-slate-900">Grade A+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust strip -->
        <div class="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:mt-16 lg:px-8">
          <div class="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-5 text-center backdrop-blur sm:py-6 lg:py-8">
            <div class="px-2">
              <p class="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">100+</p>
              <p class="mt-1 text-[11px] font-semibold text-brand-200 sm:text-xs lg:text-sm">Proyek Selesai</p>
            </div>
            <div class="px-2">
              <p class="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">4.9<span class="text-base sm:text-lg text-brand-200">/5</span></p>
              <p class="mt-1 text-[11px] font-semibold text-brand-200 sm:text-xs lg:text-sm">Rating Klien</p>
            </div>
            <div class="px-2">
              <p class="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">8<span class="text-base sm:text-lg text-brand-200">th</span></p>
              <p class="mt-1 text-[11px] font-semibold text-brand-200 sm:text-xs lg:text-sm">Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section id="layanan" class="scroll-mt-20 py-14 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="reveal max-w-2xl">
            <p class="text-xs font-bold tracking-wider text-brand-600 uppercase sm:text-sm">Layanan</p>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Solusi Digital Sesuai Kebutuhan Bisnis Anda
            </h2>
            <p class="mt-3 text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">Bukan sekadar pajangan. Website yang kami bangun adalah mesin pencetak omzet.</p>
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-4">
            <div v-for="s in services" :key="s.title"
              class="reveal group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5">
              <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform group-hover:scale-110">
                <AppIcon :name="s.icon" class="h-6 w-6" />
              </span>
              <h3 class="mt-5 text-lg font-bold text-slate-900">{{ s.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ s.desc }}</p>
              <ul class="mt-4 space-y-2 text-sm font-medium text-slate-600">
                <li v-for="item in s.items" :key="item" class="flex items-start gap-2">
                  <AppIcon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="reveal mt-8 text-center sm:mt-10">
            <NuxtLink to="/layanan" class="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3 text-sm font-bold text-brand-600 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white sm:px-7 sm:py-3.5 sm:text-base">
              Lihat Semua Layanan
              <AppIcon name="arrowRight" class="h-4 w-4 sm:h-5 sm:w-5" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section id="proses" class="scroll-mt-20 border-y border-slate-100 bg-slate-50 py-14 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="reveal max-w-2xl">
            <p class="text-xs font-bold tracking-wider text-brand-600 uppercase sm:text-sm">Cara Kami Bekerja</p>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Transparan dari Awal sampai Launch
            </h2>
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:mt-12">
            <div v-for="(p, i) in process" :key="p.step"
              class="reveal relative rounded-2xl border border-slate-200 bg-white p-6">
              <span class="text-3xl font-extrabold text-brand-200">{{ p.step }}</span>
              <h3 class="mt-3 text-lg font-bold text-slate-900">{{ p.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ p.desc }}</p>
              <span v-if="i < process.length - 1" class="absolute -right-4 top-1/2 hidden h-px w-8 bg-slate-300 lg:block" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing -->
      <section id="harga" class="scroll-mt-20 py-14 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="reveal mx-auto max-w-2xl text-center">
            <p class="text-xs font-bold tracking-wider text-brand-600 uppercase sm:text-sm">Paket Harga</p>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Harga Transparan, Tanpa Biaya Tersembunyi
            </h2>
            <p class="mt-3 text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">Semua paket sudah termasuk domain, hosting, dan desain. Cukup isi konten.</p>
          </div>

          <div class="mt-8 grid items-start gap-4 sm:gap-6 lg:mt-12 lg:grid-cols-2 xl:grid-cols-4">
            <div v-for="plan in plans" :key="plan.name"
              :class="[
                'reveal relative rounded-2xl border bg-white p-7',
                plan.featured ? 'border-brand-600 shadow-2xl shadow-brand-600/15 lg:-mt-4' : 'border-slate-200',
              ]">
              <span v-if="plan.badge" class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand-600 px-3.5 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                Paling Populer
              </span>

              <h3 class="text-lg font-bold text-slate-900 sm:text-xl">{{ plan.name }}</h3>
              <p class="mt-1 text-sm text-slate-500">{{ plan.desc }}</p>

              <div class="mt-4 sm:mt-5">
                <p v-if="plan.original" class="text-xs font-bold text-slate-400 line-through sm:text-sm">{{ plan.original }}</p>
                <p v-else class="text-xs font-bold text-transparent select-none sm:text-sm">&nbsp;</p>
                <p class="mt-0.5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{{ plan.price }}</p>
                <p class="mt-1 text-xs font-medium text-slate-500">{{ plan.renewal }}</p>
              </div>

              <a :href="wa('Halo LampungMediaWeb, saya tertarik paket ' + plan.name)" target="_blank" rel="noopener"
                :class="[
                  'mt-6 block w-full rounded-full py-3.5 text-center font-bold transition-colors',
                  plan.featured ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200',
                ]">
                {{ plan.cta }}
              </a>

              <p class="mt-6 text-sm font-bold text-slate-900">Fitur Unggulan:</p>
              <ul class="mt-3 space-y-2.5 text-sm font-medium text-slate-600">
                <li v-for="perk in plan.perks" :key="perk" class="flex items-start gap-2.5">
                  <span :class="['mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full', plan.featured ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600']">
                    <AppIcon name="check" class="h-3.5 w-3.5" />
                  </span>
                  {{ perk }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio -->
      <section id="proyek" class="scroll-mt-20 border-y border-slate-100 bg-slate-50 py-14 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="reveal max-w-2xl">
            <p class="text-xs font-bold tracking-wider text-brand-600 uppercase sm:text-sm">Proyek Terpilih</p>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Karya yang Berdampak untuk Klien Kami
            </h2>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
            <a v-for="p in portfolio" :key="p.title" href="#" @click.prevent
              class="reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
              <div class="relative aspect-[4/3] overflow-hidden border-b border-slate-100" aria-hidden="true">
                <div class="flex items-center gap-1.5 border-b border-slate-100 bg-white px-4 py-2.5">
                  <span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
                  <span class="ml-2 truncate rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-400">{{ p.domain }}</span>
                </div>
                <div class="absolute inset-x-0 top-9 bottom-0">
                  <div :class="['absolute inset-0 bg-linear-to-br', p.grad]"></div>
                  <div class="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-5 opacity-40">
                    <div v-for="n in 9" :key="n" class="rounded-lg bg-white/40"></div>
                  </div>
                </div>
                <span class="absolute right-3 bottom-3 left-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
                  <span class="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                  {{ p.result }}
                </span>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between gap-2">
                  <span class="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{{ p.tag }}</span>
                </div>
                <h3 class="mt-3 text-lg font-bold text-slate-900">{{ p.title }}</h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ p.desc }}</p>
              </div>
            </a>
          </div>

          <div class="reveal mt-12 text-center">
            <a :href="wa('Halo LampungMediaWeb, saya ingin lihat lebih banyak portofolio')" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 font-bold text-brand-600 transition-colors hover:text-brand-700">
              Lihat lebih banyak portofolio
              <AppIcon name="arrowRight" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-14 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="reveal mx-auto max-w-2xl text-center">
            <p class="text-xs font-bold tracking-wider text-brand-600 uppercase sm:text-sm">Testimoni</p>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Apa Kata Klien Kami
            </h2>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-3 sm:gap-6 lg:mt-12">
            <figure v-for="t in testimonials" :key="t.name"
              class="reveal flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div>
                <div class="flex gap-0.5 text-amber-400">
                  <AppIcon v-for="n in t.stars" :key="n" name="star" class="h-5 w-5" />
                </div>
                <blockquote class="mt-4 leading-relaxed text-slate-700 italic">"{{ t.quote }}"</blockquote>
              </div>
              <figcaption class="mt-6 flex items-center gap-3">
                <span class="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {{ t.initial }}
                </span>
                <div>
                  <p class="font-bold text-slate-900">{{ t.name }}</p>
                  <p class="text-sm text-slate-500">{{ t.role }}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="scroll-mt-20 border-t border-slate-100 bg-slate-50 py-14 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div class="reveal text-center">
            <p class="text-xs font-bold tracking-wider text-brand-600 uppercase sm:text-sm">Pertanyaan Umum</p>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Jasa Website Lampung: Tanya Jawab
            </h2>
          </div>

          <div class="mt-8 space-y-3 sm:space-y-4">
            <details v-for="f in faq" :key="f.q" class="reveal group rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 open:border-brand-300 open:shadow-lg">
              <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                {{ f.q }}
                <span class="shrink-0 text-brand-600 transition-transform group-open:rotate-45">
                  <AppIcon name="x" class="h-5 w-5" />
                </span>
              </summary>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ f.a }}</p>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="relative overflow-hidden bg-brand-900 py-14 sm:py-16 lg:py-24" aria-hidden="false">
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <div class="absolute -right-16 -top-16 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl"></div>
          <div class="absolute -bottom-20 -left-16 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Siap Membesarkan Bisnis Anda?
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:mt-5 sm:text-lg">
            Konsultasikan kebutuhan website Anda secara <strong class="text-white">gratis</strong>. Kami bantu pilih solusi terbaik sesuai budget.
          </p>
          <a :href="wa('Halo LampungMediaWeb, saya ingin konsultasi gratis bikin website')" target="_blank" rel="noopener"
            class="mt-7 inline-flex items-center gap-3 rounded-full bg-accent-500 px-7 py-3.5 text-base font-bold text-brand-900 shadow-xl shadow-accent-500/25 transition-all hover:-translate-y-1 hover:bg-accent-600 sm:mt-9 sm:px-10 sm:py-5 sm:text-lg">
            Mulai Sekarang
            <AppIcon name="arrowRight" class="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <p class="mt-5 text-xs font-medium text-brand-200 sm:mt-6 sm:text-sm">
            Garansi uang kembali 30 hari &bull; Layanan pelanggan 24/7
          </p>
        </div>
      </section>
</template>
