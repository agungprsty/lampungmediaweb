<script setup lang="ts">
import { ref, onMounted } from 'vue'

const open = ref(false)

const nav = [
  { label: 'Layanan', href: '/layanan' },
  { label: 'Proses', href: '/#proses' },
  { label: 'Harga', href: '/#harga' },
  { label: 'Proyek', href: '/proyek' },
  { label: 'Tim', href: '/team' },
]

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-slate-800 antialiased">
    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:h-20 lg:px-8">
        <a href="/" class="flex items-center" aria-label="LampungMediaWeb, Jasa Website Lampung">
          <AppLogo class="text-[15px] sm:text-[20px] lg:text-[26px]" />
        </a>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          <a v-for="item in nav" :key="item.href" :href="item.href"
            class="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-600">
            {{ item.label }}
          </a>
          <a :href="wa('Halo LampungMediaWeb, saya ingin konsultasi pembuatan website')" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-5 py-2 text-sm font-bold text-brand-600 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white">
            <AppIcon name="whatsapp" class="h-4 w-4" />
            Hubungi Kami
          </a>
        </nav>

        <button class="text-slate-700 md:hidden" aria-label="Buka menu"
          @click="open = !open">
          <AppIcon name="menu" class="h-7 w-7" />
        </button>
      </div>
    </header>

    <!-- Mobile menu -->
    <div v-if="open" class="fixed inset-x-0 top-14 z-40 border-b border-slate-200 bg-white px-4 py-4 shadow-lg sm:top-16 md:hidden">
      <nav class="flex flex-col gap-1" aria-label="Menu mobile">
        <a v-for="item in nav" :key="item.href" :href="item.href" class="rounded-lg px-3 py-3 text-base font-bold text-slate-700 hover:bg-brand-50 hover:text-brand-600"
          @click="open = false">
          {{ item.label }}
        </a>
        <a :href="wa('Halo LampungMediaWeb, saya ingin konsultasi pembuatan website')" target="_blank" rel="noopener"
          class="mt-3 rounded-full bg-brand-600 px-5 py-3 text-center text-base font-bold text-white"
          @click="open = false">
          Hubungi via WhatsApp
        </a>
      </nav>
    </div>

    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-brand-900 pb-6 sm:pb-8 text-brand-200">
      <div class="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-16 lg:px-8">
        <div class="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <a href="/" class="inline-flex items-center" aria-label="LampungMediaWeb">
              <AppLogo light class="text-[17px] sm:text-[18px]" />
            </a>
            <p class="mt-4 max-w-xs text-sm leading-relaxed sm:mt-5">
              Software house terpercaya di Lampung. Solusi digitalisasi bisnis dengan standar performa kelas dunia.
            </p>
            <div class="mt-5 flex gap-3 sm:mt-6">
              <a v-for="s in ['instagram', 'facebook', 'linkedin']" :key="s" href="#"
                :aria-label="`LampungMediaWeb di ${s}`"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-white transition-colors hover:bg-brand-600">
                <AppIcon :name="s" class="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-base font-bold text-white sm:text-lg">Layanan</h4>
            <ul class="mt-4 space-y-3 text-sm font-medium sm:mt-5">
              <li><NuxtLink to="/layanan" class="transition-colors hover:text-white">Semua Layanan</NuxtLink></li>
              <li v-for="l in ['Website Company Profile', 'Pembuatan Toko Online', 'Landing Page Iklan', 'Aplikasi Web / Sistem']" :key="l">
                <a href="/layanan#jenis" class="transition-colors hover:text-white">{{ l }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-base font-bold text-white sm:text-lg">Perusahaan</h4>
            <ul class="mt-4 space-y-3 text-sm font-medium sm:mt-5">
              <li><NuxtLink to="/team" class="transition-colors hover:text-white">Tim Kami</NuxtLink></li>
              <li><a href="/#proses" class="transition-colors hover:text-white">Cara Kami Bekerja</a></li>
              <li><a href="/#harga" class="transition-colors hover:text-white">Paket &amp; Harga</a></li>
              <li><a href="/proyek" class="transition-colors hover:text-white">Portofolio</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-base font-bold text-white sm:text-lg">Hubungi Kami</h4>
            <ul class="mt-4 space-y-3 text-sm font-medium sm:mt-5 sm:space-y-4">
              <li class="flex items-start gap-3">
                <AppIcon name="mapPin" class="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span>Jl. ZA. Pagar Alam, Bandar Lampung 35142</span>
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="phone" class="h-5 w-5 shrink-0 text-brand-400" />
                <span>0812-3456-7890</span>
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="mail" class="h-5 w-5 shrink-0 text-brand-400" />
                <span>halo@lampungmediaweb.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 flex flex-col items-center justify-between gap-3 border-t border-brand-800 pt-6 text-xs font-medium text-brand-300 sm:mt-14 sm:pt-8 sm:text-sm sm:flex-row">
          <p>© 2026 lampungmediaweb. Hak cipta dilindungi.</p>
          <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Halaman legal">
            <NuxtLink to="/terms" class="transition-colors hover:text-white">Syarat &amp; Ketentuan</NuxtLink>
            <NuxtLink to="/privacy" class="transition-colors hover:text-white">Kebijakan Privasi</NuxtLink>
            <NuxtLink to="/cookie" class="transition-colors hover:text-white">Kebijakan Cookie</NuxtLink>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>