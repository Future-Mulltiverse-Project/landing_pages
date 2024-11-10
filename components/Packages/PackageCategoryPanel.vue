<template>
  <div :class="$style.panel">
    <div :class="$style.header">
      <div class="row" :class="$style.headerRow">
        <div
          v-if="item.packages?.length"
          class="col-12 col-lg"
          :class="$style.headerLeftCol"
        >
          <div ref="swiperRef" class="swiper" :class="$style.swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(filter, index) in filters"
                :key="index"
                class="swiper-slide"
                :class="$style.slide"
                @click="selectIndex(index)"
              >
                <div
                  :class="[
                    $style.tab,
                    selectedIndex === index && $style.tabActive,
                  ]"
                >
                  {{ filter }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-auto" :class="$style.headerRightCol">
          <NuxtLink to="/" :class="$style.contactLink">
            Need Help? Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
    <div :class="$style.content">
      <div v-if="item.text" :class="$style.text">{{ item.text }}</div>
      <div
        v-if="
          item.packages?.length &&
          item.packages
            .map((packages) => Number(packages.index))
            .includes(selectedIndex)
        "
        class="row"
        :class="$style.row"
      >
        <div
          v-for="(packageItem, packageItemIndex) in item.packages.filter(
            (p) => Number(p.index) === selectedIndex,
          )"
          :key="packageItemIndex"
          class="col-12 col-md-6 col-lg-4"
        >
          <!-- Just for testing purposes -->
          <PackageListItem2 :package="packageItem" :type="item.type" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PackageListItem2 from '~/components/Packages/PackageListItem2.vue';
import PackagesListFilters from '~/components/Packages/PackagesListFilters.vue';

interface PackageItem {
  name: string;
  price: string;
  fxpo_citizen_pass_nft: string;
  fxpo_m3_nfts: string;
  index?: string;
  fxte: string;
  packages?: string;
  fxpo_expo_pass_nft?: string;
  launch_type?: string;
}

interface ItemData {
  type: string;
  title: string;
  headline?: string;
  text?: string;
  packages?: PackageItem[];
}

defineProps<{ item: ItemData }>();

import Swiper, { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import {
  markRaw,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  shallowRef,
  ref,
} from 'vue';

const filters = [
  'VIP Pre-Launch',
  'Pre-Launch',
  'Public Launch',
];

const selectedIndex = ref(0);

function selectIndex(index: number) {
  selectedIndex.value = index;
  console.log(selectedIndex.value);
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
.panel {
  @include margin-bottom(50px);
  background-color: #0c0e1f;
  margin-top: rem-calc(10px);
  border: 1px solid $primary;
  position: relative;
  text-align: left;
  min-width: 0;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    background-color: #0c0e1f;
    content: '';
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 100%;
  }
}

.row {
  --gutter-x: #{rem-calc(20px)};
  --gutter-y: #{rem-calc(20px)};
}

.header {
  border-bottom: 1px solid #3b3d4a;
}

.headerRow {
  align-items: center;
}

.headerRightCol {
  margin-left: auto;
}

.headerLeftCol {
  flex-grow: 1;
}

.contactLink {
  @include font-size(14px);
  @include margin(25px 60px 30px);
  display: inline-block;
  line-height: divide(18, 14);
  font-weight: 500;

  @include media-breakpoint-up(lg) {
    margin-left: 0;
  }
}

.content {
  @include padding(0 60px 70px);
}

.text {
  @include font-size(16px);
  @include margin(44px 0 50px);
  font-weight: 500;
  opacity: 0.5;
}
.swiper {
  @include padding-left(60px);
  @include padding-right(60px);
  padding-bottom: 1px;
  margin-bottom: -1px;
  max-width: 100%;

  @include media-breakpoint-up(lg) {
    padding-right: 0;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #3b3d4a;
    width: 100%;
  }
}

.slide {
  @include margin-right(42px);
  width: auto;

  &:last-child {
    margin-right: 0;
  }
}

.tab {
  @include padding(25px 0 30px);
  @include font-size(18px);
  line-height: divide(30, 18);
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  border-bottom: 2px solid transparent;
}

.tabActive {
  color: $primary;
}
</style>
