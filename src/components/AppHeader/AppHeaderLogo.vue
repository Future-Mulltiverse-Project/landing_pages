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
  @include rfs(40px, height);
  @include rfs(40px, width);
  max-height: rem-calc(50px);
  max-width: rem-calc(50px);
}
</style>
