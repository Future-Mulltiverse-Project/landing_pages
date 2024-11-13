<template>
  <AppWrapper>
    <section :class="$style.section">

      <div class="pb-12 flex items-center">
        <div class=" grid grid-cols-1 gap-3 lg:grid-cols-2" >
          <div class="grid grid-cols-2 gap-3" >
            <!-- text left -->
            <div>
              <h4 class='card-title text-4xl font-bold'>LaunchPad</h4>
              <p>“The Future isn’t limited by space or time, only by our imagination. Anything you can imagine, can be built. And everything that can be built, can be funded”.</p>      
              <div class="flex mt-8" >
                <button  class="btn-outline-primary">
                  <p style="font-weight: 600;color: #cfb16d; font-size:14px; margin-bottom: 0px;">
                    LEARN MORE
                  </p>
                </button>
              </div>
            </div>
            <!-- Image right -->
            <div>
              <img :src="LaunchpadImg" class='w-40'  style=" padding-bottom: 10px"  alt="logo">
            </div>

            <!-- text left -->
            <div class="pt-16">
              <h4 class='card-title text-4xl font-bold'>Marketplace</h4>
              <p>“Discover the limitless possibilities of the future, at the FXPO Marketplace. Where passions meet purpose and values create opportunities.”</p>      
              <div class="flex mt-8" >
                <button  class="btn-outline-primary">
                  <p style="font-weight: 600;color: #cfb16d; font-size:14px; margin-bottom: 0px;">
                    LEARN MORE
                  </p>
                </button>
              </div>
            </div>
            <!-- Image right -->
            <div class="pt-16">
              <img :src="MarketplaceImg" class=' w-40'  style=" padding-bottom: 10px"  alt="logo">
            </div>
          </div>


          <div class="pt-2 grid grid-cols-2 gap-3" >
            <!-- text left -->
            <div>
              <h4 class='card-title text-4xl font-bold'>Initiative</h4>
              <p>Discovering the Secrets of the Universe. "If you want to find the secrets of the Universe, think in terms of energy, frequencies and vibration.",<br/>Nikola Tesla</p>      
              <div class="flex mt-8" >
                <button  class="btn-outline-primary">
                  <p style="font-weight: 600;color: #cfb16d; font-size:14px; margin-bottom: 0px;">
                    LEARN MORE
                  </p>
                </button>
              </div>
            </div>
            <!-- Image right -->
            <div class="pt-16">
              <img :src="QuestImg" class='w-40'  style=" padding-bottom: 10px"  alt="logo">
            </div>

            <!-- text left -->
            <div class="pt-14">
              <h4 class='card-title text-4xl font-bold'>Blockchain</h4>
              <p>The FXPO Blockchain is a Proof of Stake (POS) / Proof of Authority (POA) protocol that logs, verifies, and authorizes all transactions of all Smart Contracts listed & traded on the Future Multiverse Blockchain.</p>      
              <div class="flex mt-8" >
                <button  class="btn-outline-primary">
                  <p style="font-weight: 600;color: #cfb16d; font-size:14px; margin-bottom: 0px;">
                    LEARN MORE
                  </p>
                </button>
              </div>
            </div>
            <!-- Image right -->
            <div class="pt-16">
              <img :src="BlockchainImg" class='w-40'  style=" padding-bottom: 10px"  alt="logo">
            </div>
          </div>

        </div>
      </div>
    </section>
  </AppWrapper>
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
import MediaPicture from '~/components/Media/MediaPicture.vue';

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
  margin-bottom: 50px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 -1px -1px;

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card-title{
  color: #CFB16D !important;
}
</style>
