<template>
  <MainSection angle-right-top has-gradient :class="$style.section">
    <AppWrapper :class="$style.wrapper">
      <SectionHeader :class="$style.header">
        <template #title>
          <span>FutureX</span>
          Partners
        </template>
      </SectionHeader>
      <swiper
        loop
        :autoplay="true"
        slides-per-view="auto"
        :modules="[Autoplay]"
      >
        <swiper-slide
          v-for="(item, index) in items"
          :key="index"
          :class="$style.slide"
        >
          <img :src="item.img" :class="$style.img" :alt="item.name" />
        </swiper-slide>
      </swiper>
    </AppWrapper>
  </MainSection>
</template>
<script lang="ts" setup>
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper';
import MainSection from '~/components/Section/MainSection.vue';
import SectionHeader from '~/components/utilities/SectionHeader.vue';

const items = ref([
  {
    name: 'FutureX Studios',
    img: '/images/_logos/futurex-studios.svg',
  },
  {
    name: 'Beingz',
    img: '/images/_logos/beingz.png',
  },
  {
    name: 'CPI Technologies',
    img: '/images/_logos/cpi.svg',
  },
  {
    name: 'BTD',
    img: '/images/_logos/btd.png',
  },
  {
    name: 'Etherium',
    img: '/images/_logos/etherium.svg',
  },
  {
    name: 'Epic Games',
    img: '/images/_logos/epic-games.svg',
  },
  {
    name: 'Unreal Engine',
    img: '/images/_logos/unreal-engine.svg',
  },
  {
    name: 'BitDream',
    img: '/images/_logos/BitDream.png',
  },
  {
    name: 'VFFV',
    img: '/images/_logos/VFFV.png',
  },
  {
    name: 'Limitless USA LLC',
    img: '/images/_logos/Limitless-USA.svg',
  },
  {
    name: 'Sleek',
    img: '/images/_logos/sleek.svg',
  },
]);
</script>

<style lang="scss" module>
.section {
  --sectionGradient: linear-gradient(
    180deg,
    rgb(33, 38, 70) 0%,
    transparent 58.66%
  );
}

.wrapper {
  padding-top: rem-calc(68px);
  padding-bottom: rem-calc(100px);
}

.header {
  text-align: center;
  margin-bottom: wrap-calc(172px);
}

.swiper {
  //padding-left: calc(50% - $wrapper-inner-width / 2);
}

.slide {
  width: auto;
  margin-right: rem-calc(20px);

  &:last-child {
    margin-right: 0;
  }

  @include media-breakpoint-up(md) {
    margin-right: rem-calc(40px);
  }
}

.img {
  height: rem-calc(40px);

  @include media-breakpoint-up(md) {
    height: rem-calc(60px);
  }
}
</style>
