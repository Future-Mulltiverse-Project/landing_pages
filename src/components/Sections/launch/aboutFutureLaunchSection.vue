<template>
    <section :class="$style.section">
      <MediaPicture :src="Bg" :width="14240" :height="2338" layout="fill" />
      <AppWrapper>
      <AboutLaunchMultiverse :class="$style.header" :title="title" />
      <MainSectionTextContent :class="$style.text">
        <p style="margin-bottom: 170%; font-size: 20px; padding-top:13px">
          The Future Multiverse & EXPO is a digital, decentralized <br /> 
          platform & ecosystem, created to accelerate the breakthrough <br/>
          to a sustainable, meaningful and inspiring future for everyone.
        </p>
      </MainSectionTextContent>
      <div :class="$style.btnContainer">
        <h3 :class="$style.btnTitle">Experience the <span style="color: #cfb16d;">Future </span>today:</h3>
        <br />
        <div class="row" :class="$style.btnRow">
          <div class="col-md-4" :class="$style.btnCol">
            <a
              class="btn btn-outline-primary"
              :class="$style.btn"
              type="button"
            >
              <p style="margin-bottom: 0px; color: #ffffff;">LEARN <span style="color: #cfb16d;">MORE</span> <br />(<span style="color: #ffffff;">COMING NEXT)</span></p>
            </a>
          </div>
          <div class="col-md-4" :class="$style.btnCol">
            <a
              class="btn btn-outline-white"
              :class="$style.btn"
            >
              <p style="margin-bottom: -2px; padding-top:0px; color: #ffffff;">ENTER
              <span style="color: #cfb16d;"> FUTURE EXPO <br /> <span style="color: #ffffff;">(COMING NEXT)</span>
              </span> </p>
            </a>
          </div>
          <div class="col-md-4" :class="$style.btnCol">
            <NuxtLink
            to="https://map.futuremultiverse.dev/"
              class="btn btn-outline-primary"
              :class="$style.btn"
            >
            <p style="margin-bottom: -2px; padding-top:0px; color: #ffffff;"> DISCOVER<span style="color: #cfb16d;"> MAP</span> <br /> <span style="color: #ffffff;">(COMING NEXT)</span></p>
          </NuxtLink>
          </div>
        </div>
      </div>
      <div class="row" :class="$style.btnLinkRow">
        <div class="col-auto">
          <NuxtLink :class="$style.btnLink" to="https://future-multiverse.gitbook.io/guidebook">
            <HeadCommentIcon />
            Guide
            <span style="color: white; line-height: 1">book</span>
          </NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink :class="$style.btnLink" to="/">
            <FileUploadIcon />
            <span style="color: white; line-height: 1">Brochure</span>
          </NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink :class="$style.btnLink" to="/">
            <FileUploadIcon />
            Launch
            <span style="color: white; line-height: 1">Paper</span>
          </NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink
            :class="$style.btnLink"
            :to="{ name: 'launch', hash: '#roadmap' }"
          >
            <RoadmapIcon />
            Launch
            <span style="color: white; line-height: 1">&nbsp;Roadmap</span>
          </NuxtLink>
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
  import AboutLaunchMultiverse from '~/components/MainSection/AboutLaunchMultiverse.vue';
  
  const title = `About FUTURE MULTIVERSE`;
  </script>
  
  <style lang="scss" module>
  .section {
    //background-color: #0c1020;
    //background-size: cover;
    //background-image: url("@/assets/images/torus2.jpg");
    //height: 1700px;
    text-align: center;
    @include padding(70px 0 200px);
    color: #ffffff;
    position: relative;
  }
  
  .header {
    @include margin-top(65px);
    @include margin-bottom(26px);
    position: relative;
    z-index: 1;
  }
  
  .text {
    @include margin-bottom(15px);
    margin-left: auto;
    margin-right: auto;
    max-width: rem-calc(800px);
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
  