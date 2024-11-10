<template>
  <section :class="$style.section" >
    <MediaVideo layout="fill" :loop="true" :autoplay="true" :src="Bg" :width="1440" :height="860" />
    <AppWrapper class="flex lg:h-screen justify-center items-center">
        <div class="flex flex-col">  
            <h1 style="margin: unset">
                <span class="font-semibold text-5xl" style="color: #CFB16D">WELCOME TO THE </span><br/>
                <span class="title_span font-bold text-9xl" style="color: white; line-height: 1">FUTURE</span><br/>
                <span class="title_span font-bold text-7xl" style="color: white; line-height: 1">MULTIVERSE</span>
            </h1>
            <nuxt-link to='/home' :class="$style.btn" class="btn btn-outline-primary font-semibold m-auto">
                Explore
            </nuxt-link>
        </div>
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
import Bg from '~/assets/videos/future_multiverse_video.mp4';
import MediaVideo from '../Media/MediaVideo.vue';
</script>

<style lang="scss" module>
.section {
  //@include padding-top(130px);
  //@include padding-top(66px);
  //min-height: rem-calc(860px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.background-video {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}



.btn {
  --btn-bg: rgba(12, 15, 34, 0.2);
  --btn-color: #fff;
  width: 50%;
  margin-top: 3.5rem !important
  //min-width: rem-calc(256px);
}

.scroll {
  @include font-size(15px);
  font-weight: 600;
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
    //background: $yellow-200;
    content: '';
    display: block;
    height: rem-calc(100px);
    margin: rem-calc(22px) auto rem-calc(-50px);
    width: 3px;
  }
}
</style>
