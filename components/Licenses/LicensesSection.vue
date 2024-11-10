<template>
  <MainSection angle-right-y-both
    has-gradient
    has-bg-behind
    :class="$style.section">
    <AppWrapper :class="$style.wrapper">
      <SectionHeader :class="$style.header" logo-hidden>
        <template #title>
          With Purchasing
          our Packages You Receive
          <span>Licenses for:</span>
        </template>
      </SectionHeader>
      <div :class="$style.content">
        <div class="row" :class="$style.row">
          <div v-for="(item, index) in items"
            :key="index"
            class="col-12 col-md-6 col-lg-4"
            :class="$style.col">
            <LicenseListItem :item="item" />
          </div>
        </div>
      </div>
    </AppWrapper>
  </MainSection>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import AppWrapper from "~/components/AppWrapper/AppWrapper";
import LicenseListItem from "~/components/Licenses/LicenseListItem.vue";
import MainSection from "~/components/Section/MainSection.vue";
import SectionHeader from "~/components/utilities/SectionHeader.vue";

const items = ref([
  {
    icon: "/images/icon-coins.png",
    title: "Staking / Validator Licence",
    text: "Validator nodes become responsible for verifying, voting on, and maintaining a record of transactions."
  },
  {
    icon: "/images/icon-volume.png",
    title: "Agent (Referral) Licence",
    text: "Agent Licence for Individual Avatars, Agency Licence for Corporates."
  },
  {
    icon: "/images/icon-suitcase.png",
    title: "Corporate / Business License",
    text: "Lorem ipsum dolor sit am ct piscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma"
  }
]);

</script>

<style lang="scss" module>
.section {
  --sectionGradient: linear-gradient(
      173deg,
      #212646 var(--angleHeight),
      transparent calc(#{var(--angleHeight)} * 3)
  );
}

.wrapper {
  padding-bottom: rem-calc(120px);
}

.header {
  max-width: 56ch;
  margin: calc(var(--angleHeight) / -2 - #{rem-calc(18px)}) auto 0;
  text-align: center;
}

.content:not(:first-child) {
  margin-top: rem-calc(72px);
}

.row {
  --gutter-x: #{rem-calc(26px)};
  --gutter-y: #{rem-calc(26px)};
}

.col {
  padding-top: rem-calc(85px);
}
</style>
