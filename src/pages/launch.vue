<template>
  <DefaultLayout>
    <LaunchIntroSection />
    <LaunchingSection />
    <AboutFutureSection />
    <OnboardNowSection />
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
import LaunchingSection from '~/components/Sections/launch/launchSectionTimer.vue';
import AboutFutureSection from '~/components/Sections/launch/aboutFutureSection.vue';
import OnboardNowSection from '~/components/Sections/OnboardNowSection.vue';
import PackagesSection from '~/components/Packages/PackagesSection.vue';
import OpportunitiesSection from '~/components/Opportunities/OpportunitiesSection.vue';
import ApplyLinks from '~/components/ApplyLinks/ApplyLinks.vue';
</script>

<style lang="scss" module></style>
