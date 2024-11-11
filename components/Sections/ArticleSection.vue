<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader :class="$style.header" :title="title">
            <div v-html="heading" />
          </MainSectionHeader>
          <MainSectionTextContent :class="$style.text">
            <slot></slot>
          </MainSectionTextContent>
          <ul v-if="items?.length" :class="$style.list">
            <li v-for="(item, index) in items" :key="index">
              <div :class="$style.item">
                <div :class="$style.itemTitleContainer">
                  <div :class="$style.itemCheck">
                    <MediaPicture
                      :src="WhiteTickCircle"
                      :width="24"
                      :height="24"
                      layout="fill"
                      contain
                    />
                  </div>
                  <h4 :class="$style.title_white_1"> {{ item.title }} {{ item.title_white_1 }}</h4>
                </div>
                <p :class="$style.itemText">{{ item.text }}</p>
              </div>
            </li>
          </ul>
          <div :class="$style.btnContainer">
            <NuxtLink to="/" class="btn btn-primary" :class="$style.btn">
              START INVESTING TODAY
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div :class="$style.media">
            <MediaPicture :src="Img" :width="570" :height="1376" />
          </div>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import WhiteTickCircle from 'assets/images/white_tick_circle.png';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Img from '~/assets/images/launchpad-for-investors.jpg';

defineProps<{
  title: string;
  heading: string;
  title_white_1?: string;
  items?: {
    title: string;
    text?: string;
    title_white_1?: string;
  }[];
}>();
</script>

<style lang="scss" module>
.section {
  padding: 170px  0 120px;
}

.title_white_1{
   color: white;
  font-size: 18px;
  //margin-bottom: 14px;
  font-weight: 700;
  line-height: divide(30, 18);
  position: relative;
}

.leftCol {
  @include media-breakpoint-up(lg) {
    padding-left: 126px;
    order: 9999;
  }
}

.media {
  margin: 0 auto;
  max-width: rem-calc(570px);

  @include media-breakpoint-up(lg) {
    margin: 0;
  }
}

.header {
  margin-bottom: 20px;

  p:first-child {
    margin-top: 25px;
  }
}

.text {
  margin-bottom: 22px;
}

.list {
  margin-top: -14px;
  margin-bottom: -14px;
  padding-bottom: 62px;
  position: relative;
}

.item {
  border-bottom: 1px solid #2a3052;
  padding: 14px 0 ;

  @include media-breakpoint-up(md) {
    border-bottom: 0;
  }
}

.itemTitleContainer {
  position: relative;
  padding-left: rem-calc(42px);
}

.itemTitle {
  font-size: 18px;
  margin-bottom: 14px;
  color: white;
  font-weight: 700;
  line-height: divide(30, 18);
  position: relative;
}

.itemCheck {
  height: rem-calc(24px);
  left: 0;
  position: absolute;
  top: 0;
  width: rem-calc(24px);
  margin-top: 23px
}

.itemText {
  font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  color: #9c9c9c;
  margin-bottom: 0;
}

.btnContainer {
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}

.btn {
  color: #fff !important;
  max-width: 100%;
  min-width: rem-calc(256px);
}
</style>
