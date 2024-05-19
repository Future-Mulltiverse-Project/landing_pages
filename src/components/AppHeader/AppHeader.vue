<template>
  <header :class="$style.el">
    <div :class="$style.wrapper">
          <div class="row" :class="$style.rightRow">
            <div class="col" :class="$style.navCol">
              <AppHeaderNav />
            </div>
            <div class="col-auto" :class="$style.btnsCol">
              <div class="row" :class="$style.btnRow">
                <div class="col-auto" :class="$style.toggleBtnCol">
                  <AppHeaderToggleBtn />
                </div>
              </div>
            </div>
          </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import AppHeaderLogo from '~/components/AppHeader/AppHeaderLogo.vue';
import AppHeaderNav from '~/components/AppHeader/AppHeaderNav.vue';
import AppHeaderToggleBtn from '~/components/AppHeader/AppHeaderToggleBtn.vue';
</script>

<style lang="scss" module>
.el {
  @include padding(42px 0 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: z('header');
  background-color: rgb(12, 12, 12, 0.5);
}


.wrapper {
  max-width: rem-calc(1440px);
  margin: 0 auto;

  @media (max-width: 1440px) {
    @include margin(0 $wrapper-padding);
  }

  @include media-breakpoint-down(sm) {
    margin: rem-calc(0 $wrapper-padding-sm);
  }
}

.rightRow {
  align-items: center;
}

.navCol {
  display: none;
  margin-top: -24px !important;
  margin-bottom: 15px;

  @media (min-width: 1341px) {
    display: block;
  }
}

.btnsCol {
  margin-left: auto;
  margin-top: -24px !important;
  margin-bottom: 22px;
}

.btnRow {
  --gutter-x: #{rem-calc(10px)};
}

.btnCol {
  display: none;

  @include media-breakpoint-up(sm) {
    display: block;
  }
}

.toggleBtnCol {
  @media (min-width: 1341px) {
    display: none;
  }
}

.btn {
  padding: rem-calc(10px 28px);
}
</style>
