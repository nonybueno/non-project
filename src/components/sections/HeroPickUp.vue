<script setup>
import { computed } from "vue";
import { profile, socials, projects } from "@/data/content";
import { t } from "@/i18n";
import { useTypewriter } from "@/composables/useTypewriter";
import SpeechBubble from "@/components/ui/SpeechBubble.vue";
import MangaButton from "@/components/ui/MangaButton.vue";

const { text } = useTypewriter(() => t("hero.words"));
const featured = computed(() => projects[0]);
</script>

<template>
  <section class="relative overflow-hidden border-b-[3px] border-ink">
    <!-- decorative speed lines -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.05] radial-lines text-ink"
    />
    <div
      class="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full halftone-lg text-ink/30"
    />

    <div
      class="relative mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <!-- headline -->
        <div>
          <p
            class="mb-3 inline-block border-[3px] border-ink bg-ink px-3 py-1 font-gothic text-[11px] font-black uppercase tracking-widest2 text-paper"
          >
            {{ t("hero.kicker") }}
          </p>
          <h1
            class="font-display text-[3.2rem] uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {{ t("hero.hi") }}
            <span class="block text-outline"
              >{{ text
              }}<span
                class="ml-1 inline-block w-[2px] animate-caret bg-ink align-middle"
                style="height: 0.8em"
                >&nbsp;</span
              ></span
            >
          </h1>

          <div
            class="mt-6 max-w-md border-[3px] border-ink bg-ink px-4 py-3 font-gothic text-sm font-bold text-paper sm:text-base"
          >
            {{ t("hero.devFor") }}
            <span class="underline decoration-2 underline-offset-2"
              >Back-End</span
            >,
            <span class="underline decoration-2 underline-offset-2"
              >Front-End</span
            >
            {{ t("hero.and") }}
            <span class="underline decoration-2 underline-offset-2"
              >Full-Stack</span
            >.
          </div>

          <p class="mt-4 max-w-md font-gothic text-sm text-smoke">
            {{ profile.subTagline }}
          </p>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <MangaButton :to="{ path: '/', hash: '#experience' }" size="md"
              >{{ t("hero.seeWorks") }}</MangaButton
            >
            <MangaButton to="/about" variant="outline" size="md"
              >{{ t("hero.readProfile") }}</MangaButton
            >
          </div>

          <div class="mt-7 flex items-center gap-3">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.label"
              class="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-ink bg-ink shadow-panel-sm transition-transform hover:-translate-y-1"
            >
              <img :src="s.icon" :alt="s.label" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- featured cover -->
        <div class="relative mx-auto w-full max-w-sm">
          <div class="absolute -left-4 -top-4 z-10 -rotate-6">
            <SpeechBubble tail="br" invert>PICK UP!!</SpeechBubble>
          </div>
          <router-link
            to="/about"
            class="group block overflow-hidden rounded-[1.5rem] border-[3px] border-ink bg-paper shadow-panel-lg"
          >
            <div
              class="relative aspect-[4/5] overflow-hidden border-b-[3px] border-ink bg-paper-soft"
            >
              <img
                src="/images/IMG_4432.jpg"
                :alt="profile.name"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div
                class="pointer-events-none absolute inset-x-0 bottom-0 h-16 halftone-fade rotate-180 text-ink"
              />
              <span
                class="absolute bottom-2 left-2 border-2 border-ink bg-ink px-2 py-0.5 font-mincho text-sm font-bold text-paper"
              >
                {{ featured.titleJp }}
              </span>
            </div>
            <div class="flex items-center justify-between gap-3 p-4">
              <div>
                <p
                  class="font-gothic text-[10px] font-black uppercase tracking-widest text-smoke"
                >
                  {{ featured.volume }} · {{ t("hero.ranked") }}
                </p>
                <p class="font-gothic text-lg font-black leading-tight">
                  {{ profile.name }}
                </p>
              </div>
              <span class="font-display text-4xl leading-none text-ink/20"
                >→</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
