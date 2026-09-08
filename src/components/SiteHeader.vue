<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { pageNav, sectionNav } from "@/data/content";
import { t } from "@/i18n";
import MangaButton from "@/components/ui/MangaButton.vue";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher.vue";

const route = useRoute();
const open = ref(false);

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);

const marquee = computed(() => t("marquee"));
</script>

<template>
  <header class="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
    <!-- running headline -->
    <div class="overflow-hidden border-b border-ink bg-ink text-paper">
      <div class="flex whitespace-nowrap py-1.5 animate-marquee">
        <span
          v-for="n in 2"
          :key="n"
          class="font-gothic text-[10px] font-bold uppercase tracking-widest2"
        >
          {{ marquee.repeat(3) }}
        </span>
      </div>
    </div>

    <!-- main bar -->
    <div
      class="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6"
    >
      <router-link
        to="/"
        class="group flex items-end gap-2"
        aria-label="Non Project home"
      >
        <span
          class="font-display text-3xl leading-none tracking-tight sm:text-4xl"
          >NON</span
        >
        <span
          class="mb-0.5 border-[2.5px] border-ink bg-ink px-1.5 py-0.5 font-display text-xs uppercase leading-none text-paper sm:text-sm"
        >
          Project
        </span>
        <span
          class="mb-0.5 hidden font-mincho text-xs font-bold text-smoke sm:inline"
          >ノン・プロジェクト</span
        >
      </router-link>

      <nav class="hidden items-center gap-1 lg:flex">
        <router-link
          v-for="item in pageNav"
          :key="item.label"
          :to="item.to"
          class="group relative px-3 py-2 font-gothic text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:text-smoke"
        >
          <span class="block">{{ item.label }}</span>
          <span
            class="pointer-events-none absolute inset-x-2 -bottom-0.5 h-[3px] origin-left scale-x-0 bg-ink transition-transform duration-200 group-hover:scale-x-100"
            :class="{ '!scale-x-100': typeof item.to === 'string' && route.path === item.to }"
          />
        </router-link>
      </nav>

      <div class="flex items-center gap-3">
        <LanguageSwitcher class="hidden sm:inline-flex" />
        <MangaButton to="/resume" size="sm" class="hidden sm:inline-flex"
          >{{ t("header.resume") }}</MangaButton
        >
        <button
          class="flex h-10 w-10 cursor-pointer items-center justify-center border-[3px] border-ink bg-paper shadow-panel-sm lg:hidden"
          :aria-expanded="open"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <span class="relative block h-3.5 w-5">
            <span
              class="absolute left-0 h-[3px] w-full bg-ink transition-all"
              :class="open ? 'top-1.5 rotate-45' : 'top-0'"
            />
            <span
              class="absolute left-0 top-1.5 h-[3px] w-full bg-ink transition-all"
              :class="open ? 'opacity-0' : 'opacity-100'"
            />
            <span
              class="absolute left-0 h-[3px] w-full bg-ink transition-all"
              :class="open ? 'top-1.5 -rotate-45' : 'top-3'"
            />
          </span>
        </button>
      </div>
    </div>

    <!-- category / section bar -->
    <div class="border-t-[3px] border-ink bg-paper-soft">
      <div
        class="mx-auto max-w-[1400px] overflow-x-auto no-scrollbar px-4 sm:px-6"
      >
        <ul class="flex min-w-max items-stretch">
          <li
            v-for="s in sectionNav"
            :key="s.hash"
            class="border-r border-line-gray first:border-l"
          >
            <router-link
              :to="{ path: '/', hash: s.hash }"
              class="flex h-full flex-col justify-center px-3.5 py-2 transition-colors hover:bg-ink hover:text-paper sm:px-5"
            >
              <span
                class="font-mincho text-[10px] font-bold leading-none text-smoke"
                >{{ s.labelJp }}</span
              >
              <span
                class="font-gothic text-[11px] font-black uppercase leading-tight"
                >{{ s.label }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- mobile drawer -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div
        v-if="open"
        class="absolute inset-x-0 top-full border-b-[3px] border-ink bg-paper shadow-panel lg:hidden"
      >
        <nav class="mx-auto max-w-[1400px] px-4 py-3">
          <router-link
            v-for="item in pageNav"
            :key="item.label"
            :to="item.to"
            class="flex items-baseline justify-between border-b border-line-gray py-3 font-gothic font-black uppercase tracking-widest"
          >
            <span>{{ item.label }}</span>
            <span class="font-mincho text-xs font-bold text-smoke">{{
              item.labelJp
            }}</span>
          </router-link>
          <LanguageSwitcher block class="mt-4" />
          <MangaButton to="/resume" size="md" class="mt-3 w-full"
            >{{ t("header.resume") }}</MangaButton
          >
        </nav>
      </div>
    </transition>
  </header>
</template>
