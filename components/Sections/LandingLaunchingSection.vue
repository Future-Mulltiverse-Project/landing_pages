<template>
  <div style=" background: url('_nuxt/assets/images/prelaunch-bg.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;max-width: 100%;">
  <section :class="$style.section" class="pt-12 pb-12">
    <AppWrapper>
      <div class="grid grid-cols-1 lg:gap-3 gap-1 lg:grid-cols-2" :class="$style.row">
        <div class="md:order-first md:max-w-md w-full">
          <LandingHomeMainSectionHeader
            :class="$style.header"
            :title="'REGISTER NOW & SAVE YOUR SEAT FOR THE PRE-LAUNCH OF THE FUTURE!'"
            title-lg
          />

          <div class="button-container" style="margin-top:50px !important" :class="$style.button_set">
            <div class=" mb-10 mt-10 lg:mb-0 lg:mt-0 grid grid-cols-2 gap-3 mobile:grid-cols-2">
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary text-center"
                    :class="$style.btn"
                    style="
                      background-color: rgba(255, 255, 255, 0);
                      color: #ffffff;
                      font-weight: 600;
                      width: 90%;
                      padding-top: 10px;
                      padding-bottom: 10px;
                      float: right;
                      font-size: 13px;
                    "
                  >
                    REGISTER FOR NEWSLETTER
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary text-center"
                    :class="$style.btn"
                    style="
                      background-color: #cfb16d;
                      color: #ffffff;
                      font-weight: 600;
                      padding-top: 22px;
                      padding-bottom: 22px;
                      width: 90%;
                      font-size: 13px;
                    "
                  >
                    ONBOARD NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        <div class=" ml-0 lg:ml-20">
          <LaunchingTimerWrapper
            :class="$style.timerWrapper"
          >
            <LaunchingTimerItem
              title="NEXT UPDATE & ANNOUNCEMENT"
              class="custom-text-color"
              style="font-weight: 600;"
            >
              <LaunchingTimerMarketplace :datetime="config.public.MINT_EVENT_START_IN" />
            </LaunchingTimerItem>
            <SubLaunchingTimerItem>
              <p :class="$style.text1">
                <span class=" font-bold pt-6 pb-5" style="color: white; font-size: 2.8rem" :class="$style.date_format">NOVEMBER 2024</span>
              </p>
            </SubLaunchingTimerItem>
          </LaunchingTimerWrapper>
        </div>
        </div>
    </AppWrapper>
  </section>
  </div>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from '#imports';
import Bg from '~/assets/images/rocket-launch.png';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import LaunchingTimerMarketplace from '~/components/Home/Launching/LaunchingTimerMarketplace.vue';
import LaunchingTimerItem from '~/components/Home/Launching/LaunchingTimerItem.vue';
import LaunchingTimerWrapper from '~/components/Home/Launching/LaunchingTimerWrapper.vue';
import LandingHomeMainSectionHeader from '~/components/MainSection/LandingHomeMainSectionHeader.vue';
import SubLaunchingTimerItem from '~/components/Home/Launching/SubLaunchingTimerItem.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';

const config = useRuntimeConfig();
</script>

<style lang="scss" module>
.section .rightCol .timerWrapper .custom-text-color {
  color: #ffffff !important; /* Change to your desired text color */
}

@media (max-width: 1231px) and (min-width: 1131px) {
    .button_set{
      margin-top: 30px !important;
    }
}

@media (max-width: 1131px) and (min-width: 1040px) {
    .button_set{
      padding-top: 30px !important;
    }
}

@media (max-width: 1040px) and (min-width:768px) {
    .btn{
      font-size: 13px;
    }
}
@media (max-width: 768px) and (min-width:599px){
    .btn{
      font-size: 14px;
      font-weight: bold;
    }
}
@media (max-width: 599px) and (min-width: 522px) {
    .btn_special1{
      margin-top: 2%;
    }
    .btn_special2{
      margin-top: 10%;
    }
}
@media (max-width: 522px) and (min-width: 400px) {
    .btn_special1{
      margin-top: 2%;
    }
    .btn_special2{
      margin-top: 10%;
      margin-bottom: 10%;
    }
}




@media (max-width: 775px) {
    .butns{
      margin-bottom: 40px !important;
      margin-top: 40px !important;
    }
}



.primaryText {
  color: $primary; /* Replace $primary with your desired primary text color */
}

.button-container {
  display: inline-block !important;
}

.section {
  color: #ffffff;
  position: relative;
}

.row {
  --gutter-x: 0;

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
    padding-right: $wrapper-padding;
    /* text-align: left; */
    align-items: flex-start;
  }
}

.rightCol {
  flex: 1 1 rem-calc(570px);
}

.header {
  //padding-top: 32px;
  //margin-bottom: 200px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.btn {
  --btn-bg: rgba(255, 255, 255, 0.2);
  --btn-color: #0a0d1d;
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
  text-align: left; // Align text to the center
}

.timer2 {
  margin-top: rem-calc(16px);
}
</style>
