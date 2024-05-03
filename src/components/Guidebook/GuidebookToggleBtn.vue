<template>
  <button
    :class="[$style.btn]"
    type="button"
    aria-label="Open Menu"
    @click="toggle"
  >
    <span :class="$style.bar" />
    <span :class="$style.bar" />
    <span :class="$style.bar" />
  </button>
</template>

<script lang="ts" setup>
import { useNavPanel } from '~/components/NavPanel/useNavPanel';

const { toggle } = useNavPanel();
</script>

<style lang="scss" module>
.btn {
  background: transparent;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: rem-calc(38px);
  overflow: hidden;
  padding: 0;
  width: rem-calc(38px);
}

.bar {
  background-color: #fff;
  width: 100%;
  display: block;
  height: 2px;
  margin: 5px 0;
  transition: transform 0.2s ease-in-out;

  &:first-child {
    transform: translateX(20%);

    .btn:hover & {
      transform: translateX(0);
    }
  }
}
</style>
