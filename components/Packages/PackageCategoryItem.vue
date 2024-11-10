<template>
  <div :class="[$style.item, selectedIndex === index && $style.selected]">
    <div :class="$style.mask"></div>
    <h4
      :class="[
        $style.title,
        item.type === 'business' && $style.titleGreen,
        item.type === 'marketing' && $style.titleOrange,
        item.type === 'catalyzer' && $style.titleYellow,
        item.type === 'public' && $style.titleRed,
      ]"
      style="margin-bottom: 4px;"
    >
      {{ item.title }}
    </h4>
    <div :class="$style.label">best for:</div>
    <div v-if="item.headline" :class="$style.text">{{ item.headline }}</div>
    <button
      type="button"
      class="btn btn-outline-primary btn-sm"
      :class="[$style.btn, selectedIndex === index && $style.hoveredBtn]"
      @click="() => emit('select')"
    >
      Explore
    </button>
  </div>
</template>

<script lang="ts" setup>
import { PackageItem } from '~/components/Packages/PackageListItem2.vue';

interface ItemData {
  type: string;
  title: string;
  headline?: string;
  text?: string;
  packages?: PackageItem[];
}

defineProps<{ item: ItemData; selectedIndex: number; index: number }>();

const emit = defineEmits<{
  (e: 'select'): void;
}>();
</script>

<style lang="scss" module>
.item {
  @include padding(42px 50px 46px);
  border: 1px solid #3b3d4a;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  + .item {
    margin-left: -1px;
  }

  &:nth-child(n + 3) {
    margin-top: -1px;
  }
}

.mask {
  background-color: #0c0e1f;
  border-left: 1px solid $primary;
  border-right: 1px solid $primary;
  height: rem-calc(12px);
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 100%;
  width: calc(100% + 2px);
  display: none;
  z-index: 9999;

  .selected & {
    display: block;
  }
}

.selected {
  background-color: #0c0e1f;
  border-color: $primary;
}

.title {
  @include font-size(26px);
  @include margin-bottom(20px);
  line-height: divide(30, 26);
  font-weight: 600;
  color: $primary;

  &:after {
    content: '';
    width: rem-calc(80px);
    display: block;
    margin: rem-calc(20px) auto 0;
    height: 3px;
    background-color: $primary;
  }
}

.titleGreen:after {
  background-color: #8a9b29;
}

.titleOrange:after {
  background-color: #e88024;
}

.titleYellow:after {
  background-color: #ffe97a;
}

.titleRed:after {
  background-color: #bc1950;
}

.label {
  @include font-size(12px);
  @include margin-bottom(20px);
  color: #9c9c9c;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
}

.text {
  @include font-size(16px);
  @include margin-bottom(24px);
  font-weight: 500;
  opacity: 0.5;
  max-width: rem-calc(450px);
  margin-left: auto;
  margin-right: auto;
}

.btn {
  margin-top: auto;
}

.hoveredBtn {
  background-color: $primary;
  color: $dark;
}
</style>
