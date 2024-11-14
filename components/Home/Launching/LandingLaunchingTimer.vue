<template>
  <div>
    <h3 class=" lg:text-6xl md:text-5xl text-4xl font-semibold" >COMING NEXT</h3>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-3">
      <div></div>
      <div class="grid grid-cols-3 gap-4 md:pt-2 pt-1">
        <div :class="$style.col">
          <!--div :class="$style.val">{{ zerofi(days) }}</div-->
          
          <div :class="$style.term" class="font text-xs sm:text-sm">Days</div>
        </div>
        
        <div :class="$style.col">
          <!--div :class="$style.val">{{ zerofi(hours) }}</div-->
          
          <div :class="$style.term" class="font text-xs sm:text-sm">Hours</div>
        </div>
        
        <div :class="$style.col">
          <!--div :class="$style.val">{{ zerofi(minutes) }}</div-->
          
          <div :class="$style.term" class="font text-xs sm:text-sm">Minutes</div>
        </div>
        
      </div>
      <div></div>
    </div>
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

.col {
  text-align: center;
}

.val,
.sep {
  font-size: 49px;
  font-weight: 700;
  line-height: 1;
}

.sep {
  margin-left: em-calc(17px, 60px);
  margin-right: em-calc(17px, 60px);
}

.term {
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: rem-calc(7px);
  color: #CFB16D;
}
</style>
