import { ref } from 'vue';

type OpportunityData = {
  title: string;
  text?: string;
};
export interface Opportunity {
  tab: string;
  items?: OpportunityData[];
}
export const useOpportunitiesItems = () => {
  return ref([
    {
      tab: 'For Individuals',
      items: [
        {
          title: 'Launch and Accelerate your Project',
          text: 'with the FXPO LaunchPad, VR EXPO, Marketplace & Connect System.',
        },
        {
          title: 'Invest in FXPO',
          text: 'Invest in FXPO Land Plots, Projects, Companies or other Assets through our LaunchPad.',
        },
        {
          title: 'Lease the FXPO Land Plot NFTs',
          text: 'Lease the FXPO Land Plot NFTsto Projects or Companies while you mine & stake the FXPO Coins.',
        },
        {
          title: 'Trade',
          text: 'Trade any Product, Service or Asset on our LaunchPad & Marketplace for the Crypto or Fiat currencies you prefer.',
        },
        {
          title: 'Earn rewards',
          text: 'Earn Rewards such as Platform & Creator Fee Participation through Pool Rewards, as well as Commissions and other Rewards such as Play & Learn & Share to Earn Rewards.',
        },
        {
          title: 'Share',
          text: 'Share any Product, Service or Asset listed on the FXPO LaunchPad & Marketplace to anyone with your unique FXPO Connect Affiliate Link to be rewarded and earn commissions.',
        },
        {
          title: 'purchase/order products',
          text: 'Purchase/Order Products, Services or Assets on our Marketplace,',
        },
        {
          title: 'Re-Invest',
          text: 'Re-) Invest your Earnings within or outside the FXPO Ecosystem,',
        },
        {
          title: 'Donate',
          text: 'Donate a Percentage of your earned Income / rewards into verified Non-Profit Projects through our LaunchPad.',
        },
      ],
    },
    {
      tab: 'For Projects and SMES',
      items: [
        {
          title: 'Launch and Accelerate your Project',
          text: 'With the FXPO LaunchPad, VR EXPO, Marketplace & Connect System',
        },
        {
          title: 'Trade',
          text: 'Trade any Product, Service or Asset on our LaunchPad & Marketplace for the Crypto or Fiat currencies you prefer',
        },
        {
          title: 'Lease the FXPO Land Plot NFTs',
          text: 'Lease the FXPO Land Plot NFTsto Projects or Companies while you mine & stake the FXPO Coins',
        },
        {
          title: 'Donate',
          text: 'Donate a Percentage of your earned Income / rewards into verified Non-Profit Projects through our LaunchPad',
        },
        {
          title: 'purchase/order products',
          text: 'Purchase/Order Products, Services or Assets on our Marketplace ',
        },
        {
          title: 'offer a Discount to buyers & investors',
          text: 'To make your product, service or asset more attractive and to incentivice anyone for referring your offer to another buyer or investor through our LaunchPad & Marketplace',
        },
        {
          title: 'Invest in FXPO',
          text: 'Purchase a FXPO Business Package to receive Business Space on the FXPO for your Project or Company & fully immersively present your products, services or assets to the world, or purchase / invest in other Assets, through our LaunchPad',
        },
        {
          title: 'Earn Income through Rewards',
          text: 'Product, Service or Asset Sale, Rewards such as Platform & Creator Fee Participation through Pool Rewards through holding the FXPO Business / Co-Creator Package, as well as Commissions and other Rewards such as Play & Learn to Earn',
        },
        {
          title: 'Re-Invest',
          text: 'Re-) Invest your Earnings within or outside the FXPO Ecosystem',
        },
      ],
    },
    {
      tab: 'For Established Companies',
      items: [
        {
          title: 'Accelerate your Project or Business',
          text: 'Accelerate your Project or Business with the FXPO LaunchPad, VR EXPO, Marketplace & Connect System and our offered Services.',
        },
        {
          title: 'Trade',
          text: 'Trade any Product, Service or Asset on our LaunchPad & Marketplace for the Crypto or Fiat currencies you prefer',
        },
        {
          title: 'Lease the FXPO Land Plot NFTs',
          text: 'Lease the FXPO Land Plot NFTsto Projects or Companies while you mine & stake the FXPO Coins',
        },
        {
          title: 'Donate',
          text: 'Donate a Percentage of your earned Income / rewards into verified Non-Profit Projects through our LaunchPad',
        },
        {
          title: 'purchase/order products',
          text: 'Purchase/Order Products, Services or Assets on our Marketplace',
        },
        {
          title: 'offer a Discount to buyers & investors',
          text: 'To make your product, service or asset more attractive and to incentivice anyone for referring your offer to another buyer or investor through our LaunchPad & Marketplace',
        },
        {
          title: 'Invest in FXPO',
          text: 'Purchase a FXPO Business Package to receive Business Space on the FXPO for your Project or Company & fully immersively present your products, services or assets to the world, or purchase / invest in other Assets, through our LaunchPad',
        },
        {
          title: 'Earn Income through Rewards',
          text: 'Product, Service or Asset Sale, Rewards such as Platform & Creator Fee Participation through Pool Rewards through holding the FXPO Business / Co-Creator Package, as well as Commissions and other Rewards such as Play & Learn to Earn',
        },
        {
          title: 'Re-Invest',
          text: 'Re-) Invest your Earnings within or outside the FXPO Ecosystem',
        },
      ],
    },
  ]);
};
