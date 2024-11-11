<template>
  <MainSection
    angle-right-y-both
    has-bg-behind
    has-gradient
    :class="$style.section"
  >
    <AppWrapper :class="$style.wrapper">
      <SectionHeader :class="$style.header" logo-top>
        <template #title>
          <span>FutureX EXPO</span>
          <br />
          Ecosystem
        </template>
        <TextContent :class="$style.text">
          The FutureX EXPO consists of the following connected and interacting
          core elements:
        </TextContent>
      </SectionHeader>
      <div :class="$style.content">
        <div class="row" :class="$style.row">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="col-12 col-md-6 col-xl-4"
          >
            <EcosystemArticle :item="item">
              <template #icon>
                <component :is="icons[item.icon]" />
              </template>
            </EcosystemArticle>
          </div>
        </div>
      </div>
    </AppWrapper>
  </MainSection>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SectionHeader from '@/components/utilities/SectionHeader.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import EcosystemArticle from '~/components/Home/Ecosystem/EcosystemArticle.vue';
import MainSection from '~/components/Section/MainSection.vue';
import TextContent from '~/components/utilities/TextContent.vue';
import AvatarsIcon from '~/icons/AvatarsIcon.vue';
import BlockchainGridIcon from '~/icons/BlockchainGridIcon.vue';
import BusinessSpaceIcon from '~/icons/BusinessSpaceIcon.vue';
import ConnectIcon from '~/icons/ConnectIcon.vue';
import DefiExchangeIcon from '~/icons/DefiExchangeIcon.vue';
import FxteTokenIcon from '~/icons/FxteTokenIcon.vue';
import InvestmentPlatformIcon from '~/icons/InvestmentPlatformIcon.vue';
import OnlineStoreIcon from '~/icons/OnlineStoreIcon.vue';

const icons = {
  FxteTokenIcon,
  AvatarsIcon,
  BusinessSpaceIcon,
  BlockchainGridIcon,
  InvestmentPlatformIcon,
  OnlineStoreIcon,
  DefiExchangeIcon,
  ConnectIcon,
};

const items = ref([
  {
    icon: 'FxteTokenIcon',
    title: 'FXTE<br/>Token',
    summ: 'Exclusive FutureX EXPO Space Minting Function',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'AvatarsIcon',
    title: 'FutureX<br/>Avatars',
    summ: 'NFT, first ETH based then based on our Blockchain',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'BusinessSpaceIcon',
    title: 'FutureX EXPO Business Space',
    summ: 'NFT, first ETH based then based on our Blockchain',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'BlockchainGridIcon',
    title: 'FutureX Blockchain & FXPO Coin',
    summ: 'Layer One Proof of Stake / Authority / Renewable Energy Blockchain',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'BlockchainGridIcon',
    title: 'FutureX Blockchain & FXPO Coin',
    summ: 'Layer One Proof of Stake / Authority / Renewable Energy Blockchain',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'InvestmentPlatformIcon',
    title: 'LaunchPad/Investment Platform',
    summ: 'Asset / Project / Patent Tokenization, STO Public Listing & Sales Platform',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'OnlineStoreIcon',
    title: 'EXPO<br/>Marketplace',
    summ: 'Fully Immersive VR-Experience Marketplace listing and accelerating high quality products & services of innovative, meaningful & impactful brands.',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'DefiExchangeIcon',
    title: 'DeFi<br/>Exchange',
    summ: 'Token & Coin Exchange plus NFT Marketplace',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
  {
    icon: 'ConnectIcon',
    title: 'FutureX<br/>Connect',
    summ: 'Connecting the World to the Future, B2B2C Affiliate System',
    subtitle:
      'We created an unique ecosystem that allows our members to benefit & profit in multiple ways',
    text: 'Check yourself how participating can benefit you aswell!',
    too: { name: 'index' },
  },
]);
</script>

<style lang="scss" module>
.section {
  --sectionGradient: linear-gradient(180deg, #212646 0%, transparent 58.66%);
}

.wrapper {
  padding-bottom: 64px;
}

.header {
  margin-bottom: 68px;
  text-align: center;
}

.text {
  margin: 0 auto;
  max-width: 28ch;
}

.content {
  overflow: hidden;
}

.row {
  --gutter-x: 0;
  margin: 0 -2px -2px;
}
</style>
