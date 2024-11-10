<template>
  <div :class="$style.main">
    <GuidebookHeader />
    <GuidebookSidebar :class="$style.sidebar" />
    <div :class="$style.content">
      <slot />
    </div>
    <ClientOnly>
      <ModalBackdrop />
      <GuidebookNavPanel />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { useHead, useRoute, useRuntimeConfig } from '#app';
import { computed } from '#imports';
import GuidebookHeader from '~/components/Guidebook/InvestorHeader.vue';
import GuidebookSidebar from '~/components/Guidebook/InvestorDashboardSidebar.vue';

import ModalBackdrop from '~/components/Modal/ModalBackdrop.vue';
import GuidebookNavPanel from '~/components/NavPanel/GuidebookNavPanel.vue';

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
.logo {
  @include rfs(100px, width);
  min-width: rem-calc(160px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}
.main {
  background-color: $blue-800;
  color: #fff;
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  padding-top: rem-calc(88px);
  position: relative;
}

.sidebar {
  display: none;
  flex: 0 0 rem-calc(240px);
  padding: 2%;
  @include media-breakpoint-up(lg) {
    display: block;
  }
}

.content {
  position: relative;
  flex: 1 1 0;

  position: relative;
  flex: 1 1 0;
  background-color: #fff;
  background-size: cover;
  background-position: center;
}
</style>
