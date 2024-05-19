<template>
  <section :class="$style.section" style="padding-top: 0px;padding-bottom: 20px;">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-md-6">
          <h1 style="font-size: 48px; padding-bottom:20px; color: #cfb16d">
            FUTURE MULTIVERSE
            <br />
            <span style="color: #ffffff">ECOSYSTEM</span>
          </h1>
          <!--p style="padding-bottom: 10px; color: #cfb16d">
            <span style="font-size: 16px">
              "ANYTHING YOU CAN IMAGINE, YOU CAN BUILD!
              <br />
              AND EVERYTHING YOU CAN BUILD, CAN BE FUNDED!"
            </span>
          </p-->
          <p style="font-size: 14px; padding-right: 30px; line-height: 1.8;">
            Leveraging our advanced tools, including our In-House Cinematic Design Production Studio, our Web3 based Accelerator platform, uniting a hyper-realistic Multivere, LaunchPad and Marketplace, and the methodologies, systems and modeling, amplified by the outstanding global influence and resources of Future Trends Group, we empower nations, organizations, associations, institutions, academies, universities, companies, projects and individuals across the world to actualize, uplift and transform their reality, enabling them to scale and grow quickly. Our platform offers key transformational processes that unlock limitless potentials and open up new realms of possibilities for growth and success. 

          </p>
        </div>
        <div class="col-md-7" :class="$style.mediaCol">
          <div :class="$style.mediaWrapper">
            <MediaPicture :src="Img" :width="433" :height="247" />
          </div>
        </div>
      </div>
      <div class="row">
        <h4 style="text-align: center;">Partner with us today and take your future to the next level.</h4>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Img from 'assets/images/accelerator.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import FutureCatalystAccSection from '~/components/MainSection/FutureCatalystAccSection.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.smallFont {
  font-size: 14px; /* Adjust the font size as per your requirement */
}
.MainSectionHeader p {
  font-size: 38px;
  /* Additional styles specific to the <p> within MainSectionHeader if needed */
}

.custom-font-size {
  font-size: 8px !important; /* Adjust the font size as per your requirement */
}

.section {
  background: radial-gradient(
    $wrapper-inner-width 60% at center bottom,
    #23274a,
    transparent
  );
  @include margin-top(36px);
  padding: calc(2.0375rem + 13.1811023622vw) 0 calc(1.1rem + 2.5511811024vw);
  //@include padding(200px 0 50px);
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}
.row {
  --gutter-x: 0;
  @include rfs(64px, --gutter-y);

  @include media-breakpoint-up(lg) {
    flex-wrap: nowrap;
  }
}

.textCol {
  flex: 1 rem-calc($wrapper-inner-width - 700px);

  @include media-breakpoint-up(lg) {
    @include padding-right($wrapper-padding);
  }
}

.mediaCol {
  flex: 1 1 rem-calc(616px);
}

.header {
  @include margin-bottom(26px);

  p:first-child {
    color: $primary;
  }
}

.mediaWrapper {
  @include padding(25px);
  background-color: #0a0d1d;
  border: 1px solid #232749;
}

.text {
  @include margin-bottom(34px);
}
</style>
