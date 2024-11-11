<template>
  <div class="grid grid-cols-1 gap-3 lg:grid-cols-2 pb-0" >
    <div :class="$style.textContainer" class="ml-8" >
      <h3 :class="$style.title" class="font-medium mb:text-5xl text-3xl mb-7 text-center lg:text-left" >{{ item.title }}</h3>
      <div :class="$style.text" class="font-thin" >{{ item.text }}</div>

      <div class="flex justify-center" >
        <button  class="btn-outline-primary">
          <p style="font-weight: 600;color: #cfb16d; font-size:14px; margin-bottom: 0px;">
            LEARN MORE
          </p>
        </button>
      </div>
    </div>
    <div :class="$style.mediaWrapper">
      <div :class="$style.mediaHolder" class="flex justify-center">
        <div
          v-if="item.img"
          :class="$style.media"
          class="w-3/4"
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
  //border-left: 1px solid transparent;
  //border-right: 1px solid #222649;
  //border-bottom: 1px solid #222649;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 50px;
  //background: radial-gradient(100% 60% at center bottom, #23274a, transparent);
  overflow: hidden;
  flex-direction: row;

  &:nth-child(odd) {
    padding-left: rem-calc($wrapper-padding-sm);

    @include media-breakpoint-up(sm) {
      padding-left: $wrapper-padding;
    }

  }

  &:nth-child(even) {
    padding-left: rem-calc($wrapper-padding-sm);

    @include media-breakpoint-up(lg) {
      padding-left: $wrapper-padding;
    }


    @media (min-width: 1441px) {
      padding-left: rem-calc(135px);
    }
  }
}

/*.textContainer {
  @include padding(70px 54px 0px 0);
  flex: 1 1 rem-calc(323px);
}*/

.title {
  color: $primary;
  line-height: divide(55, 44);
}

.text {
  font-size: 16px;
  margin-bottom: 32px;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  line-height: divide(24, 16);
}

.btn {
  min-width: rem-calc(130px);
  max-width: 100%;
}

.mediaWrapper {
  flex: 0 1 rem-calc(230px);
  margin-left: auto;
  width: 100%;
}

.mediaHolder {
  padding-bottom: 150%;
  position: relative;
}

.media {
  left: 0;
  position: absolute;
  //width: calc(var(--image-w) * 100% / 280);
}
</style>
