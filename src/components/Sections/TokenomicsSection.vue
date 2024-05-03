<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-5" :class="$style.leftCol">
          <MainSectionHeader
            :class="$style.header"
            :title="`<strong>FXPO</strong> TOKENOMICS`"
          />
        </div>
        <div class="col-12 col-lg-7">
          <MainSectionTextContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            ali
          </MainSectionTextContent>
        </div>
      </div>
    </AppWrapper>
    <div :class="$style.scheme">
      <MediaPicture :src="Img" :width="1070" :height="734" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Img from '~/assets/images/tokenomics.svg';
</script>

<style lang="scss" module>
.section {
  @include padding(145px 0 130px);
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}

.row {
  @include padding-bottom(112px);
  --gutter-x: 0;
}

.leftCol {
  @include media-breakpoint-up(lg) {
    @include padding-right(50px);
  }
}

.header {
  @include margin-bottom(26px);
}

.scheme {
  margin: 0 auto;
  max-width: rem-calc(1070px);
  width: 100%;
}
</style>
