<template>
  <MainSection angle-bottom has-bg-behind>
    <AppWrapper :class="$style.wrapper">
      <SectionHeader :class="$style.header">
        <template #title>
          Get your own Business Space
          <span>at FutureX EXPO</span>
        </template>
        <TextContent :class="$style.text">
          The FutureX EXPO Business Space can be utilized to present and sell
          innovative products and services through an immersive experience,
          leased to projects, companies and asset owners, while mined/staked on
          the FutureX Blockchain, as each cubic meter (m3) of economic space
          contains 1 FutureX Blockchain Coin (FXPO), or traded on different NFT
          Marketplaces.
        </TextContent>
      </SectionHeader>
      <div :class="$style.fig">
        <MediaPicture
          src="/images/space-motors-2w.jpg"
          :width="2880"
          :height="2128"
        />
      </div>
      <HomeSpaceArticle />
    </AppWrapper>
  </MainSection>
</template>
<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import HomeSpaceArticle from '~/components/Home/Space/HomeSpaceArticle.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import MainSection from '~/components/Section/MainSection.vue';
import SectionHeader from '~/components/utilities/SectionHeader.vue';
import TextContent from '~/components/utilities/TextContent.vue';
</script>

<style lang="scss" module>
.section {
  //padding-bottom: wrap-calc(168px, 1440px);
}

.wrapper {
  padding-bottom: rem-calc(48px);
}

.header {
  margin: 0 auto rem-calc(56px);
  max-width: rem-calc(750px);
  text-align: center;
  position: relative;
  z-index: 1;
}

.text {
  margin: 0 auto;
  max-width: 52ch;
}

.fig {
  left: 50%;
  margin-bottom: wrap-calc(110px);
  margin-top: wrap-calc(-446px);
  position: relative;
  transform: translateX(-50%);
  width: wrap-calc(1440px);
}
</style>
