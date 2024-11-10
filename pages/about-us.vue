<template>
  <DefaultLayout>
    <AboutIntroSection />
    <MissionSection />
    <JoinTeamSection />
    <GuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import AboutIntroSection from '~/components/About/AboutIntroSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
import JoinTeamSection from '~/components/Sections/JoinTeamSection.vue';
import MissionSection from '~/components/Sections/MissionSection.vue';
</script>

<style lang="scss" module></style>
