<template>
    <DefaultLayout>
      <div style=" background: url('_nuxt/assets/images/fxpo_background.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;max-width: 100%;">
        <TopPackagesSection />
        <ExamplePackagesImpressions/>
        <UseCasesSection/>
        <QuestSlider/>
      </div>
      <FXPOlaunchingSection />
      <GuideBookSection />
      <JoinSection />
    </DefaultLayout>
  </template>
  
  <script lang="ts" setup>
  import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
  import UseCasesSection from '~/components/Sections/UseCasesPackagesSection.vue';
  import ExamplePackagesImpressions from '~/components/Sections/ExamplePackagesImpressions.vue';
  import AboutPlatformSection from '~/components/Sections/AboutPlatformSection.vue';
  import PlatformFeaturesSection from '~/components/Sections/PlatformFeaturesSection.vue';
  import TopPackagesSection from '~/components/Sections/TopPackagesSection.vue';
  import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
  import FXPOlaunchingSection from '~/components/Sections/FXPOlaunchingSection.vue';
  import JoinSection from '~/components/Join/JoinSection.vue';
  import QuestSlider from '~/components/Slider/QuestSlider.vue';
  </script>
  
  <style lang="scss" module></style>
  