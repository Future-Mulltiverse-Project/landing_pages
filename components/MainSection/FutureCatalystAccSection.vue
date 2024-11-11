<template>
  <header>
    <div
      v-if="heading"
      :class="[$style.heading, headingLg && $style.headingLg]"
    >
      {{ heading }}
    </div>
    <h2 :class="[$style.title, titleLg && $style.titleLg]">
      <strong>FUTURE CATALYST Accelerator</strong>
      <template v-if="subtitle">
        <br />
        FUTURE CATALYST Accelerator
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
