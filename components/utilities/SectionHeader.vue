<template>
  <header :class="[$style.header, { [$style.headerTop]: logoTop }]">
    <LogoIcon
      v-if="!logoHidden"
      :class="[$style.logo, { [$style.logoTop]: logoTop }]"
    />
    <h2 :class="$style.title">
      <slot name="title">
        {{ title }}
      </slot>
    </h2>
    <slot></slot>
  </header>
</template>

<script lang="ts" setup>
import LogoIcon from '~/icons/LogoIcon.vue';

defineProps<{
  title?: string;
  logoTop?: boolean;
  logoHidden?: boolean;
}>();
</script>

<style lang="scss" module>
.headerTop {
  display: flex;
  flex-direction: column;
}

.logo {
  height: rem-calc(45px);
  margin: 0 auto rem-calc(22px);
  //margin: 0 auto rem-calc(24px);
  //margin: 0 auto rem-calc(18px);
  width: rem-calc(45px);
}

.logoTop {
  margin: calc(var(--angleHeight) / -2 - #{rem-calc(23px)}) auto rem-calc(16px);
}

.title {
  font-size: 50px;
  line-height: math-div(55, 50);
  margin-bottom: rem-calc(32px);

  &:last-child {
    margin-bottom: 0;
  }

  span {
    color: $primary;
  }
}
</style>
