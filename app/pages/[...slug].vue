<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Halaman Tidak Ditemukan | LampungMediaWeb' })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-brand-900 px-4 text-center text-white">
    <div class="relative">
      <span class="absolute inset-0 -z-10 rounded-full bg-brand-600/40 blur-3xl"></span>
      <p class="text-7xl font-extrabold tracking-tight lg:text-9xl">404</p>
    </div>
    <h1 class="mt-6 text-2xl font-bold lg:text-3xl">Halaman tidak ditemukan</h1>
    <p class="mt-3 max-w-md text-brand-200">
      Halaman yang Anda cari mungkin sudah dipindahkan atau penghubungnya salah. Mari kembali atau hubungi kami.
    </p>
    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
      <a href="/" class="rounded-full bg-accent-500 px-7 py-3 font-bold text-brand-900 transition-colors hover:bg-accent-600">
        Kembali ke Beranda
      </a>
      <a :href="wa('Halo LampungMediaWeb, saya menemukan halaman error di situs Anda')" target="_blank" rel="noopener"
        class="rounded-full border-2 border-white/25 px-7 py-3 font-bold transition-colors hover:border-white hover:bg-white/10">
        Hubungi Kami
      </a>
    </div>
  </div>
</template>