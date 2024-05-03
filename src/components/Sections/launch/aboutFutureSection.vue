<template>
  <section :class="$style.section">
    <Torus />
    <AppWrapper>
      <MainSectionTextContent :class="$style.text">
        <div class="text-center" style="margin-top: -850px">
          <h2
            style="
              color: white;
              font-size: 40px;
              font-family: Bai Jamjuree;
              font-weight: 700;
              text-transform: uppercase;
              line-height: 40px;
              word-wrap: break-word;
              margin-top: -100px;
            "
          >
            ABOUT
            <span style="color: #cfb16d">FUTURE</span>
          </h2>
          <h2
            style="
              color: #cfb16d;
              font-size: 40px;
              font-family: Bai Jamjuree;
              font-weight: 700;
              text-transform: uppercase;
              line-height: 40px;
              word-wrap: break-word;
            "
          >
            MULTIVERSE
            <span style="color: white">&</span>
            EXPO
          </h2>
        </div>
        <p>
          The Future Multiverse & EXPO is a digital, decentralised platform &
          ecosystem, created to accelerate the breakthrough to a sustainable,
          meaningful and inspiring future for everyone
        </p>
      </MainSectionTextContent>

      <div :class="$style.btnContainer">
        <h3 :class="$style.btnTitle">
          Experience the
          <span style="color: #cfb16d">Future</span>
          today:
        </h3>
        <div class="row" :class="$style.btnRow">
          <div class="col-auto" :class="$style.btnCol">
            <NuxtLink
              to="/"
              class="btn btn-outline-primary text-white"
              :class="$style.btn10"
            >
              <span style="color: white">LEARN</span>
              MORE
              <br />
              <Span style="color: white">(COMING NEXT)</Span>
            </NuxtLink>
          </div>
          <div class="col-auto" :class="$style.btnCol">
            <NuxtLink
              to="/"
              class="btn btn-outline-primary text-white"
              :class="$style.btn10"
            >
              <span style="color: white">ENTER</span>
              FUTURE EXPO
              <br />
              <Span style="color: white">(COMING NEXT)</Span>
            </NuxtLink>
          </div>
          <div class="col-auto" :class="$style.btnCol">
            <NuxtLink
              to="/"
              class="btn btn-outline-primary text-white"
              :class="$style.btn10"
            >
              <span style="color: white">DISCOVER</span>
              MAP
              <br />
              <Span style="color: white">(COMING NEXT)</Span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="row" :class="$style.btnLinkRow">
        <div class="col-auto">
          <NuxtLink :class="$style.btnLink" to="/">
            <HeadCommentIcon />
            Guide
            <span style="color: white">Book</span>
          </NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink :class="$style.btnLink" to="/">
            <FileUploadIcon />
            <span style="color: white">Bronchure</span>
          </NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink :class="$style.btnLink" to="/">
            <FileUploadIcon />
            Launch
            <span style="color: white">Paper</span>
          </NuxtLink>
        </div>
        <div class="col-auto">
          <NuxtLink
            :class="$style.btnLink"
            :to="{ name: 'launch', hash: '#roadmap' }"
          >
            <RoadmapIcon />
            Launch
            <span style="color: white">Roadmap</span>
          </NuxtLink>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import FileUploadIcon from '~/icons/FileUploadIcon.vue';
import HeadCommentIcon from '~/icons/HeadCommentIcon.vue';
import RoadmapIcon from '~/icons/RoadmapIcon.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import Torus from '~/components/Sections/launch/torus.vue';
</script>

<style lang="scss" module>
.btn10 {
  display: inline-block;
  width: 100%;
  font-size: 12px;
  margin-bottom: 14%;
}
.section {
  @include padding(255px 0 100px);
  background-color: #0c1020;
  text-align: center;
}

.header {
  @include margin-bottom(26px);
  position: relative;
  z-index: 1;
}

.text {
  @include margin-bottom(0px);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(434px);
  position: relative;
  z-index: 1;
  margin-top: 0px;
}

.btnContainer {
  @include margin-top(808px);
  position: relative;
}

.btnRow {
  @include padding-bottom(76px);
  --gutter-x: #{rem-calc(24px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;
}

.btnCol {
  flex: 0 1 rem-calc(204px);
  min-width: fit-content;
  max-width: 100%;
  text-align: center;
}

.btnTitle {
  @include font-size(22px);
  @include margin-bottom(32px);
  font-weight: 600;
  color: white;
}

.btn {
  width: 100%;
  text-align: center;
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
</style>
