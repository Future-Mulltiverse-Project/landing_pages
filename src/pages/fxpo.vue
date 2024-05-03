<template>
  <DefaultLayout>
    <PlatformOverviewSection />
    <AboutPlatformSection />
    <PlatformFeaturesSection />
    <ArchitectureSection />
    <PrelaunchSection />
    <GuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import PlatformOverviewSection from '~/components/Sections/PlatformOverviewSection.vue';
import AboutPlatformSection from '~/components/Sections/AboutPlatformSection.vue';
import PlatformFeaturesSection from '~/components/Sections/PlatformFeaturesSection.vue';
import ArchitectureSection from '~/components/Sections/ArchitectureSection.vue';
import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
import PrelaunchSection from '~/components/Sections/PrelaunchSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
</script>

<style lang="scss" module></style>
