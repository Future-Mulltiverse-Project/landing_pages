<template>
  <DefaultLayout>
    <div style=" background: url('_nuxt/assets/images/fxpo_marketplace_background_image.png'), #0A0D1D; background-repeat: no-repeat; background-size: contain;min-width: 100%;">
      <WelcomeFutureMultiverse />
      <UseCasesSection/>
    </div>
      <ArchitectureSection/>
      <ExampleImpressions/>
      <QuestSlider/>
    <FXPOlaunchingSection />
    <GuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import UseCasesSection from '~/components/Sections/UseCasesFXPONew.vue';
import ExampleImpressions from '~/components/Sections/ExampleImpressionsFXPO.vue';
import WelcomeFutureMultiverse from '~/components/AppHeader/WelcomeFutureMultiverse.vue';
import ArchitectureSection from '~/components/Sections/ArchitectureSectionFXPO.vue';
import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
import FXPOlaunchingSection from '~/components/Sections/FXPOlaunchingSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import QuestSlider from '~/components/Slider/QuestSliderFXPO2.vue';
</script>

<style lang="scss" module></style>
