<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { hackathons } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import MangaButton from '@/components/ui/MangaButton.vue'

const lightbox = ref(null)

function openLightbox(h) {
  lightbox.value = { src: h.certImage, alt: `${h.name} — certificate of participation` }
}
function closeLightbox() {
  lightbox.value = null
}
function onKey(e) {
  if (e.key === 'Escape') closeLightbox()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section id="hackathons">
    <div class="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading en="Hackathons" jp="ハッカソン" no="02" />

      <div class="grid gap-6 sm:grid-cols-2">
        <article
          v-for="h in hackathons"
          :key="h.name"
          class="group relative flex flex-col pl-2"
        >
          <!-- spine -->
          <div class="absolute left-0 top-2 bottom-6 w-3 rounded-l border-[3px] border-ink bg-paper-gray" />

          <div
            class="relative flex flex-1 flex-col overflow-hidden rounded-r-2xl rounded-bl-2xl border-[3px] border-ink bg-paper shadow-panel-sm transition-transform duration-150 group-hover:-translate-y-1.5"
          >
            <!-- banner cover — hover (or click) reveals the certificate -->
            <div class="group/cert relative aspect-[16/9] overflow-hidden border-b-[3px] border-ink bg-ink">
              <img
                :src="h.banner"
                :alt="`${h.name} hackathon banner`"
                loading="lazy"
                class="h-full w-full object-cover transition-opacity duration-300"
                :class="h.certImage ? 'group-hover/cert:opacity-0' : ''"
              />
              <div class="pointer-events-none absolute inset-x-0 top-0 h-6 halftone text-paper/40 opacity-60" />

              <span
                class="absolute right-2 top-2 rotate-3 border-2 border-ink bg-paper px-2 py-0.5 font-display text-[10px] uppercase text-ink transition-opacity"
                :class="h.certImage ? 'group-hover/cert:opacity-0' : ''"
              >
                {{ h.result }}
              </span>

              <!-- certificate reveal -->
              <button
                v-if="h.certImage"
                type="button"
                class="absolute inset-0 flex cursor-zoom-in items-center justify-center bg-paper p-3 opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100"
                @click="openLightbox(h)"
              >
                <img :src="h.certImage" alt="" class="max-h-full max-w-full object-contain" />
                <span
                  class="absolute bottom-2 right-2 border-2 border-ink bg-ink px-2 py-0.5 font-gothic text-[9px] font-black uppercase tracking-widest text-paper"
                >
                  Click to enlarge
                </span>
              </button>

              <span
                v-if="h.certImage"
                class="pointer-events-none absolute bottom-2 right-2 border-2 border-ink bg-ink px-2 py-1 font-gothic text-[10px] font-black uppercase tracking-widest text-paper transition-opacity duration-200 group-hover/cert:opacity-0"
              >
                ✓ Certificate
              </span>
            </div>

            <!-- body -->
            <div class="flex flex-1 flex-col p-4 sm:p-5">
              <p class="font-gothic text-[10px] font-black uppercase tracking-widest text-smoke">
                {{ h.org }}
              </p>
              <h3 class="mt-0.5 font-display text-xl uppercase leading-[1.05] sm:text-2xl">
                {{ h.name }}
              </h3>

              <ul class="mt-3 space-y-2">
                <li
                  v-for="(p, i) in h.points"
                  :key="i"
                  class="flex gap-2.5 font-gothic text-[13px] leading-snug"
                >
                  <span class="mt-1 h-1.5 w-1.5 shrink-0 rotate-45 bg-ink" />
                  <span>{{ p }}</span>
                </li>
              </ul>

              <div class="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
                <span
                  v-if="h.certificate && !h.certImage"
                  class="border-2 border-ink bg-ink px-2 py-0.5 font-gothic text-[10px] font-black uppercase tracking-widest text-paper"
                >
                  ✓ Certificate
                </span>
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
        </article>
      </div>

      <div class="mt-8 flex justify-center">
        <MangaButton to="/resume" size="md">See the full resume</MangaButton>
      </div>
    </div>

    <!-- certificate lightbox -->
    <Teleport to="body">
      <div
        v-if="lightbox"
        class="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-ink/90 p-4 sm:p-8"
        @click="closeLightbox"
      >
        <div class="relative max-h-full w-full max-w-4xl" @click.stop>
          <img
            :src="lightbox.src"
            :alt="lightbox.alt"
            class="max-h-[85vh] w-full rounded-lg border-[3px] border-paper bg-paper object-contain"
          />
          <button
            type="button"
            class="absolute -right-3 -top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] border-paper bg-ink font-display text-xl leading-none text-paper"
            aria-label="Close"
            @click="closeLightbox"
          >
            ×
          </button>
        </div>
      </div>
    </Teleport>
  </section>
</template>
