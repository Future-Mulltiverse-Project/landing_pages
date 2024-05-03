<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="690" layout="fill" />
    <AppWrapper :class="$style.wrapper">
      <div :class="$style.heading">FXPO Quest</div>
      <h2 :class="$style.title">
        <strong>Discovering the Secrets</strong>
        of the Universe
      </h2>
      <MainSectionTextContent :class="$style.text">
        <p>
          "If you want to find the secrets of the Universe, think in terms of
          energy, frequencies and vibration."
          <br />
          Nikola Tesla
        </p>
      </MainSectionTextContent>
      <NuxtLink to="/" class="btn btn-outline-primary" :class="$style.btn">
        onboard now
      </NuxtLink>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Bg from 'assets/images/quest-intro-bg.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  min-height: 100vh;
  padding-top: rem-calc(130px);
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
}

.wrapper {
  @include padding(120px 0);
}

.header {
  @include margin-bottom(40px);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(740px);

  p:first-child {
    @include margin-top(28px);
  }
}

.heading {
  @include font-size(28px);
  @include margin-bottom(15px);
  line-height: divide(30, 28);
}

.title {
  @include font-size(50px);
  @include margin-bottom(25px);
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(720px);
  text-transform: uppercase;

  > * {
    color: $primary;
  }
}

.text {
  margin: 0 auto rem-calc(40px);
  max-width: rem-calc(400px);
  text-align: center;

  p {
    line-height: divide(30, 16);
  }
}

.btn {
  --btn-bg: rgba(12, 15, 34, 0.2);
  max-width: 100%;
  min-width: rem-calc(226px);
}
</style>
