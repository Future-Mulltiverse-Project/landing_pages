<template>
<div :class="$style.wrapper">
  <div :class="$style.wrapperInner">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3" :class="$style.row">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="col-span-1"
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
