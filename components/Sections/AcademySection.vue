<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-5" :class="$style.leftCol">
          <MainSectionHeader
            :class="$style.header"
            :title="`<strong>THE FXPO</strong> Academy`"
          >
            <p>
              At FXPO, we are driven by a passion to create the breakthrough to
              a new world, where businesses thrive and people flourish
            </p>
          </MainSectionHeader>
        </div>
        <div class="col-12 col-lg-7" :class="$style.rightCol">
          <MainSectionTextContent :class="$style.text">
            <p>
              Our decentralized platform is not just about innovation,
              sustainability and cutting-edge technology, but is also a catalyst
              for change, creating a future that is compelling, meaningful and
              inspiring for everyone. We can create a world where everyone has
              the opportunity to grow, progress and succeed through creating
              more value for others. We invite you to join us on this epic
              journey and co-create a future with us, where possibilities and
              opportunities are limitless. Together, we hold the power to shape
              the world of tomorrow, and to leave a lasting legacy for
              generations to come.
            </p>
          </MainSectionTextContent>
          <p :class="$style.text2">
            <strong>Let's build the future together! It's in our hands.</strong>
            Team FXPO
          </p>
        </div>
      </div>
      <div :class="$style.mediaHolder">
        <div :class="$style.media">
          <MediaPicture :src="Img" :width="1169" :height="910" />
        </div>
      </div>
      <div :class="$style.btnContainer">
        <NuxtLink to="/" class="btn btn-outline-gradient-primary">
          Explore FXPO Academy
        </NuxtLink>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import Img from '~/assets/images/academy.jpg';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  @include padding(125px 0 0);
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}

.header {
  h2 {
    margin-left: auto;
    margin-right: auto;
    max-width: rem-calc(400px);

    @include media-breakpoint-up(lg) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  p {
    margin-left: auto;
    margin-right: auto;
    max-width: rem-calc(432px);

    @include media-breakpoint-up(lg) {
      margin-left: 0;
      margin-right: 0;
    }
  }
}

.row {
  @include rfs(26px, --gutter-y);
  --gutter-x: 0;
  position: relative;
  z-index: 1;
}

.leftCol {
  @include media-breakpoint-up(lg) {
    @include padding-right(70px);
  }
}

.rightCol {
  @include media-breakpoint-up(lg) {
    @include padding-left(10px);
  }
}

.text {
  margin-top: em-calc(8, 16);
  @include margin-bottom(48px);
}

.text2 {
  @include font-size(22px);
  line-height: divide(30, 22);
  margin-bottom: 0;
  max-width: 22ch;
  margin-left: auto;
  text-align: right;

  > strong {
    font-weight: inherit;
    color: $primary;
  }
}

.mediaHolder {
  @include margin-bottom(40px);
  padding-bottom: 47.863%;
  position: relative;
}

.media {
  position: absolute;
  top: 44.6%;
  left: 48.5%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.btnContainer {
  position: relative;
  text-align: center;

  :global(.btn) {
    min-width: rem-calc(242px);
    max-width: 100%;
  }
}
</style>
