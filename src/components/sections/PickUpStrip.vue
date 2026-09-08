<script setup>
import { projects } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TitleCard from '@/components/ui/TitleCard.vue'

const rest = projects.slice(1)
</script>

<template>
  <section id="pickup" class="relative overflow-hidden border-b-[3px] border-ink bg-paper-soft">
    <div
      class="pointer-events-none absolute -left-10 top-12 h-40 w-40 rounded-full halftone-lg text-ink/15"
    />
    <div class="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading en="Pick Up" jp="今月のピックアップ" no="03" />
      <div class="grid gap-4 sm:grid-cols-3">
        <TitleCard
          v-for="p in rest"
          :key="p.id"
          :image="p.wide"
          :title="p.title"
          :title-jp="p.titleJp"
          :kicker="p.volume + ' · ' + p.category"
          :meta="p.course"
          :tags="p.tags.slice(0, 3)"
          :to="{ path: '/project', hash: '#' + p.id }"
        />
      </div>
    </div>
  </section>
</template>
