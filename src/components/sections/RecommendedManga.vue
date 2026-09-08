<script setup>
import { skills } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="recommended" class="border-b-[3px] border-ink bg-paper-soft">
    <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading en="Recommended" jp="編集部おすすめ" no="07" />
      <p class="-mt-4 mb-8 max-w-xl font-gothic text-sm text-smoke">
        The skillset behind every build — four ongoing "series" Non keeps reading and shipping.
      </p>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="s in skills"
          :key="s.id"
          class="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-ink bg-ink text-paper shadow-panel-sm transition-transform duration-150 hover:-translate-y-1.5"
        >
          <!-- volume cover -->
          <div class="relative flex aspect-[5/4] flex-col justify-between border-b-[3px] border-ink p-4">
            <div class="pointer-events-none absolute inset-0 opacity-[0.12] halftone-lg text-paper" />
            <div class="relative flex items-start justify-between">
              <span class="font-display text-xs uppercase tracking-widest text-paper/60">{{ s.series }}</span>
              <span class="font-display text-5xl leading-none text-paper/25">{{ String(skills.indexOf(s) + 1).padStart(2, '0') }}</span>
            </div>
            <div class="relative mt-auto flex items-center gap-2">
              <span class="h-6 w-1.5 bg-paper" />
              <div>
                <p class="font-mincho text-xs font-bold text-paper/60">{{ s.titleJp }}</p>
                <h3 class="font-display text-2xl uppercase leading-none sm:text-3xl">{{ s.title }}</h3>
              </div>
            </div>
          </div>

          <!-- logos + blurb -->
          <div class="flex flex-1 flex-col bg-paper p-4 text-ink">
            <div class="flex min-h-[76px] flex-wrap items-center justify-around gap-3 rounded-lg border-2 border-ink bg-paper-soft p-3">
              <img
                v-for="(logo, i) in s.logos"
                :key="i"
                :src="logo"
                :alt="`${s.title} tool ${i + 1}`"
                loading="lazy"
                class="h-10 w-auto max-w-[44%] object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
            <p class="mt-3 font-gothic text-xs leading-snug text-smoke">{{ s.blurb }}</p>
            <div class="mt-auto flex flex-wrap gap-1 pt-3">
              <span
                v-for="t in s.stack"
                :key="t"
                class="border border-ink px-1.5 py-0.5 text-[10px] font-bold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
