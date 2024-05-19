<template>
  <section :class="$style.section">
    <MediaPicture layout="fill" :src="Bg" :width="1440" :height="860" />
    <AppWrapper :class="$style.wrapper">
      <h1 :class="$style.title">
        <strong>Welcome To The</strong>
        <br />
        <span
          class="title_span"
          style="font-size: 122px; color: white; line-height: 1"
        >
          Future
        </span>
        <br />
        <span
          class="title_span"
          style="font-size: 78px; color: white; line-height: 1"
        >
          Multiverse
        </span>
      </h1>
      <button :class="$style.btn" class="btn btn-outline-primary" type="button">
        Explore
      </button>
    </AppWrapper>
    <!--div :class="$style.scroll">
      <ScrollIcon />
      Scroll & learn more
    </div-->
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import ScrollIcon from '~/icons/ScrollIcon.vue';
import Bg from '~/assets/images/home-intro.jpg';
</script>

<style lang="scss" module>
.section {
  @include padding-top(130px);
  //@include padding-top(66px);
  //min-height: rem-calc(860px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.wrapper {
  @include padding(66px 0);
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
}

.title {
  @include font-size(50px);
  @include margin-bottom(90px);
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  line-height: math-div(70, 50);
  max-width: em-calc(676, 50);

  > * {
    color: $primary;
  }
}

@media (max-width: 640px) {
  .title > span {
    font-size: 50px !important;
  }
}

.btn {
  --btn-bg: rgba(12, 15, 34, 0.2);
  --btn-color: #fff;
  max-width: 100%;
  min-width: rem-calc(256px);
}

.scroll {
  @include font-size(10px);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  margin-top: auto;

  svg {
    color: $primary;
    display: block;
    margin: 0 auto rem-calc(16px);
    width: rem-calc(20px);
    height: rem-calc(24px);
  }

  &:after {
    background: $yellow-200;
    content: '';
    display: block;
    height: rem-calc(100px);
    margin: rem-calc(22px) auto rem-calc(-50px);
    width: 3px;
  }
}
</style>
