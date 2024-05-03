<template>
  <header :class="$style.header">
    <div :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-auto">
          <div :class="$style.left">
            <NuxtLink to="/" aria-label="FXPO" :class="$style.logo">
              <LogoIcon />
            </NuxtLink>
            <div :class="$style.text">Enter FXPO</div>
          </div>
        </div>
        <div class="col-auto" :class="$style.linksCol">
          <ExploreUserAccount />

          <!--          <div :class="$style.links">-->
          <!--            <NuxtLink to="/" :class="$style.link">-->
          <!--              Onboard-->
          <!--              <RegistrationIcon />-->
          <!--            </NuxtLink>-->
          <!--            <div :class="$style.vline"></div>-->
          <!--            <NuxtLink to="/" :class="$style.link">-->
          <!--              Connect Wallet-->
          <!--              <AddWalletIcon />-->
          <!--            </NuxtLink>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LogoIcon from '~/icons/LogoIcon.vue';
// import AddWalletIcon from '~/icons/AddWalletIcon.vue';
// import RegistrationIcon from '~/icons/RegistrationIcon.vue';
import ExploreUserAccount from '~/components/Explore/ExploreUserAccount.vue';
</script>

<style lang="scss" module>
.header {
  padding: rem-calc(18px 0);
  background-color: #1a1c37;
  position: sticky;
  z-index: z('header');
}

.wrapper {
  margin: 0 auto;
  position: relative;
  max-width: rem-calc(1440px);

  @media (max-width: 1440px) {
    margin: rem-calc(0 $wrapper-padding-sm);
  }
}

.row {
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
}

.logo {
  color: inherit;
  display: inline-block;
}

.logo svg {
  height: rem-calc(60px);
  width: rem-calc(60px);
}

.text {
  @include font-size(24px);
  display: flex;
  align-items: center;
  line-height: divide(30, 24);
  font-weight: 700;

  &::before {
    border-left: 2px solid #3e3e3e;
    content: '';
    display: block;
    height: rem-calc(36px);
    margin: rem-calc(0 16px);
  }
}

.linksCol {
  display: none;

  @include media-breakpoint-up(md) {
    display: block;
  }
}

.links {
  display: flex;
}

.link {
  @include font-size(14px);
  color: inherit;
  align-items: center;
  display: inline-flex;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;

  svg {
    fill: $primary;
    margin-left: rem-calc(12px);
    height: rem-calc(22px);
    width: rem-calc(22px);
  }
}

.vline {
  height: rem-calc(38px);
  border-left: 2px solid #3a3e56;
  margin: rem-calc(0 16px);
}
</style>
