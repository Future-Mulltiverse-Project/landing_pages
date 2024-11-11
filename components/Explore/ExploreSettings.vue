<template>
  <div :class="$style.wrapper">
    <button type="button" :class="$style.closeBtn">
      <CloseIcon />
    </button>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import CloseIcon from '~/icons/CloseIcon.vue';
</script>

<style lang="scss" module>
.wrapper {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: rem-calc(40px);
  padding-bottom: rem-calc(40px);
  background-color: #1a1c37;
  margin: 0 auto;
  max-width: rem-calc(674px);
  position: relative;
}

.closeBtn {
  background-color: transparent;
  border: 0;
  color: $primary;
  padding: 0;
  height: rem-calc(38px);
  width: rem-calc(38px);
  position: absolute;
  top: rem-calc(10px);
  right: rem-calc(10px);
  transition: opacity 150ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  svg {
    height: rem-calc(10px);
    width: rem-calc(10px);
  }
}
</style>
