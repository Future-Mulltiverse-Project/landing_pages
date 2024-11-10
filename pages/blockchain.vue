<template>
  <DefaultLayout>
    <div style=" background: url('_nuxt/assets/images/fxpo_marketplace_background_image.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;max-height: 80%;">
    <BlockchainIntroSection
      :heading="`Welcome to the Blockchain of the Future!`"
      :title="`The future multiverse <br /><strong> Blockchain</strong>`"
      :img="{
        url: Img,
        width: 1440,
        height: 784,
      }"
    >
      <template #text>
        <p>
          Powerful and innovative hybrid of Proof of Stake (POS) and Proof of
          Authority (POA) protocols, meticulously designed to log and authorize
          all transactions listed and traded on the FXPO platform.
        </p>
      </template>
      <button class="btn btn-outline-primary" type="button">
        OPEN BLOCKCHAIN EXPLORER
      </button>
    </BlockchainIntroSection>
    </div>
    <div style=" background: url('_nuxt/assets/images/accelerator_bg.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;max-height: 80%;">
    <AboutLaunchpadSection
      :title="`<strong style='color:white'>About Future <br/>multiverse</strong><br /> <span style='color: #CFB16D'> BLOCKCHAIN</span>`"
      :heading="`<p style='color:white !important'>Based on Proof of Stake (POS) and Proof of Authority (POA) protocols. This unique combination of protocols ensures a highly secure, efficient, and scalable ecosystem that can adapt to the ever-evolving demands of the digital landscape.</p>`"
    >
      <template #text>
        <p>
          The FXPO Fusion Reactor is the powerful and innovative synthesis of
          the FXPO Universe Architecture and the FXPO Proof of Stake/Authority
          Blockchain, creating a dynamic ecosystem of unlimited possibilities.
          Our virtual world has been meticulously crafted using the principles
          of the Golden Geometry, making it not just aesthetically beautiful but
          also a catalyst for positive change.
        </p>
        <p>
          At the heart of the FXPO Fusion Reactor lies the FXPO Business Space,
          a unique NFT that represents a cubic meter of business space with
          multiple functions and use cases. These NFTs contain the FXPO Coin, a
          cryptocurrency that can be mined by staking the FXPO Business Space
          NFTs on the FXPO Blockchain, and then staked again to earn gas fees
          from all transactions on the FXPO Blockchain.
        </p>
        <p>
          In addition, the FXPO Fusion Reactor includes the FXPO Accelerator, a
          platform for companies and projects to accelerate their growth and
          success. The FXPO Accelerator offers a LaunchPad for new projects, a
          Marketplace for buying and selling assets, products and services, and
          a variety of services tailored to the needs of companies and
          individuals.
        </p>
        <p>
          With the FXPO Fusion Reactor, we aim to create a more decentralized,
          sustainable, and inclusive global economy, empowering both companies
          and individuals to flourish and spark ingenuity and resourcefulness.
          Join us on this transformative journey as we reshape the global
          economy and elevate the collective consciousness, fostering a brighter
          and more prosperous future for all.
        </p>
      </template>
      <template #buttons>
        <button class="btn btn-outline-primary" type="button">
          OPEN <span style="color:white; padding-left: 5px;padding-right: 5px;">BLOCKCHAIN</span> EXPLORER
        </button>
      </template>
      <IconList v-if="items && items?.length" :items="items">
        <template #default="{ item }">
          <IconListItem :item="item">
            <template #icon>
              <component :is="icons[item.icon]" />
            </template>
          </IconListItem>
        </template>
      </IconList>
    </AboutLaunchpadSection>
    </div>
    <TokenomicsSection />
    <PrelaunchSection />
    <!--BlockchainGuideBookSection/-->
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import Img from '~/assets/images/blockchain-screens.png';
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import PrelaunchSection from '~/components/Sections/BlockchainPrelaunchSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import BlockchainGuideBookSection from '~/components/Sections/BlockchainGuideBookSection.vue';
import BlockchainIntroSection from '~/components/Sections/BlockchainIntroSection.vue';
import IconListItem from '~/components/IconList/IconListItem.vue';
import IconList from '~/components/IconList/IconList.vue';
import AboutLaunchpadSection from '~/components/Sections/AboutLaunchpadSection.vue';

import CyrptocurrencySecurityIcon from '~/icons/CyrptocurrencySecurityIcon.vue';
import CryptocurrencyGlobalIcon from '~/icons/CryptocurrencyGlobalIcon.vue';
import CryptocurrencyLaptopIcon from '~/icons/CryptocurrencyLaptopIcon.vue';
import PickupPointIcon from '~/icons/PickupPointIcon.vue';
import LaptopMoneyIcon from '~/icons/LaptopMoneyIcon.vue';
import SignDocumentIcon from '~/icons/SignDocumentIcon.vue';
import TokenomicsSection from '~/components/Sections/TokenomicsSection.vue';

const icons = {
  CyrptocurrencySecurityIcon,
  CryptocurrencyLaptopIcon,
  CryptocurrencyGlobalIcon,
  PickupPointIcon,
  LaptopMoneyIcon,
  SignDocumentIcon,
};

const items = [
  {
    icon: 'CyrptocurrencySecurityIcon',
    title_white_1: 'Hybrid Protocol',
    text: 'Hybrid FXPO Universe & POS (Proof of Stake) / POA (Proof of Authority) Blockchain Protocol',
  },
  {
    icon: 'CryptocurrencyGlobalIcon',
    title_white_1: 'Decentralized System Solution',
    text: 'Decentralized POS/POA Blockchain Node & Data Management System Solution',
  },
  {
    icon: 'CryptocurrencyLaptopIcon',
    title_white_1: 'Multifunctional Ecosystem',
    text: 'POS/POA based FXPO Coin Mining, Staking & Gamification Reward Functions',
  },
  {
    icon: 'PickupPointIcon',
    title_white_1: 'FXPO Land Plot NFTs',
    text: 'Multifunctional (Ownable, Useable, Minable, Stakable, Leasable and Tradable) FXPO Land Plot NFTs, each owning a unique coordination & code, economic space and other qualities & functions',
  },
  {
    icon: 'LaptopMoneyIcon',
    title_white_1: 'FXPO Coin',
    text: 'The FXPO Universe Ecosystems & Hybrid Blockchain based own Minable, Stakeable, Usable & Tradable Coin',
  },
  {
    icon: 'SignDocumentIcon',
    title_white_1: 'Smart Contracts',
    text: 'FXPO Blockchain based SmartContracts, incl. NFTs, created through and listed on the FXPO LaunchPad',
  },
];
</script>

<style lang="scss" module></style>
