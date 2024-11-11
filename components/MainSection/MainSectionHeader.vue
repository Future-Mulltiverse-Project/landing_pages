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
      <h4 class="font-medium text-4xl pb-0 pt-0 text-center" v-html="title" />
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
  font-size: 22px;
  margin-bottom: 25px;
  line-height: divide(30, 22);
}

.headingLg {
  font-size: 28px;
  margin-bottom: 14px;
  line-height: divide(30, 28);
}

.title {
  font-size: 45px;
  margin-bottom: 20px;
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
  font-size: 50px;
  line-height: divide(70, 50);
}

.text {
  font-size: 22px;
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
