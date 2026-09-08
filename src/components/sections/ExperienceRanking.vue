<script setup>
import { experience, contact } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import RankHeart from '@/components/ui/RankHeart.vue'

const top = experience[0]
const rest = experience.slice(1)
</script>

<template>
  <section
    id="experience"
    class="relative overflow-hidden border-b-[3px] border-ink bg-paper-soft"
  >
    <!-- repeating vertical side text -->
    <div class="pointer-events-none absolute right-0 top-0 hidden h-full select-none lg:block">
      <span
        class="writing-vertical-mixed block py-8 font-display text-[5.5rem] uppercase leading-none tracking-[0.35em] text-ink/[0.05]"
      >
        Experience Experience
      </span>
    </div>
    <div
      class="pointer-events-none absolute -left-12 top-24 h-44 w-44 rounded-full halftone-lg text-ink/15"
    />

    <div class="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading en="Experience" jp="職務経歴 · Work Ranking" no="01" class="!mb-2" />
      <p class="mb-10 font-mincho text-xs text-smoke sm:mb-12">集計期間 2024 – 2026 · 5 companies</p>

      <!-- No.1 -->
      <router-link
        to="/resume"
        class="group block cursor-pointer"
      >
        <div class="grid gap-6 lg:grid-cols-[minmax(0,400px)_1fr] lg:items-center lg:gap-10">
          <div class="relative">
            <div class="absolute -left-4 -top-4 z-10 -rotate-6">
              <RankHeart :n="1" size="lg" />
            </div>
            <div
              class="overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-panel-lg transition-transform duration-150 group-hover:-translate-y-1"
            >
              <div class="relative aspect-[5/4] bg-paper">
                <img
                  :src="top.logo"
                  :alt="top.company"
                  class="h-full w-full object-cover"
                />
                <div class="pointer-events-none absolute inset-x-0 top-0 h-6 halftone text-ink/50 opacity-60" />
                <span
                  class="absolute bottom-2 left-2 border-2 border-ink bg-ink px-2 py-0.5 font-gothic text-[10px] font-black uppercase tracking-widest text-paper"
                >
                  現職 · Current
                </span>
              </div>
            </div>
          </div>

          <div>
            <p class="font-gothic text-[11px] font-black uppercase tracking-widest2 text-smoke">
              {{ top.period }}
            </p>
            <h3 class="mt-1 font-display text-3xl uppercase leading-[0.95] sm:text-5xl">
              {{ top.company }}
            </h3>
            <p class="mt-1 font-gothic text-base font-black">{{ top.role }}</p>
            <ul class="mt-4 space-y-2">
              <li
                v-for="(p, i) in top.points"
                :key="i"
                class="flex gap-2.5 font-gothic text-sm leading-snug"
              >
                <span class="mt-1 h-2 w-2 shrink-0 rotate-45 bg-ink" />
                <span>{{ p }}</span>
              </li>
            </ul>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="t in top.tags"
                :key="t"
                class="border-2 border-ink px-2 py-0.5 font-gothic text-[11px] font-bold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </router-link>

      <!-- No.2 – No.5 -->
      <div class="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        <article v-for="job in rest" :key="job.rank" class="flex gap-4">
          <div class="relative shrink-0">
            <div class="absolute -left-2.5 -top-2.5 z-10 -rotate-6">
              <RankHeart :n="job.rank" />
            </div>
            <div
              class="h-28 w-28 overflow-hidden rounded-xl border-[3px] border-ink bg-paper sm:h-32 sm:w-32"
            >
              <img :src="job.logo" :alt="job.company" class="h-full w-full object-cover" />
            </div>
          </div>

          <div class="min-w-0">
            <p class="font-gothic text-[10px] font-black uppercase tracking-widest text-smoke">
              {{ job.period }}
            </p>
            <h3 class="font-display text-xl uppercase leading-[1.05]">{{ job.company }}</h3>
            <p class="font-gothic text-sm font-bold">{{ job.role }}</p>
            <p class="mt-1.5 font-gothic text-[13px] leading-snug text-smoke">
              {{ job.points[0] }}
            </p>
            <div class="mt-2.5 flex flex-wrap gap-1">
              <span
                v-for="t in job.tags"
                :key="t"
                class="border border-ink px-1.5 py-0.5 text-[10px] font-bold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA pill -->
      <div class="mt-14 flex justify-center">
        <a
          :href="contact.resume"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex cursor-pointer items-center gap-3 rounded-full border-[3px] border-ink bg-ink px-7 py-3.5 font-gothic text-xs font-black uppercase tracking-widest2 text-paper shadow-panel transition-transform hover:-translate-y-1"
        >
          See the full resume
          <span class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-paper">→</span>
        </a>
      </div>
    </div>
  </section>
</template>
