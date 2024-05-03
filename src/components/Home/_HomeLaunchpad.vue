<template>
  <MainSection
    angle-right-y-both
    has-bg-behind
    has-gradient
    :class="$style.section"
  >
    <AppWrapper :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-12 col-xl-6" :class="$style.leftCol">
          <SectionHeader :class="$style.header">
            <template #title>
              <span>FutureX</span>
              LaunchPad
            </template>
            <div :class="$style.heading">
              <p>
                “The Future isn’t limited by space or time, only by our
                consciousness.
              </p>
              <p>
                Anything you can imagine, can be built. And everything that can
                be built, can be funded.”
              </p>
            </div>
          </SectionHeader>
          <TextContent :class="$style.text">
            <p>
              The FutureX LaunchPad is a unique digital asset platform that
              accelerates the transition of pioneering projects and businesses
              to the marketplace and internet of the future.
            </p>
            <p>
              With our FutureX LaunchPad we create the opportunity for companies
              and asset owners to raise funds from investors through
              tokenization on the FutureX Blockchain, to access design,
              branding, marketing and consulting services, and to make products,
              services and assets immersively experiencable and tradable in the
              FutureX EXPO.
            </p>
          </TextContent>
          <div class="row" :class="$style.actionGroup">
            <div class="col-auto">
              <a
                ref="noopener noreferrar"
                :class="$style.btn"
                href="#"
                target="_blank"
                class="btn btn-outline-primary"
              >
                VISIT LAUNCHPAD SITE
              </a>
            </div>
            <div class="col-auto">
              <SupportLink :class="$style.supportLink" />
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-6" :class="$style.rightCol">
          <div :class="$style.imgWrapper">
            <div :class="$style.blur"></div>
            <MediaPicture
              src="/images/launchpad-2w.png"
              :width="673"
              :height="1062"
            />
          </div>
        </div>
      </div>
    </AppWrapper>
  </MainSection>
</template>
<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import MainSection from '~/components/Section/MainSection.vue';
import SectionHeader from '~/components/utilities/SectionHeader.vue';
import SupportLink from '~/components/utilities/SupportLink.vue';
import TextContent from '~/components/utilities/TextContent.vue';
</script>

<style lang="scss" module>
.section {
  --sectionGradient: linear-gradient(180deg, #212646 0%, transparent 58.66%);
}

.wrapper {
  @include padding-top(108px);
  padding-bottom: rem-calc(68px);
}

.row {
  --gutter-x: 0;
  --gutter-y: #{rem-calc(64px)};
  justify-content: center;
}

.leftCol {
  padding-top: wrap-calc(84px);
  position: relative;
  text-align: center;
  z-index: 1;

  @include media-breakpoint-up(xl) {
    padding-right: wrap-calc(100px);
    text-align: left;
  }
}

.rightCol {
  max-width: rem-calc(674px);

  @include media-breakpoint-up(xl) {
    max-width: none;
  }
}

.header {
  margin-bottom: rem-calc(44px);
}

.heading {
  @include font-size(18px);
  color: $primary;
  font-weight: 700;
  line-height: math-div(30, 18);
  margin: rem-calc(34px) auto 0;

  @include media-breakpoint-up(xl) {
    margin: rem-calc(34px) 0 0;
    max-width: none;
  }

  p {
    margin-bottom: rem-calc(30px);

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.text {
  margin: 0 auto rem-calc(64px);
  max-width: 80ch;

  @include media-breakpoint-up(xl) {
    margin: 0 0 rem-calc(64px);
    max-width: none;
  }
}

.actionGroup {
  --gutter-x: #{rem-calc(40px)};
  --gutter-y: #{rem-calc(40px)};
  align-items: center;
  justify-content: center;

  @include media-breakpoint-up(xl) {
    justify-content: flex-start;
  }
}

.btn {
  padding-left: rem-calc(34px);
  padding-right: rem-calc(34px);
}

.supportLink {
  max-width: rem-calc(184px);
}

.imgWrapper {
  margin-bottom: wrap-calc(-104px, math-div($wrapper-inner-width, 2));
  margin-right: wrap-calc(-106px, math-div($wrapper-inner-width, 2));
  width: wrap-calc(674px, math-div($wrapper-inner-width, 2));
  margin-left: auto;
  position: relative;
}

//.blur {
//  background: #23274A;
//  width: wrap-calc(788px, 534px);
//  position: absolute;
//  top: 46.5%;
//  left: 42.5%;
//  transform: translate(-50%, -50%);
//  border-radius: 50%;
//  filter: blur(150px);
//
//  &::before {
//    content: "";
//    display: block;
//    padding-bottom: 112%;
//  }
//}

.blur {
  width: wrap-calc(1368px, 534px);
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    rgba(#23274a, 1),
    rgba(#23274a, 0.3) 30%,
    rgba(#23274a, 0) 70%
  );
  top: 46.5%;
  left: 42.5%;
  transform: translate(-50%, -50%);

  &:before {
    padding-bottom: 105.482%;
    display: block;
    content: '';
  }
}
</style>
