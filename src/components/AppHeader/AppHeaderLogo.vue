<template>
  <div :class="$style.container"> 
    <NuxtLink to="/" aria-label="FXPO" :class="$style.link">
      <HeaderLogoIcon :class="$style.icon" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import HeaderLogoIcon from '~/icons/HeaderLogoIcon.vue';
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column; /* Align items vertically */
  align-items: center; /* Center items horizontally */
}

.link {
  color: inherit;
}

.icon {
  @include rfs(40px, height);
  @include rfs(40px, width);
  max-height: rem-calc(50px);
  max-width: rem-calc(50px);
}
</style>