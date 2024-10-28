<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="690" layout="fill" />
    <AppWrapper>
      <MainSectionHeader
        :title="`<strong class='text-5xl font-semibold'>Future MULTIVERSE <span style='color:white'>quest</span></strong>`"
        
      >
        <p class="pt-7">
          <strong  style="color: white !important;" class="text-2xl">
            Catalyzing the Destiny of the Future,<br/> creating the breakthrough to an inspiring,<br/> meaningful and abundant future for everyone.
          </strong>
        </p>
      </MainSectionHeader>
      <MainSectionTextContent >
        <p class="text-lg pt-10">
          Since the beginning of our known existence, humanity is on the quest of curiosity<br/>to discover the secrets of life and the universe / multiverse and to unleash our full <br/>potential.
        </p>
        <p class="text-lg pt-2">
          The Future Multiverse & the Future Trends Catalyst are a vortex channeling this <br/>collective curiosity acting as a catalyst to fast-track progress and groundbreaking <br/>development. It offers everyone the chance to actively participate in shaping our <br/>common destiny & future and to be rewarded for their efforts.
        </p>
        <p class="text-lg pt-2">
          We invite you to embark on the Future Multiverse Quest with us, to join our <br/>extraordinary expedition discovering the unknown, unleashing new realms of <br/>possibilities for humanity & building our future.
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
  @include padding(50px 0 50px);
  min-height: 10vh;
  display: flex;
  align-items: center;
  position: relative;
}

.header {
  @include margin-bottom(30px);
  max-width: rem-calc(600px);

  p:first-child {
    @include margin-top(28px);
  }
}

.text {
  max-width: rem-calc(500px);
}
</style>
