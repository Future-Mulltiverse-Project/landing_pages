import { ref } from 'vue';

export const useFooterNavItems = ref([
  {
    name: 'Main Pages',
    subitems: [
      {
        name: 'Home',
        to: { name: 'index' },
      },
      {
        name: 'FXPO',
        to: { name: 'fxpo' },
      },
      {
        name: 'Launch',
        to: { name: 'launch' },
      },
      {
        name: 'Quest',
        to: { name: 'quest' },
      },
      {
        name: 'Launchpad',
        to: { name: 'launchpad' },
      },
      {
        name: 'Marketplace',
        to: { name: 'marketplace' },
      },
      {
        name: 'Academy',
        to: { name: 'index' },
      },
      {
        name: 'Blockchain',
        to: { name: 'blockchain' },
      },
      {
        name: 'Guidebook',
        to: { name: 'guidebook' },
      },
      {
        name: 'News',
        to: { name: 'index' },
      },
      {
        name: 'Events',
        to: { name: 'index' },
      },
      {
        name: 'Official Updates',
        to: { name: 'index' },
      },
    ],
  },
  {
    name: 'FXPO Ecosystem',
    subitems: [
      {
        name: 'Overview',
        to: { name: 'index' },
      },
      {
        name: 'Vision, Mission & Quest',
        to: { name: 'index' },
      },
      {
        name: 'Metaverse & Architecture',
        to: { name: 'index' },
      },
      {
        name: 'LaunchPad & Marketplace',
        to: { name: 'index' },
      },
      {
        name: 'Tokenomics',
        to: { name: 'index' },
      },
      {
        name: 'Gamification',
        to: { name: 'index' },
      },
      {
        name: 'B2B2C System & Packages',
        to: { name: 'index' },
      },
      {
        name: 'Hybrid Blockchain',
        to: { name: 'index' },
      },
      {
        name: 'FXPO Coin',
        to: { name: 'index' },
      },
      {
        name: 'Connect',
        to: { name: 'index' },
      },
      {
        name: 'Opportunities for everyone',
        to: { name: 'index' },
      },
      {
        name: 'Roadmap & Team',
        to: { name: 'index' },
      },
    ],
  },
  {
    name: 'Resources & Knowledge',
    subitems: [
      {
        name: 'FXPO Whitepaper',
        to: { name: 'index' },
      },
      {
        name: 'FXPO LaunchPlan',
        to: { name: 'index' },
      },
      {
        name: 'FXPO PitchDeck',
        to: { name: 'index' },
      },
      {
        name: 'FXPO 3 Pager',
        to: { name: 'index' },
      },
      {
        name: 'FAQ',
        to: { name: 'index' },
      },
      {
        name: 'Q&A',
        to: { name: 'index' },
      },
      {
        name: 'How-To Tutorials',
        to: { name: 'index' },
      },
      {
        name: 'General Knowledge',
        to: { name: 'index' },
      },
      {
        name: 'Market Research & Trends',
        to: { name: 'index' },
      },
      {
        name: 'Compliance & Regulations',
        to: { name: 'index' },
      },
    ],
  },
]);
