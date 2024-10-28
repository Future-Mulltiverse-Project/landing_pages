<template>
  <header>
    <div
      v-if="heading"
      :class="[$style.heading, headingLg && $style.headingLg]"
      class="font-medium"
    >
      {{ heading }} {{ strongTitle }}
    </div>
    <h2 :class="[$style.title, titleLg && $style.titleLg]">
      <p class="font-medium text-5xl" v-html="title" />
      <span class="font-medium" style="color: #ffffff;">{{invent_title}}</span>
      <template v-if="subtitle">
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
  strongTitle?: string,
  titleLg?: boolean;
  headingLg?: boolean;
  invent_title?: string;
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
    margin-bottom: 0;
  }

  > * {
    color: $primary;
  }
}

.titleLg {
  @include font-size(50px);
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
