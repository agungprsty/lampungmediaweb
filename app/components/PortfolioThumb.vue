<script setup lang="ts">
import type { PortfolioItem } from '~/data/portfolio'

const props = defineProps<{ item: PortfolioItem }>()

const src = ref<string | null>(props.item.image ?? null)
const failed = ref(false)

const onError = () => {
  failed.value = true
  src.value = null
}
</script>

<template>
  <div class="absolute inset-0">
    <img
      v-if="src && !failed"
      :src="src"
      :alt="item.title"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover"
      @error="onError"
    />
    <div v-else :class="['absolute inset-0 bg-gradient-to-br', item.grad]"></div>
    <!-- subtle overlay for text readability, kept for grad fallback contrast; image already covers -->
    <div v-if="src && !failed" class="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
    <!-- keep the decorative grid only for grad fallback -->
    <div v-if="!src || failed" class="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-5 opacity-40">
      <div v-for="n in 9" :key="n" class="rounded-lg bg-white/40"></div>
    </div>
  </div>
</template>
