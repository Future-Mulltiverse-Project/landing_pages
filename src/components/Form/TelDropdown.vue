<template>
  <div :class="$style.dropdown">
    <button type="button" :class="$style.dropdownToggle" @click="toggle">
      +00
      <span :class="$style.flag"></span>
    </button>
    <div v-show="visible" :class="$style.dropdownMenu">
      <div :class="$style.dropdownItem">
        +01
        <div :class="$style.flag"></div>
      </div>
      <div :class="$style.dropdownItem">
        +02
        <div :class="$style.flag"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from '#imports';

const visible = ref(false);

function toggle() {
  visible.value = !visible.value;
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
.dropdown {
  position: relative;
  font-size: $input-font-size;
  font-family: $input-font-family;
  font-weight: $input-font-weight;
}

.dropdownToggle {
  background-color: $input-bg;
  border: $input-border-width solid $input-border-color;
  color: $input-placeholder-color;
  padding: $input-padding-y rem-calc(50px) $input-padding-y $input-padding-x;
  position: relative;
}

.flag {
  background-color: $border-color;
  display: block;
  height: rem-calc(18px);
  position: absolute;
  right: $input-padding-x;
  top: 50%;
  transform: translateY(-50%);
  width: rem-calc(26px);
}

.dropdownMenu {
  border: $input-border-width solid $input-border-color;
  background-color: $input-bg;
  color: #fff;
  left: 0;
  position: absolute;
  top: 100%;
  margin-top: -$input-border-width;
  will-change: transform;
  width: 100%;
  z-index: z('modal');
}

.dropdownItem {
  border-bottom: 1px solid $border-color;
  color: inherit;
  padding: $input-padding-y $input-padding-x;
  position: relative;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: $primary;
    color: $blue-800;
  }
}
</style>
