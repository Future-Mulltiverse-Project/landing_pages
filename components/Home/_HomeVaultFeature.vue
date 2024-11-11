<template>
  <MainSection
    angle-left-top
    has-gradient
    has-bg-behind
    :class="$style.section"
  >
    <AppWrapper :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <SectionHeader :class="$style.header">
            <template #title>
              FXPO
              <br />
              <span>Blockchain Vault</span>
            </template>
          </SectionHeader>
          <TextContent :class="$style.text">
            While you can lease your FXPO Business Space to a project / company
            or asset owner for their advertising / marketing purposes, for a
            monthly rent, you can place your FXPO business Space Cube NFT into
            your FXPO Vault, to first ''mine'' the FXPO Coins stored as
            ''in-ground'' assets within your FXPO Business Space cubes, and when
            you collected them in your wallet, you can stake the FXPO Coins to
            earn Gas-Fees from all Transactions of all Smart-Contracts trading
            on the FutureX Blockchain.
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
              src="/images/blockchain-vault.png"
              :width="425"
              :height="523"
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
.section {
  --sectionGradient: linear-gradient(
    -173deg,
    #212646 var(--angleHeight),
    transparent calc(var(--angleHeight) * 3)
  );
}

.wrapper {
  padding: 135px  0 110px;
}

.row {
  --gutter-x: 0;
  --gutter-y: #{rem-calc(62px)};
}

.leftCol {
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
    padding-left: wrap-calc(70px);
  }
}

.rightCol {
  @include media-breakpoint-up(lg) {
    order: -1;
  }
}

.fig {
  margin-left: wrap-calc(10px, math-div($wrapper-inner-width, 2));
  margin-top: wrap-calc(10px, math-div($wrapper-inner-width, 2));
  position: relative;
  width: wrap-calc(426px, math-div($wrapper-inner-width, 2));

  @media (max-width: 1023px) {
    margin: 0 auto;
    max-width: rem-calc(426px);
  }
}

//.blur {
//  width: wrap-calc(442px, 426px);
//  border-radius: 50%;
//  position: absolute;
//  top: 0;
//  margin-top: wrap-calc(78px, 426px);
//  left: wrap-calc(30px, 426px);
//  opacity: 0.4;
//  filter: blur(120px);
//  background: $primary;
//
//  &:before {
//    padding-bottom: 72.171%;
//    display: block;
//    content: "";
//  }
//}

.blur {
  width: 180%;
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(rgba($primary, 0.2), rgba($primary, 0) 70%);
  top: 30%;
  margin-top: wrap-calc(78px, 426px);
  left: 50%;
  transform: translate(-50%, -50%);

  &:before {
    padding-bottom: 80%;
    display: block;
    content: '';
  }
}

.header {
  margin-bottom: rem-calc(36px);
}

.text {
  margin-bottom: rem-calc(46px);

  @include media-breakpoint-up(lg) {
    width: 92%;
  }
}
</style>
