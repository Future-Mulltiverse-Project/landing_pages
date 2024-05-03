<template>
  <div :class="$style.main">
    <MediaPicture
      :media-class="$style.mediaImg"
      :src="Bg"
      :width="1523"
      :height="3024"
      layout="fill"
    />
    <ExploreHeader />
    <div :class="$style.content">
      <slot />
      <ChatButton />
    </div>
    <ExploreFooter />
    <!--    <ClientOnly>-->
    <!--      <ModalBackdrop />-->
    <!--    </ClientOnly>-->
  </div>
</template>

<script lang="ts" setup>
import { useHead, useRoute, useRuntimeConfig } from '#app';
import { computed } from '#imports';
import Bg from '~/assets/images/launch-intro-bg.jpg';
import ChatButton from '~/components/ChatButton.vue';
import ExploreFooter from '~/components/Explore/ExploreFooter.vue';
import ExploreHeader from '~/components/Explore/ExploreHeader.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';

type Props = {
  title?: string | string[];
};

const props = defineProps<Props>();

const SEPARATOR = ' - ';
const title = computed(() =>
  Array.isArray(props.title) ? props.title.join(SEPARATOR) : props.title,
);

const config = useRuntimeConfig();
const route = useRoute();

useHead({
  title: title.value || config.public.APP_TITLE,
  titleTemplate: (titleChunk) =>
    titleChunk && titleChunk !== config.public.APP_NAME
      ? route.path !== '/'
        ? titleChunk + SEPARATOR + config.public.APP_NAME
        : titleChunk
      : config.public.APP_TITLE,
  meta: [
    {
      name: 'description',
      content: config.public.APP_DESCRIPTION || config.public.APP_TITLE,
    },
  ],
});
</script>

<style lang="scss" module>
.main {
  background-color: $blue-800;
  color: #fff;
  position: relative;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.content {
  @include padding(60px 0);
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  position: relative;
}

.mediaImg {
  object-position: 50% 67%;
}
</style>
