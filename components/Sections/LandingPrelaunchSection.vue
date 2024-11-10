<template>
  <section :class="$style.section">
    <!--MediaPicture :src="Bg" :width="1440" :height="968" layout="fill" /-->
    <AppWrapper>
      <h3 class="font-medium" :class="$style.heading">It´s time<span :class="$style.primaryText">!</span></h3>
      <h2 class="font-medium" :class="$style.title">
        Onboard <span :class="$style.primaryText"> Now</span> & Save your <span :class="$style.primaryText"> Seat</span><br/> for the <span :class="$style.primaryText"> Launch</span> of 
      </h2>
      <h2>
        <span style="font-size: 70px; font-weight: 600; "> THE <span :class="$style.primaryText">FUTURE</span>!</span>
      </h2>
      <h3 class="font-medium" :class="$style.timerTitle">PLANNED <span style="color: #CFB16D;">PUBLIC LAUNCH </span>ONBOARDING</h3>
      <LaunchingTimer
        :class="$style.timer"
        :datetime="config.public.MINT_EVENT_START_IN"
      />
      <div class="pt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div class="md:flex md:items-center md:justify-end">
          <nuxt-link 
            to="https://auth.futuremultiverse.com"
            :class="$style.btn"
            style="border-color: #ffffff;"
            class="w-1/2 btn-sm btn-outline-primary text-center font-medium"
          >
            <p class="mb-0 font-medium text-sm" style="color:#CFB16D;min-width: unset; max-width: unset; ">ONBOARD <span class="text-white font-medium"> now </span> </p>
        </nuxt-link> 
        </div>
        <div class="md:flex md:items-center md:justify-start">
          <button type="button"
            class="btn md:pl-24 md:pr-24 btn-sm btn-inline-primary  text-center"
            :class="$style.btn"
            style="background-color: #CFB16D; color: #ffffff" 
          >
            <span style="color: #ffffff; font-weight: 700; font-size: 14px"  class=" font-medium text-sm">NEWS & UPDATES </span>
          </button> 
        </div>
      </div>

    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import LaunchingTimer from '~/components/Home/Launching/LandingLaunchingTimer.vue';
import { useRuntimeConfig } from '#imports';
import Bg from '~/assets/images/prelaunch-bg.png';
import MediaPicture from '~/components/Media/MediaPicture.vue';

const config = useRuntimeConfig();
</script>

<style lang="scss" module>
.section {
  text-align: center;
  position: relative;
  padding-top: 50px !important;
}

.primaryText {
  color: $primary; /* Replace $primary with your desired primary text color */
}


.heading {
  @include font-size(28px);
  @include margin-bottom(30px);
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 28);
}

.title {
  @include font-size(35px);
  @include margin-bottom(10px);
  line-height: divide(55, 45);
  margin-left: auto;
  margin-right: auto;
  max-width: 46ch;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 00px;
}

.btn {
  --btn-bg: rgba(255, 255, 255, 0);
  --btn-color: #0a0d1d;
  margin-bottom: 20px;
  margin-right: 10px;
  color: #ffffff;
  font-weight: 100
}


.timerTitle {
  @include font-size(21px);
  @include margin-top(130px);
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 18);
  
}

.timer {
  justify-content: center !important;
  padding-bottom: 20px !important;
}
</style>
