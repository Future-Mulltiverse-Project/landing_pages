<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :class="$style.header"
            :title="`FXPO universe <strong>ARCHITECTURE</strong>`"
          >
            <p>
              <strong>
                Our design philosophy not only creates an aesthetically
                beautiful environment but also seeks to inspire greater
                consciousness in the world.
              </strong>
            </p>
          </MainSectionHeader>
          <MainSectionTextContent>
            <p>
              By adhering to these principles, we facilitate a smooth transition
              from the constraints of traditional, rigid structures to a more
              dynamic, interconnected, and innovative era. Every element in our
              Expo, from the smallest details to the grandest structures, has
              been designed and constructed by our talented team of artists and
              architects from scratch. The use of Fibonacci sequences and Golden
              Geometry ensures a seamless flow and an innate sense of balance
              throughout the virtual world, making the experience both immersive
              and visually breathtaking for visitors. We understand the
              importance of striking a balance between maintaining the essence
              of our vision and ensuring that it resonates with a diverse
              audience. As such, our approach is to present these concepts in a
              way that is accessible and appealing to everyone, regardless of
              their background or beliefs. The originality and uniqueness of our
              designs are protected by copyrights, ensuring that our Expo
              remains a distinctive and unparalleled destination in the
              ever-evolving digital landscape. By integrating these timeless
              principles into the fabric of our virtual world, we hope to
              encourage a broader understanding of the interconnectedness of all
              things and the potential for positive change in the digital age.
            </p>
            <p>
              Explore the enchanting world of the FXPO Expo, where the ancient
              wisdom of Fibonacci and Golden Geometry come together to create a
              mesmerizing and unforgettable experience. The FXPO Expo serves as
              a bridge between the old and the new, ushering in a future where
              creativity, innovation, and harmony can thrive together,
              connecting visitors to the innate beauty of the universe and the
              endless potential of the digital realm.
            </p>
          </MainSectionTextContent>
        </div>
        <div class="col-12 col-lg-6" :class="$style.rightCol">
          <div :class="$style.schemeWrapper">
            <div :class="$style.schemeInner">
              <h3 :class="$style.schemeTitle">
                Fibonacci Numbers / Golden Ratio
              </h3>
              <p :class="$style.schemeText">
                At the core of the FXPO Expo lies a world of beauty, harmony,
                and balance, meticulously crafted using the principles of
                Fibonacci sequences and Golden Geometry.
              </p>
              <div :class="$style.torusWrapper">
                <div :class="$style.torusHoldeer">
                  <div :class="$style.schemeContainer">
                    <div :class="$style.scheme">
                      <MediaPicture :src="Scheme" :width="1440" :height="890" />
                    </div>
                  </div>
                  <div :class="$style.torus">
                    <MediaPicture :src="Torus" :width="1053" :height="793" />
                  </div>
                  <button :class="$style.torusBtn" type="button">
                    <RotationIcon />
                  </button>
                </div>
              </div>
              <div class="row" :class="$style.btnRow">
                <div class="col-auto" :class="$style.btnCol">
                  <button
                    class="btn btn-outline-primary"
                    :class="$style.btn"
                    type="button"
                  >
                    ENTER FXPO
                  </button>
                </div>
                <div class="col-auto" :class="$style.btnCol">
                  <button
                    class="btn btn-outline-white"
                    :class="$style.btn"
                    type="button"
                  >
                    Explore Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.spaceContainer">
        <div :class="$style.spaceLabel">FXPO Business Space</div>
        <div :class="$style.spaceGroup">
          <!-- prettier-ignore -->
          <div :class="$style.spaceValue">
            500.000.000m<sup>3</sup>
          </div>
          <p :class="$style.spaceText">
            Available to buy or rent, use, stake and trade
          </p>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import Torus from '~/assets/images/torus-2.png';
import Scheme from '~/assets/images/architecture.svg';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import RotationIcon from '~/icons/RotationIcon.vue';
</script>

<style lang="scss" module>
.section {
  background-color: $dark;
  color: #fff;
  @include padding(82px 0 145px);
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
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

  @include media-breakpoint-up(lg) {
    @include padding-right(45px);
  }
}

.header {
  @include margin-bottom(50px);

  h2 {
    @include margin-bottom(33px);
  }

  p {
    @include media-breakpoint-up(lg) {
      max-width: rem-calc(450px);
    }
  }
}

.rightCol {
  @include media-breakpoint-up(lg) {
    @include padding-left(50px);
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
  padding-top: wrap-calc(114px, 535px);
}

.schemeTitle {
  @include font-size(26px);
  @include margin-bottom(38px);
  line-height: divide(30, 26);
  font-weight: 600;
  color: $primary;
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
