<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="968" layout="fill" />
    <AppWrapper>
      <h2 :class="$style.title">
        The Breakthrough and Legacy we are able to create
      </h2>
      <h3 :class="$style.heading">
        A New World and a sustainable, meaningful and inspiring future for
        everyone and especially the next generations to come!
      </h3>
      <div :class="$style.btnText">
        Are you Ready? Join Us creating the future today!
      </div>
      <button type="button" class="btn btn-outline-primary" :class="$style.btn">
        Onboard now
      </button>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import Bg from '~/assets/images/prelaunch-bg.jpg';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  @include padding(145px 0 396px);
  background-color: #e3e2e5;
  color: $dark;
  text-align: center;
  position: relative;
}

.heading {
  @include font-size(28px);
  @include margin-bottom(42px);
  color: $primary;
  font-weight: 600;
  line-height: divide(35, 28);
  max-width: rem-calc(640px);
  margin-left: auto;
  margin-right: auto;
}

.title {
  @include font-size(45px);
  @include margin-bottom(42px);
  line-height: divide(55, 45);
  margin-left: auto;
  margin-right: auto;
  max-width: 26ch;
  text-transform: uppercase;
}

.btn {
  --btn-bg: rgba(255, 255, 255, 0.2);
  --btn-color: #0a0d1d;
  min-width: rem-calc(256px);
  max-width: 100%;
}

.timerTitle {
  @include font-size(18px);
  color: $primary;
  font-weight: 600;
  line-height: divide(30, 18);
  margin-bottom: rem-calc(2px);
}

.btnText {
  @include font-size(18px);
  line-height: divide(30, 18);
  max-width: rem-calc(240px);
  margin: 0 auto rem-calc(18px);
}

.timer {
  @include margin-bottom(22px);
  justify-content: center;
}
</style>
