<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="690" layout="fill" />
    <AppWrapper>
      <MainSectionHeader
        :title="`<strong>FXPO Quest</strong>`"
        :class="$style.header"
      >
        <p>
          <strong>
            Discovering the Secrets of the Universe, creating the breakthrough
            to a sustainable, meaningful and inspiring future for everyone.
          </strong>
        </p>
      </MainSectionHeader>
      <MainSectionTextContent :class="$style.text">
        <p>
          Since the beginning of our known existence, humanity is on the quest
          curiosity discover the secrets of life and the universe and to unleash
          our full potential.
        </p>
        <p>
          FXPO is a vortex channeling this collective curiosity acting as a
          catalyst to fast-track progress and sustainable development. It offers
          everyone the chance to actively participate in shaping our common
          destiny & future and to be rewarded for their efforts.
        </p>
        <p>
          We invite you to embark on the FXPO Quest with us, join our
          extraordinary expedition discovering the unknown, and building the
          future.
        </p>
      </MainSectionTextContent>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Bg from 'assets/images/quest-about-bg.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  @include padding(120px 0);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.header {
  @include margin-bottom(30px);
  max-width: rem-calc(500px);

  p:first-child {
    @include margin-top(28px);
  }
}

.text {
  max-width: rem-calc(500px);
}
</style>
