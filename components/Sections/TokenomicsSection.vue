<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-12" :class="$style.leftCol">
          <MainSectionHeader
            :class="$style.header"
            :title="`<strong style='color:white'>FUTURE MULTIVERSE<br /></strong> <span style='color:#CFB16D'>TOKENOMICS</span>`"
          />
        </div>
        <!--div class="col-12 col-lg-7">
          <MainSectionTextContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            ali
          </MainSectionTextContent>
        </div-->
      </div>
    </AppWrapper>
    <div :class="$style.scheme">
      <MediaPicture :src="Img" :width="1070" :height="734" />
    </div>   
    <br />   
    <br />   
    <br />
      <div class="row">
      <div class="col-md-6">
          <NuxtLink class="btn btn-outline-primary" style="float: right;" to="https://future-multiverse.gitbook.io/guidebook">
            OPEN <span style="color:white; padding-left: 5px;">GUIDE</span>BOOK
          </NuxtLink>
      </div>
      <div class="col-md-6">
          <button class="btn btn-outline-primary" style="float: left;" type="button">
            OPEN <span style="color:white; padding-right: 5px;padding-left: 5px;">BLOCKCHAIN</span>BOOK
          </button>
      </div>
      </div>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Img from '~/assets/images/tokenomics.png';
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
