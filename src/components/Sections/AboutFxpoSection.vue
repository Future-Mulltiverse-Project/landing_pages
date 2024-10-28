<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="14240" :height="2338" layout="fill" />
    <AppWrapper>
    <AboutFutureMultiverse :class="$style.header" class="font-medium" title="title" />
    <MainSectionTextContent :class="$style.text">
      <p style="margin-bottom: 170%; font-size: 20px; padding-top:13px">
        the digital & decentralized catalyst accelerating breakthroughs to an inspiring, meaningful and fulfilled future for everyone.
      </p>
    </MainSectionTextContent>
    <div :class="$style.btnContainer">
      <h3 :class="$style.btnTitle">Experience the <span style="color: #cfb16d;">Future </span>today:</h3>
      <br />
      <div class="grid grid-cols-1 gap-5 md:grid-cols-4">
        <div class="flex justify-center">
          <button
            class=" md:w-auto w-1/2 btn font-medium btn-sm btn-outline-primary text-center"
            type="button"
          >
            <p class="mb-0 text-white">LEARN <span class="text-cfb16d">MORE </span></p>
          </button>
        </div>
        <div class="flex justify-center">
          <button
            class=" md:w-auto w-1/2 btn font-medium  btn-sm btn-outline-primary text-center"
            type="button"
          >
            <p class="mb-0 text-white">GUIDE<span class="text-cfb16d">BOOK</span></p>
          </button>
        </div>
        <div class="flex justify-center">
          <button
            class=" md:w-auto w-1/2 btn font-medium  btn-sm btn-outline-primary text-center"
            type="button"
          >
            <p class="mb-0 text-white">EXPLORE <span class="text-cfb16d"> MAP</span></p>
          </button>
        </div>
        <div class="flex justify-center">
          <button
            class=" md:w-auto w-1/2 btn font-medium  btn-sm btn-outline-primary text-center"
            style="border-color: #ffffff"
          >
            <p class="mb-0 text-white">ENTER<span class="text-cfb16d"> THE FUTURE</span></p>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5 mt-4 pt-12 md:grid-cols-6" :class="$style.btnLinkRow" style="padding-top: 40px !important; margin-top: 0px !important;">
        <div></div>
        <div class="md:col-span-4">
          <NuxtLink :class="$style.btnLink" class="pr-5" to="https://future-multiverse.gitbook.io/guidebook">
            <HeadCommentIcon />
            Guide
            <span class="text-white" style="line-height: 1; ">book</span>
          </NuxtLink>
          <NuxtLink :class="$style.btnLink" class="pr-5"  to="/">
            <HeadCommentIcon />
            <span class="text-white" style="line-height: 1">Brochure</span>
          </NuxtLink>
          <NuxtLink :class="$style.btnLink" class="pr-5"  to="/">
            <HeadCommentIcon />
            Launch
            <span class="text-white" style="line-height: 1; margin-left: 5px">Paper</span>
          </NuxtLink>
          <NuxtLink
            :class="$style.btnLink"
            class="pr-5" 
            :to="{ name: 'launch', hash: '#roadmap' }"
          >
            <RoadmapIcon />
            Launch
            <span class="text-white" style="line-height: 1; margin-left: 5px"> Roadmap</span>
          </NuxtLink>
        </div>
        <div></div>
      </div>
    </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import FileUploadIcon from '~/icons/FileUploadIcon.vue';
import HeadCommentIcon from '~/icons/HeadCommentIcon.vue';
import ThreeSixtyIcon from '~/icons/ThreeSixtyIcon.vue';
import Bg from '~/assets/images/torus2.jpg';
import RoadmapIcon from '~/icons/RoadmapIcon.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import AboutFutureSection from './launch/aboutFutureSection.vue';
import AboutFutureMultiverse from '~/components/MainSection/AboutFutureMultiverse.vue';

const title = `About FUTURE MULTIVERSE`;
</script>

<style lang="scss" module>
.section {
  //background-color: #0c1020;
  //background-size: cover;
  //background-image: url("@/assets/images/torus2.jpg");
  //height: 1700px;
  text-align: center;
  padding-bottom: 50px !important;
  padding-top: 50px !important;
  @include padding(70px 0 200px);
  color: #ffffff;
  position: relative;
}
.btn-outline-primary{
  width: 75% !important
}

.header {
  //@include margin-top(65px);
  @include margin-bottom(26px);
  position: relative;
  z-index: 1;
}

.text {
  @include margin-bottom(15px);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(434px);
  position: relative;
  z-index: 1;
}

.btnContainer {
  @include margin-top(58px);
  position: relative;
}

.btnRow {
  @include padding-bottom(76px);
  --gutter-x: #{rem-calc(24px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;
}

.btnCol {
  flex: 0 1 rem-calc(204px);
  min-width: fit-content;
  max-width: 100%;
}

.btnTitle {
  @include font-size(28px);
  @include margin-bottom(32px);
  font-weight: 600;
  color: #ffffff;
}

.btn {
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  font-size: 17px;
  text-align: center;
}

.btn svg {
  margin-left: rem-calc(10px);
  height: rem-calc(14px);
  width: rem-calc(22px);
}

.btnLinkRow {
  --gutter-y: #{rem-calc(4px)};
  justify-content: center;
  position: relative;
  z-index: 1;
}

.btnLink {
  @include font-size(14px);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  transition: color 150ms ease-in-out;
  color: #cfb16d;
  padding-top: 10px !important;

  &:hover {
    color: #fff;
  }

  svg {
    @include margin-right(7px);
    width: rem-calc(16px);
    height: rem-calc(18px);
  }
}
</style>
