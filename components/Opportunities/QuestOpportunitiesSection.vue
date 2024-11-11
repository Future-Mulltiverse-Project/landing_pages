<template>
  <section>
    <AppWrapper class="pb-14">
      <div class="grid grid-cols-1 gap-3 mb-12 md:grid-cols-2">
        <div class="md:order-first">
          <h2 style='color: #ffffff; text-align: left;' class="text-5xl font-semibold" >THE <span style='color:#CFB16D'>OPPORTUNITIES</span> <br/>FOR <span style='color:#CFB16D'>EVERYONE</span></h2>
        </div>
        <div>
          <p style=" line-height: 23px;" class="text-lg font-normal">The First time in history our platform makes it possible, that Individuals, projects and companies can come together in one fully immersive experience,
            accessible 24/7 from anywhere around the world, to connect, communicate, share & exchange valuable knowledge, solutions, goods, services or assets, and 
            work together using our platform as a catalyst to accelerate everyones progress and success, while every contribution is rewarded.
          </p>
        </div>
      </div>

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
              v-html="item.tab"
            />
          </div>
        </div>
      </div>
      <OpportunitiesTabContent
        v-if="selectedItem"
        :selected-item="selectedItem"
      />
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
import Img from '~/assets/images/video-bg.jpg';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import OpportunitiesTabContent from '~/components/Opportunities/OpportunitiesTabContent.vue';
import {
  Opportunity,
  useOpportunitiesItems,
} from '~/components/Opportunities/useOpportunitiesItems';
import 'swiper/css';
import 'swiper/css/free-mode';
import Video from '~/assets/images/nutshell.png';
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
  float:left;
  color: white;
}


.header {
  margin-bottom: 55px;
}

.text {
  margin-bottom: 55px;
}

.slide {
  width: auto;
}

.tab {
  padding: 23px 46px  ;
  font-size: 18px;
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
