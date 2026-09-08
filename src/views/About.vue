<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { profile, magazine } from '@/data/content'
import { t } from '@/i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SpeechBubble from '@/components/ui/SpeechBubble.vue'
import MangaButton from '@/components/ui/MangaButton.vue'

useHead({
  title: 'About',
  meta: [{ name: 'description', content: `About ${profile.name} (Non) — ${profile.year} at ${profile.universityShort}.` }],
})

const timeline = computed(() => [
  { when: t('about.tl1When'), what: profile.school, note: t('about.tl1Note') },
  { when: t('about.tl2When'), what: profile.university, note: profile.faculty },
  { when: t('about.tl3When'), what: t('about.tl3What'), note: t('about.tl3Note') },
])
</script>

<template>
  <div>
    <!-- hero -->
    <section class="relative overflow-hidden border-b-[3px] border-ink bg-paper-soft">
      <div class="pointer-events-none absolute inset-0 opacity-[0.05] radial-lines text-ink" />
      <div class="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p class="mb-3 inline-block border-[3px] border-ink bg-ink px-3 py-1 font-gothic text-[11px] font-black uppercase tracking-widest2 text-paper">
            {{ t('about.kicker') }}
          </p>
          <h1 class="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            {{ profile.name }}
          </h1>
          <p class="mt-4 max-w-lg font-gothic text-base text-smoke sm:text-lg">
            “{{ profile.tagline }}”
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="border-2 border-ink px-2.5 py-1 font-gothic text-xs font-bold">{{ profile.role }}</span>
            <span class="border-2 border-ink px-2.5 py-1 font-gothic text-xs font-bold">{{ t('about.born') }} {{ profile.birthDate }}</span>
            <span class="border-2 border-ink px-2.5 py-1 font-gothic text-xs font-bold">{{ profile.location }}</span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-xs">
          <div class="absolute -left-3 -top-3 z-10 -rotate-6">
            <SpeechBubble tail="br" invert>{{ t('about.hello') }}</SpeechBubble>
          </div>
          <div class="overflow-hidden rounded-[1.5rem] border-[4px] border-ink bg-paper shadow-panel-lg">
            <img
              :src="profile.portrait"
              :alt="profile.name"
              class="aspect-[3/4] w-full object-cover object-[center_20%]"
            />
          </div>
          <div class="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 rounded-full halftone-lg text-ink/30" />
        </div>
      </div>
    </section>

    <!-- bio -->
    <section class="border-b-[3px] border-ink">
      <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading :en="t('about.story')" :jp="t('about.storyJp')" no="01" />
        <div class="grid gap-6 lg:grid-cols-2">
          <p
            v-for="(para, i) in profile.bio"
            :key="i"
            class="border-[3px] border-ink bg-paper p-6 font-gothic text-sm leading-relaxed shadow-panel-sm sm:text-base"
          >
            <span class="float-left mr-2 font-display text-5xl leading-[0.8]">{{ i + 1 }}</span>
            {{ para }}
          </p>
        </div>
      </div>
    </section>

    <!-- facts -->
    <section class="border-b-[3px] border-ink bg-ink text-paper">
      <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading :en="t('about.dataFile')" :jp="t('about.dataFileJp')" no="02" invert />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="f in magazine.facts"
            :key="f.label"
            class="flex flex-col border-[3px] border-paper/25 p-5"
          >
            <span class="font-display text-3xl uppercase leading-none text-paper/40">{{ f.label }}</span>
            <span class="mt-3 font-gothic text-sm font-bold leading-snug">{{ f.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- timeline -->
    <section class="border-b-[3px] border-ink">
      <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading :en="t('about.timeline')" :jp="t('about.timelineJp')" no="03" />
        <ol class="border-[3px] border-ink bg-paper shadow-panel">
          <li
            v-for="(t, i) in timeline"
            :key="i"
            class="grid gap-1 border-b-[3px] border-ink p-5 last:border-b-0 sm:grid-cols-[220px_1fr] sm:gap-6"
          >
            <span class="font-display text-lg uppercase tracking-wide text-smoke">{{ t.when }}</span>
            <span>
              <span class="block font-gothic text-base font-black">{{ t.what }}</span>
              <span class="block font-gothic text-sm text-smoke">{{ t.note }}</span>
            </span>
          </li>
        </ol>

        <div class="mt-10 flex flex-wrap gap-3">
          <MangaButton to="/resume" size="lg">{{ t('about.downloadResume') }}</MangaButton>
          <MangaButton to="/contact" variant="outline" size="lg">{{ t('about.getInTouch') }}</MangaButton>
        </div>
      </div>
    </section>
  </div>
</template>
