<template>
  <article :class="$style.article">
    <div class="row" :class="$style.row">
      <div class="col-12 col-lg-6" :class="$style.leftCol">
        <h3 :class="$style.title">
          FXPO
          <br />
          The FutureX EXPO & Blockchain Coin
          <br />
          <span>(it's simple: 1m3 = 1 FXPO Coin)</span>
        </h3>
        <TextContent :class="$style.text">
          Every FutureX EXPO Business Space Cube has 1 FXPO Coin stored within
          it as an "in-ground asset", that can be unleashed through staking the
          FXPO Business Space NFT in the FXPO Blockchain Vault.
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
          <MediaPicture
            src="/images/space-coins-2w.jpg"
            :width="822"
            :height="546"
          />
          <div :class="$style.figText">
            <span>You can Mine It,</span>
            <br />
            Stake It & Trade It
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import BtnCol from '~/components/Btn/BtnCol.vue';
import BtnRow from '~/components/Btn/BtnRow.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import TextContent from '~/components/utilities/TextContent.vue';
import ConnectWalletBtn from '~/components/Wallet/ConnectWalletBtn.vue';
</script>

<style lang="scss" module>
.article {
  position: relative;
}

.row {
  --gutter-x: 0;
}

.leftCol {
  position: relative;
  text-align: center;
  z-index: 1;

  @include media-breakpoint-up(lg) {
    padding-right: wrap-calc(108px);
    text-align: left;
  }
}

.title {
  @include font-size(26px);
  line-height: math-div(30, 26);
  margin-bottom: rem-calc(26px);

  span {
    color: $primary;
  }
}

.text {
  margin-bottom: rem-calc(54px);
}

.rightCol {
  align-items: flex-start;
  display: flex;
  justify-content: center;
}

.fig {
  flex-shrink: 0;
  margin-bottom: wrap-calc(-36px, math-div($wrapper-inner-width, 2));
  margin-right: wrap-calc(-32px, math-div($wrapper-inner-width, 2));
  max-width: rem-calc(822px);
  position: relative;
  width: wrap-calc(822px, math-div($wrapper-inner-width, 2));

  @include media-breakpoint-up(lg) {
    margin-top: wrap-calc(-140px, math-div($wrapper-inner-width, 2));
  }
}

.figText {
  @include font-size(18px);
  bottom: 0;
  margin-bottom: wrap-calc(80px, 822px);
  line-height: math-div(24, 18);
  position: absolute;
  right: wrap-calc(128px, 822px);
  text-align: right;

  span {
    color: $primary;
  }
}
</style>
