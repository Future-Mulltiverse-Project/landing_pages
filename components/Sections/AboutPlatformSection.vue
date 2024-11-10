<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col" :class="$style.textCol">
          <MainSectionHeader
            :class="$style.header"
            :title="`About <strong>FXPO Platform</strong>`"
          >
            <p>
              <strong>
                Our platform offers a digital & decentralized VR Exhibition, a
                LaunchPad Accelerator, and a Web2 Marketplace with a focus on
                immersive experiences and innovative financing options
              </strong>
            </p>
          </MainSectionHeader>
          <MainSectionTextContent :class="$style.text">
            <p>
              At the center of it all is our in-house Design Production Studio,
              offering tokenization and fundraising, branding, consulting and
              other services to help companies and projects smoothly onboard
              onto the platform and make their products and services immersively
              experienceable and financeable through the blockchain. In
              addition, our platform features its own hybrid Proof of Stake
              Blockchain and a hardware device, providing added security and
              accessibility for all users.
            </p>
          </MainSectionTextContent>
        </div>
        <div class="col" :class="$style.mediaCol">
          <div :class="$style.mediaWrapper">
            <MediaPicture :src="Img" :width="568" :height="320" />
          </div>
          <button type="button" :class="$style.btn">
            Explore the FXPO with our Promo Video!
            <ArrowIcon />
          </button>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Img from '~/assets/images/video-bg.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import ArrowIcon from '~/icons/ArrowIcon.vue';
</script>

<style lang="scss" module>
.section {
  background-color: $dark;
  color: #fff;
  @include padding(84px 0 76px);
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}

.row {
  --gutter-x: 0;
  @include rfs(64px, --gutter-y);

  @include media-breakpoint-up(lg) {
    flex-wrap: nowrap;
  }
}

.textCol {
  flex: 1 1 rem-calc($wrapper-inner-width - 616px);

  @include media-breakpoint-up(lg) {
    @include padding-right(20px);
  }
}

.mediaCol {
  flex: 1 1 rem-calc(616px);
}

.header {
  @include margin-bottom(30px);

  p {
    @include media-breakpoint-up(lg) {
      @include margin-right(90px);
    }
  }
}

.text {
  @include media-breakpoint-up(lg) {
    @include margin-right(50px);
  }
}

.mediaWrapper {
  @include padding(32px 25px 20px);
  background-color: #0a0d1d;
  border: 1px solid #232749;
}

.btn {
  @include font-size(18px);
  @include padding(17px 25px);
  background-color: transparent;
  align-items: center;
  border: 1px solid #232749;
  color: $primary;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  line-height: divide(30, 18);
  width: 100%;
  margin-top: -1px;
  transition: color 150ms ease-in-out;

  &:hover {
    color: $yellow-200;
  }
  svg {
    fill: #fff;
    height: rem-calc(20px);
    margin-left: rem-calc(16px);
    width: rem-calc(20px);
    transform: rotate(180deg);
  }
}
</style>
