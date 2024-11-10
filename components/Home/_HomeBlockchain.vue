<template>
  <MainSection
    angle-right-top
    has-bg-behind
    has-gradient
    :class="$style.section"
  >
    <div :class="$style.container">
      <AppWrapper :class="$style.wrapper">
        <SectionHeader logo-top :class="$style.header">
          <template #title>
            <span>FutureX EXPO &</span>
            <br />
            Blockchain
          </template>
        </SectionHeader>
        <div class="row" :class="$style.row">
          <div class="col" :class="$style.col1">
            <div :class="$style.figure">
              <MediaPicture
                src="/images/item-fxpo-avatar.png"
                :width="400"
                :height="340"
                layout="fill"
                contain
              />
            </div>
            <div :class="$style.text">FXPO Avatars</div>
          </div>
          <div class="col" :class="$style.col2">
            <div :class="$style.figure">
              <MediaPicture
                src="/images/business-space.png"
                :width="352"
                :height="340"
                layout="fill"
                contain
              />
              <PlusIcon :class="$style.plusIcon" />
            </div>
            <div :class="$style.text">FXPO Business Space</div>
          </div>
          <div class="col" :class="$style.col3">
            <div :class="$style.figure">
              <PlusIcon :class="[$style.plusIcon, $style.hidden]" />
              <MediaPicture
                src="/images/item-blockchain-vault.png"
                :width="436"
                :height="340"
                layout="fill"
                contain
              />
            </div>
            <div :class="$style.text">Blockchain Vault</div>
          </div>
          <div class="col" :class="$style.col4">
            <div :class="$style.figure">
              <PlusIcon :class="$style.plusIcon" />
              <MediaPicture
                src="/images/item-pos-pore.png"
                :width="560"
                :height="340"
                layout="fill"
                contain
              />
            </div>
            <div :class="$style.text">POS/PORE Blockchain</div>
          </div>
          <div class="col-auto" :class="$style.col5">
            <div :class="$style.figure">
              <PlusIcon :class="[$style.plusIcon, $style.hidden]" />
              <MediaPicture
                src="/images/item-fxpo-coin.png"
                :width="396"
                :height="340"
                layout="fill"
                contain
              />
            </div>
            <div :class="$style.text">FXPO Coin</div>
          </div>
        </div>
      </AppWrapper>
      <div :class="$style.imgWrapper">
        <MediaPicture
          src="/images/8-avatars-2w.jpg"
          :width="1436"
          :height="1084"
        />
      </div>
      <AppWrapper>
        <div :class="$style.quote">
          <QuoteIcon :class="$style.quoteSvgTop" />
          <QuoteIcon :class="$style.quoteSvgBtm" />
          Welcome to the FutureX EXPO!
          <br />
          We believe, that the time has come, to bring the already existing
          solutions around the world together, that are able to contribute to
          the creation of the breakthrough to a sustainable, meaningful and
          inspiring future. For this mission we are building the FutureX EXPO,
          and it would be a pleasure to build it with you together! Welcome to
          the Future! Are you in?
        </div>
        <div :class="$style.name">Simon Voelk</div>
        <div :class="$style.position">FutureX CEO</div>
      </AppWrapper>
    </div>
  </MainSection>
</template>

<script lang="ts" setup>
import SectionHeader from '@/components/utilities/SectionHeader.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import MainSection from '~/components/Section/MainSection.vue';
import PlusIcon from '~/icons/PlusIcon.vue';
import QuoteIcon from '~/icons/QuoteIcon.vue';
</script>

<style lang="scss" module>
.section {
  --sectionGradient: linear-gradient(
    173deg,
    #212646 var(--angleHeight),
    transparent calc(#{var(--angleHeight)} * 3)
  );
  text-align: center;
}

.header {
  @include margin-bottom(98px);
}

.container {
  @include padding-bottom(96px);
}

.wrapper {
  max-width: rem-calc(1250px);
  margin: 0 auto;

  @media (max-width: 1370px) {
    @include margin(0 $wrapper-padding);
  }

  @include media-breakpoint-down(sm) {
    margin: 0 rem-calc($wrapper-padding-sm);
  }
}

.row {
  @include padding-bottom(126px);
  --gutter-x: #{rem-calc(20px)};
  --gutter-y: #{rem-calc(20px)};
  justify-content: center;
  margin: 0 auto;
  flex-wrap: nowrap;

  @include media-breakpoint-down(md) {
    flex-wrap: wrap;
  }
}

.col1 {
  flex-shrink: 1;
  flex-basis: rem-calc(210px);

  @include media-breakpoint-down(md) {
    flex: 1 1 50%;
  }
}

.col2 {
  flex-shrink: 1;
  flex-basis: rem-calc(292px);

  @include media-breakpoint-down(md) {
    flex: 1 1 50%;
  }
}

.col3 {
  flex-shrink: 1;
  flex-basis: rem-calc(238px);

  @include media-breakpoint-down(md) {
    flex: 1 1 50%;
  }
}

.col4 {
  flex-shrink: 1;
  flex-basis: rem-calc(300px);

  @include media-breakpoint-down(md) {
    flex: 1 1 50%;
  }
}

.col5 {
  flex-shrink: 1;
  flex-basis: rem-calc(210px);

  @include media-breakpoint-down(md) {
    flex: 1 1 50%;
  }
}

.plusIcon {
  fill: $primary;
  height: rem-calc(20px);
  width: rem-calc(20px);
  margin-top: rem-calc(75px);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);

  &.hidden {
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}

.figure {
  position: relative;
  margin: 0 auto;
  height: rem-calc(170px);
}

.text {
  @include font-size(20px);
  line-height: math-div(30, 20);
}

.imgWrapper {
  margin-bottom: wrap-calc(-172px, 1440px);
}

.quote {
  @include font-size(16px);
  max-width: rem-calc(575px);
  margin: 0 auto rem-calc(38px);
  position: relative;
}

.quoteSvgTop {
  position: absolute;
  top: 0;
  left: 0;
  fill: $primary;
  height: em-calc(24px, 16px);
  transform: translate(-100%, -100%) rotate(180deg);
  width: em-calc(24px, 16px);
}

.quoteSvgBtm {
  position: absolute;
  bottom: 0;
  right: 0;
  fill: $primary;
  height: em-calc(24px, 16px);
  transform: translate(100%, 100%);
  width: em-calc(24px, 16px);
}

.name {
  @include font-size(26px);
  line-height: math-div(30, 26);
  color: $primary;
  margin-bottom: rem-calc(4px);
}

.position {
  @include font-size(16px);
  color: #9c9c9c;
}
</style>
