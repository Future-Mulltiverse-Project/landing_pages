<template>
  <div :class="$style.item">
    <div :class="$style.titleCol">
      <h4 :class="$style.title">
        <PdfIcon />
        <NuxtLink :to="item.to">
          {{ item.title }}
        </NuxtLink>
      </h4>
    </div>
    <div :class="$style.textCol">
      <div class="row" :class="$style.detailsRow">
        <div class="col-auto">
          <div :class="$style.details">
            <div :class="$style.avatar"></div>
            <strong>by {{ item.by }},&nbsp;</strong>
            {{ item.date }}
          </div>
        </div>
        <div class="col-auto">
          <div :class="$style.category">{{ item.category }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PdfIcon from '~/icons/PdfIcon.vue';

defineProps<{
  item: {
    to: string;
    title: string;
    by: string;
    date: string;
    category: string;
  };
}>();
</script>

<style lang="scss" module>
.item {
  @include padding-bottom(68px);
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }
}

.titleCol {
  margin: 0 auto;
  width: 100%;

  @include media-breakpoint-up(md) {
    flex: 0 0 rem-calc(300px);
    max-width: none;
    width: auto;
    margin: 0;
  }
}

.title {
  @include font-size(22px);
  align-items: center;
  display: inline-flex;
  font-weight: 600;
  line-height: divide(30, 22);
  margin-bottom: 0;

  a {
    color: inherit;
    transition: color 150ms ease-in-out;

    &:hover {
      color: $primary;
    }
  }

  svg {
    height: rem-calc(24px);
    margin-right: rem-calc(20px);
    width: rem-calc(20px);
  }
}

.textCol {
  @include padding-top(30px);
  width: 100%;

  @include media-breakpoint-up(md) {
    @include padding-left(30px);
    padding-top: 0;
    width: auto;
  }
}

.detailsRow {
  --gutter-x: #{rem-calc(16px)};
  --gutter-y: #{rem-calc(16px)};
  align-items: center;
}

.details {
  @include font-size(14px);
  line-height: 1.2;
  align-items: center;
  display: flex;

  strong {
    color: $primary;
  }
}

.avatar {
  background-color: #fff;
  border-radius: 50rem;
  height: rem-calc(20px);
  margin-right: rem-calc(16px);
  overflow: hidden;
  position: relative;
  width: rem-calc(20px);
}

.category {
  @include font-size(12px);
  background-color: #171c36;
  color: $primary;
  line-height: divide(16, 12);
  padding: rem-calc(6px 18px);
}
</style>
