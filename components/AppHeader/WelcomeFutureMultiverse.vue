<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="grid grid-cols-1 gap-3 mt-0 pt-7 lg:pt-20 lg:mt-8 md:grid-cols-2" :class="$style.row" >
        <div class='md:order-first'>
          <h2 class="font-semibold pb-4 lg:pb-12" style='color: #ffffff;font-size: 40px;  text-align: left;'>WELCOME TO THE <span style='color:#CFB16D'>FUTURE MULTIVERSE </span> & <span style='color:#CFB16D'>EXPO</span></h2>
        </div>
        <div >
          <h4 class="font-medium" style="font-size: 17px; line-height: 30px;  padding-top: 0px;">
            The Future Multiverse is a multi-dimensional eco-system created to be a 
            catalyst for humanity's destined future.<br>
            Catalyzing the Future Trends Groups' network & influence in 150+
            countries, we are empowering the most meaningful movement in history

          </h4>
        </div>
      </div>

      <div class="row">
        <div style="margin-bottom: 50px;" class="md:order-first">  <!-- Add md:order-first here -->
          <iframe style="width: 100%; height:600px"  src="https://www.youtube.com/embed/0K_GMH0s0Kc"></iframe>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 items-center md:grid-cols-3" style="margin-bottom: 40px;">
        <div class="flex justify-center md:justify-end">
          <button
            :class="$style.btn_second"
            class="btn-outline-primary"
            style="font-weight: 500; padding-bottom: 10px; padding-top: 10px"
          >
            <span style=" font-size:16px; ">LEARN <span style="color: #CFB16D"> MORE<br/>(</span>GUIDE<span style="color: #CFB16D">BOOK)</span></span>
        </button>
        </div>
        <div class="flex justify-center md:justify-center ">
          <button
            :class="$style.btn_second"
            class="btn btn-sm btn-outline-primary"
            style="font-weight: 500; border-color: white; padding-bottom: 23px; padding-top: 23px"
          >
            <span style=" font-size:16px; color: white;">ENTER <span style="color: #CFB16D"> THE FUTURE</span><ThreeSixtyIcon style="width: 20px; float: right; margin-top: 6px; margin-left: 8px;"/></span>
          </button>
        </div>  
        <div class="flex justify-center md:justify-start">
          <button
            :class="$style.btn_second"
            class="btn btn-sm btn-outline-primary"
            style="font-weight: 500; padding-bottom: 23px; padding-top: 23px"
          >
            <span style="color: #CFB16D; font-size:16px; ">DISCOVER</span> <span style="color: #ffffff">MAP</span>
          </button>
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
