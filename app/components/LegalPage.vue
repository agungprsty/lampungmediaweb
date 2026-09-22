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
  <section class="pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p class="text-xs font-bold uppercase tracking-widest text-brand-600 sm:text-sm">Dokumen Legal</p>
      <h1 class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl">{{ title }}</h1>
      <p class="mt-2 text-xs font-semibold text-slate-500 sm:mt-3 sm:text-sm">Terakhir diperbarui: {{ updated }}</p>

      <p v-if="intro" class="mt-5 text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base">{{ intro }}</p>

      <div class="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
        <section v-for="s in sections" :key="s.heading">
          <h2 class="text-lg font-extrabold text-slate-900 sm:text-xl">{{ s.heading }}</h2>
          <p v-for="(b, i) in s.body" :key="i" class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{{ b }}</p>
        </section>
      </div>

      <div class="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-5 sm:mt-14 sm:p-6">
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