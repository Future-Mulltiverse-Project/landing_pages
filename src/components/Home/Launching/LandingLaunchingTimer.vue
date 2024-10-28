<template>
  <div :class="$style.row">
    <h3 style="font-size: 54px !important; font-weight: 600">SEPTEMBER 2024</h3>
  </div>
</template>

<script lang="ts" setup>
import { useTimer, zerofi } from '~/composables/useTimer';

const props = defineProps({
  datetime: {
    type: String, // ex: 2023-04-07T09:08:36.0Z
    required: true,
  },
});

const { days, hours, minutes, seconds } = useTimer(props.datetime);
</script>

<style lang="scss" module>
.row {
  display: flex;
  justify-content: center;

  @include media-breakpoint-up(xl) {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) and (min-width:720px){
    .val{
      font-size: 33px !important;
    }
    .sep{
    font-size: 27px !important;
    }
}

.col {
  text-align: center;
}

.val,
.sep {
  @include font-size(60px);
  font-weight: 700;
  line-height: 1;
}

.sep {
  margin-left: em-calc(17px, 60px);
  margin-right: em-calc(17px, 60px);
}

.term {
  @include font-size(10px);
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: rem-calc(7px);
  color: #CFB16D;
}
</style>
