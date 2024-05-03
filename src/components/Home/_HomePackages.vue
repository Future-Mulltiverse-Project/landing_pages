<template>
  <MainSection angle-left-y-both has-gradient :class="$style.section">
    <AppWrapper :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-12 col-xl-6" :class="$style.leftCol">
          <SectionHeader :class="$style.header">
            <template #title>
              FutureX EXPO
              <span>Licences & Packages</span>
            </template>
            <div :class="$style.summ">
              <p>
                We offer you different License Types:
                <br />
                <span>Corporate, agent/agency & validator licences</span>
              </p>
              <p>
                Choose your suitable FutureX EXPO Package, created & customized
                for your needs
                <span>
                  and become a FutureX Explorer, Pioneer, Adventurer, Builder,
                  Creator or Ambassador
                </span>
              </p>
            </div>
          </SectionHeader>
          <nuxt-link
            :to="{ name: 'index' }"
            class="btn btn-outline-primary btn-sm"
          >
            View packages
          </nuxt-link>
        </div>
        <div class="col-12 col-xl-6" :class="$style.rightCol">
          <div :class="$style.imgWrapper">
            <div :class="$style.blur"></div>
            <MediaPicture
              src="/images/packages.png"
              :width="719"
              :height="814"
            />
          </div>
        </div>
      </div>
      <div :class="$style.applyContainer">
        <div :class="$style.applyText">
          <CommentsIcon />
          Get your customized quote / offer
        </div>
        <nuxt-link
          class="btn btn-outline-white btn-sm"
          :class="$style.applyBtn"
          :to="{ name: 'index' }"
        >
          Apply now
        </nuxt-link>
      </div>
    </AppWrapper>
  </MainSection>
</template>
<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import MainSection from '~/components/Section/MainSection.vue';
import SectionHeader from '~/components/utilities/SectionHeader.vue';
import CommentsIcon from '~/icons/CommentsIcon.vue';
</script>

<style lang="scss" module>
.section {
  --sectionGradient: linear-gradient(
    180deg,
    rgba(33, 38, 70, 0.4) 0%,
    transparent 58.66%
  );
}

.wrapper {
  padding-top: rem-calc(80px);
  padding-bottom: rem-calc(100px);
}

.row {
  --gutter-x: 0;
  --gutter-y: #{rem-calc(64px)};
  justify-content: center;
}

.leftCol {
  position: relative;
  text-align: center;

  @include media-breakpoint-up(xl) {
    text-align: left;
    padding-right: wrap-calc(70px);
    padding-top: wrap-calc(126px);
  }
}

.rightCol {
  max-width: rem-calc(719px);

  @include media-breakpoint-up(xl) {
    max-width: none;
  }
}

.header {
  margin-bottom: rem-calc(44px);
}

.summ {
  @include font-size(18px);
  font-weight: 700;
  line-height: math-div(24, 18);
  margin: rem-calc(54px) auto rem-calc(64px);
  max-width: 34ch;

  @include media-breakpoint-up(xl) {
    margin: rem-calc(54px) 0 rem-calc(64px);
  }

  p {
    margin-bottom: rem-calc(34px);

    &:last-child {
      margin-bottom: 0;
    }
  }

  span {
    color: $primary;
  }
}

.imgWrapper {
  margin-top: wrap-calc(-83px, math-div($wrapper-inner-width, 2));
  width: wrap-calc(719px, math-div($wrapper-inner-width, 2));
  position: relative;
  margin-left: wrap-calc(-40px, math-div($wrapper-inner-width, 2));
}

//.blur {
//  background: #23274A;
//  filter: blur(150px);
//  border-radius: 50%;
//  left: 42%;
//  transform: translateX(-50%);
//  position: absolute;
//  top: 23%;
//  width: wrap-calc(415px, $img-width);
//
//  &:before {
//    content: "";
//    display: block;
//    padding-bottom: 106.02%;
//  }
//}

.blur {
  width: wrap-calc(815px, 719px);
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    rgba(#23274a, 0.6),
    rgba(#23274a, 0.4) 40%,
    rgba(#23274a, 0) 70%
  );
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);

  &:before {
    padding-bottom: 106.2%;
    display: block;
    content: '';
  }
}

.applyContainer {
  margin-top: rem-calc(76px);
  text-align: center;
}

.applyText {
  @include font-size(40px);
  align-items: center;
  color: $primary;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin-bottom: rem-calc(54px);
  text-align: center;

  @include media-breakpoint-up(md) {
    flex-direction: row;
    text-align: left;
  }

  svg {
    height: rem-calc(65px);
    margin-bottom: rem-calc(20px);
    width: rem-calc(65px);

    @include media-breakpoint-up(md) {
      align-self: flex-start;
      margin-bottom: rem-calc(-10px);
      margin-right: rem-calc(42px);
    }
  }
}

.applyBtn {
  min-width: rem-calc(198px);
  max-width: 100%;
}
</style>
