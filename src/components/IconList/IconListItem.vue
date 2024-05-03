<template>
  <article :class="$style.article">
    <div :class="$style.inner">
      <div :class="$style.icon">
        <slot name="icon" />
      </div>
      <h3 :class="$style.title" v-html="item.title" />
      <div v-if="item.text" :class="$style.text">
        {{ item.text }}
      </div>
      <NuxtLink
        v-if="item.url"
        :to="item.url"
        :class="$style.btn"
        class="btn btn-sm btn-outline-primary"
      >
        Explore
      </NuxtLink>
    </div>
  </article>
</template>

<script lang="ts" setup>
export interface IconItem {
  icon: string;
  title: string;
  text?: string;
  url?: string;
}

defineProps<{ item: IconItem }>();
</script>

<style lang="scss" module>
.article {
  @include padding(50px 0);
  text-align: center;
  position: relative;
  border-top: 1px solid transparent;
  border-bottom: 1px solid #2a3052;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.inner {
  @include padding(0 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border-left: 1px solid transparent;
  border-right: 1px solid #2a3052;
  width: 100%;
}

.icon {
  margin: 0 0 rem-calc(20px);

  svg {
    height: rfs-value(64px);
    width: rfs-value(64px);
    min-width: rem-calc(40px);
    min-height: rem-calc(40px);
  }
}

.title {
  @include font-size(26px);
  line-height: math-div(30, 26);
  margin-bottom: rem-calc(24px);
  font-weight: 600;
  color: $primary;

  &:after {
    border-top: 2px solid $primary;
    content: '';
    display: block;
    margin: rem-calc(26px) auto 0;
    width: rem-calc(56px);
  }
}

.text {
  @include font-size(16px);
  color: #9c9c9c;
  font-family: 'Nunito Sans', sans-serif;
  margin: 0 0 rem-calc(24px);
}

.btn {
  min-width: rem-calc(128px);
  margin-top: auto;
}
</style>
