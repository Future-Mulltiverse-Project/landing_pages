<template>
  <section>
    <div :class="$style.top">
      <MediaPicture
        :class="$style.media"
        :media-class="$style.mediaImg"
        :src="Bg"
        :width="1723"
        :height="3224"
        layout="fill"
      />
      <AppWrapper :class="$style.wrapper">
        <div :class="$style.wrapperInner">
          <div :class="$style.timer">
            <span :class="$style.timerTitle">
              VIP PRE-LAUNCH
              <span style="color: white">START IN:</span>
            </span>
            <template v-if="days">
              <span :class="$style.timerDays">{{ zerofi(days) }}</span>
              :
            </template>
            {{ 44 }} : {{ 23 }} : {{ 59 }} : {{ 59 }}
          </div>

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
                WELCOME TO THE
                <span style="color: #cfb16d">FUTURE</span>
              </h2>
              <h2
                style="
                  color: #cfb16d;
                  font-size: 40px;
                  font-family: Bai Jamjuree;
                  font-weight: 700;
                  text-transform: uppercase;
                  line-height: 70px;
                  word-wrap: break-word;
                "
              >
                MULTIVERSE
                <span style="color: white">&</span>
                EXPO
              </h2>
              <h2
                style="
                  color: #cfb16d;
                  font-size: 40px;
                  font-family: Bai Jamjuree;
                  font-weight: 700;
                  text-transform: uppercase;
                  line-height: 70px;
                  word-wrap: break-word;
                "
              >
                <span style="font-size:80px">LAUNCH!</span>
              </h2>
            </div>
          </div>
          <div :class="$style.btnContainer">
            <div class="row" :class="$style.btnRow">
              <div class="col-auto" :class="$style.btnCol">
                <NuxtLink
                  to="https://sandbox.futuremultiverse.dev/"
                  class="btn btn-outline-white"
                  :class="$style.btn"
                >
                  Onboard
                  <span style="color: #cfb16d">&#160; now</span>
                  !
                </NuxtLink>
              </div>
              <div class="col-auto" :class="$style.btnCol">
                <button
                  class="btn btn-outline-primary"
                  :class="$style.btn"
                  type="button"
                >
                  READ
                  <span style="color: #ffffff">&#160; launchpaper</span>
                  
                </button>
              </div>
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
import Video from '~/assets/images/launch_video_updated.png';
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
  padding-bottom: wrap-calc(400px);
}

.wrapper {
  padding: 26px  0 130px;
  display: flex;
  flex-direction: column;
}

.header {
  max-width: rem-calc(400px);
  margin: 0 auto;
}

.btnContainer {
  margin-top: 36px;
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
  font-size: 16px;
  margin-bottom: 32px;
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
  font-size: 20px;
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
