<template>
  <MainSection angle-bottom has-bg-behind>
    <template #bg>
      <div :class="$style.bg">
        <MediaPicture src="/images/sales-bg.jpg" :width="1920" :height="1000" />
      </div>
    </template>
    <AppWrapper :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-auto" :class="$style.leftCol">
          <MediaPicture
            src="/images/token-in-frame.png"
            :width="552"
            :height="554"
          />
        </div>
        <div class="col-12 col-xl" :class="$style.rightCol">
          <h2 :class="$style.title">
            <span>Save your Spot</span>
            on the FutureX EXPO Today!
          </h2>
          <div class="row" :class="$style.group">
            <div class="col-auto">
              <ConnectWalletBtn :class="$style.btn">
                CONNECT WALLET & JOIN LAUNCH LIST
              </ConnectWalletBtn>
            </div>
            <div class="col-auto">
              <div :class="$style.timer">
                <span :class="$style.timerTitle">SALE START IN:</span>
                <template v-if="days">
                  <span :class="$style.timerDays">{{ zerofi(days) }}</span>
                  :
                </template>
                {{ zerofi(hours) }} : {{ zerofi(minutes) }} :
                {{ zerofi(seconds) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  </MainSection>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from '#imports';
import AppWrapper from '~/components/AppWrapper/AppWrapper';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import MainSection from '~/components/Section/MainSection.vue';
import ConnectWalletBtn from '~/components/Wallet/ConnectWalletBtn.vue';
import { useTimer, zerofi } from '~/composables/useTimer';

const config = useRuntimeConfig();
const { days, hours, minutes, seconds } = useTimer(
  config.public.MINT_EVENT_START_IN,
);
</script>

<style lang="scss" module>
.section {
  //padding-top: 248px;
  //position: relative;
  //padding-bottom: wrap-calc(168px, 1440px);
}

.bg {
  left: 50%;
  width: rem-calc(1440px);
  position: absolute;
  top: rem-calc(-18px);
  transform: translateX(-50%);
  height: calc(100% + 18px);
  overflow: hidden;
}

.wrapper {
  padding-top: rem-calc(250px);
  padding-bottom: rem-calc(26px);
}

.row {
  --gutter-x: 0;
  --gutter-y: #{rem-calc(62px)};
  align-items: center;
  justify-content: center;
  text-align: center;

  @include media-breakpoint-up(xl) {
    justify-content: flex-start;
    text-align: left;
  }
}

.leftCol {
  flex-basis: rem-calc(276px);
  flex-grow: 0;

  @include media-breakpoint-up(xl) {
    margin-right: wrap-calc(130px);
  }
}

.rightCol {
  padding-bottom: rem-calc(24px);
}

.img {
  width: 100%;
}

.title {
  font-size: 70px;
  line-height: math-div(75, 70);
  margin-bottom: rem-calc(32px);

  span {
    color: $primary;
  }
}

.group {
  --gutter-x: #{rem-calc(34px)};
  --gutter-y: #{rem-calc(24px)};
  align-items: center;
  justify-content: center;

  @include media-breakpoint-up(xl) {
    justify-content: flex-start;
  }
}

.timer {
  font-size: 26px;
  line-height: math-div(30, 26);
  text-transform: uppercase;
}

.timerTitle {
  color: $primary;
  margin-right: em-calc(14, 26);
}

.timerDays {
  color: $primary;
}

.btn {
  padding-left: rem-calc(20px);
  padding-right: rem-calc(20px);
}
</style>
