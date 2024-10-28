<template>
  <section :class="$style.section">
    <div :class="$style.grid">
      <ProductListItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        class="p-10 m-10 lg:p-0 lg:m-0"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProductListItem from '~/components/Products/ProductListItem.vue';

// @ts-ignore
import LaunchpadImg from '~/assets/images/launchpad.jpg';
// @ts-ignore
import MarketplaceImg from '~/assets/images/marketplace.jpg';
// @ts-ignore
import QuestImg from '~/assets/images/quest.png';
// @ts-ignore
import BlockchainImg from '~/assets/images/blockchain.png';

const items = [
  {
    img: {
      url: LaunchpadImg,
      width: 299,
      height: 480,
    },
    title: 'LaunchPad',
    text: '“The Future isn’t limited by space or time, only by our imagination. Anything you can imagine, can be built. And everything that can be built, can be funded”.',
    to: '/launchpad',
  },
  {
    img: {
      url: MarketplaceImg,
      width: 497,
      height: 820,
    },
    title: 'Marketplace',
    text: '“Discover the limitless possibilities of the future, at the FXPO Marketplace. Where passions meet purpose and values create opportunities.”',
    to: '/marketplace',
  },
  {
    img: {
      url: QuestImg,
      width: 473,
      height: 389,
    },
    title: 'Initiative',
    text:
      'Discovering the Secrets of the Universe. "If you want to find the secrets of the Universe, think in terms of energy, frequencies and vibration.",\n\n' +
      'Nikola Tesla',
    to: '/',
  },
  {
    img: {
      url: BlockchainImg,
      width: 395,
      height: 544,
    },
    title: 'Blockchain',
    text:
      'The FXPO Blockchain is a Proof of Stake (POS) / Proof of Authority (POA) protocol that logs, verifies, and authorizes all transactions of all Smart Contracts listed & traded on the Future Multiverse Blockchain. \n' +
      '',
    to: '/blockchain',
  },
];
</script>

<style lang="scss" module>
/*.section {
  overflow: hidden;
  //background-color: unset;    
  background-size: cover;
  background-image: url("@/assets/images/dalle_background.png");
}*/
.section{
  margin-top: 70px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 -1px -1px;

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
