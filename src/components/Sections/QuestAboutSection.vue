<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="690" layout="fill" />
    <AppWrapper>
      <MainSectionHeader
        :title="`<strong>Future MULTIVERSE <span style='color:white'>quest</span></strong>`"
        :class="$style.header"
      >
        <p>
          <strong  style="color: white !important;">
            Discovering the Multiverse of the Future, creating the breakthrough to an abundant, meaningful and inspiring future for everyone.
          </strong>
        </p>
      </MainSectionHeader>
      <MainSectionTextContent :class="$style.text">
        <p>
          Since the beginning of our known existence, humanity is on the quest of curiosity to discover the secrets of life and the universe / multiverse and to unleash our full potential.
        </p>
        <p>
          The Future Multiverse & the Future Trends Catalyst are a vortex channeling this collective curiosity acting as a catalyst to fast-track progress and groundbreaking development. It offers everyone the chance to actively participate in shaping our common destiny & future and to be rewarded for their efforts.
        </p>
        <p>
          We invite you to embark on the Future Multiverse Quest with us, to join our extraordinary expedition discovering the unknown, unleashing new realms of possibilities for humanity & building our future.
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
  min-height: 10vh;
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
