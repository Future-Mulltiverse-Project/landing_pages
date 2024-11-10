<template>
  <div
    v-if="prevHidden === false"
    :class="$style.prev"
    @click="swiper.slideTo(swiper.params.initialSlide, 1000)"
  >
    <ArrowIcon :class="$style.icon" />
  </div>
  <div
    v-if="nextHidden === false"
    :class="$style.next"
    @click="swiper.slideNext(500)"
  >
    <ArrowIcon :class="$style.icon" />
  </div>
</template>

<script lang="ts" setup>
import { useSwiper } from 'swiper/vue';
import { ref } from 'vue';
import ArrowIcon from '~/icons/ArrowIcon';

const swiper = useSwiper();

const nextHidden = ref(false);
const prevHidden = ref(false);

swiper.value.on('progress', (swiper) => {
  nextHidden.value = swiper.isEnd;
  prevHidden.value = swiper.isBeginning;

  if (nextHidden.value === false) {
    prevHidden.value = true;
  }
});
</script>

<style lang="scss" module>
.prev,
.next {
  color: #fff;
  align-items: center;
  border-radius: 50%;
  border: 3px solid $primary;
  display: flex;
  height: rem-calc(54px);
  justify-content: center;
  width: rem-calc(54px);
  position: absolute;
  top: 50%;
  z-index: 2;
}

.prev {
  left: 0;
  transform: translate(50%, -50%);
}

.next {
  right: rem-calc(60px);
  transform: translate(50%, -50%) rotate(180deg);
}

.icon {
  height: rem-calc(20px);
  width: rem-calc(20px);
}
</style>
