<template>
  <picture
    ref="elRef"
    :class="layout === 'fill' ? styles.fill : styles.el"
    :style="elStyle"
  >
    <img
      :src="mediaSrc"
      :class="[
        styles.fill,
        contain ? styles.contain : styles.cover,
        !transitionOff && styles.transition,
        isVisible ? styles.in : styles.out,
        mediaClass,
      ]"
      :style="mediaStyle"
      alt=""
      loading="lazy"
    />
    <slot />
  </picture>
</template>

<script lang="ts" setup>
import { computed, ref } from '#imports';
import styles from '~/components/Media/MediaPicture.module.scss';
import { useMediaIntersectionObserver } from '~/components/Media/useMediaIntersectionObserver';

interface Props {
  alt?: string;
  contain?: boolean;
  height: number;
  layout?: 'responsive' | 'fill' | 'static';
  mediaClass?: string | object | [];
  mediaStyle?: string | object;
  src: string;
  transitionOff?: boolean;
  width: number;
}

const props = withDefaults(defineProps<Props>(), {
  alt: undefined,
  layout: 'responsive',
  mediaClass: undefined,
  mediaStyle: undefined,
});

const elRef = ref<HTMLDivElement | null>(null);

const isVisible = ref(false);
const mediaSrc = ref('');

const paddingBottom = computed(
  () => ((Number(props.height) / Number(props.width)) * 100).toFixed(2) + '%',
);

const elStyle = computed(() => ({
  paddingBottom:
    props.layout === 'responsive' ? paddingBottom.value : undefined,
  ...(props.layout === 'static' && {
    width: props.width && `${props.width}px`,
    height: props.height && `${props.height}px`,
  }),
}));

function preloadMedia() {
  if (props.src === mediaSrc.value) {
    return;
  }

  isVisible.value = false;

  const img = new Image();

  img.onload = function () {
    mediaSrc.value = props.src;
    isVisible.value = true;
  };
  img.onerror = function () {};
  img.src = props.src;
}

useMediaIntersectionObserver({
  elRef,
  cacheId: () => props.src,
  callback: (entry, unobserve) => {
    if (entry.isIntersecting) {
      preloadMedia();
      unobserve();
    }
  },
});
</script>
