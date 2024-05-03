<template>
  <DefaultLayout>
    <QuestIntroSection />
    <QuestAboutSection />
    <QuestArticlesSection />
    <OpportunitiesSection />
    <QuestOnboardSection />
    <GuidebookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import QuestIntroSection from '~/components/Sections/QuestIntroSection.vue';
import QuestAboutSection from '~/components/Sections/QuestAboutSection.vue';
import OpportunitiesSection from '~/components/Opportunities/OpportunitiesSection.vue';
import GuidebookSection from '~/components/Sections/GuideBookSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import QuestArticlesSection from '~/components/Sections/QuestArticlesSection.vue';
import QuestOnboardSection from '~/components/Sections/QuestOnboardSection.vue';
</script>

<style lang="scss" module></style>
