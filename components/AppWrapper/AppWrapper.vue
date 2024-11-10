<template>
  <component :is="is || 'div'" :class="$style.el">
    <slot />
  </component>
</template>

<script lang="ts" setup>
type AppWrapperProps = {
  is?: 'section' | 'article';
};

defineProps<AppWrapperProps>();
</script>

<style lang="scss" module>
.el {
  flex: 1 1 auto;
  margin: 0 auto;
  position: relative;
  max-width: $wrapper-inner-width;

  @media (max-width: $wrapper-width) {
    @include margin(0 $wrapper-padding);
  }

  @include media-breakpoint-down(sm) {
    margin: rem-calc(0 $wrapper-padding-sm) !important;
  }
}
</style>
