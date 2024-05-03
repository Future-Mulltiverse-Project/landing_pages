<template>
  <div class="row" :class="$style.btnRow">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" module>
.btnRow {
  --gutter-x: #{rem-calc(13px)};
  --gutter-y: #{rem-calc(13px)};
  justify-content: center;

  @include media-breakpoint-up(lg) {
    justify-content: flex-start;
  }
}
</style>
