<template>
  <section :class="$style.section" style="padding-top: 0px;">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-md-6">
          <h1 style="font-size: 50px; color: #cfb16d">
            FUTURE CATALYST
            <br />
            <span style="color: #ffffff">ACCELERATOR</span>
          </h1>
          <p style="padding-bottom: 10px; color: #cfb16d">
            <span style="font-size: 16px">
              "ANYTHING YOU CAN IMAGINE, YOU CAN BUILD!
              <br />
              AND EVERYTHING YOU CAN BUILD, CAN BE FUNDED!"
            </span>
          </p>
          <p style="font-size: 12px; padding-right: 30px">
            The Future Catalyst Accelerator is the one-of-a-kind digital
            acceleration platform created to transform the way impact driven
            creators with any initiatives are able to transition into and master
            the world of tomorrow and win within the fast evolving economic
            landscape of the future. With the Future Accelerator nations,
            organizations, institutions, academies, universities, companies,
            foundations, projects and individuals all have the unparalleled
            opportunity to harness the power of tokenization on Future
            Blockchain, getting publicly listed on our Launch Pad and positioned
            in our EXPO & Multiverse, opening the doors to secure funding from
            investors, all in cooperation and with the approval of leading
            international Law Firms & Regulators with full legitimacy.
            <br />
            <br />
            Not only does our platform provide access to essential resources
            such as design, branding, compliance, marketing, and other
            consulting services, but it also enables users to bring their
            projects, products, services, and assets to life in the Future EXPO,
            Multiverse and Marketplace. This immersive environment creates
            seamless experiences, brings in massive clients and parters to them,
            and thereby accelerates trade and capital, ensuring that every
            vision and idea has the assurances to not only be implemented but
            more so to thrive and flourish.
          </p>
          <br />
          <br />
          <NuxtLink to="/" class="btn btn-sm btn-outline-primary">
            <p style="font-weight: 100;margin-bottom: 0px;">
              EXPLORE
              <br />
              <span style="color: #ffffff">(COMING NEXT)</span>
            </p>
          </NuxtLink>
        </div>
        <div class="col-md-7" :class="$style.mediaCol">
          <div :class="$style.mediaWrapper">
            <MediaPicture :src="Img" :width="663" :height="477" />
          </div>
        </div>
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
  @include padding(30px);
  background-color: #0a0d1d;
  border: 1px solid #232749;
}

.text {
  @include margin-bottom(34px);
}
</style>
