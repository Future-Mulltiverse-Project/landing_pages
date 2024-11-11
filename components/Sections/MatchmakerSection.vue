<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6">
          <MainSectionHeader
            :class="$style.header"
            :title="`<span style='color: white'>FXPO Matchmaker</span> <br />Swap items, goods or <br/> services with other Members.</strong>`"
          >
            <p>
              <strong style="color: white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </strong>
            </p>
          </MainSectionHeader>
          <NuxtLink to="/" class="btn btn-primary" :class="$style.btn" style="color:white">
            EXCHANGE YOUR GOODS
          </NuxtLink>
        </div>
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <div :class="$style.img">
            <MediaPicture :src="Img" :width="404" :height="466" />
          </div>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Img from '~/assets/images/swap.png';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  padding: 186px  0 210px;
  background: radial-gradient(1160px 420px at center 15%, #23274a, transparent);
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}

.row {

  --gutter-x: 0;
  align-items: center;
}

.leftCol {
  @include media-breakpoint-up(lg) {
    order: -1;
    padding-right: 64px;
  }
}

.header {
  margin-bottom: 34px;

  p {
    @include media-breakpoint-up(lg) {
      max-width: rem-calc(430px);
    }
  }

  p:first-child {
    margin-top: 38px;
  }
}

.img {
  max-width: rem-calc(404px);
  margin: 0 auto;
}

.btn {
  min-width: rem-calc(256px);
  max-width: 100%;
}
</style>
