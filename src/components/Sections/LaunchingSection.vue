<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="1038" layout="fill" />
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col" :class="$style.leftCol">
          <MainSectionHeader
            :class="$style.header"
            heading="It's time for the future!"
            :title="'REGISTER NOW & SAVE YOUR SEAT FOR THE VIP PRE-LAUNCH OF THE FUTURE!'"
            title-lg
          />
        
            
        </div>
        <div class="col" :class="$style.rightCol">
          <LaunchingTimerWrapper :class="$style.timerWrapper">
            <LaunchingTimerItem
              title="NEXT UPDATE & ANNOUNCEMENT:"
              class="custom-text-color"
            >
              <LaunchingTimer :datetime="config.public.MINT_EVENT_START_IN" />
            </LaunchingTimerItem>
            <LaunchingTimerItem title="PLANNED VIP PRE-LAUNCH MINT EVENT">
              <p :class="$style.text1"><br> <span style="font-size: 42px; color: white;">IN <span :class="$style.primaryText"> Q1</span>  2024</span><span style="font-size: 42px;">!</span></p>
            </LaunchingTimerItem>
          </LaunchingTimerWrapper>
        </div>
      </div>
       <div class="button-container">
            <button type="button" class="btn btn-outline-white" :class="$style.btn">
              Onboard now (coming next)
            </button>
            <button type="button" class="btn btn-outline-primary" :class="$style.btn">
              REGISTER FOR OUR NEWSLETTER
            </button>
          </div>
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
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';

const config = useRuntimeConfig();
</script>

<style lang="scss" module>
.section .rightCol .timerWrapper .custom-text-color {
  color: #ffffff !important; /* Change to your desired text color */
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
  @include padding-top(32px);
  @include margin-bottom(200px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
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
