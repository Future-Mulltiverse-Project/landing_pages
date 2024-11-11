<template>
  <section :class="$style.section">
    <h3 :class="$style.title">{{ title }}</h3>
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<style lang="scss" module>
.section {
  //padding-bottom: 64px;
}

.title {
  font-size: 14px;
  margin-top: 36px;
  margin-bottom: 36px;
  font-weight: 600;
  color: $primary;
  display: flex;
  align-items: center;

  &::after {
    margin-left: 32px;
    content: '';
    flex-grow: 1;
    display: block;
    border-top: 1px solid #2a3052;
  }
}
</style>
