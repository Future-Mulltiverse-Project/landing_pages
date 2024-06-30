<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6">
          <MainSectionHeader
            :class="$style.header"
            :title="`<strong style='color:white'><span style='color:#CFB16D'>THE WORLWIDE</span><br /> INFLUENCE & IMPACT</strong>`"
          />
        </div>
        <div class="col-12 col-lg-6">
          <MainSectionTextContent :class="$style.text">
            <p>
              The First time in history our platform makes it possible, that
              Individuals, projects and companies can come together in one fully
              immersive experience, accessible 24/7 from anywhere around the
              world, to connect, communicate, share & exchange valuable
              knowledge, solutions, goods, services or assets, and work together
              using our platform as a catalyst to accelerate everyones progress
              and success, while every contribution is rewarded.
            </p>
          </MainSectionTextContent>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <MediaPicture
            :class="$style.video"
            :src="Video"
            :width="1170"
            :height="656"
          />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :title="`<strong>Our <span style='color:white'>Vision</span> is clear</strong>`"
            :class="$style.header"
          />
          <MainSectionTextContent>
            <p>
              We are convinced that despite all the challenges the world is
              currently facing, we are also living in the most exciting time to
              be alive that holds unprecedented change and transformational
              potential for our world, the whole economy, and each individual,
              if the existing solutions and available opportunities are made
              accessible and are acknowledged and used consciously.
            </p>
          </MainSectionTextContent>
        </div>
        <div class="col-12 col-lg-6" style="margin-top: 0px">
          <MediaPicture :src="VisionImg" :width="539" :height="319" />
        </div>
      </div>

      <div class="row" :class="$style.item">
        <div class="col-12 col-lg-6">
          <MediaPicture :src="MissionImg" :width="539" :height="319" />
        </div>
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :title="`<strong>our <span style='color:white'>Mission</span> is Simple</strong>`"
            :class="$style.header"
          />
          <MainSectionTextContent>
            <p>
              We designed and built the FXPO to demonstrate how, in a world
              where challenges and opportunities coexist, the latest advances in
              technology can be used in ways never seen before in a meaningful
              and forward-thinking way to accelerate a more sustainable,
              inspiring and meaningful future for all, and at the same time to
              open up the possibility for everyone to gain access to these new
              opportunities and to make them usable in essence to create more
              value for every individual, every project and every company that
              resonates with this purpose.
            </p>
          </MainSectionTextContent>
        </div>
      </div>

      <div class="row" :class="$style.row" style="margin-top:100px">
        <div class="col-12 col-lg-6">
          <MainSectionHeader
            :class="$style.header"
            :title="`<strong style='color:CFB16D'>THE <span style='color:#FFFFFF'> OPPORTUNITUES</span><br /> FORE EVERYONE</strong>`"
          />
        </div>
        <div class="col-12 col-lg-6">
          <MainSectionTextContent :class="$style.text">
            <p>
              The First time in history our platform makes it possible, that
              Individuals, projects and companies can come together in one fully
              immersive experience, accessible 24/7 from anywhere around the
              world, to connect, communicate, share & exchange valuable
              knowledge, solutions, goods, services or assets, and work together
              using our platform as a catalyst to accelerate everyones progress
              and success, while every contribution is rewarded.
            </p>
          </MainSectionTextContent>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <MediaPicture
            :class="$style.video"
            :src="Video"
            :width="1170"
            :height="656"
          />
          <br />
          <br />
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
