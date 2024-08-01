<template>
  <DefaultLayout>
    <QuestIntroSection />
    <QuestAboutSection />
    <QuestArticlesSection />
    <QuestSlider/>
    <OpportunitiesSection />
    <PartnersSection />
    <QuestFewExamplesSlider/>
    <PackagesOpportunitiesSection />
    <QuestOnboardSection />
    <GuidebookSection/>
    <JoinSection />

  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import QuestSlider from '~/components/Slider/QuestSlider.vue';

import QuestIntroSection from '~/components/Sections/QuestIntroSection.vue';
import QuestAboutSection from '~/components/Sections/QuestAboutSection.vue';
import OpportunitiesSection from '~/components/Opportunities/OpportunitiesSection.vue';
//import OpportunitiesSection2 from '~/components/Opportunities/PackagesOpportunitiesSection.vue';
import PackagesOpportunitiesSection from '~/components/Opportunities/QuestOpportunitiesSection.vue';
import QuestFewExamplesSlider from '~/components/Slider/QuestFewExamplesSlider.vue';
import PartnersSection from '~/components/Sections/PartnersSection.vue';
import QuestArticlesSection from '~/components/Sections/QuestArticlesSection.vue';
import QuestOnboardSection from '~/components/Sections/QuestOnboardSection.vue';
import GuidebookSection from '~/components/Sections/GuideBookSection.vue';

</script>

<style lang="scss" module></style>
