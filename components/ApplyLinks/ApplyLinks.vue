<template>
  <div :class="$style.gridContainer">
    <div :class="$style.grid">
      <ApplyLinkItem v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import CoinsImg from 'assets/images/coins.png';
// @ts-ignore
import DoorImg from 'assets/images/door-on-bg.png';
import ApplyLinkItem from '~/components/ApplyLinks/ApplyLinkItem.vue';

const items = [
  {
    img: {
      url: CoinsImg,
      width: 460,
      height: 498,
    },
    title:
      'You want to <span style="color: #CFB16D">Join</span> the <span style="color: #CFB16D">VIP Pre-Launch Mint Event</span>, and still need (more) <span style="color: #CFB16D">FXTE</span>?',
    text: 'Onboard & Apply Now, to buy FXTE from our verified and approved Supplier FXTE Pool for a Discount.',
  },
  {
    img: {
      url: DoorImg,
      width: 706,
      height: 525,
    },
    title:
      '<span style="color: #CFB16D">Apply Today</span> to <span style="color: #CFB16D">Get Listed</span> with your Project before the Public Launch:',
    text: `a) Premium Position in the FXPO<br/>b) IEO, STO or Public Listing on FXPO LaunchPad<br/>c) Product & Service Offering Placement on the FXPO Marketplace`,
  },
];
</script>

<style lang="scss" module>
.gridContainer {
  overflow: hidden;
  position: relative;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 -1px;

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
