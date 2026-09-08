<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { lang, htmlLang } from '@/i18n'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

useHead({
  titleTemplate: (t) => (t ? `${t} — NON PROJECT` : 'NON PROJECT — Web Manga Magazine'),
  htmlAttrs: { lang: computed(() => htmlLang[lang.value] || 'en') },
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-paper text-ink">
    <SiteHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>
