# LampungMediaWeb — Jasa Pembuatan Website Lampung

Software house di Bandar Lampung: company profile, toko online, landing page, aplikasi web & SEO. Desain premium, super cepat, bergaransi 30 hari. Mobile-first.

**Stack:** Nuxt 4 · Vue 3 · Tailwind CSS 4 · @nuxt/icon

**Live:** https://lampungmediaweb.com

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run preview
npm run generate # static
```

## Struktur

```
app/
  assets/css/main.css   # Tailwind theme (brand/accent)
  components/           # AppIcon, AppLogo, LegalPage
  data/services.ts      # 15 layanan + groups
  layouts/default.vue   # header, footer, reveal-on-scroll
  pages/
    index.vue           # landing (hero, pricing, portfolio, FAQ)
    layanan/index.vue   # filter kategori
    layanan/[slug].vue  # detail layanan + JSON-LD Service
    terms.vue / privacy.vue / cookie.vue
    [...slug].vue       # 404
public/                 # favicon, og-cover.svg, robots.txt, sitemap.xml
nuxt.config.ts          # SEO head, Vite + Tailwind, icon bundle
```

## Kustomisasi Cepat

- **WA:** `app/utils/wa.ts` → `WA_NUMBER`
- **Layanan:** `app/data/services.ts` → `SERVICES`
- **Harga:** `app/pages/index.vue` → `plans`
- **Portofolio/Testimoni/FAQ:** `app/pages/index.vue`

## Mobile-first

Semua section pakai base kecil (`text-2xl`, `py-10`, `px-4`, `gap-4`) lalu membesar di `sm:`/`lg:` (`sm:text-3xl`, `lg:py-24`). Hero `h1` base `text-[28px]`, button `py-3 text-base` — cek di Chrome DevTools 360px.

## Deploy

`npm run build` → `.output/` (Node) atau `npm run generate` → `.output/public/` untuk static hosting. Pastikan `sitemap.xml` & `robots.txt` ter-copy.
