<template>
  <div :class="$style.wrapper">
    <div :class="$style.wrapperInner">
      <div class="row" :class="$style.row">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-12 col-sm-6 col-lg-4"
        >
          <slot :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconItem } from '~/components/IconList/IconListItem.vue';

defineProps<{ items: IconItem[] }>();
</script>

<style lang="scss" module>
.wrapper {
  overflow: hidden;
}

.wrapperInner {
  overflow: hidden;
  margin: -1px;
}

.row {
  @include margin(-50px 0);
  --gutter-x: 0;
}
</style>
