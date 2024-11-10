<template>
  <button class="btn" :class="classMod" type="button">
    <slot>
      {{ name || 'Connect Wallet' }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  name?: string | null;
  classMod?: string;
}

withDefaults(defineProps<Props>(), {
  name: null,
  classMod: 'btn-outline-primary',
});
</script>
