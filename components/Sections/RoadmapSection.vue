<template>
  <section :class="$style.section">
    <AppWrapper>
      <MainSectionHeader
        :class="$style.header"
        :title="`<strong>Launch Roadmap</strong><br>2023`"
        title-lg
      />
      <div :class="$style.legend" class="row">
        <div class="col-auto">
          <div :class="[$style.legendItem, $style.preparation]">
            In Preparation
          </div>
        </div>
        <div class="col-auto">
          <div :class="[$style.legendItem, $style.ongoing]">Ongoing</div>
        </div>
        <div class="col-auto">
          <div :class="[$style.legendItem, $style.completed]">Completed</div>
        </div>
        <div class="col-auto">
          <div :class="[$style.legendItem, $style.future]">Future</div>
        </div>
      </div>
    </AppWrapper>
    <div :class="$style.wrapper">
      <div ref="swiperRef" class="swiper" :class="$style.swiper">
        <div class="swiper-wrapper">
          <template v-if="items?.length">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="swiper-slide"
              :class="[
                $style.slide,
                item.stat === 'completed' && $style.completed,
                item.stat === 'current' && $style.current,
                item.stat === 'in_preparation' && $style.preparation,
                item.stat === 'ongoing' && $style.ongoing,
                item.stat === 'future' && $style.future,
              ]"
            >
              <div :class="$style.item">
                <div :class="$style.itemBody">
                  <div
                    :class="[
                      $style.itemLabel,
                      item.stat !== 'current' && $style.itemLabelHidden,
                    ]"
                  >
                    Current Stage
                  </div>
                  <div :class="$style.itemTime">{{ item.time }}</div>
                  <h4 :class="$style.itemTitle" v-html="item.title" />
                  <p v-if="item.text" :class="$style.itemText">
                    {{ item.text }}
                  </p>
                  <NuxtLink
                    v-if="item.too"
                    :to="item.too"
                    :class="$style.itemBtn"
                    class="btn btn-sm btn-outline-primary"
                  >
                    Explore more
                  </NuxtLink>
                </div>
                <div :class="$style.itemProgress">
                  <div
                    v-if="index !== 0"
                    :class="$style.itemProgressLine"
                  ></div>
                  <div :class="$style.itemProgressBarC">
                    <div
                      v-if="index !== 0"
                      :class="$style.itemProgressBarLeft"
                    ></div>
                  </div>
                  <div :class="$style.itemMarker"></div>
                  <div :class="$style.itemProgressBarC">
                    <div :class="$style.itemProgressBarRight"></div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <AppWrapper>
      <NuxtLink
        to="/"
        :class="$style.sectionBtn"
        class="btn btn-outline-primary"
      >
        READ LAUNCHPAPER
      </NuxtLink>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import {
  markRaw,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  shallowRef,
} from 'vue';
import Swiper, { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';

const items: {
  stat: string;
  time: string;
  title: String;
  text?: string;
  too?: string;
}[] = [
  {
    stat: 'completed',
    time: 'Q1 2020',
    title: 'Project<br/>start',
  },
  {
    stat: 'current',
    time: 'Q3 2023',
    title: 'Beta-Test &<br/>Internal Launch',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
  },
  {
    stat: 'ongoing',
    time: 'Q3 2023',
    title: 'VIP Pre-Launch<br/>First of 3 FXPO<br/>Launch Events',
    text: 'Exlusive Pre-Launch Mint-Event for VIP FutureX Token (FXTE) Owners.',
    too: '/',
  },
  {
    stat: 'in_preparation',
    time: 'Q3 2023',
    title: 'Pre-Launch<br/>Second of 3 FXPO<br/>Launch Events',
    text: 'Exlusive Pre-Launch Mint -Event for Verified FutureX Token (FXTE) Owners, that bought their Tokens in the Public Market.',
    too: '/',
  },
  {
    stat: 'future',
    time: 'Q3 2023',
    title: 'Public FXPO Launch<br/>Third of 3 FXPO<br/>Launch Events',
    text: 'Official Public Launch Mint-Event for any international private or institutional buyer, and projects or companies of all sizes.',
    too: '/',
  },
];
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
.section {
  //@include padding-top(256px + 146px);
  padding-top: 146px;
  text-align: center;
}

.header {
  margin-bottom: 34px;

  h2 {
    line-height: divide(55, 50);
  }
}

.legend {
  padding-bottom: 70px;

  --gutter-x: #{rem-calc(24px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;
}

.legendItem {
  font-size: 14px;
  color: #9c9c9c;
  font-weight: 500;
  padding-left: rem-calc(22px);
  position: relative;
  line-height: divide(18, 14);

  &::before {
    content: '';
    position: absolute;
    top: em-calc(9, 14);
    margin-top: -5px;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #9c9c9c;
  }

  &.preparation::before {
    background-color: #cd7224;
  }

  &.ongoing::before {
    background-color: #f7ca36;
  }

  &.completed::before {
    background-color: #8a9b29;
  }

  &.future::before {
    background-color: #bc1950;
  }
}

.wrapper {
  //max-width: 1440px;
  //width: 100%;
  //margin: 0 auto;
}

.swiper {
  padding-left: calc(50% - (1440px / 2) + 24px);
  padding-right: calc(50% - (1440px / 2) + 24px);

  @include media-breakpoint-up(sm) {
    padding-left: rem-calc(24px);
    padding-right: rem-calc(24px);
  }

  @media (min-width: 1441px) {
    padding-left: calc(50% - (1440px / 2) + 24px);
    padding-right: calc(50% - (1440px / 2) + 24px);
  }
}

.slide {
  height: auto;
  width: rem-calc(216px);

  @include media-breakpoint-up(sm) {
    width: rem-calc(264px);
  }
}

.item {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.itemBody {
  align-items: center;
  border-left: 1px dashed transparent;
  border-right: 1px dashed transparent;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  max-width: rem-calc(216px);
  padding: rem-calc(42px 16px);
  text-align: center;

  .current & {
    background-color: rgba(#1c203d, 0.5);
    border-color: #606899;
  }
}

.itemTime {
  font-size: 26px;
  line-height: divide(30, 26);
  margin-bottom: rem-calc(105px);

  .completed &,
  .current & {
    color: #8a9b29;
  }

  .ongoing & {
    color: #f7ca36;
  }

  .preparation & {
    color: #e88024;
  }

  .future & {
    color: #bc1950;
  }
}

.itemProgress {
  display: flex;
  left: 0;
  align-items: center;
  position: absolute;
  top: rem-calc(130px);
  width: 100%;
}

.itemProgressLine {
  border-top: 1px solid #2a3052;
  position: absolute;
  top: 50%;
  content: '';
  left: 0;
  width: 100%;

  .slide:last-child & {
    width: 100vw;
  }
}

.itemProgressBarC {
  flex-grow: 1;
  position: relative;
}

.itemProgressBarLeft,
.itemProgressBarRight {
  background-color: #53555d;
  border-radius: 50rem;
  height: rem-calc(10px);
  width: 102%;

  .completed &,
  .current & {
    background-color: #8a9b29;
  }
}

.slide:not(:first-child) .itemProgressBarLeft {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.slide:not(:last-child) .itemProgressBarRight {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.current + .slide .itemProgressBarLeft {
  background-color: #8a9b29;
}

.itemMarker {
  color: #53555d;
  background-color: #0c0f22;
  border-radius: 50rem;
  flex-shrink: 0;
  border: 2px solid currentColor;
  height: rem-calc(40px);
  margin: rem-calc(0 12px);
  width: rem-calc(40px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .completed &,
  .current & {
    color: #8a9b29;
  }

  .ongoing & {
    color: #f7ca36;
  }

  .preparation & {
    color: #e88024;
  }

  .future & {
    color: #bc1950;
  }

  &::after {
    background-color: currentColor;
    content: '';
    width: rem-calc(6px);
    height: rem-calc(6px);
    border-radius: 50%;
    display: block;
  }
}

.itemLabel {
  font-size: 14px;
  font-weight: 500;
  line-height: divide(18, 14);
  margin-bottom: rem-calc(2px);
}

.itemLabelHidden {
  opacity: 0;
}

.itemTitle {
  font-size: 18px;
  margin-bottom: 22px;
  line-height: divide(30, 18);

  .completed & {
    color: #8a9b29;
  }
}

.itemText {
  font-size: 16px;
  margin-bottom: 24px;
  font-family: 'Nunito Sans', sans-serif;
  opacity: 0.5;

  &:last-child {
    margin-bottom: 0;
  }
}

.itemBtn {
  padding-left: rem-calc(17px);
  padding-right: rem-calc(17px);
  margin-top: auto;
}

.sectionBtn {
  margin-top: 60px;
}
</style>
