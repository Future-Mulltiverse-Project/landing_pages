<template>
  <section :class="$style.section" class="pt-12 pb-12">
    <MediaPicture
      :media-class="$style.bg"
      layout="fill"
      :src="Bg"
      :width="1440"
      :height="840"
    />
    <div :class="$style.gradient" />
    <AppWrapper>
      <div :class="$style.formContainer"class='pb-12'>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-5" :class="$style.row">
          <div class="md:col-span-3">
            <h2 :class="$style.title">
              JOIN OUR<span :class="$style.primaryText"> NEWSLETTER LIST TODAY</span> FOR ALL <span :class="$style.primaryText">NEWS</span> & <span :class="$style.primaryText">UPDATES</span>
            </h2>
          </div>
          <div class="md:col-span-2">
            <JoinForm :class="$style.form" />
          </div>
        </div>
      </div>
      <p :class="$style.text1">We can´t wait to meet you in the <br> <span style="font-size: 66px; color: white;">FUTURE MULTIVERSE</span><span style="font-size: 66px;">!</span></p>
      <p :class="$style.text2">Your<span style="color: white;"> home</span> of <span style="color: white;">inspiration <br /> </span> for the <span style="color: white;">future</span></p>
    </AppWrapper>
  </section>
</template>
<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import JoinForm from '~/components/Join/JoinForm.vue';
import Bg from '~/assets/images/join-bg-2.jpg';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  
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
  @include font-size(35px);
  @include margin-bottom(85px);
  @include margin-top(10px);
  line-height: math-div(30, 26);
  color: $primary;
  text-align: center;
  font-weight: 600;
}

.text2 {
  @include font-size(62px);
  font-weight: 600;
  line-height: math-div(55, 45);
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  color: $primary;
  margin-bottom: 30%;
}
</style>
