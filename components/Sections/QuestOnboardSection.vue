<template>
  <section :class="$style.section" class="pt-12 pb-12" >
    <MediaPicture :src="Bg" :width="1400" :height="428" layout="fill" />
    <AppWrapper >
      <h2 :class="$style.title">
        The <span :class="$style.title_gold"> Breakthrough </span> & <span :class="$style.title_gold"> Legacy </span><br/> we are able to <span :class="$style.title_gold">create together </span>
      </h2>
      <h3 :class="$style.heading">
        A new world & a sustainable, meaningful and inspiring future for
        everyone!
      </h3>
      <p style="color:white; text-decoration: underline; ">Partner with us today <span :class="$style.title_gold">to join and become part of our movement!</span></p>
      <p style="color: white;">We help you to accelerate and scale your future<span :class="$style.title_gold">, serving you <br/> with our product & service packages, technologies, applications & networks,<br/> and </span>together we have the opportunity to server and impact the future of our world<span :class="$style.title_gold">!</span></p>
      <p  style="text-align: center;color:white; margin-bottom: 0px; font-style: italic;" ><span :class="$style.title_gold" >"</span>In the moments of our decisions, destiny is shaped!<span :class="$style.title_gold">"</span><br/></p>
      <p :class="$style.title_gold" style="text-align: center;">Tony Robbins</p>
    </AppWrapper>
  </section>
  
  <AppWrapper>
    <div class="mt-6">
      <div class="text-center">
        <h4 style="color: white; text-align: center" ><span :class="$style.title_gold" >Are you</span> Ready<span :class="$style.title_gold"> ?</span> <br/> Join Us <span :class="$style.title_gold">creating the future today!</span></h4>
      </div>
      <div class="flex justify-center mt-4 flex-wrap"> 
        <NuxtLink
          :class="$style.btn_second"
          class="btn btn-sm btn-outline-primary mr-5"
        >
          <span style="color: #CFB16D">GUIDE<span class="text-white">BOOK</span></span>
        </NuxtLink>
        <NuxtLink
          :class="$style.btn_second"
          class="btn btn-sm btn-outline-primary mr-5 "
        >
          <span style="color: white;">PRODUCT & SERVICE <span style="color: #CFB16D"> PACKAGES</span></span>
        </NuxtLink>
        <NuxtLink
          :class="$style.btn_second"
          class="btn btn-sm btn-outline-primary mr-5"
        >
          <span style="color: white;"><span style="color: #CFB16D">ONBOARD</span> NOW</span>
        </NuxtLink>
      </div>
    </div>
    </AppWrapper>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import Bg from '~/assets/images/breakthrough_bg.png';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  background-color: #0A0D1D;
  color: $dark;
  text-align: center;
  position: relative;
}

.heading {
  font-size: 28px;
  margin-bottom: 42px;
  color: $primary;
  font-weight: 600;
  line-height: divide(35, 28);
  max-width: rem-calc(640px);
  margin-left: auto;
  margin-right: auto;
  color: white;
}
p{
  font-size: 19px;
}
.title_gold{
  color: #CFB16D ;
}
.title {
  font-size: 40px;
  margin-bottom: 42px;
  line-height: divide(55, 45);
  margin-left: auto;
  margin-right: auto;
  max-width: 32ch;
  text-transform: uppercase;
  color: white ;
  font-weight: 600;
}

.btn {
  --btn-bg: rgba(255, 255, 255, 0.2);
  --btn-color: #0a0d1d;
  min-width: rem-calc(256px);
  max-width: 100%;
}

.timerTitle {
  font-size: 18px;
  color: $primary;
  font-weight: 600;
  line-height: divide(30, 18);
  margin-bottom: rem-calc(2px);
}

.btnText {
  font-size: 18px;
  line-height: divide(30, 18);
  max-width: rem-calc(240px);
  margin: 0 auto rem-calc(18px);
}

.timer {
  margin-bottom: 22px;
  justify-content: center;
}
</style>
