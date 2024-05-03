<template>
  <div :class="$style.header">
    <MediaPicture :src="Bg" :width="1200" :height="612" layout="fill" />
    <div :class="$style.inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Bg from '~/assets/images/launch-intro-bg2.jpg';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.header {
  @include padding-left(24px);
  @include padding-right(24px);
  position: relative;
  text-align: center;
}
</style>
