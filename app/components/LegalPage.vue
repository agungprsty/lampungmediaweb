<script setup lang="ts">
export interface LegalSection {
  heading: string
  body: string[]
}

const props = withDefaults(defineProps<{
  title: string
  updated: string
  intro?: string
  sections: LegalSection[]
}>(), { intro: '' })
</script>

<template>
  <section class="pt-28 pb-20 lg:pt-40 lg:pb-28">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p class="text-sm font-bold uppercase tracking-widest text-brand-600">Dokumen Legal</p>
      <h1 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{{ title }}</h1>
      <p class="mt-3 text-sm font-semibold text-slate-500">Terakhir diperbarui: {{ updated }}</p>

      <p v-if="intro" class="mt-6 leading-relaxed text-slate-600">{{ intro }}</p>

      <div class="mt-10 space-y-10">
        <section v-for="s in sections" :key="s.heading">
          <h2 class="text-xl font-extrabold text-slate-900">{{ s.heading }}</h2>
          <p v-for="(b, i) in s.body" :key="i" class="mt-3 leading-relaxed text-slate-600">{{ b }}</p>
        </section>
      </div>

      <div class="mt-14 rounded-2xl border border-brand-200 bg-brand-50 p-6">
        <p class="font-bold text-brand-900">Ada pertanyaan seputar dokumen ini?</p>
        <p class="mt-1 text-sm leading-relaxed text-brand-800">
          Hubungi kami via WhatsApp atau email <a href="mailto:halo@lampungmediaweb.com" class="font-bold underline">halo@lampungmediaweb.com</a>.
        </p>
        <a :href="wa('Halo LampungMediaWeb, saya ada pertanyaan seputar syarat dan kebijakan di situs Anda.')"
          target="_blank" rel="noopener"
          class="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-700">
          <AppIcon name="whatsapp" class="h-4 w-4" />
          Hubungi Kami
        </a>
      </div>
    </div>
  </section>
</template>