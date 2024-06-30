<template>
  <DefaultLayout>
    <QuestIntroSection />
    <QuestAboutSection />
    <QuestArticlesSection />
    <OpportunitiesSection />
    <PartnersSection />
    <OpportunitiesSection2 />
    <QuestSlider/>
    <QuestOnboardSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import QuestIntroSection from '~/components/Sections/QuestIntroSection.vue';
import QuestAboutSection from '~/components/Sections/QuestAboutSection.vue';
import OpportunitiesSection from '~/components/Opportunities/OpportunitiesSection.vue';
import OpportunitiesSection2 from '~/components/Opportunities/OpportunitiesSection2.vue';
import PartnersSection from '~/components/Sections/PartnersSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import QuestArticlesSection from '~/components/Sections/QuestArticlesSection.vue';
import QuestOnboardSection from '~/components/Sections/QuestOnboardSection.vue';
import QuestSlider from '~/components/Slider/QuestSlider.vue';
</script>

<style lang="scss" module></style>
