<template>
  <MainSection angle-bottom :class="$style.section">
    <template #bg>
      <div :class="$style.bg">
        <MediaPicture
          src="/images/cars-bg-main.jpg"
          :width="1440"
          :height="810"
        />
      </div>
    </template>
    <div :class="$style.row">
      <div :class="$style.col1">
        <div :class="$style.headerContainer">
          <MediaPicture
            src="/images/bckg-quote.jpg"
            :width="684"
            :height="766"
            layout="fill"
          />
          <SectionHeader :class="$style.header">
            <template #title>
              News
              <span>& Press</span>
            </template>
          </SectionHeader>
          <div class="row" :class="$style.links">
            <div class="col-auto">
              <nuxt-link
                :to="{ name: 'index' }"
                :class="[$style.link, $style.linkActive]"
              >
                All
              </nuxt-link>
            </div>
            <div class="col-auto">
              <nuxt-link :to="{ name: 'index' }" :class="$style.link">
                News
              </nuxt-link>
            </div>
            <div class="col-auto">
              <nuxt-link :to="{ name: 'index' }" :class="$style.link">
                In press
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.col2">
        <NewsSwiper />
      </div>
    </div>
  </MainSection>
</template>

<script lang="ts" setup>
import MediaPicture from '~/components/Media/MediaPicture.vue';
import NewsSwiper from '~/components/News/NewsSwiper.vue';
import MainSection from '~/components/Section/MainSection.vue';
import SectionHeader from '~/components/utilities/SectionHeader.vue';
</script>

<style lang="scss" module>
.section {
  --sectionBackgroundImageOverflow: visible;
}

.bg {
  position: absolute;
  left: 50%;
  margin-bottom: calc(var(--angleHeight) / 2);
  bottom: 0;
  transform: translate(-50%, 302px);
  width: 1440px;
}

.row {
  @include margin-bottom(180px);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @include media-breakpoint-up(lg) {
    flex-wrap: nowrap;
  }

  @media (min-width: $wrapper-width) {
    padding-left: calc(50% - $wrapper-inner-width / 2);
  }
}

.col1 {
  flex: 1 1 100%;

  @include media-breakpoint-up(lg) {
    flex: 0 0 rem-calc(390px);
  }
}

.col2 {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
}

.headerContainer {
  text-align: center;
  padding: rem-calc(60px $wrapper-padding-sm);
  position: relative;

  @include media-breakpoint-up(sm) {
    @include padding(0 $wrapper-padding);
  }

  @include media-breakpoint-up(lg) {
    padding: rem-calc(42px 48px);
    align-items: center;
    background-color: #141830;
    display: flex;
    margin-bottom: 0;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100%;
  }
}

.header {
  margin-bottom: rem-calc(32px);
  position: relative;

  @include media-breakpoint-up(lg) {
    margin-bottom: rem-calc(74px);
  }
}

.links {
  --gutter-x: #{rem-calc(34px)};
  justify-content: center;
  position: relative;
}

.link {
  @include font-size(14px);
  color: $primary;
  line-height: math-div(18, 14);
  text-transform: uppercase;
}

.linkActive {
  color: #fff;
}
</style>
