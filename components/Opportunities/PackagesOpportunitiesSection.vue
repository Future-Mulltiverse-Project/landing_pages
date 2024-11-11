<template>
  <section :class="$style.section">
    <AppWrapper>
        <div class="row">
            <h4 style="text-align: center;margin-bottom: 38px; font-size: 28px; color:#CFB16D" >The Future Multiverse & <br/> Future Trends Catalyst <br/><span style="color: #ffffff;"> Ecosystem </span>“<span style="color: #ffffff;">In a Nustshell</span>”</h4>
          <div style="margin-bottom: 30px;">
            <MediaPicture :src="Img" :width="568" :height="320" />
          </div>
      </div>

      <div class="row" :class="$style.row">
        <div class="col-md-12">
          <h2 style='color: #CFB16D;font-size: 30px; text-align: center;padding-top: 35px;padding-bottom: 50px;'>The <span style='color:#ffffff'>Opportunities</span> for <span style='color:#ffffff'>Everyone</span>:</h2>
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
            />1
          </div>
        </div>
      </div>
      <OpportunitiesTabContent
        v-if="selectedItem"
        :selected-item="selectedItem"
      />
      <div class="row" style="margin-top: 40px;">
        <h3 style="color: #CFB16D;margin-bottom: 30px;text-align: center">Learn & Discover More:</h3>
        <div class="col-md-6">
          <NuxtLink
          to="https://future-multiverse.gitbook.io/guidebook"
            :class="$style.btn"
            class="btn btn-sm btn-outline-primary"
          >
            <span>GO TO <span style="color: #CFB16D"> GUIDEBOOK</span></span>
          </NuxtLink>
        </div>
        <div class="col-md-6">
          <NuxtLink
            to="https://sandbox.futuremultiverse.dev/"
            :class="$style.btn_second"
            class="btn btn-sm btn-outline-primary"
          >
            <span> ONBOARD <span style="color: #CFB16D"> NOW</span></span>
          </NuxtLink>
        </div>
      </div>
      <br />
      <br/>
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
import {
  Opportunity,
  useOpportunitiesItems,
} from '~/components/Opportunities/useOpportunitiesItems';
import 'swiper/css';
import 'swiper/css/free-mode';
import Img from '~/assets/images/nutshell.png';
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
  padding: 10px 0 ;
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
