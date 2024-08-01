<template>
  <section :class="$style.section" style="padding-top: 70px !important; padding-bottom: 80px !important;">
    <MediaPicture :src="Bg" :width="1400" :height="428" layout="fill" />
    <AppWrapper >
      <h2 :class="$style.title">
        The <span :class="$style.title_gold"> Breakthrough </span> and <span :class="$style.title_gold"> Legacy </span><br/> we are able to <span :class="$style.title_gold">create together </span>
      </h2>
      <h3 :class="$style.heading">
        A new world & a sustainable, meaningful and inspiring future for
        everyone!
      </h3>
      <p style="color:white">Partner with us today <span :class="$style.title_gold">to join and become part of our movement!</span></p>
      <p style="color: white;">We help you to accelerate and scale your future<span :class="$style.title_gold">, serving you <br/> with our product & service packages, technologies, applications & networks,<br/> and </span>together we have the opportunity to server and impact the future of our world<span :class="$style.title_gold">!</span></p>
      <h4  style="text-align: center;color:white" ><span :class="$style.title_gold">"</span>In the moments of our decisions, destiny is shaped!<span :class="$style.title_gold">"</span><br/><span :class="$style.title_gold" style="text-align: center;">Tony Robbins</span></h4>
    </AppWrapper>
  </section>
  
  <AppWrapper>
  <div class="row" style="margin-top: 35px;">
          <div class="col-md-12">
            <h4 style="color: white; text-align: center" ><span :class="$style.title_gold" >Are you</span> Ready<span :class="$style.title_gold"> ?</span> <br/> Join Us <span :class="$style.title_gold">creating the future today!</span></h4>
          <br/>
          </div>
          <div class="row">
          <div class="col-md-3" ></div>
          <div class="col-md-2" >
            <NuxtLink
              to="https://future-multiverse.gitbook.io/guidebook"
              :class="$style.btn_second"
              class="btn btn-sm btn-outline-primary"
            >
              <span>GUIDE<span style="color: #ffffff">BOOK</span></span>
            </NuxtLink>
          </div>
          <div class="col-md-3">
            <NuxtLink
              to="https://www.futuremultiverse.com/packages"
              :class="$style.btn_second"
              class="btn btn-sm btn-outline-primary"
            >
              <span style="color: white;">PRODUCT & SERVICE <span style="color: #CFB16D"> PACKAGES</span></span>
            </NuxtLink>
          </div>
          <div class="col-md-3">
            <NuxtLink
              to="https://sandbox.futuremultiverse.dev"
              :class="$style.btn_second"
              class="btn btn-sm btn-outline-primary"
            >
              <span style="color: white;"><span style="color: #CFB16D">ONBOARD</span> NOW</span>
            </NuxtLink>
          </div>
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
  @include padding(145px 0 396px);
  background-color: #0A0D1D;
  color: $dark;
  text-align: center;
  position: relative;
}

.heading {
  @include font-size(28px);
  @include margin-bottom(42px);
  color: $primary;
  font-weight: 600;
  line-height: divide(35, 28);
  max-width: rem-calc(640px);
  margin-left: auto;
  margin-right: auto;
  color: white;
}

.title_gold{
  color: #CFB16D ;
}
.title {
  @include font-size(40px);
  @include margin-bottom(42px);
  line-height: divide(55, 45);
  margin-left: auto;
  margin-right: auto;
  max-width: 29ch;
  text-transform: uppercase;
  color: white ;
}

.btn {
  --btn-bg: rgba(255, 255, 255, 0.2);
  --btn-color: #0a0d1d;
  min-width: rem-calc(256px);
  max-width: 100%;
}

.timerTitle {
  @include font-size(18px);
  color: $primary;
  font-weight: 600;
  line-height: divide(30, 18);
  margin-bottom: rem-calc(2px);
}

.btnText {
  @include font-size(18px);
  line-height: divide(30, 18);
  max-width: rem-calc(240px);
  margin: 0 auto rem-calc(18px);
}

.timer {
  @include margin-bottom(22px);
  justify-content: center;
}
</style>
