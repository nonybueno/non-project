<script setup>
defineProps({
  en: { type: String, required: true },
  jp: { type: String, default: '' },
  no: { type: String, default: '' },
  invert: { type: Boolean, default: false },
})
</script>

<template>
  <div class="mb-8 flex items-end gap-3 sm:mb-12 sm:gap-5">
    <div
      v-if="no"
      class="font-display text-5xl leading-[0.8] sm:text-7xl"
      :class="invert ? 'text-paper/25' : 'text-ink/15'"
    >
      {{ no }}
    </div>

    <div class="min-w-0 flex-1">
      <p
        v-if="jp"
        class="mb-1 font-gothic text-[11px] font-bold tracking-widest2 sm:text-sm"
        :class="invert ? 'text-paper/70' : 'text-smoke'"
      >
        {{ jp }}
      </p>
      <h2
        class="font-display text-[2rem] uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
        :class="invert ? 'text-paper' : 'text-ink'"
      >
        {{ en }}
      </h2>
    </div>

    <div
      class="hidden h-4 max-w-[160px] flex-1 halftone sm:block"
      :class="invert ? 'text-paper/80' : 'text-ink/80'"
    />
  </div>
</template>
