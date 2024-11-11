<template>
  <div ref="swiperRef" class="swiper" :class="$style.swiper">
    <div class="swiper-wrapper">
      <div
        v-for="(filter, index) in filters"
        :key="index"
        class="swiper-slide"
        :class="$style.slide"
        @click="selectIndex(index)"
      >
        <div :class="[$style.tab, selectedIndex === index && $style.tabActive]">
          {{ filter }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper, { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import {
  markRaw,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  shallowRef,
  ref,
} from 'vue';

const filters = [
  'All Packages',
  'Pioneer Packages',
  'Creator Packages',
  'Ambassador Packages',
];

const selectedIndex = ref(0);

function selectIndex(index: number) {
  selectedIndex.value = index;
}

const swiperRef = shallowRef<HTMLElement>();
const swiper = shallowRef<Swiper>();

onMounted(() => {
  if (!swiperRef.value) {
    return;
  }

  swiper.value = markRaw(
    new Swiper(swiperRef.value, {
      modules: [FreeMode],
      slidesPerView: 'auto',
      freeMode: true,
    }),
  );
});

onUpdated(() => {
  swiper.value?.update();
});

onBeforeUnmount(() => {
  if (swiper.value && !swiper.value.destroyed) {
    swiper.value.destroy(true, false);
  }
});
</script>

<style lang="scss" module>
.swiper {
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 1px;
  margin-bottom: -1px;
  max-width: 100%;

  @include media-breakpoint-up(lg) {
    padding-right: 0;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #3b3d4a;
    width: 100%;
  }
}

.slide {
  margin-right: 42px;
  width: auto;

  &:last-child {
    margin-right: 0;
  }
}

.tab {
  padding: 25px  0 30px;
  font-size: 18px;
  line-height: divide(30, 18);
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  border-bottom: 2px solid transparent;
}

.tabActive {
  color: $primary;
}
</style>
