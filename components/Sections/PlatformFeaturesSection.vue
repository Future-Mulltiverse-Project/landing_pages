<template>
<div style=" background: url('_nuxt/assets/images/accelerator_bg.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;">
  <section class="pt-10 pb-10">
    <AppWrapper>
      <h2 :class="$style.title" class="mb-8 text-2xl md:text-3xl lg:text-4xl " >
        Key Components
        <span :class="$style.gold">&</span>
        Features
        <span :class="$style.gold">of Future Multiverse</span>
        Ecosystem
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
</div>
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
    title_white_1: 'Hyper-Realistic XR',
    title_white_2: '&',
    title_gold_1: 'Multiverse',
    title_gold_2: 'EXPO',
    text: 'The Future Multiverse & FXPO is a Hyper-Realistic, digital & decentralized Meta-Universe, harnessing cutting edge technology to accelerate the economy of the Future.',
    url: '/launch',
  },
  {
    icon: 'LaptopMetricsIcon',
    title_white_1: '',
    title_white_2: '/ Accelerator Platform',
    title_gold_1: 'LaunchPad',
    title_gold_2: '',
    //title: 'LaunchPad / Accelerator Platform',
    text: 'The FXPO LaunchPad - your state of the art platform to catalyze project funding or invest in assets.',
    url: '/launchpad',
  },
  {
    icon: 'MarketplaceIcon',
    title_white_1: 'Web4 Based',
    title_white_2: '',
    title_gold_1: 'Marketplace',
    title_gold_2: '',
    //title: ' Marketplace',
    text: 'FXPO Marketplace - Your ultimate gateway to enter the world of web4, blockchain and the digital future.',
    url: '/marketplace',
  },
  {
    icon: 'StaffIcon',
    title_white_1: 'Future Multiverse',
    title_white_2: '',
    title_gold_1: 'Product & Service Packages',
    title_gold_2: '',
    text: 'Business, Design & Marketing Packages, incl. our Passport, Hyper-Realistic Avatars, Multi-Functional Business Space, Platform Revenue Share NFTs, Any Dimension Custom Design Services for any business, Marketing Licences, Apparel & much more ',
    url: '/packages',
  },
  {
    icon: 'WorldwideLocationIcon',
    title_white_1: 'Advanced Future',
    title_white_2: '',
    title_gold_1: 'Technologies',
    title_gold_2: '',
    text: 'The Future Multiverse & FXPO is accelerating an international portfolio of groundbreaking technologies across multiple industries, scaling their institutional, governmental, academic, public & mass adoption',
    url: '/architecture',
  },
  {
    icon: 'LaptopMoneyIcon',
    title_white_1: 'Future Multiverse',
    title_white_2: '&',
    title_gold_1: 'Blockchain',
    title_gold_2: 'Coin',
    text: "The Future Multiverse's underlying Hybrid POS / POA Blockchain protocol and it's minable / stakable & tradable Coin",
    url: '/blockchain',
  },
];
</script>

<style lang="scss" module>

.gold {
  color: $primary;
}

.title {
  //font-size: 48px;
  line-height: divide(60, 48);
  color: $white;
  font-weight: 600;
  max-width: rem-calc(710px);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
