<template>
  <MarketplaceLayout >
    <div>
    <div style=" background: url('_nuxt/assets/images/fxpo_marketplace_background_image.png'), #0A0D1D; background-repeat: no-repeat; background-size: contain;max-height: 80%;">
    <IntroSection
      :heading="`Welcome to the <strong>FXPO LaunchPad!</strong>`"
      :title="`<strong>Your State of the Art Platform</strong>
          to CATALYSE PROJECT FUNDING <br />OR INVEST IN ASSETS`"
      :img="{
        url: Img,
        width: 2880,
        height: 2986,
      }"
    >
      <IntroSectionButtons>
        <div class="col-auto">
          <button class="btn btn-outline-white" type="button">
            INVESTING IN ASSETS
          </button>
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-primary" type="button">
            RECEIVING FUNDING
          </button>
        </div>
      </IntroSectionButtons>
    </IntroSection>
    <div style=" background: url('_nuxt/assets/images/accelerator_bg.png'), #000000; background-repeat: no-repeat; background-size: cover;">
    <AboutLaunchpadSection
      :title="`<span style='font-size:40px'><span style='color:white; '>Future trends Catalyst LaunchPad -</span><br />
              Introducing you the<br /> digital platform <br />of the future</span>`"
      :heading="`<p style='color:white !important;'>“The future is not limited by space or time but only by our
        courage. Anything you can imagine can be built. And everything
        that can be built, can be funded.“</p>`"
        style="
              background: radial-gradient(
              90% 80% at center top,
              #0B0F20,
              transparent
              );"
    >
      <template #text>
        <p>
          Introducing the FXPO LaunchPad, a one-of-a-kind digital platform
          designed to revolutionize the way pioneering projects and companies
          transition into the market of tomorrow and the ever-evolving internet
          landscape. With FXPO LaunchPad, businesses and asset owners have the
          unparalleled opportunity to harness the power of tokenization on the
          FXPO Blockchain, opening doors to secure funding from investors.
        </p>
        <p>
          Not only does our platform provide access to essential resources such
          as design, branding, marketing, and consulting services, but it also
          enables users to bring their products, services, and assets to life on
          the FXPO Marketplace. This immersive environment facilitates seamless
          experiences and fosters trade, ensuring that every visionary idea has
          the potential to flourish.
        </p>
        <p>
          Embark on a journey with the FXPO LaunchPad, where limitless
          innovation and growth await. Unleash the full potential of your
          business, and forge a path towards a brighter, more prosperous future.
        </p>
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
    <GradientArticleSection
      :title="`LAUNCHPAD <span style='color: white;'> <br />for Companies & Projects</span>`"
      :heading="`<p>
        The FXPO LaunchPad serves as a dynamic platform bridging
        innovative projects with potential investors. It offers a
        streamlined and immersive platform for projects to showcase their
        potential, roadmaps, and investment packages, and for investors to
        discover, understand and invest in projects they believe in.
      </p>`"
      :items="items2"
    >
      <p>
        Experience seamless onboarding, an immersive VR exploration of projects,
        secure crypto and fiat payment options, exclusive offers and a rewarding
        referral system. We've created an environment that benefits both project
        creators and investors through transparency, simplicity, and engagement.
      </p>
    </GradientArticleSection>
    <ArticleSection
      :title="`LAUNCHPAD <br /><span style='color: white;'>FOR INVESTORS </span><strong>TITLE HERE</strong>`"
      :heading="`<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis
      </p>`"
      :items="items3"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim i11
      </p>
    </ArticleSection>
    <LaunchPadPrelaunchSection />
    <LaunchPadGuideBookSection />
    <JoinSection />
    </div>
    </div>
  </MarketplaceLayout>
</template>

<script lang="ts" setup>
import MarketplaceLayout from '~/components/Layouts/MarketplaceLayout.vue';
import IntroSection from '~/components/Sections/IntroSection.vue';
import LaunchPadGuideBookSection from '~/components/Sections/LaunchPadGuideBookSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import LaunchPadPrelaunchSection from '~/components/Sections/LaunchPadPrelaunchSection.vue';
import AboutLaunchpadSection from '~/components/Sections/AboutLaunchpadSection.vue';
import GradientArticleSection from '~/components/Sections/GradientArticleSection.vue';
import ArticleSection from '~/components/Sections/ArticleSection.vue';
import Img from '~/assets/images/fxpo_launchpad_screens.png';
import SignDocumentIcon from '~/icons/SignDocumentIcon.vue';
import ImmersiveExperienceIcon from '~/icons/ImmersiveExperienceIcon.vue';
import CryptocurrencyLaptopIcon from '~/icons/CryptocurrencyGlobalIcon.vue';
import LockBitcoinIcon from '~/icons/LockBitcoinIcon.vue';
import DiscountIcon from '~/icons/DiscountIcon.vue';
import GroupNetworkingIcon from '~/icons/GroupNetworkingIcon.vue';
import IconListItem from '~/components/IconList/IconListItem.vue';
import IconList from '~/components/IconList/IconList.vue';
import IntroSectionButtons from '~/components/Sections/IntroSectionButtons.vue';

const icons = {
  SignDocumentIcon,
  ImmersiveExperienceIcon,
  CryptocurrencyLaptopIcon,
  LockBitcoinIcon,
  DiscountIcon,
  GroupNetworkingIcon,
};

const items = [
  {
    icon: 'SignDocumentIcon',
    title_white_1: 'Simple Access & Onboarding',
    text: 'Onboarding, Compliance, Listing, Tier Status, thus Transparency and Trust for projects and investors',
  },
  {
    icon: 'ImmersiveExperienceIcon',
    title_white_1: 'Immersive Experience',
    text_grey: 'Provide Transparency & Trust for Investors to accelerate your funding',
  },
  {
    icon: 'CryptocurrencyLaptopIcon',
    title_white_1: 'Trust & Transparency',
    text_grey: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    icon: 'LockBitcoinIcon',
    title_white_1: 'Secure Crypto & Fiat Payment Gateways',
    text_grey: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    icon: 'DiscountIcon',
    title_white_1: 'Special Offers & Discounts',
    text_grey: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    icon: 'GroupNetworkingIcon',
    title_white_1: 'Connect Referral System',
    text_grey: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
];

const items2 = [
  {
    title: 'Fundraising / Investment Highlights',
    text: "Projects can highlight their key selling points, while investors gain a quick understanding of the project's potential and value proposition.",
  },
  {
    title: 'Fundraising / Investment Details',
    text: 'Projects can provide a detailed view of their vision, objectives, and financial strategies, enabling investors to gain a deep understanding and make informed investment decisions.',
  },
  {
    title: 'Documents to Download',
    text: 'Projects can upload critical documents for potential investors to peruse. Investors have access to all they need to know in one location, aiding their decision-making process.',
  },
  {
    title: 'Project Tier Status',
    text: 'A standardized status grading for listed projects allows for easy comparison and evaluation for investors, while giving projects a benchmark to aim for.',
  },
  {
    title: 'Project Packages / Investment Options',
    text: 'Projects can list various investment packages and options, while investors can choose the most suitable package that aligns with their investment strategy.',
  },
  {
    title: 'Project RoadMap & Team',
    text: "Projects can showcase their future plans and the team behind the project. For investors, it's an opportunity to assess the project's direction and the team's capabilities.",
  },
  {
    title: 'Project News',
    text: 'Regular project updates can be shared, keeping investors informed and engaged.',
  },
];

const items3 = [
  {
    title: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
  {
    title: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
  {
    title: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
  {
    title: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
];
</script>

<style lang="scss" module></style>
