<template>
  <section style="padding-bottom: 70px;">
    <div :class="$style.top">
      <!--MediaPicture
        :class="$style.media"
        :media-class="$style.mediaImg"
        :src="Bg"
        :width="1723"
        :height="3224"
        layout="fill"
      /-->
      <AppWrapper :class="$style.wrapper">
        <div :class="$style.wrapperInner">

          <div
            class="d-flex justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
          
          <div class="text-center">
              <h2
                style="
                  color: white;
                  font-size: 50px;
                  font-family: Bai Jamjuree;
                  font-weight: 700;
                  text-transform: uppercase;
                  line-height: 70px;
                  word-wrap: break-word;
                "
              >
                 FUTURE MULTIVERSE
                 <br />
                <span style="color: #cfb16d">PRODUCT & SERVICE <br/> PACKAGES</span>
              </h2>
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
    <AppWrapper>
      <MediaPicture
        :class="$style.video"
        :src="Video"
        :width="1170"
        :height="656"
      />
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Bg from '~/assets/images/launch/dalle.png';
import Video from '~/assets/images/quest_video.png';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import { useTimer, zerofi } from '~/composables/useTimer';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
const { days } = useTimer(config.public.MINT_EVENT_START_IN);
</script>

<style lang="scss" module>
.top {
  padding-top: rem-calc(130px);
  position: relative;
  text-align: center;
}

.wrapperInner {
  padding-bottom: wrap-calc(350px);
}

.wrapper {
  @include padding(26px 0 130px);
  display: flex;
  flex-direction: column;
}

.header {
  max-width: rem-calc(400px);
  margin: 0 auto;
}

.btnContainer {
  @include margin-top(36px);
  position: relative;
}

.btnRow {
  --gutter-x: #{rem-calc(18px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;
}

.btnCol {
  flex: 0 1 rem-calc(248px);
  min-width: fit-content;
  max-width: 100%;
}

.btnTitle {
  @include font-size(16px);
  @include margin-bottom(32px);
  font-weight: 600;
  color: #cfb16d;
}

.btn {
  width: 100%;
}

.btn svg {
  margin-left: rem-calc(10px);
  height: rem-calc(14px);
  width: rem-calc(22px);
}

.timer {
  @include font-size(20px);
  margin-bottom: rem-calc(10px);
  line-height: math-div(30, 20);
  text-transform: uppercase;
}

.timerTitle {
  color: $primary;
  margin-right: em-calc(14, 26);
}

.timerDays {
  color: $primary;
}

.video {
  margin-top: wrap-calc(-400px);
}
</style>
