<template>
  <NuxtLink to="/" aria-label="FXPO" :class="$style.link">
    <HeaderLogoIcon :class="$style.icon" />
  </NuxtLink>
</template>

<script lang="ts" setup>
import HeaderLogoIcon from '~/icons/HeaderLogoIcon.vue';
</script>

<style lang="scss" module>
.link {
  color: inherit;
  display: inline-block;
}

.icon {
  @include rfs(80px, height);
  @include rfs(80px, width);
  min-height: rem-calc(54px);
  min-width: rem-calc(54px);
}
</style>
