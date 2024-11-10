<template>
  <section :class="$style.section">
    <AppWrapper>
      <MainSectionHeader
        :class="$style.header"
        :title="`You want to join <strong>our team?</strong>`"
      />
      <NuxtLink to="/" class="btn btn-outline-primary" :class="$style.btn">
        Apply now
      </NuxtLink>
      <div :class="$style.text1">We are also cooperating with over</div>
      <div :class="$style.text2">
        +100 Co-Creators
        <strong>ALL OVER THE WORLD</strong>
      </div>
      <div :class="$style.text3">
        Join the FXPO today, and let's start co-creating the Future together
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
</script>

<style lang="scss" module>
.section {
  @include padding(140px 0 12px);
  text-align: center;
}

.header {
  @include margin-bottom(40px);
}

.btn {
  min-width: rem-calc(200px);
  max-width: 100%;
}

.text1 {
  @include font-size(22px);
  @include margin-top(80px);
  @include margin-bottom(24px);
  line-height: divide(30, 22);
  font-weight: 400;
}

.text2 {
  @include font-size(45px);
  @include margin-bottom(16px);
  line-height: divide(55, 45);
  text-transform: uppercase;

  strong {
    color: $primary;
  }
}
.text3 {
  @include font-size(22px);
  color: $primary;
  line-height: divide(30, 22);
  margin: 0 auto;
  max-width: rem-calc(380px);
}
</style>
