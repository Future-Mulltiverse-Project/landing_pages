<template>
  <MainSection>
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <SectionHeader :class="$style.header">
            <template #title>FXPO Coins</template>
          </SectionHeader>
          <TextContent :class="$style.text">
            The FutureX Blockchain based Coin, FXPO, can first be mined out of
            the FutureX EXPO Business Space using the FutureX Blockchain Staking
            Mechanism, and when mined/staked, it can be staked to earn Gas Fees
            from all transactions of all FutureX EXPO MetaVerse Smart Contracts
            trading on the FutureX Blockchain, used for Voting or can be traded
            within the FutureX EXPO and on other different Exchange Platforms
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
              <ConnectWalletBtn class-mod="btn-outline-white" class="btn-sm" />
            </BtnCol>
          </BtnRow>
        </div>
        <div class="col-12 col-lg-6" :class="$style.rightCol">
          <div :class="$style.fig">
            <div :class="$style.blur" />
            <MediaPicture
              src="/images/tokens-min.png"
              :width="1050"
              :height="1152"
            />
          </div>
        </div>
      </div>
    </AppWrapper>
  </MainSection>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import BtnCol from '~/components/Btn/BtnCol.vue';
import BtnRow from '~/components/Btn/BtnRow.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import MainSection from '~/components/Section/MainSection.vue';
import SectionHeader from '~/components/utilities/SectionHeader.vue';
import TextContent from '~/components/utilities/TextContent.vue';
import ConnectWalletBtn from '~/components/Wallet/ConnectWalletBtn.vue';
</script>

<style lang="scss" module>
.row {
  --gutter-x: 0;
  --gutter-y: #{rem-calc(62px)};
}

.leftCol {
  position: relative;
  text-align: center;
  z-index: 1;

  @include media-breakpoint-up(lg) {
    padding-left: wrap-calc(66px);
    padding-top: rem-calc(30px);
    text-align: left;
  }
}

.rightCol {
  @include media-breakpoint-up(lg) {
    order: -1;
  }
}

.fig {
  margin-left: wrap-calc(-23px, math-div($wrapper-inner-width, 2));
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
  background: radial-gradient(rgba($primary, 0.18), rgba($primary, 0) 70%);
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

.header {
  margin-bottom: rem-calc(30px);
}

.text {
  margin-bottom: rem-calc(62px);
}
</style>
