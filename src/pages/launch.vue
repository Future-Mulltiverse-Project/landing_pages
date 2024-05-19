<template>
  <DefaultLayout>
    <LaunchIntroSection />
    <LaunchingSection />
    <AboutFutureLaunchSection />
    <LaunchPadPrelaunchSection />
    <PackagesSection />
    <OpportunitiesSection />
    <ApplyLinks />
    <GuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import LaunchIntroSection from '~/components/Sections/LaunchIntroSection.vue';
import LaunchingSection from '~/components/Sections/TimelineLaunchingSection.vue';
import AboutFutureLaunchSection from '~/components/Sections/launch/AboutFutureLaunchSection.vue';
import OnboardNowSection from '~/components/Sections/OnboardNowSection.vue';
import PackagesSection from '~/components/Packages/PackagesSection.vue';
import OpportunitiesSection from '~/components/Opportunities/OpportunitiesSection.vue';
import ApplyLinks from '~/components/ApplyLinks/ApplyLinks.vue';
import LaunchPadPrelaunchSection from '~/components/Sections/LaunchPadPrelaunchSection.vue';
</script>

<style lang="scss" module></style>
