<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader :class="$style.header" :title="title">
            <div v-html="heading"></div>
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
                      :src="CheckCircle"
                      :width="24"
                      :height="24"
                      layout="fill"
                      
                    />
                  </div>
                  <h4 :class="$style.itemTitle">{{ item.title }}</h4>
                </div>
                <p v-if="item.text" :class="$style.itemText">{{ item.text }}</p>
              </div>
            </li>
          </ul>
          <div :class="$style.btnContainer">
            <NuxtLink to="/" class="btn btn-primary" :class="$style.btn">
              APPLY TO FXPO TODAY
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div :class="$style.media">
            <MediaPicture :src="Img" :width="670" :height="1896" style="object-fit: contain !important;" />
          </div>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import CheckCircle from 'assets/images/check-circle.svg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Img from '~/assets/images/launchpad-for-companies.jpg';

defineProps<{
  title: string;
  heading: string;
  items?: {
    title: string;
    text?: string;
  }[];
}>();
</script>

<style lang="scss" module>
.section {
  @include padding(100px 0 178px);
  background: radial-gradient(
    1160px 320px at center bottom,
    #23274a,
    #0B0F20
  );
}

.row {
  @include rfs(64px, --gutter-y);
  --gutter-x: 0;
  background: radial-gradient(
    1160px 1020px at center,
    #23274a 20%,
    #0B0F20 35%,
    transparent
    /*#23274a 10% bottom,*/
  );
}

.leftCol {
  @include media-breakpoint-up(lg) {
    @include padding-right(100px);
  }
}

.media {
  margin: 0 auto;
  max-width: rem-calc(870px);

  @include media-breakpoint-up(lg) {
    margin: 0;
  }
}

.header {
  @include margin-bottom(5px);

  p:first-child {
    @include margin-top(25px);
  }
}

.text {
  @include margin-bottom(22px);
}

.list {
  @include margin-top(-14px);
  @include margin-bottom(-14px);
  @include padding-bottom(52px);
  position: relative;
}

.item {
  border-bottom: 1px solid #2a3052;
  @include padding(14px 0);

  @include media-breakpoint-up(md) {
    border-bottom: 0;
  }
}

.itemTitleContainer {
  position: relative;
  padding-left: rem-calc(42px);
}

.itemTitle {
  @include font-size(18px);
  @include margin-bottom(14px);
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
  @include font-size(16px);
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
