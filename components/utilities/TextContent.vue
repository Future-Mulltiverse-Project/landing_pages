<template>
  <div :class="$style.text">
    <slot />
  </div>
</template>

<style lang="scss" module>
.text {
  font-family: 'Nunito Sans', sans-serif;

  p {
    margin-bottom: rem-calc(24px);

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
