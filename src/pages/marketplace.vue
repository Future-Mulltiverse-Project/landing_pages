<template>
  <MarketplaceLayout>
    <div>
    <div style=" background: url('_nuxt/assets/images/fxpo_marketplace_background_image.png'), #0A0D1D; background-repeat: no-repeat; background-size: contain;max-height: 80%;">
    <IntroSection
      :heading="`Welcome to the <strong>FXPO Marketplace</strong>`"
      :title="`<strong style='color:white'>Your ultimate gateway to enter</strong>
          <span style='color: #CFB16D;'>the world of Web3, blockchain, & the digital future.</span>`"
      :img="{
        url: Img,
        width: 2800,
        height: 2967,
      }"
      
    >
      <IntroSectionButtons>
        <div class="col-auto">
          <button class="btn btn-outline-white" type="button">
            Buying new assets
          </button>
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-primary" type="button">
            selling my assets
          </button>
        </div>
      </IntroSectionButtons>
    </IntroSection>
    <div style=" background: url('_nuxt/assets/images/accelerator_bg.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;">
    <AboutLaunchpadSection
      :title="`<span style='color: white;'>Future MULTIVERSE marketplace -</span><br/> <strong>Introducing you the digital platform of the future</strong>`"
      :heading="`<p><strong style='color:white;font-size:20px'>“Discover the limitless possibilities of the future, at the FXPO Marketplace. Where passions meet purpose and values create opportunities.”</strong></p>`"
      :items="items2"
    >
      <template #text>
        <p>
          FXPO VR Exhibition Marketplace is the ultimate gateway for businesses
          to enter the exciting and rapidly evolving world of Web3, blockchain,
          and the digital future. Our innovative, decentralized platform offers
          an unmatched opportunity for companies to showcase their products and
          services through interactive and immersive experiences, while
          providing the necessary resources to navigate this new technological
          landscape.
        </p>
        <p>
          With a focus on user experience, scalability, and security, FXPO is
          poised to revolutionize the intersection of technology and business.
          Whether you're an established enterprise or an up-and-coming startup,
          FXPO's exceptional value proposition is sure to enhance your overall
          efficiency and elevate your competitive edge in the market.
        </p>
        <p>
          Join us on this exciting journey and discover a new level of success
          in the era of Web3 and beyond.
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
      :title="`<span style='color: white'>trade your assets</span> <br /> <strong>WITH OUR Digital Marketplace</strong>`"
      :heading="`<p>
        The FXPO Marketplace is a diverse platform where companies can
        list their products, services, or assets, and buyers can explore,
        compare, and purchase these offerings directly. It's a platform
        built to support businesses in reaching out to a larger audience
        while providing buyers with numerous choices and purchase benefits.
      </p>`"
        style="
              background: radial-gradient(
              35% 10% at center bottom,
              #23274a,
              transparent
              );"
      :items="items2"
    >
      <p style="padding-top: 10px;font-size: 19px;font-weight: 100;">
        Our Marketplace structure offers easy access and onboarding, an
        immersive experience due to the direct VR bridge, trust & transparency,
        secure crypto & fiat payment gateways, special offers & discounts, and a
        connect referral system. Both sellers and buyers benefit from these
        features that simplify the buying process and provide a safe and
        transparent environment.
      </p>
    </GradientArticleSection>
    <ArticleSection
      :title="`<span style='color: white'>buy & invest</span><br /> <strong>in best assets <br />AT MARKETPLACE</strong>`"
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
        mollit anim i
      </p>
    </ArticleSection>
    <MatchmakerSection />
    <PrelaunchSection />
    <MarketplaceGuideBookSection />
    <JoinSection />
    </div>
    </div>
  </MarketplaceLayout>
</template>

<script lang="ts" setup>
import Img from '~/assets/images/fxpo_marketplace_screenshots.png';
import Bg from '~/assets/images/torus2.jpg';
import PrelaunchSection from '~/components/Sections/MarketplacePrelaunchSection.vue';
import JoinSection from '~/components/Join/JoinSection.vue';
import MarketplaceGuideBookSection from '~/components/Sections/MarketplaceGuideBookSection.vue';
import IntroSection from '~/components/Sections/IntroSection.vue';
import AboutLaunchpadSection from '~/components/Sections/AboutLaunchpadSection.vue';
import IconListItem from '~/components/IconList/IconListItem.vue';
import IconList from '~/components/IconList/IconList.vue';
import SignDocumentIcon from '~/icons/SignDocumentIcon.vue';
import ImmersiveExperienceIcon from '~/icons/ImmersiveExperienceIcon.vue';
import CryptocurrencyLaptopIcon from '~/icons/CryptocurrencyGlobalIcon.vue';
import LockBitcoinIcon from '~/icons/LockBitcoinIcon.vue';
import DiscountIcon from '~/icons/DiscountIcon.vue';
import GroupNetworkingIcon from '~/icons/GroupNetworkingIcon.vue';
import GradientArticleSection from '~/components/Sections/GradientArticleSection.vue';
import ArticleSection from '~/components/Sections/ArticleSection.vue';
import MatchmakerSection from '~/components/Sections/MatchmakerSection.vue';
import IntroSectionButtons from '~/components/Sections/IntroSectionButtons.vue';
import MarketplaceLayout from '~/components/Layouts/MarketplaceLayout.vue';

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
    text: 'Provide Transparency & Trust for Investors to accelerate your funding',
  },
  {
    icon: 'CryptocurrencyLaptopIcon',
    title_white_1: 'Trust & Transparency',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    icon: 'LockBitcoinIcon',
    title_white_1: 'Secure Crypto & Fiat Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    icon: 'DiscountIcon',
    title_white_1: 'Special Offers & Discounts',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    icon: 'GroupNetworkingIcon',
    title_white_1: 'Connect Referral System',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
];

const items2 = [
  {
    title: 'Product / Service / Asset Highlights:',
    text: "Sellers can highlight key features of their offerings, while buyers gain a quick understanding of what's being offered and its key benefits.",
  },
  {
    title: 'Product / Service / Asset Details:',
    text: 'Sellers can list comprehensive details about their offerings, providing buyers with all the information needed to make informed purchasing decisions.',
  },
  {
    title: 'Documents to Download',
    text: 'Projects can provide essential documents for prospective buyers. Buyers can get all the information they need about a product, service or digital asset in one place, aiding their decision-making process.',
  },
  {
    title: 'Project / Company Tier Status:',
    text: 'A standard grading system allows buyers to easily evaluate the status of the sellers, while giving sellers a benchmark to aim for.',
  },
  {
    title: 'Project / Product / Service / Asset / Pricing:',
    text: 'Sellers can list various product/service/asset packages and prices, while buyers can choose the most suitable package that aligns with their needs and budget.',
  },
  {
    title: 'Project / Company / Product / Service / Asset News:',
    text: 'Regular project / company / product / service / asset updates can be shared, keeping potential investors / buyers informed and engaged.',
  },
];

const items3 = [
  {
    title_white_1: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
  {
    title_white_1: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
  {
    title_white_1: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
  {
    title_white_1: 'Benefit or feature',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
  },
];
</script>

<style lang="scss" module>
.media {
  opacity: 0.4;
}

</style>
