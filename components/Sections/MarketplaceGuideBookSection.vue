<template>
    <section :class="$style.section">
      <AppWrapper>
        <div class="row" :class="$style.row">
          <div class="col-12 col-lg-5" :class="$style.leftCol">
            <MainSectionHeader
              :class="$style.header"
              :title="`FXPO `"
              :invent_title="`GUIDEBOOK`"
              title-lg
            />
            <MainSectionTextContent :class="$style.text">
              <p><span :class="$style.secondaryText">
              <span :class="$style.primaryText">ALL OUR PLATFORMS INFORMATION IN ONE 24-7 ACCESSIBLE & INTERACTIVE DATABASE, 
              ABLE TO ANSWER ANY OF YOUR QUESTIONS AND GUIDE YOU THROUGH YOUR FUTURE!</span>
               <br><br>
                DISCOVER THE FUTURE TRENDS CATALYST (FXPO) AI GUIDEBOOK – YOUR GATEWAY TO A 
                SEAMLESS, 24-7 ACCESSIBLE, AND INTERACTIVE DATABASE. THIS INTELLIGENT GUIDE 
                CONSOLIDATES ALL OUR PLATFORM INFORMATION, PROVIDING YOU WITH INSTANT ANSWERS TO YOUR QUERIES AND 
                EXPERTLY GUIDING YOU THROUGH THE JOURNEY OF SHAPING YOUR FUTURE. HARNESS THE COLLECTIVE WISDOM OF 
                OUR RESOURCES EFFORTLESSLY, ENSURING EVERY QUESTION FINDS ITS SOLUTION AND EVERY PATH LEADS TO SUCCESS. 
                WELCOME TO A NEW ERA OF INFORMED DECISION-MAKING AND STRATEGIC NAVIGATION.
                </span>
              </p>
            </MainSectionTextContent>
            <div :class="$style.visitSection">
              <span style="margin-right: 30px;font-size: 18px;">For more detailed <br />
info visit our Guidebook</span>
              
              <NuxtLink
                :class="$style.visitBtn"
                class="btn btn-sm btn-outline-primary"
                to="https://future-multiverse.gitbook.io/guidebook"
              >
                <p style="margin-bottom: 0px;color: #CFB16D">Visit Now! </p>
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-lg-7" :class="$style.rightCol">
            <div :class="$style.mediaWrapper">
              <div :class="$style.mediaGradient"></div>
              <MediaPicture :src="Guidebook" :width="624" :height="556" />
            </div>
          </div>
        </div>
      </AppWrapper>
    </section>
  </template>
  
  <script lang="ts" setup>
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
  import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
  import Guidebook from '~/assets/images/guidebook-3.jpg';
  import MediaPicture from '~/components/Media/MediaPicture.vue';
  </script>
  
  <style lang="scss" module>
  .section {
    padding: 136px  0 156px;
    text-align: center;
  
    @include media-breakpoint-up(lg) {
      text-align: left;
    }
  }
  
  .primaryText {
    color: $primary; /* Replace $primary with your desired primary text color */
  }
  
  .whitt {
    color: #ffffff; /* Replace $primary with your desired primary text color */
  }
  
  .secondaryText {
   font-size: 12px;
  }

  .leftCol {
    position: relative;
    z-index: 1;
  }
  
  .rightCol {
    @include media-breakpoint-up(lg) {
      padding-left: 58px;
      max-width: none;
    }
  }
  
  .mediaWrapper {
    max-width: rem-calc(624px);
    margin: 0 auto;
    position: relative;
  
    @include media-breakpoint-up(lg) {
      max-width: none;
      margin: 0;
    }
  }
  
  .mediaGradient {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    width: wrap-calc(1160px, 620px);
  
    &::before {
      background: radial-gradient(50% 40% at center, #23274a, transparent);
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
  
  .header {
    margin-bottom: 30px;
  
    h2 {
      line-height: divide(55, 50);
      @include media-breakpoint-up(lg) {
        max-width: rem-calc(400px);
      }
    }
  }
  
  .text {
    margin-bottom: 54px;
  
    @include media-breakpoint-up(lg) {
      max-width: rem-calc(400px);
    }
  }
  
  .visitSection {
    align-items: center;
    display: flex;
    margin-top: auto;
    flex-direction: column;
  
    @include media-breakpoint-up(lg) {
      flex-direction: row;
    }
  }
  
  .visitTitle {
    font-size: 22px;
    margin-bottom: 32px;
    line-height: divide(30, 22);
    color: $primary;
    font-weight: 600;
  
    @include media-breakpoint-up(lg) {
      padding-right: 24px;
      margin-bottom: 0;
      max-width: rem-calc(270px);
    }
  }
  
  .visitBtn {
    flex-shrink: 0;
    min-width: rem-calc(130px);
    color: #ffffff;
  }
  </style>
  