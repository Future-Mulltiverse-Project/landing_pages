<template>
  <div :class="$style.panel">
    <div :class="$style.header">
      <div class="row" :class="$style.headerRow">
        <div
          v-if="item.packages?.length"
          class="col-12 col-lg"
          :class="$style.headerLeftCol"
        >
          <PackagesListFilters />
        </div>
        <div class="col-12 col-lg-auto" :class="$style.headerRightCol">
          <NuxtLink to="/" :class="$style.contactLink">
            Need Help? Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
    <div :class="$style.content">
      <div v-if="item.text" :class="$style.text">{{ item.text }}</div>
      <div v-if="item.packages?.length" class="row" :class="$style.row">
        <div
          v-for="(packageItem, packageItemIndex) in item.packages"
          :key="packageItemIndex"
          class="col-12 col-md-6 col-lg-4"
        >
          <PackageListItem2 :package="packageItem" :type="item.type" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PackageListItem2 from '~/components/Packages/PackageListItem2.vue';
import PackagesListFilters from '~/components/Packages/PackagesListFilters.vue';

interface PackageItem {
  name: string;
  price: string;
  fxpo_citizen_pass_nft: string;
  fxpo_m3_nfts: string;
  fxte: string;
}

interface ItemData {
  type: string;
  title: string;
  headline?: string;
  text?: string;
  packages?: PackageItem[];
}

defineProps<{ item: ItemData }>();
</script>

<style lang="scss" module>
.panel {
  @include margin-bottom(50px);
  background-color: #0c0e1f;
  margin-top: rem-calc(10px);
  border: 1px solid $primary;
  position: relative;
  text-align: left;
  min-width: 0;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    background-color: #0c0e1f;
    content: '';
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 100%;
  }
}

.row {
  --gutter-x: #{rem-calc(20px)};
  --gutter-y: #{rem-calc(20px)};
}

.header {
  border-bottom: 1px solid #3b3d4a;
}

.headerRow {
  align-items: center;
}

.headerRightCol {
  margin-left: auto;
}

.headerLeftCol {
  flex-grow: 1;
}

.contactLink {
  @include font-size(14px);
  @include margin(25px 60px 30px);
  display: inline-block;
  line-height: divide(18, 14);
  font-weight: 500;

  @include media-breakpoint-up(lg) {
    margin-left: 0;
  }
}

.content {
  @include padding(0 60px 70px);
}

.text {
  @include font-size(16px);
  @include margin(44px 0 50px);
  font-weight: 500;
  opacity: 0.5;
}
</style>
