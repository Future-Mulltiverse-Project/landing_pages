<template>
  <div :class="$style.el">
    <div :class="$style.blurWrapper">
      <div :class="$style.blur" />
    </div>
    <div :class="$style.index">
      {{ index + 1 }}
    </div>
    <h3 :class="$style.title">{{ item.name }}</h3>
    <ul :class="$style.list">
      <li v-if="item.avatar" :class="$style.item">
        <span>{{ item.avatar }}</span>
        Avatars
      </li>
      <li v-if="item.space" :class="$style.item">
        <span>
          {{ item.space }} m
          <sup>3</sup>
        </span>
        Business Space
      </li>
      <li v-if="item.staking_license" :class="$style.item">Staking License</li>
      <li v-if="item.retail_license" :class="$style.item">Retail License</li>
      <li v-if="item.corporate_license" :class="$style.item">
        Corporate License
      </li>
    </ul>
    <div :class="$style.footer">
      <div class="row" :class="$style.footerRow">
        <div class="col-auto">
          <div v-if="item.name === 'Ambassador Package'" :class="$style.label">
            <span>Price by request</span>
          </div>
          <div v-else-if="item.price">
            <del v-if="item.sale_price" :class="$style.salePrice">
              ${{ item.sale_price }}
            </del>
            <div v-else :class="$style.label">Now only</div>
            <div :class="$style.price">${{ item.price }}</div>
          </div>
        </div>
        <div class="col-auto">
          <button
            class="btn btn-sm btn-outline-primary"
            :class="$style.btn"
            type="button"
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

interface Item {
  name: string;
  avatar?: string;
  space?: string;
  staking_license?: boolean;
  retail_license?: boolean;
  corporate_license?: boolean;
  price?: number;
  sale_price?: number;
}

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" module>
.el {
  background-color: #141830;
  padding: rem-calc(44px 36px 40px);
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.blurWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
}

.blur {
  width: wrap-calc(616px, 374px);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  &:before {
    background: radial-gradient(
      farthest-side,
      rgba(#3d4266, 0.2),
      rgba(#3d4266, 0)
    );
    //background: radial-gradient(
    //    rgba(#3D4266, 1),
    //    rgba(#3D4266, 0.7) 40%,
    //    rgba(#3D4266, 0) 70%
    //);
    border-radius: 50%;
    content: '';
    display: block;
    padding-bottom: 60%;
  }
}

.index {
  @include font-size(16px);
  align-items: center;
  border-radius: 50%;
  border: 3px solid $primary;
  display: flex;
  height: rem-calc(54px);
  justify-content: center;
  line-height: 1;
  margin: 0 auto rem-calc(28px);
  width: rem-calc(54px);
}

.title {
  @include font-size(26px);
  color: $primary;
  font-weight: 600;
  margin-bottom: rem-calc(28px);
  text-align: center;

  &:after {
    background-color: $primary;
    content: '';
    display: block;
    height: 3px;
    margin: rem-calc(22px) auto 0;
    width: rem-calc(80px);
  }
}

.item {
  font-weight: 500;
  padding-left: rem-calc(14px);
  position: relative;

  &::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: em-calc(12, 16);
    left: 0;
  }

  &:not(:last-child) {
    margin-bottom: rem-calc(10px);
  }

  > span {
    color: $primary;
  }
}

.footer {
  padding-top: rem-calc(40px);
  margin-top: auto;
}

.footerRow {
  --gutter-y: #{rem-calc(10px)};
  align-items: center;
  justify-content: space-between;
}

.salePrice,
.label {
  @include font-size(12px);
  color: #9c9c9c;
  font-weight: 700;
  line-height: math-div(15, 12);
  text-transform: uppercase;
}

.label span {
  color: $primary;
}

.price {
  @include font-size(26px);
  color: $primary;
  line-height: math-div(30, 26);
}

.btn {
  padding-left: rem-calc(38px);
  padding-right: rem-calc(38px);
}
</style>
