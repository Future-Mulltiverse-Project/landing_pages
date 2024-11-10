<template>
  <NuxtLink :to="too">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  too: object;
}>();
</script>
