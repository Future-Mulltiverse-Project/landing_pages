<template>
  <div class="col-auto" :class="$style.btnCol">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.btnCol {
  flex: 0 1 rem-calc(164px);
  min-width: fit-content;

  :global(.btn) {
    width: 100%;
  }
}
</style>
