<template>
  <DefaultLayout>
    <div style=" background: url('_nuxt/assets/images/torus_background.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;max-width: 100%;">
    <PackagesIntroSection />
    <PackagesPartnersSection />
    </div>
    <PackagesSectionLanding />
    <PackagesOpportunitiesSection />

    <QuestSlider/>
    <FXPOlaunchingSection />
    <LaunchPadGuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import QuestSlider from '~/components/Slider/QuestSlider.vue';
import PackagesIntroSection from '~/components/Sections/PackagesIntroSection.vue';
import LaunchingSection from '~/components/Sections/TimelineLaunchingSection.vue';
import AboutFutureLaunchSection from '~/components/Sections/launch/AboutFutureLaunchSection.vue';
import LaunchPadGuideBookSection from '~/components/Sections/LaunchPadGuideBookSection.vue';
import OnboardNowSection from '~/components/Sections/OnboardNowSection.vue';
import PackagesSectionLanding from '~/components/Packages/PackagesSectionLanding.vue';
//import OpportunitiesSection from '~/components/Opportunities/OpportunitiesSection.vue';
import ApplyLinks from '~/components/ApplyLinks/ApplyLinks.vue';
import PackagesOpportunitiesSection from '~/components/Opportunities/PackagesOpportunitiesSection.vue';
import FXPOlaunchingSection from '~/components/Sections/FXPOlaunchingSection.vue';
import PackagesPartnersSection from '~/components/Sections/PackagesPartnersSection.vue';
</script>

<style lang="scss" module></style>
