<template>
  <section :class="$style.section">
    <!--MediaPicture :src="Bg" :width="1440" :height="968" layout="fill" /-->
    <AppWrapper>
      <h3 class="font-medium md:text-2xl text-xl" :class="$style.heading">It´s time<span :class="$style.primaryText">!</span></h3>
      <h2 class="font-medium md:text-4xl text-2xl" :class="$style.title">
        Onboard <span :class="$style.primaryText"> Now</span> & Save your <span :class="$style.primaryText"> Seat</span><br/> for the <span :class="$style.primaryText"> Launch</span> of 
      </h2>
      <h2 class="font font-bold lg:text-8xl md:text-6xl sm:text-5xl text-4xl pt-4">
        <span> THE <span :class="$style.primaryText">FUTURE</span>!</span>
      </h2>
      <h3 class="font-medium text-xl" :class="$style.timerTitle">PLANNED <span style="color: #CFB16D;">PUBLIC LAUNCH </span>ONBOARDING</h3>
      <LaunchingTimer
        :class="$style.timer"
        :datetime="config.public.MINT_EVENT_START_IN"
      />
      <div class="pt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div class="md:flex md:items-center md:justify-end mt-2 sm:mt-0 mb-10 sm:mb-0">
          <nuxt-link 
            to="https://auth.futuremultiverse.com"
            :class="$style.btn"
            style="border-color: #ffffff;"
            class=" btn-sm btn-outline-primary text-center font-medium"
          >
            <span class="mb-0 font-medium text-sm" style="color:#CFB16D;min-width: unset; max-width: unset; ">ONBOARD <span class="text-white font-medium"> now </span> </span>
        </nuxt-link> 
        </div>
        <div class="md:flex md:items-center md:justify-start">
          <nuxt-link
            class="btn btn-sm btn-inline-primary  text-center"
            :class="$style.btn"
            style="background-color: #CFB16D; color: #ffffff" 
          >
            <span style="color: #ffffff; font-weight: 700; font-size: 14px"  class=" font-medium text-sm">NEWS & UPDATES </span>
        </nuxt-link> 
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
  margin-bottom: 30px;
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 28);
}

.title {
  margin-bottom: 10px;
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
  margin-top: 130px;
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 18);
  
}

.timer {
  justify-content: center !important;
  padding-bottom: 20px !important;
}
</style>
