<script setup>
import { useHead } from '@vueuse/head'
import HeroPickUp from '@/components/sections/HeroPickUp.vue'
import ExperienceRanking from '@/components/sections/ExperienceRanking.vue'
import Hackathons from '@/components/sections/Hackathons.vue'
import PickUpStrip from '@/components/sections/PickUpStrip.vue'
import TodayUpdates from '@/components/sections/TodayUpdates.vue'
import MangaRanking from '@/components/sections/MangaRanking.vue'
import ArticlesVideos from '@/components/sections/ArticlesVideos.vue'
import RecommendedManga from '@/components/sections/RecommendedManga.vue'
import MagazineFeature from '@/components/sections/MagazineFeature.vue'

useHead({
  title: '',
  meta: [
    {
      name: 'description',
      content:
        'NON PROJECT — the portfolio of Thaninpong (Non) Panthawong laid out as a black-and-white Japanese web manga magazine.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://thaninpong.info/' }],
})
</script>

<template>
  <div>
    <HeroPickUp />
    <ExperienceRanking />
    <Hackathons />
    <PickUpStrip />
    <TodayUpdates />
    <MangaRanking />
    <ArticlesVideos />
    <RecommendedManga />
    <MagazineFeature />
  </div>
</template>
