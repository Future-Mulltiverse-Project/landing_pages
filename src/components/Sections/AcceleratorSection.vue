<template>
  <section :class="$style.section" class=" pb-12 " style="padding-top: 0px;">
    <AppWrapper>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2" :class="$style.row">
        <div class="md:order-first lg:pl-0 lg:pr-0 pl-4 pr-4">
          <h1 class="text-left font-medium text-5xl " style=" color: #cfb16d">
            FUTURE MULTIVERSE
            <span class="text-white">ECOSYSTEM</span>
          </h1>
          <!--p style="padding-bottom: 10px; color: #cfb16d">
            <span style="font-size: 16px">
              "ANYTHING YOU CAN IMAGINE, YOU CAN BUILD!
              <br />
              AND EVERYTHING YOU CAN BUILD, CAN BE FUNDED!"
            </span>
          </p-->
          <p style="margin-top: 20px; padding-left: 0px;" class="mb-5 lg:mb-0 text-left text-sm font-normal leading-7 px-4 md:px-0" >
            Leveraging our advanced tools, including our In-House Cinematic Design Production Studio, our Web3 based Accelerator platform, uniting a hyper-realistic Multivere, LaunchPad and Marketplace, and the methodologies, systems and modeling, amplified by the outstanding global influence and resources of Future Trends Group, we empower nations, organizations, associations, institutions, academies, universities, companies, projects and individuals across the world to actualize, uplift and transform their reality, enabling them to scale and grow quickly. Our platform offers key transformational processes that unlock limitless potentials and open up new realms of possibilities for growth and success. 

          </p>
        </div>
        <div :class="$style.mediaCol" class=" lg:pl-0 lg:pr-0 pl-4 pr-4" >
          <div :class="$style.mediaWrapper">
            <MediaPicture :src="Img" :width="433" :height="247" />
          </div>
        </div>
      </div>
      <div class="row">
        <h4 class="font-medium mt-12 " style="text-align: center;padding: 0px; ">Partner with us today and take your future to the next level.</h4>
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
  //@include margin-top(26px)
  //padding-bottom: 50px !important;
  //padding: calc(2.0375rem + 13.1811023622vw) 0 calc(1.1rem + 2.5511811024vw);
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
