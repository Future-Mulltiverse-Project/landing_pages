<template>
  <nav :class="$style.breadcrumbs" aria-label="breadcrumb">
    <ul>
      <li>
        <NuxtLink :class="$style.breadcrumbItem" href="/">Home</NuxtLink>
      </li>
      <template v-if="items?.length">
        <li v-for="item in items" :key="item.title">
          <div :class="$style.breadcrumbSlash">/</div>
          <NuxtLink :class="$style.breadcrumbItem" :to="item.to">
            {{ item.title }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
defineProps<{
  items?: {
    to: any;
    title: string;
  }[];
}>();
</script>

<style lang="scss" module>
.breadcrumbs {
  padding: rem-calc(24px 30px);
  position: relative;
  text-align: left;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
  }
}

.breadcrumbItem {
  font-size: 12px;
  color: inherit !important;
  line-height: 1.2;
  font-weight: 400;

  &:is(a):hover {
    text-decoration: underline;
  }
}

.breadcrumbSlash {
  font-size: 12px;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 em-calc(5, 12);
}
</style>
