<template>
  <div :class="$style.main">
    <AppHeader />
    <slot />
    <AppFooter />
    <ClientOnly>
      <ModalBackdrop />
      <NavPanel />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { useHead, useRoute, useRuntimeConfig } from '#app';
import { computed } from '#imports';
import AppFooter from '~/components/AppFooter/AppFooter.vue';
import AppHeader from '~/components/AppHeader/AppHeader.vue';
import ModalBackdrop from '~/components/Modal/ModalBackdrop.vue';
import NavPanel from '~/components/NavPanel/NavPanel.vue';

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
  overflow: hidden;
}
</style>
