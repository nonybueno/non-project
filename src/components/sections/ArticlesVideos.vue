<script setup>
import { activities } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="articles" class="border-b-[3px] border-ink bg-paper">
    <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading en="Articles & Videos" jp="記事・動画" no="06" />

      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="a in activities"
          :key="a.id"
          class="flex flex-col overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-panel"
        >
          <!-- cover with play button -->
          <div class="relative aspect-[16/10] overflow-hidden border-b-[3px] border-ink bg-paper-gray">
            <img
              :src="a.cover"
              :alt="a.title"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
            <div class="pointer-events-none absolute inset-x-0 top-0 h-8 halftone text-ink/50 opacity-60" />
            <div class="absolute left-3 top-3 flex items-center gap-2">
              <span class="border-2 border-ink bg-ink px-2 py-0.5 font-display text-[10px] uppercase tracking-wide text-paper">
                {{ a.kind }}
              </span>
              <span class="border-2 border-ink bg-paper px-2 py-0.5 font-mincho text-[11px] font-bold">
                {{ a.titleJp }}
              </span>
            </div>
            <div
              class="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-paper shadow-panel-sm"
              aria-hidden="true"
            >
              <span class="ml-0.5 border-y-[7px] border-l-[12px] border-y-transparent border-l-ink" />
            </div>
          </div>

          <div class="flex flex-1 flex-col p-5">
            <h3 class="font-gothic text-lg font-black leading-tight sm:text-xl">{{ a.title }}</h3>
            <p class="mt-1 font-gothic text-xs font-bold uppercase tracking-widest text-smoke">
              {{ a.role }}
            </p>

            <ul class="mt-4 space-y-2.5">
              <li
                v-for="(point, i) in a.points"
                :key="i"
                class="flex gap-2.5 font-gothic text-sm leading-snug"
              >
                <span class="mt-1 h-2 w-2 shrink-0 rotate-45 bg-ink" />
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="mt-5 flex flex-wrap items-center gap-2 border-t-[3px] border-dotted border-ink pt-4">
              <span
                v-for="c in a.channels"
                :key="c.label"
                class="border-2 border-ink px-2 py-0.5 font-gothic text-[11px] font-bold"
              >
                {{ c.label }}: <span class="font-black">{{ c.handle }}</span>
              </span>
            </div>

            <div class="mt-4 grid grid-cols-3 gap-2">
              <div
                v-for="(g, i) in a.gallery"
                :key="i"
                class="aspect-square overflow-hidden border-[3px] border-ink bg-paper-soft"
              >
                <img
                  :src="g"
                  :alt="`${a.title} photo ${i + 1}`"
                  loading="lazy"
                  class="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
