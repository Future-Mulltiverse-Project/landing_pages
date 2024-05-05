<template>
  <header>
    <div :class="[$style.heading, headingLg && $style.headingLg]">
      It's time for the
      <span style="color: #cfb16d">future</span>!
    </div>
    <h2 :class="[$style.title, titleLg && $style.titleLg]">
      <strong style="color: #ffffff">
        <span style="color: #cfb16d">REGISTER</span> NOW &<br />
        <span style="color: #cfb16d">SAVE YOUR SEAT</span> FOR <br />
        THE <span style="color: #cfb16d">VIP PRE-LAUNCH</span> OF
        <br />THE <span style="color: #cfb16d; font-size: 80px">FUTURE</span>
        <span style="color: #ffffff; font-size: 80px">!</span>
      </strong>
      <template v-if="subtitle">
        <br />
        {{ subtitle }}
      </template>
    </h2>
    <div v-if="$slots.default" :class="$style.text">
      <slot />
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps<{
  heading?: string;
  title: string;
  subtitle?: string;
  titleLg?: boolean;
  headingLg?: boolean;
}>();
</script>

<style lang="scss" module>
.heading {
  @include font-size(22px);
  @include margin-bottom(25px);
  line-height: divide(30, 22);
}

.headingLg {
  @include font-size(28px);
  @include margin-bottom(14px);
  line-height: divide(30, 28);
}

.title {
  @include font-size(45px);
  @include margin-bottom(20px);
  line-height: math-div(55, 45);
  text-transform: uppercase;

  &:last-child {
    margin-bottom: 0px;
    padding-bottom: 30px;
  }

  > * {
    color: $primary;
  }
}

.titleLg {
  @include font-size(35px);
  line-height: divide(70, 50);
}

.text {
  @include font-size(22px);
  line-height: divide(30, 22);
  font-family: 'Nunito Sans', sans-serif;

  p:last-child {
    margin-bottom: 0;
  }

  strong,
  span {
    color: $primary;
  }
}
</style>
