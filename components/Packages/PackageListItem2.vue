<template>
  <div :class="$style.item">
    <h4
      :class="[
        $style.title,
        type === 'business' && $style.titleGreen,
        type === 'marketing' && $style.titleOrange,
        type === 'catalyzer' && $style.titleYellow,
        type === 'public' && $style.titleRed,
      ]"
      style="text-align: center; "
    >
      {{ package.name }}
    </h4>
    <div :class="$style.priceLabel">
      Price at
      <br />
      {{package.launch_type}}:
    </div>
    <div :class="$style.price">{{ package.price }}</div>
    <ul :class="$style.list">
      <li>
        <strong>{{ package.fxpo_citizen_pass_nft }}</strong>
        FXPO Citizen Pass NFT
      </li>
      <li>
        <strong>{{ package.fxpo_expo_pass_nft }}</strong>
        Future EXPO Pass: 6 Months
      </li>
      <li>
        <strong>{{ package.fxpo_m3_nfts }}</strong>
        FXPO m³ NFTs
      </li>
      <li>Co-Creator Pass: Explorer</li>
      <li>Co-Creator Pool Qualification: Explorer</li>
    </ul>
    <div class="row" :class="$style.footer">
      <div class="col-auto" :class="$style.footerCol">
        <div :class="$style.ftxeLabel">Exclusive VIP Pre-Launch Special!</div>
        <div :class="$style.fxte">{{ package.fxte }} FXTE</div>
      </div>
      <div class="col-auto" :class="$style.footerCol">
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          :class="$style.btn"
        >
          Choose
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface PackageItem {
  name: string;
  price: string;
  fxpo_citizen_pass_nft: string;
  fxpo_m3_nfts: string;
  fxpo_expo_pass_nft: string;
  fxte: string;
  launch_type: string;
}

defineProps<{ package: PackageItem; type: string }>();
</script>

<style lang="scss" module>
.item {
  padding: 30px   ;
  background-color: #141830;
  text-align: center;
}

.title {
  font-size: 20px;
  margin-bottom: 18px;
  line-height: divide(30, 20);
  margin-top: rem-calc(4px);
  color: $primary;

  &::after {
    content: '';
    display: block;
    border-top: 2px solid $primary;
    width: rem-calc(70px);
    margin: rem-calc(16px) auto 0;
  }
}

.titleGreen::after {
  border-color: #8a9b29;
}

.titleOrange::after {
  border-color: #e88024;
}

.titleYellow::after {
  border-color: #ffe97a;
}

.titleRed::after {
  border-color: #bc1950;
}

.priceLabel {
  font-size: 11px;
  margin-bottom: 10px;
  color: #9c9c9c;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
}

.price {
  font-size: 22px;
  margin-bottom: 22px;
  line-height: divide(30, 22);
}

.list {
  margin-bottom: 55px;
  display: flex;
  flex-direction: column;
  list-style: disc inside;
  row-gap: #{rem-calc(10px)};
  text-align: left;

  li {
    font-size: 14px;

    line-height: math-div(18, 14);
    font-weight: 500;

    strong {
      color: $primary;
      font-weight: 500;
    }
  }
}

.footer {
  --gutter-x: #{rem-calc(20px)};
  --gutter-y: #{rem-calc(14px)};
  align-items: center;
  text-align: left;
}

.footerCol {
  flex: 1 0 50%;
}

.ftxeLabel {
  font-size: 11px;
  color: $primary;
  font-weight: 700;
  line-height: divide(14, 11);
  text-transform: uppercase;
}

.fxte {
  font-size: 14px;
  line-height: math-div(24, 14);
}

.btn {
  padding-top: rem-calc(10px);
  padding-bottom: rem-calc(10px);
  width: 100%;
}
</style>
