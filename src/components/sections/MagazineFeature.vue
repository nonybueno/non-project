<script setup>
import { magazine } from '@/data/content'
import { t } from '@/i18n'
import MangaButton from '@/components/ui/MangaButton.vue'
</script>

<template>
  <section id="magazine" class="border-b-[3px] border-ink bg-ink text-paper">
    <div class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <!-- magazine cover mock -->
        <div class="relative mx-auto w-full max-w-sm">
          <div class="absolute -inset-3 -rotate-2 border-[3px] border-paper/30" />
          <div class="relative overflow-hidden border-[4px] border-paper bg-paper text-ink shadow-panel-inv">
            <div class="flex items-center justify-between border-b-[3px] border-ink px-3 py-2">
              <span class="font-display text-lg uppercase leading-none">{{ magazine.masthead }}</span>
              <span class="font-gothic text-[10px] font-black">{{ magazine.issue }}</span>
            </div>
            <div class="relative aspect-[3/4] overflow-hidden bg-paper-soft">
              <img
                :src="magazine.cover"
                :alt="magazine.feature"
                class="h-full w-full object-cover"
              />
              <div class="pointer-events-none absolute inset-x-0 bottom-0 h-20 halftone-fade rotate-180 text-ink" />
              <div class="absolute bottom-3 left-3 right-3">
                <p class="font-mincho text-xs font-bold text-ink/70">{{ t('mag.feature') }}</p>
                <p class="font-display text-xl uppercase leading-none">{{ magazine.feature }}</p>
              </div>
              <span class="absolute right-2 top-2 rotate-6 border-2 border-ink bg-ink px-2 py-1 font-display text-xs text-paper">
                ¥0 · {{ magazine.price }}
              </span>
            </div>
            <div class="flex items-stretch justify-between border-t-[3px] border-ink">
              <ul class="flex-1 space-y-0.5 p-3">
                <li
                  v-for="h in magazine.headlines"
                  :key="h"
                  class="font-gothic text-[10px] font-bold leading-tight text-ink/70"
                >
                  › {{ h }}
                </li>
              </ul>
              <div class="w-10 border-l-[3px] border-ink speed-lines-diag text-ink/70" />
            </div>
          </div>
        </div>

        <!-- feature text -->
        <div>
          <p class="mb-2 font-mincho text-sm font-bold text-paper/60">{{ t('mag.periodPrefix') }}{{ magazine.period }}</p>
          <h2 class="font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
            {{ magazine.masthead }}
          </h2>
          <p class="mt-5 max-w-lg font-gothic text-base text-paper/80">{{ magazine.excerpt }}</p>

          <dl class="mt-8 grid gap-3 sm:grid-cols-2">
            <div
              v-for="f in magazine.facts"
              :key="f.label"
              class="border-[3px] border-paper/25 bg-paper/[0.04] p-4"
            >
              <dt class="font-gothic text-[10px] font-black uppercase tracking-widest2 text-paper/50">
                {{ f.label }}
              </dt>
              <dd class="mt-1 font-gothic text-sm font-bold leading-snug">{{ f.value }}</dd>
            </div>
          </dl>

          <div class="mt-8">
            <MangaButton to="/about" variant="ghost-inv" size="lg">{{ t('mag.readProfile') }}</MangaButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
