<script setup>
defineProps({
  image: { type: String, required: true },
  fit: { type: String, default: 'cover' }, // cover | contain
  title: { type: String, required: true },
  titleJp: { type: String, default: '' },
  kicker: { type: String, default: '' },
  meta: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  badge: { type: String, default: '' },
  to: { type: [String, Object], default: null },
  ratio: { type: String, default: 'aspect-[4/3]' },
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to || undefined"
    class="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-panel-sm transition-all duration-150"
    :class="to ? 'hover:-translate-y-1 hover:shadow-panel' : ''"
  >
    <div
      class="relative overflow-hidden border-b-[3px] border-ink bg-paper-soft"
      :class="ratio"
    >
      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="h-full w-full transition duration-500 group-hover:scale-[1.03]"
        :class="[fit === 'contain' ? 'object-contain p-5' : 'object-cover']"
      />
      <div class="pointer-events-none absolute inset-x-0 top-0 h-6 halftone text-ink/60 opacity-70" />
      <span
        v-if="badge"
        class="absolute right-2 top-2 rotate-3 border-2 border-ink bg-ink px-2 py-0.5 font-display text-[10px] uppercase tracking-wide text-paper"
      >
        {{ badge }}
      </span>
      <span
        v-if="titleJp"
        class="writing-vertical-mixed absolute bottom-2 left-2 font-mincho text-lg font-extrabold text-paper [text-shadow:2px_2px_0_#0f0f0f,-1px_-1px_0_#0f0f0f]"
      >
        {{ titleJp }}
      </span>
    </div>

    <div class="flex flex-1 flex-col p-3 sm:p-4">
      <p
        v-if="kicker"
        class="font-gothic text-[10px] font-bold uppercase tracking-widest text-smoke"
      >
        {{ kicker }}
      </p>
      <h3 class="mt-1 font-gothic text-sm font-black leading-snug text-ink sm:text-base">
        {{ title }}
      </h3>
      <p v-if="meta" class="mt-1 text-[11px] text-smoke">{{ meta }}</p>
      <div v-if="tags.length" class="mt-auto flex flex-wrap gap-1 pt-3">
        <span
          v-for="t in tags"
          :key="t"
          class="rounded border border-ink px-1.5 py-0.5 text-[10px] font-bold"
        >
          {{ t }}
        </span>
      </div>
    </div>
  </component>
</template>
