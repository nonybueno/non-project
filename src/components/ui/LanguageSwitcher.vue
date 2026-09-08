<script setup>
import { lang, setLang, LANGS } from '@/i18n'

defineProps({
  block: { type: Boolean, default: false }, // full-width variant for the mobile drawer
})
</script>

<template>
  <div
    role="group"
    aria-label="Language"
    class="inline-flex items-stretch border-[3px] border-ink bg-paper font-gothic text-[10px] font-black uppercase tracking-widest shadow-panel-sm"
    :class="block ? 'w-full' : ''"
  >
    <button
      v-for="(l, i) in LANGS"
      :key="l.id"
      type="button"
      :aria-pressed="lang === l.id"
      :title="l.label"
      class="cursor-pointer px-2.5 py-1.5 transition-colors"
      :class="[
        i > 0 ? 'border-l-[3px] border-ink' : '',
        block ? 'flex-1 text-center' : '',
        lang === l.id ? 'bg-ink text-paper' : 'bg-paper text-ink hover:bg-paper-gray',
      ]"
      @click="setLang(l.id)"
    >
      {{ l.short }}
    </button>
  </div>
</template>
