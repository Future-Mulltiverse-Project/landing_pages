<template>
  <NuxtLink to="/" :class="$style.link" aria-label="FXPO">
    <LogoIcon :class="$style.icon" />
  </NuxtLink>
</template>

<script lang="ts" setup>
import LogoIcon from '~/icons/LogoIcon.vue';
</script>

<style lang="scss" module>
.link {
  display: inline-block;
  color: inherit;
  margin-bottom: 20px !important;
}

.icon {
  @include rfs(80px, height);
  @include rfs(80px, width);
  min-height: rem-calc(54px);
  min-width: rem-calc(54px);
}
</style>
