<template>
  <section :class="$style.section">
    <AppWrapper>
      <h2 :class="$style.title">
        Key Components and Features of FXPO Platform
      </h2>
      <IconList :items="items">
        <template #default="{ item }">
          <IconListItem :item="item">
            <template #icon>
              <component :is="icons[item.icon]" />
            </template>
          </IconListItem>
        </template>
      </IconList>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import IconList from '~/components/IconList/IconList.vue';
import AugmentedRealityIcon from '~/icons/AugmentedRealityIcon.vue';
import LaptopMetricsIcon from '~/icons/LaptopMetricsIcon.vue';
import MarketplaceIcon from '~/icons/MarketplaceIcon.vue';
import StaffIcon from '~/icons/StaffIcon.vue';
import WorldwideLocationIcon from '~/icons/WorldwideLocationIcon.vue';
import LaptopMoneyIcon from '~/icons/LaptopMoneyIcon.vue';
import IconListItem from '~/components/IconList/IconListItem.vue';

const icons = {
  AugmentedRealityIcon,
  LaptopMetricsIcon,
  MarketplaceIcon,
  StaffIcon,
  WorldwideLocationIcon,
  LaptopMoneyIcon,
};

const items = [
  {
    icon: 'AugmentedRealityIcon',
    title: 'Hyper-Realistic VR EXPO',
    text: 'The FXPO is a Hyper-Realistic, digital & decentralized Meta-Universe, harnessing cutting edge technology to accelerate the economy of the Future.',
    url: '/',
  },
  {
    icon: 'LaptopMetricsIcon',
    title: 'LaunchPad Investment-Platform',
    text: 'The FXPO LaunchPad - your state of the art platform to catalyze project funding or invest in assets.',
    url: '/',
  },
  {
    icon: 'MarketplaceIcon',
    title: 'Web3 Marketplace',
    text: 'FXPO Marketplace - Your ultimate gateway to enter the world of web3, blockchain and the digital future.',
    url: '/',
  },
  {
    icon: 'StaffIcon',
    title: 'FXPO Avatar',
    text: 'Your Digital Twin Identity & Representation in the FXPO Meta-Universe.',
    url: '/',
  },
  {
    icon: 'WorldwideLocationIcon',
    title: 'FXPO Business Space',
    text: 'Economic FXPO Space Plot NFTs you can purchase, use multifunctionaly, lease and stake or trade',
    url: '/',
  },
  {
    icon: 'LaptopMoneyIcon',
    title: 'FXPO Blockchain & Coin',
    text: "The FXPO's underlying Hybrid POS / POA Blockchain protocol and it's minable, stakable and tradable Coin",
    url: '/',
  },
];
</script>

<style lang="scss" module>
.section {
  @include padding(76px 0 80px);
}

.title {
  @include font-size(48px);
  @include margin-bottom(96px);
  line-height: divide(60, 48);
  color: $primary;
  font-weight: 600;
  max-width: rem-calc(710px);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
