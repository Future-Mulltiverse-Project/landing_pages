<template>
  <div :class="$style.tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="[$style.tab, selectedIndex === index && $style.tabActive]"
      @click="selectIndex(index)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  tabs: {
    type: Array as () => string[],
    required: true,
  },
  selectedIndex: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:selectedIndex']);

function selectIndex(index: number) {
  emit('update:selectedIndex', index);
}
</script>

<style lang="scss" module>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab {
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #3b3d4a;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #505364;
  }
}

.tabActive {
  background-color: #CFB16D;
  color: black;
}
</style>
