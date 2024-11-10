<template>
  <div :class="$style.item">
    <div :class="$style.textContainer">
      <h3 :class="$style.title" v-html="item.title" />
      <div :class="$style.text" v-html="item.text" />
      <NuxtLink
        :class="$style.btn"
        class="btn btn-sm btn-outline-primary"
        :to="item.to"
      >
        Apply
      </NuxtLink>
    </div>
    <div :class="$style.mediaWrapper">
      <div :class="$style.mediaHolder">
        <div
          v-if="item.img"
          :class="$style.media"
          :style="{
            '--image-w': `${item.img.width}`,
          }"
        >
          <MediaPicture
            :src="item.img.url"
            :width="item.img.width"
            :height="item.img.height"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MediaPicture from '~/components/Media/MediaPicture.vue';

interface Itesmata {
  title?: string;
  text?: string;
  to?: string;
  img?: {
    url: string;
    width: number;
    height: number;
  };
}

defineProps<{ item: Itesmata }>();
</script>

<style lang="scss" module>
.item {
  border-left: 1px solid transparent;
  border-right: 1px solid #222649;
  border-bottom: 1px solid #222649;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background: radial-gradient(100% 60% at center bottom, #23274a, transparent);
  overflow: hidden;
  flex-direction: row;

  &:nth-child(odd) {
    padding-left: rem-calc($wrapper-padding-sm);
    padding-right: rem-calc($wrapper-padding-sm);

    @include media-breakpoint-up(sm) {
      @include padding-left($wrapper-padding);
      @include padding-right($wrapper-padding);
    }

    @include media-breakpoint-up(lg) {
      padding-right: 0;
    }

    @media (min-width: $wrapper-width + 1px) {
      padding-left: calc(100% - $wrapper-inner-width / 2);
    }
  }

  &:nth-child(even) {
    padding-left: rem-calc($wrapper-padding-sm);
    padding-right: rem-calc($wrapper-padding-sm);

    @include media-breakpoint-up(sm) {
      @include padding-left($wrapper-padding);
      @include padding-right($wrapper-padding);
    }

    @media (min-width: $wrapper-width + 1px) {
      padding-left: calc(100% - $wrapper-inner-width / 2);
      padding-right: 0;
    }

    @media (min-width: 1441px) {
      padding-left: rem-calc(60px);
      padding-right: calc(100% - $wrapper-inner-width / 2);
    }
  }
}

.textContainer {
  @include padding(70px 80px 70px 0);
  flex: 1 1 rem-calc(323px);
}

.title {
  @include font-size(35px);
  @include margin-bottom(28px);
  color: white;
  line-height: divide(50, 40);
}

.text {
  @include font-size(16px);
  @include margin-bottom(32px);
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  line-height: divide(24, 16);
}

.btn {
  min-width: rem-calc(130px);
  max-width: 100%;
  color: white;
}

.mediaWrapper {
  flex: 0 1 rem-calc(130px);
  margin-left: auto;
  width: 100%;
}

.mediaHolder {
  padding-bottom: 450%;
  position: relative;
}

.media {
  left: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--image-w) * 100% / 130);
}
</style>
