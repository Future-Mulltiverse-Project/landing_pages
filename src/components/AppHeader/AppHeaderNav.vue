<template>
  <nav>
    <ul class="row" :class="$style.row">
      <li v-for="(item, index) in items" :key="index" class="col-auto">
        <TheLink :too="item.to" :class="$style.link">
          {{ item.name }}
        </TheLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useNavItems } from '~/components/AppHeader/useNavItems';
import TheLink from '~/components/utilities/TheLink.vue';

const items = ref(useNavItems);
</script>

<style lang="scss" module>
.row {
  --gutter-x: #{rem-calc(31px)};
  justify-content: center;
}

.link {
  @include font-size(14px);
  color: inherit;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  &:global(.router-link-active) {
    color: $primary;
  }

  &:hover {
    color: $primary;
  }
}
</style>
