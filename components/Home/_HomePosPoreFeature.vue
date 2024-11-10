<template>
  <MainSection>
    <AppWrapper :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <SectionHeader :class="$style.header">
            <template #title>
              FXPO
              <span>POS/PORE Blockchain</span>
            </template>
          </SectionHeader>
          <TextContent :class="$style.text">
            The FutureX Blockchain is a Layer One Proof of Stake (POS) / Proof
            of Authority (POA) and Proof of Renewable Energy (PORE) Protocol,
            that protocols and authorizes all transactions of all SmartContracts
            listed and trading on the FutureX Blockchain and in the FutureX
            EXPO, as well as their renewable energy source.
          </TextContent>
          <BtnRow>
            <BtnCol>
              <nuxt-link
                :to="{ name: 'index' }"
                class="btn btn-outline-white btn-sm"
              >
                View scheme
              </nuxt-link>
            </BtnCol>
            <BtnCol>
              <nuxt-link
                :to="{ name: 'index' }"
                class="btn btn-sm btn-outline-primary"
              >
                Read more
              </nuxt-link>
            </BtnCol>
          </BtnRow>
        </div>
        <div class="col-12 col-lg-6">
          <div :class="$style.fig">
            <MediaPicture
              src="/images/pos_pore-blockchain.jpg"
              :width="610"
              :height="431"
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
</script>

<style lang="scss" module>
.wrapper {
  padding-bottom: wrap-calc(175px);

  @media (min-width: $wrapper-width) {
    padding-bottom: rem-calc(175px);
  }
}

.row {
  --gutter-x: 0;
  --gutter-y: #{rem-calc(62px)};
}

.leftCol {
  text-align: center;

  @include media-breakpoint-up(lg) {
    padding-top: wrap-calc(18px);
    padding-right: wrap-calc(130px);
    text-align: left;
  }
}

.fig {
  margin: 0 auto;
  max-width: rem-calc(610px);
  width: 100%;

  @include media-breakpoint-up(lg) {
    margin-left: wrap-calc(-18px, math-div($wrapper-inner-width, 2));
    margin-right: 0;
    width: wrap-calc(610px, math-div($wrapper-inner-width, 2));
  }
}

.img {
  width: 100%;
}

.header {
  margin-bottom: rem-calc(36px);
}

.text {
  margin-bottom: rem-calc(36px);
}
</style>
