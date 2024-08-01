<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="1500" layout="fill" />
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col" :class="$style.leftCol">
          <MainSectionHeader
            :class="$style.header"
            heading="It´s time for the future!"
            title="Onboard Now & Save your Seat for the Launch of the FXPO!"
            title-lg
          />
          <NuxtLink to="https://sandbox.futuremultiverse.dev/" :class="$style.btn"  class="btn">
            Onboard now
          </NuxtLink>
        </div>
        <div class="col" :class="$style.rightCol">
          <LaunchingTimerWrapper :class="$style.timerWrapper">
            <LaunchingTimerItem title="Public Mint Event Start in:">
              <LaunchingTimer :datetime="config.public.MINT_EVENT_START_IN" />
            </LaunchingTimerItem>
            <LaunchingTimerItem title="FutureX EXPO Launch in:">
              <LaunchingTimer
                :class="$style.timer2"
                :datetime="config.public.EXPO_LAUNCH_IN"
              />
            </LaunchingTimerItem>
          </LaunchingTimerWrapper>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from '#imports';
import Bg from '~/assets/images/launch/rocket.png';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import LaunchingTimer from '~/components/Home/Launching/LaunchingTimer.vue';
import LaunchingTimerItem from '~/components/Home/Launching/LaunchingTimerItem.vue';
import LaunchingTimerWrapper from '~/components/Home/Launching/LaunchingTimerWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';

const config = useRuntimeConfig();
</script>

<style lang="scss" module>
.section {
  @include padding(150px 0 120px);
  color: #0c0f22;
  position: relative;
}

.row {
  --gutter-x: 0;
  @include rfs(64px, --gutter-y);
  padding-bottom: wrap-calc(328px);

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
    text-align: left;
    align-items: flex-start;
  }
}

.rightCol {
  flex: 1 1 rem-calc(570px);
}

.header {
  @include padding-top(0px);
  @include margin-bottom(70px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  min-width: rem-calc(238px);
  max-width: 100%;
  margin-top: auto;
  color: white;
  background-color: #cfb16d;
}

.timerWrapper {
  max-width: rem-calc(580px);
  margin: 0 auto;

  @include media-breakpoint-up(lg) {
    margin-right: 0;
  }
}

.timer2 {
  margin-top: rem-calc(16px);
}

.btn {
  padding-left: rem-calc(20px);
  padding-right: rem-calc(20px);
}
</style>
