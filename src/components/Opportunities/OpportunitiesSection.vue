<template>
  <section >
    <AppWrapper>
      <div class="grid grid-cols-1 gap-3 mt-8 md:grid-cols-2">
        <div class="md:order-first">
          <h2 class="mb-3">
            <strong style="font-size: 40px !important; color:white"><span style="color:#CFB16D">FUTURE TRENDS</span> GROUP</strong>
          </h2>

          <p class="pb-3 text-lg">
            We are convinced that despite all the challenges the world is currently facing, we 
            are also living in the most exciting time to be alive that holds unprecedented change 
            and transformational potential for our world, the whole economy, and each individual, if 
            the existing solutions and available opportunities are made accessible and are acknowledged and used consciously.
          </p>

          <div class="flex items-baseline mt-4 mb-12 flex-wrap "> 
            <button class="btn btn-outline-primary font-semibold mr-2 mb-2" style="padding-left: 40px; padding-right: 40px;">website</button>
            <button class="btn btn-outline-primary font-semibold mr-2 mb-2" style="padding-left: 40px; padding-right: 40px;">Matrix</button>
            <button class="btn btn-outline-primary font-semibold mr-2 mb-2" style="padding-left: 40px; padding-right: 40px; background-color: #CFB16D">Experience in fxpo</button>
          </div>
        </div>
        <div class="pr-5 md:pr-0">
          <MainSectionTextContent :class="$style.text">      
            <iframe style="width: 100%;" height="330" src="https://www.youtube.com/embed/o_LwGcSnxBg"></iframe>
          </MainSectionTextContent>
        </div>
      </div>

      <FutureGroupSlider/>

      <div class="grid grid-cols-1 gap-3 mt-12 mb-12 md:grid-cols-2">
        <div class="md:order-first">
          <MainSectionHeader
            :title="`<strong class='text-5xl font-medium' >Future Trends Matrix <br/><span style='color:white'>Influence & impact</span></strong>`"
            class="font-light"
          />
        </div>
        <div class="">
          <MainSectionTextContent>
            <p class="text-white">
              The First time in history our platform makes it possible, that Individuals, projects and 
              companies can come together in one fully immersive experience, accessible 24/7 from anywhere 
              around the world, to connect, communicate, share & exchange valuable knowledge, solutions, goods,
              services or assets, and work together using our platform as a catalyst to accelerate everyones 
              progress and success, while every contribution is rewarded.
            </p>
          </MainSectionTextContent>
        </div>
      </div>

      <QuestGallerySection/>

      <div class="flex items-baseline mt-12 mb-12 justify-center flex-wrap"> 
        <button class="btn btn-outline-primary font-semibold mr-2 mb-2">Future Trends website</button>
        <button class="btn btn-outline-primary font-semibold mr-2 mb-2">Future Trends Matrix</button>
        <button class="btn btn-outline-primary font-semibold mr-2 mb-2" style="background-color: #CFB16D;">Experience in future mutliverse</button>
      </div>

      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div  class="md:order-first">
          <MainSectionHeader
            class="font-light"
            :title="`<strong style='color:CFB16D; font-size: 37px !important;'>FUTURE <span style='color:#FFFFFF'> MULTIVERSE & </span><br /> FUTURE <span style='color:#ffffff'>TRENDS CATALYST </span></strong>`"
          />
        </div>
        <div>
          <MainSectionTextContent >
            <p class="text-base" >The Future Multiverse is a multi-dimensional eco-system created to be a catalyst for humanity's destined future. <br/>
              Catalyzing the Future Trends Groups' network & influence in 150+ <br/>countries, we are empowering the most meaningful movement in history. 
            </p>
          </MainSectionTextContent>
        </div>
      </div>
      

      <div class="grid grid-cols-1 gap-2 mt-12">
        <div>
          <iframe style="width: 100%;" height="656" src="https://www.youtube.com/embed/ttm0a_P1sGc"></iframe>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 mt-12 ml-10 mr-10 md:grid-cols-4">
        <NuxtLink
          to="https://future-multiverse.gitbook.io/guidebook"
          :class="$style.btn_second"
          class="btn btn-sm btn-outline-primary text-center"
        >
          <span class="font-medium text-sm" style="color: white;">LEARN <span style="color: #CFB16D"> MORE</span></span>
        </NuxtLink>
        <NuxtLink
          :class="$style.btn_second"
          class="btn btn-sm btn-outline-primary text-center"
          style="padding-top:18px; padding-bottom: 18px;"
        >
          <span class="font-medium text-sm" style=" color: white;">GUIDE<span style="color: #CFB16D">BOOK</span></span>
        </NuxtLink>
        <NuxtLink
          to="https://map.futuremultiverse.dev"
          :class="$style.btn_second"
          class="btn btn-sm btn-outline-primary text-center"
          style="padding-top:18px; padding-bottom: 18px;"
        >
          <span  class="font-medium text-sm" style=" color: white;">DISCOVER <span style="color: #CFB16D"> MAP</span></span>
        </NuxtLink>
        <NuxtLink
          to="https://map.futuremultiverse.dev"
          :class="$style.btn_second"
          class="btn btn-sm btn-outline-primary text-center"
          style="padding-top:18px; padding-bottom: 18px; border-color: white;"
        >
          <span class="font-medium text-sm" style=" color: white;">ENTER <span style="color: #CFB16D"> THE FUTURE</span></span>
        </NuxtLink>
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
import QuestGallerySection from '~/components/Slider/QuestGallerySection.vue';
import FutureGroupSlider from '~/components/Slider/FutureGroupSlider.vue';
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
  @include padding(0px 0);
}

.row {
  @include rfs(112px, --gutter-x);
  margin-top: 30px;
}

.header {
  @include margin-bottom(25px);
}

.text {
  @include margin-bottom(25px);
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
