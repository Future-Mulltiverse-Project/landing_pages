<template>
  <section :class="$style.section">
    <AppWrapper>
      <MainSectionHeader
        :class="$style.header"
        :title="`<span style='color: white'> <span style='color: #CFB16D'>FUTURE MULTIVERSE LAUNCH</span><br />AVAILABLE NFT PACKAGES</span>`"
      />
      <p :class="$style.heading">
        Exclusively accessible for <span style="color:white"> successfully onboarded</span><br /> Individuals, Projects & SME's, Public Companies, <br/>
        Organizations & Governments
      </p>
      <MainSectionTextContent :class="$style.text">
        <p>Explore & Find the best suited for you:</p>
      </MainSectionTextContent>
      <div :class="$style.grid">
        <template v-for="(item, index) in items" :key="index">
          <PackageCategoryItem
            :item="item"
            :selected-index="selectedIndex"
            :index="index"
            @select="() => selectIndex(index)"
          />
          <PackageCategoryPanel
            v-if="selectedIndex === index"
            :class="$style.panel"
            :item="item"
          />
        </template>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import PackageCategoryItem from '~/components/Packages/PackageCategoryItem.vue';
import PackageCategoryPanel from '~/components/Packages/PackageCategoryPanel.vue';

const items = [
  {
    type: 'business',
    title: 'Business Packages',
    headline:
      'Tailored all-in-one package options for your project or business, containing everything you need to launch, accelerate & or transform your venture to the next Level with us',
    text: 'Tailored all-in-one package options for project or businesses of all sizes, containing everything needed to launch, accelerate & or transform any venture to the next Level through the FXPO, incl. FXPO Citizen Passes (Digital FXPO Passport), FXPO m³ NFTs (FXPO Business Space NFTs that are tradable or usable to mint / purchase FXPO Plot NFTs, that are then usable multifunctionally, leasable, stakable and or tradable), as well as a Co-Creator Business Package Pass (Giving every owner of this NFT automatic qualification to a package equivalent Co-Creator Pool, with daily Platform & Creator Fee Participation Payouts)',
    packages: [
      {
        name: 'Explorer',
        price: '$2.500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_m3_nfts: '500',
        fxte: '500',
      },
      {
        name: 'Adventurer',
        price: '$5.000 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_m3_nfts: '1000',
        fxte: '1000',
      },
      {
        name: 'Pioneer',
        price: '$10.000 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_m3_nfts: '2000',
        fxte: '2000',
      },
      {
        name: 'Builder S',
        price: '$25.000 USD',
        fxpo_citizen_pass_nft: '5',
        fxpo_m3_nfts: '5000',
        fxte: '5000',
      },
      {
        name: 'Builder M',
        price: '$50.000 USD',
        fxpo_citizen_pass_nft: '10',
        fxpo_m3_nfts: '10000',
        fxte: '10000',
      },
      {
        name: 'Builder L',
        price: '$100.000 USD',
        fxpo_citizen_pass_nft: '25',
        fxpo_m3_nfts: '20000',
        fxte: '20000',
      },
      {
        name: 'Builder XL',
        price: '$250.000 USD',
        fxpo_citizen_pass_nft: '50',
        fxpo_m3_nfts: '50000',
        fxte: '50000',
      },
      {
        name: 'Creator',
        price: '$500.000 USD',
        fxpo_citizen_pass_nft: '100',
        fxpo_m3_nfts: '100000',
        fxte: '100000',
      },
      {
        name: 'Ambassador 1',
        price: '$1 Million USD',
        fxpo_citizen_pass_nft: '100',
        fxpo_m3_nfts: '200000',
        fxte: '200000',
      },
      {
        name: 'Ambassador 2',
        price: '$2.5 Million USD',
        fxpo_citizen_pass_nft: '100',
        fxpo_m3_nfts: '250000',
        fxte: '250000',
      },
      {
        name: 'Ambassador 3',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '100',
        fxpo_m3_nfts: '500000',
        fxte: '500000',
      },
    ],
  },
  {
    type: 'marketing',
    title: 'Marketing Packages',
    headline:
      'Tailored all-in-one marketing package options for yourself, your sales agency, business or network, ontaining everything you need to accelerate & transform your success to the next Level, through helping others',
  },
  {
    type: 'catalyzer',
    title: 'Catalyzer',
    headline:
      'The FXPO LaunchPad Catalyzer offering Design Production & Branding, Tokenization, Compliance and other Acceleration Services to close every projects or companies gap to their unleashed full potential.',
  },
  {
    type: 'public',
    title: 'FXPO Public Listing',
    headline:
      'Get publicly listed on the FXPO VR Exhibition, LaunchPad and Marketplace with your projects or companies offerings to start trading today!',
  },
];

const selectedIndex = ref(-1);

function selectIndex(index: number) {
  selectedIndex.value = index;
}
</script>

<style lang="scss" module>
.section {
  @include padding(150px 0 145px);
  background: radial-gradient(1160px 820px at center top, #23274a, transparent);
  text-align: center;
}

.header {
  max-width: rem-calc(800px);
  margin: 0 auto rem-calc(38px);

  p:first-child {
    color: $primary;
    max-width: rem-calc(480px);
    margin-left: auto;
    margin-right: auto;
  }
}

.heading {
  @include font-size(28px);
  @include margin-bottom(52px);
  color: $primary;
  font-weight: 600;
  line-height: divide(30, 28);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(806px);
}

.text {
  @include margin-bottom(48px);
  font-size: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: row dense;

  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.panel {
  @include media-breakpoint-up(md) {
    grid-column: 1 / span 2;
  }
}
</style>
