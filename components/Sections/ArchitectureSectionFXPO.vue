<template>
  <div
    style="
      background: url('_nuxt/assets/images/design_philosophy.png'), #0A0D1D;
      background-repeat: no-repeat;
      background-size: cover;
      max-width: 100%;
    "
  >
    <section :class="$style.section">
      <AppWrapper>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-0 md:pt-10" 
          :class="$style.row"
        >
          <div :class="$style.leftCol" class=" pr-0 lg:pr-20 pt-8 lg:pt-0 " >
            <div class="grid grid-cols-1 gap-2">
              <div>
                <h2
                  class="font-medium mb-5 lg:mb-3.5 "
                  :class="$style.header"
                  style="font-size: 40px !important;"
                >
                  OUR DESIGN PHILOSOPHY
                  <br />
                  & ARCHITECTURE
                </h2>
                <p style="font-size: 20px; font-weight: 400; margin-bottom: 10px" :class="$style.gold">
                  Our design philosophy not only creates an aesthetically
                  beautiful environment, but also seeks to inspire greater
                  consciousness in the world.
                </p>
                <MainSectionTextContent>
                  <p style="font-size: 17px; font-weight: 400;">
                    Over the last years we have crafted a revolutionary Multiverse
                    & EXPO platform, fusing Feng Shui and Golden Geometry to
                    enable the creation of the bespoke, visually captivating
                    environments for the diverse usages of our economic &
                    financial mega impact engines. Our adherence to these design
                    tenets creates a harmonious, dynamic, bustling virtual
                    experience, meticulously realized by our skilled artists and
                    architects.
                  </p>
                </MainSectionTextContent>
              </div>
              <div>
                <img
                  :src="designTool"
                  :width="550"
                  :height="370"
                  layout="fill"
                  style="margin-top: 30px"
                />
              </div>
            </div>
          </div>
          <div :class="$style.rightCol">
            <div :class="$style.schemeWrapper">
              <div :class="$style.schemeInner" class="pt-7 lg:pt-16">
                <h3 :class="$style.schemeTitle">
                  Feng Shui <br />/ Golden Geometry
                </h3>
                <p :class="$style.schemeText">
                  At the core of the Future Multiverse & FXPO lies a world of beauty, harmony and balance, meticulously crafted using the principles of Fibonacci sequences and Golden Geometry, producing greatest impact with maximum financial results. 
                </p>
                <div :class="$style.torusWrapper" style="margin-top: 10px !important">
                  <div :class="$style.torusHoldeer">
                    <div :class="$style.schemeContainer">
                      <div :class="$style.scheme">
                        <MediaPicture
                          :src="Scheme"
                          :width="1440"
                          :height="890"
                        />
                      </div>
                    </div>
                    <div :class="$style.torus">
                      <MediaPicture
                        :src="Torus"
                        :width="853"
                        :height="593"
                      />
                    </div>
                    <button :class="$style.torusBtn" type="button">
                      <RotationIcon />
                    </button>
                  </div>
                </div>
                <div
                  class="grid grid-cols-1 md:grid-cols-2 gap-3"
                  :class="$style.btnRow"
                >
                  <div class="col-auto" :class="$style.btnCol">
                    <button
                      class=" btn-outline-primary"
                      style="
                        padding: 8px;
                        font-weight: 500;
                        padding-top: 15px !important;
                        padding-right: 30px !important;
                        padding-left: 30px !important;
                        border-color: #ffffff;
                        padding-bottom: 15px !important;
                      "
                      type="button"
                    >
                      ENTER
                      <span style="color: #CFB16D;"
                        >FUTURE EXPO<ThreeSixtyIcon style="margin-left: 10px; width: 20px; float: right; margin-top: 6px; "/></span
                      >
                    </button>
                  </div>
                  <div class="col-auto" :class="$style.btnCol">
                    <button
                      class="btn btn-outline-primary"
                      style="font-weight: 500;"
                    >
                      <span
                        >Explore</span>
                      <span style="color: #CFB16D;" >
                      Map
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppWrapper>
    </section>
  </div>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import Torus from '~/assets/images/torus-2.png';
import ThreeSixtyIcon from '~/icons/ThreeSixtyIcon.vue';
import Scheme from '~/assets/images/architecture.svg';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import RotationIcon from '~/icons/RotationIcon.vue';
import designTool from '~/assets/images/design_tool.png';
</script>

<style lang="scss" module>
.section {
  //background-color: $dark;
  color: #fff;
  @include padding(0px 0 25px);
  padding-bottom: 50px !important;
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}
.gold {
  color: #cfb16d;
}
.row {
  @include rfs(64px, --gutter-y);
  --gutter-x: 0;
  align-items: center;

  @include media-breakpoint-up(lg) {
    flex-wrap: nowrap;
  }
}

.leftCol {
  position: relative;
  z-index: 1;

}

.header {
  @include margin-bottom(30px);

  h2 {
    @include margin-bottom(33px);
  }

  p {
    @include media-breakpoint-up(lg) {
      max-width: rem-calc(450px);
    }
  }
}

.schemeWrapper {
  max-width: rem-calc(535px);
  margin: 0 auto;

  @include media-breakpoint-up(lg) {
    margin: 0;
  }
}

.schemeInner {
  /*padding-top: 65px;*/
}

.schemeTitle {
  @include font-size(26px);
  @include margin-bottom(38px);
  line-height: divide(30, 26);
  font-weight: 600;
  color: #ffffff;
  max-width: rem-calc(256px);
  margin-left: auto;
  text-align: right;
  position: relative;
  z-index: 1;
}

.schemeText {
  @include font-size(16px);
  font-weight: 600;
  font-family: 'Nunito Sans', sans-serif;
  margin-bottom: 0;
  margin-left: auto;
  max-width: rem-calc(275px);
  text-align: right;
  position: relative;
  z-index: 1;
}

.schemeContainer {
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: absolute;
  right: wrap-calc(25px, 526px);
  top: 15.9%;
  transform: translateY(-50%);
  width: wrap-calc(680px, 526px);
}

.scheme {
  flex-shrink: 0;
  width: wrap-calc(1440px, 680px);
}

.torusWrapper {
  margin: wrap-calc(103px, 535px) 0 wrap-calc(25px, 535px);
  margin-bottom: 0px !important;
  position: relative;
  width: wrap-calc(526px, 535px);
}

.torusHoldeer {
  padding-bottom: 75.3%;
  position: relative;
}

.torus {
  left: 51.7%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.torusBtn {
  background: transparent;
  border: 0;
  color: $primary;
  height: rem-calc(46px);
  padding: 0;
  position: absolute;
  top: 0;
  left: wrap-calc(7px, 526px);
  margin-top: wrap-calc(7px, 526px);
  width: rem-calc(46px);
  transition: color 150ms ease-in-out;

  &:hover {
    color: $yellow-200;
  }
}

.btnRow {
  --gutter-x: #{rem-calc(16px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;
  position: relative;
}

.btnCol {
  flex: 0 1 rem-calc(211px);
  min-width: fit-content;
  max-width: 100%;
}

.btn {
  width: 100%;
}

.spaceContainer {
  @include margin-top(102px);
  text-align: left;
}

.spaceLabel {
  @include font-size(18px);
  line-height: divide(24, 18);
  font-weight: 600;
  color: $primary;
  margin-bottom: rem-calc(8px);
}

.spaceGroup {
  display: flex;
  flex-wrap: wrap;
  margin: rem-calc(0 -10px);
}

.spaceValue {
  @include font-size(55px);
  line-height: 1;
  color: $primary;
  font-weight: 700;
  margin: rem-calc(0 10px);

  sup {
    font-size: em-calc(32, 55);
  }
}

.spaceText {
  @include font-size(16px);
  align-self: center;
  max-width: rem-calc(220px);
  margin: rem-calc(0 10px);
}
</style>