<template>
  <header>
    <div :class="[$style.heading, headingLg && $style.headingLg]">
      It's time for the
      <span style="color: #cfb16d">future</span>!
    </div>
    <h2 :class="[$style.title, titleLg && $style.titleLg]">
      <p class="font-semibold text-5xl" style="color: #ffffff; line-height: normal; margin-top: 20px !important">
        <span style="color: #cfb16d">REGISTER</span> NOW &<br />
        <span style="color: #cfb16d">SAVE YOUR SEAT</span> FOR <br />
        THE <span style="color: #cfb16d">PRE-LAUNCH</span> OF
        <br />THE <span style="color: #cfb16d; font-size: 60px">FUTURE</span>
        <span style="color: #ffffff; font-size: 60px">!</span>
        <!--span style="color: #cfb16d;">MULTIVERSE</span> & <span style="color: #cfb16d;">EXPO</span-->
      </p>
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
  @include font-size(23px);
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
    padding-bottom: 0px;
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
