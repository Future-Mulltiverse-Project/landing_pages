<template>
  <DefaultLayout>
    <LaunchIntroSection />
    <LaunchingSection />
    <AboutFutureLaunchSection />
    <LaunchPadPrelaunchSection />
    <PackagesSection />
    <LaunchOpportunitiesSection />
    <ApplyLinks />
    <LaunchPadGuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import LaunchIntroSection from '~/components/Sections/LaunchIntroSection.vue';
import LaunchingSection from '~/components/Sections/TimelineLaunchingSection.vue';
import AboutFutureLaunchSection from '~/components/Sections/launch/AboutFutureLaunchSection.vue';
import LaunchPadGuideBookSection from '~/components/Sections/LaunchPadGuideBookSection.vue';
import OnboardNowSection from '~/components/Sections/OnboardNowSection.vue';
import PackagesSection from '~/components/Packages/PackagesSectionLanding.vue';
//import OpportunitiesSection from '~/components/Opportunities/OpportunitiesSection.vue';
import ApplyLinks from '~/components/ApplyLinks/ApplyLinks.vue';
import LaunchOpportunitiesSection from '~/components/Opportunities/LaunchOpportunitiesSection.vue';
import LaunchPadPrelaunchSection from '~/components/Sections/LaunchPadPrelaunchSection.vue';
</script>

<style lang="scss" module></style>
