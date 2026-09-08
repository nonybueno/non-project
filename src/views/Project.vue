<script setup>
import { ref, computed, watch } from 'vue'
import { useHead } from '@vueuse/head'
import { projects } from '@/data/content'
import { t, lang } from '@/i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import MangaButton from '@/components/ui/MangaButton.vue'

useHead({
  title: 'Projects',
  meta: [{ name: 'description', content: 'Selected builds by Thaninpong (Non) Panthawong — full-stack, client-side and UX/UI course projects.' }],
})

const ALL = '__all__'
const categories = computed(() => [ALL, ...new Set(projects.map((p) => p.category))])
const active = ref(ALL)
// category values are localised, so a stale filter would match nothing after a switch
watch(lang, () => {
  active.value = ALL
})
const list = computed(() =>
  active.value === ALL ? projects : projects.filter((p) => p.category === active.value),
)
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b-[3px] border-ink bg-paper-soft">
      <div class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full halftone-lg text-ink/20" />
      <div class="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <p class="mb-3 inline-block border-[3px] border-ink bg-ink px-3 py-1 font-gothic text-[11px] font-black uppercase tracking-widest2 text-paper">
          {{ t('project.kicker') }}
        </p>
        <h1 class="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
          {{ t('project.title') }}
        </h1>
        <p class="mt-4 max-w-xl font-gothic text-sm text-smoke sm:text-base">
          {{ t('project.intro') }}
        </p>

        <div class="mt-8 flex flex-wrap gap-2">
          <button
            v-for="c in categories"
            :key="c"
            class="cursor-pointer border-[3px] border-ink px-3 py-1.5 font-gothic text-xs font-black uppercase tracking-widest transition-colors"
            :class="active === c ? 'bg-ink text-paper' : 'bg-paper text-ink hover:bg-paper-gray'"
            @click="active = c"
          >
            {{ c === ALL ? t('project.all') : c }}
          </button>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16">
      <article
        v-for="(p, i) in list"
        :id="p.id"
        :key="p.id"
        class="mb-14 scroll-mt-40 last:mb-0"
      >
        <div class="grid overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-panel lg:grid-cols-2">
          <div
            class="relative aspect-[4/3] overflow-hidden border-b-[3px] border-ink bg-paper-soft lg:aspect-auto lg:border-b-0 lg:border-r-[3px]"
            :class="{ 'lg:order-2 lg:border-l-[3px] lg:border-r-0': i % 2 === 1 }"
          >
            <img
              :src="p.wide"
              :alt="p.title"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
            <div class="pointer-events-none absolute inset-x-0 top-0 h-8 halftone text-ink/50 opacity-60" />
            <span class="absolute left-3 top-3 border-2 border-ink bg-paper px-2 py-0.5 font-display text-xs uppercase">
              {{ p.volume }}
            </span>
          </div>

          <div class="flex flex-col p-6 sm:p-8">
            <p class="font-gothic text-[11px] font-black uppercase tracking-widest2 text-smoke">
              {{ p.category }} · {{ p.year }}
            </p>
            <h2 class="mt-1 font-display text-3xl uppercase leading-none sm:text-4xl">
              {{ p.title }}
              <span class="font-mincho text-base font-bold text-smoke">{{ p.titleJp }}</span>
            </h2>
            <p class="mt-2 font-gothic text-xs font-bold text-smoke">{{ p.course }} · {{ p.role }}</p>
            <p class="mt-4 font-gothic text-sm leading-relaxed sm:text-base">{{ p.summary }}</p>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span
                v-for="t in p.tags"
                :key="t"
                class="border-2 border-ink px-2 py-0.5 font-gothic text-[11px] font-bold"
              >
                {{ t }}
              </span>
            </div>

            <div class="mt-auto flex flex-wrap gap-3 pt-6">
              <MangaButton
                v-for="l in p.links"
                :key="l.label"
                :href="l.url"
                :variant="l.label === 'GitHub' || l.label === 'Figma' ? 'outline' : 'solid'"
                size="sm"
              >
                {{ l.label }} ↗
              </MangaButton>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
