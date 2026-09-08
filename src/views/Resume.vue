<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { profile, contact, skills, projects, experience, hackathons } from '@/data/content'
import { t } from '@/i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import MangaButton from '@/components/ui/MangaButton.vue'

useHead({
  title: 'Resume',
  meta: [{ name: 'description', content: `Resume of ${profile.name} (Non) — back-end developer, ${profile.universityShort}.` }],
})

const facts = computed(() => [
  { label: t('resume.fName'), value: profile.name },
  { label: t('resume.fNickname'), value: profile.nickname },
  { label: t('resume.fBorn'), value: profile.birthDate },
  { label: t('resume.fRole'), value: profile.role },
  { label: t('resume.fEducation'), value: profile.year },
  { label: t('resume.fGpax'), value: profile.gpax },
  { label: t('resume.fLocation'), value: profile.location },
  { label: t('resume.fEmail'), value: contact.email },
])
</script>

<template>
  <div>
    <section class="relative overflow-hidden border-b-[3px] border-ink bg-ink text-paper">
      <div class="pointer-events-none absolute inset-0 opacity-[0.08] halftone-lg text-paper" />
      <div class="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto]">
        <div>
          <p class="mb-3 inline-block border-[3px] border-paper px-3 py-1 font-gothic text-[11px] font-black uppercase tracking-widest2">
            {{ t('resume.kicker') }}
          </p>
          <h1 class="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            {{ t('resume.title') }}
          </h1>
          <p class="mt-4 max-w-xl font-gothic text-sm text-paper/70 sm:text-base">
            {{ profile.summary }}
          </p>
        </div>
        <MangaButton :href="contact.resume" download variant="ghost-inv" size="lg">
          {{ t('resume.downloadPdf') }}
        </MangaButton>
      </div>
    </section>

    <section class="border-b-[3px] border-ink">
      <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading :en="t('resume.profile')" :jp="t('resume.profileJp')" no="01" />
        <dl class="grid border-[3px] border-ink bg-paper shadow-panel sm:grid-cols-2">
          <div
            v-for="(f, i) in facts"
            :key="f.label"
            class="border-ink p-5"
            :class="[
              i % 2 === 0 ? 'sm:border-r-[3px]' : '',
              i < facts.length - (facts.length % 2 === 0 ? 2 : 1) ? 'border-b-[3px]' : '',
            ]"
          >
            <dt class="font-gothic text-[10px] font-black uppercase tracking-widest2 text-smoke">
              {{ f.label }}
            </dt>
            <dd class="mt-1 font-gothic text-sm font-bold leading-snug">{{ f.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="border-b-[3px] border-ink bg-paper-soft">
      <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading :en="t('resume.experience')" :jp="t('resume.experienceJp')" no="02" />
        <ol class="border-[3px] border-ink bg-paper shadow-panel">
          <li
            v-for="job in experience"
            :key="job.rank"
            class="flex gap-4 border-b-[3px] border-ink p-5 last:border-b-0 sm:gap-5 sm:p-6"
          >
            <img
              :src="job.logo"
              :alt="job.company"
              class="h-14 w-14 shrink-0 rounded-lg border-2 border-ink object-cover sm:h-16 sm:w-16"
            />
            <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span class="font-display text-xl uppercase">{{ job.company }}</span>
              <span class="font-gothic text-xs font-bold text-smoke">{{ job.period }}</span>
            </div>
            <p class="mt-0.5 font-gothic text-sm font-bold">{{ job.role }}</p>
            <ul class="mt-2 space-y-1.5">
              <li
                v-for="(p, i) in job.points"
                :key="i"
                class="flex gap-2 font-gothic text-[13px] leading-snug text-smoke"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-ink" />
                <span>{{ p }}</span>
              </li>
            </ul>
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
          </li>
        </ol>

        <div class="mt-6 border-[3px] border-dashed border-ink bg-paper p-5 sm:p-6">
          <p class="font-gothic text-[11px] font-black uppercase tracking-widest2 text-smoke">
            {{ t('resume.hackathons') }}
          </p>
          <div v-for="h in hackathons" :key="h.name" class="mt-3">
            <p class="font-display text-lg uppercase">
              {{ h.name }}
              <span class="font-gothic text-xs font-bold text-smoke">
                {{ h.org }}{{ h.year ? ' · ' + h.year : '' }} · {{ h.result }}
              </span>
              <a
                v-if="h.certImage"
                :href="h.certImage"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-1 inline-block border border-ink px-1 py-0.5 text-[9px] font-black uppercase tracking-wider hover:bg-ink hover:text-paper"
              >
                {{ t('resume.certificate') }} ↗
              </a>
              <span
                v-else-if="h.certificate"
                class="ml-1 border border-ink px-1 py-0.5 text-[9px] font-black uppercase tracking-wider"
              >
                {{ t('resume.certificate') }}
              </span>
            </p>
            <ul class="mt-1.5 space-y-1">
              <li
                v-for="(p, i) in h.points"
                :key="i"
                class="flex gap-2 font-gothic text-[13px] leading-snug text-smoke"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-ink" />
                <span>{{ p }}</span>
              </li>
            </ul>
            <div v-if="h.stack.length" class="mt-1.5 flex flex-wrap gap-1">
              <span
                v-for="t in h.stack"
                :key="t"
                class="border border-ink px-1.5 py-0.5 text-[10px] font-bold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b-[3px] border-ink">
      <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading :en="t('resume.skills')" :jp="t('resume.skillsJp')" no="03" />
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="s in skills"
            :key="s.id"
            class="border-[3px] border-ink bg-paper p-6 shadow-panel-sm"
          >
            <p class="font-display text-2xl uppercase leading-none">
              {{ s.title }}
              <span class="font-mincho text-sm font-bold text-smoke">{{ s.titleJp }}</span>
            </p>
            <p class="mt-2 font-gothic text-xs text-smoke">{{ s.blurb }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="t in s.stack"
                :key="t"
                class="border-2 border-ink px-2 py-0.5 font-gothic text-[11px] font-bold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading :en="t('resume.selectedWork')" :jp="t('resume.selectedWorkJp')" no="04" />
        <ol class="border-[3px] border-ink bg-paper shadow-panel">
          <li
            v-for="p in projects"
            :key="p.id"
            class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-[3px] border-ink p-5 last:border-b-0"
          >
            <span class="font-display text-lg uppercase">{{ p.title }}</span>
            <span class="font-gothic text-xs font-bold text-smoke">{{ p.course }} · {{ p.year }}</span>
            <span class="font-gothic text-xs">{{ p.tags.join(' / ') }}</span>
            <a
              v-for="l in p.links.slice(0, 1)"
              :key="l.label"
              :href="l.url"
              target="_blank"
              rel="noopener noreferrer"
              class="font-gothic text-xs font-black uppercase underline underline-offset-4"
            >
              {{ l.label }} ↗
            </a>
          </li>
        </ol>

        <div class="mt-10 flex flex-wrap gap-3">
          <MangaButton to="/project" size="lg">{{ t('resume.seeProjects') }}</MangaButton>
          <MangaButton to="/contact" variant="outline" size="lg">{{ t('resume.contactNon') }}</MangaButton>
        </div>
      </div>
    </section>
  </div>
</template>
