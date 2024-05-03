<template>
  <div :class="$style.imgHolder">
    <div :class="$style.img">
      <MediaPicture
        :src="Torus"
        layout="responsive"
        :width="1440"
        :height="1045"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Torus from '~/assets/images/launch/dalle-bg.png';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.imgHolder {
  //padding-bottom: 47.2%;
  padding-bottom: 41%;
  position: relative;
  pointer-events: none;
}

.img {
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: wrap-calc(1440px);
}
</style>
