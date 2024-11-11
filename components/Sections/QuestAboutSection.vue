<template>
  <section :class="$style.section" class="pt-12 lg:pt-12">
    <MediaPicture :src="Bg" :width="1440" :height="690" layout="fill" />
    <AppWrapper>
      <MainSectionHeader
        :title="`<strong class='text-5xl font-semibold'>Future MULTIVERSE <span style='color:white'>quest</span></strong>`"
        
      >
        <p class="pt-7">
          <strong  style="color: white !important;" class="text-2xl">
            <span style="color: #CFB16D" >Catalyzing the Destiny of Humanity</span>,<br/> creating the breakthrough to an advanced,<br/> inspiring and meaningful future for everyone.
          </strong>
        </p>
      </MainSectionHeader>
      <MainSectionTextContent class="max-w-2xl">
        <p class="text-lg pt-10">
          Since the beginning of our known existence, humanity is on the quest of  discovering the secrets of life and the universe / multiverse and to unleash our  full potential.
        </p>
        <p class="text-lg pt-6">
          The Future Multiverse & Future Trends Catalyst are a vortex channeling this collective curiosity acting as a catalyst to fast-track progress and groundbreaking development. It offers everyone the chance to actively participate in shaping our common destiny & future and to be rewarded for their efforts / contributions.
        </p>
        <p class="text-lg pt-6 " >
          We invite you to join us on the Future Multiverse Quest, to join our extraordinary expedition discovering the unknown, unleashing new realms of possibilities for humanity to create our future.
        </p>
        <p class="text-lg pb-40 pt-4 md:pt-0 font-medium text-right " >
          Team Future Multiverse
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
  //padding: 50px  0 50px;
  min-height: 10vh;
  display: flex;
  align-items: center;
  position: relative;
}

.header {
  margin-bottom: 30px;
  max-width: rem-calc(600px);

  p:first-child {
    margin-top: 28px;
  }
}

.text {
  max-width: rem-calc(500px);
}
</style>
