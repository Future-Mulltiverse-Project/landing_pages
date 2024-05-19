<template>
    <section :class="$style.section">
      <MediaPicture
        :media-class="$style.bg"
        layout="fill"
        :src="Bg"
        :width="1440"
        :height="840"
      />
      <div :class="$style.gradient" />
      <AppWrapper>
        <div :class="$style.formContainer">
          <div class="row" :class="$style.row">
            <div class="col-12 col-lg">
              <h2 :class="$style.title">
                JOIN OUR MAILING LIST TO GET THE LATEST NEWS
    </h2>
            </div>
            <div class="col-12 col-lg-auto">
              <JoinForm :class="$style.form" />
            </div>
          </div>
        </div>
        <div :class="$style.containerStyle">
          <p :class="$style.text1">We can´t wait to meet you in the FXPO!</p>
          <p :class="$style.text2">Your home of inspiration<br />for the future</p>
        </div>
      </AppWrapper>
    </section>
  </template>
  <script lang="ts" setup>
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import JoinForm from '~/components/Join/JoinForm.vue';
  import Bg from '~/assets/images/join-bg.jpg';
  import MediaPicture from '~/components/Media/MediaPicture.vue';
  </script>
  
  <style lang="scss" module>
  .section {
    @include padding-bottom(100px);
    
    color: #0a0d1d;
    position: relative;
    overflow: hidden;
  }
  
  .primaryText {
    color: $primary; /* Replace $primary with your desired primary text color */
  }
  
  .bg {
    object-position: 50% 0;
  }
  .containerStyle{
    //height: 350px;
    //display: flex;
    align-items: flex-end;
    //margin-bottom: 30%;
    padding-top: 30%;
  }
  
  .gradient {
    background: linear-gradient(
      to bottom,
      rgba(#e3e2e5, 0) 0%,
      rgba(#e3e2e5, 0) 90%,
      #e3e2e5 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .formContainer {
    @include padding(62px 0 54px);
  
    border-bottom: 1px solid rgba(#fff, 0.7);
    margin-bottom: 16%;
  }
  
  .row {
    --gutter-x: #{rem-calc(30px)};
    --gutter-y: #{rem-calc(30px)};
    align-items: center;
    text-align: center;
  
    @include media-breakpoint-up(lg) {
      text-align: left;
    }
  }
  
  .form {
    max-width: rem-calc(474px);
    width: 100%;
    margin: 0 auto;
  
    @include media-breakpoint-up(lg) {
      max-width: none;
      margin: 0;
      width: rem-calc(474px);
    }
  }
  
  .title {
    @include font-size(20px);
    color: #fff;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0;
  }
  
  .text1 {
    @include font-size(26px);
    @include margin-bottom(auto);
    @include margin-top(10px);
    line-height: math-div(30, 26);
    color: #ffffff;
    text-align: center;
    padding-bottom: 15px;
  }
  
  .text2 {
    @include font-size(45px);
    font-weight: 700;
    line-height: math-div(55, 45);
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    max-width: rem-calc(720px);
    color: #000000;
  }
  </style>
  