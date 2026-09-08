<script setup>
import { computed } from 'vue'
import { projects } from '@/data/content'
import { t } from '@/i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const ranked = computed(() => [...projects].sort((a, b) => a.rank - b.rank))
</script>

<template>
  <section id="ranking" class="border-b-[3px] border-ink bg-paper-soft">
    <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading :en="t('ranking.heading')" :jp="t('ranking.headingJp')" no="05" class="!mb-0" />
        <p class="mb-1 font-mincho text-xs text-smoke">{{ t('ranking.period') }}</p>
      </div>

      <div class="mt-8 grid gap-4 lg:grid-cols-2">
        <router-link
          v-for="p in ranked"
          :key="p.id"
          :to="{ path: '/project', hash: '#' + p.id }"
          class="group relative flex items-stretch gap-4 overflow-hidden rounded-2xl border-[3px] border-ink shadow-panel-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-panel"
          :class="p.rank === 1 ? 'bg-ink text-paper' : 'bg-paper text-ink'"
        >
          <!-- rank numeral -->
          <div
            class="relative flex w-20 shrink-0 items-center justify-center border-r-[3px] border-ink sm:w-28"
            :class="p.rank === 1 ? 'bg-paper text-ink' : 'bg-paper-soft'"
          >
            <span class="font-display text-6xl leading-none sm:text-7xl">{{ p.rank }}</span>
            <div class="pointer-events-none absolute inset-0 opacity-10 radial-lines text-ink" />
          </div>

          <!-- thumb -->
          <div class="my-3 hidden w-24 shrink-0 overflow-hidden border-[3px] border-ink bg-paper-soft sm:block">
            <img
              :src="p.wide"
              :alt="p.title"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- info -->
          <div class="flex min-w-0 flex-1 flex-col justify-center py-3 pr-4">
            <p
              class="font-gothic text-[10px] font-black uppercase tracking-widest"
              :class="p.rank === 1 ? 'text-paper/60' : 'text-smoke'"
            >
              {{ p.volume }} · {{ p.category }}
            </p>
            <h3 class="font-gothic text-base font-black leading-tight sm:text-lg">
              {{ p.title }}
              <span class="font-mincho text-xs font-bold" :class="p.rank === 1 ? 'text-paper/60' : 'text-smoke'">
                {{ p.titleJp }}
              </span>
            </h3>
            <div class="mt-2 flex flex-wrap gap-1">
              <span
                v-for="t in p.tags.slice(0, 4)"
                :key="t"
                class="border px-1.5 py-0.5 text-[10px] font-bold"
                :class="p.rank === 1 ? 'border-paper/50' : 'border-ink'"
              >
                {{ t }}
              </span>
            </div>
          </div>

          <span
            v-if="p.rank === 1"
            class="absolute right-3 top-3 rotate-6 border-2 border-ink bg-paper px-2 py-0.5 font-display text-[10px] uppercase text-ink"
          >
            No.1
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>
