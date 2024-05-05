import { ref } from 'vue';

export const useFooterNavItems = ref([
  {
    name: 'INITIATIVE',
    subitems: [
      {
        name: 'Vision / Mission & Movement',
        to: { name: 'index' },
      },
      {
        name: 'Future Multiverse Engine',
        to: { name: 'fxpo' },
      },
      {
        name: 'Team & Purpose',
        to: { name: 'launch' },
      },
      {
        name: 'Partners',
        to: { name: 'quest' },
      },
      {
        name: 'GuideBook',
        to: { name: 'launchpad' },
      },
      {
        name: 'Support',
        to: { name: 'marketplace' },
      },
      {
        name: 'Contact Us',
        to: { name: 'index' },
      },
    ],
  },
  {
    name: 'PLATFORM ECOSYSTEM',
    subitems: [
      {
        name: 'Future Multiverse',
        to: { name: 'index' },
      },
      {
        name: 'Future EXPO',
        to: { name: 'index' },
      },
      {
        name: 'LaunchPad / Accelerator',
        to: { name: 'index' },
      },
      {
        name: 'FXPO Marketplace',
        to: { name: 'index' },
      },
      {
        name: 'FXPO Blockchain',
        to: { name: 'index' },
      },
      {
        name: 'NFTs & Packages',
        to: { name: 'index' },
      },
      {
        name: 'Backoffice',
        to: { name: 'index' },
      },
      {
        name: 'Grace AI & Guidebook',
        to: { name: 'index' },
      },
    ],
  },
  {
    name: 'RESOURCES',
    subitems: [
      {
        name: 'Grace AI / Guidebook',
        to: { name: 'index' },
      },
      {
        name: 'RoadMap',
        to: { name: 'index' },
      },
      {
        name: 'News & Updates',
        to: { name: 'index' },
      },
      {
        name: 'Events',
        to: { name: 'index' },
      },
      {
        name: 'Q&A / FAQ',
        to: { name: 'index' },
      },
      {
        name: 'Tutorials',
        to: { name: 'index' },
      },
    ],
  },
  {
    name: 'GENERAL',
    subitems: [
      {
        name: 'Terms of Use & Service',
        to: { name: 'index' },
      },
      {
        name: 'Disclaimer',
        to: { name: 'index' },
      },
      {
        name: 'Compliance & Regulation',
        to: { name: 'index' },
      },
      {
        name: 'Privacy Policy',
        to: { name: 'index' },
      },
      {
        name: 'Patent & Licence Agreements',
        to: { name: 'index' },
      },
    ],
  },
]);
