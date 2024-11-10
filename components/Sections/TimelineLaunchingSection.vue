<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="1338" layout="fill" />
    <AppWrapper>
      <div class="row" >
        <div class="col-md-6">
          <HomeMainSectionHeader
            :class="$style.header"
            :title="'REGISTER NOW & SAVE YOUR SEAT FOR THE VIP PRE-LAUNCH OF THE FUTURE!'"
            title-lg
          />

          <div class="button-container" :class="$style.button_set">
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-5" :class="$style.btn_special1">
                <NuxtLink
                  to="https://sandbox.futuremultiverse.dev/"
                  class="btn btn-outline-primary"
                  :class="$style.btn"
                  style="
                    background-color: rgba(255, 255, 255, 0);
                    width: 100%;
                    color: #ffffff;
                    font-weight: 100;
                    padding-top: 15px;
                    padding-bottom: 15px;
                  "
                >
                  Onboard now
                  <br />
                  (COMING NEXT)
                  <br />
                </NuxtLink>
              </div>
              <div class="col-md-5" :class="$style.btn_special2">
                <button
                  type="button"
                  class="btn btn--primary-inverted"
                  :class="$style.btn"
                  style="
                    background-color: #cfb16d;
                    width: 100%;
                    color: #ffffff;
                    font-weight: 400;
                  "
                >
                  REGISTER FOR NEWSLETTER
                </button>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <LaunchingTimerWrapper
            :class="$style.timerWrapper"
            style="padding-bottom: 30px"
          >
            <LaunchingTimerItem
              title="NEXT UPDATE & ANNOUNCEMENT"
              class="custom-text-color"
            >
              <LaunchingTimer :datetime="config.public.MINT_EVENT_START_IN" />
            </LaunchingTimerItem>
            <SubLaunchingTimerItem>
              <p :class="$style.text1">
                <br />
                <span
                  style="font-size: 60px; color: white"
                  :class="$style.date_format"
                >
                  JUNE 2024
                </span>
              </p>
            </SubLaunchingTimerItem>
          </LaunchingTimerWrapper>
        </div>
        <div class="col-md-12">
            <img
                :src="Timeline"
                style="width: 100%;" 
                class="img"
                layout="fill"
            />
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="
                    background-color: rgba(255, 255, 255, 0);
                    width: 100%;
                    font-size:20px;
                    color: #ffffff;
                    font-weight: 500;
                    padding-top: 15px;
                    padding-bottom: 15px;
                  "
                >
                  <p style="margin-bottom: 0px;"><span style="color:#cfb16d">READ </span>  LAUNCHPAPER</p>
                  <br />
                </button>
        </div>
        <div class="col-md-4"></div>
      </div>
      <br />
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from '#imports';
import Bg from '~/assets/images/rocket-launch.png';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import LaunchingTimer from '~/components/Home/Launching/LaunchingTimer.vue';
import LaunchingTimerItem from '~/components/Home/Launching/LaunchingTimerItem.vue';
import LaunchingTimerWrapper from '~/components/Home/Launching/LaunchingTimerWrapper.vue';
import HomeMainSectionHeader from '~/components/MainSection/HomeMainSectionHeader.vue';
import SubLaunchingTimerItem from '~/components/Home/Launching/SubLaunchingTimerItem.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Timeline from '~/assets/images/timeline_1.png';

const config = useRuntimeConfig();
</script>

<style lang="scss" module>
.section .rightCol .timerWrapper .custom-text-color {
  color: #ffffff !important; /* Change to your desired text color */
}

@media (max-width: 1231px) and (min-width: 1131px) {
  .button_set {
    margin-top: 30px !important;
  }
}

@media (max-width: 1131px) and (min-width: 1040px) {
  .button_set {
    padding-top: 30px !important;
  }
}

@media (max-width: 1040px) and (min-width: 768px) {
  .button_set {
    padding-top: 45px !important;
  }
  .btn {
    font-size: 13px;
  }
}
@media (max-width: 768px) and (min-width: 599px) {
  .button_set {
    padding-top: 45px !important;
  }
  .btn {
    font-size: 10px;
    font-weight: bold;
  }
  .date_format {
    font-size: 40px !important;
  }
  .button_set {
    margin-top: 10%;
  }
  .btn_special1 {
    margin-top: 2%;
  }
  .btn_special2 {
    margin-top: 10%;
  }
}
@media (max-width: 599px) and (min-width: 522px) {
  .date_format {
    font-size: 40px !important;
    text-align: center;
  }
  .button_set {
    margin-top: 30%;
  }
  .btn_special1 {
    margin-top: 2%;
  }
  .btn_special2 {
    margin-top: 10%;
  }
}
@media (max-width: 522px) and (min-width: 400px) {
  .date_format {
    font-size: 40px !important;
    text-align: center;
  }
  .button_set {
    margin-top: 35%;
  }
  .btn_special1 {
    margin-top: 2%;
  }
  .btn_special2 {
    margin-top: 15%;
  }
}

@media (max-width: 470px) {
  .date_format {
    font-size: 40px !important;
    text-align: center;
  }
  .button_set {
    margin-top: 50%;
  }
  .btn_special1 {
    margin-top: 5%;
  }
  .btn_special2 {
    margin-top: 20%;
  }
}

.primaryText {
  color: $primary; /* Replace $primary with your desired primary text color */
}

.button-container {
  display: inline-block !important;
}

.section {
  @include padding(150px 0 120px);
  color: #ffffff;
  position: relative;
}

.row {
  --gutter-x: 0;
  @include rfs(64px, --gutter-y);
  padding-bottom: wrap-calc(6px);

  @include media-breakpoint-up(lg) {
    flex-wrap: nowrap;
  }
}

.leftCol {
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1 1 rem-calc($wrapper-inner-width - 570px);

  @include media-breakpoint-up(lg) {
    @include padding-right($wrapper-padding);
    /* text-align: left; */
    align-items: flex-start;
  }
}

.rightCol {
  flex: 1 1 rem-calc(570px);
}

.header {
  //@include padding-top(32px);
  @include margin-bottom(200px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.btn {
  --btn-bg: rgba(255, 255, 255, 0.2);
  --btn-color: #0a0d1d;
  margin-top: -360px;
  margin-right: 10px;
}

.timerWrapper {
  max-width: rem-calc(580px);
  margin: 0 auto;

  @include media-breakpoint-up(lg) {
    margin-right: 0;
  }
}

.text1 {
  text-align: center; // Align text to the center
}

.timer2 {
  margin-top: rem-calc(16px);
}
</style>
