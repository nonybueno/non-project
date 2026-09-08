<script setup>
import { useHead } from '@vueuse/head'
import { contact, socials, profile } from '@/data/content'
import SpeechBubble from '@/components/ui/SpeechBubble.vue'
import MangaButton from '@/components/ui/MangaButton.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'

useHead({
  title: 'Contact',
  meta: [{ name: 'description', content: `Contact ${profile.name} (Non) — email, phone, GitHub and Linktree.` }],
})

const cards = [
  { label: 'Email', jp: 'メール', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Phone', jp: '電話', value: contact.phone, href: `tel:${contact.phone.replace(/-/g, '')}` },
  { label: 'Linktree', jp: 'リンク', value: contact.linktree.label, href: contact.linktree.url },
  { label: 'GitHub', jp: 'ギットハブ', value: contact.github.label, href: contact.github.url },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b-[3px] border-ink bg-paper-soft">
      <div class="pointer-events-none absolute inset-0 opacity-[0.05] radial-lines text-ink" />
      <div class="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <p class="mb-3 inline-block border-[3px] border-ink bg-ink px-3 py-1 font-gothic text-[11px] font-black uppercase tracking-widest2 text-paper">
          お問い合わせ · Get in touch
        </p>
        <div class="flex flex-wrap items-center gap-5">
          <h1 class="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            Contact
          </h1>
          <div class="-rotate-3">
            <SpeechBubble tail="bl">Let's talk!</SpeechBubble>
          </div>
        </div>
        <p class="mt-4 max-w-xl font-gothic text-sm text-smoke sm:text-base">
          Reach out about a project, a camp, or just to say hi — replies come faster by email.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <div class="grid gap-5 sm:grid-cols-2">
        <a
          v-for="(c, i) in cards"
          :key="c.label"
          :href="c.href"
          :target="c.href.startsWith('http') ? '_blank' : undefined"
          :rel="c.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="group flex items-center justify-between gap-4 rounded-2xl border-[3px] border-ink p-6 shadow-panel-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-panel"
          :class="i % 2 === 0 ? 'bg-ink text-paper' : 'bg-paper text-ink'"
        >
          <div class="min-w-0">
            <p
              class="font-mincho text-xs font-bold"
              :class="i % 2 === 0 ? 'text-paper/60' : 'text-smoke'"
            >
              {{ c.jp }}
            </p>
            <p class="font-display text-2xl uppercase leading-none sm:text-3xl">{{ c.label }}</p>
            <p class="mt-2 truncate font-gothic text-sm font-bold">{{ c.value }}</p>
          </div>
          <span class="font-display text-4xl leading-none opacity-30 transition-opacity group-hover:opacity-100">→</span>
        </a>
      </div>

      <div class="mt-14">
        <SectionHeading en="Elsewhere" jp="その他" no="•" />
        <div class="flex flex-wrap gap-4">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 border-[3px] border-ink bg-paper px-4 py-3 font-gothic shadow-panel-sm transition-transform hover:-translate-y-1"
          >
            <img :src="s.icon" :alt="s.label" class="h-9 w-9 rounded-full border-2 border-ink bg-ink p-1.5" />
            <span>
              <span class="block text-[10px] font-black uppercase tracking-widest text-smoke">{{ s.label }}</span>
              <span class="block text-sm font-bold">{{ s.handle }}</span>
            </span>
          </a>
        </div>
      </div>

      <div class="mt-14 grid gap-6 border-t-[3px] border-dotted border-ink pt-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p class="font-gothic text-[11px] font-black uppercase tracking-widest2 text-smoke">Based in</p>
          <p class="mt-1 font-gothic text-lg font-black">{{ contact.address }}</p>
        </div>
        <MangaButton :href="contact.resume" download size="lg">Download resume ▽</MangaButton>
      </div>
    </section>
  </div>
</template>
