<template>
  <section :class="$style.section">
    <AppWrapper :class="$style.wrapper">
      <MainSectionHeader
        :class="$style.header"
        heading="Platform Overview"
        title-lg
        heading-lg
        :title="`<strong>About FXPO Platform</strong> & Ecosystem Overview`"
      />
      <MainSectionTextContent :class="$style.text">
        <p>
          The FXPO platform is an all-in-one ecosystem for companies and
          projects looking to thrive in the future of the web3, blockchain and
          the internet.
        </p>
      </MainSectionTextContent>
      <Torus />
      <div :class="$style.btnContainer">
        <h3 :class="$style.btnTitle">Experience the Future today:</h3>
        <div class="row" :class="$style.btnRow">
          <div class="col-auto" :class="$style.btnCol">
            <button
              class="btn btn-outline-white"
              :class="$style.btn"
              type="button"
            >
              ENTER FXPO
              <DegreeIcon />
            </button>
          </div>
        </div>
      </div>
      <div :class="$style.scroll">
        <ScrollIcon />
        Scroll & explore
      </div>
    </AppWrapper>
    <ChatButton />
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import Torus from '~/components/Torus/Torus.vue';
import DegreeIcon from '~/icons/DegreeIcon.vue';
import ScrollIcon from '~/icons/ScrollIcon.vue';
import ChatButton from '~/components/ChatButton.vue';
</script>

<style lang="scss" module>
.section {
  padding-top: rem-calc(130px);
  background-color: $dark;
  text-align: center;
}

.wrapper {
  @include padding-top(26px);
}

.header {
  @include margin-bottom(48px);
  position: relative;
  z-index: 1;

  h2 {
    margin-left: auto;
    margin-right: auto;
    max-width: rem-calc(630px);
  }
}

.text {
  @include margin-bottom(30px);
  margin-left: auto;
  margin-right: auto;
  max-width: 49ch;
  position: relative;
  z-index: 1;

  p {
    line-height: divide(30, 16);
  }
}

.btnContainer {
  @include margin-top(32px);
  position: relative;
}

.btnRow {
  --gutter-x: #{rem-calc(24px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;
}

.btnCol {
  flex: 0 1 rem-calc(204px);
  min-width: fit-content;
  max-width: 100%;
}

.btnTitle {
  @include font-size(22px);
  @include margin-bottom(22px);
  font-weight: 600;
  color: $primary;
}

.btn {
  width: 100%;
}

.btn svg {
  margin-left: rem-calc(10px);
  height: rem-calc(14px);
  width: rem-calc(22px);
}

.btnLinkRow {
  --gutter-y: #{rem-calc(4px)};
  justify-content: center;
  position: relative;
  z-index: 1;
}

.btnLink {
  @include font-size(14px);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  transition: color 150ms ease-in-out;

  &:hover {
    color: #fff;
  }

  svg {
    @include margin-right(7px);
    width: rem-calc(16px);
    height: rem-calc(18px);
  }
}

.scroll {
  @include font-size(10px);
  @include margin-top(70px);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  svg {
    color: $primary;
    display: block;
    margin: 0 auto rem-calc(16px);
    width: rem-calc(20px);
    height: rem-calc(24px);
  }

  &:after {
    background: $yellow-200;
    content: '';
    display: block;
    height: rem-calc(40px);
    margin: rem-calc(22px) auto 0;
    width: 3px;
  }
}
</style>
