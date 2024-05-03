<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col" :class="$style.textCol">
          <MainSectionHeader
            :class="$style.header"
            :title="`FUTURE CATALYST Accelerator`"
          >
            <p> <span style="font-size: 18px;"> 
              "ANYTHING YOU CAN IMAGINE, YOU CAN BUILD!<br> AND ANYTHING YOU CAN
              BUILD, CAN BE FUNDED!" </span>
            </p>
          </MainSectionHeader>
          <MainSectionTextContent :class="[$style.text, $style.smallFont]">
            <p>
              The Future Catalyst Accelerator is the one-of-a-kind digital
              acceleration platform created to transform the way impact driven
              creators with any initiatives are able to transition into and
              master the world of tomorrow and win within the fast evolving
              economic landscape of the future. With the Future Accelerator
              nations, organizations, institutions, academies, universities,
              companies, foundations, projects and individuals all have the
              unparalleled opportunity to harness the power of tokenization on
              Future Blockchain, getting publicly listed on our Launch Pad and
              positioned in our EXPO & Multiverse, opening the doors to secure
              funding from investors, all in cooperation and with the approval
              of leading international Law Firms & Regulators with full
              legitimacy.
              <br />
              <br />
              
            </p>
          </MainSectionTextContent>
          <NuxtLink to="/" class="btn btn-sm btn-outline-primary">
            EXPLORE (COMING NEXT)
          </NuxtLink>
        </div>
        <div class="col" :class="$style.mediaCol">
          <div :class="$style.mediaWrapper">
            <MediaPicture :src="Img" :width="563" :height="377" />
          </div>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Img from 'assets/images/accelerator.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
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

  @include padding(200px 0 50px);
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
  flex: 1  rem-calc($wrapper-inner-width - 700px);

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
