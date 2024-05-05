<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.wrapper {
  @include padding(54px 56px 64px);
  position: relative;
  min-height: rem-calc(200px);
  width: 100%;
  text-align: center;

  &::before,
  &::after {
    content: '';
    border-image-slice: 1;
    border-color: #CFB16D;
    //border-image-source: linear-gradient(to bottom, $yellow-200, $yellow-400);
    border-style: solid;
    border-width: em-calc(6, 16) 0 em-calc(6, 16) em-calc(6, 16);
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: wrap-calc(90px, 580px);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: rotateY(180deg);
  }
}

.content {
  display: inline-block;
  position: relative;
  text-align: left;
}
</style>
