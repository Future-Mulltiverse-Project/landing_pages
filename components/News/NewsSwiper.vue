<template>
  <swiper
    :class="$style.swiper"
    :watch-slides-progress="true"
    slides-per-view="auto"
  >
    <swiper-slide
      v-for="(item, index) in items"
      :key="index"
      :class="$style.slide"
    >
      <NewsListItem :item="item" />
    </swiper-slide>
    <NewsSwiperNav />
  </swiper>
</template>

<script lang="ts" setup>
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import NewsListItem from '~/components/News/NewsListItem.vue';
import NewsSwiperNav from '~/components/News/NewsSwiperNav.vue';
import { useNewsItems } from '~/components/News/useNewsItems';

const items = useNewsItems();
// const itemRefs = ref([]);

// function setSwiper(swiper: SwiperCore) {
// swiper.slides.forEach((slide, index) => {
//   const slideVisible = ref(true);
//
//   const slidePositionEnd = slide.clientWidth * (index + 1);
//
//   if (slidePositionEnd > swiper.width) {
//     slideVisible.value = false;
//   }
// });
// }
</script>

<style lang="scss" module>
.swiper {
  //background-color: #141830;
  //@include padding(0 $wrapper-padding);
  max-width: 100%;
  margin: 0;
}

.slide {
  background-color: #1c213e;
  width: 80%;
  max-width: rem-calc(390px);

  &:nth-child(even) {
    background-color: #141830;
  }

  &:global(.swiper-slide-next + .swiper-slide-visible) {
    opacity: 0.2;
  }
}

.slideIsHidden {
  opacity: 0.2;
}
</style>
