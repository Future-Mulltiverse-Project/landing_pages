<template>
  <section :class="$style.section">
    <MainSectionHeader :class="$style.header" :title="title" />
    <MainSectionTextContent :class="$style.text">
      <p>
        The Future Multiverse is a digital, decentralized platform created to
        accelerate the breakthrough to a sustainable, meaningful and inspiring
        future for everyone.
      </p>
    </MainSectionTextContent>
    <Torus />
    <div :class="$style.btnContainer">
      <h3 :class="$style.btnTitle">Experience the Future today:</h3>
      <div class="row" :class="$style.btnRow">
        <div class="col-auto" :class="$style.btnCol">
          <button
            class="btn btn-outline-gradient-primary"
            :class="$style.btn"
            type="button"
          >
            <span style="color: white; line-height: 1">LEARN&nbsp;</span>
            <span style="color: #cfb16d; line-height: 1">&nbsp;MORE&nbsp;</span>
            <span style="color: white; line-height: 1">
              &nbsp;(COMING NEXT)
            </span>
          </button>
        </div>
        <div class="col-auto" :class="$style.btnCol">
          <button
            class="btn btn-outline-white"
            :class="$style.btn"
            type="button"
          >
            ENTER
            <span style="color: #cfb16d; line-height: 1">
              &nbsp;FUTURE EXPO&nbsp;
            </span>
            (COMING NEXT)
          </button>
        </div>
        <div class="col-auto" :class="$style.btnCol">
          <button
            class="btn btn-outline-gradient-primary"
            :class="$style.btn"
            type="button"
          >
            DISCOVER MAP (COMING NEXT)
          </button>
        </div>
      </div>
    </div>
    <div class="row" :class="$style.btnLinkRow">
      <div class="col-auto">
        <NuxtLink :class="$style.btnLink" to="/">
          <HeadCommentIcon />
          Guide
          <span style="color: white; line-height: 1">book</span>
        </NuxtLink>
      </div>
      <div class="col-auto">
        <NuxtLink :class="$style.btnLink" to="/">
          <FileUploadIcon />
          <span style="color: white; line-height: 1">Brochure</span>
        </NuxtLink>
      </div>
      <div class="col-auto">
        <NuxtLink :class="$style.btnLink" to="/">
          <FileUploadIcon />
          Launch
          <span style="color: white; line-height: 1">Paper</span>
        </NuxtLink>
      </div>
      <div class="col-auto">
        <NuxtLink
          :class="$style.btnLink"
          :to="{ name: 'launch', hash: '#roadmap' }"
        >
          <RoadmapIcon />
          Launch
          <span style="color: white; line-height: 1">&nbsp;Roadmap</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import FileUploadIcon from '~/icons/FileUploadIcon.vue';
import HeadCommentIcon from '~/icons/HeadCommentIcon.vue';
import RoadmapIcon from '~/icons/RoadmapIcon.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import Torus from '~/components/Torus/Torus.vue';

const title = `About FUTURE MULTIVERSE`;
</script>

<style lang="scss" module>
.section {
  @include padding(34px 0 30px);
  background-color: #0c1020;
  text-align: center;
}

.header {
  @include margin-top(65px);
  @include margin-bottom(26px);
  position: relative;
  z-index: 1;
}

.text {
  @include margin-bottom(15px);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(434px);
  position: relative;
  z-index: 1;
}

.btnContainer {
  @include margin-top(58px);
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
}

.btnTitle {
  @include font-size(22px);
  @include margin-bottom(32px);
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
</style>
