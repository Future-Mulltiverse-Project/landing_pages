<template>
  <div :class="$style.el">
    <h3 :class="$style.title">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" module>
.el {
  border-bottom: 1px solid #fff;
  padding-bottom: rem-calc(40px);
  margin-bottom: rem-calc(28px);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

.title {
  @include font-size(22px);
  line-height: math-div(30, 22);
  font-weight: 600;
  margin-bottom: rem-calc(10px);
}
</style>
