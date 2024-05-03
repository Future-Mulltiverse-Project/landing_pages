<template>
  <div :class="$style.item">
    <div v-if="item.date || item.author" :class="$style.details">
      {{ item.date }} by
      {{ item.author }}
    </div>
    <h3 :class="$style.title">{{ item.title }}</h3>
    <div v-if="item.text" :class="$style.text">{{ item.text }}</div>
  </div>
</template>

<script lang="ts" setup>
interface ItemData {
  date?: string;
  author?: string;
  title: string;
  text?: string;
}

defineProps<{
  item: ItemData;
}>();

// const { date, author, title, text } = toRefs(props.item);
</script>

<style lang="scss" module>
.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: rem-calc(38px 50px);
  min-height: rem-calc(390px);
}

.details {
  @include font-size(12px);
  color: #9c9c9c;
  font-weight: 700;
  line-height: math-div(15, 12);
  margin-bottom: rem-calc(8px);
}

.title {
  @include font-size(18px);
  font-weight: 700;
  line-height: math-div(30, 18);
  margin-bottom: rem-calc(18px);
  color: $primary;
}

.text {
  @include font-size(16px);
  color: #9c9c9c;
  font-family: 'Nunito Sans', sans-serif;
}
</style>
