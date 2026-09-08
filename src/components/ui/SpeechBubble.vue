<script setup>
defineProps({
  tail: { type: String, default: 'bl' }, // bl | br | tl | tr | none
  invert: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="relative inline-block rounded-[1.5rem] border-[3px] border-ink px-4 py-2 font-marker leading-tight"
    :class="invert ? 'bg-ink text-paper' : 'bg-paper text-ink'"
  >
    <slot />
    <span
      v-if="tail !== 'none'"
      class="absolute h-3.5 w-3.5 rotate-45 border-ink"
      :class="[
        invert ? 'bg-ink' : 'bg-paper',
        {
          'bottom-[-9px] left-7 border-b-[3px] border-r-[3px]': tail === 'bl',
          'bottom-[-9px] right-7 border-b-[3px] border-l-[3px]': tail === 'br',
          'top-[-9px] left-7 border-l-[3px] border-t-[3px]': tail === 'tl',
          'top-[-9px] right-7 border-r-[3px] border-t-[3px]': tail === 'tr',
        },
      ]"
    />
  </div>
</template>
