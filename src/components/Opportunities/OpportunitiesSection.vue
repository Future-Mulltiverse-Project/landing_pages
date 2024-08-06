<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6">
          <MainSectionHeader
            :class="$style.header"
            :title="`<strong style='font-size: 40px !important; color:white'><span style='color:#CFB16D'>FUTURE TRENDS</span> GROUP</strong>`"
          />
          
          <p>
              We are convinced that despite all the challenges the world is currently facing, we 
              are also living in the most exciting time to be alive that holds unprecedented change 
              and transformational potential for our world, the whole economy, and each individual, if 
              the existing solutions and available opportunities are made accessible and are acknowledged and used consciously.
            </p>
            

            <div class="row"  >
              <div class="col-md-4">
                  <NuxtLink
                    :class="$style.btn_second"
                    class="btn btn-sm btn-outline-primary"
                      style="padding-top: 18px; padding-bottom:18px;width:100%; font-size:15px"
                  >
                    <span><span style="color: #ffffff">WEBSITE</span></span>
                  </NuxtLink>
              </div>
              <div class='col-md-4'>
                  <NuxtLink
                    :class="$style.btn_second"
                    class="btn btn-sm btn-outline-primary"
                      style=" padding-top: 18px; padding-bottom:18px; width:100%; font-size:15px"
                  >
                    <span style="color: white;">MATRIX</span>
                  </NuxtLink>
              </div>
              <div class='col-md-4'>
                  <NuxtLink
                    :class="$style.btn_second"
                    class="btn btn-sm btn-outline-primary"
                    style="background-color: #CFB16D;font-size:12px; width:100%;"
                  >
                    <span style="color: white;">EXPERIENCE <br/>IN Fxpo</span>
                  </NuxtLink>
              </div>
            </div>
            <br/>
            
        </div>
        <div class="col-12 col-lg-6">
          <MainSectionTextContent :class="$style.text">
            
          <iframe style="width: 100%;" height="319" src="https://www.youtube.com/embed/o_LwGcSnxBg"></iframe>

          </MainSectionTextContent>
        </div>
      </div>

      <FutureGroupSlider/>

      <div class="row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :title="`<strong>Future Trends Matrix <br/><span style='color:white'>Influence & impact</span></strong>`"
            :class="$style.header"
          />
        </div>
        <div class="col-12 col-lg-6" style="margin-top: 0px">
          <MainSectionTextContent>
            <p>
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

      <div class="row"  >
        <div class="col-md-2"></div>
        <div class="col-md-3">
            <NuxtLink
              :class="$style.btn_second"
              class="btn btn-sm btn-outline-primary"
                style="padding-top: 18px; padding-bottom:18px;"
            >
              <span><span style="color: #ffffff">FUTURE TRENDS WEBSITE</span></span>
            </NuxtLink>
          </div>
          <div class='col-md-3'>
            <NuxtLink
              :class="$style.btn_second"
              class="btn btn-sm btn-outline-primary"
                style=" padding-top: 18px; padding-bottom:18px;"
            >
              <span style="color: white;">FUTURE TRENDS MATRIX</span>
            </NuxtLink>
          </div>
          <div class='col-md-4'>
            <NuxtLink
              :class="$style.btn_second"
              class="btn btn-sm btn-outline-primary"
                style="background-color: #CFB16D;"
            >
              <span style="color: white;">EXPERIENCE <br/>IN FUTURE MULTIVERSE</span>
            </NuxtLink>
          </div>
          </div>

      <div class="row" :class="$style.row" style="margin-top:40px">
        <div class="col-12 col-lg-6">
          <MainSectionHeader
            :class="$style.header"
            :title="`<strong style='color:CFB16D; font-size: 37px !important;'>FUTURE <span style='color:#FFFFFF'> MULTIVERSE & </span><br /> FUTURE <span style='color:#ffffff'>TRENDS CATALYST </span></strong>`"
          />
        </div>
        <div class="col-12 col-lg-6">
          <MainSectionTextContent :class="$style.text">
            <p>The Future Multiverse is a multi-dimensional eco-system created to be a catalyst for humanity's destined future. <br/><br/>
              Catalyzing the Future Trends Groups' network & influence in 150+ countries, we are empowering the most meaningful movement in history. 
            </p>
          </MainSectionTextContent>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
        <div class="col-12 col-lg-12">
          <iframe style="width: 100%;" height="656" src="https://www.youtube.com/embed/ttm0a_P1sGc"></iframe>
        </div>
          <br />
          <br />
          <div class="row">
              <div class="col-md-3"></div>  
              <div class="col-md-2">
                <NuxtLink
                  to="https://future-multiverse.gitbook.io/guidebook"
                  :class="$style.btn_second"
                  class="btn btn-sm btn-outline-primary"
                >
                  <span>LEARN MORE <span style="color: #ffffff"><br/>(GUIDEBOOK)</span></span>
                </NuxtLink>
              </div>
              <div class="col-md-2">
                <NuxtLink
                  :class="$style.btn_second"
                  class="btn btn-sm btn-outline-primary"
                  style="padding-top:18px; padding-bottom: 18px;"
                >
                  <span style=" font-size:11px; color: white;">ENTER <span style="color: #CFB16D"> THE FUTURE</span></span>
                </NuxtLink>
              </div>  
              <div class="col-md-2">
                <NuxtLink
                  to="https://map.futuremultiverse.dev"
                  :class="$style.btn_second"
                  class="btn btn-sm btn-outline-primary"
                  style="padding-top:18px; padding-bottom: 18px;"
                >
                  <span style="color: white;"><span style="color: #CFB16D">DISCOVER </span>MAP</span>
                </NuxtLink>
                </div>
              <div class="col-md-1"></div>  
            </div>
          <br />
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
