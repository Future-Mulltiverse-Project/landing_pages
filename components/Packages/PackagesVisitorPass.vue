<template>
  <div :class="$style.el">
    <PaymentIcon :class="$style.icon" />
    <h3 :class="$style.title">
      <span>Wan’t to Look around our Metaverse</span>
      <br />
      Choose One Time Pass*
    </h3>
    <div :class="$style.price">
      <div :class="$style.priceLabel">One DAY COST</div>
      <div :class="$style.priceValue">$9.99</div>
    </div>
    <div :class="$style.footer" class="row">
      <div class="col-12 col-md">
        <button class="btn btn-sm btn-outline-primary" type="button">
          Choose visitor pass
        </button>
      </div>
      <div class="col-12 col-md-auto" :class="$style.rightCol">
        <div :class="$style.note">
          <span>*</span>
          PAY PER DAY
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PaymentIcon from '~/icons/PaymentIcon.vue';
</script>

<style lang="scss" module>
.el {
  padding: rem-calc(86px 0 0);
  text-align: center;
}

.icon {
  height: rem-calc(53px);
  width: rem-calc(58px);
  margin-bottom: rem-calc(20px);
}

.title {
  font-size: 26px;
  line-height: math-div(30, 26);
  font-weight: 600;
  margin-bottom: rem-calc(22px);

  span {
    color: $primary;
  }
}

.price {
  margin-bottom: rem-calc(18px);
}

.priceLabel {
  font-size: 12px;
  color: #9c9c9c;
  line-height: math-div(15, 12);
  margin-bottom: rem-calc(2px);
  text-transform: uppercase;
}

.priceValue {
  font-size: 26px;
  line-height: math-div(30, 26);
  color: $primary;
}

.footer {
  --gutter-y: #{rem-calc(8px)};
  align-items: center;
  justify-content: space-between;

  @include media-breakpoint-up(md) {
    padding-left: rem-calc(160px);
  }
}

.rightCol {
  text-align: center;

  @include media-breakpoint-up(md) {
    width: rem-calc(160px);
    text-align: right;
  }
}

.note {
  font-size: 12px;
  color: #7a7a7a;
  text-transform: uppercase;
}
</style>
