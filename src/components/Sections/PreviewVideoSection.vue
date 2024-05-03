<template>
  <section>
    <AppWrapper>
      <MediaPicture
        :class="$style.media"
        :src="Bg"
        :width="1170"
        :height="656"
      />
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Bg from 'assets/images/video-bg.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.media {
  margin-top: wrap-calc(-328px);
}
</style>
