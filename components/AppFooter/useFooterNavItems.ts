import { ref } from 'vue';

export const useFooterNavItems = ref([
  {
    name: 'INITIATIVE',
    subitems: [
      {
        name: 'Vision / Mission & Movement',
        //to: { name: 'index' },
        to: 'unset',
      },
      {
        name: 'Future Multiverse Engine',
        to: 'unset',
      },
      {
        name: 'Team & Purpose',
        to: 'unset',
      },
      {
        name: 'Partners',
        to: 'unset',
      },
      {
        name: 'GuideBook',
        to: 'unset',
      },
      {
        name: 'Support',
        to: 'unset',
      },
      {
        name: 'Contact Us',
        to: 'unset',
      },
    ],
  },
  {
    name: 'PLATFORM ECOSYSTEM',
    subitems: [
      {
        name: 'Future Multiverse',
        to: 'unset',
      },
      {
        name: 'Future EXPO',
        to: 'unset',
      },
      {
        name: 'LaunchPad / Accelerator',
        to: 'unset',
      },
      {
        name: 'FXPO Marketplace',
        to: 'unset',
      },
      {
        name: 'FXPO Blockchain',
        to: 'unset',
      },
      {
        name: 'NFTs & Packages',
        to: 'unset',
      },
      {
        name: 'Backoffice',
        to: 'unset',
      },
      {
        name: 'Grace AI & Guidebook',
        to: 'unset',
      },
    ],
  },
  {
    name: 'RESOURCES',
    subitems: [
      {
        name: 'Grace AI / Guidebook',
        to: 'unset',
      },
      {
        name: 'RoadMap',
        to: 'unset',
      },
      {
        name: 'News & Updates',
        to: 'unset',
      },
      {
        name: 'Events',
        to: 'unset',
      },
      {
        name: 'Q&A / FAQ',
        to: 'unset',
      },
      {
        name: 'Tutorials',
        to: 'unset',
      },
    ],
  },
  {
    name: 'GENERAL',
    subitems: [
      /*{
        name: 'Disclaimer',
        to: { name: 'index' },
      },*/
      {
        name: 'Compliance & Regulation',
        to: 'unset',
      },
      {
        name: 'Terms of Use & Disclaimer',
        to: { name: 'terms_of_use' },
      },
      {
        name: 'Privacy Policy',
        to: { name: 'privacy-policy' },
      },
      {
        name: 'Patent & Licence Agreements',
        to: 'unset',
      },
    ],
  },
]);
