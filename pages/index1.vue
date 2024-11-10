<template>
  <DefaultLayout>
    <HomeIntroSection />
    <LaunchingSection />
    <AboutFxpoSection />
    <AcceleratorSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import AboutFxpoSection from '~/components/Sections/AboutFxpoSection.vue';
import AcceleratorSection from '~/components/Sections/AcceleratorSection.vue';
import HomeIntroSection from '~/components/Sections/HomeIntroSection.vue';
import LaunchingSection from '~/components/Sections/LaunchingSection.vue';
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
</script>
