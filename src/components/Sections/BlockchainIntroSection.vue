<template>
    <section :class="$style.section">
      <div :class="$style.top">    

        <div :class="$style.gradient" />
        <AppWrapper :class="$style.wrapper">
          <h3 :class="$style.headline" v-html="heading" />
          <h2 :class="$style.title" v-html="title" />
          <MainSectionTextContent v-if="$slots.text" :class="$style.text">
            <slot name="text"></slot>
          </MainSectionTextContent>
          <slot></slot>
        </AppWrapper>
      </div>
      <div v-if="img" :class="$style.mediaWrapper">
        <MediaPicture :src="img.url" :width="img.width" :height="img.height" />
      </div>

      <br>
      <br>
      <br>

      <div class="row">      
      <div class="col-md-6">
          <NuxtLink class="btn btn-outline-primary" style="float: right;" to="https://future-multiverse.gitbook.io/guidebook" >
            OPEN <span style="color:white; padding-left: 5px;">GUIDE</span>BOOK
          </NuxtLink>
        </div>
        <div class="col-md-6">
          <button class="btn btn-outline-primary" style="float: left;" type="button">
            OPEN <span style="color:white; padding-left: 5px;padding-right: 5px;">BLOCKCHAIN </span>EXPLORER
          </button>
        </div>
      </div>
      <br>
      <br>
      <br>
      
    </section>
  </template>
  
  <script lang="ts" setup>
  import Bg from '~/assets/images/fxpo_marketplace_background_image.png';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import MediaPicture from '~/components/Media/MediaPicture.vue';
  import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
  
  defineProps<{
    heading?: string;
    title: string;
    img?: {
      url: string;
      width: number;
      height: number;
    };
  }>();
  </script>
  
  <style lang="scss" module>
  .section {
    position: relative;
    text-align: center;
  }
  
  .gradient {
    /*background: linear-gradient(
      to bottom,
      rgba(#0a0d1d, 0) 0%,
      rgba(#0a0d1d, 0) 90%,
      #0a0d1d 100%
    );*/
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .media {
    opacity: 0.4;
  }
  
  .mediaImg {
    object-position: 100% 65%;
  }
  
  .top {
    padding-top: rem-calc(130px);
    position: relative;
  }
  
  .wrapper {
    @include padding(26px 0 74px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .headline {
    @include font-size(28px);
    @include margin-bottom(12px);
    line-height: divide(30, 28);
    font-weight: 600;
  
    strong {
      color: $primary;
    }
  }
  
  .title {
    @include font-size(50px);
    line-height: divide(70, 50);
    margin: 0 auto;
    max-width: rem-calc(900px);
    text-transform: uppercase;
  
    strong {
      color: $primary;
    }
  }
  
  .text {
    @include margin-bottom(24px);
    @include margin-top(48px);
    margin-left: auto;
    margin-right: auto;
    max-width: rem-calc(560px);
  
    p {
      line-height: divide(30, 16);
    }
  }
  
  .mediaWrapper {
    margin: 0 auto;
    max-width: rem-calc(1440px);
    position: relative;
    width: 100%;
  
    &::before {
      background: radial-gradient(50% 40% at center center, #23274a, transparent);
      border-radius: 50rem;
      bottom: 0;
      content: '';
      height: rem-calc(504px);
      left: 50%;
      position: absolute;
      transform: translate(-50%, 40%);
      width: rem-calc(800px);
    }
  }
  </style>
  