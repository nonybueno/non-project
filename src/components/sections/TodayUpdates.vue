<script setup>
import { updates } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import MangaButton from '@/components/ui/MangaButton.vue'

function fmt(d) {
  const [y, m, day] = d.split('-')
  return `${y}.${m}.${day}`
}
</script>

<template>
  <section id="updates" class="border-b-[3px] border-ink bg-paper">
    <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading en="Today's Updates" jp="本日の更新" no="04" />

      <ul class="border-[3px] border-ink bg-paper shadow-panel">
        <li
          v-for="(u, i) in updates"
          :key="u.title"
          class="border-b-[3px] border-ink last:border-b-0"
        >
          <router-link
            :to="u.to"
            class="group grid grid-cols-[auto_1fr_auto] items-center gap-3 px-3 py-3.5 transition-colors hover:bg-ink hover:text-paper sm:grid-cols-[110px_120px_1fr_auto] sm:gap-4 sm:px-5 sm:py-4"
          >
            <span class="font-gothic text-xs font-bold tabular-nums text-smoke group-hover:text-paper/70">
              {{ fmt(u.date) }}
            </span>
            <span
              class="hidden w-fit border-2 border-current px-2 py-0.5 font-gothic text-[10px] font-black uppercase tracking-widest sm:block"
            >
              {{ u.type }}
            </span>
            <span class="min-w-0">
              <span class="font-gothic text-sm font-black leading-tight sm:text-base">
                {{ u.title }}
              </span>
              <span class="ml-2 font-mincho text-xs text-smoke group-hover:text-paper/60">
                {{ u.titleJp }}
              </span>
              <span class="block truncate font-gothic text-[11px] text-smoke group-hover:text-paper/60">
                {{ u.note }}
              </span>
            </span>
            <span class="flex items-center gap-2">
              <span
                v-if="i < 2"
                class="border-2 border-current px-1.5 py-0.5 font-display text-[10px] uppercase"
              >New</span>
              <span class="font-display text-xl leading-none opacity-30 transition-opacity group-hover:opacity-100">›</span>
            </span>
          </router-link>
        </li>
      </ul>

      <div class="mt-6 flex justify-end">
        <MangaButton to="/project" variant="outline" size="sm">All updates ›</MangaButton>
      </div>
    </div>
  </section>
</template>
