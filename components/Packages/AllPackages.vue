<template>
    <PackageTable :packages="allPackages" />
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import PackageTable from '~/components/Packages/PackageTable.vue';
  
  const items = [
  {
    type: 'business',
    title: 'Corporate Packages',
    headline:
      'Tailored all-in-one package options for your project or business, containing everything you need to launch, accelerate & or transform your venture to the next Level with us',
    text: 'Tailorsed all-in-one package options for project or businesses of all sizes, containing everything needed to launch, accelerate & or transform any venture to the next Level through the FXPO, incl. FXPO Citizen Passes (Digital FXPO Passport), FXPO m³ NFTs (FXPO Business Space NFTs that are tradable or usable to mint / purchase FXPO Plot NFTs, that are then usable multifunctionally, leasable, stakable and or tradable), as well as a Co-Creator Business Package Pass (Giving every owner of this NFT automatic qualification to a package equivalent Co-Creator Pool, with daily Platform & Creator Fee Participation Payouts)',
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
        name: 'Ambassador 3',
        price: '$5 Million USD',
        fxpo_citizen_pass_nft: '100',
        fxpo_m3_nfts: '500000',
        fxte: '500000',
      },
    ],
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
  
  const allPackages = ref(items.flatMap(item => item.packages || []));
  </script>
  