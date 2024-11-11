<template>
  <div :class="$style.btnContainer">
    <h3 :class="$style.btnTitle">I’m interested in:</h3>
    <div class="row" :class="$style.btnRow">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.btnContainer {
  margin-top: 22px;
  position: relative;
  width: 100%;
}

.btnRow {
  --gutter-x: #{rem-calc(18px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;

  :global(.col-auto) {
    flex: 0 1 rem-calc(248px);
    min-width: fit-content;
    max-width: 100%;
  }

  :global(.btn) {
    width: 100%;
  }
}

.btnTitle {
  font-size: 16px;
  margin-bottom: 32px;
  font-weight: 600;
}
</style>
