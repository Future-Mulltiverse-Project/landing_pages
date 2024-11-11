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
        <p>Explore & find the best suitable option for you:</p>
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
        <template v-for="(item, index) in items2" :key="index">
          <SecondPackageCategoryItem
            :item="item"
            :selected-index="selectedIndex2"
            :index="index"
            @select="() => selectIndex2(index)"
          />
          <SecondPackageCategoryPanel
            v-if="selectedIndex2 === index"
            :class="$style.panel"
            :item="item"
          />
        </template>
      </div>
      <!--div v-if="selectedIndex !== -1" :class="$style.panel">
        <PackageCategoryPanel :item="items[selectedIndex]"  />
      </div-->
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import PackageCategoryItem from '~/components/Packages/PackageCategoryItem.vue';
import SecondPackageCategoryItem from '~/components/Packages/SecondPackageCategoryItem.vue';

import PackageCategoryPanel from '~/components/Packages/PackageCategoryPanel.vue';
import SecondPackageCategoryPanel from '~/components/Packages/SecondPackageCategoryPanel.vue';

const items = [
  {
    type: 'business',
    title: 'Corporate Packages',
    headline:
      'Tailored all-in-one package options for your project or business, containing everything you need to launch, accelerate & or transform your venture to the next Level with us',
    text: 'Tailorsed all-in-one package options for project or businesses of all sizes, containing everything needed to launch, accelerate & or transform any venture to the next Level through the FXPO, incl. FXPO Citizen Passes (Digital FXPO Passport), FXPO m³ NFTs (FXPO Business Space NFTs that are tradable or usable to mint / purchase FXPO Plot NFTs, that are then usable multifunctionally, leasable, stakable and or tradable), as well as a Co-Creator Business Package Pass (Giving every owner of this NFT automatic qualification to a package equivalent Co-Creator Pool, with daily Platform & Creator Fee Participation Payouts)',
    packages: [
      {
        name: 'Beginner',
        price: '$250 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '16',
        fxte: '50',
        index: '0'
      },
      {
        name: 'Newbie',
        price: '$500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '32',
        fxte: '100',
        index: '0'
      },
      {
        name: 'Starter',
        price: '$1.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62',
        fxte: '200',
        index: '0'
      },
      {
        name: 'Explorer',
        price: '$2.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156',
        fxte: '500',
        index: '0'
      },
      {
        name: 'Adventurer',
        price: '$5.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312',
        fxte: '1.000',
        index: '0'
      },
      {
        name: 'Pioneer',
        price: '$12.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '781',
        fxte: '2.500',
        index: '0'
      },
      {
        name: 'Builder S',
        price: '$25.000 USD',
        fxpo_citizen_pass_nft: '5',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '1.562',
        fxte: '5.000',
        index: '0'
      },
      {
        name: 'Builder M',
        price: '$50.000 USD',
        fxpo_citizen_pass_nft: '10',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '3.125',
        fxte: '10.000',
        index: '0'
      },
      {
        name: 'Builder L',
        price: '$100.000 USD',
        fxpo_citizen_pass_nft: '25',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '2.778',
        fxte: '20.000',
        index: '0'
      },
      {
        name: 'Builder XL',
        price: '$250.000 USD',
        fxpo_citizen_pass_nft: '50',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '15.625',
        fxte: '50.000',
        index: '0'
      },
      {
        name: 'Creator',
        price: '$500.000 USD',
        fxpo_citizen_pass_nft: '100',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '31.250',
        fxte: '100.000',
        index: '0'
      },
      {
        name: 'Super Creator',
        price: '$1 Million USD',
        fxpo_citizen_pass_nft: '250',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62.500',
        fxte: '200.000',
        index: '0'
      },
      {
        name: 'Ambassador',
        price: '$2.5 Million USD',
        fxpo_citizen_pass_nft: '500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156.250',
        fxte: '500.000',
        index: '0'
      },
      {
        name: 'Partner',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '1000',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312.500',
        fxte: '1 Million',
        index: '0'
      },
      {
        name: 'Senior Partner',
        price: '$10 Million USD',
        fxpo_citizen_pass_nft: '2500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '625.000',
        fxte: '2.5 Million ',
        index: '0'
      },
{
        name: 'Beginner',
        price: '$250 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '16',
        fxte: '50',
        index: '1'
      },
      {
        name: 'Newbie',
        price: '$500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '32',
        fxte: '100',
        index: '1'
      },
      {
        name: 'Starter',
        price: '$1.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62',
        fxte: '200',
        index: '1'
      },
      {
        name: 'Explorer',
        price: '$2.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156',
        fxte: '500',
        index: '1'
      },
      {
        name: 'Adventurer',
        price: '$5.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312',
        fxte: '1.000',
        index: '1'
      },
      {
        name: 'Pioneer',
        price: '$12.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '781',
        fxte: '2.500',
        index: '1'
      },
      {
        name: 'Builder S',
        price: '$25.000 USD',
        fxpo_citizen_pass_nft: '5',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '1.562',
        fxte: '5.000',
        index: '1'
      },
      {
        name: 'Builder M',
        price: '$50.000 USD',
        fxpo_citizen_pass_nft: '10',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '3.125',
        fxte: '10.000',
        index: '1'
      },
      {
        name: 'Builder L',
        price: '$100.000 USD',
        fxpo_citizen_pass_nft: '25',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '2.778',
        fxte: '20.000',
        index: '1'
      },
      {
        name: 'Builder XL',
        price: '$250.000 USD',
        fxpo_citizen_pass_nft: '50',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '15.625',
        fxte: '50.000',
        index: '1'
      },
      {
        name: 'Creator',
        price: '$500.000 USD',
        fxpo_citizen_pass_nft: '100',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '31.250',
        fxte: '100.000',
        index: '1'
      },
      {
        name: 'Super Creator',
        price: '$1 Million USD',
        fxpo_citizen_pass_nft: '250',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62.500',
        fxte: '200.000',
        index: '1'
      },
      {
        name: 'Ambassador',
        price: '$2.5 Million USD',
        fxpo_citizen_pass_nft: '500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156.250',
        fxte: '500.000',
        index: '1'
      },
      {
        name: 'Partner',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '1000',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312.500',
        fxte: '1 Million',
        index: '1'
      },
      {
        name: 'Senior Partner',
        price: '$10 Million USD',
        fxpo_citizen_pass_nft: '2500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '625.000',
        fxte: '2.5 Million ',
        index: '1'
      },
{
        name: 'Beginner',
        price: '$250 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '16',
        fxte: '50',
        index: '2'
      },
      {
        name: 'Newbie',
        price: '$500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '32',
        fxte: '100',
        index: '2'
      },
      {
        name: 'Starter',
        price: '$1.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62',
        fxte: '200',
        index: '2'
      },
      {
        name: 'Explorer',
        price: '$2.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156',
        fxte: '500',
        index: '2'
      },
      {
        name: 'Adventurer',
        price: '$5.000 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_m3_nfts: '312',
        fxte: '1.000',
        index: '2'
      },
      {
        name: 'Pioneer',
        price: '$12.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '781',
        fxte: '2.500',
        index: '2'
      },
      {
        name: 'Builder S',
        price: '$25.000 USD',
        fxpo_citizen_pass_nft: '5',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '1.562',
        fxte: '5.000',
        index: '2'
      },
      {
        name: 'Builder M',
        price: '$50.000 USD',
        fxpo_citizen_pass_nft: '10',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '3.125',
        fxte: '10.000',
        index: '2'
      },
      {
        name: 'Builder L',
        price: '$100.000 USD',
        fxpo_citizen_pass_nft: '25',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '2.778',
        fxte: '20.000',
        index: '2'
      },
      {
        name: 'Builder XL',
        price: '$250.000 USD',
        fxpo_citizen_pass_nft: '50',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '15.625',
        fxte: '50.000',
        index: '2'
      },
      {
        name: 'Creator',
        price: '$500.000 USD',
        fxpo_citizen_pass_nft: '100',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '31.250',
        fxte: '100.000',
        index: '2'
      },
      {
        name: 'Super Creator',
        price: '$1 Million USD',
        fxpo_citizen_pass_nft: '250',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62.500',
        fxte: '200.000',
        index: '2'
      },
      {
        name: 'Ambassador',
        price: '$2.5 Million USD',
        fxpo_citizen_pass_nft: '500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156.250',
        fxte: '500.000',
        index: '2'
      },
      {
        name: 'Partner',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '1000',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312.500',
        fxte: '1 Million',
        index: '2'
      },
      {
        name: 'Senior Partner',
        price: '$10 Million USD',
        fxpo_citizen_pass_nft: '2500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '625.000',
        fxte: '2.5 Million ',
        index: '2'
      },
    ],
  },
  {
    type: 'marketing',
    title: 'Marketing Packages',
    text: 'Tailorsed all-in-one package options for project or businesses of all sizes, containing everything needed to launch, accelerate & or transform any venture to the next Level through the FXPO, incl. FXPO Citizen Passes (Digital FXPO Passport), FXPO m³ NFTs (FXPO Business Space NFTs that are tradable or usable to mint / purchase FXPO Plot NFTs, that are then usable multifunctionally, leasable, stakable and or tradable), as well as a Co-Creator Business Package Pass (Giving every owner of this NFT automatic qualification to a package equivalent Co-Creator Pool, with daily Platform & Creator Fee Participation Payouts)',
    headline:
      'Tailored all-in-one marketing package options for yourself, your sales agency, business or network, ontaining everything you need to accelerate & transform your success to the next Level, through helping others',
      packages: [
      {
        name: 'Beginner',
        price: '$250 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '16',
        fxte: '50',
        index: '0'
      },
      {
        name: 'Newbie',
        price: '$500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '32',
        fxte: '100',
        index: '0'
      },
      {
        name: 'Starter',
        price: '$1.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62',
        fxte: '200',
        index: '0'
      },
      {
        name: 'Explorer',
        price: '$2.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156',
        fxte: '500',
        index: '0'
      },
      {
        name: 'Adventurer',
        price: '$5.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312',
        fxte: '1.000',
        index: '0'
      },
      {
        name: 'Pioneer',
        price: '$12.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '781',
        fxte: '2.500',
        index: '0'
      },
      {
        name: 'Builder S',
        price: '$25.000 USD',
        fxpo_citizen_pass_nft: '5',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '1.562',
        fxte: '5.000',
        index: '0'
      },
      {
        name: 'Builder M',
        price: '$50.000 USD',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_citizen_pass_nft: '10',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '3.125',
        fxte: '10.000',
        index: '0'
      },
      {
        name: 'Builder L',
        price: '$100.000 USD',
        fxpo_citizen_pass_nft: '25',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '2.778',
        fxte: '20.000',
        index: '0'
      },
      {
        name: 'Builder XL',
        price: '$250.000 USD',
        fxpo_citizen_pass_nft: '50',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '15.625',
        fxte: '50.000',
        index: '0'
      },
      {
        name: 'Creator',
        price: '$500.000 USD',
        fxpo_citizen_pass_nft: '100',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '31.250',
        fxte: '100.000',
        index: '0'
      },
      {
        name: 'Super Creator',
        price: '$1 Million USD',
        fxpo_citizen_pass_nft: '250',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62.500',
        fxte: '200.000',
        index: '0'
      },
      {
        name: 'Ambassador',
        price: '$2.5 Million USD',
        fxpo_citizen_pass_nft: '500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156.250',
        fxte: '500.000',
        index: '0'
      },
      {
        name: 'Partner',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '1000',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312.500',
        fxte: '1 Million',
        index: '0'
      },
      {
        name: 'Senior Partner',
        price: '$10 Million USD',
        fxpo_citizen_pass_nft: '2500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '625.000',
        fxte: '2.5 Million ',
        index: '0'
      },
{
        name: 'Beginner',
        price: '$250 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '16',
        fxte: '50',
        index: '1'
      },
      {
        name: 'Newbie',
        price: '$500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '32',
        fxte: '100',
        index: '1'
      },
      {
        name: 'Starter',
        price: '$1.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62',
        fxte: '200',
        index: '1'
      },
      {
        name: 'Explorer',
        price: '$2.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156',
        fxte: '500',
        index: '1'
      },
      {
        name: 'Adventurer',
        price: '$5.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312',
        fxte: '1.000',
        index: '1'
      },
      {
        name: 'Pioneer',
        price: '$12.500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_m3_nfts: '781',
        fxte: '2.500',
        index: '1'
      },
      {
        name: 'Builder S',
        price: '$25.000 USD',
        fxpo_citizen_pass_nft: '5',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '1.562',
        launch_type:'OFFICIAL LAUNCH',
        fxte: '5.000',
        index: '1'
      },
      {
        name: 'Builder M',
        price: '$50.000 USD',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_citizen_pass_nft: '10',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '3.125',
        fxte: '10.000',
        index: '1'
      },
      {
        name: 'Builder L',
        price: '$100.000 USD',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_citizen_pass_nft: '25',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '2.778',
        fxte: '20.000',
        index: '1'
      },
      {
        name: 'Builder XL',
        price: '$250.000 USD',
        fxpo_citizen_pass_nft: '50',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '15.625',
        launch_type:'OFFICIAL LAUNCH',
        fxte: '50.000',
        index: '1'
      },
      {
        name: 'Creator',
        price: '$500.000 USD',
        fxpo_citizen_pass_nft: '100',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '31.250',
        fxte: '100.000',
        index: '1'
      },
      {
        name: 'Super Creator',
        price: '$1 Million USD',
        fxpo_citizen_pass_nft: '250',
        fxpo_expo_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_m3_nfts: '62.500',
        fxte: '200.000',
        index: '1'
      },
      {
        name: 'Ambassador',
        price: '$2.5 Million USD',
        fxpo_citizen_pass_nft: '500',
        fxpo_expo_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_m3_nfts: '156.250',
        fxte: '500.000',
        index: '1'
      },
      {
        name: 'Partner',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '1000',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312.500',
        launch_type:'OFFICIAL LAUNCH',
        fxte: '1 Million',
        index: '1'
      },
      {
        name: 'Senior Partner',
        price: '$10 Million USD',
        fxpo_citizen_pass_nft: '2500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '625.000',
        fxte: '2.5 Million ',
        index: '1'
      },
{
        name: 'Beginner',
        price: '$250 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '16',
        fxte: '50',
        index: '2'
      },
      {
        name: 'Newbie',
        price: '$500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '32',
        fxte: '100',
        index: '2'
      },
      {
        name: 'Starter',
        price: '$1.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62',
        fxte: '200',
        index: '2'
      },
      {
        name: 'Explorer',
        price: '$2.500 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156',
        fxte: '500',
        index: '2'
      },
      {
        name: 'Adventurer',
        price: '$5.000 USD',
        fxpo_citizen_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312',
        fxte: '1.000',
        index: '2'
      },
      {
        name: 'Pioneer',
        price: '$12.500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_m3_nfts: '781',
        fxte: '2.500',
        index: '2'
      },
      {
        name: 'Builder S',
        price: '$25.000 USD',
        fxpo_citizen_pass_nft: '5',
        fxpo_expo_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_m3_nfts: '1.562',
        fxte: '5.000',
        index: '2'
      },
      {
        name: 'Builder M',
        price: '$50.000 USD',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_citizen_pass_nft: '10',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '3.125',
        fxte: '10.000',
        index: '2'
      },
      {
        name: 'Builder L',
        price: '$100.000 USD',
        fxpo_citizen_pass_nft: '25',
        fxpo_expo_pass_nft: '1',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_m3_nfts: '2.778',
        fxte: '20.000',
        index: '2'
      },
      {
        name: 'Builder XL',
        price: '$250.000 USD',
        fxpo_citizen_pass_nft: '50',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '15.625',
        fxte: '50.000',
        index: '2'
      },
      {
        name: 'Creator',
        price: '$500.000 USD',
        fxpo_citizen_pass_nft: '100',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '31.250',
        fxte: '100.000',
        launch_type:'OFFICIAL LAUNCH',
        index: '2'
      },
      {
        name: 'Super Creator',
        price: '$1 Million USD',
        fxpo_citizen_pass_nft: '250',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '62.500',
        fxte: '200.000',
        index: '2'
      },
      {
        name: 'Ambassador',
        price: '$2.5 Million USD',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_citizen_pass_nft: '500',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '156.250',
        fxte: '500.000',
        index: '2'
      },
      {
        name: 'Partner',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '1000',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '312.500',
        fxte: '1 Million',
        index: '2'
      },
      {
        name: 'Senior Partner',
        price: '$10 Million USD',
        fxpo_citizen_pass_nft: '2500',
        launch_type:'OFFICIAL LAUNCH',
        fxpo_expo_pass_nft: '1',
        fxpo_m3_nfts: '625.000',
        fxte: '2.5 Million ',
        index: '2'
      },
    ],
  },
];

const items2 = [
  {
    type: 'business',
    title: 'Future Trends Catalyst LaunchPad Services',
    headline:
      'The FXPO LaunchPad Catalyzer offering Design Production & Branding, Tokenization, Compliance and other Acceleration Services to close every projects or companies gap to their unleashed full pontential.',
    text: 'Tailored all-in-one package options for project or businesses of all sizes, containing everything needed to launch, accelerate & or transform any venture to the next Level through the FXPO, incl. FXPO Citizen Passes (Digital FXPO Passport), FXPO m³ NFTs (FXPO Business Space NFTs that are tradable or usable to mint / purchase FXPO Plot NFTs, that are then usable multifunctionally, leasable, stakable and or tradable), as well as a Co-Creator Business Package Pass (Giving every owner of this NFT automatic qualification to a package equivalent Co-Creator Pool, with daily Platform & Creator Fee Participation Payouts)',
    packages: [
      {
        name: 'Beginner',
        price: '$250 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '16',
        fxte: '50',
        index: '9'
      },
    ],
  },
  {
    type: 'marketing',
    title: 'Memberships & Other Additional Features',
    text: 'Tailored all-in-one package options for project or businesses of all sizes, containing everything needed to launch, accelerate & or transform any venture to the next Level through the FXPO, incl. FXPO Citizen Passes (Digital FXPO Passport), FXPO m³ NFTs (FXPO Business Space NFTs that are tradable or usable to mint / purchase FXPO Plot NFTs, that are then usable multifunctionally, leasable, stakable and or tradable), as well as a Co-Creator Business Package Pass (Giving every owner of this NFT automatic qualification to a package equivalent Co-Creator Pool, with daily Platform & Creator Fee Participation Payouts)',
    headline:
      'Get publicly listed on the FXPO VR Exhibiton, LaunchPad and Marketplace with your projects or companies offerings to start trading today',
      packages: [
      {
        name: 'Newbie',
        price: '$500 USD',
        fxpo_citizen_pass_nft: '1',
        fxpo_expo_pass_nft: '1',
        launch_type:'VIP PRE-LAUNCH',
        fxpo_m3_nfts: '32',
        fxte: '100',
        index: '9'
      },
    ],
  },
];

const selectedIndex = ref(-1);
const selectedIndexPass = ref(-1);

function selectIndex(index: number) {
  selectedIndex.value = index;
  selectedIndexPass.value = index;
}

const selectedIndex2 = ref(-1);
const selectedIndexPass2 = ref(-1);

function selectIndex2(index: number) {
  selectedIndex2.value = index;
  selectedIndexPass2.value = index;
}
</script>

<style lang="scss" module>
.section {
  padding: 60px  0 40px;
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
  font-size: 28px;
  margin-bottom: 52px;
  color: $primary;
  font-weight: 600;
  line-height: divide(30, 28);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(806px);
}

.text {
  margin-bottom: 48px;
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
