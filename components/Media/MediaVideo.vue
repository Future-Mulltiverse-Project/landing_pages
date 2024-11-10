<template>
  <div
    ref="elRef"
    :class="layout === 'fill' ? styles.fill : styles.el"
    :style="elStyle"
  >
    <video
      ref="mediaRef"
      :class="[
        styles.fill,
        contain ? styles.contain : styles.cover,
        !transitionOff && styles.transition,
        hasIntersectedOnce ? styles.in : styles.out,
        mediaClass,
      ]"
      :autoplay="autoplay && 'autoplay'"
      :controls="controls && 'controls'"
      :loop="loop && 'loop'"
      :muted="muted && 'muted'"
      :playsinline="playsinline && 'playsinline'"
      :preload="preload"
      @click="onClick"
      @play="onPlay"
      @pause="onPause"
      @loadedmetadata="onLoadedMetaData"
    >
      <source
        v-for="source in sources"
        :key="source.src"
        :src="source.src"
        :type="source.type"
      />
    </video>
    <slot v-bind="defaultSlotProps" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from '#imports';
import styles from '~/components/Media/MediaPicture.module.scss';
import { useMediaIntersectionObserver } from '~/components/Media/useMediaIntersectionObserver';

interface Props {
  autoplay?: boolean;
  contain?: boolean;
  controls?: boolean;
  height: number | string;
  layout?: 'responsive' | 'fill' | 'static';
  loop?: boolean;
  mediaClass?: string | {} | [];
  muted?: boolean;
  playsinline?: boolean;
  sources?: { src: string; type: string }[];
  src: string;
  transitionOff?: boolean;
  type: string; // video/mp4
  width: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  controls: undefined,
  layout: 'responsive',
  mediaClass: undefined,
  muted: true,
  playsinline: true,
  sources: undefined,
});

type Events = {
  (e: 'click', event: Event): void;
  (e: 'play', event: Event): void;
  (e: 'pause', event: Event): void;
  (e: 'loadedmetadata', event: Event): void;
};
const emit = defineEmits<Events>();

const elRef = ref<HTMLDivElement | null>(null);

const hasIntersectedOnce = ref(false);
const wasPlaying = ref(props.autoplay);
const mediaRef = ref<HTMLVideoElement | null>(null);

const sources = computed(() => {
  return [
    {
      src: props.src,
      type: props.type,
    },
    ...(props.sources || []),
  ];
});

useMediaIntersectionObserver({
  elRef,
  cacheId: () => sources.value.map((source) => source.src).join('+'),
  callback: (entry) => {
    if (entry.isIntersecting) {
      hasIntersectedOnce.value = true;

      if (props.autoplay && wasPlaying.value) {
        mediaRef.value?.play();
      }
    } else {
      wasPlaying.value = !mediaRef.value?.paused;

      if (wasPlaying.value) {
        mediaRef.value?.pause();
      }
    }
  },
});

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

const preload = computed(() => {
  return hasIntersectedOnce.value ? 'metadata' : 'none';
});

function onClick(event: Event) {
  emit('click', event);
}

function onPlay(event: Event) {
  emit('play', event);
}

function onPause(event: Event) {
  emit('play', event);
}

const hasLoaded = ref(false);

function onLoadedMetaData(event: Event) {
  hasLoaded.value = true;
  emit('loadedmetadata', event);
}

export interface MediaVideoDefaultSlotProps {
  mediaEl: HTMLVideoElement | null;
}

const defaultSlotProps = computed<MediaVideoDefaultSlotProps>(() => ({
  mediaEl: mediaRef?.value,
}));
</script>
