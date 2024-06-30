<template>
  <div :class="$style.panel">
    <div v-if="selectedItem.items?.length" :class="$style.listContainer">
      <ul class="row" :class="$style.list">
        <li
          v-for="(item, index) in selectedItem.items"
          :key="index"
          class="col-12 col-md-6"
        >
          <div :class="$style.item">
            <div :class="$style.itemTitleContainer">
              <div :class="$style.itemCheck">
                <MediaPicture
                  :src="CheckCircle"
                  :width="24"
                  :height="24"
                  layout="fill"
                  contain
                />
              </div>
              <h4 :class="$style.itemTitle">{{ item.title }}</h4>
            </div>
            <p v-if="item.text" :class="$style.itemText">{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
    <blockquote :class="$style.quote">
      <p style="color: white;">
        "Let the future tell the truth, and evaluate and reward each one
        according to his work and accomplishments. The present is theirs; the
        future, for which I have really worked, is mine."
      </p>
      <footer style="color: #CFB16D;">Nikola Tesla</footer>
    </blockquote>
  </div>
</template>

<script lang="ts" setup>
import { Opportunity } from '~/components/Opportunities/useOpportunitiesItems';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import CheckCircle from '~/assets/images/check-circle.svg';

defineProps<{
  selectedItem: Opportunity;
}>();
</script>

<style lang="scss" module>
.panel {
  @include padding(52px 56px 45px);
  background-color: #1C213E;
  position: relative;
}

.listContainer {
  overflow: hidden;
}

.list {
  @include rfs(112px, --gutter-x);
  position: relative;
  @include margin-top(-19px);
  @include margin-bottom(-19px);

  @include media-breakpoint-up(md) {
    &::before {
      border-left: 1px solid #2a3052;
      content: '';
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      top: 0;
    }
  }
}

.item {
  border-bottom: 1px solid #2a3052;
  @include padding(19px 0);

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
  padding-top: 0px;
  padding-bottom: 0px;
}

.itemCheck {
  height: rem-calc(24px);
  left: 0;
  position: absolute;
  top: 0;
  width: rem-calc(24px);
}

.itemText {
  @include font-size(16px);
  font-family: 'Nunito Sans', sans-serif;
  color: #9c9c9c;
  margin-bottom: 0;
}

.quote {
  @include margin-top(70px);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(740px);
  text-align: center;
  margin-bottom: 0;
  width: 100%;
  color: white !important;
}

.quote p {
  @include font-size(18px);
  @include margin-bottom(18px);
  font-weight: 700;
  color: $primary;
  line-height: math-div(23, 18);
}

.quite footer {
  @include font-size(18px);
  font-weight: 700;
  line-height: math-div(30, 18);
}
</style>
