<template>
  <DefaultLayout>
    <div style=" background: url('_nuxt/assets/images/fxpo_background.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;max-width: 100%;">
      <ArchitectureSection />
      <ExampleImpressions/>
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
import UseCasesSection from '~/components/Sections/UseCasesFXPOSection.vue';
import ExampleImpressions from '~/components/Sections/ExampleImpressions.vue';
import AboutPlatformSection from '~/components/Sections/AboutPlatformSection.vue';
import PlatformFeaturesSection from '~/components/Sections/PlatformFeaturesSection.vue';
import ArchitectureSection from '~/components/Sections/ArchitectureSection.vue';
import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
import FXPOlaunchingSection from '~/components/Sections/FXPOlaunchingSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import QuestSlider from '~/components/Slider/QuestSlider.vue';
</script>

<style lang="scss" module></style>
