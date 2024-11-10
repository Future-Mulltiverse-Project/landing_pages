<template>
  <section :class="$style.section">
    <AppWrapper>
      <div :class="$style.content">
        <h2 :class="$style.title">
          <strong>Onboard Now To FXPO</strong>
          & Save Your Seat For The Upcoming VIP Pre-Launch
        </h2>
        <div class="row" :class="$style.row">
          <div class="col-auto">
            <NuxtLink
              to="https://sandbox.futuremultiverse.dev/"
              class="btn btn-outline-gradient-primary"
              :class="$style.btn"
            >
              Onboard to FXPO now!
            </NuxtLink>
          </div>
          <div class="col-auto">
            <div :class="$style.timer">
              <span :class="$style.timerTitle">
                VIP PRE-LAUNCH MINT START IN:
              </span>
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
    </AppWrapper>
    <div :class="$style.mediaContainer">
      <div :class="$style.media">
        <MediaPicture :src="Img" :width="1460" :height="1126" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import Img from '~/assets/images/Bez-nazwy.jpg';
import { useTimer, zerofi } from '~/composables/useTimer';
import { useRuntimeConfig } from '#imports';
import MediaPicture from '~/components/Media/MediaPicture.vue';

const config = useRuntimeConfig();
const { days, hours, minutes, seconds } = useTimer(
  config.public.MINT_EVENT_START_IN,
);
</script>

<style lang="scss" module>
.section {
  @include padding(194px 0 86px);
  position: relative;
  overflow: hidden;

  @include media-breakpoint-up(lg) {
    @include padding-bottom(156px);
  }
}

.mediaContainer {
  max-width: rem-calc(730px);
  margin: 0 auto;
  position: relative;
  pointer-events: none;

  @include media-breakpoint-up(lg) {
    @include margin-right($wrapper-padding);
    position: absolute;
    max-width: none;
    margin-left: 0;
    right: rem-calc(575px);
    width: rem-calc(730px);
    top: 51%;
    transform: translate(0, -50%);
  }

  @media (min-width: $wrapper-width + 1px) {
    right: 50%;
    margin-right: rem-calc(575px);
    transform: translate(divide($wrapper-inner-width, 2), -50%);
  }

  &:after {
    display: block;
    content: '';
    padding-bottom: 56.5%;
  }
}

.media {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.content {
  max-width: rem-calc(664px);
  text-align: center;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @include media-breakpoint-up(lg) {
    text-align: left;
    margin-right: 0;
  }
}

.title {
  @include font-size(50px);
  @include margin-bottom(68px);
  font-weight: 600;
  line-height: divide(63, 50);

  strong {
    color: $primary;
  }
}

.timer {
  @include font-size(16px);
  margin-bottom: rem-calc(10px);
  line-height: math-div(30, 20);
  text-transform: uppercase;
}

.timerTitle {
  color: $primary;
}

.timerDays {
  color: $primary;
}

.row {
  --gutter-x: #{rem-calc(44px)};
  --gutter-y: #{rem-calc(20px)};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include media-breakpoint-up(lg) {
    flex-direction: row;
    justify-content: flex-start;
  }
}

.btn {
  padding-left: rem-calc(18px);
  padding-right: rem-calc(18px);
}
</style>
