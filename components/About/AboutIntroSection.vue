<template>
  <section :class="$style.section">
    <div :class="$style.imgWrapper">
      <MediaPicture
        :class="$style.img"
        :src="Img"
        :width="1440"
        :height="1095"
      />
      <div :class="$style.gradient" />
    </div>
    <AppWrapper :class="$style.wrapper">
      <h3 :class="$style.headline">The FXPO Team</h3>
      <h2 :class="$style.title">
        <strong>Expert Team of Creators</strong>
        We are building the Future
      </h2>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Img from '~/assets/images/team.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  padding-top: rem-calc(130px);
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.wrapper {
  //@include padding-top(26px);
  padding-top: 26px;
}

.imgWrapper {
  max-width: rem-calc(1440px);
  margin: 0 auto;
  order: 9999;
  position: relative;
  width: 100%;
}

.img {
  margin-top: wrap-calc(-340px, 1440px);
}

.headline {
  //@include font-size(28px);
  font-size: 28px;
  margin-bottom: 12px;
  //@include margin-bottom(12px);
  line-height: divide(30, 28);
  font-weight: 600;

  strong {
    color: $primary;
  }
}

.title {
  //@include font-size(50px);
  font-size: 50px;
  line-height: divide(70, 50);
  margin: 0 auto;
  max-width: rem-calc(900px);
  text-transform: uppercase;

  strong {
    color: $primary;
  }
}

.gradient {
  background: linear-gradient(
    to bottom,
    rgba(#0a0d1d, 0) 0%,
    rgba(#0a0d1d, 0) 90%,
    #0a0d1d 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
