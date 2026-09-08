<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: '' },
  to: { type: [String, Object], default: null },
  download: { type: Boolean, default: false },
  variant: { type: String, default: 'solid' }, // solid | outline | ghost-inv
  size: { type: String, default: 'md' }, // sm | md | lg
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const isExternal = computed(() => props.href && !props.download && !props.href.startsWith('mailto:'))

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 border-[3px] border-ink font-gothic font-bold uppercase tracking-widest transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-0 active:translate-y-0'
  const variants = {
    solid: 'bg-ink text-paper shadow-panel-sm hover:shadow-panel',
    outline: 'bg-paper text-ink shadow-panel-sm hover:shadow-panel',
    'ghost-inv': 'border-paper bg-transparent text-paper shadow-panel-inv hover:shadow-[9px_9px_0_0_#fff]',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-[10px]',
    md: 'px-5 py-2.5 text-xs',
    lg: 'px-7 py-3.5 text-sm',
  }
  return `${base} ${variants[props.variant] || variants.solid} ${sizes[props.size] || sizes.md}`
})
</script>

<template>
  <component
    :is="tag"
    :to="to || undefined"
    :href="href || undefined"
    :download="download ? '' : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <slot />
  </component>
</template>
