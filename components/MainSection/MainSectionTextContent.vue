<template>
  <div :class="$style.text">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.text {
  font-family: 'Nunito Sans', sans-serif;

  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @include font-size(22px);
    //@include margin-bottom(28px);
    line-height: divide(30, 22);
    font-weight: 600;
    color: $primary;
  }

  > p {
    //margin-bottom: rem-calc(24px);

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
