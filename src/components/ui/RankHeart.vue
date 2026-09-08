<script setup>
defineProps({
  n: { type: Number, required: true },
  size: { type: String, default: 'md' }, // md | lg
})
</script>

<template>
  <span
    class="relative inline-block shrink-0"
    :class="size === 'lg' ? 'h-16 w-16' : 'h-12 w-12'"
    aria-hidden="true"
  >
    <!-- crown for #1 -->
    <svg
      v-if="n === 1"
      viewBox="0 0 24 12"
      class="absolute left-1/2 top-0 h-[38%] w-[70%] -translate-x-1/2 -translate-y-[55%] fill-ink"
    >
      <path d="M1 11 L1 4 L7 8 L12 1 L17 8 L23 4 L23 11 Z" />
    </svg>

    <svg
      viewBox="0 0 24 24"
      class="absolute inset-0 h-full w-full fill-ink drop-shadow-[2px_2px_0_rgba(0,0,0,0.18)]"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>

    <span
      class="absolute inset-x-0 top-1/2 z-10 -translate-y-[58%] text-center font-display leading-none text-paper"
      :class="size === 'lg' ? 'text-base' : 'text-sm'"
    >
      {{ n }}
    </span>
  </span>
</template>
