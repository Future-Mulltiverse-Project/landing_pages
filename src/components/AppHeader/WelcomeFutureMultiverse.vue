<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row" style="padding-top: 125px;">
        <div class="col-md-6">
          <h2 style='color: #ffffff;font-size: 40px; text-align: left;padding-bottom: 50px;'>Welcome to the  <span style='color:#CFB16D'>Future Multiverse</span> & <span style='color:#CFB16D'>EXPO</span></h2>
        </div>
        <div class="col-md-6">
          <h4 style="font-size: 17px; line-height: 30px; font-weight: 100;">
            The Future Multiverse is a multi-dimensional eco-system created to be a 
            catalyst for humanity's destined future.<br>
            Catalyzing the Future Trends Groups' network & influence in 150+
            countries, we are empowering the most meaningful movement in history

          </h4>
        </div>
      </div>
      <br />
      <br />
      
      <div class="row">
          <div style="margin-bottom: 80px;">
                        
          <iframe style="width: 100%; height:600px"  src="https://www.youtube.com/embed/0K_GMH0s0Kc"></iframe>

          </div>
      </div>

      
      <div class="row">
              <div class="col-md-4">
                <NuxtLink
                  to="https://future-multiverse.gitbook.io/guidebook"
                  :class="$style.btn_second"
                  class="btn btn-sm btn-outline-primary"
                  style="margin-bottom: 20px;"
                >
                  <span style=" font-size:17px; ">LEARN MORE <span style="color: #ffffff"><br/>(GUIDEBOOK)</span></span>
                </NuxtLink>
              </div>
              <div class="col-md-4">
                <NuxtLink
                  :class="$style.btn_second"
                  class="btn btn-sm btn-outline-primary"
                  style="padding-top:18px; padding-bottom: 18px;margin-bottom: 20px;"
                >
                  <span style=" font-size:17px; color: white;">ENTER <span style="color: #CFB16D"> THE FUTURE</span><ThreeSixtyIcon style="width: 20px;"/></span>
                </NuxtLink>
              </div>  
              <div class="col-md-4">
                <NuxtLink
                  :class="$style.btn_second"
                  class="btn btn-sm btn-outline-primary"
                  style="padding-top:18px; padding-bottom: 18px;margin-bottom: 20px; float: right;"
                >
                  <span style="color: white; font-size:17px; "><span style="color: #CFB16D">DISCOVER </span>MAP</span>
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
import Img from '~/assets/images/video-bg.jpg';

import ThreeSixtyIcon from '~/icons/ThreeSixtyIcon.vue';
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
.section {
  @include padding(10px 0);
}

.row {
  @include rfs(12px, --gutter-x);
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
  @include font-size(18px);
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
