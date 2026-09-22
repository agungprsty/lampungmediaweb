<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{
  light?: boolean
}>(), { light: false })

const uid = useId()
</script>

<template>
  <span class="inline-flex select-none items-center gap-2">
    <svg width="2em" height="2em" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient :id="uid" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4f46e5" />
          <stop offset="1" stop-color="#14b8a6" />
        </linearGradient>
      </defs>
      <rect :fill="`url(#${uid})`" rx="12" width="48" height="48" />
      <!-- M = pegunungan Lampung -->
      <path d="M10 34V20l7 9 5-8 5 8 6-9v14" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
      <!-- media play -->
      <path d="M37 30.5l6.5 4-6.5 4z" fill="#fff" />
    </svg>

    <span class="leading-none">
      <span :class="['hidden tracking-[0.24em] uppercase font-semibold sm:block', light ? 'text-white/50' : 'text-slate-400']" style="font-size: 0.34em">
        Jasa Website Lampung
      </span>
      <span :class="['block whitespace-nowrap tracking-tight font-extrabold', light ? 'text-white' : 'text-slate-900']" style="font-size: 1.22em">
        lampungmedia<span :class="light ? 'text-accent-500' : 'text-accent-600'">web</span>
      </span>
    </span>
  </span>
</template>