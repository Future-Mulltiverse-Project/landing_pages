<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="968" layout="fill" />
    <AppWrapper>
      <h3 :class="$style.heading">It´s time for the future!</h3>
      <h2 :class="$style.title">
        Onboard <span :class="$style.primaryText"> Now</span> & Save your <span :class="$style.primaryText"> Seat</span><br/> for the <span :class="$style.primaryText"> Launch</span> of the <span :class="$style.primaryText">Iamverse</span>!
      </h2>
      <h3 :class="$style.timerTitle"><span style="color: #CFB16D;">Pre-Launch Mint Event Start in: </span></h3>
      <LaunchingTimer
        :class="$style.timer"
        :datetime="config.public.MINT_EVENT_START_IN"
      />
      <div style="padding-top: 100px;">
        <button type="button" style="border-color: #ffffff" class="btn btn2 btn-outline-primary" :class="$style.btn">
        <p style="margin-bottom: 0px;color:#CFB16D; font-weight:700;">ONBOARD <span style="color: #ffffff; font-weight: 700"> now </span> </p>
        </button> 
        <button type="button" style="background-color: #CFB16D;" class="btn btn2 btn-primary" :class="$style.btn">
        <p style="margin-bottom: 0px;"><span style="color: #181C36; font-weight: 700">Register for our newsletter </span> </p>
        </button> 
        <!--button type="button" style="background-color: #CFB16D;" class="btn btn2 btn-primary" :class="$style.btn">
          REGISTER FOR OUR NEWSLETTER
        </button-->
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import LaunchingTimer from '~/components/Home/Launching/LaunchingTimer.vue';
import { useRuntimeConfig } from '#imports';
import Bg from '~/assets/images/prelaunch-bg.png';
import MediaPicture from '~/components/Media/MediaPicture.vue';

const config = useRuntimeConfig();
</script>

<style lang="scss" module>
.section {
  @include padding(104px 0 448px);
  
  padding-bottom: 230px !important;
  text-align: center;
  position: relative;
}

.primaryText {
  color: $primary; /* Replace $primary with your desired primary text color */
}


.heading {
  @include font-size(28px);
  @include margin-bottom(28px);
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 28);
}

.title {
  @include font-size(35px);
  @include margin-bottom(64px);
  line-height: divide(55, 45);
  margin-left: auto;
  margin-right: auto;
  max-width: 46ch;
  text-transform: uppercase;
  margin-bottom: 00px;
}

.btn {
  --btn-bg: rgba(255, 255, 255, 0);
  --btn-color: #0a0d1d;
  min-width: rem-calc(256px);
  max-width: 100%;
  margin-bottom: 20px;
  margin-right: 10px;
  color: #ffffff;
  font-weight: 100
}


.timerTitle {
  @include font-size(18px);
  @include margin-top(300px);
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 18);
  
}

.timer {
  @include margin-bottom(2px);
  justify-content: center;
  
}
</style>
