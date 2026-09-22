import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    clientBundle: {
      icons: [
        'lucide:menu', 'lucide:x', 'lucide:check', 'lucide:arrow-right',
        'lucide:code', 'lucide:rocket', 'lucide:smartphone', 'lucide:gauge',
        'lucide:map-pin', 'lucide:phone', 'lucide:mail', 'lucide:quote',
        'lucide:shopping-bag', 'lucide:instagram', 'lucide:facebook', 'lucide:linkedin',
        'lucide:building', 'lucide:megaphone', 'lucide:landmark', 'lucide:users',
        'lucide:graduation-cap', 'lucide:newspaper', 'lucide:home', 'lucide:bed',
        'lucide:heart-pulse', 'lucide:utensils', 'lucide:hand-heart', 'lucide:layers',
        'ph:star-fill', 'mdi:whatsapp',
      ],
    },
  },
  hooks: {
    // ponytail: drop @nuxt/devtools' config-retriever plugin, which Vite 8 rejects
    // (configResolved inside applyToEnvironment is ignored). Devtools still works;
    // only the "show Vite config" inspector panel loses data.
    'vite:extendConfig'(config) {
      config.plugins = (config.plugins || []).filter(
        (p: Plugin) => p?.name !== 'nuxt:devtools:config',
      )
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'LampungMediaWeb | Jasa Pembuatan Website di Lampung dan Bandar Lampung',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { name: 'description', content: 'Software house di Bandar Lampung: jasa pembuatan website company profile, toko online, aplikasi web & SEO. Desain premium, super cepat, bergaransi 30 hari.' },
        { name: 'keywords', content: 'jasa pembuatan website lampung, software house bandar lampung, jasa website, toko online, company profile, jasa seo lampung' },
        { name: 'author', content: 'LampungMediaWeb' },
        { name: 'theme-color', content: '#4f46e5' },
        { name: 'geo.region', content: 'ID-LA' },
        { name: 'geo.placename', content: 'Bandar Lampung' },
        { name: 'geo.position', content: '-5.4500;105.2531' },
        { name: 'ICBM', content: '-5.4500, 105.2531' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'LampungMediaWeb' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:url', content: 'https://lampungmediaweb.com/' },
        { property: 'og:title', content: 'LampungMediaWeb | Jasa Pembuatan Website di Lampung dan Bandar Lampung' },
        { property: 'og:description', content: 'Software house di Bandar Lampung: website company profile, toko online, aplikasi web & SEO. Desain premium, super cepat, bergaransi 30 hari.' },
        { property: 'og:image', content: 'https://lampungmediaweb.com/og-cover.svg' },
        { property: 'og:image:alt', content: 'LampungMediaWeb | Jasa Pembuatan Website Lampung' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'LampungMediaWeb | Jasa Pembuatan Website di Lampung' },
        { name: 'twitter:description', content: 'Software house Bandar Lampung: website company profile, toko online, aplikasi web & SEO. Bergaransi 30 hari.' },
        { name: 'twitter:image', content: 'https://lampungmediaweb.com/og-cover.svg' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://lampungmediaweb.com/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' },
      ],
    },
  },
})