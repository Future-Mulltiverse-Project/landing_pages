<template>
    <section :class="$style.section">
      <AppWrapper>
        
        <div v-if="opportunities?.length" ref="swiperRef" class="swiper">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in opportunities"
        :key="index"
        class="swiper-slide"
        :class="$style.slide"
      >
        <div
          :class="[$style.tab, selectedIndex === index && $style.active]"
          @click="select(index)"
        >
          {{ item.tab }}qq
        </div>
      </div>
    </div>
  </div>

  <OpportunitiesTabContent
    v-if="selectedItem"
    :selected-item="selectedItem"
  />
  <div class="row" style="margin-top: 70px">
    <div class="col-md-6">
      <NuxtLink :class="$style.btn" to="https://future-multiverse.gitbook.io/guidebook" class="btn btn-sm btn-outline-primary">
        <span>
          GO TO
          <span style="color: #cfb16d">GUIDEBOOK</span>
        </span>
      </NuxtLink>
    </div>
    <div class="col-md-6">
      <NuxtLink
        to:="https://sandbox.futuremultiverse.dev/"
        :class="$style.btn_second"
        class="btn btn-sm btn-outline-primary"
      >
        <span>
          ONBOARD
          <span style="color: #cfb16d">NOW</span>
        </span>
      </NuxtLink>
    </div>
  </div>

  
</AppWrapper>
  </section>
</template>


<script lang="ts" setup>
import {
  computed,
  markRaw,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  shallowRef,
} from 'vue';
import Swiper, { FreeMode } from 'swiper';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import OpportunitiesTabContent from '~/components/Opportunities/OpportunitiesTabContent.vue';
import MissionImg from '~/assets/images/quest-mission.jpg';
import {
  Opportunity,
  useOpportunitiesItems,
} from '~/components/Opportunities/useOpportunitiesItems';
import 'swiper/css';
import 'swiper/css/free-mode';
import Video from '~/assets/images/quest_video.png';
import VisionImg from '~/assets/images/quest-vision.jpg';
import MediaPicture from '~/components/Media/MediaPicture.vue';

const opportunities = useOpportunitiesItems();

const selectedIndex = ref(0);

const selectedItem = computed<Opportunity | undefined>(
  () => opportunities.value[selectedIndex.value],
);

function select(index: number) {
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
.btn {
  float: right;
  color: white;
}
.btn_second {
  float: left;
  color: white;
}
.section {
  @include padding(120px 0);
}

.row {
  @include rfs(112px, --gutter-x);
}

.header {
  @include margin-bottom(55px);
}

.text {
  @include margin-bottom(55px);
}

.slide {
  width: auto;
}

.tab {
  @include padding(23px 46px);
  @include font-size(22px);
  color: $primary;
  cursor: pointer;
  line-height: divide(30, 22);
  user-select: none;
}

.active {
  background-color: #1c213e;
  color: #fff;
}
</style>
