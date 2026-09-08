<script setup>
import { pageNav, socials, contact, profile } from '@/data/content'

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative mt-24 border-t-[3px] border-ink bg-ink text-paper">
    <div class="h-4 w-full halftone-fade text-paper/40" />

    <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
      <div class="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <!-- masthead -->
        <div>
          <p class="font-mincho text-sm font-bold text-paper/60">ノン・プロジェクト</p>
          <p class="font-display text-6xl leading-none tracking-tight sm:text-7xl">
            NON<span class="text-outline-thin" style="-webkit-text-stroke-color:#fff">PROJECT</span>
          </p>
          <p class="mt-4 max-w-sm font-gothic text-sm text-paper/70">
            The portfolio of {{ profile.name }} — built and drawn as a black-and-white
            web manga magazine.
          </p>
          <div class="mt-6 h-3 w-40 speed-lines-diag text-paper/50" />
        </div>

        <!-- nav -->
        <nav>
          <p class="mb-4 font-gothic text-xs font-black uppercase tracking-widest2 text-paper/50">
            目次 / Index
          </p>
          <ul class="space-y-2">
            <li v-for="item in pageNav" :key="item.label">
              <router-link
                :to="item.to"
                class="group inline-flex items-baseline gap-2 font-gothic font-bold uppercase tracking-widest transition-colors hover:text-paper/60"
              >
                <span class="text-paper/40 group-hover:text-paper">▸</span>{{ item.label }}
                <span class="font-mincho text-[11px] text-paper/40">{{ item.labelJp }}</span>
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- contact / social -->
        <div>
          <p class="mb-4 font-gothic text-xs font-black uppercase tracking-widest2 text-paper/50">
            連絡先 / Contact
          </p>
          <ul class="space-y-3">
            <li v-for="s in socials" :key="s.label">
              <a
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 font-gothic text-sm transition-opacity hover:opacity-70"
              >
                <img
                  :src="s.icon"
                  :alt="s.label"
                  class="h-8 w-8 rounded-full border-2 border-paper bg-ink p-1.5"
                />
                <span>
                  <span class="block text-[10px] font-black uppercase tracking-widest text-paper/50">{{ s.label }}</span>
                  <span class="block">{{ s.handle }}</span>
                </span>
              </a>
            </li>
            <li class="pt-1">
              <a
                :href="contact.linktree.url"
                target="_blank"
                rel="noopener noreferrer"
                class="font-gothic text-sm underline underline-offset-4 hover:opacity-70"
              >
                {{ contact.linktree.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-4 border-t border-paper/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="font-gothic text-[11px] leading-relaxed text-paper/50">
          © {{ year }} {{ profile.name }} · NON PROJECT. Original design — a manga-magazine
          tribute. Not affiliated with, and using no artwork, characters or branding from,
          any publisher.
        </p>
        <button
          class="inline-flex shrink-0 items-center gap-2 border-[3px] border-paper px-4 py-2 font-gothic text-[11px] font-black uppercase tracking-widest transition-transform hover:-translate-y-1"
          @click="toTop"
        >
          ▲ Back to top
        </button>
      </div>
    </div>
  </footer>
</template>
