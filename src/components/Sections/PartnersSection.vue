<template>
    <section :class="$style.section">
      <AppWrapper>
        <div class="row" :class="$style.row">
         <p style="text-align: center; font-size: 20px">Partner with us today <span style="color: #CFB16D">to join and become part of our movement!</span></p>
         <p style="text-align: center; font-size: 20px">We help you to accelerate and scale your future <span style="color: #CFB16D">, serving you<br/> 
            with our product & service packages, technologies, applications & networks,<br/>
            and</span> together we have the opportunity to serve and impact the future of our world<span style="color: #CFB16D">!</span></p>
        <p style="text-align: center; font-size: 26px;margin-bottom: 45px"><span style="color: #CFB16D">"</span>In the moments of our decisions our destiny is shaped!<span style="color: #CFB16D">"</span><br/>
            <span style="color: #CFB16D">Tony Robbins</span></p>
        <p style="text-align: center; font-size: 25px"><span style="color: #CFB16D">Some of our</span> Business <span style="color: #CFB16D">&</span> Technologies Partners<span style="color: #CFB16D">:</span></p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <MediaPicture
              :class="$style.video"
              :src="Video"
              :width="1170"
              :height="300"
            />
            <br />
          </div>
          <p style="text-align: center; font-size: 25px"><span style="color: #CFB16D">A few</span> Examples<span style="color: #CFB16D">:</span></p>
        </div>
  
      </AppWrapper>
    </section>
  </template>
  
  <script lang="ts" setup>
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import Video from '~/assets/images/logos_future.png';
  import MediaPicture from '~/components/Media/MediaPicture.vue';
  
  </script>
  
  <style lang="scss" module>
  .btn {
    float: right;
    color: white;
  }
  .btn_second {
    float: left;
    color: white;
  }
  .section {
    @include padding(0px 0);
  }
  
  .row {
    @include rfs(112px, --gutter-x);
  }
  
  .header {
    @include margin-bottom(55px);
  }
  
  .text {
    @include margin-bottom(55px);
  }
  
  .slide {
    width: auto;
  }
  
  .tab {
    @include padding(23px 46px);
    @include font-size(22px);
    color: $primary;
    cursor: pointer;
    line-height: divide(30, 22);
    user-select: none;
  }
  
  .active {
    background-color: #1c213e;
    color: #fff;
  }
  </style>
  