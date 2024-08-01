<template>
  <ExploreLayout>
    <AppWrapper :class="$style.wrapper">
      <LogoIcon :class="$style.logo" />
      <h1 :class="$style.title">
        <strong>experience the future</strong>
        enter fxpo universe
      </h1>
      <h3 :class="$style.btnTitle">Experience the Future today:</h3>
      <div class="row" :class="$style.btnRow">
        <div class="col-auto">
          <button
            class="btn btn-outline-white"
            :disabled="entered === false"
            type="button"
          >
            ENTER FXPO
            <DegreeIcon />
          </button>
        </div>
        <div class="col-auto">
          <NuxtLink to="https://sandbox.futuremultiverse.dev/" class="btn btn-outline-gradient-primary" >
            Onboard
          </NuxtLink>
        </div>
      </div>
      <p :class="$style.text">
        Please Onboard & Connect your Wallet to Enter the FXPO
      </p>
    </AppWrapper>
  </ExploreLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ExploreLayout from '~/components/Layouts/ExploreLayout.vue';
import LogoIcon from '~/icons/LogoIcon.vue';
import DegreeIcon from '~/icons/DegreeIcon.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';

const entered = ref(false);
</script>

<style lang="scss" module>
.wrapper {
  text-align: center;
}

.logo {
  @include rfs(120px, width);
  @include rfs(120px, height);
  @include margin-bottom(30px);
  min-height: rem-calc(64px);
  min-width: rem-calc(64px);
}

.title {
  @include font-size(50px);
  @include margin-bottom(52px);
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(640, 50);
  text-transform: uppercase;

  > * {
    color: $primary;
  }
}

.btnRow {
  --gutter-x: #{rem-calc(24px)};
  --gutter-y: #{rem-calc(10px)};
  justify-content: center;

  :global(.col-auto) {
    flex: 0 1 rem-calc(204px);
    min-width: fit-content;
    max-width: 100%;
  }

  :global(.btn) {
    --btn-disabled-opacity: 0.3;
    width: 100%;

    svg {
      margin-left: rem-calc(10px);
      height: rem-calc(14px);
      width: rem-calc(22px);
    }
  }
}

.btnTitle {
  @include font-size(22px);
  @include margin-bottom(38px);
  font-weight: 600;
  color: $primary;
}

.btnLinkRow {
  --gutter-y: #{rem-calc(4px)};
  justify-content: center;
  position: relative;
  z-index: 1;
}

.btnLink {
  @include font-size(14px);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  transition: color 150ms ease-in-out;

  &:hover {
    color: #fff;
  }

  svg {
    @include margin-right(7px);
    width: rem-calc(16px);
    height: rem-calc(18px);
  }
}

.text {
  @include font-size(16px);
  @include margin-top(24px);
  font-family: 'Nunito Sans', sans-serif;
  line-height: divide(24, 16);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(300, 16);
}
</style>
