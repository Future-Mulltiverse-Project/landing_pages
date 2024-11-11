<template>
  <MainSection angle-bottom has-bg-behind>
    <AppWrapper :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <SectionHeader :class="$style.header2">
            <template #title>
              FXTE
              <span>Token</span>
            </template>
          </SectionHeader>
          <TextContent :class="$style.text">
            The FutureX Token (FXTE) is an Ethereum Blockchain based ERC20
            SmartContract with the exclusive functionality for the early bird
            FutureX Community, to mint the FutureX EXPO Packages that include
            the FutureX MetaVerse Avatar and Business Space, as well as the
            Staking, Agency (Affiliate) and Corporate Licences. Through the
            Launch and Mint of the FutureX EXPO MetaVerse the FutureX Token
            (FXTE) is being burnt in the process.
          </TextContent>
          <BtnRow>
            <BtnCol>
              <nuxt-link
                :to="{ name: 'index' }"
                class="btn btn-sm btn-outline-primary"
              >
                Read more
              </nuxt-link>
            </BtnCol>
            <BtnCol>
              <ConnectWalletBtn class-mod="btn-outline-white btn-sm" />
            </BtnCol>
          </BtnRow>
        </div>
        <div class="col-12 col-lg-6" :class="$style.rightCol">
          <div :class="$style.fig">
            <div :class="$style.blur" />
            <MediaPicture
              src="/images/tokens.png"
              :width="1050"
              :height="1152"
            />
          </div>
        </div>
      </div>
    </AppWrapper>
  </MainSection>
</template>

<script>
import BtnCol from '../Btn/BtnCol';
import BtnRow from '../Btn/BtnRow';
import MediaPicture from '../Media/MediaPicture';
import SectionHeader from '../utilities/SectionHeader';
import TextContent from '../utilities/TextContent';
import ConnectWalletBtn from '../Wallet/ConnectWalletBtn';
import MainSection from '~/components/Section/MainSection';
import AppWrapper from '~/components/AppWrapper/AppWrapper';

export default {
  components: {
    AppWrapper,
    MainSection,
    MediaPicture,
    ConnectWalletBtn,
    BtnCol,
    BtnRow,
    TextContent,
    SectionHeader,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  padding-top: 75px;
  padding-bottom: rem-calc(54px);
}

.row {
  --gutter-x: 0;
  --gutter-y: #{rem-calc(62px)};
}

.fig {
  margin-right: wrap-calc(-23px, math-div($wrapper-inner-width, 2));
  position: relative;
  width: wrap-calc(525px, math-div($wrapper-inner-width, 2));

  @media (max-width: 1023px) {
    margin: 0 auto;
    max-width: rem-calc(525px);
  }
}

.blur {
  width: 140%;
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(rgba($primary, 0.2), rgba($primary, 0) 70%);
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:before {
    padding-bottom: 80%;
    display: block;
    content: '';
  }
}

//.blur {
//  width: wrap-calc(337px, 525px);
//  border-radius: 50%;
//  position: absolute;
//  top: 0;
//  margin-top: wrap-calc(86px, 525px);
//  left: wrap-calc(66px, 525px);
//  opacity: 0.53;
//  filter: blur(120px);
//  background: $primary;
//
//  &:before {
//    padding-bottom: 59.347%;
//    display: block;
//    content: "";
//  }
//}

.header2 {
  margin-bottom: rem-calc(30px);
}

.text {
  margin-bottom: rem-calc(38px);
}

.leftCol {
  position: relative;
  z-index: 1;
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
    padding-right: wrap-calc(54px);
    padding-top: rem-calc(60px);
    padding-bottom: rem-calc(12px);
  }
  //padding-bottom: rem-calc(50px);

  //@include media-breakpoint-between(lg) {
  //  text-align: center;
  //}
}

.rightCol {
  display: flex;
  justify-content: center;
}
</style>
